#!/usr/bin/env bash

# echo "^-v-^ copying files ..." && yarn copy
echo "^-v-^ copying CNAME ..." && cp ./CNAME ./docs
echo "^-v-^ copying files ..." && cp -r ./website/public/* ./docs
