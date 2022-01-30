import {importShared} from './__federation_fn_import.js'
import { _export_sfc } from './plugin-vue_export-helper.b33e694d.js';
const {openBlock,createElementBlock,pushScopeId,popScopeId,createElementVNode:createBaseVNode} = await importShared('vue')

var Footer_vue_vue_type_style_index_0_scoped_true_lang = '';

const _sfc_main = {
  name: 'Footer'
};

const _withScopeId = n => (pushScopeId("data-v-1b443e3e"),n=n(),popScopeId(),n);
const _hoisted_1 = { class: "footer" };
const _hoisted_2 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/createBaseVNode("div", { class: "left" }, "Copyright © 2021 All rights reserved.", -1));
const _hoisted_3 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/createBaseVNode("div", { class: "right" }, [
  /*#__PURE__*/createBaseVNode("a", {
    target: "_blank",
    href: "https://github.com/originjs/vite-plugin-federation"
  }, "vite-plugin-federation")
], -1));
const _hoisted_4 = [
  _hoisted_2,
  _hoisted_3
];

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", _hoisted_1, _hoisted_4))
}
var Footer = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__scopeId',"data-v-1b443e3e"]]);

export { Footer as default };
