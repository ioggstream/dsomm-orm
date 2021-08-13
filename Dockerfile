FROM python:3.9
RUN pip install tox
ENTRYPOINT tox -e start
