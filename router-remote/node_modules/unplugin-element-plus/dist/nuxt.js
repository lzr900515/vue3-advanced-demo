"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkZAFSI7ZYjs = require('./chunk-ZAFSI7ZY.js');

// src/nuxt.ts
function nuxt_default(options) {
  this.extendBuild((config) => {
    config.plugins = config.plugins || [];
    config.plugins.unshift(_chunkZAFSI7ZYjs.src_default.webpack(options));
  });
  this.nuxt.hook("vite:extend", async (vite) => {
    vite.config.plugins = vite.config.plugins || [];
    vite.config.plugins.push(_chunkZAFSI7ZYjs.src_default.vite(options));
  });
}


module.exports = nuxt_default;
exports.default = module.exports;