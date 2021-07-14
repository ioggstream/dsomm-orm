#!/usr/bin/env python3
import collections.abc
from pathlib import Path
from typing import Dict, List

from yaml import safe_load as yaml_load

queries = yaml_load(Path("mysql-queries.yaml").read_text())


def dict_merge(*args, add_keys=True):
    assert len(args) >= 2, "dict_merge requires at least two dicts to merge"
    rtn_dct = args[0].copy()
    merge_dicts = args[1:]
    for merge_dct in merge_dicts:
        if add_keys is False:
            merge_dct = {
                key: merge_dct[key] for key in set(rtn_dct).intersection(set(merge_dct))
            }
        for k, v in merge_dct.items():
            if not rtn_dct.get(k):
                rtn_dct[k] = v
            elif k in rtn_dct and not isinstance(rtn_dct[k], v.__class__):
                raise TypeError(
                    f"Overlapping keys exist with different types: original is {type(rtn_dct[k])}, new value is {type(v)}"
                )
            elif isinstance(rtn_dct[k], dict) and isinstance(
                merge_dct[k], collections.abc.Mapping
            ):
                rtn_dct[k] = dict_merge(rtn_dct[k], merge_dct[k], add_keys=add_keys)
            elif isinstance(v, list):
                for list_value in v:
                    if list_value not in rtn_dct[k]:
                        rtn_dct[k].append(list_value)
            else:
                rtn_dct[k] = v
    return rtn_dct


def load_activities(fpath="downloads/data/dimensions-subdimensions-activties") -> Dict:
    ret = {}
    fpath = Path(fpath)
    if not fpath.exists():
        raise OSError(fpath.absolute())
    for f in fpath.glob("*/*"):
        data = yaml_load(Path(f).read_text())
        for dimension, value in data.items():
            if dimension.startswith("_"):
                # skip metadata
                continue
            if dimension not in ret:
                ret[dimension] = {}
                print("Found " + dimension)
            ret[dimension] = dict_merge(ret[dimension], value)
    return ret


def load_activities_as_table() -> List:
    dimensions = load_activities()
    activities = [
        (dimension, subdimension, activity, data)
        for dimension, v in dimensions.items()
        if not dimension.startswith("_")
        for subdimension, activity_d in v.items()
        if not subdimension.startswith("_")
        for activity, data in activity_d.items()
        if not activity.startswith("_")
    ]
    return activities


def test_load_activities():
    ret = load_activities()
    assert "BuildAndDeployment" in ret
