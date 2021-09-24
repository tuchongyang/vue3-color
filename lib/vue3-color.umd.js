(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue3-color"] = factory(require("vue"));
	else
		root["vue3-color"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fae3");
/******/ })
/************************************************************************/
/******/ ({

/***/ "1afc":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "1ca3":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "22c7":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "27db":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "39dc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_twitter_vue_vue_type_style_index_0_id_6acb8044_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7af5");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_twitter_vue_vue_type_style_index_0_id_6acb8044_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_twitter_vue_vue_type_style_index_0_id_6acb8044_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "3f71":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_index_vue_vue_type_style_index_0_id_a4b0a300_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c20b");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_index_vue_vue_type_style_index_0_id_a4b0a300_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_index_vue_vue_type_style_index_0_id_a4b0a300_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "470b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_hue_vue_vue_type_style_index_0_id_cc3ca1ac_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("27db");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_hue_vue_vue_type_style_index_0_id_cc3ca1ac_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_hue_vue_vue_type_style_index_0_id_cc3ca1ac_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "4a52":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "53a5":
/***/ (function(module, exports) {

module.exports = clamp

function clamp(value, min, max) {
  return min < max
    ? (value < min ? min : value > max ? max : value)
    : (value < max ? max : value > min ? min : value)
}


/***/ }),

/***/ "5561":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_material_vue_vue_type_style_index_0_id_3edbbc66_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1ca3");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_material_vue_vue_type_style_index_0_id_3edbbc66_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_material_vue_vue_type_style_index_0_id_3edbbc66_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "66cb":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;// TinyColor v1.4.2
// https://github.com/bgrins/TinyColor
// Brian Grinstead, MIT License

(function(Math) {

var trimLeft = /^\s+/,
    trimRight = /\s+$/,
    tinyCounter = 0,
    mathRound = Math.round,
    mathMin = Math.min,
    mathMax = Math.max,
    mathRandom = Math.random;

function tinycolor (color, opts) {

    color = (color) ? color : '';
    opts = opts || { };

    // If input is already a tinycolor, return itself
    if (color instanceof tinycolor) {
       return color;
    }
    // If we are called as a function, call using new instead
    if (!(this instanceof tinycolor)) {
        return new tinycolor(color, opts);
    }

    var rgb = inputToRGB(color);
    this._originalInput = color,
    this._r = rgb.r,
    this._g = rgb.g,
    this._b = rgb.b,
    this._a = rgb.a,
    this._roundA = mathRound(100*this._a) / 100,
    this._format = opts.format || rgb.format;
    this._gradientType = opts.gradientType;

    // Don't let the range of [0,255] come back in [0,1].
    // Potentially lose a little bit of precision here, but will fix issues where
    // .5 gets interpreted as half of the total, instead of half of 1
    // If it was supposed to be 128, this was already taken care of by `inputToRgb`
    if (this._r < 1) { this._r = mathRound(this._r); }
    if (this._g < 1) { this._g = mathRound(this._g); }
    if (this._b < 1) { this._b = mathRound(this._b); }

    this._ok = rgb.ok;
    this._tc_id = tinyCounter++;
}

tinycolor.prototype = {
    isDark: function() {
        return this.getBrightness() < 128;
    },
    isLight: function() {
        return !this.isDark();
    },
    isValid: function() {
        return this._ok;
    },
    getOriginalInput: function() {
      return this._originalInput;
    },
    getFormat: function() {
        return this._format;
    },
    getAlpha: function() {
        return this._a;
    },
    getBrightness: function() {
        //http://www.w3.org/TR/AERT#color-contrast
        var rgb = this.toRgb();
        return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
    },
    getLuminance: function() {
        //http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
        var rgb = this.toRgb();
        var RsRGB, GsRGB, BsRGB, R, G, B;
        RsRGB = rgb.r/255;
        GsRGB = rgb.g/255;
        BsRGB = rgb.b/255;

        if (RsRGB <= 0.03928) {R = RsRGB / 12.92;} else {R = Math.pow(((RsRGB + 0.055) / 1.055), 2.4);}
        if (GsRGB <= 0.03928) {G = GsRGB / 12.92;} else {G = Math.pow(((GsRGB + 0.055) / 1.055), 2.4);}
        if (BsRGB <= 0.03928) {B = BsRGB / 12.92;} else {B = Math.pow(((BsRGB + 0.055) / 1.055), 2.4);}
        return (0.2126 * R) + (0.7152 * G) + (0.0722 * B);
    },
    setAlpha: function(value) {
        this._a = boundAlpha(value);
        this._roundA = mathRound(100*this._a) / 100;
        return this;
    },
    toHsv: function() {
        var hsv = rgbToHsv(this._r, this._g, this._b);
        return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this._a };
    },
    toHsvString: function() {
        var hsv = rgbToHsv(this._r, this._g, this._b);
        var h = mathRound(hsv.h * 360), s = mathRound(hsv.s * 100), v = mathRound(hsv.v * 100);
        return (this._a == 1) ?
          "hsv("  + h + ", " + s + "%, " + v + "%)" :
          "hsva(" + h + ", " + s + "%, " + v + "%, "+ this._roundA + ")";
    },
    toHsl: function() {
        var hsl = rgbToHsl(this._r, this._g, this._b);
        return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this._a };
    },
    toHslString: function() {
        var hsl = rgbToHsl(this._r, this._g, this._b);
        var h = mathRound(hsl.h * 360), s = mathRound(hsl.s * 100), l = mathRound(hsl.l * 100);
        return (this._a == 1) ?
          "hsl("  + h + ", " + s + "%, " + l + "%)" :
          "hsla(" + h + ", " + s + "%, " + l + "%, "+ this._roundA + ")";
    },
    toHex: function(allow3Char) {
        return rgbToHex(this._r, this._g, this._b, allow3Char);
    },
    toHexString: function(allow3Char) {
        return '#' + this.toHex(allow3Char);
    },
    toHex8: function(allow4Char) {
        return rgbaToHex(this._r, this._g, this._b, this._a, allow4Char);
    },
    toHex8String: function(allow4Char) {
        return '#' + this.toHex8(allow4Char);
    },
    toRgb: function() {
        return { r: mathRound(this._r), g: mathRound(this._g), b: mathRound(this._b), a: this._a };
    },
    toRgbString: function() {
        return (this._a == 1) ?
          "rgb("  + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ")" :
          "rgba(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ", " + this._roundA + ")";
    },
    toPercentageRgb: function() {
        return { r: mathRound(bound01(this._r, 255) * 100) + "%", g: mathRound(bound01(this._g, 255) * 100) + "%", b: mathRound(bound01(this._b, 255) * 100) + "%", a: this._a };
    },
    toPercentageRgbString: function() {
        return (this._a == 1) ?
          "rgb("  + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%)" :
          "rgba(" + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
    },
    toName: function() {
        if (this._a === 0) {
            return "transparent";
        }

        if (this._a < 1) {
            return false;
        }

        return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
    },
    toFilter: function(secondColor) {
        var hex8String = '#' + rgbaToArgbHex(this._r, this._g, this._b, this._a);
        var secondHex8String = hex8String;
        var gradientType = this._gradientType ? "GradientType = 1, " : "";

        if (secondColor) {
            var s = tinycolor(secondColor);
            secondHex8String = '#' + rgbaToArgbHex(s._r, s._g, s._b, s._a);
        }

        return "progid:DXImageTransform.Microsoft.gradient("+gradientType+"startColorstr="+hex8String+",endColorstr="+secondHex8String+")";
    },
    toString: function(format) {
        var formatSet = !!format;
        format = format || this._format;

        var formattedString = false;
        var hasAlpha = this._a < 1 && this._a >= 0;
        var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "hex4" || format === "hex8" || format === "name");

        if (needsAlphaFormat) {
            // Special case for "transparent", all other non-alpha formats
            // will return rgba when there is transparency.
            if (format === "name" && this._a === 0) {
                return this.toName();
            }
            return this.toRgbString();
        }
        if (format === "rgb") {
            formattedString = this.toRgbString();
        }
        if (format === "prgb") {
            formattedString = this.toPercentageRgbString();
        }
        if (format === "hex" || format === "hex6") {
            formattedString = this.toHexString();
        }
        if (format === "hex3") {
            formattedString = this.toHexString(true);
        }
        if (format === "hex4") {
            formattedString = this.toHex8String(true);
        }
        if (format === "hex8") {
            formattedString = this.toHex8String();
        }
        if (format === "name") {
            formattedString = this.toName();
        }
        if (format === "hsl") {
            formattedString = this.toHslString();
        }
        if (format === "hsv") {
            formattedString = this.toHsvString();
        }

        return formattedString || this.toHexString();
    },
    clone: function() {
        return tinycolor(this.toString());
    },

    _applyModification: function(fn, args) {
        var color = fn.apply(null, [this].concat([].slice.call(args)));
        this._r = color._r;
        this._g = color._g;
        this._b = color._b;
        this.setAlpha(color._a);
        return this;
    },
    lighten: function() {
        return this._applyModification(lighten, arguments);
    },
    brighten: function() {
        return this._applyModification(brighten, arguments);
    },
    darken: function() {
        return this._applyModification(darken, arguments);
    },
    desaturate: function() {
        return this._applyModification(desaturate, arguments);
    },
    saturate: function() {
        return this._applyModification(saturate, arguments);
    },
    greyscale: function() {
        return this._applyModification(greyscale, arguments);
    },
    spin: function() {
        return this._applyModification(spin, arguments);
    },

    _applyCombination: function(fn, args) {
        return fn.apply(null, [this].concat([].slice.call(args)));
    },
    analogous: function() {
        return this._applyCombination(analogous, arguments);
    },
    complement: function() {
        return this._applyCombination(complement, arguments);
    },
    monochromatic: function() {
        return this._applyCombination(monochromatic, arguments);
    },
    splitcomplement: function() {
        return this._applyCombination(splitcomplement, arguments);
    },
    triad: function() {
        return this._applyCombination(triad, arguments);
    },
    tetrad: function() {
        return this._applyCombination(tetrad, arguments);
    }
};

// If input is an object, force 1 into "1.0" to handle ratios properly
// String input requires "1.0" as input, so 1 will be treated as 1
tinycolor.fromRatio = function(color, opts) {
    if (typeof color == "object") {
        var newColor = {};
        for (var i in color) {
            if (color.hasOwnProperty(i)) {
                if (i === "a") {
                    newColor[i] = color[i];
                }
                else {
                    newColor[i] = convertToPercentage(color[i]);
                }
            }
        }
        color = newColor;
    }

    return tinycolor(color, opts);
};

// Given a string or object, convert that input to RGB
// Possible string inputs:
//
//     "red"
//     "#f00" or "f00"
//     "#ff0000" or "ff0000"
//     "#ff000000" or "ff000000"
//     "rgb 255 0 0" or "rgb (255, 0, 0)"
//     "rgb 1.0 0 0" or "rgb (1, 0, 0)"
//     "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
//     "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
//     "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
//     "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
//     "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
//
function inputToRGB(color) {

    var rgb = { r: 0, g: 0, b: 0 };
    var a = 1;
    var s = null;
    var v = null;
    var l = null;
    var ok = false;
    var format = false;

    if (typeof color == "string") {
        color = stringInputToObject(color);
    }

    if (typeof color == "object") {
        if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
            rgb = rgbToRgb(color.r, color.g, color.b);
            ok = true;
            format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
            s = convertToPercentage(color.s);
            v = convertToPercentage(color.v);
            rgb = hsvToRgb(color.h, s, v);
            ok = true;
            format = "hsv";
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
            s = convertToPercentage(color.s);
            l = convertToPercentage(color.l);
            rgb = hslToRgb(color.h, s, l);
            ok = true;
            format = "hsl";
        }

        if (color.hasOwnProperty("a")) {
            a = color.a;
        }
    }

    a = boundAlpha(a);

    return {
        ok: ok,
        format: color.format || format,
        r: mathMin(255, mathMax(rgb.r, 0)),
        g: mathMin(255, mathMax(rgb.g, 0)),
        b: mathMin(255, mathMax(rgb.b, 0)),
        a: a
    };
}


// Conversion Functions
// --------------------

// `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
// <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>

// `rgbToRgb`
// Handle bounds / percentage checking to conform to CSS color spec
// <http://www.w3.org/TR/css3-color/>
// *Assumes:* r, g, b in [0, 255] or [0, 1]
// *Returns:* { r, g, b } in [0, 255]
function rgbToRgb(r, g, b){
    return {
        r: bound01(r, 255) * 255,
        g: bound01(g, 255) * 255,
        b: bound01(b, 255) * 255
    };
}

// `rgbToHsl`
// Converts an RGB color value to HSL.
// *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
// *Returns:* { h, s, l } in [0,1]
function rgbToHsl(r, g, b) {

    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);

    var max = mathMax(r, g, b), min = mathMin(r, g, b);
    var h, s, l = (max + min) / 2;

    if(max == min) {
        h = s = 0; // achromatic
    }
    else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }

        h /= 6;
    }

    return { h: h, s: s, l: l };
}

// `hslToRgb`
// Converts an HSL color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
function hslToRgb(h, s, l) {
    var r, g, b;

    h = bound01(h, 360);
    s = bound01(s, 100);
    l = bound01(l, 100);

    function hue2rgb(p, q, t) {
        if(t < 0) t += 1;
        if(t > 1) t -= 1;
        if(t < 1/6) return p + (q - p) * 6 * t;
        if(t < 1/2) return q;
        if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
    }

    if(s === 0) {
        r = g = b = l; // achromatic
    }
    else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }

    return { r: r * 255, g: g * 255, b: b * 255 };
}

// `rgbToHsv`
// Converts an RGB color value to HSV
// *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
// *Returns:* { h, s, v } in [0,1]
function rgbToHsv(r, g, b) {

    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);

    var max = mathMax(r, g, b), min = mathMin(r, g, b);
    var h, s, v = max;

    var d = max - min;
    s = max === 0 ? 0 : d / max;

    if(max == min) {
        h = 0; // achromatic
    }
    else {
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    return { h: h, s: s, v: v };
}

// `hsvToRgb`
// Converts an HSV color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
 function hsvToRgb(h, s, v) {

    h = bound01(h, 360) * 6;
    s = bound01(s, 100);
    v = bound01(v, 100);

    var i = Math.floor(h),
        f = h - i,
        p = v * (1 - s),
        q = v * (1 - f * s),
        t = v * (1 - (1 - f) * s),
        mod = i % 6,
        r = [v, q, p, p, t, v][mod],
        g = [t, v, v, q, p, p][mod],
        b = [p, p, t, v, v, q][mod];

    return { r: r * 255, g: g * 255, b: b * 255 };
}

// `rgbToHex`
// Converts an RGB color to hex
// Assumes r, g, and b are contained in the set [0, 255]
// Returns a 3 or 6 character hex
function rgbToHex(r, g, b, allow3Char) {

    var hex = [
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16))
    ];

    // Return a 3 character hex if possible
    if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
    }

    return hex.join("");
}

// `rgbaToHex`
// Converts an RGBA color plus alpha transparency to hex
// Assumes r, g, b are contained in the set [0, 255] and
// a in [0, 1]. Returns a 4 or 8 character rgba hex
function rgbaToHex(r, g, b, a, allow4Char) {

    var hex = [
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16)),
        pad2(convertDecimalToHex(a))
    ];

    // Return a 4 character hex if possible
    if (allow4Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1) && hex[3].charAt(0) == hex[3].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
    }

    return hex.join("");
}

// `rgbaToArgbHex`
// Converts an RGBA color to an ARGB Hex8 string
// Rarely used, but required for "toFilter()"
function rgbaToArgbHex(r, g, b, a) {

    var hex = [
        pad2(convertDecimalToHex(a)),
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16))
    ];

    return hex.join("");
}

// `equals`
// Can be called with any tinycolor input
tinycolor.equals = function (color1, color2) {
    if (!color1 || !color2) { return false; }
    return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
};

tinycolor.random = function() {
    return tinycolor.fromRatio({
        r: mathRandom(),
        g: mathRandom(),
        b: mathRandom()
    });
};


// Modification Functions
// ----------------------
// Thanks to less.js for some of the basics here
// <https://github.com/cloudhead/less.js/blob/master/lib/less/functions.js>

function desaturate(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.s -= amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
}

function saturate(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.s += amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
}

function greyscale(color) {
    return tinycolor(color).desaturate(100);
}

function lighten (color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.l += amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
}

function brighten(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var rgb = tinycolor(color).toRgb();
    rgb.r = mathMax(0, mathMin(255, rgb.r - mathRound(255 * - (amount / 100))));
    rgb.g = mathMax(0, mathMin(255, rgb.g - mathRound(255 * - (amount / 100))));
    rgb.b = mathMax(0, mathMin(255, rgb.b - mathRound(255 * - (amount / 100))));
    return tinycolor(rgb);
}

function darken (color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.l -= amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
}

// Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
// Values outside of this range will be wrapped into this range.
function spin(color, amount) {
    var hsl = tinycolor(color).toHsl();
    var hue = (hsl.h + amount) % 360;
    hsl.h = hue < 0 ? 360 + hue : hue;
    return tinycolor(hsl);
}

// Combination Functions
// ---------------------
// Thanks to jQuery xColor for some of the ideas behind these
// <https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js>

function complement(color) {
    var hsl = tinycolor(color).toHsl();
    hsl.h = (hsl.h + 180) % 360;
    return tinycolor(hsl);
}

function triad(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 120) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 240) % 360, s: hsl.s, l: hsl.l })
    ];
}

function tetrad(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 90) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 180) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 270) % 360, s: hsl.s, l: hsl.l })
    ];
}

function splitcomplement(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 72) % 360, s: hsl.s, l: hsl.l}),
        tinycolor({ h: (h + 216) % 360, s: hsl.s, l: hsl.l})
    ];
}

function analogous(color, results, slices) {
    results = results || 6;
    slices = slices || 30;

    var hsl = tinycolor(color).toHsl();
    var part = 360 / slices;
    var ret = [tinycolor(color)];

    for (hsl.h = ((hsl.h - (part * results >> 1)) + 720) % 360; --results; ) {
        hsl.h = (hsl.h + part) % 360;
        ret.push(tinycolor(hsl));
    }
    return ret;
}

function monochromatic(color, results) {
    results = results || 6;
    var hsv = tinycolor(color).toHsv();
    var h = hsv.h, s = hsv.s, v = hsv.v;
    var ret = [];
    var modification = 1 / results;

    while (results--) {
        ret.push(tinycolor({ h: h, s: s, v: v}));
        v = (v + modification) % 1;
    }

    return ret;
}

// Utility Functions
// ---------------------

tinycolor.mix = function(color1, color2, amount) {
    amount = (amount === 0) ? 0 : (amount || 50);

    var rgb1 = tinycolor(color1).toRgb();
    var rgb2 = tinycolor(color2).toRgb();

    var p = amount / 100;

    var rgba = {
        r: ((rgb2.r - rgb1.r) * p) + rgb1.r,
        g: ((rgb2.g - rgb1.g) * p) + rgb1.g,
        b: ((rgb2.b - rgb1.b) * p) + rgb1.b,
        a: ((rgb2.a - rgb1.a) * p) + rgb1.a
    };

    return tinycolor(rgba);
};


// Readability Functions
// ---------------------
// <http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef (WCAG Version 2)

// `contrast`
// Analyze the 2 colors and returns the color contrast defined by (WCAG Version 2)
tinycolor.readability = function(color1, color2) {
    var c1 = tinycolor(color1);
    var c2 = tinycolor(color2);
    return (Math.max(c1.getLuminance(),c2.getLuminance())+0.05) / (Math.min(c1.getLuminance(),c2.getLuminance())+0.05);
};

// `isReadable`
// Ensure that foreground and background color combinations meet WCAG2 guidelines.
// The third argument is an optional Object.
//      the 'level' property states 'AA' or 'AAA' - if missing or invalid, it defaults to 'AA';
//      the 'size' property states 'large' or 'small' - if missing or invalid, it defaults to 'small'.
// If the entire object is absent, isReadable defaults to {level:"AA",size:"small"}.

// *Example*
//    tinycolor.isReadable("#000", "#111") => false
//    tinycolor.isReadable("#000", "#111",{level:"AA",size:"large"}) => false
tinycolor.isReadable = function(color1, color2, wcag2) {
    var readability = tinycolor.readability(color1, color2);
    var wcag2Parms, out;

    out = false;

    wcag2Parms = validateWCAG2Parms(wcag2);
    switch (wcag2Parms.level + wcag2Parms.size) {
        case "AAsmall":
        case "AAAlarge":
            out = readability >= 4.5;
            break;
        case "AAlarge":
            out = readability >= 3;
            break;
        case "AAAsmall":
            out = readability >= 7;
            break;
    }
    return out;

};

// `mostReadable`
// Given a base color and a list of possible foreground or background
// colors for that base, returns the most readable color.
// Optionally returns Black or White if the most readable color is unreadable.
// *Example*
//    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:false}).toHexString(); // "#112255"
//    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:true}).toHexString();  // "#ffffff"
//    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"large"}).toHexString(); // "#faf3f3"
//    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"small"}).toHexString(); // "#ffffff"
tinycolor.mostReadable = function(baseColor, colorList, args) {
    var bestColor = null;
    var bestScore = 0;
    var readability;
    var includeFallbackColors, level, size ;
    args = args || {};
    includeFallbackColors = args.includeFallbackColors ;
    level = args.level;
    size = args.size;

    for (var i= 0; i < colorList.length ; i++) {
        readability = tinycolor.readability(baseColor, colorList[i]);
        if (readability > bestScore) {
            bestScore = readability;
            bestColor = tinycolor(colorList[i]);
        }
    }

    if (tinycolor.isReadable(baseColor, bestColor, {"level":level,"size":size}) || !includeFallbackColors) {
        return bestColor;
    }
    else {
        args.includeFallbackColors=false;
        return tinycolor.mostReadable(baseColor,["#fff", "#000"],args);
    }
};


// Big List of Colors
// ------------------
// <http://www.w3.org/TR/css3-color/#svg-color>
var names = tinycolor.names = {
    aliceblue: "f0f8ff",
    antiquewhite: "faebd7",
    aqua: "0ff",
    aquamarine: "7fffd4",
    azure: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "000",
    blanchedalmond: "ffebcd",
    blue: "00f",
    blueviolet: "8a2be2",
    brown: "a52a2a",
    burlywood: "deb887",
    burntsienna: "ea7e5d",
    cadetblue: "5f9ea0",
    chartreuse: "7fff00",
    chocolate: "d2691e",
    coral: "ff7f50",
    cornflowerblue: "6495ed",
    cornsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "0ff",
    darkblue: "00008b",
    darkcyan: "008b8b",
    darkgoldenrod: "b8860b",
    darkgray: "a9a9a9",
    darkgreen: "006400",
    darkgrey: "a9a9a9",
    darkkhaki: "bdb76b",
    darkmagenta: "8b008b",
    darkolivegreen: "556b2f",
    darkorange: "ff8c00",
    darkorchid: "9932cc",
    darkred: "8b0000",
    darksalmon: "e9967a",
    darkseagreen: "8fbc8f",
    darkslateblue: "483d8b",
    darkslategray: "2f4f4f",
    darkslategrey: "2f4f4f",
    darkturquoise: "00ced1",
    darkviolet: "9400d3",
    deeppink: "ff1493",
    deepskyblue: "00bfff",
    dimgray: "696969",
    dimgrey: "696969",
    dodgerblue: "1e90ff",
    firebrick: "b22222",
    floralwhite: "fffaf0",
    forestgreen: "228b22",
    fuchsia: "f0f",
    gainsboro: "dcdcdc",
    ghostwhite: "f8f8ff",
    gold: "ffd700",
    goldenrod: "daa520",
    gray: "808080",
    green: "008000",
    greenyellow: "adff2f",
    grey: "808080",
    honeydew: "f0fff0",
    hotpink: "ff69b4",
    indianred: "cd5c5c",
    indigo: "4b0082",
    ivory: "fffff0",
    khaki: "f0e68c",
    lavender: "e6e6fa",
    lavenderblush: "fff0f5",
    lawngreen: "7cfc00",
    lemonchiffon: "fffacd",
    lightblue: "add8e6",
    lightcoral: "f08080",
    lightcyan: "e0ffff",
    lightgoldenrodyellow: "fafad2",
    lightgray: "d3d3d3",
    lightgreen: "90ee90",
    lightgrey: "d3d3d3",
    lightpink: "ffb6c1",
    lightsalmon: "ffa07a",
    lightseagreen: "20b2aa",
    lightskyblue: "87cefa",
    lightslategray: "789",
    lightslategrey: "789",
    lightsteelblue: "b0c4de",
    lightyellow: "ffffe0",
    lime: "0f0",
    limegreen: "32cd32",
    linen: "faf0e6",
    magenta: "f0f",
    maroon: "800000",
    mediumaquamarine: "66cdaa",
    mediumblue: "0000cd",
    mediumorchid: "ba55d3",
    mediumpurple: "9370db",
    mediumseagreen: "3cb371",
    mediumslateblue: "7b68ee",
    mediumspringgreen: "00fa9a",
    mediumturquoise: "48d1cc",
    mediumvioletred: "c71585",
    midnightblue: "191970",
    mintcream: "f5fffa",
    mistyrose: "ffe4e1",
    moccasin: "ffe4b5",
    navajowhite: "ffdead",
    navy: "000080",
    oldlace: "fdf5e6",
    olive: "808000",
    olivedrab: "6b8e23",
    orange: "ffa500",
    orangered: "ff4500",
    orchid: "da70d6",
    palegoldenrod: "eee8aa",
    palegreen: "98fb98",
    paleturquoise: "afeeee",
    palevioletred: "db7093",
    papayawhip: "ffefd5",
    peachpuff: "ffdab9",
    peru: "cd853f",
    pink: "ffc0cb",
    plum: "dda0dd",
    powderblue: "b0e0e6",
    purple: "800080",
    rebeccapurple: "663399",
    red: "f00",
    rosybrown: "bc8f8f",
    royalblue: "4169e1",
    saddlebrown: "8b4513",
    salmon: "fa8072",
    sandybrown: "f4a460",
    seagreen: "2e8b57",
    seashell: "fff5ee",
    sienna: "a0522d",
    silver: "c0c0c0",
    skyblue: "87ceeb",
    slateblue: "6a5acd",
    slategray: "708090",
    slategrey: "708090",
    snow: "fffafa",
    springgreen: "00ff7f",
    steelblue: "4682b4",
    tan: "d2b48c",
    teal: "008080",
    thistle: "d8bfd8",
    tomato: "ff6347",
    turquoise: "40e0d0",
    violet: "ee82ee",
    wheat: "f5deb3",
    white: "fff",
    whitesmoke: "f5f5f5",
    yellow: "ff0",
    yellowgreen: "9acd32"
};

// Make it easy to access colors via `hexNames[hex]`
var hexNames = tinycolor.hexNames = flip(names);


// Utilities
// ---------

// `{ 'name1': 'val1' }` becomes `{ 'val1': 'name1' }`
function flip(o) {
    var flipped = { };
    for (var i in o) {
        if (o.hasOwnProperty(i)) {
            flipped[o[i]] = i;
        }
    }
    return flipped;
}

// Return a valid alpha value [0,1] with all invalid values being set to 1
function boundAlpha(a) {
    a = parseFloat(a);

    if (isNaN(a) || a < 0 || a > 1) {
        a = 1;
    }

    return a;
}

// Take input from [0, n] and return it as [0, 1]
function bound01(n, max) {
    if (isOnePointZero(n)) { n = "100%"; }

    var processPercent = isPercentage(n);
    n = mathMin(max, mathMax(0, parseFloat(n)));

    // Automatically convert percentage into number
    if (processPercent) {
        n = parseInt(n * max, 10) / 100;
    }

    // Handle floating point rounding errors
    if ((Math.abs(n - max) < 0.000001)) {
        return 1;
    }

    // Convert into [0, 1] range if it isn't already
    return (n % max) / parseFloat(max);
}

// Force a number between 0 and 1
function clamp01(val) {
    return mathMin(1, mathMax(0, val));
}

// Parse a base-16 hex value into a base-10 integer
function parseIntFromHex(val) {
    return parseInt(val, 16);
}

// Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
// <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
function isOnePointZero(n) {
    return typeof n == "string" && n.indexOf('.') != -1 && parseFloat(n) === 1;
}

// Check to see if string passed in is a percentage
function isPercentage(n) {
    return typeof n === "string" && n.indexOf('%') != -1;
}

// Force a hex value to have 2 characters
function pad2(c) {
    return c.length == 1 ? '0' + c : '' + c;
}

// Replace a decimal with it's percentage value
function convertToPercentage(n) {
    if (n <= 1) {
        n = (n * 100) + "%";
    }

    return n;
}

// Converts a decimal to a hex value
function convertDecimalToHex(d) {
    return Math.round(parseFloat(d) * 255).toString(16);
}
// Converts a hex value to a decimal
function convertHexToDecimal(h) {
    return (parseIntFromHex(h) / 255);
}

var matchers = (function() {

    // <http://www.w3.org/TR/css3-values/#integers>
    var CSS_INTEGER = "[-\\+]?\\d+%?";

    // <http://www.w3.org/TR/css3-values/#number-value>
    var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";

    // Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
    var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";

    // Actual matching.
    // Parentheses and commas are optional, but not required.
    // Whitespace can take the place of commas or opening paren
    var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
    var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";

    return {
        CSS_UNIT: new RegExp(CSS_UNIT),
        rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
        rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
        hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
        hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
        hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
        hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
        hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
    };
})();

// `isValidCSSUnit`
// Take in a single string / number and check to see if it looks like a CSS unit
// (see `matchers` above for definition).
function isValidCSSUnit(color) {
    return !!matchers.CSS_UNIT.exec(color);
}

// `stringInputToObject`
// Permissive string parsing.  Take in a number of formats, and output an object
// based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
function stringInputToObject(color) {

    color = color.replace(trimLeft,'').replace(trimRight, '').toLowerCase();
    var named = false;
    if (names[color]) {
        color = names[color];
        named = true;
    }
    else if (color == 'transparent') {
        return { r: 0, g: 0, b: 0, a: 0, format: "name" };
    }

    // Try to match string input using regular expressions.
    // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
    // Just return an object and let the conversion functions handle that.
    // This way the result will be the same whether the tinycolor is initialized with string or object.
    var match;
    if ((match = matchers.rgb.exec(color))) {
        return { r: match[1], g: match[2], b: match[3] };
    }
    if ((match = matchers.rgba.exec(color))) {
        return { r: match[1], g: match[2], b: match[3], a: match[4] };
    }
    if ((match = matchers.hsl.exec(color))) {
        return { h: match[1], s: match[2], l: match[3] };
    }
    if ((match = matchers.hsla.exec(color))) {
        return { h: match[1], s: match[2], l: match[3], a: match[4] };
    }
    if ((match = matchers.hsv.exec(color))) {
        return { h: match[1], s: match[2], v: match[3] };
    }
    if ((match = matchers.hsva.exec(color))) {
        return { h: match[1], s: match[2], v: match[3], a: match[4] };
    }
    if ((match = matchers.hex8.exec(color))) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            a: convertHexToDecimal(match[4]),
            format: named ? "name" : "hex8"
        };
    }
    if ((match = matchers.hex6.exec(color))) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            format: named ? "name" : "hex"
        };
    }
    if ((match = matchers.hex4.exec(color))) {
        return {
            r: parseIntFromHex(match[1] + '' + match[1]),
            g: parseIntFromHex(match[2] + '' + match[2]),
            b: parseIntFromHex(match[3] + '' + match[3]),
            a: convertHexToDecimal(match[4] + '' + match[4]),
            format: named ? "name" : "hex8"
        };
    }
    if ((match = matchers.hex3.exec(color))) {
        return {
            r: parseIntFromHex(match[1] + '' + match[1]),
            g: parseIntFromHex(match[2] + '' + match[2]),
            b: parseIntFromHex(match[3] + '' + match[3]),
            format: named ? "name" : "hex"
        };
    }

    return false;
}

function validateWCAG2Parms(parms) {
    // return valid WCAG2 parms for isReadable.
    // If input parms are invalid, return {"level":"AA", "size":"small"}
    var level, size;
    parms = parms || {"level":"AA", "size":"small"};
    level = (parms.level || "AA").toUpperCase();
    size = (parms.size || "small").toLowerCase();
    if (level !== "AA" && level !== "AAA") {
        level = "AA";
    }
    if (size !== "small" && size !== "large") {
        size = "small";
    }
    return {"level":level, "size":size};
}

// Node: Export function
if ( true && module.exports) {
    module.exports = tinycolor;
}
// AMD/requirejs: Define the module
else if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {return tinycolor;}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}
// Browser: Expose to window
else {}

})(Math);


/***/ }),

/***/ "7af5":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7c35":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_chrome_vue_vue_type_style_index_0_id_632d01b2_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("22c7");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_chrome_vue_vue_type_style_index_0_id_632d01b2_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_chrome_vue_vue_type_style_index_0_id_632d01b2_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "80db":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_sketch_vue_vue_type_style_index_0_id_772d577a_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b8c1");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_sketch_vue_vue_type_style_index_0_id_772d577a_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_sketch_vue_vue_type_style_index_0_id_772d577a_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "84a2":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = throttle;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "858a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_compact_vue_vue_type_style_index_0_id_807f34e4_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("dd24");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_compact_vue_vue_type_style_index_0_id_807f34e4_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_compact_vue_vue_type_style_index_0_id_807f34e4_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "85f3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_saturation_vue_vue_type_style_index_0_id_03f1d219_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4a52");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_saturation_vue_vue_type_style_index_0_id_03f1d219_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_saturation_vue_vue_type_style_index_0_id_03f1d219_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "914c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "98ee":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_photoshop_vue_vue_type_style_index_0_id_47d6e71c_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("df9a");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_photoshop_vue_vue_type_style_index_0_id_47d6e71c_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_photoshop_vue_vue_type_style_index_0_id_47d6e71c_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "acca":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_grayscale_vue_vue_type_style_index_0_id_a93f49bc_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b429");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_grayscale_vue_vue_type_style_index_0_id_a93f49bc_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_grayscale_vue_vue_type_style_index_0_id_a93f49bc_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "b04e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_slider_vue_vue_type_style_index_0_id_0e57d5f8_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c19f");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_slider_vue_vue_type_style_index_0_id_0e57d5f8_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_slider_vue_vue_type_style_index_0_id_0e57d5f8_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "b429":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "b8c1":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "be89":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_alpha_vue_vue_type_style_index_0_id_107b85c4_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e346");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_alpha_vue_vue_type_style_index_0_id_107b85c4_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_alpha_vue_vue_type_style_index_0_id_107b85c4_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "c19f":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c20b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c688":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_checkboard_vue_vue_type_style_index_0_id_6e1e9e4e_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("914c");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_checkboard_vue_vue_type_style_index_0_id_6e1e9e4e_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_checkboard_vue_vue_type_style_index_0_id_6e1e9e4e_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "dd24":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "df9a":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "e346":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "e89b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_editable_input_vue_vue_type_style_index_0_id_9d79aee2_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1afc");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_editable_input_vue_vue_type_style_index_0_id_9d79aee2_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_editable_input_vue_vue_type_style_index_0_id_9d79aee2_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "ed2d":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fae3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "components", function() { return /* reexport */ components; });
__webpack_require__.d(__webpack_exports__, "Alpha", function() { return /* reexport */ components_alpha; });
__webpack_require__.d(__webpack_exports__, "Checkboard", function() { return /* reexport */ components_checkboard; });
__webpack_require__.d(__webpack_exports__, "Chrome", function() { return /* reexport */ components_chrome; });
__webpack_require__.d(__webpack_exports__, "Compact", function() { return /* reexport */ components_compact; });
__webpack_require__.d(__webpack_exports__, "EditableInput", function() { return /* reexport */ components_editable_input; });
__webpack_require__.d(__webpack_exports__, "Grayscale", function() { return /* reexport */ components_grayscale; });
__webpack_require__.d(__webpack_exports__, "Hue", function() { return /* reexport */ components_hue; });
__webpack_require__.d(__webpack_exports__, "Material", function() { return /* reexport */ components_material; });
__webpack_require__.d(__webpack_exports__, "Photoshop", function() { return /* reexport */ components_photoshop; });
__webpack_require__.d(__webpack_exports__, "Saturation", function() { return /* reexport */ components_saturation; });
__webpack_require__.d(__webpack_exports__, "Sketch", function() { return /* reexport */ components_sketch; });
__webpack_require__.d(__webpack_exports__, "Slider", function() { return /* reexport */ components_slider; });
__webpack_require__.d(__webpack_exports__, "Swatches", function() { return /* reexport */ components_swatches; });
__webpack_require__.d(__webpack_exports__, "Twitter", function() { return /* reexport */ components_twitter; });
__webpack_require__.d(__webpack_exports__, "ColorPicker", function() { return /* reexport */ components_color_picker; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/vue-loader-v16/dist/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/alpha/alpha.vue?vue&type=template&id=107b85c4


const _hoisted_1 = { class: "vc-alpha" }
const _hoisted_2 = { class: "vc-alpha-checkboard-wrap" }
const _hoisted_3 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", { class: "vc-alpha-picker" }, null, -1)
const _hoisted_4 = [
  _hoisted_3
]

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_checkboard = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("checkboard")

  return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", _hoisted_1, [
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_2, [
      Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_checkboard)
    ]),
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
      class: "vc-alpha-gradient",
      style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])({ background: _ctx.gradientColor })
    }, null, 4),
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
      class: "vc-alpha-container",
      ref: "container",
      onMousedown: _cache[0] || (_cache[0] = (...args) => (_ctx.handleMouseDown && _ctx.handleMouseDown(...args))),
      onTouchmove: _cache[1] || (_cache[1] = (...args) => (_ctx.handleChange && _ctx.handleChange(...args))),
      onTouchstart: _cache[2] || (_cache[2] = (...args) => (_ctx.handleChange && _ctx.handleChange(...args)))
    }, [
      Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
        class: "vc-alpha-pointer",
        style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])({ left: _ctx.colors.a * 100 + '%' })
      }, _hoisted_4, 4)
    ], 544)
  ]))
}
// CONCATENATED MODULE: ./src/components/alpha/alpha.vue?vue&type=template&id=107b85c4

// CONCATENATED MODULE: ./node_modules/vue-loader-v16/dist/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/checkboard/checkboard.vue?vue&type=template&id=6e1e9e4e


function checkboardvue_type_template_id_6e1e9e4e_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    class: "vc-checkerboard",
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])(_ctx.bgStyle)
  }, null, 4))
}
// CONCATENATED MODULE: ./src/components/checkboard/checkboard.vue?vue&type=template&id=6e1e9e4e

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/checkboard/checkboard.vue?vue&type=script&lang=js

const _checkboardCache = {};


/* harmony default export */ var checkboardvue_type_script_lang_js = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  name: "Checkboard",
  props: {
    size: {
      type: [Number, String],
      default: 8,
    },
    white: {
      type: String,
      default: "#fff",
    },
    grey: {
      type: String,
      default: "#e6e6e6",
    },
  },
  computed: {
    bgStyle() {
      return {
        "background-image": `url(${getCheckboard(
          this.white,
          this.grey,
          this.size
        )})`,
      };
    },
  },
}));

/**
 * get base 64 data by canvas
 *
 * @param {String} c1 hex color
 * @param {String} c2 hex color
 * @param {Number} size
 */

function renderCheckboard(c1, c2, size) {
  // Dont Render On Server
  if (typeof document === "undefined") {
    return null;
  }
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size * 2;
  const ctx = canvas.getContext("2d");
  // If no context can be found, return early.
  if (!ctx) {
    return null;
  }
  ctx.fillStyle = c1;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = c2;
  ctx.fillRect(0, 0, size, size);
  ctx.translate(size, size);
  ctx.fillRect(0, 0, size, size);
  return canvas.toDataURL();
}

/**
 * get checkboard base data and cache
 *
 * @param {String} c1 hex color
 * @param {String} c2 hex color
 * @param {Number} size
 */

function getCheckboard(c1, c2, size) {
  const key = `${c1},${c2},${size}`;

  if (_checkboardCache[key]) {
    return _checkboardCache[key];
  }
  const checkboard = renderCheckboard(c1, c2, size);
  _checkboardCache[key] = checkboard;
  return checkboard;
}

// CONCATENATED MODULE: ./src/components/checkboard/checkboard.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/checkboard/checkboard.vue?vue&type=style&index=0&id=6e1e9e4e&lang=css
var checkboardvue_type_style_index_0_id_6e1e9e4e_lang_css = __webpack_require__("c688");

// CONCATENATED MODULE: ./src/components/checkboard/checkboard.vue





checkboardvue_type_script_lang_js.render = checkboardvue_type_template_id_6e1e9e4e_render

/* harmony default export */ var checkboard = (checkboardvue_type_script_lang_js);
// CONCATENATED MODULE: ./src/components/checkboard/index.ts

/* harmony default export */ var components_checkboard = (checkboard);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/alpha/alpha.vue?vue&type=script&lang=js



/* harmony default export */ var alphavue_type_script_lang_js = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  name: "Alpha",
  props: {
    value: Object,
    onChange: Function,
  },
  components: {
    checkboard: components_checkboard,
  },
  computed: {
    colors() {
      return this.value;
    },
    gradientColor() {
      const { rgba } = this.colors;
      const rgbStr = [rgba.r, rgba.g, rgba.b].join(",");
      return `linear-gradient(to right, rgba(${rgbStr}, 0) 0%, rgba(${rgbStr}, 1) 100%)`;
    },
  },
  methods: {
    handleChange(e, skip) {
      !skip && e.preventDefault();
      const { container } = this.$refs;
      if (!container) {
        // for some edge cases, container may not exist. see #220
        return;
      }
      const containerWidth = container.clientWidth;

      const xOffset =
        container.getBoundingClientRect().left + window.pageXOffset;
      const pageX = e.pageX || (e.touches ? e.touches[0].pageX : 0);
      const left = pageX - xOffset;

      let a;
      if (left < 0) {
        a = 0;
      } else if (left > containerWidth) {
        a = 1;
      } else {
        a = Math.round((left * 100) / containerWidth) / 100;
      }

      if (this.colors.a !== a) {
        this.$emit("change", {
          h: this.colors.hsl.h,
          s: this.colors.hsl.s,
          l: this.colors.hsl.l,
          a,
          source: "rgba",
        });
      }
    },
    handleMouseDown(e) {
      this.handleChange(e, true);
      window.addEventListener("mousemove", this.handleChange);
      window.addEventListener("mouseup", this.handleMouseUp);
    },
    handleMouseUp() {
      this.unbindEventListeners();
    },
    unbindEventListeners() {
      window.removeEventListener("mousemove", this.handleChange);
      window.removeEventListener("mouseup", this.handleMouseUp);
    },
  },
}));

// CONCATENATED MODULE: ./src/components/alpha/alpha.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/alpha/alpha.vue?vue&type=style&index=0&id=107b85c4&lang=css
var alphavue_type_style_index_0_id_107b85c4_lang_css = __webpack_require__("be89");

// CONCATENATED MODULE: ./src/components/alpha/alpha.vue





alphavue_type_script_lang_js.render = render

/* harmony default export */ var alpha = (alphavue_type_script_lang_js);
// CONCATENATED MODULE: ./src/components/alpha/index.ts

/* harmony default export */ var components_alpha = (alpha);

// CONCATENATED MODULE: ./node_modules/vue-loader-v16/dist/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/chrome/chrome.vue?vue&type=template&id=632d01b2


const chromevue_type_template_id_632d01b2_hoisted_1 = { class: "vc-chrome-saturation-wrap" }
const chromevue_type_template_id_632d01b2_hoisted_2 = { class: "vc-chrome-body" }
const chromevue_type_template_id_632d01b2_hoisted_3 = { class: "vc-chrome-controls" }
const chromevue_type_template_id_632d01b2_hoisted_4 = { class: "vc-chrome-color-wrap" }
const _hoisted_5 = ["aria-label"]
const _hoisted_6 = { class: "vc-chrome-sliders" }
const _hoisted_7 = { class: "vc-chrome-hue-wrap" }
const _hoisted_8 = {
  key: 0,
  class: "vc-chrome-alpha-wrap"
}
const _hoisted_9 = {
  key: 0,
  class: "vc-chrome-fields-wrap"
}
const _hoisted_10 = { class: "vc-chrome-fields" }
const _hoisted_11 = { class: "vc-chrome-field" }
const _hoisted_12 = { class: "vc-chrome-fields" }
const _hoisted_13 = { class: "vc-chrome-field" }
const _hoisted_14 = { class: "vc-chrome-field" }
const _hoisted_15 = { class: "vc-chrome-field" }
const _hoisted_16 = {
  key: 0,
  class: "vc-chrome-field"
}
const _hoisted_17 = { class: "vc-chrome-fields" }
const _hoisted_18 = { class: "vc-chrome-field" }
const _hoisted_19 = { class: "vc-chrome-field" }
const _hoisted_20 = { class: "vc-chrome-field" }
const _hoisted_21 = {
  key: 0,
  class: "vc-chrome-field"
}
const _hoisted_22 = { class: "vc-chrome-toggle-icon" }
const _hoisted_23 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("path", {
  fill: "#333",
  d: "M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z"
}, null, -1)
const _hoisted_24 = [
  _hoisted_23
]
const _hoisted_25 = { class: "vc-chrome-toggle-icon-highlight" }

function chromevue_type_template_id_632d01b2_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_saturation = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("saturation")
  const _component_checkboard = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("checkboard")
  const _component_hue = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("hue")
  const _component_alpha = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("alpha")
  const _component_ed_in = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("ed-in")

  return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    role: "application",
    "aria-label": "Chrome color picker",
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(['vc-chrome', _ctx.disableAlpha ? 'vc-chrome__disable-alpha' : ''])
  }, [
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", chromevue_type_template_id_632d01b2_hoisted_1, [
      Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_saturation, {
        value: _ctx.colors,
        onChange: _ctx.childChange
      }, null, 8, ["value", "onChange"])
    ]),
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", chromevue_type_template_id_632d01b2_hoisted_2, [
      Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", chromevue_type_template_id_632d01b2_hoisted_3, [
        Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", chromevue_type_template_id_632d01b2_hoisted_4, [
          Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
            "aria-label": `current color is ${_ctx.colors.hex}`,
            class: "vc-chrome-active-color",
            style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])({ background: _ctx.activeColor })
          }, null, 12, _hoisted_5),
          (!_ctx.disableAlpha)
            ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_checkboard, { key: 0 }))
            : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)
        ]),
        Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_6, [
          Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_7, [
            Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_hue, {
              value: _ctx.colors,
              onChange: _ctx.childChange
            }, null, 8, ["value", "onChange"])
          ]),
          (!_ctx.disableAlpha)
            ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", _hoisted_8, [
                Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_alpha, {
                  value: _ctx.colors,
                  onChange: _ctx.childChange
                }, null, 8, ["value", "onChange"])
              ]))
            : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)
        ])
      ]),
      (!_ctx.disableFields)
        ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", _hoisted_9, [
            Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_10, [
              Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_11, [
                (!_ctx.hasAlpha)
                  ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_ed_in, {
                      key: 0,
                      label: "hex",
                      value: _ctx.colors.hex,
                      onChange: _ctx.inputChange
                    }, null, 8, ["value", "onChange"]))
                  : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true),
                (_ctx.hasAlpha)
                  ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_ed_in, {
                      key: 1,
                      label: "hex",
                      value: _ctx.colors.hex8,
                      onChange: _ctx.inputChange
                    }, null, 8, ["value", "onChange"]))
                  : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)
              ])
            ], 512), [
              [external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.fieldsIndex === 0]
            ]),
            Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_12, [
              Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_13, [
                Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ed_in, {
                  label: "r",
                  value: _ctx.colors.rgba.r,
                  onChange: _ctx.inputChange
                }, null, 8, ["value", "onChange"])
              ]),
              Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_14, [
                Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ed_in, {
                  label: "g",
                  value: _ctx.colors.rgba.g,
                  onChange: _ctx.inputChange
                }, null, 8, ["value", "onChange"])
              ]),
              Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_15, [
                Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ed_in, {
                  label: "b",
                  value: _ctx.colors.rgba.b,
                  onChange: _ctx.inputChange
                }, null, 8, ["value", "onChange"])
              ]),
              (!_ctx.disableAlpha)
                ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", _hoisted_16, [
                    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ed_in, {
                      label: "a",
                      value: _ctx.colors.a,
                      "arrow-offset": 0.01,
                      max: 1,
                      onChange: _ctx.inputChange
                    }, null, 8, ["value", "arrow-offset", "onChange"])
                  ]))
                : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)
            ], 512), [
              [external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.fieldsIndex === 1]
            ]),
            Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_17, [
              Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_18, [
                Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ed_in, {
                  label: "h",
                  value: _ctx.hsl.h,
                  onChange: _ctx.inputChange
                }, null, 8, ["value", "onChange"])
              ]),
              Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_19, [
                Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ed_in, {
                  label: "s",
                  value: _ctx.hsl.s,
                  onChange: _ctx.inputChange
                }, null, 8, ["value", "onChange"])
              ]),
              Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_20, [
                Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ed_in, {
                  label: "l",
                  value: _ctx.hsl.l,
                  onChange: _ctx.inputChange
                }, null, 8, ["value", "onChange"])
              ]),
              (!_ctx.disableAlpha)
                ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", _hoisted_21, [
                    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ed_in, {
                      label: "a",
                      value: _ctx.colors.a,
                      "arrow-offset": 0.01,
                      max: 1,
                      onChange: _ctx.inputChange
                    }, null, 8, ["value", "arrow-offset", "onChange"])
                  ]))
                : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)
            ], 512), [
              [external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.fieldsIndex === 2]
            ]),
            Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
              class: "vc-chrome-toggle-btn",
              role: "button",
              "aria-label": "Change another color definition",
              onClick: _cache[3] || (_cache[3] = (...args) => (_ctx.toggleViews && _ctx.toggleViews(...args)))
            }, [
              Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_22, [
                (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("svg", {
                  style: {"width":"24px","height":"24px"},
                  viewBox: "0 0 24 24",
                  onMouseover: _cache[0] || (_cache[0] = (...args) => (_ctx.showHighlight && _ctx.showHighlight(...args))),
                  onMouseenter: _cache[1] || (_cache[1] = (...args) => (_ctx.showHighlight && _ctx.showHighlight(...args))),
                  onMouseout: _cache[2] || (_cache[2] = (...args) => (_ctx.hideHighlight && _ctx.hideHighlight(...args)))
                }, _hoisted_24, 32))
              ]),
              Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_25, null, 512), [
                [external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.highlight]
              ])
            ])
          ]))
        : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)
    ])
  ], 2))
}
// CONCATENATED MODULE: ./src/components/chrome/chrome.vue?vue&type=template&id=632d01b2

// EXTERNAL MODULE: ./node_modules/tinycolor2/tinycolor.js
var tinycolor = __webpack_require__("66cb");
var tinycolor_default = /*#__PURE__*/__webpack_require__.n(tinycolor);

// CONCATENATED MODULE: ./src/mixin/color.ts

function _colorChange(data, oldHue) {
    // const alpha = data && data.a;
    var color = tinycolor_default()(data);
    // if (color && (color._a === undefined || color._a === null)) {
    //   color.setAlpha(alpha || 1);
    // }
    var hsl = color.toHsl();
    var hsv = color.toHsv();
    // if (hsl.s === 0) {
    //   hsv.h = hsl.h = data.h || (data.hsl && data.hsl.h) || oldHue || 0;
    // }
    /* --- comment this block to fix #109, may cause #25 again --- */
    // when the hsv.v is less than 0.0164 (base on test)
    // because of possible loss of precision
    // the result of hue and saturation would be miscalculated
    // if (hsv.v < 0.0164) {
    //   hsv.h = data.h || (data.hsv && data.hsv.h) || 0
    //   hsv.s = data.s || (data.hsv && data.hsv.s) || 0
    // }
    // if (hsl.l < 0.01) {
    //   hsl.h = data.h || (data.hsl && data.hsl.h) || 0
    //   hsl.s = data.s || (data.hsl && data.hsl.s) || 0
    // }
    /* ------ */
    return {
        hsl: hsl,
        hex: color.toHexString().toUpperCase(),
        hex8: color.toHex8String().toUpperCase(),
        rgba: color.toRgb(),
        hsv: hsv,
        oldHue: oldHue || color.getAlpha(),
        // source: data.source,
        a: color.getAlpha(),
    };
}

/* harmony default export */ var mixin_color = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
    model: {
        prop: "modelValue",
        event: "update:modelValue",
    },
    props: ["modelValue"],
    data: function () {
        return {
            val: _colorChange(this.modelValue),
            oldHue: 0,
        };
    },
    computed: {
        colors: {
            get: function () {
                return this.val;
            },
            set: function (newVal) {
                this.val = newVal;
                this.$emit("update:modelValue", this.getModel());
            },
        },
    },
    watch: {
        modelValue: function (newVal) {
            var o = newVal;
            if (o.indexOf("rgba") > -1) {
                var os = o
                    .replace("rgba(", "")
                    .replace(")", "")
                    .replace(/\s/g, "")
                    .split(",");
                o = {
                    r: os[0],
                    g: os[1],
                    b: os[2],
                    a: os[3],
                };
            }
            this.val = _colorChange(o);
        },
    },
    methods: {
        colorChange: function (data, oldHue) {
            this.oldHue = this.colors.hsl.h;
            this.colors = _colorChange(data, oldHue || this.oldHue);
            this.$emit("change", this.colors);
        },
        isValidHex: function (hex) {
            return tinycolor_default()(hex).isValid();
        },
        getModel: function () {
            var rgba = this.val.rgba;
            return "rgba(" + rgba.r + ", " + rgba.g + ", " + rgba.b + ", " + rgba.a + ")";
        },
        // simpleCheckForValidColor(data) {
        //   const keysToCheck = ["r", "g", "b", "a", "h", "s", "l", "v"];
        //   let checked = 0;
        //   let passed = 0;
        //   for (let i = 0; i < keysToCheck.length; i++) {
        //     const letter = keysToCheck[i];
        //     if (data[letter]) {
        //       checked++;
        //       if (!isNaN(data[letter])) {
        //         passed++;
        //       }
        //     }
        //   }
        //   if (checked === passed) {
        //     return data;
        //   }
        // },
        paletteUpperCase: function (palette) {
            return palette.map(function (c) { return c.toUpperCase(); });
        },
        isTransparent: function (color) {
            return tinycolor_default()(color).getAlpha() === 0;
        },
    },
}));

// CONCATENATED MODULE: ./node_modules/vue-loader-v16/dist/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/editable-input/editable-input.vue?vue&type=template&id=9d79aee2


const editable_inputvue_type_template_id_9d79aee2_hoisted_1 = { class: "vc-editable-input" }
const editable_inputvue_type_template_id_9d79aee2_hoisted_2 = ["aria-labelledby"]
const editable_inputvue_type_template_id_9d79aee2_hoisted_3 = ["for", "id"]
const editable_inputvue_type_template_id_9d79aee2_hoisted_4 = { class: "vc-input__desc" }

function editable_inputvue_type_template_id_9d79aee2_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", editable_inputvue_type_template_id_9d79aee2_hoisted_1, [
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
      "aria-labelledby": _ctx.labelId,
      class: "vc-input__input",
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (_ctx.val = $event)),
      onKeydown: _cache[1] || (_cache[1] = (...args) => (_ctx.handleKeyDown && _ctx.handleKeyDown(...args))),
      onInput: _cache[2] || (_cache[2] = (...args) => (_ctx.update && _ctx.update(...args))),
      ref: "input"
    }, null, 40, editable_inputvue_type_template_id_9d79aee2_hoisted_2), [
      [external_commonjs_vue_commonjs2_vue_root_Vue_["vModelText"], _ctx.val]
    ]),
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
      for: _ctx.label,
      class: "vc-input__label",
      id: _ctx.labelId
    }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.labelSpanText), 9, editable_inputvue_type_template_id_9d79aee2_hoisted_3),
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", editable_inputvue_type_template_id_9d79aee2_hoisted_4, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.desc), 1)
  ]))
}
// CONCATENATED MODULE: ./src/components/editable-input/editable-input.vue?vue&type=template&id=9d79aee2

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/editable-input/editable-input.vue?vue&type=script&lang=js


/* harmony default export */ var editable_inputvue_type_script_lang_js = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  name: "editableInput",
  props: {
    label: String,
    labelText: String,
    desc: String,
    value: [String, Number],
    max: Number,
    min: Number,
    arrowOffset: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    val: {
      get() {
        return this.value;
      },
      set(v) {
        // TODO: min
        if (!(this.max === undefined) && +v > this.max) {
          this.$refs.input.value = this.max;
        } else {
          return v;
        }
      },
    },
    labelId() {
      return `input__label__${this.label}__${Math.random()
        .toString()
        .slice(2, 5)}`;
    },
    labelSpanText() {
      return this.labelText || this.label;
    },
  },
  methods: {
    update(e) {
      this.handleChange(e.target.value);
    },
    handleChange(newVal) {
      const data = {};
      data[this.label] = newVal;
      if (data.hex === undefined && data["#"] === undefined) {
        this.$emit("change", data);
      } else if (newVal.length > 5) {
        this.$emit("change", data);
      }
    },
    // **** unused
    // handleBlur (e) {
    //   console.log(e)
    // },
    handleKeyDown(e) {
      let { val } = this;
      const number = Number(val);

      if (number) {
        const amount = this.arrowOffset || 1;

        // Up
        if (e.keyCode === 38) {
          val = number + amount;
          this.handleChange(val);
          e.preventDefault();
        }

        // Down
        if (e.keyCode === 40) {
          val = number - amount;
          this.handleChange(val);
          e.preventDefault();
        }
      }
    },
    // **** unused
    // handleDrag (e) {
    //   console.log(e)
    // },
    // handleMouseDown (e) {
    //   console.log(e)
    // }
  },
}));

// CONCATENATED MODULE: ./src/components/editable-input/editable-input.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/editable-input/editable-input.vue?vue&type=style&index=0&id=9d79aee2&lang=css
var editable_inputvue_type_style_index_0_id_9d79aee2_lang_css = __webpack_require__("e89b");

// CONCATENATED MODULE: ./src/components/editable-input/editable-input.vue





editable_inputvue_type_script_lang_js.render = editable_inputvue_type_template_id_9d79aee2_render

/* harmony default export */ var editable_input = (editable_inputvue_type_script_lang_js);
// CONCATENATED MODULE: ./src/components/editable-input/index.ts

/* harmony default export */ var components_editable_input = (editable_input);

// CONCATENATED MODULE: ./node_modules/vue-loader-v16/dist/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/saturation/saturation.vue?vue&type=template&id=03f1d219


const saturationvue_type_template_id_03f1d219_hoisted_1 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", { class: "vc-saturation--white" }, null, -1)
const saturationvue_type_template_id_03f1d219_hoisted_2 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", { class: "vc-saturation--black" }, null, -1)
const saturationvue_type_template_id_03f1d219_hoisted_3 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", { class: "vc-saturation-circle" }, null, -1)
const saturationvue_type_template_id_03f1d219_hoisted_4 = [
  saturationvue_type_template_id_03f1d219_hoisted_3
]

function saturationvue_type_template_id_03f1d219_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    class: "vc-saturation",
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])({ background: _ctx.bgColor }),
    ref: "container",
    onMousedown: _cache[0] || (_cache[0] = (...args) => (_ctx.handleMouseDown && _ctx.handleMouseDown(...args))),
    onTouchmove: _cache[1] || (_cache[1] = (...args) => (_ctx.handleChange && _ctx.handleChange(...args))),
    onTouchstart: _cache[2] || (_cache[2] = (...args) => (_ctx.handleChange && _ctx.handleChange(...args)))
  }, [
    saturationvue_type_template_id_03f1d219_hoisted_1,
    saturationvue_type_template_id_03f1d219_hoisted_2,
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
      class: "vc-saturation-pointer",
      style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])({ top: _ctx.pointerTop, left: _ctx.pointerLeft })
    }, saturationvue_type_template_id_03f1d219_hoisted_4, 4)
  ], 36))
}
// CONCATENATED MODULE: ./src/components/saturation/saturation.vue?vue&type=template&id=03f1d219

// EXTERNAL MODULE: ./node_modules/clamp/index.js
var clamp = __webpack_require__("53a5");
var clamp_default = /*#__PURE__*/__webpack_require__.n(clamp);

// EXTERNAL MODULE: ./node_modules/lodash.throttle/index.js
var lodash_throttle = __webpack_require__("84a2");
var lodash_throttle_default = /*#__PURE__*/__webpack_require__.n(lodash_throttle);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/saturation/saturation.vue?vue&type=script&lang=js




/* harmony default export */ var saturationvue_type_script_lang_js = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  name: "Saturation",
  props: {
    value: Object,
  },
  computed: {
    colors() {
      return this.value;
    },
    bgColor() {
      return `hsl(${this.colors.hsv.h}, 100%, 50%)`;
    },
    pointerTop() {
      return `${-(this.colors.hsv.v * 100) + 1 + 100}%`;
    },
    pointerLeft() {
      return `${this.colors.hsv.s * 100}%`;
    },
  },
  methods: {
    throttle: lodash_throttle_default()(
      (fn, data) => {
        fn(data);
      },
      20,
      {
        leading: true,
        trailing: false,
      }
    ),
    handleChange(e, skip) {
      !skip && e.preventDefault();
      const { container } = this.$refs;
      if (!container) {
        // for some edge cases, container may not exist. see #220
        return;
      }
      const containerWidth = container.clientWidth;
      const containerHeight = container.clientHeight;

      const xOffset =
        container.getBoundingClientRect().left + window.pageXOffset;
      const yOffset =
        container.getBoundingClientRect().top + window.pageYOffset;
      const pageX = e.pageX || (e.touches ? e.touches[0].pageX : 0);
      const pageY = e.pageY || (e.touches ? e.touches[0].pageY : 0);
      const left = clamp_default()(pageX - xOffset, 0, containerWidth);
      const top = clamp_default()(pageY - yOffset, 0, containerHeight);
      const saturation = left / containerWidth;
      const bright = clamp_default()(-(top / containerHeight) + 1, 0, 1);

      this.throttle(this.onChange, {
        h: this.colors.hsv.h,
        s: saturation,
        v: bright,
        a: this.colors.hsv.a,
        source: "hsva",
      });
    },
    onChange(param) {
      this.$emit("change", param);
    },
    handleMouseDown(e) {
      // this.handleChange(e, true)
      window.addEventListener("mousemove", this.handleChange);
      window.addEventListener("mouseup", this.handleChange);
      window.addEventListener("mouseup", this.handleMouseUp);
    },
    handleMouseUp(e) {
      this.unbindEventListeners();
    },
    unbindEventListeners() {
      window.removeEventListener("mousemove", this.handleChange);
      window.removeEventListener("mouseup", this.handleChange);
      window.removeEventListener("mouseup", this.handleMouseUp);
    },
  },
}));

// CONCATENATED MODULE: ./src/components/saturation/saturation.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/saturation/saturation.vue?vue&type=style&index=0&id=03f1d219&lang=css
var saturationvue_type_style_index_0_id_03f1d219_lang_css = __webpack_require__("85f3");

// CONCATENATED MODULE: ./src/components/saturation/saturation.vue





saturationvue_type_script_lang_js.render = saturationvue_type_template_id_03f1d219_render

/* harmony default export */ var saturation_saturation = (saturationvue_type_script_lang_js);
// CONCATENATED MODULE: ./src/components/saturation/index.ts

/* harmony default export */ var components_saturation = (saturation_saturation);

// CONCATENATED MODULE: ./node_modules/vue-loader-v16/dist/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/hue/hue.vue?vue&type=template&id=cc3ca1ac


const huevue_type_template_id_cc3ca1ac_hoisted_1 = ["aria-valuenow"]
const huevue_type_template_id_cc3ca1ac_hoisted_2 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", { class: "vc-hue-picker" }, null, -1)
const huevue_type_template_id_cc3ca1ac_hoisted_3 = [
  huevue_type_template_id_cc3ca1ac_hoisted_2
]

function huevue_type_template_id_cc3ca1ac_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(['vc-hue', _ctx.directionClass])
  }, [
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
      class: "vc-hue-container",
      role: "slider",
      "aria-valuenow": _ctx.colors.hsl.h,
      "aria-valuemin": "0",
      "aria-valuemax": "360",
      ref: "container",
      onMousedown: _cache[0] || (_cache[0] = (...args) => (_ctx.handleMouseDown && _ctx.handleMouseDown(...args))),
      onTouchmove: _cache[1] || (_cache[1] = (...args) => (_ctx.handleChange && _ctx.handleChange(...args))),
      onTouchstart: _cache[2] || (_cache[2] = (...args) => (_ctx.handleChange && _ctx.handleChange(...args)))
    }, [
      Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
        class: "vc-hue-pointer",
        style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])({ top: _ctx.pointerTop, left: _ctx.pointerLeft }),
        role: "presentation"
      }, huevue_type_template_id_cc3ca1ac_hoisted_3, 4)
    ], 40, huevue_type_template_id_cc3ca1ac_hoisted_1)
  ], 2))
}
// CONCATENATED MODULE: ./src/components/hue/hue.vue?vue&type=template&id=cc3ca1ac

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/hue/hue.vue?vue&type=script&lang=js


/* harmony default export */ var huevue_type_script_lang_js = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  name: "Hue",
  props: {
    value: Object,
    direction: {
      type: String,
      // [horizontal | vertical]
      default: "horizontal",
    },
  },
  data() {
    return {
      oldHue: 0,
      pullDirection: "",
    };
  },
  watch: {
    value() {
      const { h } = this.value.hsl;
      if (h !== 0 && h - this.oldHue > 0) {
        this.pullDirection = "right";
      }
      if (h !== 0 && h - this.oldHue < 0) {
        this.pullDirection = "left";
      }
      this.oldHue = h;
    },
  },
  computed: {
    colors() {
      return this.value;
    },
    directionClass() {
      return {
        "vc-hue--horizontal": this.direction === "horizontal",
        "vc-hue--vertical": this.direction === "vertical",
      };
    },
    pointerTop() {
      if (this.direction === "vertical") {
        if (this.colors.hsl.h === 0 && this.pullDirection === "right") return 0;
        return `${-((this.colors.hsl.h * 100) / 360) + 100}%`;
      }
      return 0;
    },
    pointerLeft() {
      if (this.direction === "vertical") {
        return 0;
      }
      if (this.colors.hsl.h === 0 && this.pullDirection === "right")
        return "100%";
      return `${(this.colors.hsl.h * 100) / 360}%`;
    },
  },
  methods: {
    handleChange(e, skip) {
      !skip && e.preventDefault();

      const { container } = this.$refs;
      if (!container) {
        // for some edge cases, container may not exist. see #220
        return;
      }
      const containerWidth = container.clientWidth;
      const containerHeight = container.clientHeight;

      const xOffset =
        container.getBoundingClientRect().left + window.pageXOffset;
      const yOffset =
        container.getBoundingClientRect().top + window.pageYOffset;
      const pageX = e.pageX || (e.touches ? e.touches[0].pageX : 0);
      const pageY = e.pageY || (e.touches ? e.touches[0].pageY : 0);
      const left = pageX - xOffset;
      const top = pageY - yOffset;

      let h;
      let percent;

      if (this.direction === "vertical") {
        if (top < 0) {
          h = 360;
        } else if (top > containerHeight) {
          h = 0;
        } else {
          percent = -((top * 100) / containerHeight) + 100;
          h = (360 * percent) / 100;
        }

        if (this.colors.hsl.h !== h) {
          this.$emit("change", {
            h,
            s: this.colors.hsl.s,
            l: this.colors.hsl.l,
            a: this.colors.hsl.a,
            source: "hsl",
          });
        }
      } else {
        if (left < 0) {
          h = 0;
        } else if (left > containerWidth) {
          h = 360;
        } else {
          percent = (left * 100) / containerWidth;
          h = (360 * percent) / 100;
        }

        if (this.colors.hsl.h !== h) {
          this.$emit("change", {
            h,
            s: this.colors.hsl.s,
            l: this.colors.hsl.l,
            a: this.colors.hsl.a,
            source: "hsl",
          });
        }
      }
    },
    handleMouseDown(e) {
      this.handleChange(e, true);
      window.addEventListener("mousemove", this.handleChange);
      window.addEventListener("mouseup", this.handleMouseUp);
    },
    handleMouseUp() {
      this.unbindEventListeners();
    },
    unbindEventListeners() {
      window.removeEventListener("mousemove", this.handleChange);
      window.removeEventListener("mouseup", this.handleMouseUp);
    },
  },
}));

// CONCATENATED MODULE: ./src/components/hue/hue.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/hue/hue.vue?vue&type=style&index=0&id=cc3ca1ac&lang=css
var huevue_type_style_index_0_id_cc3ca1ac_lang_css = __webpack_require__("470b");

// CONCATENATED MODULE: ./src/components/hue/hue.vue





huevue_type_script_lang_js.render = huevue_type_template_id_cc3ca1ac_render

/* harmony default export */ var hue = (huevue_type_script_lang_js);
// CONCATENATED MODULE: ./src/components/hue/index.ts

/* harmony default export */ var components_hue = (hue);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/chrome/chrome.vue?vue&type=script&lang=js








/* harmony default export */ var chromevue_type_script_lang_js = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  name: "Chrome",
  mixins: [mixin_color],
  props: {
    disableAlpha: {
      type: Boolean,
      default: false,
    },
    disableFields: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    saturation: components_saturation,
    hue: components_hue,
    alpha: components_alpha,
    "ed-in": components_editable_input,
    checkboard: components_checkboard,
  },
  data() {
    return {
      fieldsIndex: 0,
      highlight: false,
    };
  },
  computed: {
    hsl() {
      const { h, s, l } = this.colors.hsl;
      return {
        h: h.toFixed(),
        s: `${(s * 100).toFixed()}%`,
        l: `${(l * 100).toFixed()}%`,
      };
    },
    activeColor() {
      const { rgba } = this.colors;
      return `rgba(${[rgba.r, rgba.g, rgba.b, rgba.a].join(",")})`;
    },
    hasAlpha() {
      return this.colors.a < 1;
    },
  },
  methods: {
    childChange(data) {
      this.colorChange(data);
    },
    inputChange(data) {
      if (!data) {
        return;
      }
      if (data.hex) {
        this.isValidHex(data.hex) &&
          this.colorChange({
            hex: data.hex,
            source: "hex",
          });
      } else if (data.r || data.g || data.b || data.a) {
        this.colorChange({
          r: data.r || this.colors.rgba.r,
          g: data.g || this.colors.rgba.g,
          b: data.b || this.colors.rgba.b,
          a: data.a || this.colors.rgba.a,
          source: "rgba",
        });
      } else if (data.h || data.s || data.l) {
        const s = data.s ? data.s.replace("%", "") / 100 : this.colors.hsl.s;
        const l = data.l ? data.l.replace("%", "") / 100 : this.colors.hsl.l;

        this.colorChange({
          h: data.h || this.colors.hsl.h,
          s,
          l,
          source: "hsl",
        });
      }
    },
    toggleViews() {
      if (this.fieldsIndex >= 2) {
        this.fieldsIndex = 0;
        return;
      }
      this.fieldsIndex++;
    },
    showHighlight() {
      this.highlight = true;
    },
    hideHighlight() {
      this.highlight = false;
    },
  },
}));

// CONCATENATED MODULE: ./src/components/chrome/chrome.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/chrome/chrome.vue?vue&type=style&index=0&id=632d01b2&lang=css
var chromevue_type_style_index_0_id_632d01b2_lang_css = __webpack_require__("7c35");

// CONCATENATED MODULE: ./src/components/chrome/chrome.vue





chromevue_type_script_lang_js.render = chromevue_type_template_id_632d01b2_render

/* harmony default export */ var chrome = (chromevue_type_script_lang_js);
// CONCATENATED MODULE: ./src/components/chrome/index.ts

/* harmony default export */ var components_chrome = (chrome);

// CONCATENATED MODULE: ./node_modules/vue-loader-v16/dist/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/compact/compact.vue?vue&type=template&id=807f34e4


const compactvue_type_template_id_807f34e4_hoisted_1 = {
  role: "application",
  "aria-label": "Compact color picker",
  class: "vc-compact"
}
const compactvue_type_template_id_807f34e4_hoisted_2 = {
  class: "vc-compact-colors",
  role: "listbox"
}
const compactvue_type_template_id_807f34e4_hoisted_3 = ["aria-label", "aria-selected", "onClick"]
const compactvue_type_template_id_807f34e4_hoisted_4 = { class: "vc-compact-dot" }

function compactvue_type_template_id_807f34e4_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", compactvue_type_template_id_807f34e4_hoisted_1, [
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("ul", compactvue_type_template_id_807f34e4_hoisted_2, [
      (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.paletteUpperCase(_ctx.palette), (c) => {
        return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("li", {
          role: "option",
          "aria-label": 'color:' + c,
          "aria-selected": c === _ctx.pick,
          class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(["vc-compact-color-item", { 'vc-compact-color-item--white': c === '#FFFFFF' }]),
          key: c,
          style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])({ background: c }),
          onClick: $event => (_ctx.handlerClick(c))
        }, [
          Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", compactvue_type_template_id_807f34e4_hoisted_4, null, 512), [
            [external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], c === _ctx.pick]
          ])
        ], 14, compactvue_type_template_id_807f34e4_hoisted_3))
      }), 128))
    ])
  ]))
}
// CONCATENATED MODULE: ./src/components/compact/compact.vue?vue&type=template&id=807f34e4

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/compact/compact.vue?vue&type=script&lang=js



const defaultColors = [
  "#4D4D4D",
  "#999999",
  "#FFFFFF",
  "#F44E3B",
  "#FE9200",
  "#FCDC00",
  "#DBDF00",
  "#A4DD00",
  "#68CCCA",
  "#73D8FF",
  "#AEA1FF",
  "#FDA1FF",
  "#333333",
  "#808080",
  "#CCCCCC",
  "#D33115",
  "#E27300",
  "#FCC400",
  "#B0BC00",
  "#68BC00",
  "#16A5A5",
  "#009CE0",
  "#7B64FF",
  "#FA28FF",
  "#000000",
  "#666666",
  "#B3B3B3",
  "#9F0500",
  "#C45100",
  "#FB9E00",
  "#808900",
  "#194D33",
  "#0C797D",
  "#0062B1",
  "#653294",
  "#AB149E",
];

/* harmony default export */ var compactvue_type_script_lang_js = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  name: "Compact",
  mixins: [mixin_color],
  props: {
    palette: {
      type: Array,
      default() {
        return defaultColors;
      },
    },
  },
  computed: {
    pick() {
      return this.colors.hex.toUpperCase();
    },
  },
  methods: {
    handlerClick(c) {
      this.colorChange({
        hex: c,
        source: "hex",
      });
    },
  },
}));

// CONCATENATED MODULE: ./src/components/compact/compact.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/compact/compact.vue?vue&type=style&index=0&id=807f34e4&lang=css
var compactvue_type_style_index_0_id_807f34e4_lang_css = __webpack_require__("858a");

// CONCATENATED MODULE: ./src/components/compact/compact.vue





compactvue_type_script_lang_js.render = compactvue_type_template_id_807f34e4_render

/* harmony default export */ var compact = (compactvue_type_script_lang_js);
// CONCATENATED MODULE: ./src/components/compact/index.ts

/* harmony default export */ var components_compact = (compact);

// CONCATENATED MODULE: ./node_modules/vue-loader-v16/dist/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/grayscale/grayscale.vue?vue&type=template&id=a93f49bc


const grayscalevue_type_template_id_a93f49bc_hoisted_1 = {
  role: "application",
  "aria-label": "Grayscale color picker",
  class: "vc-grayscale"
}
const grayscalevue_type_template_id_a93f49bc_hoisted_2 = {
  class: "vc-grayscale-colors",
  role: "listbox"
}
const grayscalevue_type_template_id_a93f49bc_hoisted_3 = ["aria-label", "aria-selected", "onClick"]
const grayscalevue_type_template_id_a93f49bc_hoisted_4 = { class: "vc-grayscale-dot" }

function grayscalevue_type_template_id_a93f49bc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", grayscalevue_type_template_id_a93f49bc_hoisted_1, [
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("ul", grayscalevue_type_template_id_a93f49bc_hoisted_2, [
      (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.paletteUpperCase(_ctx.palette), (c) => {
        return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("li", {
          role: "option",
          "aria-label": 'Color:' + c,
          "aria-selected": c === _ctx.pick,
          key: c,
          class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(["vc-grayscale-color-item", { 'vc-grayscale-color-item--white': c == '#FFFFFF' }]),
          style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])({ background: c }),
          onClick: $event => (_ctx.handlerClick(c))
        }, [
          Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", grayscalevue_type_template_id_a93f49bc_hoisted_4, null, 512), [
            [external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], c === _ctx.pick]
          ])
        ], 14, grayscalevue_type_template_id_a93f49bc_hoisted_3))
      }), 128))
    ])
  ]))
}
// CONCATENATED MODULE: ./src/components/grayscale/grayscale.vue?vue&type=template&id=a93f49bc

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/grayscale/grayscale.vue?vue&type=script&lang=js



const grayscalevue_type_script_lang_js_defaultColors = [
  "#FFFFFF",
  "#F2F2F2",
  "#E6E6E6",
  "#D9D9D9",
  "#CCCCCC",
  "#BFBFBF",
  "#B3B3B3",
  "#A6A6A6",
  "#999999",
  "#8C8C8C",
  "#808080",
  "#737373",
  "#666666",
  "#595959",
  "#4D4D4D",
  "#404040",
  "#333333",
  "#262626",
  "#0D0D0D",
  "#000000",
];

/* harmony default export */ var grayscalevue_type_script_lang_js = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  name: "Grayscale",
  mixins: [mixin_color],
  props: {
    palette: {
      type: Array,
      default() {
        return grayscalevue_type_script_lang_js_defaultColors;
      },
    },
  },
  components: {},
  computed: {
    pick() {
      return this.colors.hex.toUpperCase();
    },
  },
  methods: {
    handlerClick(c) {
      this.colorChange({
        hex: c,
        source: "hex",
      });
    },
  },
}));

// CONCATENATED MODULE: ./src/components/grayscale/grayscale.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/grayscale/grayscale.vue?vue&type=style&index=0&id=a93f49bc&lang=css
var grayscalevue_type_style_index_0_id_a93f49bc_lang_css = __webpack_require__("acca");

// CONCATENATED MODULE: ./src/components/grayscale/grayscale.vue





grayscalevue_type_script_lang_js.render = grayscalevue_type_template_id_a93f49bc_render

/* harmony default export */ var grayscale = (grayscalevue_type_script_lang_js);
// CONCATENATED MODULE: ./src/components/grayscale/index.ts

/* harmony default export */ var components_grayscale = (grayscale);

// CONCATENATED MODULE: ./node_modules/vue-loader-v16/dist/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/material/material.vue?vue&type=template&id=3edbbc66


const materialvue_type_template_id_3edbbc66_hoisted_1 = {
  role: "application",
  "aria-label": "Material color picker",
  class: "vc-material"
}
const materialvue_type_template_id_3edbbc66_hoisted_2 = { class: "vc-material-split" }
const materialvue_type_template_id_3edbbc66_hoisted_3 = { class: "vc-material-third" }
const materialvue_type_template_id_3edbbc66_hoisted_4 = { class: "vc-material-third" }
const materialvue_type_template_id_3edbbc66_hoisted_5 = { class: "vc-material-third" }

function materialvue_type_template_id_3edbbc66_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ed_in = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("ed-in")

  return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", materialvue_type_template_id_3edbbc66_hoisted_1, [
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ed_in, {
      class: "vc-material-hex",
      label: "hex",
      value: _ctx.colors.hex,
      style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])({ borderColor: _ctx.colors.hex }),
      onChange: _ctx.onChange
    }, null, 8, ["value", "style", "onChange"]),
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", materialvue_type_template_id_3edbbc66_hoisted_2, [
      Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", materialvue_type_template_id_3edbbc66_hoisted_3, [
        Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ed_in, {
          label: "r",
          value: _ctx.colors.rgba.r,
          onChange: _ctx.onChange
        }, null, 8, ["value", "onChange"])
      ]),
      Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", materialvue_type_template_id_3edbbc66_hoisted_4, [
        Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ed_in, {
          label: "g",
          value: _ctx.colors.rgba.g,
          onChange: _ctx.onChange
        }, null, 8, ["value", "onChange"])
      ]),
      Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", materialvue_type_template_id_3edbbc66_hoisted_5, [
        Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ed_in, {
          label: "b",
          value: _ctx.colors.rgba.b,
          onChange: _ctx.onChange
        }, null, 8, ["value", "onChange"])
      ])
    ])
  ]))
}
// CONCATENATED MODULE: ./src/components/material/material.vue?vue&type=template&id=3edbbc66

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/material/material.vue?vue&type=script&lang=js




/* harmony default export */ var materialvue_type_script_lang_js = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  name: "Material",
  mixins: [mixin_color],
  components: {
    "ed-in": components_editable_input,
  },
  methods: {
    onChange(data) {
      if (!data) {
        return;
      }
      if (data.hex) {
        this.isValidHex(data.hex) &&
          this.colorChange({
            hex: data.hex,
            source: "hex",
          });
      } else if (data.r || data.g || data.b) {
        this.colorChange({
          r: data.r || this.colors.rgba.r,
          g: data.g || this.colors.rgba.g,
          b: data.b || this.colors.rgba.b,
          a: data.a || this.colors.rgba.a,
          source: "rgba",
        });
      }
    },
  },
}));

// CONCATENATED MODULE: ./src/components/material/material.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/material/material.vue?vue&type=style&index=0&id=3edbbc66&lang=css
var materialvue_type_style_index_0_id_3edbbc66_lang_css = __webpack_require__("5561");

// CONCATENATED MODULE: ./src/components/material/material.vue





materialvue_type_script_lang_js.render = materialvue_type_template_id_3edbbc66_render

/* harmony default export */ var material = (materialvue_type_script_lang_js);
// CONCATENATED MODULE: ./src/components/material/index.ts

/* harmony default export */ var components_material = (material);

// CONCATENATED MODULE: ./node_modules/vue-loader-v16/dist/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/photoshop/photoshop.vue?vue&type=template&id=47d6e71c


const photoshopvue_type_template_id_47d6e71c_hoisted_1 = {
  role: "heading",
  class: "vc-ps-head"
}
const photoshopvue_type_template_id_47d6e71c_hoisted_2 = { class: "vc-ps-body" }
const photoshopvue_type_template_id_47d6e71c_hoisted_3 = { class: "vc-ps-saturation-wrap" }
const photoshopvue_type_template_id_47d6e71c_hoisted_4 = { class: "vc-ps-hue-wrap" }
const photoshopvue_type_template_id_47d6e71c_hoisted_5 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", { class: "vc-ps-hue-pointer" }, [
  /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("i", { class: "vc-ps-hue-pointer--left" }),
  /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("i", { class: "vc-ps-hue-pointer--right" })
], -1)
const photoshopvue_type_template_id_47d6e71c_hoisted_6 = { class: "vc-ps-previews" }
const photoshopvue_type_template_id_47d6e71c_hoisted_7 = { class: "vc-ps-previews__label" }
const photoshopvue_type_template_id_47d6e71c_hoisted_8 = { class: "vc-ps-previews__swatches" }
const photoshopvue_type_template_id_47d6e71c_hoisted_9 = ["aria-label"]
const photoshopvue_type_template_id_47d6e71c_hoisted_10 = ["aria-label"]
const photoshopvue_type_template_id_47d6e71c_hoisted_11 = { class: "vc-ps-previews__label" }
const photoshopvue_type_template_id_47d6e71c_hoisted_12 = {
  key: 0,
  class: "vc-ps-actions"
}
const photoshopvue_type_template_id_47d6e71c_hoisted_13 = ["aria-label"]
const photoshopvue_type_template_id_47d6e71c_hoisted_14 = ["aria-label"]
const photoshopvue_type_template_id_47d6e71c_hoisted_15 = { class: "vc-ps-fields" }
const photoshopvue_type_template_id_47d6e71c_hoisted_16 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", { class: "vc-ps-fields__divider" }, null, -1)
const photoshopvue_type_template_id_47d6e71c_hoisted_17 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", { class: "vc-ps-fields__divider" }, null, -1)

function photoshopvue_type_template_id_47d6e71c_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_saturation = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("saturation")
  const _component_hue = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("hue")
  const _component_ed_in = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("ed-in")

  return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    role: "application",
    "aria-label": "PhotoShop color picker",
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([
      'vc-photoshop',
      _ctx.disableFields ? 'vc-photoshop__disable-fields' : '',
    ])
  }, [
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", photoshopvue_type_template_id_47d6e71c_hoisted_1, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.head), 1),
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", photoshopvue_type_template_id_47d6e71c_hoisted_2, [
      Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", photoshopvue_type_template_id_47d6e71c_hoisted_3, [
        Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_saturation, {
          value: _ctx.colors,
          onChange: _ctx.childChange
        }, null, 8, ["value", "onChange"])
      ]),
      Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", photoshopvue_type_template_id_47d6e71c_hoisted_4, [
        Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_hue, {
          value: _ctx.colors,
          onChange: _ctx.childChange,
          direction: "vertical"
        }, {
          default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(() => [
            photoshopvue_type_template_id_47d6e71c_hoisted_5
          ]),
          _: 1
        }, 8, ["value", "onChange"])
      ]),
      Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
        class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([
          'vc-ps-controls',
          _ctx.disableFields ? 'vc-ps-controls__disable-fields' : '',
        ])
      }, [
        Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", photoshopvue_type_template_id_47d6e71c_hoisted_6, [
          Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", photoshopvue_type_template_id_47d6e71c_hoisted_7, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.newLabel), 1),
          Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", photoshopvue_type_template_id_47d6e71c_hoisted_8, [
            Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
              class: "vc-ps-previews__pr-color",
              "aria-label": `New color is ${_ctx.colors.hex}`,
              style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])({ background: _ctx.colors.hex })
            }, null, 12, photoshopvue_type_template_id_47d6e71c_hoisted_9),
            Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
              class: "vc-ps-previews__pr-color",
              "aria-label": `Current color is ${_ctx.currentColor}`,
              style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])({ background: _ctx.currentColor }),
              onClick: _cache[0] || (_cache[0] = (...args) => (_ctx.clickCurrentColor && _ctx.clickCurrentColor(...args)))
            }, null, 12, photoshopvue_type_template_id_47d6e71c_hoisted_10)
          ]),
          Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", photoshopvue_type_template_id_47d6e71c_hoisted_11, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.currentLabel), 1)
        ]),
        (!_ctx.disableFields)
          ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", photoshopvue_type_template_id_47d6e71c_hoisted_12, [
              Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
                class: "vc-ps-ac-btn",
                role: "button",
                "aria-label": _ctx.acceptLabel,
                onClick: _cache[1] || (_cache[1] = (...args) => (_ctx.handleAccept && _ctx.handleAccept(...args)))
              }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.acceptLabel), 9, photoshopvue_type_template_id_47d6e71c_hoisted_13),
              Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
                class: "vc-ps-ac-btn",
                role: "button",
                "aria-label": _ctx.cancelLabel,
                onClick: _cache[2] || (_cache[2] = (...args) => (_ctx.handleCancel && _ctx.handleCancel(...args)))
              }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.cancelLabel), 9, photoshopvue_type_template_id_47d6e71c_hoisted_14),
              Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", photoshopvue_type_template_id_47d6e71c_hoisted_15, [
                Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ed_in, {
                  label: "h",
                  desc: "°",
                  value: _ctx.hsv.h,
                  onChange: _ctx.inputChange
                }, null, 8, ["value", "onChange"]),
                Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ed_in, {
                  label: "s",
                  desc: "%",
                  value: _ctx.hsv.s,
                  max: 100,
                  onChange: _ctx.inputChange
                }, null, 8, ["value", "onChange"]),
                Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ed_in, {
                  label: "v",
                  desc: "%",
                  value: _ctx.hsv.v,
                  max: 100,
                  onChange: _ctx.inputChange
                }, null, 8, ["value", "onChange"]),
                photoshopvue_type_template_id_47d6e71c_hoisted_16,
                Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ed_in, {
                  label: "r",
                  value: _ctx.colors.rgba.r,
                  onChange: _ctx.inputChange
                }, null, 8, ["value", "onChange"]),
                Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ed_in, {
                  label: "g",
                  value: _ctx.colors.rgba.g,
                  onChange: _ctx.inputChange
                }, null, 8, ["value", "onChange"]),
                Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ed_in, {
                  label: "b",
                  value: _ctx.colors.rgba.b,
                  onChange: _ctx.inputChange
                }, null, 8, ["value", "onChange"]),
                photoshopvue_type_template_id_47d6e71c_hoisted_17,
                Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ed_in, {
                  label: "#",
                  class: "vc-ps-fields__hex",
                  value: _ctx.hex,
                  onChange: _ctx.inputChange
                }, null, 8, ["value", "onChange"])
              ]),
              (_ctx.hasResetButton)
                ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
                    key: 0,
                    class: "vc-ps-ac-btn",
                    "aria-label": "reset",
                    onClick: _cache[3] || (_cache[3] = (...args) => (_ctx.handleReset && _ctx.handleReset(...args)))
                  }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.resetLabel), 1))
                : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)
            ]))
          : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)
      ], 2)
    ])
  ], 2))
}
// CONCATENATED MODULE: ./src/components/photoshop/photoshop.vue?vue&type=template&id=47d6e71c

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/photoshop/photoshop.vue?vue&type=script&lang=js






/* harmony default export */ var photoshopvue_type_script_lang_js = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  name: "Photoshop",
  mixins: [mixin_color],
  props: {
    head: {
      type: String,
      default: "Color Picker",
    },
    disableFields: {
      type: Boolean,
      default: false,
    },
    hasResetButton: {
      type: Boolean,
      default: false,
    },
    acceptLabel: {
      type: String,
      default: "OK",
    },
    cancelLabel: {
      type: String,
      default: "Cancel",
    },
    resetLabel: {
      type: String,
      default: "Reset",
    },
    newLabel: {
      type: String,
      default: "new",
    },
    currentLabel: {
      type: String,
      default: "current",
    },
  },
  components: {
    saturation: components_saturation,
    hue: components_hue,
    "ed-in": components_editable_input,
  },
  data() {
    return {
      currentColor: "#FFF",
    };
  },
  computed: {
    hsv() {
      const { hsv } = this.colors;
      return {
        h: hsv.h.toFixed(),
        s: (hsv.s * 100).toFixed(),
        v: (hsv.v * 100).toFixed(),
      };
    },
    hex() {
      const { hex } = this.colors;
      return hex && hex.replace("#", "");
    },
  },
  created() {
    this.currentColor = this.colors.hex;
  },
  methods: {
    childChange(data) {
      this.colorChange(data);
    },
    inputChange(data) {
      if (!data) {
        return;
      }
      if (data["#"]) {
        this.isValidHex(data["#"]) &&
          this.colorChange({
            hex: data["#"],
            source: "hex",
          });
      } else if (data.r || data.g || data.b || data.a) {
        this.colorChange({
          r: data.r || this.colors.rgba.r,
          g: data.g || this.colors.rgba.g,
          b: data.b || this.colors.rgba.b,
          a: data.a || this.colors.rgba.a,
          source: "rgba",
        });
      } else if (data.h || data.s || data.v) {
        this.colorChange({
          h: data.h || this.colors.hsv.h,
          s: data.s / 100 || this.colors.hsv.s,
          v: data.v / 100 || this.colors.hsv.v,
          source: "hsv",
        });
      }
    },
    clickCurrentColor() {
      this.colorChange({
        hex: this.currentColor,
        source: "hex",
      });
    },
    handleAccept() {
      this.$emit("ok");
    },
    handleCancel() {
      this.$emit("cancel");
    },
    handleReset() {
      this.$emit("reset");
    },
  },
}));

// CONCATENATED MODULE: ./src/components/photoshop/photoshop.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/photoshop/photoshop.vue?vue&type=style&index=0&id=47d6e71c&lang=css
var photoshopvue_type_style_index_0_id_47d6e71c_lang_css = __webpack_require__("98ee");

// CONCATENATED MODULE: ./src/components/photoshop/photoshop.vue





photoshopvue_type_script_lang_js.render = photoshopvue_type_template_id_47d6e71c_render

/* harmony default export */ var photoshop = (photoshopvue_type_script_lang_js);
// CONCATENATED MODULE: ./src/components/photoshop/index.ts

/* harmony default export */ var components_photoshop = (photoshop);

// CONCATENATED MODULE: ./node_modules/vue-loader-v16/dist/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/sketch/sketch.vue?vue&type=template&id=772d577a


const sketchvue_type_template_id_772d577a_hoisted_1 = { class: "vc-sketch-saturation-wrap" }
const sketchvue_type_template_id_772d577a_hoisted_2 = { class: "vc-sketch-controls" }
const sketchvue_type_template_id_772d577a_hoisted_3 = { class: "vc-sketch-sliders" }
const sketchvue_type_template_id_772d577a_hoisted_4 = { class: "vc-sketch-hue-wrap" }
const sketchvue_type_template_id_772d577a_hoisted_5 = {
  key: 0,
  class: "vc-sketch-alpha-wrap"
}
const sketchvue_type_template_id_772d577a_hoisted_6 = { class: "vc-sketch-color-wrap" }
const sketchvue_type_template_id_772d577a_hoisted_7 = ["aria-label"]
const sketchvue_type_template_id_772d577a_hoisted_8 = {
  key: 0,
  class: "vc-sketch-field"
}
const sketchvue_type_template_id_772d577a_hoisted_9 = { class: "vc-sketch-field--double" }
const sketchvue_type_template_id_772d577a_hoisted_10 = { class: "vc-sketch-field--single" }
const sketchvue_type_template_id_772d577a_hoisted_11 = { class: "vc-sketch-field--single" }
const sketchvue_type_template_id_772d577a_hoisted_12 = { class: "vc-sketch-field--single" }
const sketchvue_type_template_id_772d577a_hoisted_13 = {
  key: 0,
  class: "vc-sketch-field--single"
}
const sketchvue_type_template_id_772d577a_hoisted_14 = {
  class: "vc-sketch-presets",
  role: "group",
  "aria-label": "A color preset, pick one to set as current color"
}
const sketchvue_type_template_id_772d577a_hoisted_15 = ["aria-label", "onClick"]
const sketchvue_type_template_id_772d577a_hoisted_16 = ["aria-label", "onClick"]

function sketchvue_type_template_id_772d577a_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_saturation = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("saturation")
  const _component_hue = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("hue")
  const _component_alpha = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("alpha")
  const _component_checkboard = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("checkboard")
  const _component_ed_in = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("ed-in")

  return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    role: "application",
    "aria-label": "Sketch color picker",
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(['vc-sketch', _ctx.disableAlpha ? 'vc-sketch__disable-alpha' : ''])
  }, [
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", sketchvue_type_template_id_772d577a_hoisted_1, [
      Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_saturation, {
        value: _ctx.colors,
        onChange: _ctx.childChange
      }, null, 8, ["value", "onChange"])
    ]),
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", sketchvue_type_template_id_772d577a_hoisted_2, [
      Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", sketchvue_type_template_id_772d577a_hoisted_3, [
        Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", sketchvue_type_template_id_772d577a_hoisted_4, [
          Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_hue, {
            value: _ctx.colors,
            onChange: _ctx.childChange
          }, null, 8, ["value", "onChange"])
        ]),
        (!_ctx.disableAlpha)
          ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", sketchvue_type_template_id_772d577a_hoisted_5, [
              Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_alpha, {
                value: _ctx.colors,
                onChange: _ctx.childChange
              }, null, 8, ["value", "onChange"])
            ]))
          : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)
      ]),
      Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", sketchvue_type_template_id_772d577a_hoisted_6, [
        Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
          "aria-label": `Current color is ${_ctx.activeColor}`,
          class: "vc-sketch-active-color",
          style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])({ background: _ctx.activeColor })
        }, null, 12, sketchvue_type_template_id_772d577a_hoisted_7),
        Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_checkboard)
      ])
    ]),
    (!_ctx.disableFields)
      ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", sketchvue_type_template_id_772d577a_hoisted_8, [
          Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", sketchvue_type_template_id_772d577a_hoisted_9, [
            Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ed_in, {
              label: "hex",
              value: _ctx.hex,
              onChange: _ctx.inputChange
            }, null, 8, ["value", "onChange"])
          ]),
          Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", sketchvue_type_template_id_772d577a_hoisted_10, [
            Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ed_in, {
              label: "r",
              value: _ctx.colors.rgba.r,
              onChange: _ctx.inputChange
            }, null, 8, ["value", "onChange"])
          ]),
          Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", sketchvue_type_template_id_772d577a_hoisted_11, [
            Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ed_in, {
              label: "g",
              value: _ctx.colors.rgba.g,
              onChange: _ctx.inputChange
            }, null, 8, ["value", "onChange"])
          ]),
          Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", sketchvue_type_template_id_772d577a_hoisted_12, [
            Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ed_in, {
              label: "b",
              value: _ctx.colors.rgba.b,
              onChange: _ctx.inputChange
            }, null, 8, ["value", "onChange"])
          ]),
          (!_ctx.disableAlpha)
            ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", sketchvue_type_template_id_772d577a_hoisted_13, [
                Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ed_in, {
                  label: "a",
                  value: _ctx.colors.a,
                  "arrow-offset": 0.01,
                  max: 1,
                  onChange: _ctx.inputChange
                }, null, 8, ["value", "arrow-offset", "onChange"])
              ]))
            : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)
        ]))
      : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true),
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", sketchvue_type_template_id_772d577a_hoisted_14, [
      (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.presetColors, (c) => {
        return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, [
          (!_ctx.isTransparent(c))
            ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
                key: `!${c}`,
                class: "vc-sketch-presets-color",
                "aria-label": 'Color:' + c,
                style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])({ background: c }),
                onClick: $event => (_ctx.handlePreset(c))
              }, null, 12, sketchvue_type_template_id_772d577a_hoisted_15))
            : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
                key: c,
                "aria-label": 'Color:' + c,
                class: "vc-sketch-presets-color",
                onClick: $event => (_ctx.handlePreset(c))
              }, [
                Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_checkboard)
              ], 8, sketchvue_type_template_id_772d577a_hoisted_16))
        ], 64))
      }), 256))
    ]),
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "footer")
  ], 2))
}
// CONCATENATED MODULE: ./src/components/sketch/sketch.vue?vue&type=template&id=772d577a

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/sketch/sketch.vue?vue&type=script&lang=js








const presetColors = [
  "#D0021B",
  "#F5A623",
  "#F8E71C",
  "#8B572A",
  "#7ED321",
  "#417505",
  "#BD10E0",
  "#9013FE",
  "#4A90E2",
  "#50E3C2",
  "#B8E986",
  "#000000",
  "#4A4A4A",
  "#9B9B9B",
  "#FFFFFF",
  "rgba(0,0,0,0)",
];

/* harmony default export */ var sketchvue_type_script_lang_js = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  name: "Sketch",
  mixins: [mixin_color],
  components: {
    saturation: components_saturation,
    hue: components_hue,
    alpha: components_alpha,
    "ed-in": components_editable_input,
    checkboard: components_checkboard,
  },
  props: {
    presetColors: {
      type: Array,
      default() {
        return presetColors;
      },
    },
    disableAlpha: {
      type: Boolean,
      default: false,
    },
    disableFields: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    hex() {
      let hex;
      if (this.colors.a < 1) {
        hex = this.colors.hex8;
      } else {
        hex = this.colors.hex;
      }
      return hex.replace("#", "");
    },
    activeColor() {
      const { rgba } = this.colors;
      return `rgba(${[rgba.r, rgba.g, rgba.b, rgba.a].join(",")})`;
    },
  },
  methods: {
    handlePreset(c) {
      this.colorChange(c);
    },
    childChange(data) {
      this.colorChange(data);
    },
    inputChange(data) {
      if (!data) {
        return;
      }
      if (data.hex) {
        this.isValidHex(data.hex) &&
          this.colorChange({
            hex: data.hex,
            source: "hex",
          });
      } else if (data.r || data.g || data.b || data.a) {
        this.colorChange({
          r: data.r || this.colors.rgba.r,
          g: data.g || this.colors.rgba.g,
          b: data.b || this.colors.rgba.b,
          a: data.a || this.colors.rgba.a,
          source: "rgba",
        });
      }
    },
  },
}));

// CONCATENATED MODULE: ./src/components/sketch/sketch.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/sketch/sketch.vue?vue&type=style&index=0&id=772d577a&lang=css
var sketchvue_type_style_index_0_id_772d577a_lang_css = __webpack_require__("80db");

// CONCATENATED MODULE: ./src/components/sketch/sketch.vue





sketchvue_type_script_lang_js.render = sketchvue_type_template_id_772d577a_render

/* harmony default export */ var sketch = (sketchvue_type_script_lang_js);
// CONCATENATED MODULE: ./src/components/sketch/index.ts

/* harmony default export */ var components_sketch = (sketch);

// CONCATENATED MODULE: ./node_modules/vue-loader-v16/dist/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/slider/slider.vue?vue&type=template&id=0e57d5f8


const slidervue_type_template_id_0e57d5f8_hoisted_1 = {
  role: "application",
  "aria-label": "Slider color picker",
  class: "vc-slider"
}
const slidervue_type_template_id_0e57d5f8_hoisted_2 = { class: "vc-slider-hue-warp" }
const slidervue_type_template_id_0e57d5f8_hoisted_3 = {
  class: "vc-slider-swatches",
  role: "group"
}
const slidervue_type_template_id_0e57d5f8_hoisted_4 = ["data-index", "aria-label", "onClick"]

function slidervue_type_template_id_0e57d5f8_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_hue = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("hue")

  return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", slidervue_type_template_id_0e57d5f8_hoisted_1, [
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", slidervue_type_template_id_0e57d5f8_hoisted_2, [
      Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_hue, {
        value: _ctx.colors,
        onChange: _ctx.hueChange
      }, null, 8, ["value", "onChange"])
    ]),
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", slidervue_type_template_id_0e57d5f8_hoisted_3, [
      (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.normalizedSwatches, (swatch, index) => {
        return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
          class: "vc-slider-swatch",
          key: index,
          "data-index": index,
          "aria-label": 'color:' + _ctx.colors.hex,
          role: "button",
          onClick: $event => (_ctx.handleSwClick(index, swatch))
        }, [
          Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
            class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(["vc-slider-swatch-picker", {
            'vc-slider-swatch-picker--active': _ctx.isActive(swatch, index),
            'vc-slider-swatch-picker--white': swatch.l === 1,
          }]),
            style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])({
            background:
              'hsl(' +
              _ctx.colors.hsl.h +
              ', ' +
              swatch.s * 100 +
              '%, ' +
              swatch.l * 100 +
              '%)',
          })
          }, null, 6)
        ], 8, slidervue_type_template_id_0e57d5f8_hoisted_4))
      }), 128))
    ])
  ]))
}
// CONCATENATED MODULE: ./src/components/slider/slider.vue?vue&type=template&id=0e57d5f8

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/slider/slider.vue?vue&type=script&lang=js




const DEFAULT_SATURATION = 0.5;

/* harmony default export */ var slidervue_type_script_lang_js = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  name: "Slider",
  mixins: [mixin_color],
  props: {
    swatches: {
      type: Array,
      default() {
        // also accepts: ['.80', '.65', '.50', '.35', '.20']
        return [
          { s: DEFAULT_SATURATION, l: 0.8 },
          { s: DEFAULT_SATURATION, l: 0.65 },
          { s: DEFAULT_SATURATION, l: 0.5 },
          { s: DEFAULT_SATURATION, l: 0.35 },
          { s: DEFAULT_SATURATION, l: 0.2 },
        ];
      },
    },
  },
  components: {
    hue: components_hue,
  },
  computed: {
    normalizedSwatches() {
      const { swatches } = this;
      return swatches.map((swatch) => {
        // to be compatible with another data format ['.80', '.65', '.50', '.35', '.20']
        if (typeof swatch !== "object") {
          return {
            s: DEFAULT_SATURATION,
            l: swatch,
          };
        }
        return swatch;
      });
    },
  },
  methods: {
    isActive(swatch, index) {
      const { hsl } = this.colors;
      if (hsl.l === 1 && swatch.l === 1) {
        return true;
      }
      if (hsl.l === 0 && swatch.l === 0) {
        return true;
      }
      return (
        Math.abs(hsl.l - swatch.l) < 0.01 && Math.abs(hsl.s - swatch.s) < 0.01
      );
    },
    hueChange(data) {
      this.colorChange(data);
    },
    handleSwClick(index, swatch) {
      this.colorChange({
        h: this.colors.hsl.h,
        s: swatch.s,
        l: swatch.l,
        source: "hsl",
      });
    },
  },
}));

// CONCATENATED MODULE: ./src/components/slider/slider.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/slider/slider.vue?vue&type=style&index=0&id=0e57d5f8&lang=css
var slidervue_type_style_index_0_id_0e57d5f8_lang_css = __webpack_require__("b04e");

// CONCATENATED MODULE: ./src/components/slider/slider.vue





slidervue_type_script_lang_js.render = slidervue_type_template_id_0e57d5f8_render

/* harmony default export */ var slider = (slidervue_type_script_lang_js);
// CONCATENATED MODULE: ./src/components/slider/index.ts

/* harmony default export */ var components_slider = (slider);

// CONCATENATED MODULE: ./node_modules/vue-loader-v16/dist/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/swatches/swatches.vue?vue&type=template&id=7375f34c


const swatchesvue_type_template_id_7375f34c_hoisted_1 = ["data-pick"]
const swatchesvue_type_template_id_7375f34c_hoisted_2 = {
  class: "vc-swatches-box",
  role: "listbox"
}
const swatchesvue_type_template_id_7375f34c_hoisted_3 = ["aria-label", "aria-selected", "data-color", "onClick"]
const swatchesvue_type_template_id_7375f34c_hoisted_4 = { class: "vc-swatches-pick" }
const swatchesvue_type_template_id_7375f34c_hoisted_5 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("svg", {
  style: {"width":"24px","height":"24px"},
  viewBox: "0 0 24 24"
}, [
  /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("path", { d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" })
], -1)
const swatchesvue_type_template_id_7375f34c_hoisted_6 = [
  swatchesvue_type_template_id_7375f34c_hoisted_5
]

function swatchesvue_type_template_id_7375f34c_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    role: "application",
    "aria-label": "Swatches color picker",
    class: "vc-swatches",
    "data-pick": _ctx.pick
  }, [
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", swatchesvue_type_template_id_7375f34c_hoisted_2, [
      (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.palette, (group, $idx) => {
        return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
          class: "vc-swatches-color-group",
          key: $idx
        }, [
          (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(group, (c) => {
            return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
              class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([
            'vc-swatches-color-it',
            { 'vc-swatches-color--white': c === '#FFFFFF' },
          ]),
              role: "option",
              "aria-label": 'Color:' + c,
              "aria-selected": _ctx.equal(c),
              key: c,
              "data-color": c,
              style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])({ background: c }),
              onClick: $event => (_ctx.handlerClick(c))
            }, [
              Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", swatchesvue_type_template_id_7375f34c_hoisted_4, swatchesvue_type_template_id_7375f34c_hoisted_6, 512), [
                [external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.equal(c)]
              ])
            ], 14, swatchesvue_type_template_id_7375f34c_hoisted_3))
          }), 128))
        ]))
      }), 128))
    ])
  ], 8, swatchesvue_type_template_id_7375f34c_hoisted_1))
}
// CONCATENATED MODULE: ./src/components/swatches/swatches.vue?vue&type=template&id=7375f34c

// CONCATENATED MODULE: ./node_modules/material-colors/dist/colors.es2015.js
var red = {"50":"#ffebee","100":"#ffcdd2","200":"#ef9a9a","300":"#e57373","400":"#ef5350","500":"#f44336","600":"#e53935","700":"#d32f2f","800":"#c62828","900":"#b71c1c","a100":"#ff8a80","a200":"#ff5252","a400":"#ff1744","a700":"#d50000"};
var pink = {"50":"#fce4ec","100":"#f8bbd0","200":"#f48fb1","300":"#f06292","400":"#ec407a","500":"#e91e63","600":"#d81b60","700":"#c2185b","800":"#ad1457","900":"#880e4f","a100":"#ff80ab","a200":"#ff4081","a400":"#f50057","a700":"#c51162"};
var purple = {"50":"#f3e5f5","100":"#e1bee7","200":"#ce93d8","300":"#ba68c8","400":"#ab47bc","500":"#9c27b0","600":"#8e24aa","700":"#7b1fa2","800":"#6a1b9a","900":"#4a148c","a100":"#ea80fc","a200":"#e040fb","a400":"#d500f9","a700":"#aa00ff"};
var deepPurple = {"50":"#ede7f6","100":"#d1c4e9","200":"#b39ddb","300":"#9575cd","400":"#7e57c2","500":"#673ab7","600":"#5e35b1","700":"#512da8","800":"#4527a0","900":"#311b92","a100":"#b388ff","a200":"#7c4dff","a400":"#651fff","a700":"#6200ea"};
var indigo = {"50":"#e8eaf6","100":"#c5cae9","200":"#9fa8da","300":"#7986cb","400":"#5c6bc0","500":"#3f51b5","600":"#3949ab","700":"#303f9f","800":"#283593","900":"#1a237e","a100":"#8c9eff","a200":"#536dfe","a400":"#3d5afe","a700":"#304ffe"};
var blue = {"50":"#e3f2fd","100":"#bbdefb","200":"#90caf9","300":"#64b5f6","400":"#42a5f5","500":"#2196f3","600":"#1e88e5","700":"#1976d2","800":"#1565c0","900":"#0d47a1","a100":"#82b1ff","a200":"#448aff","a400":"#2979ff","a700":"#2962ff"};
var lightBlue = {"50":"#e1f5fe","100":"#b3e5fc","200":"#81d4fa","300":"#4fc3f7","400":"#29b6f6","500":"#03a9f4","600":"#039be5","700":"#0288d1","800":"#0277bd","900":"#01579b","a100":"#80d8ff","a200":"#40c4ff","a400":"#00b0ff","a700":"#0091ea"};
var cyan = {"50":"#e0f7fa","100":"#b2ebf2","200":"#80deea","300":"#4dd0e1","400":"#26c6da","500":"#00bcd4","600":"#00acc1","700":"#0097a7","800":"#00838f","900":"#006064","a100":"#84ffff","a200":"#18ffff","a400":"#00e5ff","a700":"#00b8d4"};
var teal = {"50":"#e0f2f1","100":"#b2dfdb","200":"#80cbc4","300":"#4db6ac","400":"#26a69a","500":"#009688","600":"#00897b","700":"#00796b","800":"#00695c","900":"#004d40","a100":"#a7ffeb","a200":"#64ffda","a400":"#1de9b6","a700":"#00bfa5"};
var green = {"50":"#e8f5e9","100":"#c8e6c9","200":"#a5d6a7","300":"#81c784","400":"#66bb6a","500":"#4caf50","600":"#43a047","700":"#388e3c","800":"#2e7d32","900":"#1b5e20","a100":"#b9f6ca","a200":"#69f0ae","a400":"#00e676","a700":"#00c853"};
var lightGreen = {"50":"#f1f8e9","100":"#dcedc8","200":"#c5e1a5","300":"#aed581","400":"#9ccc65","500":"#8bc34a","600":"#7cb342","700":"#689f38","800":"#558b2f","900":"#33691e","a100":"#ccff90","a200":"#b2ff59","a400":"#76ff03","a700":"#64dd17"};
var lime = {"50":"#f9fbe7","100":"#f0f4c3","200":"#e6ee9c","300":"#dce775","400":"#d4e157","500":"#cddc39","600":"#c0ca33","700":"#afb42b","800":"#9e9d24","900":"#827717","a100":"#f4ff81","a200":"#eeff41","a400":"#c6ff00","a700":"#aeea00"};
var yellow = {"50":"#fffde7","100":"#fff9c4","200":"#fff59d","300":"#fff176","400":"#ffee58","500":"#ffeb3b","600":"#fdd835","700":"#fbc02d","800":"#f9a825","900":"#f57f17","a100":"#ffff8d","a200":"#ffff00","a400":"#ffea00","a700":"#ffd600"};
var amber = {"50":"#fff8e1","100":"#ffecb3","200":"#ffe082","300":"#ffd54f","400":"#ffca28","500":"#ffc107","600":"#ffb300","700":"#ffa000","800":"#ff8f00","900":"#ff6f00","a100":"#ffe57f","a200":"#ffd740","a400":"#ffc400","a700":"#ffab00"};
var orange = {"50":"#fff3e0","100":"#ffe0b2","200":"#ffcc80","300":"#ffb74d","400":"#ffa726","500":"#ff9800","600":"#fb8c00","700":"#f57c00","800":"#ef6c00","900":"#e65100","a100":"#ffd180","a200":"#ffab40","a400":"#ff9100","a700":"#ff6d00"};
var deepOrange = {"50":"#fbe9e7","100":"#ffccbc","200":"#ffab91","300":"#ff8a65","400":"#ff7043","500":"#ff5722","600":"#f4511e","700":"#e64a19","800":"#d84315","900":"#bf360c","a100":"#ff9e80","a200":"#ff6e40","a400":"#ff3d00","a700":"#dd2c00"};
var brown = {"50":"#efebe9","100":"#d7ccc8","200":"#bcaaa4","300":"#a1887f","400":"#8d6e63","500":"#795548","600":"#6d4c41","700":"#5d4037","800":"#4e342e","900":"#3e2723"};
var grey = {"50":"#fafafa","100":"#f5f5f5","200":"#eeeeee","300":"#e0e0e0","400":"#bdbdbd","500":"#9e9e9e","600":"#757575","700":"#616161","800":"#424242","900":"#212121"};
var blueGrey = {"50":"#eceff1","100":"#cfd8dc","200":"#b0bec5","300":"#90a4ae","400":"#78909c","500":"#607d8b","600":"#546e7a","700":"#455a64","800":"#37474f","900":"#263238"};
var darkText = {"primary":"rgba(0, 0, 0, 0.87)","secondary":"rgba(0, 0, 0, 0.54)","disabled":"rgba(0, 0, 0, 0.38)","dividers":"rgba(0, 0, 0, 0.12)"};
var lightText = {"primary":"rgba(255, 255, 255, 1)","secondary":"rgba(255, 255, 255, 0.7)","disabled":"rgba(255, 255, 255, 0.5)","dividers":"rgba(255, 255, 255, 0.12)"};
var darkIcons = {"active":"rgba(0, 0, 0, 0.54)","inactive":"rgba(0, 0, 0, 0.38)"};
var lightIcons = {"active":"rgba(255, 255, 255, 1)","inactive":"rgba(255, 255, 255, 0.5)"};
var white = "#ffffff";
var black = "#000000";

/* harmony default export */ var colors_es2015 = ({
  red: red,
  pink: pink,
  purple: purple,
  deepPurple: deepPurple,
  indigo: indigo,
  blue: blue,
  lightBlue: lightBlue,
  cyan: cyan,
  teal: teal,
  green: green,
  lightGreen: lightGreen,
  lime: lime,
  yellow: yellow,
  amber: amber,
  orange: orange,
  deepOrange: deepOrange,
  brown: brown,
  grey: grey,
  blueGrey: blueGrey,
  darkText: darkText,
  lightText: lightText,
  darkIcons: darkIcons,
  lightIcons: lightIcons,
  white: white,
  black: black
});

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/swatches/swatches.vue?vue&type=script&lang=js




const colorMap = [
  "red",
  "pink",
  "purple",
  "deepPurple",
  "indigo",
  "blue",
  "lightBlue",
  "cyan",
  "teal",
  "green",
  "lightGreen",
  "lime",
  "yellow",
  "amber",
  "orange",
  "deepOrange",
  "brown",
  "blueGrey",
  "black",
];
const colorLevel = ["900", "700", "500", "300", "100"];
const swatchesvue_type_script_lang_js_defaultColors = (() => {
  const colors = [];
  colorMap.forEach((type) => {
    let typeColor = [];
    if (type.toLowerCase() === "black" || type.toLowerCase() === "white") {
      typeColor = typeColor.concat(["#000000", "#FFFFFF"]);
    } else {
      colorLevel.forEach((level) => {
        const color = colors_es2015[type][level];
        typeColor.push(color.toUpperCase());
      });
    }
    colors.push(typeColor);
  });
  return colors;
})();

/* harmony default export */ var swatchesvue_type_script_lang_js = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  name: "Swatches",
  mixins: [mixin_color],
  props: {
    palette: {
      type: Array,
      default() {
        return swatchesvue_type_script_lang_js_defaultColors;
      },
    },
  },
  computed: {
    pick() {
      return this.colors.hex;
    },
  },
  methods: {
    equal(color) {
      return color.toLowerCase() === this.colors.hex.toLowerCase();
    },
    handlerClick(c) {
      this.colorChange({
        hex: c,
        source: "hex",
      });
    },
  },
}));

// CONCATENATED MODULE: ./src/components/swatches/swatches.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/swatches/swatches.vue?vue&type=style&index=0&id=7375f34c&lang=css
var swatchesvue_type_style_index_0_id_7375f34c_lang_css = __webpack_require__("fe52");

// CONCATENATED MODULE: ./src/components/swatches/swatches.vue





swatchesvue_type_script_lang_js.render = swatchesvue_type_template_id_7375f34c_render

/* harmony default export */ var swatches = (swatchesvue_type_script_lang_js);
// CONCATENATED MODULE: ./src/components/swatches/index.ts

/* harmony default export */ var components_swatches = (swatches);

// CONCATENATED MODULE: ./node_modules/vue-loader-v16/dist/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/twitter/twitter.vue?vue&type=template&id=6acb8044


const twittervue_type_template_id_6acb8044_hoisted_1 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", { class: "vc-twitter-triangle-shadow" }, null, -1)
const twittervue_type_template_id_6acb8044_hoisted_2 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", { class: "vc-twitter-triangle" }, null, -1)
const twittervue_type_template_id_6acb8044_hoisted_3 = { class: "vc-twitter-body" }
const twittervue_type_template_id_6acb8044_hoisted_4 = ["onClick"]
const twittervue_type_template_id_6acb8044_hoisted_5 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", { class: "vc-twitter-hash" }, "#", -1)
const twittervue_type_template_id_6acb8044_hoisted_6 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", { class: "vc-twitter-clear" }, null, -1)

function twittervue_type_template_id_6acb8044_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_editable_input = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("editable-input")

  return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(["vc-twitter", {
      'vc-twitter-hide-triangle ': _ctx.triangle === 'hide',
      'vc-twitter-top-left-triangle ': _ctx.triangle === 'top-left',
      'vc-twitter-top-right-triangle ': _ctx.triangle === 'top-right',
    }]),
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])({
      width: typeof _ctx.width === 'number' ? `${_ctx.width}px` : _ctx.width,
    })
  }, [
    twittervue_type_template_id_6acb8044_hoisted_1,
    twittervue_type_template_id_6acb8044_hoisted_2,
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", twittervue_type_template_id_6acb8044_hoisted_3, [
      (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.defaultColors, (color, index) => {
        return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", {
          class: "vc-twitter-swatch",
          style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])({
          background: color,
          boxShadow: `0 0 4px ${_ctx.equal(color) ? color : 'transparent'}`,
        }),
          key: index,
          onClick: $event => (_ctx.handlerClick(color))
        }, null, 12, twittervue_type_template_id_6acb8044_hoisted_4))
      }), 128)),
      twittervue_type_template_id_6acb8044_hoisted_5,
      Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_editable_input, {
        label: "#",
        value: _ctx.hex,
        onChange: _ctx.inputChange
      }, null, 8, ["value", "onChange"]),
      twittervue_type_template_id_6acb8044_hoisted_6
    ])
  ], 6))
}
// CONCATENATED MODULE: ./src/components/twitter/twitter.vue?vue&type=template&id=6acb8044

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/twitter/twitter.vue?vue&type=script&lang=js




const twittervue_type_script_lang_js_defaultColors = [
  "#FF6900",
  "#FCB900",
  "#7BDCB5",
  "#00D084",
  "#8ED1FC",
  "#0693E3",
  "#ABB8C3",
  "#EB144C",
  "#F78DA7",
  "#9900EF",
];

/* harmony default export */ var twittervue_type_script_lang_js = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  name: "Twitter",
  mixins: [mixin_color],
  components: {
    editableInput: components_editable_input,
  },
  props: {
    width: {
      type: [String, Number],
      default: 276,
    },
    defaultColors: {
      type: Array,
      default() {
        return twittervue_type_script_lang_js_defaultColors;
      },
    },
    triangle: {
      default: "top-left",
      validator(value) {
        return ["hide", "top-left", "top-right"].includes(value);
      },
    },
  },
  computed: {
    hsv() {
      const { hsv } = this.colors;
      return {
        h: hsv.h.toFixed(),
        s: (hsv.s * 100).toFixed(),
        v: (hsv.v * 100).toFixed(),
      };
    },
    hex() {
      const { hex } = this.colors;
      return hex && hex.replace("#", "");
    },
  },
  methods: {
    equal(color) {
      return color.toLowerCase() === this.colors.hex.toLowerCase();
    },
    handlerClick(color) {
      this.colorChange({
        hex: color,
        source: "hex",
      });
    },
    inputChange(data) {
      if (!data) {
        return;
      }
      if (data["#"]) {
        this.isValidHex(data["#"]) &&
          this.colorChange({
            hex: data["#"],
            source: "hex",
          });
      } else if (data.r || data.g || data.b || data.a) {
        this.colorChange({
          r: data.r || this.colors.rgba.r,
          g: data.g || this.colors.rgba.g,
          b: data.b || this.colors.rgba.b,
          a: data.a || this.colors.rgba.a,
          source: "rgba",
        });
      } else if (data.h || data.s || data.v) {
        this.colorChange({
          h: data.h || this.colors.hsv.h,
          s: data.s / 100 || this.colors.hsv.s,
          v: data.v / 100 || this.colors.hsv.v,
          source: "hsv",
        });
      }
    },
  },
}));

// CONCATENATED MODULE: ./src/components/twitter/twitter.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/twitter/twitter.vue?vue&type=style&index=0&id=6acb8044&lang=css
var twittervue_type_style_index_0_id_6acb8044_lang_css = __webpack_require__("39dc");

// CONCATENATED MODULE: ./src/components/twitter/twitter.vue





twittervue_type_script_lang_js.render = twittervue_type_template_id_6acb8044_render

/* harmony default export */ var twitter = (twittervue_type_script_lang_js);
// CONCATENATED MODULE: ./src/components/twitter/index.ts

/* harmony default export */ var components_twitter = (twitter);

// CONCATENATED MODULE: ./node_modules/vue-loader-v16/dist/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/color-picker/index.vue?vue&type=template&id=a4b0a300


const color_pickervue_type_template_id_a4b0a300_hoisted_1 = { class: "vc-color-picker" }
const color_pickervue_type_template_id_a4b0a300_hoisted_2 = {
  key: 0,
  class: "vc-icon-cha"
}
const color_pickervue_type_template_id_a4b0a300_hoisted_3 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", { class: "vc-bg-alpha" }, null, -1)
const color_pickervue_type_template_id_a4b0a300_hoisted_4 = { class: "vc-footer-btns" }

function color_pickervue_type_template_id_a4b0a300_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Sketch = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("Sketch")

  return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", color_pickervue_type_template_id_a4b0a300_hoisted_1, [
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
      class: "picker",
      ref: "pickerRef",
      onClick: _cache[0] || (_cache[0] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])((...args) => (_ctx.show && _ctx.show(...args)), ["stop"]))
    }, [
      Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
        class: "picker-color",
        style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])({ backgroundColor: _ctx.model })
      }, null, 4),
      (!_ctx.model)
        ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", color_pickervue_type_template_id_a4b0a300_hoisted_2))
        : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true),
      color_pickervue_type_template_id_a4b0a300_hoisted_3
    ], 512),
    (_ctx.visible)
      ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
          key: 0,
          class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(["picker-panel", _ctx.position]),
          onClick: _cache[4] || (_cache[4] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])(() => {}, ["stop"]))
        }, [
          Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Sketch, {
            modelValue: _ctx.model,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => (_ctx.model = $event)),
            onChange: _ctx.onChange
          }, {
            footer: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(() => [
              Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", color_pickervue_type_template_id_a4b0a300_hoisted_4, [
                Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
                  class: "btn btn-text",
                  onClick: _cache[1] || (_cache[1] = (...args) => (_ctx.cancel && _ctx.cancel(...args)))
                }, "取消"),
                Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
                  class: "btn btn-primary",
                  onClick: _cache[2] || (_cache[2] = (...args) => (_ctx.confirm && _ctx.confirm(...args)))
                }, "确定")
              ])
            ]),
            _: 1
          }, 8, ["modelValue", "onChange"])
        ], 2))
      : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)
  ]))
}
// CONCATENATED MODULE: ./src/components/color-picker/index.vue?vue&type=template&id=a4b0a300

// CONCATENATED MODULE: ./src/components/color-picker/utils.ts
/**
 * 获取一个dom节点的绝对定位，相对于整个document
 */
function getPosition(dom) {
    var t = dom.offsetTop, l = dom.offsetLeft;
    var obj = dom;
    //从目标元素开始向外遍历，累加top和left值
    while (obj.offsetParent) {
        obj = obj.offsetParent;
        t += obj.offsetTop;
        l += obj.offsetLeft;
    }
    return {
        left: l,
        top: t,
    };
}

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/ts-loader??ref--13-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/color-picker/index.vue?vue&type=script&lang=ts



/* harmony default export */ var color_pickervue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
    components: { Sketch: components_sketch },
    props: {
        modelValue: {
            type: String,
            default: "",
        },
    },
    setup: function (props, context) {
        var model = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])("");
        var visible = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(false);
        var pickerRef = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])({});
        var position = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(["bottom", "left"]);
        var calcPosition = function () {
            var winW = document.body.clientWidth;
            var winH = document.body.clientHeight;
            position.value = [];
            var p = [];
            if (pickerRef.value) {
                //判断位置
                var posi = getPosition(pickerRef.value);
                if (posi.left < 220) {
                    p.push("left");
                }
                else if (posi.left + 30 + 220 > winW) {
                    p.push("right");
                }
                else {
                    p.push("left");
                }
                if (posi.top < 350) {
                    p.push("bottom");
                }
                else if (posi.top > winH - 350) {
                    p.push("top");
                }
                else {
                    p.push("bottom");
                }
                position.value = p;
            }
        };
        Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onMounted"])(function () {
            calcPosition();
        });
        var show = function () {
            visible.value = true;
            calcPosition();
            document.addEventListener("click", function () {
                visible.value = false;
            });
        };
        var cancel = function () {
            model.value = props.modelValue;
            visible.value = false;
        };
        var confirm = function () {
            context.emit("update:modelValue", model.value);
            visible.value = false;
            context.emit("change", model.value);
        };
        return {
            model: model,
            visible: visible,
            show: show,
            confirm: confirm,
            cancel: cancel,
            position: position,
            pickerRef: pickerRef,
        };
    },
}));

// CONCATENATED MODULE: ./src/components/color-picker/index.vue?vue&type=script&lang=ts
 
// EXTERNAL MODULE: ./src/components/color-picker/index.vue?vue&type=style&index=0&id=a4b0a300&lang=css
var color_pickervue_type_style_index_0_id_a4b0a300_lang_css = __webpack_require__("3f71");

// CONCATENATED MODULE: ./src/components/color-picker/index.vue





color_pickervue_type_script_lang_ts.render = color_pickervue_type_template_id_a4b0a300_render

/* harmony default export */ var color_picker = (color_pickervue_type_script_lang_ts);
// CONCATENATED MODULE: ./src/components/color-picker/index.ts

/* harmony default export */ var components_color_picker = (color_picker);

// CONCATENATED MODULE: ./src/components.ts
/* Do not modify the automatically generated code */















var components = [
    components_alpha,
    components_checkboard,
    components_chrome,
    components_compact,
    components_editable_input,
    components_grayscale,
    components_hue,
    components_material,
    components_photoshop,
    components_saturation,
    components_sketch,
    components_slider,
    components_swatches,
    components_twitter,
    components_color_picker,
];


// CONCATENATED MODULE: ./src/index.ts


// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js




/***/ }),

/***/ "fe52":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_swatches_vue_vue_type_style_index_0_id_7375f34c_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ed2d");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_swatches_vue_vue_type_style_index_0_id_7375f34c_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_swatches_vue_vue_type_style_index_0_id_7375f34c_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ })

/******/ });
});
//# sourceMappingURL=vue3-color.umd.js.map