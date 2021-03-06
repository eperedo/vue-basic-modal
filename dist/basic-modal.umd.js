(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["basic-modal"] = factory();
	else
		root["basic-modal"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "+xUi");
/******/ })
/************************************************************************/
/******/ ({

/***/ "+xUi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
var setPublicPath = __webpack_require__("HrLf");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/eslint-loader??ref--29-0!./src/components/basic-modal.vue?vue&type=template&id=f1cfb512&scoped=true
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.state)?_c('div',{ref:"basicModal",staticClass:"modal-container",attrs:{"tabindex":"1"},on:{"keydown":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"esc",27,$event.key,"Escape")){ return null; }return _vm.close($event)}}},[_c('div',_vm._b({class:_vm.extraClass},'div',_vm.$attrs,false),[_vm._t("default",null,{isOpen:_vm.isOpen})],2)]):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/basic-modal.vue?vue&type=template&id=f1cfb512&scoped=true

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/eslint-loader??ref--16-0!./src/components/basic-modal.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
function isClickingOutside() {
  if (event.target === this.$refs.basicModal) {
    if (this.closeOnClick) {
      this.$emit('input', false);
    }
  }
}

function destroyed() {
  this.$el.ownerDocument.removeEventListener('click', isClickingOutside.bind(this));
}

function extraClass() {
  return this.modalClass ? "modal ".concat(this.modalClass) : 'modal';
}

function mounted() {
  this.$el.ownerDocument.addEventListener('click', isClickingOutside.bind(this), false);
}

function basic_modalvue_type_script_lang_js_close() {
  if (this.closeOnEscape) {
    this.$emit('input', false);
  }
}

function isOpen() {
  var _this = this;

  if (this.state) {
    this.$nextTick(function () {
      _this.$refs.basicModal.focus();
    });
    return true;
  }

  return false;
}

/* harmony default export */ var basic_modalvue_type_script_lang_js = ({
  name: 'basic-modal',
  computed: {
    extraClass: extraClass,
    isOpen: isOpen
  },
  destroyed: destroyed,
  inheritAttrs: false,
  methods: {
    close: basic_modalvue_type_script_lang_js_close
  },
  mounted: mounted,
  props: {
    closeOnClick: {
      type: Boolean,
      default: true
    },
    closeOnEscape: {
      type: Boolean,
      default: true
    },
    modalClass: {
      type: String,
      default: 'modal'
    },
    state: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./src/components/basic-modal.vue?vue&type=script&lang=js
 /* harmony default export */ var components_basic_modalvue_type_script_lang_js = (basic_modalvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/basic-modal.vue?vue&type=style&index=0&id=f1cfb512&lang=scss&scoped=true
var basic_modalvue_type_style_index_0_id_f1cfb512_lang_scss_scoped_true = __webpack_require__("k1XR");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/basic-modal.vue






/* normalize component */

var component = normalizeComponent(
  components_basic_modalvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "f1cfb512",
  null
  
)

/* harmony default export */ var basic_modal = (component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (basic_modal);



/***/ }),

/***/ "HrLf":
/***/ (function(module, exports, __webpack_require__) {

// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  let i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}


/***/ }),

/***/ "U8dm":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "k1XR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_11_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_eslint_loader_index_js_ref_29_0_basic_modal_vue_vue_type_style_index_0_id_f1cfb512_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("U8dm");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_11_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_eslint_loader_index_js_ref_29_0_basic_modal_vue_vue_type_style_index_0_id_f1cfb512_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_11_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_eslint_loader_index_js_ref_29_0_basic_modal_vue_vue_type_style_index_0_id_f1cfb512_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_11_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_eslint_loader_index_js_ref_29_0_basic_modal_vue_vue_type_style_index_0_id_f1cfb512_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=basic-modal.umd.js.map