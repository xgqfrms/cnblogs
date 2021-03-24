#!/usr/bin/env bash

# echo "^-v-^ cleaning files ..." && yarn clean
# echo "^-v-^ cleaning files ..." && rm -rf ./docs/*
# no yes/no ??? bug
# echo "^-v-^ cleaning files ..." && rm -Rf ./docs/*

echo "^-v-^ cleaning files ..." && rimraf ./docs
# echo "^-v-^ cleaning files ..." && rimraf ./docs/*.*
# echo "^-v-^ cleaning files ..." && rimraf ./docs/**/*.*

