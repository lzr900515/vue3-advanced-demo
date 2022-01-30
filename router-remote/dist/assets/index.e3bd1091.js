import { ref, resolveComponent, openBlock, createElementBlock, createVNode, pushScopeId, popScopeId, createElementVNode as createBaseVNode, createApp } from './__federation_shared_vue.js';
import { createStore } from './__federation_shared_vuex.js';
import ElementPlus from './__federation_expose_ElementPlus.js';
import ProductList from './__federation_expose_ProductList.js';
import ShoppingCart from './__federation_expose_ShoppingCart.js';
import { _export_sfc } from './plugin-vue_export-helper.b33e694d.js';
import defaults from './__federation_shared_element-plus.js';

var store = createStore({
    state() {
        return {
            cartItems: 10
        }
    }
});

var App_vue_vue_type_style_index_0_scoped_true_lang = '';

const _sfc_main = {
  components: {
    ElementPlus, ProductList, ShoppingCart
  },
  setup() {
    const count = ref(0);
    const inc = () => {
      count.value++;
    };

    return {
      count,
      inc,
    };
  },
};

const _withScopeId = n => (pushScopeId("data-v-66eb5b3f"),n=n(),popScopeId(),n);
const _hoisted_1 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/createBaseVNode("h3", null, "router-remote App", -1));
const _hoisted_2 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/createBaseVNode("h1", null, "Shopping Cart Example", -1));
const _hoisted_3 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/createBaseVNode("hr", null, null, -1));
const _hoisted_4 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/createBaseVNode("hr", null, null, -1));

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ElementPlus = resolveComponent("ElementPlus");
  const _component_ProductList = resolveComponent("ProductList");
  const _component_ShoppingCart = resolveComponent("ShoppingCart");

  return (openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createVNode(_component_ElementPlus),
    _hoisted_2,
    _hoisted_3,
    createVNode(_component_ProductList),
    _hoisted_4,
    createVNode(_component_ShoppingCart)
  ]))
}
var App = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__scopeId',"data-v-66eb5b3f"]]);

var index = '';

const app = createApp(App);

app.use(store);
app.use(defaults);

app.mount("#root");
