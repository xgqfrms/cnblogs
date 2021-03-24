#!/usr/bin/env bash

# echo "^-v-^ copying files ..." && yarn copy
echo "^-v-^ create folder ..." && mkdir docs
echo "^-v-^ copying CNAME ..." && cp ./CNAME ./docs
echo "^-v-^ copying files ..." && cp -r ./website/public/* ./docs
