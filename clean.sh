#!/usr/bin/env bash

# echo "^-v-^ cleaning files ..." && yarn clean
# echo "^-v-^ cleaning files ..." && rm -rf ./docs/*
# no yes/no ??? bug
# echo "^-v-^ cleaning files ..." && rm -Rf ./docs/*

# delete docs folder
echo "^-v-^ cleaning files ..." && ./node_modules/rimraf/bin.js ./docs
# echo "^-v-^ cleaning files ..." && ./node_modules/rimraf/bin.js ./docs/

# delete all folders and files in docs folder
# echo "^-v-^ cleaning files ..." && ./node_modules/rimraf/bin.js ./docs/*

# only delete all files in docs folder
# echo "^-v-^ cleaning files ..." && ./node_modules/rimraf/bin.js ./docs/*.*

# only delete all files in docs folder & sub-folders
# echo "^-v-^ cleaning files ..." && ./node_modules/rimraf/bin.js ./docs/**/*.*

# echo "^-v-^ cleaning files ..." && rimraf ./docs
# echo "^-v-^ cleaning files ..." && rimraf ./docs/*.*
# echo "^-v-^ cleaning files ..." && rimraf ./docs/**/*.*

