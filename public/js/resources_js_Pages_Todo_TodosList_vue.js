(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Todo_TodosList_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Todo/TodosList.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Todo/TodosList.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    todos: Object
  },
  methods: {
    childs: function childs(todo) {
      this.$inertia.get(route('todo.show', todo.id));
    },
    toggleTodo: function toggleTodo(todo) {
      if (todo.status === "pending") {
        todo.status = "completed";
        this.$inertia.post(route("todo.complete", todo.id), {}, {
          preserveScroll: true
        });
      } else {
        todo.status = "pending";
        this.$inertia.post(route("todo.uncomplete", todo.id), {}, {
          preserveScroll: true
        });
      }
    },
    deleteTodo: function deleteTodo(todo) {
      this.$inertia["delete"](route("todo.destroy", todo.id));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Todo/TodosList.vue?vue&type=template&id=2acb4d2a":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Todo/TodosList.vue?vue&type=template&id=2acb4d2a ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "todo-list"
};
var _hoisted_2 = {
  key: 0,
  "class": "text-gray-400 font-light pl-1 font-mono"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  d: "M6 18L18 6M6 6l12 12"
}, null, -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("ul", _hoisted_1, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.todos, function (todo) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("li", {
      "class": "flex items-center justify-between mt-3",
      key: todo.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
      "class": ["flex items-center", {
        'line-through': todo.status === 'completed'
      }]
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
      checked: todo.status === 'completed',
      type: "checkbox",
      onClick: function onClick($event) {
        return $options.toggleTodo(todo);
      }
    }, null, 8
    /* PROPS */
    , ["checked", "onClick"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
      "class": "ml-3 text-sm font-semibold",
      onClick: function onClick($event) {
        return $options.childs(todo);
      }
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(todo.task) + " ", 1
    /* TEXT */
    ), todo.subTodosDetails.total ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(todo.subTodosDetails.completed + '/' + todo.subTodosDetails.total), 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 8
    /* PROPS */
    , ["onClick"])], 2
    /* CLASS */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", {
      "class": "w-4 h-4 text-gray-600 fill-current",
      onClick: function onClick($event) {
        return $options.deleteTodo(todo);
      },
      fill: "none",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, [_hoisted_3], 8
    /* PROPS */
    , ["onClick"]))])])]);
  }), 128
  /* KEYED_FRAGMENT */
  ))]);
}

/***/ }),

/***/ "./resources/js/Pages/Todo/TodosList.vue":
/*!***********************************************!*\
  !*** ./resources/js/Pages/Todo/TodosList.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TodosList_vue_vue_type_template_id_2acb4d2a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodosList.vue?vue&type=template&id=2acb4d2a */ "./resources/js/Pages/Todo/TodosList.vue?vue&type=template&id=2acb4d2a");
/* harmony import */ var _TodosList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodosList.vue?vue&type=script&lang=js */ "./resources/js/Pages/Todo/TodosList.vue?vue&type=script&lang=js");



_TodosList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _TodosList_vue_vue_type_template_id_2acb4d2a__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_TodosList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/Pages/Todo/TodosList.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_TodosList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/Pages/Todo/TodosList.vue?vue&type=script&lang=js":
/*!***********************************************************************!*\
  !*** ./resources/js/Pages/Todo/TodosList.vue?vue&type=script&lang=js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TodosList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TodosList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TodosList.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Todo/TodosList.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Todo/TodosList.vue?vue&type=template&id=2acb4d2a":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/Todo/TodosList.vue?vue&type=template&id=2acb4d2a ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TodosList_vue_vue_type_template_id_2acb4d2a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TodosList_vue_vue_type_template_id_2acb4d2a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TodosList.vue?vue&type=template&id=2acb4d2a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Todo/TodosList.vue?vue&type=template&id=2acb4d2a");


/***/ })

}]);