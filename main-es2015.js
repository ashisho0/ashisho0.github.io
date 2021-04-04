(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Navbar starts here -->\n\n<nav class=\"navbar center navbar-expand-lg navbar-dark bg-dark\">\n  <div class=\"container\">\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n      aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <a class=\"navbar-brand\" routerLink=\"/\"><img src=\"../assets/images/MA.jpg\"></a>\n\n    <div class=\"collapse navbar-collapse\"></div>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav navbar-center\">\n\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/contact\">Contact</a>\n        </li>\n\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/projects\">Projects</a>\n        </li>\n\n\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"https://github.com/ashisho0\" target=\"_blank\">Github <i class=\"fa fa-github\"\n              aria-hidden=\"true\"></i></a>\n        </li>\n\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"https://www.linkedin.com/in/mohamad-ashish-126184148/\" target=\"_blank\">Linkedin <i\n              class=\"fa fa-linkedin-square\" aria-hidden=\"true\"></i></a>\n        </li>\n\n        <li class=\"nav-item\">\n          <a class=\"nav-link\"\n            href=\"../assets/mohamad-ashish-cv.pdf\" target=\"_blank\" download>Resume\n            <i class=\"fa fa-paperclip\" aria-hidden=\"true\"></i></a>\n        </li>\n\n      </ul>\n\n    </div>\n  </div>\n</nav>\n\n<!-- navbar ends here -->\n\n\n<main>\n  <router-outlet></router-outlet>\n</main>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"center\">\n\n    <div class=\"container contact\">\n        <div class=\"row\">\n            <div class=\"col-md-3\">\n                <div class=\"contact-info\">\n                    <img src=\"https://image.ibb.co/kUASdV/contact-image.png\" alt=\"image\" />\n                    <h2>Contact</h2>\n                    <h4>I would love to hear from you !</h4>\n                    <br>\n                    <p><strong>EMAIL:</strong> mohamadashish@gmail.com</p>\n\n                </div>\n            </div>\n\n\n            <div class=\"col-md-9\">\n                <form #contactForm=\"ngForm\" novalidate>\n\n                    <div class=\"contact-form\">\n\n                        <div class=\"form-group\">\n                            <label class=\"control-label col-sm-2\">Name</label>\n                            <div class=\"col-sm-10\">\n                                <input type=\"text\" [(ngModel)]=\"wholeEmail.name\" #name=\"ngModel\" class=\"form-control\"\n                                    placeholder=\"Enter Name\" name=\"name\">\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label class=\"control-label col-sm-2\">Email</label>\n                            <div class=\"col-sm-10\">\n                                <input type=\"text\" [(ngModel)]=\"wholeEmail.email\" #email=\"ngModel\" class=\"form-control\"\n                                    placeholder=\"Enter Email\" name=\"email\" required>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group\">\n                            <label class=\"control-label col-sm-2\" for=\"msg\">Message</label>\n                            <div class=\"col-sm-10\">\n                                <textarea class=\"form-control\" [(ngModel)]=\"wholeEmail.msg\" name=\"msg\" #msg=\"ngModel\"\n                                    rows=\"5\" required></textarea>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <div class=\"col-sm-offset-2 col-sm-10\">\n                                <button type=\"submit\" (click)=\"submit()\" [disabled]=\"contactForm.invalid\"\n                                    class=\"btn btn-default\">Submit</button>\n                            </div>\n                        </div>\n                    </div>\n\n                </form>\n\n\n            </div>\n        </div>\n    </div>\n\n\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/homepage/homepage.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/homepage/homepage.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content\">\n    <h1><SPAN>HEY,</SPAN> <SPAN>ITS </SPAN> <SPAN>ASHISH </SPAN></h1>\n\n    <p class=\"anim-typewriter\">I am a software engineer based in Kathmandu, Nepal.</p>\n    <p>Hit me up and let's create something special.</p>\n\n    <div>\n        <a class=\"brk-btn\" routerLink=\"/projects\">\n            View Projects\n        </a>\n    </div>\n\n</div>\n\n<!-- view projects button -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"bg-modal\">\n\n    <section class=\"center\">\n        <div class=\"container\">\n            <!-- <div class=\"row\">\n                <h1>These are some of my projects</h1>\n            </div> -->\n\n            <!-- project1 -->\n\n            <div class=\"row\">\n                <div class=\"col-lg-12 project\">\n                    <div class=\"row\">\n                        <div class=\"col-lg-6\">\n                            <img class=\"projectImg\" src=\"../../assets/images/blogmeup.png\" alt=\"Blogmeup\">\n                        </div>\n\n                        <div class=\"col-lg-6 p-4\">\n                            <h3>BLOGMEUP </h3>\n\n                            <div class=\"mb-3\">\n                                <table>\n                                    <tr>\n                                        <td>HTML & CSS</td>\n                                        <td>Javascript</td>\n                                        <td>Bootstrap</td>\n                                        <td>Angular</td>\n                                    </tr>\n                                    <tr>\n                                        <td>Node</td>\n                                        <td>Express</td>\n                                        <td>MongoDb</td>\n                                        <td>Responsive</td>\n                                    </tr>\n                                </table>\n                            </div>\n                            <div class=\"about\">\n\n                                <h3>ABOUT</h3>\n                                <p>Blogmeup is a dynamic blogging web application. I used token based authentication to\n                                    ensure the unique login and registration into the system. It is built on MEAN stack.\n                                    I\n                                    used angular to make it a single page application. The whole database was written\n                                    using\n                                    mongoose ODM.\n                                    This is a multi user application. User roles are admin, author, and guest.\n                                    Please use the guest admin credentials while going through the demo.\n                                </p>\n                                <P>EMAIL: guest@guest.com</P>\n                                <P>PASSWORD: qwerty</P>\n                            </div>\n\n\n                            <div class=\"button\">\n                                <!-- to hosted link -->\n                                <a class=\"btn btn-success\" href=\"https://dry-crag-71428.herokuapp.com/\"\n                                    target=\"_blank\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i> View Demo</a>\n                                <!-- to github repo -->\n                                <a class=\"btn btn-success\" href=\"https://github.com/ashisho0/blog-me-up\"\n                                    target=\"_blank\"><i class=\"fa fa-code\" aria-hidden=\"true\"></i> View Code</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n\n\n\n\n\n\n\n            <!-- project2 -->\n\n            <div class=\"row\">\n                <div class=\"col-lg-12 project\">\n                    <div class=\"row\">\n                        <div class=\"col-lg-6\">\n                            <img class=\"projectImg\" src=\"../../assets/images/cms.png\" alt=\"Construction Management\">\n                        </div>\n\n                        <div class=\"col-lg-6 p-4 \">\n                            <h3>CONSTRUCTION MANAGEMENT </h3>\n\n                            <div class=\"mb-3\">\n                                <table>\n                                    <tr>\n                                        <td>HTML & CSS</td>\n                                        <td>Javascript</td>\n                                        <td>Tailwind.css</td>\n                                        <td>Angular</td>\n                                    </tr>\n                                    <tr>\n                                        <td>SASS</td>\n                                        <td>Node</td>\n                                        <td>Strapi.io</td>\n                                        <td>Express</td>\n                                    </tr>\n                                </table>\n                            </div>\n                            <div class=\"about\">\n                                <h3>ABOUT</h3>\n                                <p>Construction mangement is a management tool. It is built on strapi.io and angular.\n                                    Tailwind, a CSS framework is used to design its UI/UX. Construction management is a\n                                    project management tool, with roles and privileges catagorized in an heirarchy.\n                                    Built on the framework and work flow architecture following a typical construction\n                                    company. This is a private contracted project therefore the full demo and code\n                                    access is not accessible.\n                                </p>\n                            </div>\n\n\n                            <div class=\"button\">\n                                <!-- to hosted link -->\n                                <a class=\"btn btn-success\" href=\"https://powerful-cliffs-02599.herokuapp.com/\"\n                                    target=\"_blank\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i> View Demo</a>\n                                <!-- to github repo -->\n                                <a class=\"btn btn-success\" href=\"https://github.com/ashisho0/construction-\"\n                                    target=\"_blank\"><i class=\"fa fa-code\" aria-hidden=\"true\"></i> View Code</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n\n        </div>\n    </section>\n\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");






const routes = [
    {
        path: '',
        component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__["HomepageComponent"]
    },
    {
        path: 'contact',
        component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"]
    },
    {
        path: 'projects',
        component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"]
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navbar {\n  background-color: black !important;\n}\n\n.nav-item {\n  margin-left: 3rem;\n}\n\n.nav-link:hover {\n  border-bottom: 1px solid white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRTpcXFByb2plY3RzXFxwb3J0Zm9saW9cXHBvcnRmb2xpby9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQ0FBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7QUNDSjs7QURFQTtFQUNJLDhCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uYXYtaXRlbSB7XHJcbiAgICBtYXJnaW4tbGVmdDogM3JlbTtcclxufVxyXG5cclxuLm5hdi1saW5rOmhvdmVye1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xyXG59XHJcbiIsIi5uYXZiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xufVxuXG4ubmF2LWl0ZW0ge1xuICBtYXJnaW4tbGVmdDogM3JlbTtcbn1cblxuLm5hdi1saW5rOmhvdmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'portfolio';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _contact_email_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact/email-service */ "./src/app/contact/email-service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");











let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__["HomepageComponent"],
            _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"],
            _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]
        ],
        providers: [_contact_email_service__WEBPACK_IMPORTED_MODULE_8__["EmailService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\n  width: 400px;\n}\n\n.center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.contact {\n  padding: 4%;\n  height: 400px;\n}\n\n.col-md-3 {\n  background: black;\n  color: #e5e4e2;\n  padding: 4%;\n  border-top-left-radius: 0.5rem;\n  border-bottom-left-radius: 0.5rem;\n}\n\n.contact-info {\n  margin-top: 10%;\n}\n\n.contact-info img {\n  margin-bottom: 15%;\n}\n\n.contact-info h2 {\n  margin-bottom: 10%;\n}\n\n.col-md-9 {\n  background: #e5e4e2ff;\n  padding: 3%;\n  border-top-right-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\n\n.contact-form label {\n  font-weight: 600;\n}\n\n.contact-form button {\n  background: green;\n  color: #fff;\n  font-weight: 600;\n  width: 25%;\n}\n\n.contact-form button:hover {\n  background-color: #32cd32;\n}\n\ninput {\n  background-color: #e5e4e2;\n  border: solid black 1px;\n}\n\ntextarea {\n  background-color: #e5e4e2;\n  border: solid black 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9FOlxcUHJvamVjdHNcXHBvcnRmb2xpb1xccG9ydGZvbGlvL3NyY1xcYXBwXFxjb250YWN0XFxjb250YWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREdBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUNBSjs7QURFQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLGlDQUFBO0FDQ0o7O0FEQ0E7RUFDSSxlQUFBO0FDRUo7O0FEQUE7RUFDSSxrQkFBQTtBQ0dKOztBRERBO0VBQ0ksa0JBQUE7QUNJSjs7QURGQTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLCtCQUFBO0VBQ0Esa0NBQUE7QUNLSjs7QURIQTtFQUNJLGdCQUFBO0FDTUo7O0FESkE7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUNPSjs7QURMQTtFQUNJLHlCQUFBO0FDUUo7O0FETEE7RUFDSSx5QkFBQTtFQUNBLHVCQUFBO0FDUUo7O0FETEE7RUFDSSx5QkFBQTtFQUNBLHVCQUFBO0FDUUoiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbn1cclxuXHJcbi5jZW50ZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC8vIG1hcmdpbi10b3A6IDIwcmVtO1xyXG59XHJcblxyXG4uY29udGFjdCB7XHJcbiAgICBwYWRkaW5nOiA0JTtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbn1cclxuLmNvbC1tZC0zIHtcclxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgY29sb3I6ICNlNWU0ZTI7XHJcbiAgICBwYWRkaW5nOiA0JTtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuNXJlbTtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuNXJlbTtcclxufVxyXG4uY29udGFjdC1pbmZvIHtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxufVxyXG4uY29udGFjdC1pbmZvIGltZyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNSU7XHJcbn1cclxuLmNvbnRhY3QtaW5mbyBoMiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMCU7XHJcbn1cclxuLmNvbC1tZC05IHtcclxuICAgIGJhY2tncm91bmQ6ICNlNWU0ZTJmZjtcclxuICAgIHBhZGRpbmc6IDMlO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuNXJlbTtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjVyZW07XHJcbn1cclxuLmNvbnRhY3QtZm9ybSBsYWJlbCB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi5jb250YWN0LWZvcm0gYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQ6IGdyZWVuO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgd2lkdGg6IDI1JTtcclxufVxyXG4uY29udGFjdC1mb3JtIGJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzJjZDMyO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlNGUyO1xyXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XHJcbn1cclxuXHJcbnRleHRhcmVhIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWU0ZTI7XHJcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcclxufVxyXG4iLCIuY2FyZCB7XG4gIHdpZHRoOiA0MDBweDtcbn1cblxuLmNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY29udGFjdCB7XG4gIHBhZGRpbmc6IDQlO1xuICBoZWlnaHQ6IDQwMHB4O1xufVxuXG4uY29sLW1kLTMge1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgY29sb3I6ICNlNWU0ZTI7XG4gIHBhZGRpbmc6IDQlO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjVyZW07XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuNXJlbTtcbn1cblxuLmNvbnRhY3QtaW5mbyB7XG4gIG1hcmdpbi10b3A6IDEwJTtcbn1cblxuLmNvbnRhY3QtaW5mbyBpbWcge1xuICBtYXJnaW4tYm90dG9tOiAxNSU7XG59XG5cbi5jb250YWN0LWluZm8gaDIge1xuICBtYXJnaW4tYm90dG9tOiAxMCU7XG59XG5cbi5jb2wtbWQtOSB7XG4gIGJhY2tncm91bmQ6ICNlNWU0ZTJmZjtcbiAgcGFkZGluZzogMyU7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjVyZW07XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjVyZW07XG59XG5cbi5jb250YWN0LWZvcm0gbGFiZWwge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uY29udGFjdC1mb3JtIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IGdyZWVuO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgd2lkdGg6IDI1JTtcbn1cblxuLmNvbnRhY3QtZm9ybSBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzJjZDMyO1xufVxuXG5pbnB1dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWU0ZTI7XG4gIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xufVxuXG50ZXh0YXJlYSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWU0ZTI7XG4gIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _email_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./email-service */ "./src/app/contact/email-service.ts");



let ContactComponent = class ContactComponent {
    constructor(emailService) {
        this.emailService = emailService;
        this.wholeEmail = {};
    }
    ngOnInit() {
    }
    submit() {
        this.emailService.sendEmail(this.wholeEmail)
            .subscribe((data) => {
            console.log('email Send Successfully', data);
            alert('Message has been sent');
            // this.router.navigate(['/home']);
        }),
            ((err) => {
                console.log('Email sending failed');
            });
    }
};
ContactComponent.ctorParameters = () => [
    { type: _email_service__WEBPACK_IMPORTED_MODULE_2__["EmailService"] }
];
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")).default]
    })
], ContactComponent);



/***/ }),

/***/ "./src/app/contact/email-service.ts":
/*!******************************************!*\
  !*** ./src/app/contact/email-service.ts ***!
  \******************************************/
/*! exports provided: EmailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailService", function() { return EmailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let EmailService = class EmailService {
    constructor(http) {
        this.http = http;
        this.url = 'http://localhost:4000/';
    }
    sendEmail(data) {
        return this.http.post(this.url + 'sendemail', data, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            })
        });
    }
};
EmailService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
EmailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], EmailService);



/***/ }),

/***/ "./src/app/homepage/homepage.component.scss":
/*!**************************************************!*\
  !*** ./src/app/homepage/homepage.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\n  margin: auto;\n  width: 50%;\n  padding: 10px;\n  text-align: center;\n  margin-top: 15rem;\n  font-family: \"Anonymous Pro\", monospace;\n}\n\nh1 {\n  color: white;\n  font-size: 5rem;\n}\n\nspan:hover {\n  color: #848282;\n}\n\np {\n  color: white;\n  font-size: 1.2rem;\n}\n\n.brk-btn {\n  position: relative;\n  background: none;\n  color: aqua;\n  text-transform: uppercase;\n  text-decoration: none;\n  border: 0.2em solid aqua;\n  padding: 0.5em 1em;\n}\n\n.brk-btn::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 10%;\n  background: #222;\n  height: 0.3em;\n  right: 20%;\n  top: -0.21em;\n  transform: skewX(-45deg);\n  transition: all 0.45s cubic-bezier(0.86, 0, 0.07, 1);\n}\n\n.brk-btn::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 10%;\n  background: #222;\n  height: 0.3em;\n  left: 20%;\n  bottom: -0.25em;\n  transform: skewX(45deg);\n  transition: all 0.45s cubic-bezier(0.86, 0, 0.07, 1);\n}\n\n.brk-btn:hover::before {\n  right: 80%;\n}\n\n.brk-btn:hover::after {\n  left: 80%;\n}\n\n.brk-btn:hover {\n  color: aqua !important;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvRTpcXFByb2plY3RzXFxwb3J0Zm9saW9cXHBvcnRmb2xpby9zcmNcXGFwcFxcaG9tZXBhZ2VcXGhvbWVwYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lcGFnZS9ob21lcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1Q0FBQTtBQ0NKOztBRFFBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUNMSjs7QURRQTtFQUNJLGNBQUE7QUNMSjs7QURRQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBQ0xKOztBRFNBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtBQ05KOztBRE9JO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBRUEsb0RBQUE7QUNMUjs7QURPSTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUVBLG9EQUFBO0FDTFI7O0FEUVE7RUFDSSxVQUFBO0FDTlo7O0FEUVE7RUFDSSxTQUFBO0FDTlo7O0FEV0E7RUFDSSxzQkFBQTtFQUNBLGVBQUE7QUNSSiIsImZpbGUiOiJzcmMvYXBwL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkFub255bW91cyBQcm9cIiwgbW9ub3NwYWNlO1xyXG59XHJcblxyXG4vLyAuY29udGVudDpob3ZlciB7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWIxNzFiO1xyXG4vLyAgICAgYm9yZGVyOiAzcHggc29saWQgZ3JlZW47XHJcblxyXG4vLyB9XHJcblxyXG5oMSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDVyZW07XHJcbn1cclxuXHJcbnNwYW46aG92ZXIge1xyXG4gICAgY29sb3I6IHJnYigxMzIsIDEzMCwgMTMwKTtcclxufVxyXG5cclxucCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG5cclxuLy8gQnV0dG9uXHJcbi5icmstYnRuIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBjb2xvcjogYXF1YTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBib3JkZXI6IDAuMmVtIHNvbGlkIGFxdWE7XHJcbiAgICBwYWRkaW5nOiAwLjVlbSAxZW07XHJcbiAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAxMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzIyMjtcclxuICAgICAgICBoZWlnaHQ6IDAuM2VtO1xyXG4gICAgICAgIHJpZ2h0OiAyMCU7XHJcbiAgICAgICAgdG9wOiAtMC4yMWVtO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2tld1goLTQ1ZGVnKTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjQ1cyBjdWJpYy1iZXppZXIoMC44NiwgMCwgMC4wNywgMSk7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNDVzIGN1YmljLWJlemllcigwLjg2LCAwLCAwLjA3LCAxKTtcclxuICAgIH1cclxuICAgICY6OmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMTAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMyMjI7XHJcbiAgICAgICAgaGVpZ2h0OiAwLjNlbTtcclxuICAgICAgICBsZWZ0OiAyMCU7XHJcbiAgICAgICAgYm90dG9tOiAtMC4yNWVtO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2tld1goNDVkZWcpO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNDUgY3ViaWMtYmV6aWVyKDAuODYsIDAsIDAuMDcsIDEpO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjQ1cyBjdWJpYy1iZXppZXIoMC44NiwgMCwgMC4wNywgMSk7XHJcbiAgICB9XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICByaWdodDogODAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICAgIGxlZnQ6IDgwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5icmstYnRuOmhvdmVyIHtcclxuICAgIGNvbG9yOiBhcXVhICFpbXBvcnRhbnQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIiwiLmNvbnRlbnQge1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiA1MCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTVyZW07XG4gIGZvbnQtZmFtaWx5OiBcIkFub255bW91cyBQcm9cIiwgbW9ub3NwYWNlO1xufVxuXG5oMSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiA1cmVtO1xufVxuXG5zcGFuOmhvdmVyIHtcbiAgY29sb3I6ICM4NDgyODI7XG59XG5cbnAge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4uYnJrLWJ0biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6IGFxdWE7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm9yZGVyOiAwLjJlbSBzb2xpZCBhcXVhO1xuICBwYWRkaW5nOiAwLjVlbSAxZW07XG59XG4uYnJrLWJ0bjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwJTtcbiAgYmFja2dyb3VuZDogIzIyMjtcbiAgaGVpZ2h0OiAwLjNlbTtcbiAgcmlnaHQ6IDIwJTtcbiAgdG9wOiAtMC4yMWVtO1xuICB0cmFuc2Zvcm06IHNrZXdYKC00NWRlZyk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNDVzIGN1YmljLWJlemllcigwLjg2LCAwLCAwLjA3LCAxKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNDVzIGN1YmljLWJlemllcigwLjg2LCAwLCAwLjA3LCAxKTtcbn1cbi5icmstYnRuOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMCU7XG4gIGJhY2tncm91bmQ6ICMyMjI7XG4gIGhlaWdodDogMC4zZW07XG4gIGxlZnQ6IDIwJTtcbiAgYm90dG9tOiAtMC4yNWVtO1xuICB0cmFuc2Zvcm06IHNrZXdYKDQ1ZGVnKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40NSBjdWJpYy1iZXppZXIoMC44NiwgMCwgMC4wNywgMSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjQ1cyBjdWJpYy1iZXppZXIoMC44NiwgMCwgMC4wNywgMSk7XG59XG4uYnJrLWJ0bjpob3Zlcjo6YmVmb3JlIHtcbiAgcmlnaHQ6IDgwJTtcbn1cbi5icmstYnRuOmhvdmVyOjphZnRlciB7XG4gIGxlZnQ6IDgwJTtcbn1cblxuLmJyay1idG46aG92ZXIge1xuICBjb2xvcjogYXF1YSAhaW1wb3J0YW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomepageComponent = class HomepageComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-homepage',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./homepage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/homepage/homepage.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./homepage.component.scss */ "./src/app/homepage/homepage.component.scss")).default]
    })
], HomepageComponent);



/***/ }),

/***/ "./src/app/projects/projects.component.scss":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".center {\n  display: flex !important;\n  justify-content: center !important;\n  align-items: center !important;\n}\n\n.project {\n  color: #e8e8e8;\n  background-color: black;\n  padding: 0;\n  margin-bottom: 2rem;\n  border: 1px solid #8c8c8c;\n}\n\n.project .projectImg {\n  height: 100%;\n  width: 100%;\n}\n\ntd {\n  text-align: center;\n  background-color: #191919;\n  text-transform: lowercase;\n  border-radius: 60%;\n  padding: 5px;\n}\n\n.button {\n  text-align: center;\n}\n\n.btn {\n  margin-right: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvRTpcXFByb2plY3RzXFxwb3J0Zm9saW9cXHBvcnRmb2xpby9zcmNcXGFwcFxccHJvamVjdHNcXHByb2plY3RzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNJLHdCQUFBO0VBQ0Esa0NBQUE7RUFDQSw4QkFBQTtBQ0hKOztBRE1BO0VBQ0ksY0FBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUNISjs7QURPQTtFQUNJLFlBQUE7RUFFQSxXQUFBO0FDTEo7O0FEUUE7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNMSjs7QURRQTtFQUNJLGtCQUFBO0FDTEo7O0FET0E7RUFDSSxrQkFBQTtBQ0pKIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAubWFpbiB7XHJcbi8vICAgICB3aWR0aDogODAwcHg7XHJcbi8vICAgICBoZWlnaHQ6IDYwMHB4O1xyXG4vLyB9XHJcbi5jZW50ZXIge1xyXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnByb2plY3Qge1xyXG4gICAgY29sb3I6ICNlOGU4ZTg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzhjOGM4YztcclxuICAgIC8vIGhlaWdodDogNTE5cHg7XHJcbn1cclxuXHJcbi5wcm9qZWN0IC5wcm9qZWN0SW1nIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxudGQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5MTkxOTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2MCU7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5idG4ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG59XHJcbiIsIi5jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLnByb2plY3Qge1xuICBjb2xvcjogI2U4ZThlODtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICM4YzhjOGM7XG59XG5cbi5wcm9qZWN0IC5wcm9qZWN0SW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxudGQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTE5MTk7XG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG4gIGJvcmRlci1yYWRpdXM6IDYwJTtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uYnV0dG9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYnRuIHtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProjectsComponent = class ProjectsComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-projects',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./projects.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./projects.component.scss */ "./src/app/projects/projects.component.scss")).default]
    })
], ProjectsComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Projects\portfolio\portfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map