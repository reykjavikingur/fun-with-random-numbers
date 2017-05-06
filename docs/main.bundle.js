webpackJsonp([1,4],{

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Scoreboard; });
var Scoreboard = (function () {
    function Scoreboard() {
        this.pointMap = {};
    }
    Scoreboard.prototype.award = function (player, points) {
        if (!this.pointMap.hasOwnProperty(player)) {
            this.pointMap[player] = 0;
        }
        this.pointMap[player] += points;
    };
    Scoreboard.prototype.points = function (player) {
        if (this.pointMap.hasOwnProperty(player)) {
            return this.pointMap[player];
        }
        else {
            return 0;
        }
    };
    Scoreboard.prototype.players = function () {
        var list = [];
        for (var player in this.pointMap) {
            list.push(player);
        }
        return list;
    };
    Scoreboard.prototype.maxPoints = function () {
        var _this = this;
        var scores = this.players().map(function (player) { return _this.pointMap[player]; });
        if (scores.length > 0) {
            return Math.max.apply(Math, scores);
        }
        else {
            return 0;
        }
    };
    return Scoreboard;
}());
//# sourceMappingURL=/Users/astrader/ProjectCode/prototypes/fun-with-random-numbers/src/scoreboard.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chooser; });
var Chooser = (function () {
    function Chooser(choices) {
        this.choices = choices;
    }
    Chooser.prototype.choose = function () {
        var i = Math.floor(Math.random() * this.choices.length);
        return this.choices[i];
    };
    return Chooser;
}());
//# sourceMappingURL=/Users/astrader/ProjectCode/prototypes/fun-with-random-numbers/src/chooser.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_chooser__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_scoreboard__ = __webpack_require__(215);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DicePageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DICE_RESULTS = [1, 2, 3, 4, 5, 6];
var DicePageComponent = (function () {
    function DicePageComponent() {
        this.initializeDice();
        this.clearTally();
    }
    DicePageComponent.prototype.ngOnInit = function () {
    };
    DicePageComponent.prototype.initializeDice = function () {
        this.dice = new __WEBPACK_IMPORTED_MODULE_1__models_chooser__["a" /* Chooser */](DICE_RESULTS);
        this.result = this.dice.choose();
    };
    DicePageComponent.prototype.clearTally = function () {
        this.scoreboard = new __WEBPACK_IMPORTED_MODULE_2__models_scoreboard__["a" /* Scoreboard */]();
        for (var _i = 0, DICE_RESULTS_1 = DICE_RESULTS; _i < DICE_RESULTS_1.length; _i++) {
            var r = DICE_RESULTS_1[_i];
            this.scoreboard.award(r.toString(), 0);
        }
    };
    DicePageComponent.prototype.roll = function (repeats) {
        if (repeats === void 0) { repeats = 1; }
        for (var i = 0; i < repeats; i++) {
            this.result = this.dice.choose();
            this.scoreboard.award(this.result.toString(), 1);
        }
    };
    DicePageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'p01-dice-page',
            template: __webpack_require__(672),
            styles: [__webpack_require__(668)]
        }), 
        __metadata('design:paramtypes', [])
    ], DicePageComponent);
    return DicePageComponent;
}());
//# sourceMappingURL=/Users/astrader/ProjectCode/prototypes/fun-with-random-numbers/src/dice-page.component.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_chooser__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_scoreboard__ = __webpack_require__(215);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarkPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NUM_DICE = 4;
var DICE_RESULTS = [1, 2, 3, 4, 5, 6];
var MarkPageComponent = (function () {
    function MarkPageComponent() {
        this.initializeDice();
        this.clearTally();
    }
    MarkPageComponent.prototype.ngOnInit = function () {
    };
    MarkPageComponent.prototype.initializeDice = function () {
        this.dice = [];
        this.results = [];
        while (this.dice.length < NUM_DICE) {
            var d = new __WEBPACK_IMPORTED_MODULE_1__models_chooser__["a" /* Chooser */](DICE_RESULTS);
            this.results.push(d.choose());
            this.dice.push(d);
        }
    };
    MarkPageComponent.prototype.clearTally = function () {
        this.scoreboard = new __WEBPACK_IMPORTED_MODULE_2__models_scoreboard__["a" /* Scoreboard */]();
        var minResult = NUM_DICE * DICE_RESULTS[0];
        var maxResult = NUM_DICE * DICE_RESULTS[DICE_RESULTS.length - 1];
        for (var r = minResult; r <= maxResult; r++) {
            this.scoreboard.award(r.toString(), 0);
        }
    };
    MarkPageComponent.prototype.roll = function (repeats) {
        if (repeats === void 0) { repeats = 1; }
        for (var n = 0; n < repeats; n++) {
            var sum = 0;
            for (var i in this.dice) {
                var r = this.dice[i].choose();
                this.results[i] = r;
                sum += r;
            }
            this.scoreboard.award(sum.toString(), 1);
        }
    };
    MarkPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'p01-mark-page',
            template: __webpack_require__(673),
            styles: [__webpack_require__(669)]
        }), 
        __metadata('design:paramtypes', [])
    ], MarkPageComponent);
    return MarkPageComponent;
}());
//# sourceMappingURL=/Users/astrader/ProjectCode/prototypes/fun-with-random-numbers/src/mark-page.component.js.map

/***/ }),

/***/ 386:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 386;


/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(508);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/astrader/ProjectCode/prototypes/fun-with-random-numbers/src/main.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_dice_page_dice_page_component__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_mark_page_mark_page_component__ = __webpack_require__(331);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var routes = [
    {
        path: '',
        children: []
    },
    {
        path: 'dice',
        component: __WEBPACK_IMPORTED_MODULE_2__pages_dice_page_dice_page_component__["a" /* DicePageComponent */]
    },
    {
        path: 'mark',
        component: __WEBPACK_IMPORTED_MODULE_3__pages_mark_page_mark_page_component__["a" /* MarkPageComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes, { useHash: true })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=/Users/astrader/ProjectCode/prototypes/fun-with-random-numbers/src/app-routing.module.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'p01-root',
            template: __webpack_require__(670),
            styles: [__webpack_require__(666)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/astrader/ProjectCode/prototypes/fun-with-random-numbers/src/app.component.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_pages_module__ = __webpack_require__(511);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__pages_pages_module__["a" /* PagesModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/astrader/ProjectCode/prototypes/fun-with-random-numbers/src/app.module.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scoreboard_scoreboard_component__ = __webpack_require__(510);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompsModule = (function () {
    function CompsModule() {
    }
    CompsModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__scoreboard_scoreboard_component__["a" /* ScoreboardComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__scoreboard_scoreboard_component__["a" /* ScoreboardComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], CompsModule);
    return CompsModule;
}());
//# sourceMappingURL=/Users/astrader/ProjectCode/prototypes/fun-with-random-numbers/src/comps.module.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_scoreboard__ = __webpack_require__(215);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScoreboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScoreboardComponent = (function () {
    function ScoreboardComponent() {
    }
    ScoreboardComponent.prototype.ngOnInit = function () {
    };
    ScoreboardComponent.prototype.proportion = function (player) {
        var max = this.scoreboard.maxPoints();
        var points = this.scoreboard.points(player.toString());
        if (max === 0) {
            return 0;
        }
        else {
            return points / max;
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_scoreboard__["a" /* Scoreboard */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__models_scoreboard__["a" /* Scoreboard */]) === 'function' && _a) || Object)
    ], ScoreboardComponent.prototype, "scoreboard", void 0);
    ScoreboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'p01-scoreboard',
            template: __webpack_require__(671),
            styles: [__webpack_require__(667)]
        }), 
        __metadata('design:paramtypes', [])
    ], ScoreboardComponent);
    return ScoreboardComponent;
    var _a;
}());
//# sourceMappingURL=/Users/astrader/ProjectCode/prototypes/fun-with-random-numbers/src/scoreboard.component.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dice_page_dice_page_component__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mark_page_mark_page_component__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__comps_comps_module__ = __webpack_require__(509);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PagesModule = (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__comps_comps_module__["a" /* CompsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__dice_page_dice_page_component__["a" /* DicePageComponent */], __WEBPACK_IMPORTED_MODULE_2__dice_page_dice_page_component__["a" /* DicePageComponent */], __WEBPACK_IMPORTED_MODULE_3__mark_page_mark_page_component__["a" /* MarkPageComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__dice_page_dice_page_component__["a" /* DicePageComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], PagesModule);
    return PagesModule;
}());
//# sourceMappingURL=/Users/astrader/ProjectCode/prototypes/fun-with-random-numbers/src/pages.module.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/astrader/ProjectCode/prototypes/fun-with-random-numbers/src/environment.js.map

/***/ }),

/***/ 666:
/***/ (function(module, exports) {

module.exports = "nav ul {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  nav ul li {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    margin: 0.4em; }\n"

/***/ }),

/***/ 667:
/***/ (function(module, exports) {

module.exports = ".scoreboard-result {\n  display: inline-block;\n  text-align: right;\n  width: 1.5em; }\n  .scoreboard-result.winning {\n    color: #cc6666; }\n\n.scoreboard-bar {\n  display: inline-block;\n  background-color: #66cc99;\n  height: 1.32em;\n  text-align: right;\n  -webkit-transition: width 0.4s;\n  transition: width 0.4s;\n  width: 50%; }\n"

/***/ }),

/***/ 668:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 669:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 670:
/***/ (function(module, exports) {

module.exports = "<h1>\n\tFun with Random Numbers\n</h1>\n<nav>\n\t<ul>\n\t\t<li><a routerLink=\"/\">Home</a></li>\n\t\t<li><a routerLink=\"/dice\">Dice Rolls</a></li>\n\t\t<li><a routerLink=\"/mark\">Dice Marks</a></li>\n\t</ul>\n</nav>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 671:
/***/ (function(module, exports) {

module.exports = "<div class=\"scoreboard\">\n  <div *ngFor=\"let player of scoreboard.players()\">\n\t\t\t<span class=\"scoreboard-result\"\n                  [ngClass]=\"{winning: scoreboard.points(player) === scoreboard.maxPoints()}\"\n            >{{player}}</span>:\n    <div class=\"scoreboard-bar\"\n         [ngStyle]=\"{width: proportion(player) * 75 + '%'}\"\n    >\n      <span class=\"scoreboard-count\">{{scoreboard.points(player)}}</span>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 672:
/***/ (function(module, exports) {

module.exports = "<div class=\"dice-page\">\n\n\t<div class=\"dice-controls\">\n\t\t<button (click)=\"roll()\">roll</button>\n\t\t<button (click)=\"roll(10)\">roll 10</button>\n\t\t<button (click)=\"roll(100)\">roll 100</button>\n\t\t<button (click)=\"roll(1000)\">roll 1000</button>\n\t\t<button (click)=\"roll(1000000)\">roll 1000000</button>\n\t\t<button (click)=\"clearTally()\">clear tally</button>\n\t</div>\n\n\t<div class=\"dice-tray\">\n\t\t<div class=\"dice-result\">{{result}}</div>\n\t</div>\n\n\t<p01-scoreboard [scoreboard]=\"scoreboard\"></p01-scoreboard>\n\n</div>"

/***/ }),

/***/ 673:
/***/ (function(module, exports) {

module.exports = "<div class=\"mark-page\">\n\n\t<div class=\"dice-controls\">\n\t\t<button (click)=\"roll()\">roll</button>\n\t\t<button (click)=\"roll(10)\">roll 10</button>\n\t\t<button (click)=\"roll(100)\">roll 100</button>\n\t\t<button (click)=\"roll(1000)\">roll 1000</button>\n\t\t<button (click)=\"roll(1000000)\">roll 1000000</button>\n\t\t<button (click)=\"clearTally()\">clear tally</button>\n\t</div>\n\n\t<div class=\"dice-tray\">\n\t\t<div *ngFor=\"let result of results\" class=\"dice-result\">{{result}}</div>\n\t</div>\n\n\t<p01-scoreboard [scoreboard]=\"scoreboard\"></p01-scoreboard>\n\n</div>"

/***/ }),

/***/ 691:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(387);


/***/ })

},[691]);
//# sourceMappingURL=main.bundle.map