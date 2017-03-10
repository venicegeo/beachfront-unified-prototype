#!/bin/bash -ae

ARCHIVE_FILE='beachfront.zip'
NODE_ENV=production

rm -f $ARCHIVE_FILE


pushd ui > /dev/null
npm run build
popd > /dev/null

echo -e "\nBuilding $ARCHIVE_FILE..."
echo
zip -r $ARCHIVE_FILE beachfront Procfile requirements.txt -x '*/__pycache__/*' -x '*.pyc'

echo -e "\nSUCCESS"
