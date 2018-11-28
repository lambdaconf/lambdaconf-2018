/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

var origin;
var public_key;
var fc;
window.addEventListener("message", function (event) {
    if (event.data) {
        if (event.data.event == "load") {
            origin = event.data.origin;
            public_key = event.data.public_key;
            var funCaptchaScript = document.createElement('script');
            var funCaptchaURI = "https://client.arkoselabs.com/fc/api/?onload=funCaptchaOnloadCallback";
            funCaptchaScript.setAttribute('src', funCaptchaURI);
            document.getElementsByTagName("head")[0].appendChild(funCaptchaScript);
        }
        else if (event.data.event == "play") {
            fc.refresh_session();
        }
    }
});
window.funCaptchaOnloadCallback = function () {
    // @ts-ignore
    fc = new FunCaptcha({
        public_key: public_key,
        target_html: "funcaptcha",
        callback: function () {
            var fc_token = document.getElementById('FunCaptcha-Token').value;
            window.parent.postMessage({ origin: origin, fc_token: fc_token, event: "played" }, "*");
        },
        loaded_callback: function () {
            window.parent.postMessage({ origin: origin, event: "loaded" }, "*");
        }
    });
};


/***/ })
/******/ ]);