git-get(){
        # Download a specific directory from a git repo without cloning
        #  everything.
        local repo="$1"
        local dirpath="$2"
        local branch="$3"
        local gitbase=""
        local repodir=$(basename $repo)
        local tmpdir_base="$(mktemp -d)"
        local tmpdir="${tmpdir_base}/${repodir}"

        if [ -n "$branch" ]; then
                branch="--branch $branch"
        fi
        git clone --no-checkout --filter=tree:0 ${branch} "${gitbase}${repo}" "${tmpdir}"
        (cd "${tmpdir}" && git sparse-checkout set "$dirpath")
        cp -rp "${tmpdir}/${dirpath}" .
        rm "${tmpdir_base}" -fr

}

mkdir -p downloads
cd downloads
git-get https://github.com/OWASP/samm "Supporting Resources/v2.0/Datamodel/Datafiles"
git-get https://github.com/wurstbrot/DevSecOps-MaturityModel data-new
#git-get https://github.com/ioggstream/DevSecOps-MaturityModel data-new ioggstream-orm-mysql
find data-new -name \*.yaml -exec sed -i 's,v-security-testing|\(\w\)|\(\w\),V-ST-\2-\1,g' {} \;
find data-new -name \*.yaml -exec sed -i 's,o-incident-management|\(\w\)|\(\w\),O-IM-\2-\1,g' {} \;
find data-new -name \*.yaml -exec sed -i 's,o-environment-management|\(\w\)|\(\w\),O-EM-\2-\1,g' {} \;
find data-new -name \*.yaml -exec sed -i 's,i-secure-deployment|\(\w\)|\(\w\),I-SD-\2-\1,g' {} \;
find data-new -name \*.yaml -exec sed -i 's,i-secure-build|\(\w\)|\(\w\),I-SB-\2-\1,g' {} \;
find data-new -name \*.yaml -exec sed -i 's,i-defect-management|\(\w\)|\(\w\),I-DM-\2-\1,g' {} \;
