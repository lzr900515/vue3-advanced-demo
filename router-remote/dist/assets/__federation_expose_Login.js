import {importShared} from './__federation_fn_import.js'
import './vendor.7493a488.js';
import { login, localSet } from './remoteUtils.ffd59378.js';
import { _export_sfc } from './plugin-vue_export-helper.b33e694d.js';
const {ElForm,ElFormItem,ElCheckbox,ElInput,ElMessage,ElButton} = await importShared('element-plus')
const {ref,reactive,toRefs,resolveComponent,openBlock,createElementBlock,createElementVNode:createBaseVNode,createVNode,withCtx,pushScopeId,popScopeId,createTextVNode} = await importShared('vue')

var Login_vue_vue_type_style_index_0_scoped_true_lang = '';

var Login_vue_vue_type_style_index_1_lang = '';

const _sfc_main = {
  name: 'Login',
  components: {ElForm, ElFormItem, ElCheckbox, ElInput, ElMessage, ElButton},
  setup() {
    const loginForm = ref("");
    const state = reactive({
      ruleForm: {
        username: '',
        password: ''
      },
      checked: true,
      rules: {
        username: [
          {required: 'true', message: '账户不能为空', trigger: 'blur'}
        ],
        password: [
          {required: 'true', message: '密码不能为空', trigger: 'blur'}
        ]
      }
    });
    const submitForm = () => {
      loginForm.value.validate((valid) => {
        if (valid) {
          const res = login(state.ruleForm.username, state.ruleForm.password);
          if (res === undefined) {
            ElMessage({message: 'The user name or password is incorrect.', type: "error"});
            return false;
          }
          localSet('token', res.token);
          window.location.href = '/';
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    };
    const resetForm = () => {
      loginForm.value.resetFields();
    };
    return {
      ...toRefs(state),
      loginForm,
      submitForm,
      resetForm
    }
  }
};

const _withScopeId = n => (pushScopeId("data-v-768b76b1"),n=n(),popScopeId(),n);
const _hoisted_1 = { class: "login-body" };
const _hoisted_2 = { class: "login-container" };
const _hoisted_3 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/createBaseVNode("div", { class: "head" }, [
  /*#__PURE__*/createBaseVNode("div", { class: "name" }, [
    /*#__PURE__*/createBaseVNode("div", { class: "title" }, "Advance Demo Mall"),
    /*#__PURE__*/createBaseVNode("div", { class: "tips" }, "Vue3.0 background management system")
  ])
], -1));
const _hoisted_4 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/createBaseVNode("div", { style: {"color":"#333"} }, [
  /*#__PURE__*/createTextVNode("Sign in means you have agreed"),
  /*#__PURE__*/createBaseVNode("a", null, "《Terms of Service》")
], -1));
const _hoisted_5 = /*#__PURE__*/createTextVNode("Login immediately");
const _hoisted_6 = /*#__PURE__*/createTextVNode("Remember login");

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_input = resolveComponent("el-input");
  const _component_el_form_item = resolveComponent("el-form-item");
  const _component_el_button = resolveComponent("el-button");
  const _component_el_checkbox = resolveComponent("el-checkbox");
  const _component_el_form = resolveComponent("el-form");

  return (openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      _hoisted_3,
      createVNode(_component_el_form, {
        "label-position": "top",
        rules: _ctx.rules,
        model: _ctx.ruleForm,
        ref: "loginForm",
        class: "login-form"
      }, {
        default: withCtx(() => [
          createVNode(_component_el_form_item, {
            label: "账号",
            prop: "username"
          }, {
            default: withCtx(() => [
              createVNode(_component_el_input, {
                type: "text",
                modelValue: _ctx.ruleForm.username,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((_ctx.ruleForm.username) = $event)),
                modelModifiers: { trim: true },
                autocomplete: "off"
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }),
          createVNode(_component_el_form_item, {
            label: "密码",
            prop: "password"
          }, {
            default: withCtx(() => [
              createVNode(_component_el_input, {
                type: "password",
                modelValue: _ctx.ruleForm.password,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ((_ctx.ruleForm.password) = $event)),
                modelModifiers: { trim: true },
                autocomplete: "off"
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }),
          createVNode(_component_el_form_item, null, {
            default: withCtx(() => [
              _hoisted_4,
              createVNode(_component_el_button, {
                style: {"width":"100%"},
                type: "primary",
                onClick: $setup.submitForm
              }, {
                default: withCtx(() => [
                  _hoisted_5
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode(_component_el_checkbox, {
                modelValue: _ctx.checked,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => ((_ctx.checked) = $event)),
                onChange: _cache[3] || (_cache[3] = $event => (!_ctx.checked))
              }, {
                default: withCtx(() => [
                  _hoisted_6
                ]),
                _: 1
              }, 8, ["modelValue"])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["rules", "model"])
    ])
  ]))
}
var Login = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__scopeId',"data-v-768b76b1"]]);

export { Login as default };
