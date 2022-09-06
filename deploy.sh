#!/bin/bash

# SFTP_LOGIN_INFO=allan@nakoda ./deploy.sh

cd `dirname $0`

# of course build it first!
npm run build

# upload the build directory to my website
# sorry I couldn't get recursive to work with scp or sftp

# use something like this for your SFTP_LOGIN_INFO:
#   -i ../myServersSecretKey   allan@nakoda
sftp $SFTP_LOGIN_INFO   << DARWIN

cd /var/www/x/3billion
pwd
lcd build
lpwd
put *

cd chromos
lcd chromos
put *

cd  ../static/css
lcd ../static/css
put *

cd ../js
lcd ../js
put *

cd ../media
lcd ../media
put *

DARWIN

exit

# put -r build/* /usr/local/nginx/ant-analyze
#
#
# put build/*.* /usr/local/nginx/ant-analyze
# put -R build/static /usr/local/nginx/ant-analyze
#
#
# cd /usr/local/nginx/ant-analyze
# put -R build
# put -r build/static/*
#

echo Done.  3billion ready for action.
