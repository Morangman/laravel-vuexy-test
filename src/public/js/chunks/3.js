(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/product/List.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/product/List.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      items: [],
      total: 0,
      params: {
        page: 1,
        count: 6,
        by: 'id',
        dir: 'asc'
      }
    };
  },
  watch: {
    params: {
      handler: function handler() {
        this.getAll();
      },
      deep: true
    }
  },
  mounted: function mounted() {
    this.getAll();
  },
  methods: {
    handleSort: function handleSort(field, direction) {
      this.params.by = field;
      this.params.dir = direction;
    },
    getAll: function getAll() {
      var _this = this;
      this.$vs.loading();
      axios.get('/api/v1/products/list', {
        params: this.params
      }).then(function (response) {
        _this.total = response.data.last_page;
        _this.items = response.data.data;
        _this.$vs.loading.close();
      });
    },
    deleteItem: function deleteItem(id) {
      var _this2 = this;
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: "Confirm delete",
        text: 'The element will be removed',
        accept: function accept() {
          axios.delete("/api/v1/products/".concat(id, "/detete")).then(function (response) {
            _this2.getAll();
            _this2.$vs.notify({
              title: 'Item deleted successfully'
            });
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/product/List.vue?vue&type=template&id=541f4ce8&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/product/List.vue?vue&type=template&id=541f4ce8& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("vx-card", {
    attrs: {
      title: "All Products",
      "code-toggler": ""
    }
  }, [_c("vs-table", {
    attrs: {
      sst: true,
      "max-items": _vm.items.length,
      data: _vm.items
    },
    on: {
      sort: _vm.handleSort
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(_ref) {
        var data = _ref.data;
        return _vm._l(data, function (tr, indextr) {
          return _c("vs-tr", {
            key: indextr
          }, [_c("vs-td", {
            attrs: {
              data: data[indextr].id
            }
          }, [_vm._v("\n                        " + _vm._s(data[indextr].id) + "\n                    ")]), _vm._v(" "), _c("vs-td", {
            attrs: {
              data: data[indextr].name
            }
          }, [_vm._v("\n                        " + _vm._s(data[indextr].name) + "\n                    ")]), _vm._v(" "), _c("vs-td", {
            attrs: {
              data: data[indextr].description
            }
          }, [_vm._v("\n                        " + _vm._s(data[indextr].description) + "\n                    ")]), _vm._v(" "), _c("vs-td", {
            attrs: {
              data: data[indextr].status
            }
          }, [_vm._v("\n                        " + _vm._s(data[indextr].status ? "active" : "disabled") + "\n                    ")]), _vm._v(" "), _c("vs-td", [_c("div", {
            staticClass: "btn-group",
            attrs: {
              role: "group"
            }
          }, [_c("router-link", {
            staticClass: "btn btn-primary",
            attrs: {
              to: {
                name: "product-edit",
                params: {
                  id: data[indextr].id
                }
              }
            }
          }, [_vm._v("Edit")]), _vm._v(" "), _c("a", {
            staticClass: "text-danger",
            attrs: {
              href: "javascript:void(0)"
            },
            on: {
              click: function click($event) {
                return _vm.deleteItem(data[indextr].id);
              }
            }
          }, [_vm._v("Delete")])], 1)])], 1);
        });
      }
    }])
  }, [_c("template", {
    slot: "thead"
  }, [_c("vs-th", {
    attrs: {
      "sort-key": "id"
    }
  }, [_vm._v("ID")]), _vm._v(" "), _c("vs-th", {
    attrs: {
      "sort-key": "name"
    }
  }, [_vm._v("Name")]), _vm._v(" "), _c("vs-th", {
    attrs: {
      "sort-key": "description"
    }
  }, [_vm._v("Description")]), _vm._v(" "), _c("vs-th", [_vm._v("Status")]), _vm._v(" "), _c("vs-th", [_vm._v("Actions")])], 1)], 2), _vm._v(" "), _c("br"), _vm._v(" "), _c("vs-pagination", {
    attrs: {
      total: _vm.total
    },
    model: {
      value: _vm.params.page,
      callback: function callback($$v) {
        _vm.$set(_vm.params, "page", $$v);
      },
      expression: "params.page"
    }
  })], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/src/views/product/List.vue":
/*!*************************************************!*\
  !*** ./resources/js/src/views/product/List.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _List_vue_vue_type_template_id_541f4ce8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List.vue?vue&type=template&id=541f4ce8& */ "./resources/js/src/views/product/List.vue?vue&type=template&id=541f4ce8&");
/* harmony import */ var _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List.vue?vue&type=script&lang=js& */ "./resources/js/src/views/product/List.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _List_vue_vue_type_template_id_541f4ce8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _List_vue_vue_type_template_id_541f4ce8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/product/List.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/product/List.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/src/views/product/List.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./List.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/product/List.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/product/List.vue?vue&type=template&id=541f4ce8&":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/product/List.vue?vue&type=template&id=541f4ce8& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_541f4ce8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./List.vue?vue&type=template&id=541f4ce8& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/product/List.vue?vue&type=template&id=541f4ce8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_541f4ce8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_541f4ce8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);