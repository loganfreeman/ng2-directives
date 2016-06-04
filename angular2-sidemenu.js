webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	var sidemenu_1 = __webpack_require__(415);
	__export(__webpack_require__(416));
	__export(__webpack_require__(415));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = {
	    directives: [
	        sidemenu_1.SIDEMENU_DIRECTIVES
	    ]
	};


/***/ },

/***/ 415:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var sidemenu_1 = __webpack_require__(416);
	exports.SIDEMENU_DIRECTIVES = [sidemenu_1.SideMenuComponent];


/***/ },

/***/ 416:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var capital_first_letter_1 = __webpack_require__(650);
	var common_1 = __webpack_require__(10);
	var SideMenuComponent = (function () {
	    function SideMenuComponent(element) {
	        this.selected = new core_1.EventEmitter();
	        this.categories = [];
	        this.categoryStateMap = {};
	        this.element = element;
	    }
	    SideMenuComponent.prototype.ngOnInit = function () {
	        this.categories = Object.keys(this.data);
	        for (var _i = 0, _a = this.categories; _i < _a.length; _i++) {
	            var category = _a[_i];
	            this.categoryStateMap[category] = true;
	        }
	    };
	    SideMenuComponent.prototype.onCategoryBtnClick = function (category) {
	        if (this.categoryStateMap[category]) {
	            this.categoryStateMap[category] = false;
	        }
	        else {
	            this.categoryStateMap[category] = true;
	        }
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], SideMenuComponent.prototype, "data", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], SideMenuComponent.prototype, "selected", void 0);
	    SideMenuComponent = __decorate([
	        core_1.Component({
	            selector: 'ng-sidemenu',
	            directives: [common_1.NgClass],
	            pipes: [capital_first_letter_1.CapitalFirstPipe],
	            styles: ["\n  li {\n    font-weight: 400;\n    margin-top: 4px;\n    display: inline;\n  }\n  .sidebar-nav {\n      position: absolute;\n      top: 0;\n      width: 250px;\n      margin: 0;\n      padding: 0;\n      list-style: none;\n  }\n\n  .sidebar-nav li {\n      text-indent: 20px;\n      line-height: 40px;\n  }\n\n  .sidebar-nav li a {\n      display: block;\n      text-decoration: none;\n      color: #999999;\n  }\n\n  .sidebar-nav li a:hover {\n      text-decoration: none;\n      color: #fff;\n      background: rgba(255,255,255,0.2);\n  }\n\n  .sidebar-nav li a:active,\n  .sidebar-nav li a:focus {\n      text-decoration: none;\n  }\n\n  .sidebar-nav > .sidebar-brand {\n      height: 65px;\n      font-size: 18px;\n      line-height: 60px;\n  }\n\n  .sidebar-nav > .sidebar-brand a {\n      color: #999999;\n  }\n\n  .sidebar-nav > .sidebar-brand a:hover {\n      color: #fff;\n      background: none;\n  }\n\n  .sidebar-nav button {\n      display: block;\n      width: 100%;\n      text-align: left;\n  }\n\n  .sidebar-nav button.category {\n      background: rgba(0, 0, 0, .10);\n  }\n\n  .sidebar-nav button.indent {\n      padding-left: 28px;\n  }\n\n  .sidebar-nav button.collapse {\n      display: none;\n  }\n  i {\n    writing-mode: tb-rl;\n  }\n  .fa-rotate-270 {\n    -webkit-transform: rotate(90deg);\n    -moz-transform: rotate(90deg);\n    -ms-transform: rotate(90deg);\n    -o-transform: rotate(90deg);\n    transform: rotate(90deg);\n  }\n  "],
	            template: "\n<div class=\"sideemnu-wrapper\">\n  <ul class=\"sidebar-nav\">\n      <li class=\"sidebar-brand\" *ngFor=\"#category of categories\">\n        <button class=\"category\" [attr.category]=\"category\" (click)=\"onCategoryBtnClick(category)\"><i class=\"fa fa-fw fa-caret-down\" [ngClass]=\"{'fa-rotate-270': !categoryStateMap[category]}\">&#9658;</i>{{category | capitalFirstLetter}}</button>\n        <button class=\"indent\" *ngFor=\"#algorithm of data[category]\" [attr.algorithm]=\"algorithm.label\" [attr.category]=\"category\" [ngClass]=\"{collapse: categoryStateMap[category]}\">{{algorithm.text}}</button>\n      </li>\n  </ul>\n</div>\n  "
	        }), 
	        __metadata('design:paramtypes', [core_1.ElementRef])
	    ], SideMenuComponent);
	    return SideMenuComponent;
	}());
	exports.SideMenuComponent = SideMenuComponent;


/***/ },

/***/ 650:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var CapitalFirstPipe = (function () {
	    function CapitalFirstPipe() {
	    }
	    CapitalFirstPipe.prototype.transform = function (value) {
	        if (value === undefined) {
	            return '';
	        }
	        return value.charAt(0).toUpperCase() + value.slice(1);
	    };
	    CapitalFirstPipe = __decorate([
	        core_1.Pipe({ name: 'capitalFirstLetter' }), 
	        __metadata('design:paramtypes', [])
	    ], CapitalFirstPipe);
	    return CapitalFirstPipe;
	}());
	exports.CapitalFirstPipe = CapitalFirstPipe;


/***/ }

});
//# sourceMappingURL=angular2-sidemenu.js.map