#!/usr/bin/env bash

_build_styles() {
    node-sass -q --importer node_modules/node-sass-magic-importer/dist/cli.js -o styles/internal/css styles/internal/scss
    node-sass -q --importer node_modules/node-sass-magic-importer/dist/cli.js -o styles/css styles/scss
}

_clean() {
    rm -rf dist
    rm -rf styles/css
}

_common-build() {
    mkdir -p dist/internal
    cp -rf src/internal/assets dist/internal/
    cp -rf src/internal/translations dist/internal/

    _build_styles
}

build() {
    _clean
    _common-build
    tsc -p tsconfig.build.json
}

build-dev() {
    _clean
    _common-build
    tsc -p tsconfig.dev.json
}

build-dev-watch() {
    _common-build
    _build_styles
    tsc --watch -p tsconfig.dev.json
}

FLAG=$1
if [ "$FLAG" = "--dev" ]; then
    build-dev
elif [ "$FLAG" = "--dev-watch" ]; then
    build-dev-watch
else
    build
fi
