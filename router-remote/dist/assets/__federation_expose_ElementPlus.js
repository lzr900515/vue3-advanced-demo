import {importShared} from './__federation_fn_import.js'
import './vendor.7493a488.js';
import { _export_sfc } from './plugin-vue_export-helper.b33e694d.js';
const {ElButton} = await importShared('element-plus')
const {resolveComponent,openBlock,createElementBlock,createElementVNode:createBaseVNode,toDisplayString,normalizeClass,createVNode,withCtx,createTextVNode} = await importShared('vue')

const gray = "_gray_13axl_2";
var style0 = {
	gray: gray
};

const _sfc_main = {
  components: {ElButton},
  computed: {
    cartCount() {
      return this.$store.state.cartItems
    }
  }, methods: {
    increase() {
      console.log(`method:increase: ${this.$store.state.cartItems}`);
      this.$store.state.cartItems++;
    }
  }
};

const _hoisted_1 = { id: "router-remote-element-plus" };
const _hoisted_2 = /*#__PURE__*/createTextVNode("ElButton");

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_button = resolveComponent("el-button");

  return (openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("p", {
      id: "cart-item",
      class: normalizeClass(_ctx.$style.gray)
    }, "cartItems from vuex: " + toDisplayString($options.cartCount), 3),
    createVNode(_component_el_button, { onClick: $options.increase }, {
      default: withCtx(() => [
        _hoisted_2
      ]),
      _: 1
    }, 8, ["onClick"])
  ]))
}

const cssModules = {};
cssModules["$style"] = style0;
var ElementPlus = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__cssModules',cssModules]]);

export { ElementPlus as default };
