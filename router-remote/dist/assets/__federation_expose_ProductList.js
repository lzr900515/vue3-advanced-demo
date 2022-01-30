import {importShared} from './__federation_fn_import.js'
const {useStore,mapState,mapActions} = await importShared('vuex')
import './vendor.7493a488.js';
import { shop } from './shop.c7f7d4c7.js';
import { _export_sfc } from './plugin-vue_export-helper.b33e694d.js';
const {ElButton} = await importShared('element-plus')
const {onBeforeMount,resolveComponent,openBlock,createElementBlock,createElementVNode:createBaseVNode,Fragment,renderList,createTextVNode,toDisplayString,createVNode,withCtx} = await importShared('vue')

// initial state
const state = () => ({
  all: []
});

// getters
const getters = {};

// actions
const actions = {
  getAllProducts ({ commit }) {
    shop.getProducts(products => {
      commit('setProducts', products);
    });
  }
};

// mutations
const mutations = {
  setProducts (state, products) {
    state.all = products;
  },

  decrementProductInventory (state, { id }) {
    const product = state.all.find(product => product.id === id);
    product.inventory--;
  }
};

var products = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};

const _sfc_main = {
  name: 'ProductList',
  components: {ElButton},
  setup() {
    const store = useStore();
    onBeforeMount(() => {
      if (!store.hasModule("products")) {
        store.registerModule("products", products);
      }
      store.dispatch('products/getAllProducts');
    });
  },
  computed: mapState({
    products: state => state.products.all
  }),
  methods: mapActions('cart', [
    'addProductToCart'
  ]),
  // 迁移到 onBeforeMount
  // created() {
  //   this.$store.dispatch('products/getAllProducts')
  // }
};

const _hoisted_1 = { class: "products" };
const _hoisted_2 = /*#__PURE__*/createBaseVNode("h2", null, "Products", -1);
const _hoisted_3 = /*#__PURE__*/createBaseVNode("br", null, null, -1);
const _hoisted_4 = /*#__PURE__*/createTextVNode(" Add to cart ");

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_button = resolveComponent("el-button");

  return (openBlock(), createElementBlock("div", _hoisted_1, [
    _hoisted_2,
    createBaseVNode("ul", null, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.products, (product) => {
        return (openBlock(), createElementBlock("li", {
          key: product.id
        }, [
          createTextVNode(toDisplayString(product.title) + " - " + toDisplayString(product.price | _ctx.currency) + " ", 1),
          _hoisted_3,
          createVNode(_component_el_button, {
            disabled: !product.inventory,
            onClick: $event => (_ctx.addProductToCart(product))
          }, {
            default: withCtx(() => [
              _hoisted_4
            ]),
            _: 2
          }, 1032, ["disabled", "onClick"])
        ]))
      }), 128))
    ])
  ]))
}
var ProductList = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render]]);

export { ProductList as default };
