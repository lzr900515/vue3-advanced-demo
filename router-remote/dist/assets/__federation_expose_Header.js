import {importShared} from './__federation_fn_import.js'
const {useRouter} = await importShared('vue-router')
import './vendor.7493a488.js';
import { pathMap, getUserInfo, localRemove } from './remoteUtils.ffd59378.js';
import { _export_sfc } from './plugin-vue_export-helper.b33e694d.js';
const {ElPopover,ElTag} = await importShared('element-plus')
const {reactive,onMounted,toRefs,resolveComponent,openBlock,createElementBlock,createElementVNode:createBaseVNode,createCommentVNode,toDisplayString,createVNode,withCtx,createTextVNode,pushScopeId,popScopeId} = await importShared('vue')

var Header_vue_vue_type_style_index_0_scoped_true_lang = '';

var Header_vue_vue_type_style_index_1_lang = '';

const _sfc_main = {
  name: 'Header',
  components: {ElPopover, ElTag},
  setup() {
    console.log(`The router-remote‘s  Header call its own setup.`);
    const router = useRouter();
    const state = reactive({
      name: 'dashboard',
      userInfo: {},
      hasBack: false
    });
    onMounted(() => {
      router.afterEach((to) => {
        const {id} = to.query;
        state.name = pathMap[to.name];
        if (id && to.name === 'add') {
          state.name = '编辑商品';
        }
        state.hasBack = ['level2', 'level3', 'order_detail'].includes(to.name);
      });
      const pathname = window.location.hash.split('/')[1] || '';
      if (!['login'].includes(pathname)) {
        getUserInfo$1();
      }
    });
    const getUserInfo$1 = () => {
      const userInfo = getUserInfo();
      state.userInfo = userInfo;
    };
    const logout = () => {
      console.log("-----logout-----");
      localRemove('token');
      window.location.reload();
    };
    const back = () => {
      router.back();
    };
    return {
      ...toRefs(state),
      logout,
      back
    }
  }
};

const _withScopeId = n => (pushScopeId("data-v-75ee9300"),n=n(),popScopeId(),n);
const _hoisted_1 = { class: "header" };
const _hoisted_2 = { class: "left" };
const _hoisted_3 = { style: {"font-size":"20px"} };
const _hoisted_4 = { class: "right" };
const _hoisted_5 = { class: "author" };
const _hoisted_6 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/createBaseVNode("i", { class: "icon el-icon-s-custom" }, null, -1));
const _hoisted_7 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/createBaseVNode("i", { class: "el-icon-caret-bottom" }, null, -1));
const _hoisted_8 = { class: "nickname" };
const _hoisted_9 = /*#__PURE__*/createTextVNode("Logout");

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_tag = resolveComponent("el-tag");
  const _component_el_popover = resolveComponent("el-popover");

  return (openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      (_ctx.hasBack)
        ? (openBlock(), createElementBlock("i", {
            key: 0,
            class: "el-icon-back",
            onClick: _cache[0] || (_cache[0] = (...args) => ($setup.back && $setup.back(...args)))
          }))
        : createCommentVNode("", true),
      createBaseVNode("span", _hoisted_3, toDisplayString(_ctx.name), 1)
    ]),
    createBaseVNode("div", _hoisted_4, [
      createVNode(_component_el_popover, {
        placement: "bottom",
        width: 320,
        trigger: "click",
        "popper-class": "popper-user-box"
      }, {
        reference: withCtx(() => [
          createBaseVNode("div", _hoisted_5, [
            _hoisted_6,
            createTextVNode(" " + toDisplayString(_ctx.userInfo && _ctx.userInfo.nickName || '') + " ", 1),
            _hoisted_7
          ])
        ]),
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_8, [
            createBaseVNode("p", null, "Login name: " + toDisplayString(_ctx.userInfo && _ctx.userInfo.loginUserName || ''), 1),
            createBaseVNode("p", null, "Nick nam: " + toDisplayString(_ctx.userInfo && _ctx.userInfo.nickName || ''), 1),
            createVNode(_component_el_tag, {
              size: "small",
              effect: "dark",
              class: "logout",
              onClick: $setup.logout
            }, {
              default: withCtx(() => [
                _hoisted_9
              ]),
              _: 1
            }, 8, ["onClick"])
          ])
        ]),
        _: 1
      })
    ])
  ]))
}
var Header = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__scopeId',"data-v-75ee9300"]]);

export { Header as default };
