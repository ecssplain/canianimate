

echo =========================
echo GZIP All Html, css and js
echo =========================
mkdir _deploy
cp 404.html _deploy
cp index.html _deploy

find _deploy/ -iname '*.html' -exec gzip -n {} +
find _deploy/ -iname "*.gz" -exec bash -c 'mv "$0" "${0%\.gz}"' {} \;
echo done.

echo ==================
echo Syncing to S3
echo ==================

# sync gzipped html files
s3cmd sync --progress --acl-public --cf-invalidate --rr --mime-type="text/html; charset=utf-8" --add-header 'Content-Encoding:gzip' --add-header 'Cache-Control: max-age=300, must-revalidate' _deploy/ s3://canianimate.com/ --exclude '*.*' --include '*.html'

# sync non gzipped, non js/css/image files
#s3cmd sync --progress --acl-public --cf-invalidate _deploy/ s3://seancurtis.com/ --exclude '*.sh' --exclude 'assets/*' --exclude '*.html' --exclude '*.ico' --exclude '*.js' --exclude '*.css' --exclude '*.png' --exclude '*.svg'

# sync gzipped css and js to static bucket
#s3cmd sync --progress --acl-public --cf-invalidate --add-header 'Content-Encoding:gzip' --add-header 'Cache-Control: max-age=86400' _deploy/ s3://seancurtis.com/ --exclude '*.*' --include '*.js' --include '*.css' --include '*.ico' --include '*.svg'

# sync all non gzipped css, js and image files to the static bucket (e.g. images)
#s3cmd sync --progress --acl-public --cf-invalidate --add-header 'Cache-Control: max-age=86400' _deploy/ s3://seancurtis.com/ --exclude '*.*'  --include '*.png'

echo ==================
echo Cleaning up _deploy
echo ==================

rm -rf _deploy

exit 0