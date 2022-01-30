import {importShared} from './__federation_fn_import.js'
import { _export_sfc } from './plugin-vue_export-helper.b33e694d.js';
const {resolveComponent,openBlock,createBlock,withCtx,createElementVNode:createBaseVNode,pushScopeId,popScopeId,onMounted,onUnmounted,onBeforeMount,onBeforeUpdate,onUpdated,onBeforeUnmount,onErrorCaptured,onRenderTracked,onRenderTriggered,onActivated,onDeactivated,createVNode,createTextVNode} = await importShared('vue')
import { use, init, install, install$1, install$2, install$3, install$4, install$5, installLabelLayout, installUniversalTransition, install$6 } from './vendor.7493a488.js';
const {ElCard,ElSubMenu,ElMenuItemGroup,ElMenuItem} = await importShared('element-plus')

var Introduce_vue_vue_type_style_index_0_scoped_true_lang = '';

const _sfc_main$2 = {
  name: 'Introduce',
  setup() {
    console.log(`The router-remote‘s  Introduce call its own setup.`);
    const goGithub = () => {
      console.log('goGithub');
      window.open('https://github.com/originjs/vite-plugin-federation', 'target');
    };

    return {
      goGithub
    }
  }
};

const _withScopeId$1 = n => (pushScopeId("data-v-f3fe090a"),n=n(),popScopeId(),n);
const _hoisted_1$2 = /*#__PURE__*/ _withScopeId$1(() => /*#__PURE__*/createBaseVNode("h1", null, "Introduce.vue", -1));
const _hoisted_2$2 = /*#__PURE__*/ _withScopeId$1(() => /*#__PURE__*/createBaseVNode("div", { style: {"line-height":"30px"} }, " Use vite-plugin-federation to split the system into two parts, `router-host` (Host) and `router-remote` (Remote), and work together. ", -1));
const _hoisted_3$2 = /*#__PURE__*/ _withScopeId$1(() => /*#__PURE__*/createBaseVNode("h1", null, "Development and deployment documentation", -1));
const _hoisted_4$2 = /*#__PURE__*/ _withScopeId$1(() => /*#__PURE__*/createBaseVNode("div", { style: {"line-height":"30px"} }, [
  /*#__PURE__*/createBaseVNode("ul", { style: {"font-weight":"bold"} }, [
    /*#__PURE__*/createBaseVNode("li", null, "http://localhost:5004/"),
    /*#__PURE__*/createBaseVNode("li", null, "http://localhost:5005/")
  ])
], -1));
const _hoisted_5$2 = /*#__PURE__*/ _withScopeId$1(() => /*#__PURE__*/createBaseVNode("li", null, "Github", -1));
const _hoisted_6$1 = [
  _hoisted_5$2
];
const _hoisted_7$1 = /*#__PURE__*/ _withScopeId$1(() => /*#__PURE__*/createBaseVNode("h1", null, "Technical selection", -1));
const _hoisted_8$1 = /*#__PURE__*/ _withScopeId$1(() => /*#__PURE__*/createBaseVNode("ul", { style: {"font-weight":"bold"} }, [
  /*#__PURE__*/createBaseVNode("li", null, "Vue 3.x"),
  /*#__PURE__*/createBaseVNode("li", null, "Vite 2.x"),
  /*#__PURE__*/createBaseVNode("li", null, "Vue-Router 4.x"),
  /*#__PURE__*/createBaseVNode("li", null, "Element-Plus(Adapt to the new Vue 3.x PC-side component library)"),
  /*#__PURE__*/createBaseVNode("li", null, "Echarts 5.0"),
  /*#__PURE__*/createBaseVNode("li", null, "axios"),
  /*#__PURE__*/createBaseVNode("li", null, "wangEditor")
], -1));

function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_card = resolveComponent("el-card");

  return (openBlock(), createBlock(_component_el_card, { class: "account-container" }, {
    default: withCtx(() => [
      _hoisted_1$2,
      _hoisted_2$2,
      _hoisted_3$2,
      _hoisted_4$2,
      createBaseVNode("ul", {
        class: "course",
        onClick: _cache[0] || (_cache[0] = (...args) => ($setup.goGithub && $setup.goGithub(...args)))
      }, _hoisted_6$1),
      _hoisted_7$1,
      _hoisted_8$1
    ]),
    _: 1
  }))
}
var Introduce = /*#__PURE__*/_export_sfc(_sfc_main$2, [['render',_sfc_render$2],['__scopeId',"data-v-f3fe090a"]]);

var Dashboard_vue_vue_type_style_index_0_scoped_true_lang = '';

// 注册必须的组件
use([
  install,
  install$1,
  install$2,
  install$3,
  install$4,
  install$5,
  installLabelLayout,
  installUniversalTransition,
  install$6
]);

let myChart = null;
const _sfc_main$1 = {
  name: 'Dashboard',
  components: {ElCard},
  setup() {
    console.log(`The router-remote‘s Dashboard call its own setup.`);
    onMounted(() => {
      console.log(`The router-remote‘s Dashboard onMounted`);
      myChart = init(document.getElementById('zoom'));
      myChart.setOption({
        title: {
          text: 'Example of getting started with ECharts'
        },
        tooltip: {},
        xAxis: {
          data: ['Shirt', 'Wool sweater', 'Chiffon shirt', 'Pants', 'High heel', 'Sock']
        },
        yAxis: {},
        series: [
          {
            name: 'Sales',
            type: 'bar',
            data: [5, 22, 33, 11, 15, 29]
          }
        ]
      });
    });
    onUnmounted(() => {
      myChart.dispose();
    });
    onBeforeMount(() => {
      console.log('onBeforeMount');
    });
    onMounted(() => {
      console.log('onMounted');
    });
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate ');
    });
    onUpdated(() => {
      console.log('onUpdated');
    });
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount');
    });
    onUnmounted(() => {
      console.log('onUnmounted');
    });
    onErrorCaptured(() => {
      console.log('onErrorCaptured');
    });
    onRenderTracked(() => {
      console.log('onRenderTracked');
    });
    onRenderTriggered(() => {
      console.log('onRenderTriggered ');
    });
    onActivated(() => {
      console.log('onActivated');
    });
    onDeactivated(() => {
      console.log('onDeactivated');
    });
  }
};

const _withScopeId = n => (pushScopeId("data-v-68a19738"),n=n(),popScopeId(),n);
const _hoisted_1$1 = { class: "order" };
const _hoisted_2$1 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/createBaseVNode("div", { class: "card-header" }, [
  /*#__PURE__*/createBaseVNode("span", null, "Today's orders")
], -1));
const _hoisted_3$1 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/createBaseVNode("div", { class: "item" }, "1888", -1));
const _hoisted_4$1 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/createBaseVNode("div", { class: "card-header" }, [
  /*#__PURE__*/createBaseVNode("span", null, "Daily live today")
], -1));
const _hoisted_5$1 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/createBaseVNode("div", { class: "item" }, "36271", -1));
const _hoisted_6 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/createBaseVNode("div", { class: "card-header" }, [
  /*#__PURE__*/createBaseVNode("span", null, "Conversion rates")
], -1));
const _hoisted_7 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/createBaseVNode("div", { class: "item" }, "20%", -1));
const _hoisted_8 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/createBaseVNode("div", { id: "zoom" }, null, -1));

function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_card = resolveComponent("el-card");

  return (openBlock(), createBlock(_component_el_card, { class: "introduce" }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1$1, [
        createVNode(_component_el_card, { class: "order-item" }, {
          header: withCtx(() => [
            _hoisted_2$1
          ]),
          default: withCtx(() => [
            _hoisted_3$1
          ]),
          _: 1
        }),
        createVNode(_component_el_card, { class: "order-item" }, {
          header: withCtx(() => [
            _hoisted_4$1
          ]),
          default: withCtx(() => [
            _hoisted_5$1
          ]),
          _: 1
        }),
        createVNode(_component_el_card, { class: "order-item" }, {
          header: withCtx(() => [
            _hoisted_6
          ]),
          default: withCtx(() => [
            _hoisted_7
          ]),
          _: 1
        })
      ]),
      _hoisted_8
    ]),
    _: 1
  }))
}
var Dashboard = /*#__PURE__*/_export_sfc(_sfc_main$1, [['render',_sfc_render$1],['__scopeId',"data-v-68a19738"]]);

const _sfc_main = {
  components: {ElSubMenu, ElMenuItemGroup, ElMenuItem, Introduce, Dashboard},
  created() {
    const routes =
        [{
          path: '/introduce',
          name: 'introduce',
          component: Introduce
        }, {
          path: '/dashboard',
          name: 'dashboard',
          // component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue')
          component: Dashboard
        }];

    // 将自己 router 添加到 router-remote `routes`中
    routes.forEach(curRoute => {
      console.log(`The router-remote add its own routes ${curRoute.path}.`);
      this.$router.addRoute(curRoute);
    });
  },
};

const _hoisted_1 = /*#__PURE__*/createBaseVNode("span", null, "Dashboard", -1);
const _hoisted_2 = /*#__PURE__*/createBaseVNode("i", { class: "el-icon-data-line" }, null, -1);
const _hoisted_3 = /*#__PURE__*/createTextVNode("Introduce");
const _hoisted_4 = /*#__PURE__*/createBaseVNode("i", { class: "el-icon-odometer" }, null, -1);
const _hoisted_5 = /*#__PURE__*/createTextVNode("Dashboard");

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_menu_item = resolveComponent("el-menu-item");
  const _component_el_menu_item_group = resolveComponent("el-menu-item-group");
  const _component_el_sub_menu = resolveComponent("el-sub-menu");

  return (openBlock(), createBlock(_component_el_sub_menu, { index: "1" }, {
    title: withCtx(() => [
      _hoisted_1
    ]),
    default: withCtx(() => [
      createVNode(_component_el_menu_item_group, null, {
        default: withCtx(() => [
          createVNode(_component_el_menu_item, { index: "/introduce" }, {
            default: withCtx(() => [
              _hoisted_2,
              _hoisted_3
            ]),
            _: 1
          }),
          createVNode(_component_el_menu_item, { index: "/dashboard" }, {
            default: withCtx(() => [
              _hoisted_4,
              _hoisted_5
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  }))
}
var ElSubMenuDashboard = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render]]);

export { ElSubMenuDashboard as default };
