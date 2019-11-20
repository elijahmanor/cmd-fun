#!/usr/bin/env node

require('@babel/register')({
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: ['@babel/plugin-transform-modules-commonjs'],
})
require('@babel/polyfill')
require('./App.js')
