webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#chefhuangry {\n    width: 80%;\n    border-radius: 50%;\n}\n\n#logo {\n    width: 45%;\n}\n\n#wrapper {\n    position: relative;\n    width: 100%;\n    min-height: 43vw;\n    overflow: hidden;\n}\n\n.layer {\n    position: absolute;\n    width: 100vw;\n    min-height: 43vw;\n    overflow: hidden;\n}\n\n.layer .content-wrap {\n    position: absolute;\n    width: 100vw;\n    min-height: 43vw;\n}\n\n.layer .content-body {\n    width: 15%;\n    position: absolute;\n    top: 50%;\n    text-align: center;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    color: #fff;\n}\n\n.layer img {\n    position: absolute;\n    width: 60%;\n    top: 50%;\n    left: 50%;\n    -webkit-transform:translate(-50%, -50%);\n            transform:translate(-50%, -50%);\n}\n\n.bottom {\n    background: #222;\n    z-index: 1;\n}\n\n.bottom .content-body {\n    right: 3%;\n}\n\n.top {\n    background: white;\n    color: black;\n    z-index: 2;\n    width: 50vw;\n}\n\n.top .content-body {\n    left: 3%;\n    color:#222;\n}\n\n.handle {\n    position: absolute;\n    height: 100%;\n    display: block;\n    background-color: white;\n    width: 5px;\n    top: 0;\n    left: 50%;\n    z-index: 3;\n}\n\n.skewed .handle {\n    top: 50%;\n    -webkit-transform: rotate(30deg) translateY(-50%);\n            transform: rotate(30deg) translateY(-50%);\n    height: 200%;\n    -webkit-transform-origin: top;\n            transform-origin: top;\n}\n\n.skewed .top {\n    -webkit-transform: skew(-30deg);\n            transform: skew(-30deg);\n    margin-left: -1000px;\n    width: calc(50vw + 1000px);\n}\n\n.skewed .top .content-wrap {\n    -webkit-transform: skew(30deg);\n            transform: skew(30deg);\n    margin-left: 1000px;\n}\n\n@media(max-width:768px){\n    h3, p {\n        font-size: 75%;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-4 col-sm-12 text-center\">\n      <img src=\"../assets/imgs/chefhuangry.JPG\" alt=\"Chef Huangry\" id=\"chefhuangry\">\n    </div>\n    <div class=\"col-md-8 col-sm-12\">\n      <div class=\"text-center\">\n        <img src=\"../assets/imgs/tacodelujo_logo.png\" alt=\"logo\" id=\"logo\">\n      </div>\n      <p>The concept for Taco de Lujo came to Executive Chef Huangry in a vision. He imagined a restaurant that combines the elegance and quality of a Michelin-starred establishment with the simplicity and accessibility of a street taco stand.</p>\n      <p>After several years of taco research and development, Chef Huangry's dream is now a reality. Taco de Lujo aims to provide the best taco experience that a diner could ever ask for.</p>\n      <p>We gratiously welcome you to our restaurant and encourage you to explore what makes each visit a special and unique experience.</p>\n    </div>\n  </div>\n</div>\n\n<br>\n\n<div class=\"container text-center\">      \n  <h2>What make our tacos unique:</h2>\n</div>\n\n<section id=\"wrapper\" class=\"skewed\">\n    <div class=\"layer bottom\">\n      <div class=\"content-wrap\">\n        <div class=\"content-body\">\n          <h3>Generic Taqueria</h3>\n          <p>Uninspiring tacos that have you running for el ba&ntilde;o...</p>\n        </div>\n        <img src=\"../assets/imgs/taco_sad.png\" alt=\"sad taco\">\n      </div>\n    </div>\n\n    <div class=\"layer top\">\n      <div class=\"content-wrap\">\n        <div class=\"content-body\">\n          <h3>Taco de Lujo</h3>\n          <p>Innovative, luxurious tacos that tickle your senses!</p>\n        </div>\n        <img src=\"../assets/imgs/taco_luxe.png\" alt=\"deluxe taco\">\n      </div>\n    </div>\n\n    <div class=\"handle\"></div>\n</section>\n\n<br><br>\n\n<div class=\"container text-center\">      \n  <h2>Comida deliciosa para toda la familia!</h2>\n  <img src=\"../assets/imgs/familia.JPG\" alt=\"family\">\n</div>\n\n<br>\n\n<footer>\n  <div class=\"text-center\">\n    <p>&copy; 2017 <a href=\"http://github.com/chaocharliehuang\" target=\"_blank\">Chao Charlie Huang</a> | Built using Angular, Express, MongoDB, Mongoose, Node.js, TacoFancy API, and Bootstrap CSS</p>\n  </div>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__taco_service__ = __webpack_require__("../../../../../src/app/taco.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = (function () {
    function AboutComponent(_tacoService) {
        this._tacoService = _tacoService;
        this._tacoService.loadScript();
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__taco_service__["a" /* TacoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__taco_service__["a" /* TacoService */]) === "function" && _a || Object])
], AboutComponent);

var _a;
//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_menu_component__ = __webpack_require__("../../../../../src/app/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__suggestions_suggestions_component__ = __webpack_require__("../../../../../src/app/suggestions/suggestions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__careers_careers_component__ = __webpack_require__("../../../../../src/app/careers/careers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', pathMatch: 'full', redirectTo: '/about' },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_2__about_about_component__["a" /* AboutComponent */] },
    { path: 'menu', component: __WEBPACK_IMPORTED_MODULE_3__menu_menu_component__["a" /* MenuComponent */] },
    { path: 'suggestions', component: __WEBPACK_IMPORTED_MODULE_4__suggestions_suggestions_component__["a" /* SuggestionsComponent */] },
    { path: 'careers', component: __WEBPACK_IMPORTED_MODULE_5__careers_careers_component__["a" /* CareersComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_6__contact_contact_component__["a" /* ContactComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__taco_service__ = __webpack_require__("../../../../../src/app/taco.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__nav_nav_component__ = __webpack_require__("../../../../../src/app/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__menu_menu_component__ = __webpack_require__("../../../../../src/app/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__suggestions_suggestions_component__ = __webpack_require__("../../../../../src/app/suggestions/suggestions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__careers_careers_component__ = __webpack_require__("../../../../../src/app/careers/careers.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__nav_nav_component__["a" /* NavComponent */],
            __WEBPACK_IMPORTED_MODULE_8__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_9__menu_menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_10__suggestions_suggestions_component__["a" /* SuggestionsComponent */],
            __WEBPACK_IMPORTED_MODULE_11__contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_12__careers_careers_component__["a" /* CareersComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_4__taco_service__["a" /* TacoService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/careers/careers.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h4 {\n    margin-bottom: 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/careers/careers.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"text-center\">\n    <h4>We are hiring for all positions!</h4>\n  </div>\n\n  <div class=\"row\">\n\n    <div class=\"col-md-4 col-sm-12\">\n      <div class=\"card\">\n        <img class=\"card-img-top\" src=\"../assets/imgs/dishwasher.png\" alt=\"dishwasher\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Dishwasher</h4>\n          <p class=\"card-text\">\n            Cleans dishes and utensils and may be entrusted with basic preparatory jobs.\n          </p>\n          <p class=\"card-text\">\n            <b>Base salary:</b> $70,000\n          </p>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-4 col-sm-12\">\n      <div class=\"card\">\n        <img class=\"card-img-top\" src=\"../assets/imgs/waiter.png\" alt=\"waiter\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Waiter</h4>\n          <p class=\"card-text\">\n            Takes customers' orders and brings their food in a kind and timely fashion.\n          </p>\n          <p class=\"card-text\">\n            <b>Base salary:</b> $80,000\n          </p>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-4 col-sm-12\">\n      <div class=\"card\">\n        <img class=\"card-img-top\" src=\"../assets/imgs/cook.png\" alt=\"cook\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Line Cook</h4>\n          <p class=\"card-text\">\n            Responsible for preparing and cooking specific dishes at an assigned station.\n          </p>\n          <p class=\"card-text\">\n            <b>Base salary:</b> $90,000\n          </p>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n  <br>\n\n  <div class=\"row\">\n\n    <div class=\"col-md-4 col-sm-12\">\n      <div class=\"card\">\n        <img class=\"card-img-top\" src=\"../assets/imgs/maitred.png\" alt=\"maitre d\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Ma&icirc;tre D'</h4>\n          <p class=\"card-text\">\n            Oversees the front of the house and makes sure the dining room is running smoothly.\n          </p>\n          <p class=\"card-text\">\n            <b>Base salary:</b> $100,000\n          </p>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-4 col-sm-12\">\n      <div class=\"card\">\n        <img class=\"card-img-top\" src=\"../assets/imgs/souschef.png\" alt=\"sous chef\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Sous-Chef</h4>\n          <p class=\"card-text\">\n            Second-in-command in the kitchen; receives orders directly from the Executive Chef.\n          </p>\n          <p class=\"card-text\">\n            <b>Base salary:</b> $150,000\n          </p>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-4 col-sm-12\">\n      <div class=\"card\">\n        <img class=\"card-img-top\" src=\"../assets/imgs/executivechef.png\" alt=\"executive chef\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Executive Chef</h4>\n          <p class=\"card-text\">\n            Manages the kitchen. Position not available unless you defeat Chef Huangry in a duel.\n          </p>\n          <p class=\"card-text\">\n            <b>Base salary:</b> $200,000\n          </p>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n  <br>\n\n  <div class=\"text-center\">\n    <p>\n      We require 15+ years of culinary experience.<br>\n      If you are interested in a position, <a href=\"mailto:hr@tacodelujo.com\">please send</a> us your resume and a list of 5 references.\n    </p>\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/careers/careers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CareersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CareersComponent = (function () {
    function CareersComponent() {
    }
    CareersComponent.prototype.ngOnInit = function () {
    };
    return CareersComponent;
}());
CareersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-careers',
        template: __webpack_require__("../../../../../src/app/careers/careers.component.html"),
        styles: [__webpack_require__("../../../../../src/app/careers/careers.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CareersComponent);

//# sourceMappingURL=careers.component.js.map

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "form, .address {\n    margin-top: 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"text-center\">\n      <h4>We hope to see you soon!</h4>\n      <br>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-6 col-sm-12 submissions\">\n        <h5>We look forward to your visit:</h5>\n        <p class=\"address\">\n          Taco de Lujo<br>\n          1701 Story Rd<br>\n          San Jose, CA 95122<br>\n          Phone: 408-555-5555<br>\n          Open daily: 11AM - 11PM\n        </p>\n        <iframe\n        width=\"100%\"\n        height=\"100%\"\n        frameborder=\"0\" style=\"border:0\"\n        src=\"https://www.google.com/maps/embed/v1/place?key=AIzaSyD1dLmrHL--ejhFmKBOVFyYOWIDwpvG3gM&q=1701+Story+Rd,San+Jose,+CA\" allowfullscreen>\n      </iframe>\n      </div>\n      <div class=\"col-md-6 col-sm-12\">\n        <h5>We would love to hear from you:</h5>\n        <form #formData=\"ngForm\" (submit)=\"onSubmit()\">\n          <div class=\"form-group\">\n            <label for=\"name\">Name:</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"name\"\n              name=\"name\"\n              required\n              minlength=\"2\"\n              maxlength=\"256\"\n              [(ngModel)]=\"message.name\"\n              #nameval=\"ngModel\">\n            <small class=\"form-text text-danger\" *ngIf=\"nameval.errors\">Name must be at least 2 characters in length</small>\n          </div>\n  \n          <div class=\"form-group\">\n            <label for=\"text\">Message:</label>\n            <textarea\n              name=\"text\"\n              class=\"form-control\"\n              id=\"text\"\n              rows=\"5\"\n              required\n              minlength=\"10\"\n              maxlength=\"256\"\n              [(ngModel)]=\"message.text\"\n              #textval=\"ngModel\">\n            </textarea>\n            <small class=\"form-text text-danger\" *ngIf=\"textval.errors\">Message must be at least 10 characters in length</small>\n          </div>\n          <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\" [disabled]=\"!formData.valid\">\n          <span class=\"text-success\" *ngIf=\"messageReceived\">Message received!</span>\n        </form>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
        this.messageReceived = false;
        this.message = {
            name: '',
            text: ''
        };
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.onSubmit = function () {
        this.messageReceived = true;
        this.message = {
            name: '',
            text: ''
        };
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-contact',
        template: __webpack_require__("../../../../../src/app/contact/contact.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contact/contact.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ContactComponent);

//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  menu works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuComponent = (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-menu',
        template: __webpack_require__("../../../../../src/app/menu/menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/menu/menu.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MenuComponent);

//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar sticky-top navbar-expand-lg navbar-light\" style=\"background-color:white;\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\">\n      <img src=\"../assets/imgs/tacodelujo_logo.png\" alt=\"logo\" height=\"80\">\n    </a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto nav-fill w-100\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"/about\">About</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['menu']\">Menu</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['suggestions']\">Suggestions</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['careers']\">Careers</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['contact']\">Contact</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    return NavComponent;
}());
NavComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-nav',
        template: __webpack_require__("../../../../../src/app/nav/nav.component.html"),
        styles: [__webpack_require__("../../../../../src/app/nav/nav.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NavComponent);

//# sourceMappingURL=nav.component.js.map

/***/ }),

/***/ "../../../../../src/app/suggestions/suggestions.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "form {\n    margin-top: 20px;\n}\n\n.card {\n    margin: 20px 0;\n}\n\n.submissions {\n    height: 75vh;\n    overflow: scroll;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/suggestions/suggestions.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"text-center\">\n    <h4>If we like your suggestion, we'll add it to our menu!</h4>\n    <br>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6 col-sm-12\">\n      <h5>Suggest a taco recipe:</h5>\n      <form #formData=\"ngForm\" (submit)=\"onSubmit()\">\n        <div class=\"form-group\">\n          <label for=\"name\">Name:</label>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"name\"\n            name=\"author\"\n            required\n            minlength=\"2\"\n            maxlength=\"256\"\n            [(ngModel)]=\"recipe.author\"\n            #authorval=\"ngModel\">\n          <small class=\"form-text text-danger\" *ngIf=\"authorval.errors\">Name must be at least 2 characters in length</small>\n        </div>\n\n        <button class=\"btn btn-primary\" (click)=\"getRandomRecipe()\">Get Random Recipe</button>\n        <br><br>\n\n        <div class=\"form-group\">\n          <label for=\"recipe\">Recipe:</label>\n          <textarea\n            name=\"text\"\n            class=\"form-control\"\n            id=\"recipe\"\n            rows=\"5\"\n            required\n            minlength=\"10\"\n            maxlength=\"256\"\n            [(ngModel)]=\"recipe.text\"\n            #recipeval=\"ngModel\">\n          </textarea>\n          <small class=\"form-text text-danger\" *ngIf=\"recipeval.errors\">Recipe must be at least 10 characters in length</small>\n        </div>\n        <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\" [disabled]=\"!formData.valid\">\n      </form>\n    </div>\n    <div class=\"col-md-6 col-sm-12 submissions\">\n      <h5>Recently submitted recipes:</h5>\n      <div class=\"card bg-secondary text-white\" *ngFor=\"let recipe of recipes\">\n        <h6 class=\"card-header\">{{ recipe.author }} ({{ recipe.createdAt | date:'medium' }}):</h6>\n        <div class=\"card-body\">\n          <p class=\"card-text\">{{ recipe.text }}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/suggestions/suggestions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuggestionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__taco_service__ = __webpack_require__("../../../../../src/app/taco.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SuggestionsComponent = (function () {
    function SuggestionsComponent(_tacoService) {
        var _this = this;
        this._tacoService = _tacoService;
        this.recipe = {
            author: '',
            text: ''
        };
        this._tacoService.retrieveRecipes(function (recipes) {
            _this.recipes = recipes;
        });
    }
    SuggestionsComponent.prototype.getRandomRecipe = function () {
        var _this = this;
        this._tacoService.getRandomRecipe(function (recipe) {
            var newRecipe = recipe.base_layer.name + ' with ';
            newRecipe += recipe.mixin.name + ', garnished with ';
            newRecipe += recipe.condiment.name + ' topped off with ';
            newRecipe += recipe.seasoning.name + ' and wrapped in delicious ';
            newRecipe += recipe.shell.name;
            _this.recipe.text = newRecipe;
        });
    };
    SuggestionsComponent.prototype.onSubmit = function () {
        var _this = this;
        this._tacoService.addRecipe(this.recipe, function (recipes) {
            _this.recipes = recipes;
            _this.recipe = {
                author: '',
                text: ''
            };
        });
    };
    SuggestionsComponent.prototype.ngOnInit = function () {
    };
    return SuggestionsComponent;
}());
SuggestionsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-suggestions',
        template: __webpack_require__("../../../../../src/app/suggestions/suggestions.component.html"),
        styles: [__webpack_require__("../../../../../src/app/suggestions/suggestions.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__taco_service__["a" /* TacoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__taco_service__["a" /* TacoService */]) === "function" && _a || Object])
], SuggestionsComponent);

var _a;
//# sourceMappingURL=suggestions.component.js.map

/***/ }),

/***/ "../../../../../src/app/taco.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TacoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TacoService = (function () {
    function TacoService(_http) {
        this._http = _http;
    }
    TacoService.prototype.retrieveRecipes = function (callback) {
        var _this = this;
        this._http.get('/recipes').subscribe(function (response) {
            _this.recipes = response.json();
            callback(_this.recipes);
        }, function (err) {
            console.log(err);
        });
    };
    TacoService.prototype.addRecipe = function (recipe, callback) {
        var _this = this;
        var body = JSON.stringify(recipe);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this._http.post('/recipes', body, options).subscribe(function (response) {
            _this.recipes = response.json();
            callback(_this.recipes);
        }, function (err) {
            console.log(err);
        });
    };
    TacoService.prototype.getRandomRecipe = function (callback) {
        this._http.get('http://taco-randomizer.herokuapp.com/random/').subscribe(function (response) {
            callback(response.json());
        }, function (err) {
            console.log(err);
        });
    };
    TacoService.prototype.loadScript = function () {
        document.addEventListener('DOMContentLoaded', function () {
            var wrapper = document.getElementById('wrapper');
            var topLayer = wrapper.querySelector('.top');
            var handle = wrapper.querySelector('.handle');
            var skew = 0;
            var delta = 0;
            if (wrapper.className.indexOf('skewed') != -1) {
                skew = 1000;
            }
            wrapper.addEventListener('mousemove', function (e) {
                delta = (e.clientX - window.innerWidth / 2) * 0.5;
                handle.style.left = e.clientX + delta + 'px';
                topLayer.style.width = e.clientX + skew + delta + 'px';
            });
        });
    };
    return TacoService;
}());
TacoService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], TacoService);

var _a;
//# sourceMappingURL=taco.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map