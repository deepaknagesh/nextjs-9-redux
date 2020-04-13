module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "isomorphic-fetch"
var external_isomorphic_fetch_ = __webpack_require__("W+0S");

// CONCATENATED MODULE: ./hocs/defaultPage/withData.js
var __jsx = external_react_default.a.createElement;


/* harmony default export */ var withData = (ComposedComponent => class WithData extends external_react_["Component"] {
  render() {
    return __jsx(ComposedComponent, this.props);
  }

});
// CONCATENATED MODULE: ./hocs/defaultPage/withLayout.js
var withLayout_jsx = external_react_default.a.createElement;
 // import Layout from '../../containers/Layout';

/* harmony default export */ var withLayout = (ComposedComponent => props => {
  return (// <Layout>
    withLayout_jsx(ComposedComponent, props) // </Layout>

  );
});
// CONCATENATED MODULE: ./hocs/defaultPage/index.js
 // import { withReduxSaga } from '../../redux/store';

 // import WithLang from '../withLang';

 // export default compose(withReduxSaga, WithData, WithLayout, WithLang);
// export default compose(WithData, WithLayout, WithLang);

/* harmony default export */ var defaultPage = (Object(external_redux_["compose"])(withData, withLayout));
// CONCATENATED MODULE: ./pages/index.js


var pages_jsx = external_react_default.a.createElement;



const Home = () => pages_jsx("div", {
  className: "jsx-1276654382" + " " + "container"
}, pages_jsx(head_default.a, null, pages_jsx("title", {
  className: "jsx-1276654382"
}, "Create Next App"), pages_jsx("link", {
  rel: "icon",
  href: "/favicon.ico",
  className: "jsx-1276654382"
})), pages_jsx("main", {
  className: "jsx-1276654382"
}, pages_jsx("h1", {
  className: "jsx-1276654382" + " " + "title"
}, "Welcome to ", pages_jsx("a", {
  href: "https://nextjs.org",
  className: "jsx-1276654382"
}, "Next.js!")), pages_jsx("p", {
  className: "jsx-1276654382" + " " + "description"
}, "Get started by editing ", pages_jsx("code", {
  className: "jsx-1276654382"
}, "pages/index.js")), pages_jsx("div", {
  className: "jsx-1276654382" + " " + "grid"
}, pages_jsx("a", {
  href: "https://nextjs.org/docs",
  className: "jsx-1276654382" + " " + "card"
}, pages_jsx("h3", {
  className: "jsx-1276654382"
}, "Documentation \u2192"), pages_jsx("p", {
  className: "jsx-1276654382"
}, "Find in-depth information about Next.js features and API.")), pages_jsx("a", {
  href: "https://nextjs.org/learn",
  className: "jsx-1276654382" + " " + "card"
}, pages_jsx("h3", {
  className: "jsx-1276654382"
}, "Learn \u2192"), pages_jsx("p", {
  className: "jsx-1276654382"
}, "Learn about Next.js in an interactive course with quizzes!")), pages_jsx("a", {
  href: "https://github.com/zeit/next.js/tree/master/examples",
  className: "jsx-1276654382" + " " + "card"
}, pages_jsx("h3", {
  className: "jsx-1276654382"
}, "Examples \u2192"), pages_jsx("p", {
  className: "jsx-1276654382"
}, "Discover and deploy boilerplate example Next.js projects.")), pages_jsx("a", {
  href: "https://zeit.co/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
  className: "jsx-1276654382" + " " + "card"
}, pages_jsx("h3", {
  className: "jsx-1276654382"
}, "Deploy \u2192"), pages_jsx("p", {
  className: "jsx-1276654382"
}, "Instantly deploy your Next.js site to a public URL with ZEIT Now.")))), pages_jsx("footer", {
  className: "jsx-1276654382"
}, pages_jsx("a", {
  href: "https://zeit.co?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
  target: "_blank",
  rel: "noopener noreferrer",
  className: "jsx-1276654382"
}, "Powered by ", pages_jsx("img", {
  src: "/zeit.svg",
  alt: "ZEIT Logo",
  className: "jsx-1276654382"
}))), pages_jsx(style_default.a, {
  id: "2880214721"
}, [".container.jsx-1276654382{min-height:100vh;padding:0 0.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", "main.jsx-1276654382{padding:5rem 0;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", "footer.jsx-1276654382{width:100%;height:100px;border-top:1px solid #eaeaea;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", "footer.jsx-1276654382 img.jsx-1276654382{margin-left:0.5rem;}", "footer.jsx-1276654382 a.jsx-1276654382{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", "a.jsx-1276654382{color:inherit;-webkit-text-decoration:none;text-decoration:none;}", ".title.jsx-1276654382 a.jsx-1276654382{color:#0070f3;-webkit-text-decoration:none;text-decoration:none;}", ".title.jsx-1276654382 a.jsx-1276654382:hover,.title.jsx-1276654382 a.jsx-1276654382:focus,.title.jsx-1276654382 a.jsx-1276654382:active{-webkit-text-decoration:underline;text-decoration:underline;}", ".title.jsx-1276654382{margin:0;line-height:1.15;font-size:4rem;}", ".title.jsx-1276654382,.description.jsx-1276654382{text-align:center;}", ".description.jsx-1276654382{line-height:1.5;font-size:1.5rem;}", "code.jsx-1276654382{background:#fafafa;border-radius:5px;padding:0.75rem;font-size:1.1rem;font-family:Menlo,Monaco,Lucida Console,Liberation Mono, DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace;}", ".grid.jsx-1276654382{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:800px;margin-top:3rem;}", ".card.jsx-1276654382{margin:1rem;-webkit-flex-basis:45%;-ms-flex-preferred-size:45%;flex-basis:45%;padding:1.5rem;text-align:left;color:inherit;-webkit-text-decoration:none;text-decoration:none;border:1px solid #eaeaea;border-radius:10px;-webkit-transition:color 0.15s ease,border-color 0.15s ease;transition:color 0.15s ease,border-color 0.15s ease;}", ".card.jsx-1276654382:hover,.card.jsx-1276654382:focus,.card.jsx-1276654382:active{color:#0070f3;border-color:#0070f3;}", ".card.jsx-1276654382 h3.jsx-1276654382{margin:0 0 1rem 0;font-size:1.5rem;}", ".card.jsx-1276654382 p.jsx-1276654382{margin:0;font-size:1.25rem;line-height:1.5;}", "@media (max-width:600px){.grid.jsx-1276654382{width:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}"]), pages_jsx(style_default.a, {
  id: "3892888070"
}, ["html,body{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen, Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;}", "*{box-sizing:border-box;}"]));

/* harmony default export */ var pages = __webpack_exports__["default"] = (defaultPage(Home));

/***/ }),

/***/ "W+0S":
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });