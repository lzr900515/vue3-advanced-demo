import {importShared} from './__federation_fn_import.js'
const {onBeforeMount,resolveComponent,openBlock,createElementBlock,withDirectives,vShow,createElementVNode:createBaseVNode,Fragment,renderList,toDisplayString,createVNode,withCtx,createTextVNode} = await importShared('vue')
const {useStore,mapState,mapGetters} = await importShared('vuex')
import './vendor.7493a488.js';
import { shop } from './shop.c7f7d4c7.js';
import { _export_sfc } from './plugin-vue_export-helper.b33e694d.js';
const {ElButton} = await importShared('element-plus')

// initial state
// shape: [{ id, quantity }]
const state = () => ({
  items: [],
  checkoutStatus: null
});

// getters
const getters = {
  cartProducts: (state, getters, rootState) => {
    return state.items.map(({ id, quantity }) => {
      const product = rootState.products.all.find(product => product.id === id);
      return {
        id: product.id,
        title: product.title,
        price: product.price,
        quantity
      }
    })
  },

  cartTotalPrice: (state, getters) => {
    return getters.cartProducts.reduce((total, product) => {
      return total + product.price * product.quantity
    }, 0)
  }
};

// actions
const actions = {
  checkout ({ commit, state }, products) {
    const savedCartItems = [...state.items];
    commit('setCheckoutStatus', null);
    // empty cart
    commit('setCartItems', { items: [] });
    shop.buyProducts(
      products,
      () => commit('setCheckoutStatus', 'successful'),
      () => {
        commit('setCheckoutStatus', 'failed');
        // rollback to the cart saved before sending the request
        commit('setCartItems', { items: savedCartItems });
      }
    );
  },

  addProductToCart ({ state, commit }, product) {
    commit('setCheckoutStatus', null);
    if (product.inventory > 0) {
      const cartItem = state.items.find(item => item.id === product.id);
      if (!cartItem) {
        commit('pushProductToCart', { id: product.id });
      } else {
        commit('incrementItemQuantity', cartItem);
      }
      // remove 1 item from stock
      commit('products/decrementProductInventory', { id: product.id }, { root: true });
    }
  }
};

// mutations
const mutations = {
  pushProductToCart (state, { id }) {
    state.items.push({
      id,
      quantity: 1
    });
  },

  incrementItemQuantity (state, { id }) {
    const cartItem = state.items.find(item => item.id === id);
    cartItem.quantity++;
  },

  setCartItems (state, { items }) {
    state.items = items;
  },

  setCheckoutStatus (state, status) {
    state.checkoutStatus = status;
  }
};

var cart = {
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
      if (!store.hasModule("cart")) {
        store.registerModule("cart", cart);
      }
    });
  },
  computed: {
    ...mapState({
      checkoutStatus: state => state.cart.checkoutStatus
    }),
    ...mapGetters('cart', {
      products: 'cartProducts',
      total: 'cartTotalPrice'
    })
  },
  methods: {
    checkout(products) {
      this.$store.dispatch('cart/checkout', products);
    }
  }
};

const _hoisted_1 = { class: "cart" };
const _hoisted_2 = /*#__PURE__*/createBaseVNode("h2", null, "Your Cart", -1);
const _hoisted_3 = /*#__PURE__*/createBaseVNode("i", null, "Please add some products to cart.", -1);
const _hoisted_4 = [
  _hoisted_3
];
const _hoisted_5 = /*#__PURE__*/createTextVNode("Checkout");

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_button = resolveComponent("el-button");

  return (openBlock(), createElementBlock("div", _hoisted_1, [
    _hoisted_2,
    withDirectives(createBaseVNode("p", null, _hoisted_4, 512), [
      [vShow, !_ctx.products.length]
    ]),
    createBaseVNode("ul", null, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.products, (product) => {
        return (openBlock(), createElementBlock("li", {
          key: product.id
        }, toDisplayString(product.title) + " - " + toDisplayString(product.price | _ctx.currency) + " x " + toDisplayString(product.quantity), 1))
      }), 128))
    ]),
    createBaseVNode("p", null, "Total: " + toDisplayString(_ctx.total | _ctx.currency), 1),
    createBaseVNode("p", null, [
      createVNode(_component_el_button, {
        disabled: !_ctx.products.length,
        onClick: _cache[0] || (_cache[0] = $event => ($options.checkout(_ctx.products)))
      }, {
        default: withCtx(() => [
          _hoisted_5
        ]),
        _: 1
      }, 8, ["disabled"])
    ]),
    withDirectives(createBaseVNode("p", null, "Checkout " + toDisplayString(_ctx.checkoutStatus) + ".", 513), [
      [vShow, _ctx.checkoutStatus]
    ])
  ]))
}
var ShoppingCart = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render]]);

export { ShoppingCart as default };
