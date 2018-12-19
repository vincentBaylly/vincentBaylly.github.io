(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_diagram_diagram_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/diagram/diagram.component */ "./src/app/components/diagram/diagram.component.ts");
/* harmony import */ var _components_sys_diagram_sys_diagram_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sys-diagram/sys-diagram.component */ "./src/app/components/sys-diagram/sys-diagram.component.ts");
/* harmony import */ var _components_dev_diagram_dev_diagram_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/dev-diagram/dev-diagram.component */ "./src/app/components/dev-diagram/dev-diagram.component.ts");
/* harmony import */ var _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/resume/resume.component */ "./src/app/components/resume/resume.component.ts");
/* harmony import */ var _components_license_license_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/license/license.component */ "./src/app/components/license/license.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'resume', component: _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_6__["ResumeComponent"] },
    { path: 'diagram', component: _components_diagram_diagram_component__WEBPACK_IMPORTED_MODULE_3__["DiagramComponent"] },
    { path: 'devdiagram', component: _components_dev_diagram_dev_diagram_component__WEBPACK_IMPORTED_MODULE_5__["DevDiagramComponent"] },
    { path: 'sysdiagram', component: _components_sys_diagram_sys_diagram_component__WEBPACK_IMPORTED_MODULE_4__["SysDiagramComponent"] },
    { path: 'termOfService', component: _components_license_license_component__WEBPACK_IMPORTED_MODULE_7__["LicenseComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n<div class=\"Site-inner Site-inner--index\" data-controller=\"HeaderOverlay\">\n  <app-header></app-header>\n  <div class=\"Content-outer\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJ9 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_diagram_diagram_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/diagram/diagram.component */ "./src/app/components/diagram/diagram.component.ts");
/* harmony import */ var _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/carousel/carousel.component */ "./src/app/components/carousel/carousel.component.ts");
/* harmony import */ var _directives_carousel_item_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directives/carousel-item.directive */ "./src/app/directives/carousel-item.directive.ts");
/* harmony import */ var _components_dev_diagram_dev_diagram_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/dev-diagram/dev-diagram.component */ "./src/app/components/dev-diagram/dev-diagram.component.ts");
/* harmony import */ var _components_sys_diagram_sys_diagram_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/sys-diagram/sys-diagram.component */ "./src/app/components/sys-diagram/sys-diagram.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/resume/resume.component */ "./src/app/components/resume/resume.component.ts");
/* harmony import */ var _components_license_license_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/license/license.component */ "./src/app/components/license/license.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                _components_diagram_diagram_component__WEBPACK_IMPORTED_MODULE_6__["DiagramComponent"],
                _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_7__["CarouselComponent"],
                _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_7__["CarouselItemElement"],
                _directives_carousel_item_directive__WEBPACK_IMPORTED_MODULE_8__["CarouselItemDirective"],
                _components_dev_diagram_dev_diagram_component__WEBPACK_IMPORTED_MODULE_9__["DevDiagramComponent"],
                _components_sys_diagram_sys_diagram_component__WEBPACK_IMPORTED_MODULE_10__["SysDiagramComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_12__["ResumeComponent"],
                _components_license_license_component__WEBPACK_IMPORTED_MODULE_13__["LicenseComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__["FlexLayoutModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/carousel/carousel.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/carousel/carousel.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"slide-button\">\n  <button mat-raised-button (click)=\"prev()\" class=\"btn btn-default\">Prev</button>\n  <button mat-raised-button (click)=\"next()\" class=\"btn btn-default\">Next</button>\n</div>\n<section class=\"carousel-wrapper\" [ngStyle]=\"carouselWrapperStyle\">\n  <ul class=\"carousel-inner\" #carousel>\n    <li *ngFor=\"let item of items;\" class=\"carousel-item\">\n      <ng-container [ngTemplateOutlet]=\"item.tpl\"></ng-container>\n    </li>\n  </ul>\n</section>\n"

/***/ }),

/***/ "./src/app/components/carousel/carousel.component.less":
/*!*************************************************************!*\
  !*** ./src/app/components/carousel/carousel.component.less ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.carousel-wrapper {\n  overflow: hidden;\n}\n.carousel-inner {\n  display: flex;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dhbGxhY2UvRGV2L1dvcmtzcGFjZS9wcmVzZW50YXRpb25XZWJTaXRlL3NyYy9hcHAvY29tcG9uZW50cy9jYXJvdXNlbC9jYXJvdXNlbC5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jYXJvdXNlbC9jYXJvdXNlbC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7Q0NDRDtBREVEO0VBQ0UsaUJBQUE7Q0NBRDtBREdEO0VBQ0UsY0FBQTtDQ0REIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYXJvdXNlbC9jYXJvdXNlbC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbInVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uY2Fyb3VzZWwtd3JhcHBlciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jYXJvdXNlbC1pbm5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4iLCJ1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbi5jYXJvdXNlbC13cmFwcGVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5jYXJvdXNlbC1pbm5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/carousel/carousel.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/carousel/carousel.component.ts ***!
  \***********************************************************/
/*! exports provided: CarouselItemElement, CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselItemElement", function() { return CarouselItemElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _directives_carousel_item_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../directives/carousel-item.directive */ "./src/app/directives/carousel-item.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CarouselItemElement = /** @class */ (function () {
    function CarouselItemElement() {
    }
    CarouselItemElement = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '.carousel-item'
        })
    ], CarouselItemElement);
    return CarouselItemElement;
}());

var CarouselComponent = /** @class */ (function () {
    function CarouselComponent(builder) {
        this.builder = builder;
        this.timing = '250ms ease-in';
        this.currentSlide = 0;
        this.carouselWrapperStyle = {};
    }
    CarouselComponent.prototype.next = function () {
        if (this.currentSlide + 1 === this.items.length)
            return;
        this.currentSlide = (this.currentSlide + 1) % this.items.length;
        var offset = this.currentSlide * this.itemWidth;
        var myAnimation = this.buildAnimation(offset);
        this.player = myAnimation.create(this.carousel.nativeElement);
        this.player.play();
    };
    CarouselComponent.prototype.buildAnimation = function (offset) {
        return this.builder.build([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(this.timing, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: "translateX(-" + offset + "px)" }))
        ]);
    };
    CarouselComponent.prototype.prev = function () {
        if (this.currentSlide === 0)
            return;
        this.currentSlide = ((this.currentSlide - 1) + this.items.length) % this.items.length;
        var offset = this.currentSlide * this.itemWidth;
        var myAnimation = this.buildAnimation(offset);
        this.player = myAnimation.create(this.carousel.nativeElement);
        this.player.play();
    };
    CarouselComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // For some reason only here I need to add setTimeout, in my local env it's working without this.
        setTimeout(function () {
            _this.itemWidth = _this.itemsElements.first.nativeElement.getBoundingClientRect().width;
            _this.carouselWrapperStyle = {
                width: _this.itemWidth + "px"
            };
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"])(_directives_carousel_item_directive__WEBPACK_IMPORTED_MODULE_2__["CarouselItemDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], CarouselComponent.prototype, "items", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(CarouselItemElement, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], CarouselComponent.prototype, "itemsElements", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('carousel'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CarouselComponent.prototype, "carousel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CarouselComponent.prototype, "timing", void 0);
    CarouselComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'carousel',
            exportAs: 'carousel',
            template: __webpack_require__(/*! ./carousel.component.html */ "./src/app/components/carousel/carousel.component.html"),
            styles: [__webpack_require__(/*! ./carousel.component.less */ "./src/app/components/carousel/carousel.component.less")]
        }),
        __metadata("design:paramtypes", [_angular_animations__WEBPACK_IMPORTED_MODULE_1__["AnimationBuilder"]])
    ], CarouselComponent);
    return CarouselComponent;
}());



/***/ }),

/***/ "./src/app/components/dev-diagram/dev-diagram.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/dev-diagram/dev-diagram.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"Index\" data-controller=\"IndexFirstSectionHeight, Parallax, IndexNavigation\">\n  <section id=\"resume-header\" class=\"Index-page Index-page--has-image\"  data-parallax-original-element data-edit-main-image=\"Background\">\n    <div class=\"Index-page-content  vba-alternate-block-style-container\">\n      <h1 align=\"center\">DEV SKILLS</h1>\n    </div>\n  </section>\n  <section *ngIf=\"!isMobile\" id=\"resume-content\" class=\"Index-page\" data-edit-main-image=\"Background\">\n    <div class=\"Index-page-content\">\n      <div class=\"container\">\n        <div class=\"item\" id=\"devDiagram\"></div>\n      </div>\n    </div>\n  </section>\n  <section *ngIf=\"isMobile\" id=\"resume-content\" class=\"Index-page\" data-edit-main-image=\"Background\">\n    <div class=\"Index-page-content \">\n      <div class=\"container\">\n        <carousel>\n          <ng-container *ngFor=\"let item of items;\">\n            <ng-container *carouselItem>\n              <div class=\"item\" id=\"{{item.id}}\"></div>\n            </ng-container>\n          </ng-container>\n        </carousel>\n      </div>\n    </div>\n  </section>\n</main>\n"

/***/ }),

/***/ "./src/app/components/dev-diagram/dev-diagram.component.less":
/*!*******************************************************************!*\
  !*** ./src/app/components/dev-diagram/dev-diagram.component.less ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGV2LWRpYWdyYW0vZGV2LWRpYWdyYW0uY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/components/dev-diagram/dev-diagram.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/dev-diagram/dev-diagram.component.ts ***!
  \*****************************************************************/
/*! exports provided: DevDiagramComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevDiagramComponent", function() { return DevDiagramComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _assets_js_raphael_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/js/raphael.js */ "./src/assets/js/raphael.js");
/* harmony import */ var _assets_js_raphael_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_js_raphael_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_js_Treant_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/js/Treant.js */ "./src/assets/js/Treant.js");
/* harmony import */ var _assets_js_Treant_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_js_Treant_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_js_devDiagram_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/js/devDiagram.js */ "./src/assets/js/devDiagram.js");
/* harmony import */ var _assets_js_devDiagram_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_js_devDiagram_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_js_devDiagramInline_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/js/devDiagramInline.js */ "./src/assets/js/devDiagramInline.js");
/* harmony import */ var _assets_js_devDiagramInline_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_js_devDiagramInline_js__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DevDiagramComponent = /** @class */ (function () {
    function DevDiagramComponent() {
        this.items = [
            { id: 'frontendDiagram' },
            { id: 'backendDiagram' }
        ];
    }
    DevDiagramComponent.prototype.ngAfterContentInit = function () {
        if (window.innerWidth > 980) {
            this.isMobile = false;
            setTimeout(function () {
                new Treant(dev_config);
            });
        }
        else {
            this.isMobile = true;
            setTimeout(function () {
                new Treant(frontend_config);
                new Treant(backend_config);
            });
        }
    };
    DevDiagramComponent.prototype.onResize = function (event) {
        if (event.target.innerWidth > 980) {
            this.isMobile = false;
            setTimeout(function () {
                new Treant(dev_config);
            });
        }
        else {
            this.isMobile = true;
            setTimeout(function () {
                new Treant(frontend_config);
                new Treant(backend_config);
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DevDiagramComponent.prototype, "onResize", null);
    DevDiagramComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dev-diagram',
            template: __webpack_require__(/*! ./dev-diagram.component.html */ "./src/app/components/dev-diagram/dev-diagram.component.html"),
            styles: [__webpack_require__(/*! ./dev-diagram.component.less */ "./src/app/components/dev-diagram/dev-diagram.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], DevDiagramComponent);
    return DevDiagramComponent;
}());



/***/ }),

/***/ "./src/app/components/diagram/diagram.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/diagram/diagram.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"Index\" data-controller=\"IndexFirstSectionHeight, Parallax, IndexNavigation\">\n  <section id=\"resume-header\" class=\"Index-page Index-page--has-image\"  data-parallax-original-element data-edit-main-image=\"Background\">\n    <div class=\"Index-page-content  vba-alternate-block-style-container\">\n      <h1 align=\"center\">EXTRA SKILLS</h1>\n    </div>\n  </section>\n  <section id=\"resume-content\" class=\"Index-page\" data-edit-main-image=\"Background\">\n    <div class=\"Index-page-content \">\n      <div class=\"container\">\n        <carousel>\n          <ng-container *ngFor=\"let item of items;\">\n            <ng-container *carouselItem>\n              <div class=\"item\" id=\"{{item.id}}\"> --@-- </div>\n            </ng-container>\n          </ng-container>\n        </carousel>\n      </div>\n    </div>\n  </section>\n</main>\n"

/***/ }),

/***/ "./src/app/components/diagram/diagram.component.less":
/*!***********************************************************!*\
  !*** ./src/app/components/diagram/diagram.component.less ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGlhZ3JhbS9kaWFncmFtLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/components/diagram/diagram.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/diagram/diagram.component.ts ***!
  \*********************************************************/
/*! exports provided: DiagramComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiagramComponent", function() { return DiagramComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _assets_js_raphael_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/js/raphael.js */ "./src/assets/js/raphael.js");
/* harmony import */ var _assets_js_raphael_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_js_raphael_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_js_Treant_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/js/Treant.js */ "./src/assets/js/Treant.js");
/* harmony import */ var _assets_js_Treant_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_js_Treant_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_js_diagram_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/js/diagram.js */ "./src/assets/js/diagram.js");
/* harmony import */ var _assets_js_diagram_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_js_diagram_js__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DiagramComponent = /** @class */ (function () {
    function DiagramComponent() {
        this.items = [
            { id: 'archiDiagram' },
            { id: 'devOpsDiagram' },
            { id: 'databaseDiagram' }
        ];
    }
    DiagramComponent.prototype.ngAfterViewInit = function () {
        new Treant(archi_config);
        new Treant(devops_config);
        new Treant(database_config);
    };
    DiagramComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-diagram',
            template: __webpack_require__(/*! ./diagram.component.html */ "./src/app/components/diagram/diagram.component.html"),
            styles: [__webpack_require__(/*! ./diagram.component.less */ "./src/app/components/diagram/diagram.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], DiagramComponent);
    return DiagramComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"Footer\" role=\"contentinfo\" data-controller=\"FooterBreakpoints\">\n   <div class=\"Footer-inner clear\">\n      <div class=\"vba-layout vba-grid-12 columns-12 Footer-blocks Footer-blocks--bottom vba-alternate-block-style-container\" data-layout-label=\"Footer Bottom Blocks\" data-type=\"block-field\" data-updated-on=\"1519857423263\" id=\"footerBlocksBottom\">\n         <div class=\"row vba-row\">\n            <div class=\"col vba-col-12 span-12\">\n               <div class=\"vba-block html-block vba-block-html\" data-block-type=\"2\">\n                  <div class=\"vba-block-content\">\n                     <p class=\"text-align-center\">Copright &copy; {{year}} - 9383 9322 Quebec Inc. - ComputHand - All Rights Reserved</p>\n                     <p class=\"text-align-center\">\n                       <a [routerLink]=\"['/termOfService']\">Terms of Service</a>\n                     </p>\n                  </div>\n               </div>\n            </div>\n         </div>\n      </div>\n   </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.less":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.less ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".Footer {\n  background-color: #26262a;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.tweak-footer-show .Footer {\n  display: block;\n}\n.Footer-inner {\n  box-sizing: border-box;\n  padding: 60px 60px;\n}\n@media screen and (max-width: 960px) {\n  .Footer-inner {\n    padding-top: 48px;\n    padding-bottom: 48px;\n  }\n}\n@media screen and (max-width: 768px) {\n  .Footer-inner {\n    padding-top: 36px;\n    padding-bottom: 36px;\n  }\n}\n@media screen and (max-width: 640px) {\n  .Footer-inner {\n    padding-top: 20px;\n    padding-bottom: 20px;\n  }\n}\n@media screen and (max-width: 960px) {\n  .Footer-inner {\n    padding-left: 48px;\n    padding-right: 48px;\n  }\n}\n@media screen and (max-width: 768px) {\n  .Footer-inner {\n    padding-left: 36px;\n    padding-right: 36px;\n  }\n}\n@media screen and (max-width: 640px) {\n  .Footer-inner {\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n}\n.Footer-blocks {\n  color: rgba(255, 255, 255, 0.4);\n}\n.Footer-blocks.empty {\n  padding: 0 !important;\n}\n.Footer-blocks h1 {\n  color: #fff;\n}\n.Footer-blocks h1 a {\n  padding-bottom: 0.05em;\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n  border-bottom-color: rgba(255, 255, 255, 0.3);\n  transition: border-color 0.15s ease-out, color 0.15s ease-out;\n}\n.Footer-blocks h1 a:hover {\n  color: rgba(255, 255, 255, 0.6);\n  border-color: rgba(255, 255, 255, 0.15);\n}\n.Footer-blocks h2 {\n  color: rgba(255, 255, 255, 0.4);\n}\n.Footer-blocks h2 a {\n  padding-bottom: 0.05em;\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n  border-bottom-color: rgba(255, 255, 255, 0.12);\n  transition: border-color 0.15s ease-out, color 0.15s ease-out;\n}\n.Footer-blocks h2 a:hover {\n  color: rgba(255, 255, 255, 0.24);\n  border-color: rgba(255, 255, 255, 0.06);\n}\n.Footer-blocks h3 {\n  color: rgba(255, 255, 255, 0.7);\n}\n.Footer-blocks h3 a {\n  padding-bottom: 0.05em;\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n  border-bottom-color: rgba(255, 255, 255, 0.21);\n  transition: border-color 0.15s ease-out, color 0.15s ease-out;\n}\n.Footer-blocks h3 a:hover {\n  color: rgba(255, 255, 255, 0.42);\n  border-color: rgba(255, 255, 255, 0.105);\n}\n.Footer-blocks .vba-block-html p a,\n.Footer-blocks .vba-block-markdown p a,\n.Footer-blocks .vba-block-image p a,\n.Footer-blocks .vba-block-html blockquote a,\n.Footer-blocks .vba-block-markdown blockquote a,\n.Footer-blocks .vba-block-image blockquote a,\n.Footer-blocks .vba-block-html ol a,\n.Footer-blocks .vba-block-markdown ol a,\n.Footer-blocks .vba-block-image ol a,\n.Footer-blocks .vba-block-html ul a,\n.Footer-blocks .vba-block-markdown ul a,\n.Footer-blocks .vba-block-image ul a {\n  color: rgba(255, 255, 255, 0.7);\n  transition: color 0.15s ease-out;\n  padding-bottom: 0.05em;\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n  border-bottom-color: rgba(255, 255, 255, 0.21);\n  transition: border-color 0.15s ease-out, color 0.15s ease-out;\n}\n.Footer-blocks .vba-block-html p a:hover,\n.Footer-blocks .vba-block-markdown p a:hover,\n.Footer-blocks .vba-block-image p a:hover,\n.Footer-blocks .vba-block-html blockquote a:hover,\n.Footer-blocks .vba-block-markdown blockquote a:hover,\n.Footer-blocks .vba-block-image blockquote a:hover,\n.Footer-blocks .vba-block-html ol a:hover,\n.Footer-blocks .vba-block-markdown ol a:hover,\n.Footer-blocks .vba-block-image ol a:hover,\n.Footer-blocks .vba-block-html ul a:hover,\n.Footer-blocks .vba-block-markdown ul a:hover,\n.Footer-blocks .vba-block-image ul a:hover {\n  color: rgba(255, 255, 255, 0.35);\n}\n.Footer-blocks .vba-block-html p a:hover,\n.Footer-blocks .vba-block-markdown p a:hover,\n.Footer-blocks .vba-block-image p a:hover,\n.Footer-blocks .vba-block-html blockquote a:hover,\n.Footer-blocks .vba-block-markdown blockquote a:hover,\n.Footer-blocks .vba-block-image blockquote a:hover,\n.Footer-blocks .vba-block-html ol a:hover,\n.Footer-blocks .vba-block-markdown ol a:hover,\n.Footer-blocks .vba-block-image ol a:hover,\n.Footer-blocks .vba-block-html ul a:hover,\n.Footer-blocks .vba-block-markdown ul a:hover,\n.Footer-blocks .vba-block-image ul a:hover {\n  color: rgba(255, 255, 255, 0.42);\n  border-color: rgba(255, 255, 255, 0.105);\n}\n.Footer-blocks .vba-block-horizontalrule hr {\n  color: #00d0ff;\n  background-color: #00d0ff;\n}\n.Footer-blocks .vba-block-html blockquote,\n.Footer-blocks .vba-block-markdown blockquote {\n  border-color: #00d0ff;\n}\n.Footer-nav {\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: 700;\n  font-size: 18px;\n  letter-spacing: 0em;\n  text-transform: none;\n  font-family: proxima-nova;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 13px;\n  letter-spacing: 0.15em;\n  line-height: 1em;\n  text-transform: uppercase;\n}\n.Footer-nav a {\n  color: #fff;\n  transition: color 0.15s ease-out;\n}\n.Footer-nav a:hover {\n  color: rgba(255, 255, 255, 0.5);\n}\n.Footer-nav-group:empty {\n  display: none !important;\n}\n.Footer-nav-folder-heading {\n  display: none;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: 700;\n  font-family: freight-sans-pro;\n  font-weight: 300;\n  font-style: normal;\n  font-size: 18px;\n  letter-spacing: 0em;\n  line-height: 1em;\n  text-transform: none;\n  color: #000;\n}\n.tweak-footer-layout-stacked .Footer-blocks--top {\n  padding-bottom: 20px;\n}\n.tweak-footer-layout-stacked .Footer-blocks--bottom {\n  padding-top: 20px;\n}\n.tweak-footer-layout-stacked .Footer-business-info-item,\n.tweak-footer-layout-stacked .Footer-business-hours-heading,\n.tweak-footer-layout-stacked .Footer-business-hours-item,\n.tweak-footer-layout-stacked .Footer-nav-item,\n.tweak-footer-layout-stacked .Footer-nav-folder-item {\n  display: inline-block;\n}\n.tweak-footer-layout-stacked .Footer-nav-group {\n  display: inline;\n}\n.tweak-footer-layout-stacked .Footer-business-info,\n.tweak-footer-layout-stacked .Footer-business-hours,\n.tweak-footer-layout-stacked .Footer-nav,\n.tweak-footer-layout-stacked .Footer-blocks--middle {\n  padding: 20px 0;\n}\n.tweak-footer-layout-stacked .Footer-business-info-item--name,\n.tweak-footer-layout-stacked .Footer-business-info-item--country,\n.tweak-footer-layout-stacked .Footer-business-info-item--phone,\n.tweak-footer-layout-stacked .Footer-business-hours-heading,\n.tweak-footer-layout-stacked .Footer-business-hours-item {\n  padding-right: 0.618em;\n}\n.tweak-footer-layout-stacked .Footer-business-info-item--name:last-child,\n.tweak-footer-layout-stacked .Footer-business-info-item--country:last-child,\n.tweak-footer-layout-stacked .Footer-business-info-item--phone:last-child,\n.tweak-footer-layout-stacked .Footer-business-hours-heading:last-child,\n.tweak-footer-layout-stacked .Footer-business-hours-item:last-child {\n  padding-right: 0;\n}\n.tweak-footer-layout-stacked .Footer-nav-item,\n.tweak-footer-layout-stacked .Footer-nav-folder-item {\n  padding-right: 1em;\n}\n.tweak-footer-layout-stacked .Footer-nav {\n  margin-right: -1em;\n}\n.tweak-footer-layout-stacked.tweak-footer-stacked-alignment-left .Footer-business,\n.tweak-footer-layout-stacked.tweak-footer-stacked-alignment-left .Footer-nav {\n  text-align: left;\n}\n.tweak-footer-layout-stacked.tweak-footer-stacked-alignment-center .Footer-business,\n.tweak-footer-layout-stacked.tweak-footer-stacked-alignment-center .Footer-nav {\n  text-align: center;\n}\n.tweak-footer-layout-stacked.tweak-footer-stacked-alignment-right .Footer-business,\n.tweak-footer-layout-stacked.tweak-footer-stacked-alignment-right .Footer-nav {\n  text-align: right;\n}\n.tweak-footer-layout-columns .Footer-inner {\n  overflow: hidden;\n}\n.tweak-footer-layout-columns .Footer-blocks--top {\n  padding-bottom: 40px;\n}\n.tweak-footer-layout-columns .Footer-blocks--bottom {\n  padding-top: 40px;\n}\n.tweak-footer-layout-columns .Footer-middle {\n  margin: -20px;\n  display: flex;\n}\n.tweak-footer-layout-columns .Footer-business-info,\n.tweak-footer-layout-columns .Footer-business-hours,\n.tweak-footer-layout-columns .Footer-nav-group,\n.tweak-footer-layout-columns .Footer-blocks--middle {\n  padding: 20px;\n}\n.tweak-footer-layout-columns .Footer-business {\n  flex: 0 0 auto;\n}\n.tweak-footer-layout-columns .Footer-business-info,\n.tweak-footer-layout-columns .Footer-business-hours {\n  float: left;\n}\n.tweak-footer-layout-columns .Footer-business-info-item {\n  padding-bottom: 0.382em;\n}\n.tweak-footer-layout-columns .Footer-business-info-item--name {\n  padding-bottom: 1em;\n}\n.tweak-footer-layout-columns .Footer-business-info-item--phone {\n  padding-top: 0.618em;\n}\n.tweak-footer-layout-columns .Footer-business-info-item--email {\n  max-width: 10em;\n}\n.tweak-footer-layout-columns .Footer-business-hours-heading {\n  padding-bottom: 1em;\n}\n.tweak-footer-layout-columns .Footer-business-hours-item {\n  padding-bottom: 0.618em;\n}\n.tweak-footer-layout-columns .Footer-nav {\n  min-width: 0;\n  flex: 0 1 auto;\n}\n.tweak-footer-layout-columns .Footer-nav-group {\n  float: left;\n}\n.tweak-footer-layout-columns .Footer-nav-folder-heading,\n.tweak-footer-layout-columns .Footer-nav-item,\n.tweak-footer-layout-columns .Footer-nav-folder-item {\n  display: block;\n  max-width: 16em;\n}\n.tweak-footer-layout-columns .Footer-nav-folder-heading {\n  padding-bottom: 1em;\n}\n.tweak-footer-layout-columns .Footer-nav-item,\n.tweak-footer-layout-columns .Footer-nav-folder-item {\n  padding-bottom: 0.618em;\n}\n.tweak-footer-layout-columns .Footer-blocks--middle {\n  flex: 0 0 33%;\n  order: 1;\n}\n.tweak-footer-layout-columns .Footer-blocks--middle.empty:not(.vba-editing) {\n  flex: 0 1 0px;\n}\n.tweak-footer-layout-columns.tweak-footer-layout-columns.tweak-footer-business-info-show:not(.tweak-footer-layout-columns-auto) .Footer-business-info {\n  width: 160px;\n}\n.tweak-footer-layout-columns.tweak-footer-layout-columns.tweak-footer-business-hours-show:not(.tweak-footer-layout-columns-auto) .Footer-business-hours {\n  width: 160px;\n}\n.tweak-footer-layout-columns.tweak-footer-layout-columns:not(.tweak-footer-layout-columns-auto) .Footer-nav-group {\n  width: 160px;\n}\n.tweak-footer-layout-columns .Footer--mid .Footer-business-info,\n.tweak-footer-layout-columns .Footer--mid .Footer-business-hours {\n  float: none;\n}\n.tweak-footer-layout-columns .Footer--mid .Footer-nav-group {\n  width: 10em;\n}\n.tweak-footer-layout-columns .Footer--mid .Footer-blocks--middle {\n  flex: 0 1 300px;\n}\n.tweak-footer-layout-columns .Footer--mid .Footer-blocks--middle.empty:not(.vba-editing) {\n  flex: 0 1 0px;\n}\n.tweak-footer-layout-columns .Footer--mid.Footer--compact .Footer-middle {\n  margin: 0;\n  flex-direction: column;\n}\n.tweak-footer-layout-columns .Footer--mid.Footer--compact .Footer-business {\n  flex: 0 0 auto;\n}\n.tweak-footer-layout-columns .Footer--mid.Footer--compact .Footer-business-info,\n.tweak-footer-layout-columns .Footer--mid.Footer--compact .Footer-business-hours {\n  float: none;\n}\n.tweak-footer-layout-columns .Footer--mid.Footer--compact .Footer-business-info-item--email {\n  max-width: 100%;\n}\n.tweak-footer-layout-columns .Footer--mid.Footer--compact .Footer-nav {\n  flex: 0 0 auto;\n}\n.tweak-footer-layout-columns .Footer--mid.Footer--compact .Footer-nav-group {\n  float: none;\n  width: auto;\n}\n.tweak-footer-layout-columns .Footer--mid.Footer--compact .Footer-nav-folder-heading,\n.tweak-footer-layout-columns .Footer--mid.Footer--compact .Footer-nav-item,\n.tweak-footer-layout-columns .Footer--mid.Footer--compact .Footer-nav-folder-item {\n  max-width: none;\n}\n.tweak-footer-layout-columns .Footer--mid.Footer--compact .Footer-blocks--middle {\n  flex: 0 0 auto;\n}\n@media screen and (max-width: 479px) {\n  .tweak-footer-layout-columns:not(.has-footer-nav) .Footer-middle {\n    margin: 0;\n    flex-direction: column;\n  }\n  .tweak-footer-layout-columns:not(.has-footer-nav) .Footer-business {\n    flex: 0 0 auto;\n  }\n  .tweak-footer-layout-columns:not(.has-footer-nav) .Footer-business-info,\n  .tweak-footer-layout-columns:not(.has-footer-nav) .Footer-business-hours {\n    float: none;\n  }\n  .tweak-footer-layout-columns:not(.has-footer-nav) .Footer-business-info-item--email {\n    max-width: 100%;\n  }\n  .tweak-footer-layout-columns:not(.has-footer-nav) .Footer-nav {\n    flex: 0 0 auto;\n  }\n  .tweak-footer-layout-columns:not(.has-footer-nav) .Footer-nav-group {\n    float: none;\n    width: auto;\n  }\n  .tweak-footer-layout-columns:not(.has-footer-nav) .Footer-nav-folder-heading,\n  .tweak-footer-layout-columns:not(.has-footer-nav) .Footer-nav-item,\n  .tweak-footer-layout-columns:not(.has-footer-nav) .Footer-nav-folder-item {\n    max-width: none;\n  }\n  .tweak-footer-layout-columns:not(.has-footer-nav) .Footer-blocks--middle {\n    flex: 0 0 auto;\n  }\n}\n@media screen and (min-width: 480px) and (max-width: 599px) {\n  .tweak-footer-layout-columns:not(.has-footer-nav) .Footer-nav-group {\n    width: 10em;\n  }\n  .tweak-footer-layout-columns:not(.has-footer-nav) .Footer-blocks--middle {\n    flex: 0 1 300px;\n  }\n  .tweak-footer-layout-columns:not(.has-footer-nav) .Footer-blocks--middle.empty:not(.vba-editing) {\n    flex: 0 1 0px;\n  }\n}\n.menu-block .menu-style-classic .menu-selector,\n.menu-block .menu-style-classic .menu-header,\n.menu-block .menu-style-classic .menu-section-title,\n.menu-block .menu-style-classic .menu-section-description {\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dhbGxhY2UvRGV2L1dvcmtzcGFjZS9wcmVzZW50YXRpb25XZWJTaXRlL3NyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRywwQkFBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7Q0NDRjtBRENEO0VBQ0csZUFBQTtDQ0NGO0FEQ0Q7RUFHRyx1QkFBQTtFQUNBLG1CQUFBO0NDQ0Y7QURDRDtFQUNHO0lBQ0ksa0JBQUE7SUFDQSxxQkFBQTtHQ0NKO0NBQ0Y7QURDRDtFQUNHO0lBQ0ksa0JBQUE7SUFDQSxxQkFBQTtHQ0NKO0NBQ0Y7QURDRDtFQUNHO0lBQ0ksa0JBQUE7SUFDQSxxQkFBQTtHQ0NKO0NBQ0Y7QURDRDtFQUNHO0lBQ0ksbUJBQUE7SUFDQSxvQkFBQTtHQ0NKO0NBQ0Y7QURDRDtFQUNHO0lBQ0ksbUJBQUE7SUFDQSxvQkFBQTtHQ0NKO0NBQ0Y7QURDRDtFQUNHO0lBQ0ksbUJBQUE7SUFDQSxvQkFBQTtHQ0NKO0NBQ0Y7QURDRDtFQUNHLGdDQUFBO0NDQ0Y7QURDRDtFQUNHLHNCQUFBO0NDQ0Y7QURDRDtFQUNHLFlBQUE7Q0NDRjtBRENEO0VBQ0csdUJBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsOENBQUE7RUFLQSw4REFBQTtDQ0NGO0FEQ0Q7RUFDRyxnQ0FBQTtFQUNBLHdDQUFBO0NDQ0Y7QURDRDtFQUNHLGdDQUFBO0NDQ0Y7QURDRDtFQUNHLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLCtDQUFBO0VBS0EsOERBQUE7Q0NDRjtBRENEO0VBQ0csaUNBQUE7RUFDQSx3Q0FBQTtDQ0NGO0FEQ0Q7RUFDRyxnQ0FBQTtDQ0NGO0FEQ0Q7RUFDRyx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQ0FBQTtFQUtBLDhEQUFBO0NDQ0Y7QURDRDtFQUNHLGlDQUFBO0VBQ0EseUNBQUE7Q0NDRjtBRENEOzs7Ozs7Ozs7Ozs7RUFDRyxnQ0FBQTtFQUtBLGlDQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsK0NBQUE7RUFLQSw4REFBQTtDQ1lGO0FEVkQ7Ozs7Ozs7Ozs7OztFQUNHLGlDQUFBO0NDdUJGO0FEckJEOzs7Ozs7Ozs7Ozs7RUFDRyxpQ0FBQTtFQUNBLHlDQUFBO0NDa0NGO0FEaENEO0VBQ0csZUFBQTtFQUNBLDBCQUFBO0NDa0NGO0FEaENEOztFQUNHLHNCQUFBO0NDbUNGO0FEakNEO0VBQ0csMENBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0NDbUNGO0FEakNEO0VBQ0csWUFBQTtFQUtBLGlDQUFBO0NDbUNGO0FEakNEO0VBQ0csZ0NBQUE7Q0NtQ0Y7QURqQ0Q7RUFDRyx5QkFBQTtDQ21DRjtBRGpDRDtFQUNHLGNBQUE7RUFDQSwwQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0NDbUNGO0FEakNEO0VBQ0cscUJBQUE7Q0NtQ0Y7QURqQ0Q7RUFDRyxrQkFBQTtDQ21DRjtBRGpDRDs7Ozs7RUFDRyxzQkFBQTtDQ3VDRjtBRHJDRDtFQUNHLGdCQUFBO0NDdUNGO0FEckNEOzs7O0VBQ0csZ0JBQUE7Q0MwQ0Y7QUR4Q0Q7Ozs7O0VBQ0csdUJBQUE7Q0M4Q0Y7QUQ1Q0Q7Ozs7O0VBQ0csaUJBQUE7Q0NrREY7QURoREQ7O0VBQ0csbUJBQUE7Q0NtREY7QURqREQ7RUFDRyxtQkFBQTtDQ21ERjtBRGpERDs7RUFDRyxpQkFBQTtDQ29ERjtBRGxERDs7RUFDRyxtQkFBQTtDQ3FERjtBRG5ERDs7RUFDRyxrQkFBQTtDQ3NERjtBRHBERDtFQUNHLGlCQUFBO0NDc0RGO0FEcEREO0VBQ0cscUJBQUE7Q0NzREY7QURwREQ7RUFDRyxrQkFBQTtDQ3NERjtBRHBERDtFQUNHLGNBQUE7RUFJQSxjQUFBO0NDc0RGO0FEcEREOzs7O0VBQ0csY0FBQTtDQ3lERjtBRHZERDtFQU1HLGVBQUE7Q0N5REY7QUR2REQ7O0VBQ0csWUFBQTtDQzBERjtBRHhERDtFQUNHLHdCQUFBO0NDMERGO0FEeEREO0VBQ0csb0JBQUE7Q0MwREY7QUR4REQ7RUFDRyxxQkFBQTtDQzBERjtBRHhERDtFQUNHLGdCQUFBO0NDMERGO0FEeEREO0VBQ0csb0JBQUE7Q0MwREY7QUR4REQ7RUFDRyx3QkFBQTtDQzBERjtBRHhERDtFQUNHLGFBQUE7RUFNQSxlQUFBO0NDMERGO0FEeEREO0VBQ0csWUFBQTtDQzBERjtBRHhERDs7O0VBQ0csZUFBQTtFQUNBLGdCQUFBO0NDNERGO0FEMUREO0VBQ0csb0JBQUE7Q0M0REY7QUQxREQ7O0VBQ0csd0JBQUE7Q0M2REY7QUQzREQ7RUFNRyxjQUFBO0VBS0EsU0FBQTtDQzZERjtBRDNERDtFQU1HLGNBQUE7Q0M2REY7QUQzREQ7RUFDRyxhQUFBO0NDNkRGO0FEM0REO0VBQ0csYUFBQTtDQzZERjtBRDNERDtFQUNHLGFBQUE7Q0M2REY7QUQzREQ7O0VBQ0csWUFBQTtDQzhERjtBRDVERDtFQUNHLFlBQUE7Q0M4REY7QUQ1REQ7RUFNRyxnQkFBQTtDQzhERjtBRDVERDtFQU1HLGNBQUE7Q0M4REY7QUQ1REQ7RUFDRyxVQUFBO0VBSUEsdUJBQUE7Q0M4REY7QUQ1REQ7RUFNRyxlQUFBO0NDOERGO0FENUREOztFQUNHLFlBQUE7Q0MrREY7QUQ3REQ7RUFDRyxnQkFBQTtDQytERjtBRDdERDtFQU1HLGVBQUE7Q0MrREY7QUQ3REQ7RUFDRyxZQUFBO0VBQ0EsWUFBQTtDQytERjtBRDdERDs7O0VBQ0csZ0JBQUE7Q0NpRUY7QUQvREQ7RUFNRyxlQUFBO0NDaUVGO0FEL0REO0VBQ0c7SUFDSSxVQUFBO0lBSUEsdUJBQUE7R0NpRUo7RUQvREE7SUFNSSxlQUFBO0dDaUVKO0VEL0RBOztJQUNJLFlBQUE7R0NrRUo7RURoRUE7SUFDSSxnQkFBQTtHQ2tFSjtFRGhFQTtJQU1JLGVBQUE7R0NrRUo7RURoRUE7SUFDSSxZQUFBO0lBQ0EsWUFBQTtHQ2tFSjtFRGhFQTs7O0lBQ0ksZ0JBQUE7R0NvRUo7RURsRUE7SUFNSSxlQUFBO0dDb0VKO0NBQ0Y7QURsRUQ7RUFDRztJQUNJLFlBQUE7R0NvRUo7RURsRUE7SUFNSSxnQkFBQTtHQ29FSjtFRGxFQTtJQU1JLGNBQUE7R0NvRUo7Q0FDRjtBRGxFRDs7OztFQUNHLG1CQUFBO0NDdUVGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLkZvb3RlcntcbiAgIGJhY2tncm91bmQtY29sb3I6IzI2MjYyYTtcbiAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7XG4gICAtbW96LW9zeC1mb250LXNtb290aGluZzpncmF5c2NhbGVcbn1cbi50d2Vhay1mb290ZXItc2hvdyAuRm9vdGVye1xuICAgZGlzcGxheTpibG9ja1xufVxuLkZvb3Rlci1pbm5lcntcbiAgIC13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O1xuICAgLW1vei1ib3gtc2l6aW5nOmJvcmRlci1ib3g7XG4gICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XG4gICBwYWRkaW5nOjYwcHggNjBweFxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo5NjBweCl7XG4gICAuRm9vdGVyLWlubmVye1xuICAgICAgIHBhZGRpbmctdG9wOjQ4cHg7XG4gICAgICAgcGFkZGluZy1ib3R0b206NDhweFxuICAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCl7XG4gICAuRm9vdGVyLWlubmVye1xuICAgICAgIHBhZGRpbmctdG9wOjM2cHg7XG4gICAgICAgcGFkZGluZy1ib3R0b206MzZweFxuICAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo2NDBweCl7XG4gICAuRm9vdGVyLWlubmVye1xuICAgICAgIHBhZGRpbmctdG9wOjIwcHg7XG4gICAgICAgcGFkZGluZy1ib3R0b206MjBweFxuICAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo5NjBweCl7XG4gICAuRm9vdGVyLWlubmVye1xuICAgICAgIHBhZGRpbmctbGVmdDo0OHB4O1xuICAgICAgIHBhZGRpbmctcmlnaHQ6NDhweFxuICAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCl7XG4gICAuRm9vdGVyLWlubmVye1xuICAgICAgIHBhZGRpbmctbGVmdDozNnB4O1xuICAgICAgIHBhZGRpbmctcmlnaHQ6MzZweFxuICAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo2NDBweCl7XG4gICAuRm9vdGVyLWlubmVye1xuICAgICAgIHBhZGRpbmctbGVmdDoyMHB4O1xuICAgICAgIHBhZGRpbmctcmlnaHQ6MjBweFxuICAgfVxufVxuLkZvb3Rlci1ibG9ja3N7XG4gICBjb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC40KVxufVxuLkZvb3Rlci1ibG9ja3MuZW1wdHl7XG4gICBwYWRkaW5nOjAgIWltcG9ydGFudFxufVxuLkZvb3Rlci1ibG9ja3MgaDF7XG4gICBjb2xvcjojZmZmXG59XG4uRm9vdGVyLWJsb2NrcyBoMSBhe1xuICAgcGFkZGluZy1ib3R0b206LjA1ZW07XG4gICBib3JkZXItYm90dG9tLXdpZHRoOjFweDtcbiAgIGJvcmRlci1ib3R0b20tc3R5bGU6c29saWQ7XG4gICBib3JkZXItYm90dG9tLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjMpO1xuICAgLXdlYmtpdC10cmFuc2l0aW9uOmJvcmRlci1jb2xvciAuMTVzIGVhc2Utb3V0LGNvbG9yIC4xNXMgZWFzZS1vdXQ7XG4gICAtbW96LXRyYW5zaXRpb246Ym9yZGVyLWNvbG9yIC4xNXMgZWFzZS1vdXQsY29sb3IgLjE1cyBlYXNlLW91dDtcbiAgIC1tcy10cmFuc2l0aW9uOmJvcmRlci1jb2xvciAuMTVzIGVhc2Utb3V0LGNvbG9yIC4xNXMgZWFzZS1vdXQ7XG4gICAtby10cmFuc2l0aW9uOmJvcmRlci1jb2xvciAuMTVzIGVhc2Utb3V0LGNvbG9yIC4xNXMgZWFzZS1vdXQ7XG4gICB0cmFuc2l0aW9uOmJvcmRlci1jb2xvciAuMTVzIGVhc2Utb3V0LGNvbG9yIC4xNXMgZWFzZS1vdXRcbn1cbi5Gb290ZXItYmxvY2tzIGgxIGE6aG92ZXJ7XG4gICBjb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC42KTtcbiAgIGJvcmRlci1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC4xNSlcbn1cbi5Gb290ZXItYmxvY2tzIGgye1xuICAgY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNClcbn1cbi5Gb290ZXItYmxvY2tzIGgyIGF7XG4gICBwYWRkaW5nLWJvdHRvbTouMDVlbTtcbiAgIGJvcmRlci1ib3R0b20td2lkdGg6MXB4O1xuICAgYm9yZGVyLWJvdHRvbS1zdHlsZTpzb2xpZDtcbiAgIGJvcmRlci1ib3R0b20tY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuMTIpO1xuICAgLXdlYmtpdC10cmFuc2l0aW9uOmJvcmRlci1jb2xvciAuMTVzIGVhc2Utb3V0LGNvbG9yIC4xNXMgZWFzZS1vdXQ7XG4gICAtbW96LXRyYW5zaXRpb246Ym9yZGVyLWNvbG9yIC4xNXMgZWFzZS1vdXQsY29sb3IgLjE1cyBlYXNlLW91dDtcbiAgIC1tcy10cmFuc2l0aW9uOmJvcmRlci1jb2xvciAuMTVzIGVhc2Utb3V0LGNvbG9yIC4xNXMgZWFzZS1vdXQ7XG4gICAtby10cmFuc2l0aW9uOmJvcmRlci1jb2xvciAuMTVzIGVhc2Utb3V0LGNvbG9yIC4xNXMgZWFzZS1vdXQ7XG4gICB0cmFuc2l0aW9uOmJvcmRlci1jb2xvciAuMTVzIGVhc2Utb3V0LGNvbG9yIC4xNXMgZWFzZS1vdXRcbn1cbi5Gb290ZXItYmxvY2tzIGgyIGE6aG92ZXJ7XG4gICBjb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC4yNCk7XG4gICBib3JkZXItY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuMDYpXG59XG4uRm9vdGVyLWJsb2NrcyBoM3tcbiAgIGNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjcpXG59XG4uRm9vdGVyLWJsb2NrcyBoMyBhe1xuICAgcGFkZGluZy1ib3R0b206LjA1ZW07XG4gICBib3JkZXItYm90dG9tLXdpZHRoOjFweDtcbiAgIGJvcmRlci1ib3R0b20tc3R5bGU6c29saWQ7XG4gICBib3JkZXItYm90dG9tLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjIxKTtcbiAgIC13ZWJraXQtdHJhbnNpdGlvbjpib3JkZXItY29sb3IgLjE1cyBlYXNlLW91dCxjb2xvciAuMTVzIGVhc2Utb3V0O1xuICAgLW1vei10cmFuc2l0aW9uOmJvcmRlci1jb2xvciAuMTVzIGVhc2Utb3V0LGNvbG9yIC4xNXMgZWFzZS1vdXQ7XG4gICAtbXMtdHJhbnNpdGlvbjpib3JkZXItY29sb3IgLjE1cyBlYXNlLW91dCxjb2xvciAuMTVzIGVhc2Utb3V0O1xuICAgLW8tdHJhbnNpdGlvbjpib3JkZXItY29sb3IgLjE1cyBlYXNlLW91dCxjb2xvciAuMTVzIGVhc2Utb3V0O1xuICAgdHJhbnNpdGlvbjpib3JkZXItY29sb3IgLjE1cyBlYXNlLW91dCxjb2xvciAuMTVzIGVhc2Utb3V0XG59XG4uRm9vdGVyLWJsb2NrcyBoMyBhOmhvdmVye1xuICAgY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNDIpO1xuICAgYm9yZGVyLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjEwNSlcbn1cbi5Gb290ZXItYmxvY2tzIC52YmEtYmxvY2staHRtbCBwIGEsLkZvb3Rlci1ibG9ja3MgLnZiYS1ibG9jay1tYXJrZG93biBwIGEsLkZvb3Rlci1ibG9ja3MgLnZiYS1ibG9jay1pbWFnZSBwIGEsLkZvb3Rlci1ibG9ja3MgLnZiYS1ibG9jay1odG1sIGJsb2NrcXVvdGUgYSwuRm9vdGVyLWJsb2NrcyAudmJhLWJsb2NrLW1hcmtkb3duIGJsb2NrcXVvdGUgYSwuRm9vdGVyLWJsb2NrcyAudmJhLWJsb2NrLWltYWdlIGJsb2NrcXVvdGUgYSwuRm9vdGVyLWJsb2NrcyAudmJhLWJsb2NrLWh0bWwgb2wgYSwuRm9vdGVyLWJsb2NrcyAudmJhLWJsb2NrLW1hcmtkb3duIG9sIGEsLkZvb3Rlci1ibG9ja3MgLnZiYS1ibG9jay1pbWFnZSBvbCBhLC5Gb290ZXItYmxvY2tzIC52YmEtYmxvY2staHRtbCB1bCBhLC5Gb290ZXItYmxvY2tzIC52YmEtYmxvY2stbWFya2Rvd24gdWwgYSwuRm9vdGVyLWJsb2NrcyAudmJhLWJsb2NrLWltYWdlIHVsIGF7XG4gICBjb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC43KTtcbiAgIC13ZWJraXQtdHJhbnNpdGlvbjpjb2xvciAuMTVzIGVhc2Utb3V0O1xuICAgLW1vei10cmFuc2l0aW9uOmNvbG9yIC4xNXMgZWFzZS1vdXQ7XG4gICAtbXMtdHJhbnNpdGlvbjpjb2xvciAuMTVzIGVhc2Utb3V0O1xuICAgLW8tdHJhbnNpdGlvbjpjb2xvciAuMTVzIGVhc2Utb3V0O1xuICAgdHJhbnNpdGlvbjpjb2xvciAuMTVzIGVhc2Utb3V0O1xuICAgcGFkZGluZy1ib3R0b206LjA1ZW07XG4gICBib3JkZXItYm90dG9tLXdpZHRoOjFweDtcbiAgIGJvcmRlci1ib3R0b20tc3R5bGU6c29saWQ7XG4gICBib3JkZXItYm90dG9tLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjIxKTtcbiAgIC13ZWJraXQtdHJhbnNpdGlvbjpib3JkZXItY29sb3IgLjE1cyBlYXNlLW91dCxjb2xvciAuMTVzIGVhc2Utb3V0O1xuICAgLW1vei10cmFuc2l0aW9uOmJvcmRlci1jb2xvciAuMTVzIGVhc2Utb3V0LGNvbG9yIC4xNXMgZWFzZS1vdXQ7XG4gICAtbXMtdHJhbnNpdGlvbjpib3JkZXItY29sb3IgLjE1cyBlYXNlLW91dCxjb2xvciAuMTVzIGVhc2Utb3V0O1xuICAgLW8tdHJhbnNpdGlvbjpib3JkZXItY29sb3IgLjE1cyBlYXNlLW91dCxjb2xvciAuMTVzIGVhc2Utb3V0O1xuICAgdHJhbnNpdGlvbjpib3JkZXItY29sb3IgLjE1cyBlYXNlLW91dCxjb2xvciAuMTVzIGVhc2Utb3V0XG59XG4uRm9vdGVyLWJsb2NrcyAudmJhLWJsb2NrLWh0bWwgcCBhOmhvdmVyLC5Gb290ZXItYmxvY2tzIC52YmEtYmxvY2stbWFya2Rvd24gcCBhOmhvdmVyLC5Gb290ZXItYmxvY2tzIC52YmEtYmxvY2staW1hZ2UgcCBhOmhvdmVyLC5Gb290ZXItYmxvY2tzIC52YmEtYmxvY2staHRtbCBibG9ja3F1b3RlIGE6aG92ZXIsLkZvb3Rlci1ibG9ja3MgLnZiYS1ibG9jay1tYXJrZG93biBibG9ja3F1b3RlIGE6aG92ZXIsLkZvb3Rlci1ibG9ja3MgLnZiYS1ibG9jay1pbWFnZSBibG9ja3F1b3RlIGE6aG92ZXIsLkZvb3Rlci1ibG9ja3MgLnZiYS1ibG9jay1odG1sIG9sIGE6aG92ZXIsLkZvb3Rlci1ibG9ja3MgLnZiYS1ibG9jay1tYXJrZG93biBvbCBhOmhvdmVyLC5Gb290ZXItYmxvY2tzIC52YmEtYmxvY2staW1hZ2Ugb2wgYTpob3ZlciwuRm9vdGVyLWJsb2NrcyAudmJhLWJsb2NrLWh0bWwgdWwgYTpob3ZlciwuRm9vdGVyLWJsb2NrcyAudmJhLWJsb2NrLW1hcmtkb3duIHVsIGE6aG92ZXIsLkZvb3Rlci1ibG9ja3MgLnZiYS1ibG9jay1pbWFnZSB1bCBhOmhvdmVye1xuICAgY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuMzUpXG59XG4uRm9vdGVyLWJsb2NrcyAudmJhLWJsb2NrLWh0bWwgcCBhOmhvdmVyLC5Gb290ZXItYmxvY2tzIC52YmEtYmxvY2stbWFya2Rvd24gcCBhOmhvdmVyLC5Gb290ZXItYmxvY2tzIC52YmEtYmxvY2staW1hZ2UgcCBhOmhvdmVyLC5Gb290ZXItYmxvY2tzIC52YmEtYmxvY2staHRtbCBibG9ja3F1b3RlIGE6aG92ZXIsLkZvb3Rlci1ibG9ja3MgLnZiYS1ibG9jay1tYXJrZG93biBibG9ja3F1b3RlIGE6aG92ZXIsLkZvb3Rlci1ibG9ja3MgLnZiYS1ibG9jay1pbWFnZSBibG9ja3F1b3RlIGE6aG92ZXIsLkZvb3Rlci1ibG9ja3MgLnZiYS1ibG9jay1odG1sIG9sIGE6aG92ZXIsLkZvb3Rlci1ibG9ja3MgLnZiYS1ibG9jay1tYXJrZG93biBvbCBhOmhvdmVyLC5Gb290ZXItYmxvY2tzIC52YmEtYmxvY2staW1hZ2Ugb2wgYTpob3ZlciwuRm9vdGVyLWJsb2NrcyAudmJhLWJsb2NrLWh0bWwgdWwgYTpob3ZlciwuRm9vdGVyLWJsb2NrcyAudmJhLWJsb2NrLW1hcmtkb3duIHVsIGE6aG92ZXIsLkZvb3Rlci1ibG9ja3MgLnZiYS1ibG9jay1pbWFnZSB1bCBhOmhvdmVye1xuICAgY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNDIpO1xuICAgYm9yZGVyLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjEwNSlcbn1cbi5Gb290ZXItYmxvY2tzIC52YmEtYmxvY2staG9yaXpvbnRhbHJ1bGUgaHJ7XG4gICBjb2xvcjojMDBkMGZmO1xuICAgYmFja2dyb3VuZC1jb2xvcjojMDBkMGZmXG59XG4uRm9vdGVyLWJsb2NrcyAudmJhLWJsb2NrLWh0bWwgYmxvY2txdW90ZSwuRm9vdGVyLWJsb2NrcyAudmJhLWJsb2NrLW1hcmtkb3duIGJsb2NrcXVvdGV7XG4gICBib3JkZXItY29sb3I6IzAwZDBmZlxufVxuLkZvb3Rlci1uYXZ7XG4gICBmb250LWZhbWlseTpBcmlhbCxIZWx2ZXRpY2Esc2Fucy1zZXJpZjtcbiAgIGZvbnQtd2VpZ2h0OjcwMDtcbiAgIGZvbnQtc2l6ZToxOHB4O1xuICAgbGV0dGVyLXNwYWNpbmc6MGVtO1xuICAgdGV4dC10cmFuc2Zvcm06bm9uZTtcbiAgIGZvbnQtZmFtaWx5OnByb3hpbWEtbm92YTtcbiAgIGZvbnQtd2VpZ2h0OjQwMDtcbiAgIGZvbnQtc3R5bGU6bm9ybWFsO1xuICAgZm9udC1zaXplOjEzcHg7XG4gICBsZXR0ZXItc3BhY2luZzouMTVlbTtcbiAgIGxpbmUtaGVpZ2h0OjFlbTtcbiAgIHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZVxufVxuLkZvb3Rlci1uYXYgYXtcbiAgIGNvbG9yOiNmZmY7XG4gICAtd2Via2l0LXRyYW5zaXRpb246Y29sb3IgLjE1cyBlYXNlLW91dDtcbiAgIC1tb3otdHJhbnNpdGlvbjpjb2xvciAuMTVzIGVhc2Utb3V0O1xuICAgLW1zLXRyYW5zaXRpb246Y29sb3IgLjE1cyBlYXNlLW91dDtcbiAgIC1vLXRyYW5zaXRpb246Y29sb3IgLjE1cyBlYXNlLW91dDtcbiAgIHRyYW5zaXRpb246Y29sb3IgLjE1cyBlYXNlLW91dFxufVxuLkZvb3Rlci1uYXYgYTpob3ZlcntcbiAgIGNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjUpXG59XG4uRm9vdGVyLW5hdi1ncm91cDplbXB0eXtcbiAgIGRpc3BsYXk6bm9uZSAhaW1wb3J0YW50XG59XG4uRm9vdGVyLW5hdi1mb2xkZXItaGVhZGluZ3tcbiAgIGRpc3BsYXk6bm9uZTtcbiAgIGZvbnQtZmFtaWx5OkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmO1xuICAgZm9udC13ZWlnaHQ6NzAwO1xuICAgZm9udC1mYW1pbHk6ZnJlaWdodC1zYW5zLXBybztcbiAgIGZvbnQtd2VpZ2h0OjMwMDtcbiAgIGZvbnQtc3R5bGU6bm9ybWFsO1xuICAgZm9udC1zaXplOjE4cHg7XG4gICBsZXR0ZXItc3BhY2luZzowZW07XG4gICBsaW5lLWhlaWdodDoxZW07XG4gICB0ZXh0LXRyYW5zZm9ybTpub25lO1xuICAgY29sb3I6IzAwMFxufVxuLnR3ZWFrLWZvb3Rlci1sYXlvdXQtc3RhY2tlZCAuRm9vdGVyLWJsb2Nrcy0tdG9we1xuICAgcGFkZGluZy1ib3R0b206MjBweFxufVxuLnR3ZWFrLWZvb3Rlci1sYXlvdXQtc3RhY2tlZCAuRm9vdGVyLWJsb2Nrcy0tYm90dG9te1xuICAgcGFkZGluZy10b3A6MjBweFxufVxuLnR3ZWFrLWZvb3Rlci1sYXlvdXQtc3RhY2tlZCAuRm9vdGVyLWJ1c2luZXNzLWluZm8taXRlbSwudHdlYWstZm9vdGVyLWxheW91dC1zdGFja2VkIC5Gb290ZXItYnVzaW5lc3MtaG91cnMtaGVhZGluZywudHdlYWstZm9vdGVyLWxheW91dC1zdGFja2VkIC5Gb290ZXItYnVzaW5lc3MtaG91cnMtaXRlbSwudHdlYWstZm9vdGVyLWxheW91dC1zdGFja2VkIC5Gb290ZXItbmF2LWl0ZW0sLnR3ZWFrLWZvb3Rlci1sYXlvdXQtc3RhY2tlZCAuRm9vdGVyLW5hdi1mb2xkZXItaXRlbXtcbiAgIGRpc3BsYXk6aW5saW5lLWJsb2NrXG59XG4udHdlYWstZm9vdGVyLWxheW91dC1zdGFja2VkIC5Gb290ZXItbmF2LWdyb3Vwe1xuICAgZGlzcGxheTppbmxpbmVcbn1cbi50d2Vhay1mb290ZXItbGF5b3V0LXN0YWNrZWQgLkZvb3Rlci1idXNpbmVzcy1pbmZvLC50d2Vhay1mb290ZXItbGF5b3V0LXN0YWNrZWQgLkZvb3Rlci1idXNpbmVzcy1ob3VycywudHdlYWstZm9vdGVyLWxheW91dC1zdGFja2VkIC5Gb290ZXItbmF2LC50d2Vhay1mb290ZXItbGF5b3V0LXN0YWNrZWQgLkZvb3Rlci1ibG9ja3MtLW1pZGRsZXtcbiAgIHBhZGRpbmc6MjBweCAwXG59XG4udHdlYWstZm9vdGVyLWxheW91dC1zdGFja2VkIC5Gb290ZXItYnVzaW5lc3MtaW5mby1pdGVtLS1uYW1lLC50d2Vhay1mb290ZXItbGF5b3V0LXN0YWNrZWQgLkZvb3Rlci1idXNpbmVzcy1pbmZvLWl0ZW0tLWNvdW50cnksLnR3ZWFrLWZvb3Rlci1sYXlvdXQtc3RhY2tlZCAuRm9vdGVyLWJ1c2luZXNzLWluZm8taXRlbS0tcGhvbmUsLnR3ZWFrLWZvb3Rlci1sYXlvdXQtc3RhY2tlZCAuRm9vdGVyLWJ1c2luZXNzLWhvdXJzLWhlYWRpbmcsLnR3ZWFrLWZvb3Rlci1sYXlvdXQtc3RhY2tlZCAuRm9vdGVyLWJ1c2luZXNzLWhvdXJzLWl0ZW17XG4gICBwYWRkaW5nLXJpZ2h0Oi42MThlbVxufVxuLnR3ZWFrLWZvb3Rlci1sYXlvdXQtc3RhY2tlZCAuRm9vdGVyLWJ1c2luZXNzLWluZm8taXRlbS0tbmFtZTpsYXN0LWNoaWxkLC50d2Vhay1mb290ZXItbGF5b3V0LXN0YWNrZWQgLkZvb3Rlci1idXNpbmVzcy1pbmZvLWl0ZW0tLWNvdW50cnk6bGFzdC1jaGlsZCwudHdlYWstZm9vdGVyLWxheW91dC1zdGFja2VkIC5Gb290ZXItYnVzaW5lc3MtaW5mby1pdGVtLS1waG9uZTpsYXN0LWNoaWxkLC50d2Vhay1mb290ZXItbGF5b3V0LXN0YWNrZWQgLkZvb3Rlci1idXNpbmVzcy1ob3Vycy1oZWFkaW5nOmxhc3QtY2hpbGQsLnR3ZWFrLWZvb3Rlci1sYXlvdXQtc3RhY2tlZCAuRm9vdGVyLWJ1c2luZXNzLWhvdXJzLWl0ZW06bGFzdC1jaGlsZHtcbiAgIHBhZGRpbmctcmlnaHQ6MFxufVxuLnR3ZWFrLWZvb3Rlci1sYXlvdXQtc3RhY2tlZCAuRm9vdGVyLW5hdi1pdGVtLC50d2Vhay1mb290ZXItbGF5b3V0LXN0YWNrZWQgLkZvb3Rlci1uYXYtZm9sZGVyLWl0ZW17XG4gICBwYWRkaW5nLXJpZ2h0OjFlbVxufVxuLnR3ZWFrLWZvb3Rlci1sYXlvdXQtc3RhY2tlZCAuRm9vdGVyLW5hdntcbiAgIG1hcmdpbi1yaWdodDotMWVtXG59XG4udHdlYWstZm9vdGVyLWxheW91dC1zdGFja2VkLnR3ZWFrLWZvb3Rlci1zdGFja2VkLWFsaWdubWVudC1sZWZ0IC5Gb290ZXItYnVzaW5lc3MsLnR3ZWFrLWZvb3Rlci1sYXlvdXQtc3RhY2tlZC50d2Vhay1mb290ZXItc3RhY2tlZC1hbGlnbm1lbnQtbGVmdCAuRm9vdGVyLW5hdntcbiAgIHRleHQtYWxpZ246bGVmdFxufVxuLnR3ZWFrLWZvb3Rlci1sYXlvdXQtc3RhY2tlZC50d2Vhay1mb290ZXItc3RhY2tlZC1hbGlnbm1lbnQtY2VudGVyIC5Gb290ZXItYnVzaW5lc3MsLnR3ZWFrLWZvb3Rlci1sYXlvdXQtc3RhY2tlZC50d2Vhay1mb290ZXItc3RhY2tlZC1hbGlnbm1lbnQtY2VudGVyIC5Gb290ZXItbmF2e1xuICAgdGV4dC1hbGlnbjpjZW50ZXJcbn1cbi50d2Vhay1mb290ZXItbGF5b3V0LXN0YWNrZWQudHdlYWstZm9vdGVyLXN0YWNrZWQtYWxpZ25tZW50LXJpZ2h0IC5Gb290ZXItYnVzaW5lc3MsLnR3ZWFrLWZvb3Rlci1sYXlvdXQtc3RhY2tlZC50d2Vhay1mb290ZXItc3RhY2tlZC1hbGlnbm1lbnQtcmlnaHQgLkZvb3Rlci1uYXZ7XG4gICB0ZXh0LWFsaWduOnJpZ2h0XG59XG4udHdlYWstZm9vdGVyLWxheW91dC1jb2x1bW5zIC5Gb290ZXItaW5uZXJ7XG4gICBvdmVyZmxvdzpoaWRkZW5cbn1cbi50d2Vhay1mb290ZXItbGF5b3V0LWNvbHVtbnMgLkZvb3Rlci1ibG9ja3MtLXRvcHtcbiAgIHBhZGRpbmctYm90dG9tOjQwcHhcbn1cbi50d2Vhay1mb290ZXItbGF5b3V0LWNvbHVtbnMgLkZvb3Rlci1ibG9ja3MtLWJvdHRvbXtcbiAgIHBhZGRpbmctdG9wOjQwcHhcbn1cbi50d2Vhay1mb290ZXItbGF5b3V0LWNvbHVtbnMgLkZvb3Rlci1taWRkbGV7XG4gICBtYXJnaW46LTIwcHg7XG4gICBkaXNwbGF5Oi13ZWJraXQtYm94O1xuICAgZGlzcGxheTotbXMtZmxleGJveDtcbiAgIGRpc3BsYXk6LXdlYmtpdC1mbGV4O1xuICAgZGlzcGxheTpmbGV4XG59XG4udHdlYWstZm9vdGVyLWxheW91dC1jb2x1bW5zIC5Gb290ZXItYnVzaW5lc3MtaW5mbywudHdlYWstZm9vdGVyLWxheW91dC1jb2x1bW5zIC5Gb290ZXItYnVzaW5lc3MtaG91cnMsLnR3ZWFrLWZvb3Rlci1sYXlvdXQtY29sdW1ucyAuRm9vdGVyLW5hdi1ncm91cCwudHdlYWstZm9vdGVyLWxheW91dC1jb2x1bW5zIC5Gb290ZXItYmxvY2tzLS1taWRkbGV7XG4gICBwYWRkaW5nOjIwcHhcbn1cbi50d2Vhay1mb290ZXItbGF5b3V0LWNvbHVtbnMgLkZvb3Rlci1idXNpbmVzc3tcbiAgIC13ZWJraXQtYm94LWZsZXg6MCAwIGF1dG87XG4gICAtbW96LWJveC1mbGV4OjAgMCBhdXRvO1xuICAgLXdlYmtpdC1ib3gtZmxleDoxO1xuICAgLW1zLWZsZXg6MCAwIGF1dG87XG4gICAtd2Via2l0LWZsZXg6MCAwIGF1dG87XG4gICBmbGV4OjAgMCBhdXRvXG59XG4udHdlYWstZm9vdGVyLWxheW91dC1jb2x1bW5zIC5Gb290ZXItYnVzaW5lc3MtaW5mbywudHdlYWstZm9vdGVyLWxheW91dC1jb2x1bW5zIC5Gb290ZXItYnVzaW5lc3MtaG91cnN7XG4gICBmbG9hdDpsZWZ0XG59XG4udHdlYWstZm9vdGVyLWxheW91dC1jb2x1bW5zIC5Gb290ZXItYnVzaW5lc3MtaW5mby1pdGVte1xuICAgcGFkZGluZy1ib3R0b206LjM4MmVtXG59XG4udHdlYWstZm9vdGVyLWxheW91dC1jb2x1bW5zIC5Gb290ZXItYnVzaW5lc3MtaW5mby1pdGVtLS1uYW1le1xuICAgcGFkZGluZy1ib3R0b206MWVtXG59XG4udHdlYWstZm9vdGVyLWxheW91dC1jb2x1bW5zIC5Gb290ZXItYnVzaW5lc3MtaW5mby1pdGVtLS1waG9uZXtcbiAgIHBhZGRpbmctdG9wOi42MThlbVxufVxuLnR3ZWFrLWZvb3Rlci1sYXlvdXQtY29sdW1ucyAuRm9vdGVyLWJ1c2luZXNzLWluZm8taXRlbS0tZW1haWx7XG4gICBtYXgtd2lkdGg6MTBlbVxufVxuLnR3ZWFrLWZvb3Rlci1sYXlvdXQtY29sdW1ucyAuRm9vdGVyLWJ1c2luZXNzLWhvdXJzLWhlYWRpbmd7XG4gICBwYWRkaW5nLWJvdHRvbToxZW1cbn1cbi50d2Vhay1mb290ZXItbGF5b3V0LWNvbHVtbnMgLkZvb3Rlci1idXNpbmVzcy1ob3Vycy1pdGVte1xuICAgcGFkZGluZy1ib3R0b206LjYxOGVtXG59XG4udHdlYWstZm9vdGVyLWxheW91dC1jb2x1bW5zIC5Gb290ZXItbmF2e1xuICAgbWluLXdpZHRoOjA7XG4gICAtd2Via2l0LWJveC1mbGV4OjAgMSBhdXRvO1xuICAgLW1vei1ib3gtZmxleDowIDEgYXV0bztcbiAgIC13ZWJraXQtYm94LWZsZXg6MTtcbiAgIC1tcy1mbGV4OjAgMSBhdXRvO1xuICAgLXdlYmtpdC1mbGV4OjAgMSBhdXRvO1xuICAgZmxleDowIDEgYXV0b1xufVxuLnR3ZWFrLWZvb3Rlci1sYXlvdXQtY29sdW1ucyAuRm9vdGVyLW5hdi1ncm91cHtcbiAgIGZsb2F0OmxlZnRcbn1cbi50d2Vhay1mb290ZXItbGF5b3V0LWNvbHVtbnMgLkZvb3Rlci1uYXYtZm9sZGVyLWhlYWRpbmcsLnR3ZWFrLWZvb3Rlci1sYXlvdXQtY29sdW1ucyAuRm9vdGVyLW5hdi1pdGVtLC50d2Vhay1mb290ZXItbGF5b3V0LWNvbHVtbnMgLkZvb3Rlci1uYXYtZm9sZGVyLWl0ZW17XG4gICBkaXNwbGF5OmJsb2NrO1xuICAgbWF4LXdpZHRoOjE2ZW1cbn1cbi50d2Vhay1mb290ZXItbGF5b3V0LWNvbHVtbnMgLkZvb3Rlci1uYXYtZm9sZGVyLWhlYWRpbmd7XG4gICBwYWRkaW5nLWJvdHRvbToxZW1cbn1cbi50d2Vhay1mb290ZXItbGF5b3V0LWNvbHVtbnMgLkZvb3Rlci1uYXYtaXRlbSwudHdlYWstZm9vdGVyLWxheW91dC1jb2x1bW5zIC5Gb290ZXItbmF2LWZvbGRlci1pdGVte1xuICAgcGFkZGluZy1ib3R0b206LjYxOGVtXG59XG4udHdlYWstZm9vdGVyLWxheW91dC1jb2x1bW5zIC5Gb290ZXItYmxvY2tzLS1taWRkbGV7XG4gICAtd2Via2l0LWJveC1mbGV4OjAgMCAzMyU7XG4gICAtbW96LWJveC1mbGV4OjAgMCAzMyU7XG4gICAtd2Via2l0LWJveC1mbGV4OjE7XG4gICAtbXMtZmxleDowIDAgMzMlO1xuICAgLXdlYmtpdC1mbGV4OjAgMCAzMyU7XG4gICBmbGV4OjAgMCAzMyU7XG4gICAtbW96LWJveC1vcmRpbmFsLWdyb3VwOjE7XG4gICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOjE7XG4gICAtbXMtZmxleC1vcmRlcjoxO1xuICAgLXdlYmtpdC1vcmRlcjoxO1xuICAgb3JkZXI6MVxufVxuLnR3ZWFrLWZvb3Rlci1sYXlvdXQtY29sdW1ucyAuRm9vdGVyLWJsb2Nrcy0tbWlkZGxlLmVtcHR5Om5vdCgudmJhLWVkaXRpbmcpe1xuICAgLXdlYmtpdC1ib3gtZmxleDowIDEgMHB4O1xuICAgLW1vei1ib3gtZmxleDowIDEgMHB4O1xuICAgLXdlYmtpdC1ib3gtZmxleDoxO1xuICAgLW1zLWZsZXg6MCAxIDBweDtcbiAgIC13ZWJraXQtZmxleDowIDEgMHB4O1xuICAgZmxleDowIDEgMHB4XG59XG4udHdlYWstZm9vdGVyLWxheW91dC1jb2x1bW5zLnR3ZWFrLWZvb3Rlci1sYXlvdXQtY29sdW1ucy50d2Vhay1mb290ZXItYnVzaW5lc3MtaW5mby1zaG93Om5vdCgudHdlYWstZm9vdGVyLWxheW91dC1jb2x1bW5zLWF1dG8pIC5Gb290ZXItYnVzaW5lc3MtaW5mb3tcbiAgIHdpZHRoOjE2MHB4XG59XG4udHdlYWstZm9vdGVyLWxheW91dC1jb2x1bW5zLnR3ZWFrLWZvb3Rlci1sYXlvdXQtY29sdW1ucy50d2Vhay1mb290ZXItYnVzaW5lc3MtaG91cnMtc2hvdzpub3QoLnR3ZWFrLWZvb3Rlci1sYXlvdXQtY29sdW1ucy1hdXRvKSAuRm9vdGVyLWJ1c2luZXNzLWhvdXJze1xuICAgd2lkdGg6MTYwcHhcbn1cbi50d2Vhay1mb290ZXItbGF5b3V0LWNvbHVtbnMudHdlYWstZm9vdGVyLWxheW91dC1jb2x1bW5zOm5vdCgudHdlYWstZm9vdGVyLWxheW91dC1jb2x1bW5zLWF1dG8pIC5Gb290ZXItbmF2LWdyb3Vwe1xuICAgd2lkdGg6MTYwcHhcbn1cbi50d2Vhay1mb290ZXItbGF5b3V0LWNvbHVtbnMgLkZvb3Rlci0tbWlkIC5Gb290ZXItYnVzaW5lc3MtaW5mbywudHdlYWstZm9vdGVyLWxheW91dC1jb2x1bW5zIC5Gb290ZXItLW1pZCAuRm9vdGVyLWJ1c2luZXNzLWhvdXJze1xuICAgZmxvYXQ6bm9uZVxufVxuLnR3ZWFrLWZvb3Rlci1sYXlvdXQtY29sdW1ucyAuRm9vdGVyLS1taWQgLkZvb3Rlci1uYXYtZ3JvdXB7XG4gICB3aWR0aDoxMGVtXG59XG4udHdlYWstZm9vdGVyLWxheW91dC1jb2x1bW5zIC5Gb290ZXItLW1pZCAuRm9vdGVyLWJsb2Nrcy0tbWlkZGxle1xuICAgLXdlYmtpdC1ib3gtZmxleDowIDEgMzAwcHg7XG4gICAtbW96LWJveC1mbGV4OjAgMSAzMDBweDtcbiAgIC13ZWJraXQtYm94LWZsZXg6MTtcbiAgIC1tcy1mbGV4OjAgMSAzMDBweDtcbiAgIC13ZWJraXQtZmxleDowIDEgMzAwcHg7XG4gICBmbGV4OjAgMSAzMDBweFxufVxuLnR3ZWFrLWZvb3Rlci1sYXlvdXQtY29sdW1ucyAuRm9vdGVyLS1taWQgLkZvb3Rlci1ibG9ja3MtLW1pZGRsZS5lbXB0eTpub3QoLnZiYS1lZGl0aW5nKXtcbiAgIC13ZWJraXQtYm94LWZsZXg6MCAxIDBweDtcbiAgIC1tb3otYm94LWZsZXg6MCAxIDBweDtcbiAgIC13ZWJraXQtYm94LWZsZXg6MTtcbiAgIC1tcy1mbGV4OjAgMSAwcHg7XG4gICAtd2Via2l0LWZsZXg6MCAxIDBweDtcbiAgIGZsZXg6MCAxIDBweFxufVxuLnR3ZWFrLWZvb3Rlci1sYXlvdXQtY29sdW1ucyAuRm9vdGVyLS1taWQuRm9vdGVyLS1jb21wYWN0IC5Gb290ZXItbWlkZGxle1xuICAgbWFyZ2luOjA7XG4gICAtd2Via2l0LWJveC1vcmllbnQ6dmVydGljYWw7XG4gICAtbXMtZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjpjb2x1bW47XG4gICBmbGV4LWRpcmVjdGlvbjpjb2x1bW5cbn1cbi50d2Vhay1mb290ZXItbGF5b3V0LWNvbHVtbnMgLkZvb3Rlci0tbWlkLkZvb3Rlci0tY29tcGFjdCAuRm9vdGVyLWJ1c2luZXNze1xuICAgLXdlYmtpdC1ib3gtZmxleDowIDAgYXV0bztcbiAgIC1tb3otYm94LWZsZXg6MCAwIGF1dG87XG4gICAtd2Via2l0LWJveC1mbGV4OjE7XG4gICAtbXMtZmxleDowIDAgYXV0bztcbiAgIC13ZWJraXQtZmxleDowIDAgYXV0bztcbiAgIGZsZXg6MCAwIGF1dG9cbn1cbi50d2Vhay1mb290ZXItbGF5b3V0LWNvbHVtbnMgLkZvb3Rlci0tbWlkLkZvb3Rlci0tY29tcGFjdCAuRm9vdGVyLWJ1c2luZXNzLWluZm8sLnR3ZWFrLWZvb3Rlci1sYXlvdXQtY29sdW1ucyAuRm9vdGVyLS1taWQuRm9vdGVyLS1jb21wYWN0IC5Gb290ZXItYnVzaW5lc3MtaG91cnN7XG4gICBmbG9hdDpub25lXG59XG4udHdlYWstZm9vdGVyLWxheW91dC1jb2x1bW5zIC5Gb290ZXItLW1pZC5Gb290ZXItLWNvbXBhY3QgLkZvb3Rlci1idXNpbmVzcy1pbmZvLWl0ZW0tLWVtYWlse1xuICAgbWF4LXdpZHRoOjEwMCVcbn1cbi50d2Vhay1mb290ZXItbGF5b3V0LWNvbHVtbnMgLkZvb3Rlci0tbWlkLkZvb3Rlci0tY29tcGFjdCAuRm9vdGVyLW5hdntcbiAgIC13ZWJraXQtYm94LWZsZXg6MCAwIGF1dG87XG4gICAtbW96LWJveC1mbGV4OjAgMCBhdXRvO1xuICAgLXdlYmtpdC1ib3gtZmxleDoxO1xuICAgLW1zLWZsZXg6MCAwIGF1dG87XG4gICAtd2Via2l0LWZsZXg6MCAwIGF1dG87XG4gICBmbGV4OjAgMCBhdXRvXG59XG4udHdlYWstZm9vdGVyLWxheW91dC1jb2x1bW5zIC5Gb290ZXItLW1pZC5Gb290ZXItLWNvbXBhY3QgLkZvb3Rlci1uYXYtZ3JvdXB7XG4gICBmbG9hdDpub25lO1xuICAgd2lkdGg6YXV0b1xufVxuLnR3ZWFrLWZvb3Rlci1sYXlvdXQtY29sdW1ucyAuRm9vdGVyLS1taWQuRm9vdGVyLS1jb21wYWN0IC5Gb290ZXItbmF2LWZvbGRlci1oZWFkaW5nLC50d2Vhay1mb290ZXItbGF5b3V0LWNvbHVtbnMgLkZvb3Rlci0tbWlkLkZvb3Rlci0tY29tcGFjdCAuRm9vdGVyLW5hdi1pdGVtLC50d2Vhay1mb290ZXItbGF5b3V0LWNvbHVtbnMgLkZvb3Rlci0tbWlkLkZvb3Rlci0tY29tcGFjdCAuRm9vdGVyLW5hdi1mb2xkZXItaXRlbXtcbiAgIG1heC13aWR0aDpub25lXG59XG4udHdlYWstZm9vdGVyLWxheW91dC1jb2x1bW5zIC5Gb290ZXItLW1pZC5Gb290ZXItLWNvbXBhY3QgLkZvb3Rlci1ibG9ja3MtLW1pZGRsZXtcbiAgIC13ZWJraXQtYm94LWZsZXg6MCAwIGF1dG87XG4gICAtbW96LWJveC1mbGV4OjAgMCBhdXRvO1xuICAgLXdlYmtpdC1ib3gtZmxleDoxO1xuICAgLW1zLWZsZXg6MCAwIGF1dG87XG4gICAtd2Via2l0LWZsZXg6MCAwIGF1dG87XG4gICBmbGV4OjAgMCBhdXRvXG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQ3OXB4KXtcbiAgIC50d2Vhay1mb290ZXItbGF5b3V0LWNvbHVtbnM6bm90KC5oYXMtZm9vdGVyLW5hdikgLkZvb3Rlci1taWRkbGV7XG4gICAgICAgbWFyZ2luOjA7XG4gICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OnZlcnRpY2FsO1xuICAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW47XG4gICAgICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjpjb2x1bW47XG4gICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uXG4gICB9XG4gICAudHdlYWstZm9vdGVyLWxheW91dC1jb2x1bW5zOm5vdCguaGFzLWZvb3Rlci1uYXYpIC5Gb290ZXItYnVzaW5lc3N7XG4gICAgICAgLXdlYmtpdC1ib3gtZmxleDowIDAgYXV0bztcbiAgICAgICAtbW96LWJveC1mbGV4OjAgMCBhdXRvO1xuICAgICAgIC13ZWJraXQtYm94LWZsZXg6MTtcbiAgICAgICAtbXMtZmxleDowIDAgYXV0bztcbiAgICAgICAtd2Via2l0LWZsZXg6MCAwIGF1dG87XG4gICAgICAgZmxleDowIDAgYXV0b1xuICAgfVxuICAgLnR3ZWFrLWZvb3Rlci1sYXlvdXQtY29sdW1uczpub3QoLmhhcy1mb290ZXItbmF2KSAuRm9vdGVyLWJ1c2luZXNzLWluZm8sLnR3ZWFrLWZvb3Rlci1sYXlvdXQtY29sdW1uczpub3QoLmhhcy1mb290ZXItbmF2KSAuRm9vdGVyLWJ1c2luZXNzLWhvdXJze1xuICAgICAgIGZsb2F0Om5vbmVcbiAgIH1cbiAgIC50d2Vhay1mb290ZXItbGF5b3V0LWNvbHVtbnM6bm90KC5oYXMtZm9vdGVyLW5hdikgLkZvb3Rlci1idXNpbmVzcy1pbmZvLWl0ZW0tLWVtYWlse1xuICAgICAgIG1heC13aWR0aDoxMDAlXG4gICB9XG4gICAudHdlYWstZm9vdGVyLWxheW91dC1jb2x1bW5zOm5vdCguaGFzLWZvb3Rlci1uYXYpIC5Gb290ZXItbmF2e1xuICAgICAgIC13ZWJraXQtYm94LWZsZXg6MCAwIGF1dG87XG4gICAgICAgLW1vei1ib3gtZmxleDowIDAgYXV0bztcbiAgICAgICAtd2Via2l0LWJveC1mbGV4OjE7XG4gICAgICAgLW1zLWZsZXg6MCAwIGF1dG87XG4gICAgICAgLXdlYmtpdC1mbGV4OjAgMCBhdXRvO1xuICAgICAgIGZsZXg6MCAwIGF1dG9cbiAgIH1cbiAgIC50d2Vhay1mb290ZXItbGF5b3V0LWNvbHVtbnM6bm90KC5oYXMtZm9vdGVyLW5hdikgLkZvb3Rlci1uYXYtZ3JvdXB7XG4gICAgICAgZmxvYXQ6bm9uZTtcbiAgICAgICB3aWR0aDphdXRvXG4gICB9XG4gICAudHdlYWstZm9vdGVyLWxheW91dC1jb2x1bW5zOm5vdCguaGFzLWZvb3Rlci1uYXYpIC5Gb290ZXItbmF2LWZvbGRlci1oZWFkaW5nLC50d2Vhay1mb290ZXItbGF5b3V0LWNvbHVtbnM6bm90KC5oYXMtZm9vdGVyLW5hdikgLkZvb3Rlci1uYXYtaXRlbSwudHdlYWstZm9vdGVyLWxheW91dC1jb2x1bW5zOm5vdCguaGFzLWZvb3Rlci1uYXYpIC5Gb290ZXItbmF2LWZvbGRlci1pdGVte1xuICAgICAgIG1heC13aWR0aDpub25lXG4gICB9XG4gICAudHdlYWstZm9vdGVyLWxheW91dC1jb2x1bW5zOm5vdCguaGFzLWZvb3Rlci1uYXYpIC5Gb290ZXItYmxvY2tzLS1taWRkbGV7XG4gICAgICAgLXdlYmtpdC1ib3gtZmxleDowIDAgYXV0bztcbiAgICAgICAtbW96LWJveC1mbGV4OjAgMCBhdXRvO1xuICAgICAgIC13ZWJraXQtYm94LWZsZXg6MTtcbiAgICAgICAtbXMtZmxleDowIDAgYXV0bztcbiAgICAgICAtd2Via2l0LWZsZXg6MCAwIGF1dG87XG4gICAgICAgZmxleDowIDAgYXV0b1xuICAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo0ODBweCkgYW5kIChtYXgtd2lkdGg6NTk5cHgpe1xuICAgLnR3ZWFrLWZvb3Rlci1sYXlvdXQtY29sdW1uczpub3QoLmhhcy1mb290ZXItbmF2KSAuRm9vdGVyLW5hdi1ncm91cHtcbiAgICAgICB3aWR0aDoxMGVtXG4gICB9XG4gICAudHdlYWstZm9vdGVyLWxheW91dC1jb2x1bW5zOm5vdCguaGFzLWZvb3Rlci1uYXYpIC5Gb290ZXItYmxvY2tzLS1taWRkbGV7XG4gICAgICAgLXdlYmtpdC1ib3gtZmxleDowIDEgMzAwcHg7XG4gICAgICAgLW1vei1ib3gtZmxleDowIDEgMzAwcHg7XG4gICAgICAgLXdlYmtpdC1ib3gtZmxleDoxO1xuICAgICAgIC1tcy1mbGV4OjAgMSAzMDBweDtcbiAgICAgICAtd2Via2l0LWZsZXg6MCAxIDMwMHB4O1xuICAgICAgIGZsZXg6MCAxIDMwMHB4XG4gICB9XG4gICAudHdlYWstZm9vdGVyLWxheW91dC1jb2x1bW5zOm5vdCguaGFzLWZvb3Rlci1uYXYpIC5Gb290ZXItYmxvY2tzLS1taWRkbGUuZW1wdHk6bm90KC52YmEtZWRpdGluZyl7XG4gICAgICAgLXdlYmtpdC1ib3gtZmxleDowIDEgMHB4O1xuICAgICAgIC1tb3otYm94LWZsZXg6MCAxIDBweDtcbiAgICAgICAtd2Via2l0LWJveC1mbGV4OjE7XG4gICAgICAgLW1zLWZsZXg6MCAxIDBweDtcbiAgICAgICAtd2Via2l0LWZsZXg6MCAxIDBweDtcbiAgICAgICBmbGV4OjAgMSAwcHhcbiAgIH1cbn1cbi5tZW51LWJsb2NrIC5tZW51LXN0eWxlLWNsYXNzaWMgLm1lbnUtc2VsZWN0b3IsLm1lbnUtYmxvY2sgLm1lbnUtc3R5bGUtY2xhc3NpYyAubWVudS1oZWFkZXIsLm1lbnUtYmxvY2sgLm1lbnUtc3R5bGUtY2xhc3NpYyAubWVudS1zZWN0aW9uLXRpdGxlLC5tZW51LWJsb2NrIC5tZW51LXN0eWxlLWNsYXNzaWMgLm1lbnUtc2VjdGlvbi1kZXNjcmlwdGlvbntcbiAgIHRleHQtYWxpZ246Y2VudGVyXG59XG4iLCIuRm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2MjYyYTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG4udHdlYWstZm9vdGVyLXNob3cgLkZvb3RlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLkZvb3Rlci1pbm5lciB7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiA2MHB4IDYwcHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuICAuRm9vdGVyLWlubmVyIHtcbiAgICBwYWRkaW5nLXRvcDogNDhweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNDhweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLkZvb3Rlci1pbm5lciB7XG4gICAgcGFkZGluZy10b3A6IDM2cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDM2cHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gIC5Gb290ZXItaW5uZXIge1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuICAuRm9vdGVyLWlubmVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDQ4cHg7XG4gICAgcGFkZGluZy1yaWdodDogNDhweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLkZvb3Rlci1pbm5lciB7XG4gICAgcGFkZGluZy1sZWZ0OiAzNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDM2cHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gIC5Gb290ZXItaW5uZXIge1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICB9XG59XG4uRm9vdGVyLWJsb2NrcyB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG59XG4uRm9vdGVyLWJsb2Nrcy5lbXB0eSB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cbi5Gb290ZXItYmxvY2tzIGgxIHtcbiAgY29sb3I6ICNmZmY7XG59XG4uRm9vdGVyLWJsb2NrcyBoMSBhIHtcbiAgcGFkZGluZy1ib3R0b206IDAuMDVlbTtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xuICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLW91dCwgY29sb3IgMC4xNXMgZWFzZS1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2Utb3V0LCBjb2xvciAwLjE1cyBlYXNlLW91dDtcbiAgLW1zLXRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLW91dCwgY29sb3IgMC4xNXMgZWFzZS1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLW91dCwgY29sb3IgMC4xNXMgZWFzZS1vdXQ7XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLW91dCwgY29sb3IgMC4xNXMgZWFzZS1vdXQ7XG59XG4uRm9vdGVyLWJsb2NrcyBoMSBhOmhvdmVyIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xufVxuLkZvb3Rlci1ibG9ja3MgaDIge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xufVxuLkZvb3Rlci1ibG9ja3MgaDIgYSB7XG4gIHBhZGRpbmctYm90dG9tOiAwLjA1ZW07XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2Utb3V0LCBjb2xvciAwLjE1cyBlYXNlLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1vdXQsIGNvbG9yIDAuMTVzIGVhc2Utb3V0O1xuICAtbXMtdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2Utb3V0LCBjb2xvciAwLjE1cyBlYXNlLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2Utb3V0LCBjb2xvciAwLjE1cyBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2Utb3V0LCBjb2xvciAwLjE1cyBlYXNlLW91dDtcbn1cbi5Gb290ZXItYmxvY2tzIGgyIGE6aG92ZXIge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0KTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDYpO1xufVxuLkZvb3Rlci1ibG9ja3MgaDMge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xufVxuLkZvb3Rlci1ibG9ja3MgaDMgYSB7XG4gIHBhZGRpbmctYm90dG9tOiAwLjA1ZW07XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yMSk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2Utb3V0LCBjb2xvciAwLjE1cyBlYXNlLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1vdXQsIGNvbG9yIDAuMTVzIGVhc2Utb3V0O1xuICAtbXMtdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2Utb3V0LCBjb2xvciAwLjE1cyBlYXNlLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2Utb3V0LCBjb2xvciAwLjE1cyBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2Utb3V0LCBjb2xvciAwLjE1cyBlYXNlLW91dDtcbn1cbi5Gb290ZXItYmxvY2tzIGgzIGE6aG92ZXIge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQyKTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTA1KTtcbn1cbi5Gb290ZXItYmxvY2tzIC52YmEtYmxvY2staHRtbCBwIGEsXG4uRm9vdGVyLWJsb2NrcyAudmJhLWJsb2NrLW1hcmtkb3duIHAgYSxcbi5Gb290ZXItYmxvY2tzIC52YmEtYmxvY2staW1hZ2UgcCBhLFxuLkZvb3Rlci1ibG9ja3MgLnZiYS1ibG9jay1odG1sIGJsb2NrcXVvdGUgYSxcbi5Gb290ZXItYmxvY2tzIC52YmEtYmxvY2stbWFya2Rvd24gYmxvY2txdW90ZSBhLFxuLkZvb3Rlci1ibG9ja3MgLnZiYS1ibG9jay1pbWFnZSBibG9ja3F1b3RlIGEsXG4uRm9vdGVyLWJsb2NrcyAudmJhLWJsb2NrLWh0bWwgb2wgYSxcbi5Gb290ZXItYmxvY2tzIC52YmEtYmxvY2stbWFya2Rvd24gb2wgYSxcbi5Gb290ZXItYmxvY2tzIC52YmEtYmxvY2staW1hZ2Ugb2wgYSxcbi5Gb290ZXItYmxvY2tzIC52YmEtYmxvY2staHRtbCB1bCBhLFxuLkZvb3Rlci1ibG9ja3MgLnZiYS1ibG9jay1tYXJrZG93biB1bCBhLFxuLkZvb3Rlci1ibG9ja3MgLnZiYS1ibG9jay1pbWFnZSB1bCBhIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLW91dDtcbiAgLW1zLXRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2Utb3V0O1xuICAtby10cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZS1vdXQ7XG4gIHBhZGRpbmctYm90dG9tOiAwLjA1ZW07XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yMSk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2Utb3V0LCBjb2xvciAwLjE1cyBlYXNlLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1vdXQsIGNvbG9yIDAuMTVzIGVhc2Utb3V0O1xuICAtbXMtdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2Utb3V0LCBjb2xvciAwLjE1cyBlYXNlLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2Utb3V0LCBjb2xvciAwLjE1cyBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2Utb3V0LCBjb2xvciAwLjE1cyBlYXNlLW91dDtcbn1cbi5Gb290ZXItYmxvY2tzIC52YmEtYmxvY2staHRtbCBwIGE6aG92ZXIsXG4uRm9vdGVyLWJsb2NrcyAudmJhLWJsb2NrLW1hcmtkb3duIHAgYTpob3Zlcixcbi5Gb290ZXItYmxvY2tzIC52YmEtYmxvY2staW1hZ2UgcCBhOmhvdmVyLFxuLkZvb3Rlci1ibG9ja3MgLnZiYS1ibG9jay1odG1sIGJsb2NrcXVvdGUgYTpob3Zlcixcbi5Gb290ZXItYmxvY2tzIC52YmEtYmxvY2stbWFya2Rvd24gYmxvY2txdW90ZSBhOmhvdmVyLFxuLkZvb3Rlci1ibG9ja3MgLnZiYS1ibG9jay1pbWFnZSBibG9ja3F1b3RlIGE6aG92ZXIsXG4uRm9vdGVyLWJsb2NrcyAudmJhLWJsb2NrLWh0bWwgb2wgYTpob3Zlcixcbi5Gb290ZXItYmxvY2tzIC52YmEtYmxvY2stbWFya2Rvd24gb2wgYTpob3Zlcixcbi5Gb290ZXItYmxvY2tzIC52YmEtYmxvY2staW1hZ2Ugb2wgYTpob3Zlcixcbi5Gb290ZXItYmxvY2tzIC52YmEtYmxvY2staHRtbCB1bCBhOmhvdmVyLFxuLkZvb3Rlci1ibG9ja3MgLnZiYS1ibG9jay1tYXJrZG93biB1bCBhOmhvdmVyLFxuLkZvb3Rlci1ibG9ja3MgLnZiYS1ibG9jay1pbWFnZSB1bCBhOmhvdmVyIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNSk7XG59XG4uRm9vdGVyLWJsb2NrcyAudmJhLWJsb2NrLWh0bWwgcCBhOmhvdmVyLFxuLkZvb3Rlci1ibG9ja3MgLnZiYS1ibG9jay1tYXJrZG93biBwIGE6aG92ZXIsXG4uRm9vdGVyLWJsb2NrcyAudmJhLWJsb2NrLWltYWdlIHAgYTpob3Zlcixcbi5Gb290ZXItYmxvY2tzIC52YmEtYmxvY2staHRtbCBibG9ja3F1b3RlIGE6aG92ZXIsXG4uRm9vdGVyLWJsb2NrcyAudmJhLWJsb2NrLW1hcmtkb3duIGJsb2NrcXVvdGUgYTpob3Zlcixcbi5Gb290ZXItYmxvY2tzIC52YmEtYmxvY2staW1hZ2UgYmxvY2txdW90ZSBhOmhvdmVyLFxuLkZvb3Rlci1ibG9ja3MgLnZiYS1ibG9jay1odG1sIG9sIGE6aG92ZXIsXG4uRm9vdGVyLWJsb2NrcyAudmJhLWJsb2NrLW1hcmtkb3duIG9sIGE6aG92ZXIsXG4uRm9vdGVyLWJsb2NrcyAudmJhLWJsb2NrLWltYWdlIG9sIGE6aG92ZXIsXG4uRm9vdGVyLWJsb2NrcyAudmJhLWJsb2NrLWh0bWwgdWwgYTpob3Zlcixcbi5Gb290ZXItYmxvY2tzIC52YmEtYmxvY2stbWFya2Rvd24gdWwgYTpob3Zlcixcbi5Gb290ZXItYmxvY2tzIC52YmEtYmxvY2staW1hZ2UgdWwgYTpob3ZlciB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDIpO1xuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMDUpO1xufVxuLkZvb3Rlci1ibG9ja3MgLnZiYS1ibG9jay1ob3Jpem9udGFscnVsZSBociB7XG4gIGNvbG9yOiAjMDBkMGZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBkMGZmO1xufVxuLkZvb3Rlci1ibG9ja3MgLnZiYS1ibG9jay1odG1sIGJsb2NrcXVvdGUsXG4uRm9vdGVyLWJsb2NrcyAudmJhLWJsb2NrLW1hcmtkb3duIGJsb2NrcXVvdGUge1xuICBib3JkZXItY29sb3I6ICMwMGQwZmY7XG59XG4uRm9vdGVyLW5hdiB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwZW07XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmb250LWZhbWlseTogcHJveGltYS1ub3ZhO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTVlbTtcbiAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5Gb290ZXItbmF2IGEge1xuICBjb2xvcjogI2ZmZjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLW91dDtcbiAgLW1zLXRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2Utb3V0O1xuICAtby10cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZS1vdXQ7XG59XG4uRm9vdGVyLW5hdiBhOmhvdmVyIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbn1cbi5Gb290ZXItbmF2LWdyb3VwOmVtcHR5IHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuLkZvb3Rlci1uYXYtZm9sZGVyLWhlYWRpbmcge1xuICBkaXNwbGF5OiBub25lO1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1mYW1pbHk6IGZyZWlnaHQtc2Fucy1wcm87XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsZXR0ZXItc3BhY2luZzogMGVtO1xuICBsaW5lLWhlaWdodDogMWVtO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgY29sb3I6ICMwMDA7XG59XG4udHdlYWstZm9vdGVyLWxheW91dC1zdGFja2VkIC5Gb290ZXItYmxvY2tzLS10b3Age1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cbi50d2Vhay1mb290ZXItbGF5b3V0LXN0YWNrZWQgLkZvb3Rlci1ibG9ja3MtLWJvdHRvbSB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuLnR3ZWFrLWZvb3Rlci1sYXlvdXQtc3RhY2tlZCAuRm9vdGVyLWJ1c2luZXNzLWluZm8taXRlbSxcbi50d2Vhay1mb290ZXItbGF5b3V0LXN0YWNrZWQgLkZvb3Rlci1idXNpbmVzcy1ob3Vycy1oZWFkaW5nLFxuLnR3ZWFrLWZvb3Rlci1sYXlvdXQtc3RhY2tlZCAuRm9vdGVyLWJ1c2luZXNzLWhvdXJzLWl0ZW0sXG4udHdlYWstZm9vdGVyLWxheW91dC1zdGFja2VkIC5Gb290ZXItbmF2LWl0ZW0sXG4udHdlYWstZm9vdGVyLWxheW91dC1zdGFja2VkIC5Gb290ZXItbmF2LWZvbGRlci1pdGVtIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLnR3ZWFrLWZvb3Rlci1sYXlvdXQtc3RhY2tlZCAuRm9vdGVyLW5hdi1ncm91cCB7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cbi50d2Vhay1mb290ZXItbGF5b3V0LXN0YWNrZWQgLkZvb3Rlci1idXNpbmVzcy1pbmZvLFxuLnR3ZWFrLWZvb3Rlci1sYXlvdXQtc3RhY2tlZCAuRm9vdGVyLWJ1c2luZXNzLWhvdXJzLFxuLnR3ZWFrLWZvb3Rlci1sYXlvdXQtc3RhY2tlZCAuRm9vdGVyLW5hdixcbi50d2Vhay1mb290ZXItbGF5b3V0LXN0YWNrZWQgLkZvb3Rlci1ibG9ja3MtLW1pZGRsZSB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cbi50d2Vhay1mb290ZXItbGF5b3V0LXN0YWNrZWQgLkZvb3Rlci1idXNpbmVzcy1pbmZvLWl0ZW0tLW5hbWUsXG4udHdlYWstZm9vdGVyLWxheW91dC1zdGFja2VkIC5Gb290ZXItYnVzaW5lc3MtaW5mby1pdGVtLS1jb3VudHJ5LFxuLnR3ZWFrLWZvb3Rlci1sYXlvdXQtc3RhY2tlZCAuRm9vdGVyLWJ1c2luZXNzLWluZm8taXRlbS0tcGhvbmUsXG4udHdlYWstZm9vdGVyLWxheW91dC1zdGFja2VkIC5Gb290ZXItYnVzaW5lc3MtaG91cnMtaGVhZGluZyxcbi50d2Vhay1mb290ZXItbGF5b3V0LXN0YWNrZWQgLkZvb3Rlci1idXNpbmVzcy1ob3Vycy1pdGVtIHtcbiAgcGFkZGluZy1yaWdodDogMC42MThlbTtcbn1cbi50d2Vhay1mb290ZXItbGF5b3V0LXN0YWNrZWQgLkZvb3Rlci1idXNpbmVzcy1pbmZvLWl0ZW0tLW5hbWU6bGFzdC1jaGlsZCxcbi50d2Vhay1mb290ZXItbGF5b3V0LXN0YWNrZWQgLkZvb3Rlci1idXNpbmVzcy1pbmZvLWl0ZW0tLWNvdW50cnk6bGFzdC1jaGlsZCxcbi50d2Vhay1mb290ZXItbGF5b3V0LXN0YWNrZWQgLkZvb3Rlci1idXNpbmVzcy1pbmZvLWl0ZW0tLXBob25lOmxhc3QtY2hpbGQsXG4udHdlYWstZm9vdGVyLWxheW91dC1zdGFja2VkIC5Gb290ZXItYnVzaW5lc3MtaG91cnMtaGVhZGluZzpsYXN0LWNoaWxkLFxuLnR3ZWFrLWZvb3Rlci1sYXlvdXQtc3RhY2tlZCAuRm9vdGVyLWJ1c2luZXNzLWhvdXJzLWl0ZW06bGFzdC1jaGlsZCB7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG59XG4udHdlYWstZm9vdGVyLWxheW91dC1zdGFja2VkIC5Gb290ZXItbmF2LWl0ZW0sXG4udHdlYWstZm9vdGVyLWxheW91dC1zdGFja2VkIC5Gb290ZXItbmF2LWZvbGRlci1pdGVtIHtcbiAgcGFkZGluZy1yaWdodDogMWVtO1xufVxuLnR3ZWFrLWZvb3Rlci1sYXlvdXQtc3RhY2tlZCAuRm9vdGVyLW5hdiB7XG4gIG1hcmdpbi1yaWdodDogLTFlbTtcbn1cbi50d2Vhay1mb290ZXItbGF5b3V0LXN0YWNrZWQudHdlYWstZm9vdGVyLXN0YWNrZWQtYWxpZ25tZW50LWxlZnQgLkZvb3Rlci1idXNpbmVzcyxcbi50d2Vhay1mb290ZXItbGF5b3V0LXN0YWNrZWQudHdlYWstZm9vdGVyLXN0YWNrZWQtYWxpZ25tZW50LWxlZnQgLkZvb3Rlci1uYXYge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLnR3ZWFrLWZvb3Rlci1sYXlvdXQtc3RhY2tlZC50d2Vhay1mb290ZXItc3RhY2tlZC1hbGlnbm1lbnQtY2VudGVyIC5Gb290ZXItYnVzaW5lc3MsXG4udHdlYWstZm9vdGVyLWxheW91dC1zdGFja2VkLnR3ZWFrLWZvb3Rlci1zdGFja2VkLWFsaWdubWVudC1jZW50ZXIgLkZvb3Rlci1uYXYge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udHdlYWstZm9vdGVyLWxheW91dC1zdGFja2VkLnR3ZWFrLWZvb3Rlci1zdGFja2VkLWFsaWdubWVudC1yaWdodCAuRm9vdGVyLWJ1c2luZXNzLFxuLnR3ZWFrLWZvb3Rlci1sYXlvdXQtc3RhY2tlZC50d2Vhay1mb290ZXItc3RhY2tlZC1hbGlnbm1lbnQtcmlnaHQgLkZvb3Rlci1uYXYge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi50d2Vhay1mb290ZXItbGF5b3V0LWNvbHVtbnMgLkZvb3Rlci1pbm5lciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4udHdlYWstZm9vdGVyLWxheW91dC1jb2x1bW5zIC5Gb290ZXItYmxvY2tzLS10b3Age1xuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbn1cbi50d2Vhay1mb290ZXItbGF5b3V0LWNvbHVtbnMgLkZvb3Rlci1ibG9ja3MtLWJvdHRvbSB7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xufVxuLnR3ZWFrLWZvb3Rlci1sYXlvdXQtY29sdW1ucyAuRm9vdGVyLW1pZGRsZSB7XG4gIG1hcmdpbjogLTIwcHg7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnR3ZWFrLWZvb3Rlci1sYXlvdXQtY29sdW1ucyAuRm9vdGVyLWJ1c2luZXNzLWluZm8sXG4udHdlYWstZm9vdGVyLWxheW91dC1jb2x1bW5zIC5Gb290ZXItYnVzaW5lc3MtaG91cnMsXG4udHdlYWstZm9vdGVyLWxheW91dC1jb2x1bW5zIC5Gb290ZXItbmF2LWdyb3VwLFxuLnR3ZWFrLWZvb3Rlci1sYXlvdXQtY29sdW1ucyAuRm9vdGVyLWJsb2Nrcy0tbWlkZGxlIHtcbiAgcGFkZGluZzogMjBweDtcbn1cbi50d2Vhay1mb290ZXItbGF5b3V0LWNvbHVtbnMgLkZvb3Rlci1idXNpbmVzcyB7XG4gIC13ZWJraXQtYm94LWZsZXg6IDAgMCBhdXRvO1xuICAtbW96LWJveC1mbGV4OiAwIDAgYXV0bztcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcbiAgLW1zLWZsZXg6IDAgMCBhdXRvO1xuICAtd2Via2l0LWZsZXg6IDAgMCBhdXRvO1xuICBmbGV4OiAwIDAgYXV0bztcbn1cbi50d2Vhay1mb290ZXItbGF5b3V0LWNvbHVtbnMgLkZvb3Rlci1idXNpbmVzcy1pbmZvLFxuLnR3ZWFrLWZvb3Rlci1sYXlvdXQtY29sdW1ucyAuRm9vdGVyLWJ1c2luZXNzLWhvdXJzIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4udHdlYWstZm9vdGVyLWxheW91dC1jb2x1bW5zIC5Gb290ZXItYnVzaW5lc3MtaW5mby1pdGVtIHtcbiAgcGFkZGluZy1ib3R0b206IDAuMzgyZW07XG59XG4udHdlYWstZm9vdGVyLWxheW91dC1jb2x1bW5zIC5Gb290ZXItYnVzaW5lc3MtaW5mby1pdGVtLS1uYW1lIHtcbiAgcGFkZGluZy1ib3R0b206IDFlbTtcbn1cbi50d2Vhay1mb290ZXItbGF5b3V0LWNvbHVtbnMgLkZvb3Rlci1idXNpbmVzcy1pbmZvLWl0ZW0tLXBob25lIHtcbiAgcGFkZGluZy10b3A6IDAuNjE4ZW07XG59XG4udHdlYWstZm9vdGVyLWxheW91dC1jb2x1bW5zIC5Gb290ZXItYnVzaW5lc3MtaW5mby1pdGVtLS1lbWFpbCB7XG4gIG1heC13aWR0aDogMTBlbTtcbn1cbi50d2Vhay1mb290ZXItbGF5b3V0LWNvbHVtbnMgLkZvb3Rlci1idXNpbmVzcy1ob3Vycy1oZWFkaW5nIHtcbiAgcGFkZGluZy1ib3R0b206IDFlbTtcbn1cbi50d2Vhay1mb290ZXItbGF5b3V0LWNvbHVtbnMgLkZvb3Rlci1idXNpbmVzcy1ob3Vycy1pdGVtIHtcbiAgcGFkZGluZy1ib3R0b206IDAuNjE4ZW07XG59XG4udHdlYWstZm9vdGVyLWxheW91dC1jb2x1bW5zIC5Gb290ZXItbmF2IHtcbiAgbWluLXdpZHRoOiAwO1xuICAtd2Via2l0LWJveC1mbGV4OiAwIDEgYXV0bztcbiAgLW1vei1ib3gtZmxleDogMCAxIGF1dG87XG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gIC1tcy1mbGV4OiAwIDEgYXV0bztcbiAgLXdlYmtpdC1mbGV4OiAwIDEgYXV0bztcbiAgZmxleDogMCAxIGF1dG87XG59XG4udHdlYWstZm9vdGVyLWxheW91dC1jb2x1bW5zIC5Gb290ZXItbmF2LWdyb3VwIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4udHdlYWstZm9vdGVyLWxheW91dC1jb2x1bW5zIC5Gb290ZXItbmF2LWZvbGRlci1oZWFkaW5nLFxuLnR3ZWFrLWZvb3Rlci1sYXlvdXQtY29sdW1ucyAuRm9vdGVyLW5hdi1pdGVtLFxuLnR3ZWFrLWZvb3Rlci1sYXlvdXQtY29sdW1ucyAuRm9vdGVyLW5hdi1mb2xkZXItaXRlbSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtd2lkdGg6IDE2ZW07XG59XG4udHdlYWstZm9vdGVyLWxheW91dC1jb2x1bW5zIC5Gb290ZXItbmF2LWZvbGRlci1oZWFkaW5nIHtcbiAgcGFkZGluZy1ib3R0b206IDFlbTtcbn1cbi50d2Vhay1mb290ZXItbGF5b3V0LWNvbHVtbnMgLkZvb3Rlci1uYXYtaXRlbSxcbi50d2Vhay1mb290ZXItbGF5b3V0LWNvbHVtbnMgLkZvb3Rlci1uYXYtZm9sZGVyLWl0ZW0ge1xuICBwYWRkaW5nLWJvdHRvbTogMC42MThlbTtcbn1cbi50d2Vhay1mb290ZXItbGF5b3V0LWNvbHVtbnMgLkZvb3Rlci1ibG9ja3MtLW1pZGRsZSB7XG4gIC13ZWJraXQtYm94LWZsZXg6IDAgMCAzMyU7XG4gIC1tb3otYm94LWZsZXg6IDAgMCAzMyU7XG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gIC1tcy1mbGV4OiAwIDAgMzMlO1xuICAtd2Via2l0LWZsZXg6IDAgMCAzMyU7XG4gIGZsZXg6IDAgMCAzMyU7XG4gIC1tb3otYm94LW9yZGluYWwtZ3JvdXA6IDE7XG4gIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDE7XG4gIC1tcy1mbGV4LW9yZGVyOiAxO1xuICAtd2Via2l0LW9yZGVyOiAxO1xuICBvcmRlcjogMTtcbn1cbi50d2Vhay1mb290ZXItbGF5b3V0LWNvbHVtbnMgLkZvb3Rlci1ibG9ja3MtLW1pZGRsZS5lbXB0eTpub3QoLnZiYS1lZGl0aW5nKSB7XG4gIC13ZWJraXQtYm94LWZsZXg6IDAgMSAwcHg7XG4gIC1tb3otYm94LWZsZXg6IDAgMSAwcHg7XG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gIC1tcy1mbGV4OiAwIDEgMHB4O1xuICAtd2Via2l0LWZsZXg6IDAgMSAwcHg7XG4gIGZsZXg6IDAgMSAwcHg7XG59XG4udHdlYWstZm9vdGVyLWxheW91dC1jb2x1bW5zLnR3ZWFrLWZvb3Rlci1sYXlvdXQtY29sdW1ucy50d2Vhay1mb290ZXItYnVzaW5lc3MtaW5mby1zaG93Om5vdCgudHdlYWstZm9vdGVyLWxheW91dC1jb2x1bW5zLWF1dG8pIC5Gb290ZXItYnVzaW5lc3MtaW5mbyB7XG4gIHdpZHRoOiAxNjBweDtcbn1cbi50d2Vhay1mb290ZXItbGF5b3V0LWNvbHVtbnMudHdlYWstZm9vdGVyLWxheW91dC1jb2x1bW5zLnR3ZWFrLWZvb3Rlci1idXNpbmVzcy1ob3Vycy1zaG93Om5vdCgudHdlYWstZm9vdGVyLWxheW91dC1jb2x1bW5zLWF1dG8pIC5Gb290ZXItYnVzaW5lc3MtaG91cnMge1xuICB3aWR0aDogMTYwcHg7XG59XG4udHdlYWstZm9vdGVyLWxheW91dC1jb2x1bW5zLnR3ZWFrLWZvb3Rlci1sYXlvdXQtY29sdW1uczpub3QoLnR3ZWFrLWZvb3Rlci1sYXlvdXQtY29sdW1ucy1hdXRvKSAuRm9vdGVyLW5hdi1ncm91cCB7XG4gIHdpZHRoOiAxNjBweDtcbn1cbi50d2Vhay1mb290ZXItbGF5b3V0LWNvbHVtbnMgLkZvb3Rlci0tbWlkIC5Gb290ZXItYnVzaW5lc3MtaW5mbyxcbi50d2Vhay1mb290ZXItbGF5b3V0LWNvbHVtbnMgLkZvb3Rlci0tbWlkIC5Gb290ZXItYnVzaW5lc3MtaG91cnMge1xuICBmbG9hdDogbm9uZTtcbn1cbi50d2Vhay1mb290ZXItbGF5b3V0LWNvbHVtbnMgLkZvb3Rlci0tbWlkIC5Gb290ZXItbmF2LWdyb3VwIHtcbiAgd2lkdGg6IDEwZW07XG59XG4udHdlYWstZm9vdGVyLWxheW91dC1jb2x1bW5zIC5Gb290ZXItLW1pZCAuRm9vdGVyLWJsb2Nrcy0tbWlkZGxlIHtcbiAgLXdlYmtpdC1ib3gtZmxleDogMCAxIDMwMHB4O1xuICAtbW96LWJveC1mbGV4OiAwIDEgMzAwcHg7XG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gIC1tcy1mbGV4OiAwIDEgMzAwcHg7XG4gIC13ZWJraXQtZmxleDogMCAxIDMwMHB4O1xuICBmbGV4OiAwIDEgMzAwcHg7XG59XG4udHdlYWstZm9vdGVyLWxheW91dC1jb2x1bW5zIC5Gb290ZXItLW1pZCAuRm9vdGVyLWJsb2Nrcy0tbWlkZGxlLmVtcHR5Om5vdCgudmJhLWVkaXRpbmcpIHtcbiAgLXdlYmtpdC1ib3gtZmxleDogMCAxIDBweDtcbiAgLW1vei1ib3gtZmxleDogMCAxIDBweDtcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcbiAgLW1zLWZsZXg6IDAgMSAwcHg7XG4gIC13ZWJraXQtZmxleDogMCAxIDBweDtcbiAgZmxleDogMCAxIDBweDtcbn1cbi50d2Vhay1mb290ZXItbGF5b3V0LWNvbHVtbnMgLkZvb3Rlci0tbWlkLkZvb3Rlci0tY29tcGFjdCAuRm9vdGVyLW1pZGRsZSB7XG4gIG1hcmdpbjogMDtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi50d2Vhay1mb290ZXItbGF5b3V0LWNvbHVtbnMgLkZvb3Rlci0tbWlkLkZvb3Rlci0tY29tcGFjdCAuRm9vdGVyLWJ1c2luZXNzIHtcbiAgLXdlYmtpdC1ib3gtZmxleDogMCAwIGF1dG87XG4gIC1tb3otYm94LWZsZXg6IDAgMCBhdXRvO1xuICAtd2Via2l0LWJveC1mbGV4OiAxO1xuICAtbXMtZmxleDogMCAwIGF1dG87XG4gIC13ZWJraXQtZmxleDogMCAwIGF1dG87XG4gIGZsZXg6IDAgMCBhdXRvO1xufVxuLnR3ZWFrLWZvb3Rlci1sYXlvdXQtY29sdW1ucyAuRm9vdGVyLS1taWQuRm9vdGVyLS1jb21wYWN0IC5Gb290ZXItYnVzaW5lc3MtaW5mbyxcbi50d2Vhay1mb290ZXItbGF5b3V0LWNvbHVtbnMgLkZvb3Rlci0tbWlkLkZvb3Rlci0tY29tcGFjdCAuRm9vdGVyLWJ1c2luZXNzLWhvdXJzIHtcbiAgZmxvYXQ6IG5vbmU7XG59XG4udHdlYWstZm9vdGVyLWxheW91dC1jb2x1bW5zIC5Gb290ZXItLW1pZC5Gb290ZXItLWNvbXBhY3QgLkZvb3Rlci1idXNpbmVzcy1pbmZvLWl0ZW0tLWVtYWlsIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuLnR3ZWFrLWZvb3Rlci1sYXlvdXQtY29sdW1ucyAuRm9vdGVyLS1taWQuRm9vdGVyLS1jb21wYWN0IC5Gb290ZXItbmF2IHtcbiAgLXdlYmtpdC1ib3gtZmxleDogMCAwIGF1dG87XG4gIC1tb3otYm94LWZsZXg6IDAgMCBhdXRvO1xuICAtd2Via2l0LWJveC1mbGV4OiAxO1xuICAtbXMtZmxleDogMCAwIGF1dG87XG4gIC13ZWJraXQtZmxleDogMCAwIGF1dG87XG4gIGZsZXg6IDAgMCBhdXRvO1xufVxuLnR3ZWFrLWZvb3Rlci1sYXlvdXQtY29sdW1ucyAuRm9vdGVyLS1taWQuRm9vdGVyLS1jb21wYWN0IC5Gb290ZXItbmF2LWdyb3VwIHtcbiAgZmxvYXQ6IG5vbmU7XG4gIHdpZHRoOiBhdXRvO1xufVxuLnR3ZWFrLWZvb3Rlci1sYXlvdXQtY29sdW1ucyAuRm9vdGVyLS1taWQuRm9vdGVyLS1jb21wYWN0IC5Gb290ZXItbmF2LWZvbGRlci1oZWFkaW5nLFxuLnR3ZWFrLWZvb3Rlci1sYXlvdXQtY29sdW1ucyAuRm9vdGVyLS1taWQuRm9vdGVyLS1jb21wYWN0IC5Gb290ZXItbmF2LWl0ZW0sXG4udHdlYWstZm9vdGVyLWxheW91dC1jb2x1bW5zIC5Gb290ZXItLW1pZC5Gb290ZXItLWNvbXBhY3QgLkZvb3Rlci1uYXYtZm9sZGVyLWl0ZW0ge1xuICBtYXgtd2lkdGg6IG5vbmU7XG59XG4udHdlYWstZm9vdGVyLWxheW91dC1jb2x1bW5zIC5Gb290ZXItLW1pZC5Gb290ZXItLWNvbXBhY3QgLkZvb3Rlci1ibG9ja3MtLW1pZGRsZSB7XG4gIC13ZWJraXQtYm94LWZsZXg6IDAgMCBhdXRvO1xuICAtbW96LWJveC1mbGV4OiAwIDAgYXV0bztcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcbiAgLW1zLWZsZXg6IDAgMCBhdXRvO1xuICAtd2Via2l0LWZsZXg6IDAgMCBhdXRvO1xuICBmbGV4OiAwIDAgYXV0bztcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ3OXB4KSB7XG4gIC50d2Vhay1mb290ZXItbGF5b3V0LWNvbHVtbnM6bm90KC5oYXMtZm9vdGVyLW5hdikgLkZvb3Rlci1taWRkbGUge1xuICAgIG1hcmdpbjogMDtcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC50d2Vhay1mb290ZXItbGF5b3V0LWNvbHVtbnM6bm90KC5oYXMtZm9vdGVyLW5hdikgLkZvb3Rlci1idXNpbmVzcyB7XG4gICAgLXdlYmtpdC1ib3gtZmxleDogMCAwIGF1dG87XG4gICAgLW1vei1ib3gtZmxleDogMCAwIGF1dG87XG4gICAgLXdlYmtpdC1ib3gtZmxleDogMTtcbiAgICAtbXMtZmxleDogMCAwIGF1dG87XG4gICAgLXdlYmtpdC1mbGV4OiAwIDAgYXV0bztcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgfVxuICAudHdlYWstZm9vdGVyLWxheW91dC1jb2x1bW5zOm5vdCguaGFzLWZvb3Rlci1uYXYpIC5Gb290ZXItYnVzaW5lc3MtaW5mbyxcbiAgLnR3ZWFrLWZvb3Rlci1sYXlvdXQtY29sdW1uczpub3QoLmhhcy1mb290ZXItbmF2KSAuRm9vdGVyLWJ1c2luZXNzLWhvdXJzIHtcbiAgICBmbG9hdDogbm9uZTtcbiAgfVxuICAudHdlYWstZm9vdGVyLWxheW91dC1jb2x1bW5zOm5vdCguaGFzLWZvb3Rlci1uYXYpIC5Gb290ZXItYnVzaW5lc3MtaW5mby1pdGVtLS1lbWFpbCB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG4gIC50d2Vhay1mb290ZXItbGF5b3V0LWNvbHVtbnM6bm90KC5oYXMtZm9vdGVyLW5hdikgLkZvb3Rlci1uYXYge1xuICAgIC13ZWJraXQtYm94LWZsZXg6IDAgMCBhdXRvO1xuICAgIC1tb3otYm94LWZsZXg6IDAgMCBhdXRvO1xuICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gICAgLW1zLWZsZXg6IDAgMCBhdXRvO1xuICAgIC13ZWJraXQtZmxleDogMCAwIGF1dG87XG4gICAgZmxleDogMCAwIGF1dG87XG4gIH1cbiAgLnR3ZWFrLWZvb3Rlci1sYXlvdXQtY29sdW1uczpub3QoLmhhcy1mb290ZXItbmF2KSAuRm9vdGVyLW5hdi1ncm91cCB7XG4gICAgZmxvYXQ6IG5vbmU7XG4gICAgd2lkdGg6IGF1dG87XG4gIH1cbiAgLnR3ZWFrLWZvb3Rlci1sYXlvdXQtY29sdW1uczpub3QoLmhhcy1mb290ZXItbmF2KSAuRm9vdGVyLW5hdi1mb2xkZXItaGVhZGluZyxcbiAgLnR3ZWFrLWZvb3Rlci1sYXlvdXQtY29sdW1uczpub3QoLmhhcy1mb290ZXItbmF2KSAuRm9vdGVyLW5hdi1pdGVtLFxuICAudHdlYWstZm9vdGVyLWxheW91dC1jb2x1bW5zOm5vdCguaGFzLWZvb3Rlci1uYXYpIC5Gb290ZXItbmF2LWZvbGRlci1pdGVtIHtcbiAgICBtYXgtd2lkdGg6IG5vbmU7XG4gIH1cbiAgLnR3ZWFrLWZvb3Rlci1sYXlvdXQtY29sdW1uczpub3QoLmhhcy1mb290ZXItbmF2KSAuRm9vdGVyLWJsb2Nrcy0tbWlkZGxlIHtcbiAgICAtd2Via2l0LWJveC1mbGV4OiAwIDAgYXV0bztcbiAgICAtbW96LWJveC1mbGV4OiAwIDAgYXV0bztcbiAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xuICAgIC1tcy1mbGV4OiAwIDAgYXV0bztcbiAgICAtd2Via2l0LWZsZXg6IDAgMCBhdXRvO1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODBweCkgYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XG4gIC50d2Vhay1mb290ZXItbGF5b3V0LWNvbHVtbnM6bm90KC5oYXMtZm9vdGVyLW5hdikgLkZvb3Rlci1uYXYtZ3JvdXAge1xuICAgIHdpZHRoOiAxMGVtO1xuICB9XG4gIC50d2Vhay1mb290ZXItbGF5b3V0LWNvbHVtbnM6bm90KC5oYXMtZm9vdGVyLW5hdikgLkZvb3Rlci1ibG9ja3MtLW1pZGRsZSB7XG4gICAgLXdlYmtpdC1ib3gtZmxleDogMCAxIDMwMHB4O1xuICAgIC1tb3otYm94LWZsZXg6IDAgMSAzMDBweDtcbiAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xuICAgIC1tcy1mbGV4OiAwIDEgMzAwcHg7XG4gICAgLXdlYmtpdC1mbGV4OiAwIDEgMzAwcHg7XG4gICAgZmxleDogMCAxIDMwMHB4O1xuICB9XG4gIC50d2Vhay1mb290ZXItbGF5b3V0LWNvbHVtbnM6bm90KC5oYXMtZm9vdGVyLW5hdikgLkZvb3Rlci1ibG9ja3MtLW1pZGRsZS5lbXB0eTpub3QoLnZiYS1lZGl0aW5nKSB7XG4gICAgLXdlYmtpdC1ib3gtZmxleDogMCAxIDBweDtcbiAgICAtbW96LWJveC1mbGV4OiAwIDEgMHB4O1xuICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gICAgLW1zLWZsZXg6IDAgMSAwcHg7XG4gICAgLXdlYmtpdC1mbGV4OiAwIDEgMHB4O1xuICAgIGZsZXg6IDAgMSAwcHg7XG4gIH1cbn1cbi5tZW51LWJsb2NrIC5tZW51LXN0eWxlLWNsYXNzaWMgLm1lbnUtc2VsZWN0b3IsXG4ubWVudS1ibG9jayAubWVudS1zdHlsZS1jbGFzc2ljIC5tZW51LWhlYWRlcixcbi5tZW51LWJsb2NrIC5tZW51LXN0eWxlLWNsYXNzaWMgLm1lbnUtc2VjdGlvbi10aXRsZSxcbi5tZW51LWJsb2NrIC5tZW51LXN0eWxlLWNsYXNzaWMgLm1lbnUtc2VjdGlvbi1kZXNjcmlwdGlvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.date = new Date(),
            this.year = this.date.getFullYear();
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.less */ "./src/app/components/footer/footer.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"Header Header--bottom Header--overlay\">\n  <div class=\"Header-inner Header-inner--bottom\">\n    <div data-nc-container=\"bottom-left\">\n      <nav class=\"Header-nav Header-nav--primary\" data-nc-element=\"primary-nav\" data-content-field=\"navigation\">\n          <div class=\"Header-nav-inner\">\n            <button mat-icon-button (click)=\"openMenu()\" [matMenuTriggerFor]=\"appMenu\" fxShow=\"true\" fxHide.gt-xs>\n              <mat-icon class=\"white-icon\">{{icon}}</mat-icon>\n            </button>\n            <span class=\"menu-spacer\"></span>\n            <div fxShow=\"true\" fxHide.lt-sm>\n              <!-- The following menu items will be hidden on both SM and XS screen sizes -->\n              <a class=\"Header-nav-item\" [routerLink]=\"['/home']\">Home</a>\n              <a class=\"Header-nav-item\" [routerLink]=\"['/resume']\">Resume</a>\n              <a class=\"Header-nav-item\" [routerLink]=\"['/devdiagram']\">Development Skills</a>\n              <a class=\"Header-nav-item\" [routerLink]=\"['/sysdiagram']\">System Skills</a>\n              <a class=\"Header-nav-item\" [routerLink]=\"['/diagram']\">Extra Skills</a>\n            </div>\n            <mat-menu class=\"app-menu\" #appMenu=\"matMenu\" fxFlexFill>\n              <button class=\"hover-effect\" mat-button [routerLink]=\"['/home']\">Home</button>\n              <button class=\"hover-effect\" mat-button [routerLink]=\"['/resume']\">Resume</button>\n              <button class=\"hover-effect\" mat-button [routerLink]=\"['/devdiagram']\">Development Skills</button>\n              <button class=\"hover-effect\" mat-button [routerLink]=\"['/sysdiagram']\">System Skills</button>\n              <button class=\"hover-effect\" mat-button [routerLink]=\"['/diagram']\">Extra Skills</button>\n            </mat-menu>\n          </div>\n      </nav>\n    </div>\n    <div data-nc-container=\"bottom-center\">\n    </div>\n    <div data-nc-container=\"bottom-right\">\n      <div class=\"logo\">\n        <a [routerLink]=\"['/home']\"><img src=\"/assets/img/computhand.png\" alt=\"logo\"/></a>\n      </div>\n    </div>\n  </div>\n</header>\n"

/***/ }),

/***/ "./src/app/components/header/header.component.less":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.less ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".Header [data-nc-element] {\n  padding: 10px 10px;\n}\n.Header-inner {\n  box-sizing: border-box;\n  padding-left: 50px;\n  padding-right: 50px;\n}\n.Header-inner {\n  box-sizing: border-box;\n  padding-left: 50px;\n  padding-right: 50px;\n}\n@media screen and (max-width: 960px) {\n  .Header-inner {\n    padding-left: 38px;\n    padding-right: 38px;\n  }\n}\n@media screen and (max-width: 768px) {\n  .Header-inner {\n    padding-left: 26px;\n    padding-right: 26px;\n  }\n}\n@media screen and (max-width: 640px) {\n  .Header-inner {\n    padding-left: 10px;\n    padding-right: 10px;\n  }\n}\n.Header-inner--bottom {\n  padding-top: 20px;\n}\n.Header.Header--bottom {\n  min-height: 112px;\n}\n.Header--bottom.Header--overlay {\n  box-sizing: border-box;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: transparent;\n  z-index: 1000;\n  width: 100%;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.Header-nav {\n  white-space: nowrap;\n  line-height: 1em;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: 700;\n  font-size: 14px;\n  letter-spacing: 0em;\n  font-family: proxima-nova;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 13px;\n  letter-spacing: 0.15em;\n  text-transform: uppercase;\n}\n.Header-nav-item {\n  display: inline-block;\n  vertical-align: middle;\n  color: #FFF;\n}\n@media only screen and (min-width: 850px) {\n  .Header-nav--primary .Header-nav-item,\n  .Header-nav--secondary .Header-nav-item {\n    padding: 12px 18px;\n    margin: 0.618em 1em;\n  }\n}\n@media only screen and (max-width: 885px) {\n  .Header .Header-nav .Header-nav-item {\n    font-size: 12px;\n    margin: 0 0.6em;\n  }\n}\n.menu-spacer {\n  flex: 1 1 auto;\n}\n.white-icon {\n  color: white;\n}\n.mat-menu-panel.app-menu {\n  min-width: 112px;\n  max-width: 152px;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n  max-height: calc(100vh - 48px);\n  border-radius: 4px;\n  outline: 0;\n}\n.hover-effect.mat-button:hover .mat-button-focus-overlay {\n  opacity: 0.3;\n  min-width: 152px;\n}\n@media only screen and (min-width: 1200px) {\n  .logo img {\n    float: right;\n    position: absolute;\n    top: 15%;\n    left: 75%;\n  }\n}\n@media only screen and (min-width: 601px) and (max-width: 1199px) {\n  .logo img {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .logo img {\n    float: right;\n    position: absolute;\n    top: 15%;\n    left: 50%;\n  }\n}\n@media only screen and (max-width: 370px) {\n  .logo img {\n    display: none;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dhbGxhY2UvRGV2L1dvcmtzcGFjZS9wcmVzZW50YXRpb25XZWJTaXRlL3NyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRyxtQkFBQTtDQ0NGO0FEQ0Q7RUFHRyx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7Q0NDRjtBRENEO0VBR0csdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0NDQ0Y7QURDRDtFQUNHO0lBQ0ksbUJBQUE7SUFDQSxvQkFBQTtHQ0NKO0NBQ0Y7QURDRDtFQUNHO0lBQ0ksbUJBQUE7SUFDQSxvQkFBQTtHQ0NKO0NBQ0Y7QURDRDtFQUNHO0lBQ0ksbUJBQUE7SUFDQSxvQkFBQTtHQ0NKO0NBQ0Y7QURDRDtFQUNHLGtCQUFBO0NDQ0Y7QURDRDtFQUNHLGtCQUFBO0NDQ0Y7QURDRDtFQUdJLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0NDQ0g7QURDRDtFQUNHLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtDQ0NGO0FEQ0Q7RUFDRyxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtDQ0NGO0FEQ0Q7RUFDRTs7SUFFRyxtQkFBQTtJQUNBLG9CQUFBO0dDQ0Y7Q0FDRjtBRENEO0VBQ0c7SUFDSSxnQkFBQTtJQUNBLGdCQUFBO0dDQ0o7Q0FDRjtBRENEO0VBQ0UsZUFBQTtDQ0NEO0FEQ0Q7RUFDSSxhQUFBO0NDQ0g7QURDRDtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0NBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtDQ0NIO0FEQ0Q7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7Q0NDRDtBREVEO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSxTQUFBO0lBQ0EsVUFBQTtHQ0FEO0NBQ0Y7QURFRDtFQUNFO0lBQ0UsZUFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7R0NBRDtDQUNGO0FERUQ7RUFDRTtJQUNFLGFBQUE7SUFDQSxtQkFBQTtJQUNBLFNBQUE7SUFDQSxVQUFBO0dDQUQ7Q0FDRjtBREVEO0VBQ0U7SUFDRSxjQUFBO0dDQUQ7Q0FDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5IZWFkZXIgW2RhdGEtbmMtZWxlbWVudF17XG4gICBwYWRkaW5nOjEwcHggMTBweDtcbn1cbi5IZWFkZXItaW5uZXJ7XG4gICAtd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtcbiAgIC1tb3otYm94LXNpemluZzpib3JkZXItYm94O1xuICAgYm94LXNpemluZzpib3JkZXItYm94O1xuICAgcGFkZGluZy1sZWZ0OjUwcHg7XG4gICBwYWRkaW5nLXJpZ2h0OjUwcHg7XG59XG4uSGVhZGVyLWlubmVye1xuICAgLXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7XG4gICAtbW96LWJveC1zaXppbmc6Ym9yZGVyLWJveDtcbiAgIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcbiAgIHBhZGRpbmctbGVmdDo1MHB4O1xuICAgcGFkZGluZy1yaWdodDo1MHB4XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk2MHB4KXtcbiAgIC5IZWFkZXItaW5uZXJ7XG4gICAgICAgcGFkZGluZy1sZWZ0OjM4cHg7XG4gICAgICAgcGFkZGluZy1yaWdodDozOHB4O1xuICAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCl7XG4gICAuSGVhZGVyLWlubmVye1xuICAgICAgIHBhZGRpbmctbGVmdDoyNnB4O1xuICAgICAgIHBhZGRpbmctcmlnaHQ6MjZweDtcbiAgIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjQwcHgpe1xuICAgLkhlYWRlci1pbm5lcntcbiAgICAgICBwYWRkaW5nLWxlZnQ6MTBweDtcbiAgICAgICBwYWRkaW5nLXJpZ2h0OjEwcHg7XG4gICB9XG59XG4uSGVhZGVyLWlubmVyLS1ib3R0b217XG4gICBwYWRkaW5nLXRvcDoyMHB4O1xufVxuLkhlYWRlci5IZWFkZXItLWJvdHRvbXtcbiAgIG1pbi1oZWlnaHQ6MTEycHg7XG59XG4uSGVhZGVyLS1ib3R0b20uSGVhZGVyLS1vdmVybGF5e1xuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgei1pbmRleDogMTAwMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuLkhlYWRlci1uYXZ7XG4gICB3aGl0ZS1zcGFjZTpub3dyYXA7XG4gICBsaW5lLWhlaWdodDoxZW07XG4gICBmb250LWZhbWlseTpBcmlhbCxIZWx2ZXRpY2Esc2Fucy1zZXJpZjtcbiAgIGZvbnQtd2VpZ2h0OjcwMDtcbiAgIGZvbnQtc2l6ZToxNHB4O1xuICAgbGV0dGVyLXNwYWNpbmc6MGVtO1xuICAgZm9udC1mYW1pbHk6cHJveGltYS1ub3ZhO1xuICAgZm9udC13ZWlnaHQ6NDAwO1xuICAgZm9udC1zdHlsZTpub3JtYWw7XG4gICBmb250LXNpemU6MTNweDtcbiAgIGxldHRlci1zcGFjaW5nOi4xNWVtO1xuICAgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xufVxuLkhlYWRlci1uYXYtaXRlbXtcbiAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgdmVydGljYWwtYWxpZ246bWlkZGxlO1xuICAgY29sb3I6I0ZGRjtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo4NTBweCl7XG4gIC5IZWFkZXItbmF2LS1wcmltYXJ5IC5IZWFkZXItbmF2LWl0ZW0sXG4gIC5IZWFkZXItbmF2LS1zZWNvbmRhcnkgLkhlYWRlci1uYXYtaXRlbXtcbiAgICAgcGFkZGluZzoxMnB4IDE4cHg7XG4gICAgIG1hcmdpbjouNjE4ZW0gMWVtXG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo4ODVweCl7XG4gICAuSGVhZGVyIC5IZWFkZXItbmF2IC5IZWFkZXItbmF2LWl0ZW17XG4gICAgICAgZm9udC1zaXplOjEycHg7XG4gICAgICAgbWFyZ2luOjAgLjZlbTtcbiAgIH1cbn1cbi5tZW51LXNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuLndoaXRlLWljb24ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi5tYXQtbWVudS1wYW5lbC5hcHAtbWVudSB7XG4gICAgbWluLXdpZHRoOiAxMTJweDtcbiAgICBtYXgtd2lkdGg6IDE1MnB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDhweCk7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG91dGxpbmU6IDA7XG59XG4uaG92ZXItZWZmZWN0Lm1hdC1idXR0b246aG92ZXIgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheXtcbiAgb3BhY2l0eTowLjM7XG4gIG1pbi13aWR0aDoxNTJweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEyMDBweCl7XG4gIC5sb2dvIGltZyB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE1JTtcbiAgICBsZWZ0OiA3NSU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo2MDFweCkgYW5kIChtYXgtd2lkdGg6IDExOTlweCl7XG4gIC5sb2dvIGltZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjAwcHgpe1xuICAubG9nbyBpbWcge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxNSU7XG4gICAgbGVmdDogNTAlO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MzcwcHgpe1xuICAubG9nbyBpbWcge1xuICAgIGRpc3BsYXk6bm9uZTtcbiAgfVxufVxuIiwiLkhlYWRlciBbZGF0YS1uYy1lbGVtZW50XSB7XG4gIHBhZGRpbmc6IDEwcHggMTBweDtcbn1cbi5IZWFkZXItaW5uZXIge1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xufVxuLkhlYWRlci1pbm5lciB7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuICAuSGVhZGVyLWlubmVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDM4cHg7XG4gICAgcGFkZGluZy1yaWdodDogMzhweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLkhlYWRlci1pbm5lciB7XG4gICAgcGFkZGluZy1sZWZ0OiAyNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDI2cHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gIC5IZWFkZXItaW5uZXIge1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICB9XG59XG4uSGVhZGVyLWlubmVyLS1ib3R0b20ge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cbi5IZWFkZXIuSGVhZGVyLS1ib3R0b20ge1xuICBtaW4taGVpZ2h0OiAxMTJweDtcbn1cbi5IZWFkZXItLWJvdHRvbS5IZWFkZXItLW92ZXJsYXkge1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB6LWluZGV4OiAxMDAwO1xuICB3aWR0aDogMTAwJTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG4uSGVhZGVyLW5hdiB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGxpbmUtaGVpZ2h0OiAxZW07XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwZW07XG4gIGZvbnQtZmFtaWx5OiBwcm94aW1hLW5vdmE7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsZXR0ZXItc3BhY2luZzogMC4xNWVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLkhlYWRlci1uYXYtaXRlbSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgY29sb3I6ICNGRkY7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDg1MHB4KSB7XG4gIC5IZWFkZXItbmF2LS1wcmltYXJ5IC5IZWFkZXItbmF2LWl0ZW0sXG4gIC5IZWFkZXItbmF2LS1zZWNvbmRhcnkgLkhlYWRlci1uYXYtaXRlbSB7XG4gICAgcGFkZGluZzogMTJweCAxOHB4O1xuICAgIG1hcmdpbjogMC42MThlbSAxZW07XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODg1cHgpIHtcbiAgLkhlYWRlciAuSGVhZGVyLW5hdiAuSGVhZGVyLW5hdi1pdGVtIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbWFyZ2luOiAwIDAuNmVtO1xuICB9XG59XG4ubWVudS1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cbi53aGl0ZS1pY29uIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm1hdC1tZW51LXBhbmVsLmFwcC1tZW51IHtcbiAgbWluLXdpZHRoOiAxMTJweDtcbiAgbWF4LXdpZHRoOiAxNTJweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDQ4cHgpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG91dGxpbmU6IDA7XG59XG4uaG92ZXItZWZmZWN0Lm1hdC1idXR0b246aG92ZXIgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XG4gIG9wYWNpdHk6IDAuMztcbiAgbWluLXdpZHRoOiAxNTJweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5sb2dvIGltZyB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE1JTtcbiAgICBsZWZ0OiA3NSU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAxcHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgLmxvZ28gaW1nIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmxvZ28gaW1nIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTUlO1xuICAgIGxlZnQ6IDUwJTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzBweCkge1xuICAubG9nbyBpbWcge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.icon = 'menu';
        this.opened = false;
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent.prototype.openMenu = function () {
        var _this = this;
        this.trigger.openMenu();
        this.trigger.menuClosed.subscribe(function () { return _this.icon = 'menu'; });
        this.icon = 'close';
        this.opened = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuTrigger"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuTrigger"])
    ], HeaderComponent.prototype, "trigger", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.less */ "./src/app/components/header/header.component.less")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"Index\" data-controller=\"IndexFirstSectionHeight, Parallax, IndexNavigation\">\n   <section id=\"resume-header\" class=\"Index-page Index-page--has-image\"  data-parallax-original-element data-edit-main-image=\"Background\">\n      <div class=\"Index-page-content  vba-alternate-block-style-container\">\n         <div class=\"vba-layout vba-grid-12 columns-12\" data-type=\"page\">\n            <div class=\"row vba-row\">\n               <div class=\"col vba-col-12 span-12\">\n                  <div class=\"vba-block html-block vba-block-html\" data-block-type=\"2\">\n                     <div class=\"vba-block-content\">\n                        <h1></h1>\n                        <h2>Lead Technique Java J2EE/Angular</h2>\n                        <p i18n=\"@@contactTitle\">\n                          1375 103e Avenue<br/>\n                          G9P 1H1 Shawinigan, QC<br/>\n                          vincent.baylly@computhand.com<br/>\n                        </p>\n                     </div>\n                  </div>\n               </div>\n            </div>\n         </div>\n      </div>\n   </section>\n   <section id=\"resume-content\" class=\"Index-page\" data-edit-main-image=\"Background\">\n      <div class=\"Index-page-content \">\n        <div class=\"row vba-row\">\n           <div class=\"col vba-col-12 span-12\">\n              <div class=\"vba-block html-block vba-block-html\" data-block-type=\"2\">\n                 <div class=\"vba-block-content\">\n                    <p>Having more than 10 years in IT computing especially in web domain, my last experience provides me the skill to give more than just development expertise. I am today able to lead interviews, provide technical and architectural advices, manage a team and add technical analysis in my deliveries. These past expériences allow me to open my own business today. I am looking for IT contracts to offer my skills more efficiently.</p>\n                    <h3>My gitHub with some of my personal project: <a href=\"https://github.com/vincentBaylly\" target=\"_blank\">GitHub - vincentBaylly</a></h3>\n                 </div>\n              </div>\n           </div>\n        </div>\n      </div>\n   </section>\n</main>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.less":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.less ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.less */ "./src/app/components/home/home.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/license/license.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/license/license.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Apache License\nVersion 2.0, January 2004\n<a href=\"http://www.apache.org/licenses/\" rel=\"nofollow\">http://www.apache.org/licenses/</a></p>\n<p>TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION</p>\n<ol>\n<li>Definitions.</li>\n</ol>\n<p>\"License\" shall mean the terms and conditions for use, reproduction,\nand distribution as defined by Sections 1 through 9 of this document.</p>\n<p>\"Licensor\" shall mean the copyright owner or entity authorized by\nthe copyright owner that is granting the License.</p>\n<p>\"Legal Entity\" shall mean the union of the acting entity and all\nother entities that control, are controlled by, or are under common\ncontrol with that entity. For the purposes of this definition,\n\"control\" means (i) the power, direct or indirect, to cause the\ndirection or management of such entity, whether by contract or\notherwise, or (ii) ownership of fifty percent (50%) or more of the\noutstanding shares, or (iii) beneficial ownership of such entity.</p>\n<p>\"You\" (or \"Your\") shall mean an individual or Legal Entity\nexercising permissions granted by this License.</p>\n<p>\"Source\" form shall mean the preferred form for making modifications,\nincluding but not limited to software source code, documentation\nsource, and configuration files.</p>\n<p>\"Object\" form shall mean any form resulting from mechanical\ntransformation or translation of a Source form, including but\nnot limited to compiled object code, generated documentation,\nand conversions to other media types.</p>\n<p>\"Work\" shall mean the work of authorship, whether in Source or\nObject form, made available under the License, as indicated by a\ncopyright notice that is included in or attached to the work\n(an example is provided in the Appendix below).</p>\n<p>\"Derivative Works\" shall mean any work, whether in Source or Object\nform, that is based on (or derived from) the Work and for which the\neditorial revisions, annotations, elaborations, or other modifications\nrepresent, as a whole, an original work of authorship. For the purposes\nof this License, Derivative Works shall not include works that remain\nseparable from, or merely link (or bind by name) to the interfaces of,\nthe Work and Derivative Works thereof.</p>\n<p>\"Contribution\" shall mean any work of authorship, including\nthe original version of the Work and any modifications or additions\nto that Work or Derivative Works thereof, that is intentionally\nsubmitted to Licensor for inclusion in the Work by the copyright owner\nor by an individual or Legal Entity authorized to submit on behalf of\nthe copyright owner. For the purposes of this definition, \"submitted\"\nmeans any form of electronic, verbal, or written communication sent\nto the Licensor or its representatives, including but not limited to\ncommunication on electronic mailing lists, source code control systems,\nand issue tracking systems that are managed by, or on behalf of, the\nLicensor for the purpose of discussing and improving the Work, but\nexcluding communication that is conspicuously marked or otherwise\ndesignated in writing by the copyright owner as \"Not a Contribution.\"</p>\n<p>\"Contributor\" shall mean Licensor and any individual or Legal Entity\non behalf of whom a Contribution has been received by Licensor and\nsubsequently incorporated within the Work.</p>\n<ol start=\"2\">\n<li>\n<p>Grant of Copyright License. Subject to the terms and conditions of\nthis License, each Contributor hereby grants to You a perpetual,\nworldwide, non-exclusive, no-charge, royalty-free, irrevocable\ncopyright license to reproduce, prepare Derivative Works of,\npublicly display, publicly perform, sublicense, and distribute the\nWork and such Derivative Works in Source or Object form.</p>\n</li>\n<li>\n<p>Grant of Patent License. Subject to the terms and conditions of\nthis License, each Contributor hereby grants to You a perpetual,\nworldwide, non-exclusive, no-charge, royalty-free, irrevocable\n(except as stated in this section) patent license to make, have made,\nuse, offer to sell, sell, import, and otherwise transfer the Work,\nwhere such license applies only to those patent claims licensable\nby such Contributor that are necessarily infringed by their\nContribution(s) alone or by combination of their Contribution(s)\nwith the Work to which such Contribution(s) was submitted. If You\ninstitute patent litigation against any entity (including a\ncross-claim or counterclaim in a lawsuit) alleging that the Work\nor a Contribution incorporated within the Work constitutes direct\nor contributory patent infringement, then any patent licenses\ngranted to You under this License for that Work shall terminate\nas of the date such litigation is filed.</p>\n</li>\n<li>\n<p>Redistribution. You may reproduce and distribute copies of the\nWork or Derivative Works thereof in any medium, with or without\nmodifications, and in Source or Object form, provided that You\nmeet the following conditions:</p>\n</li>\n</ol>\n<p>(a) You must give any other recipients of the Work or\nDerivative Works a copy of this License; and</p>\n<p>(b) You must cause any modified files to carry prominent notices\nstating that You changed the files; and</p>\n<p>(c) You must retain, in the Source form of any Derivative Works\nthat You distribute, all copyright, patent, trademark, and\nattribution notices from the Source form of the Work,\nexcluding those notices that do not pertain to any part of\nthe Derivative Works; and</p>\n<p>(d) If the Work includes a \"NOTICE\" text file as part of its\ndistribution, then any Derivative Works that You distribute must\ninclude a readable copy of the attribution notices contained\nwithin such NOTICE file, excluding those notices that do not\npertain to any part of the Derivative Works, in at least one\nof the following places: within a NOTICE text file distributed\nas part of the Derivative Works; within the Source form or\ndocumentation, if provided along with the Derivative Works; or,\nwithin a display generated by the Derivative Works, if and\nwherever such third-party notices normally appear. The contents\nof the NOTICE file are for informational purposes only and\ndo not modify the License. You may add Your own attribution\nnotices within Derivative Works that You distribute, alongside\nor as an addendum to the NOTICE text from the Work, provided\nthat such additional attribution notices cannot be construed\nas modifying the License.</p>\n<p>You may add Your own copyright statement to Your modifications and\nmay provide additional or different license terms and conditions\nfor use, reproduction, or distribution of Your modifications, or\nfor any such Derivative Works as a whole, provided Your use,\nreproduction, and distribution of the Work otherwise complies with\nthe conditions stated in this License.</p>\n<ol start=\"5\">\n<li>\n<p>Submission of Contributions. Unless You explicitly state otherwise,\nany Contribution intentionally submitted for inclusion in the Work\nby You to the Licensor shall be under the terms and conditions of\nthis License, without any additional terms or conditions.\nNotwithstanding the above, nothing herein shall supersede or modify\nthe terms of any separate license agreement you may have executed\nwith Licensor regarding such Contributions.</p>\n</li>\n<li>\n<p>Trademarks. This License does not grant permission to use the trade\nnames, trademarks, service marks, or product names of the Licensor,\nexcept as required for reasonable and customary use in describing the\norigin of the Work and reproducing the content of the NOTICE file.</p>\n</li>\n<li>\n<p>Disclaimer of Warranty. Unless required by applicable law or\nagreed to in writing, Licensor provides the Work (and each\nContributor provides its Contributions) on an \"AS IS\" BASIS,\nWITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or\nimplied, including, without limitation, any warranties or conditions\nof TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A\nPARTICULAR PURPOSE. You are solely responsible for determining the\nappropriateness of using or redistributing the Work and assume any\nrisks associated with Your exercise of permissions under this License.</p>\n</li>\n<li>\n<p>Limitation of Liability. In no event and under no legal theory,\nwhether in tort (including negligence), contract, or otherwise,\nunless required by applicable law (such as deliberate and grossly\nnegligent acts) or agreed to in writing, shall any Contributor be\nliable to You for damages, including any direct, indirect, special,\nincidental, or consequential damages of any character arising as a\nresult of this License or out of the use or inability to use the\nWork (including but not limited to damages for loss of goodwill,\nwork stoppage, computer failure or malfunction, or any and all\nother commercial damages or losses), even if such Contributor\nhas been advised of the possibility of such damages.</p>\n</li>\n<li>\n<p>Accepting Warranty or Additional Liability. While redistributing\nthe Work or Derivative Works thereof, You may choose to offer,\nand charge a fee for, acceptance of support, warranty, indemnity,\nor other liability obligations and/or rights consistent with this\nLicense. However, in accepting such obligations, You may act only\non Your own behalf and on Your sole responsibility, not on behalf\nof any other Contributor, and only if You agree to indemnify,\ndefend, and hold each Contributor harmless for any liability\nincurred by, or claims asserted against, such Contributor by reason\nof your accepting any such warranty or additional liability.</p>\n</li>\n</ol>\n<p>END OF TERMS AND CONDITIONS</p>\n<p>APPENDIX: How to apply the Apache License to your work.</p>\n<p>To apply the Apache License to your work, attach the following\nboilerplate notice, with the fields enclosed by brackets \"{{'{'}}{{'}'}}\"\nreplaced with your own identifying information. (Don't include\nthe brackets!)  The text should be enclosed in the appropriate\ncomment syntax for the file format. We also recommend that a\nfile or class name and description of purpose be included on the\nsame \"printed page\" as the copyright notice for easier\nidentification within third-party archives.</p>\n<p>Copyright {{'{'}}yyyy{{'}'}} {{'{'}}name of copyright owner{{'}'}}</p>\n<p>Licensed under the Apache License, Version 2.0 (the \"License\");\nyou may not use this file except in compliance with the License.\nYou may obtain a copy of the License at</p>\n<p><a href=\"http://www.apache.org/licenses/LICENSE-2.0\" rel=\"nofollow\">http://www.apache.org/licenses/LICENSE-2.0</a></p>\n<p>Unless required by applicable law or agreed to in writing, software\ndistributed under the License is distributed on an \"AS IS\" BASIS,\nWITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\nSee the License for the specific language governing permissions and\nlimitations under the License.</p>\n"

/***/ }),

/***/ "./src/app/components/license/license.component.less":
/*!***********************************************************!*\
  !*** ./src/app/components/license/license.component.less ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGljZW5zZS9saWNlbnNlLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/components/license/license.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/license/license.component.ts ***!
  \*********************************************************/
/*! exports provided: LicenseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LicenseComponent", function() { return LicenseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LicenseComponent = /** @class */ (function () {
    function LicenseComponent() {
    }
    LicenseComponent.prototype.ngOnInit = function () {
    };
    LicenseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-license',
            template: __webpack_require__(/*! ./license.component.html */ "./src/app/components/license/license.component.html"),
            styles: [__webpack_require__(/*! ./license.component.less */ "./src/app/components/license/license.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], LicenseComponent);
    return LicenseComponent;
}());



/***/ }),

/***/ "./src/app/components/resume/resume.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/resume/resume.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"Index\" data-controller=\"IndexFirstSectionHeight, Parallax, IndexNavigation\">\n   <section id=\"resume-header\" class=\"Index-page Index-page--has-image\"  data-parallax-original-element data-edit-main-image=\"Background\">\n      <div class=\"Index-page-content  vba-alternate-block-style-container\">\n         <div class=\"vba-layout vba-grid-12 columns-12\" data-type=\"page\">\n            <div class=\"row vba-row\">\n               <div class=\"col vba-col-12 span-12\">\n                  <div class=\"vba-block html-block vba-block-html\" data-block-type=\"2\">\n                     <div class=\"vba-block-content\">\n                        <h1></h1>\n                        <h2 class=\"text-align-center\">Download My Resume, Here</h2>\n                     </div>\n                  </div>\n                  <div class=\"vba-block button-block vba-block-button\" data-block-type=\"53\">\n                     <div class=\"vba-block-content\">\n                        <div class=\"vba-block-button-container--center\" data-alignment=\"center\" data-button-size=\"medium\">\n                           <a href=\"/assets/doc/CV-VBaylly-EN.pdf\" class=\"vba-block-button-element--medium vba-block-button-element\" target=\"_self\" download>Download Resume</a>\n                        </div>\n                     </div>\n                  </div>\n               </div>\n            </div>\n         </div>\n      </div>\n   </section>\n   <section id=\"resume-content\" class=\"Index-page\" data-edit-main-image=\"Background\">\n      <div class=\"Index-page-content \">\n         <div class=\"vba-layout vba-grid-12 columns-12\" data-type=\"page\">\n            <div class=\"row vba-row\">\n               <div class=\"col vba-col-12 span-12\">\n                  <div class=\"row vba-row\">\n                     <div class=\"col vba-col-4 span-4\">\n                        <div class=\"vba-block html-block vba-block-html\" data-block-type=\"2\">\n                           <div class=\"vba-block-content\">\n                              <h2>Development</h2>\n                           </div>\n                        </div>\n                     </div>\n                     <div class=\"col vba-col-8 span-8\">\n                        <div class=\"row vba-row\">\n                           <div class=\"col vba-col-5 span-5\">\n                              <div class=\"vba-block html-block vba-block-html\" data-block-type=\"2\">\n                                 <div class=\"vba-block-content\">\n                                    <h3>Back-End</h3>\n                                    <ul>\n                                       <li>Java/J2EE</li>\n                                       <li>Struts</li>\n                                       <li>Spring</li>\n                                       <li>Spring MVC</li>\n                                       <li>Spring Security</li>\n                                       <li>Java Server Faces</li>\n                                       <li>Hibernates</li>\n                                    </ul>\n                                 </div>\n                              </div>\n                           </div>\n                           <div class=\"col vba-col-3 span-3\">\n                              <div class=\"vba-block html-block vba-block-html\" data-block-type=\"2\">\n                                 <div class=\"vba-block-content\">\n                                    <h3>Front-End</h3>\n                                    <ul>\n                                       <li>HTML/CSS</li>\n                                       <li>JavaScript</li>\n                                       <li>JQuery</li>\n                                       <li>AngularJS</li>\n                                       <li>Angular~7</li>\n                                    </ul>\n                                 </div>\n                              </div>\n                           </div>\n                        </div>\n                     </div>\n                  </div>\n                  <div class=\"vba-block vba-col-3 span-3\" data-block-type=\"21\">\n                     <div class=\"vba-block-content\">&nbsp;</div>\n                  </div>\n                  <div class=\"row vba-row\">\n                     <div class=\"col vba-col-4 span-4\">\n                        <div class=\"vba-block html-block vba-block-html\" data-block-type=\"2\">\n                           <div class=\"vba-block-content\">\n                              <h2>Work Experience</h2>\n                           </div>\n                        </div>\n                     </div>\n                     <div class=\"col vba-col-8 span-8\">\n                        <div class=\"vba-block html-block vba-block-html\" data-block-type=\"2\">\n                          <div class=\"vba-block-content\">\n                                      <h3>SOA Technical analyst</h3>\n                                      <p><strong><a target=\"_blank\" href=\"https://www.intact.ca\">Intact</a>&nbsp;–&nbsp;OCTOBER 2018 – DECEMBER 2018</strong><br />\n                                        Join a Team Squad of 10 members – 6 Developer, 2 QA, 1 Analyst,1 Scrum Master.<br />\n                                        Implementation of one of the back-end part in the SOA Architecture, to expose web services for the rating of Intact for Intact third part partner in the west Canada<br />\n                                      </p>\n                                      <h3>Technical Lead</h3>\n                                      <p><strong><a target=\"_blank\" href=\"https://www.decathlon.com/\">Decathlon</a>&nbsp;–&nbsp;JUNE 2018 – OCTOBER 2018</strong><br />\n                                        Part of a team with 2 Technical leads of at team of 14 peoples.<br />\n                                        Developing an application from scratch of tills management to materialized the tills support.<br />\n                                        (manager centralize and middle-ware tills manager installable on any devices)<br />\n                                      </p>\n                                      <h3>Senior Developer</h3>\n                                      <p><strong><a target=\"_blank\" href=\"https://spvm.qc.ca\">Ville de Montréal</a>&nbsp;–&nbsp;FEBRUARY 2018 - MARCH 2018</strong><br />\n                                        As senior developer I develop a big part of the middle-ware/back-end of a self content NodeJS application:<br />\n                                        • Application conception<br />\n                                        • Development and Production Environment implementation<br />\n                                        • Application development.<br />\n                                      </p>\n                                      <h3>Technical Lead</h3>\n                                      <p><strong><a target=\"_blank\" href=\"https://www.total.com\">Total</a>&nbsp;–&nbsp;JUNE 2017 - SEPTEMBER 2017</strong><br />\n                                        After the outsourcing signing, CGI implement a budget manager.<br />\n                                        From the conception to the delivery, I have been in charge of the architecture and the development management.<br />\n                                        The application have been implemented in multi-tier architecture. A front end part used the last technology on the market, NodeJS, AngularJS, bower, bootstrap.<br />\n                                        The Back end part exposed REST services implemented with Spring REST, Spring Security, Hibernate  as well as Flyway to keep the database integrity.<br />\n                                      </p>\n                                      <h3>Senior Developer</h3>\n                                      <p><strong><a target=\"_blank\" href=\"http://www.sacramento-alert.org\">California Government, Sacramento</a>&nbsp;–&nbsp;JANUARY 2017 - FEBRUARY 2017</strong><br />\n                                        To respond to an IT Challenge propose by the State of California, we develop an notifier application for web and mobile.<br />\n                                        This notifications used GEO-Localization to send information about disaster near the user.<br />\n                                        This web site was made in collaboration with CGI Sacramento office<br />\n                                      </p>\n                                   </div>\n                        </div>\n                     </div>\n                  </div>\n                  <div class=\"vba-block spacer-block vba-block-spacer sized vsize-1\" data-block-type=\"21\">\n                     <div class=\"vba-block-content\">&nbsp;</div>\n                  </div>\n                  <div class=\"row vba-row\">\n                     <div class=\"col vba-col-4 span-4\">\n                        <div class=\"vba-block html-block vba-block-html\" data-block-type=\"2\">\n                           <div class=\"vba-block-content\">\n                              <h2>Education</h2>\n                           </div>\n                        </div>\n                     </div>\n                     <div class=\"col vba-col-8 span-8\">\n                        <div class=\"vba-block html-block vba-block-html\" data-block-type=\"2\">\n                           <div class=\"vba-block-content\">\n                              <h3>ATG Training Session - Oracle - 2015</h3>\n                              <h3>Unit Test/Continuous Integration - 2011</h3>\n                              <h3>Advanced Training Session OOP - 2007</h3>\n                              <p>Java/J2EE, Project Conception and Implementation</p>\n                              <h3>Computer Sciences - DEC - 2004/2006</h3>\n                              <h3>Joubert Voyages, Paris - Internship Analyst - Developer</h3>\n                              <p>DECEMBER 2005 - DECEMBER 2006</p>\n                              <h3>Netpartage, Paris - Internship Analyst - Developer</h3>\n                              <p>JANUARY 2005 - JULY 2005</p>\n                              <h3>Hobby One, Paris - Internship Analyst - Developer</h3>\n                              <p>NOVEMBER 2003 - JANUARY 2004</p>\n                              <h3>High School Diploma - 2003</h3>\n                           </div>\n                        </div>\n                     </div>\n                  </div>\n               </div>\n            </div>\n         </div>\n      </div>\n   </section>\n</main>\n"

/***/ }),

/***/ "./src/app/components/resume/resume.component.less":
/*!*********************************************************!*\
  !*** ./src/app/components/resume/resume.component.less ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVzdW1lL3Jlc3VtZS5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/components/resume/resume.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/resume/resume.component.ts ***!
  \*******************************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResumeComponent = /** @class */ (function () {
    function ResumeComponent() {
    }
    ResumeComponent.prototype.ngOnInit = function () {
    };
    ResumeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resume',
            template: __webpack_require__(/*! ./resume.component.html */ "./src/app/components/resume/resume.component.html"),
            styles: [__webpack_require__(/*! ./resume.component.less */ "./src/app/components/resume/resume.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], ResumeComponent);
    return ResumeComponent;
}());



/***/ }),

/***/ "./src/app/components/sys-diagram/sys-diagram.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/sys-diagram/sys-diagram.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"Index\" data-controller=\"IndexFirstSectionHeight, Parallax, IndexNavigation\">\n  <section id=\"resume-header\" class=\"Index-page Index-page--has-image\"  data-parallax-original-element data-edit-main-image=\"Background\">\n    <div class=\"Index-page-content  vba-alternate-block-style-container\">\n      <h1 align=\"center\">SYSTEM SKILLS</h1>\n    </div>\n  </section>\n  <section *ngIf=\"!isMobile\" id=\"resume-content\" class=\"Index-page\" data-edit-main-image=\"Background\">\n    <div class=\"Index-page-content\">\n      <div class=\"container\">\n        <div class=\"item\" id=\"sysAppDiagram\"></div>\n      </div>\n    </div>\n  </section>\n  <section *ngIf=\"isMobile\" id=\"resume-content\" class=\"Index-page\" data-edit-main-image=\"Background\">\n    <div class=\"Index-page-content \">\n      <div class=\"container\">\n        <carousel>\n          <ng-container *ngFor=\"let item of items;\">\n            <ng-container *carouselItem>\n              <div class=\"item\" id=\"{{item.id}}\"></div>\n            </ng-container>\n          </ng-container>\n        </carousel>\n      </div>\n    </div>\n  </section>\n</main>\n"

/***/ }),

/***/ "./src/app/components/sys-diagram/sys-diagram.component.less":
/*!*******************************************************************!*\
  !*** ./src/app/components/sys-diagram/sys-diagram.component.less ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3lzLWRpYWdyYW0vc3lzLWRpYWdyYW0uY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/components/sys-diagram/sys-diagram.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/sys-diagram/sys-diagram.component.ts ***!
  \*****************************************************************/
/*! exports provided: SysDiagramComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SysDiagramComponent", function() { return SysDiagramComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _assets_js_raphael_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/js/raphael.js */ "./src/assets/js/raphael.js");
/* harmony import */ var _assets_js_raphael_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_js_raphael_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_js_Treant_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/js/Treant.js */ "./src/assets/js/Treant.js");
/* harmony import */ var _assets_js_Treant_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_js_Treant_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_js_sysDiagram_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/js/sysDiagram.js */ "./src/assets/js/sysDiagram.js");
/* harmony import */ var _assets_js_sysDiagram_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_js_sysDiagram_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_js_sysDiagramInline_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/js/sysDiagramInline.js */ "./src/assets/js/sysDiagramInline.js");
/* harmony import */ var _assets_js_sysDiagramInline_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_js_sysDiagramInline_js__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SysDiagramComponent = /** @class */ (function () {
    function SysDiagramComponent() {
        this.items = [
            { id: 'sysDiagram' },
            { id: 'appDiagram' },
            { id: 'toolsDiagram' },
        ];
    }
    SysDiagramComponent.prototype.ngAfterContentInit = function () {
        if (window.innerWidth > 980) {
            this.isMobile = false;
            setTimeout(function () {
                new Treant(sys_apps_config);
            });
        }
        else {
            this.isMobile = true;
            setTimeout(function () {
                new Treant(sys_config);
                new Treant(apps_config);
                new Treant(tools_config);
            });
        }
    };
    SysDiagramComponent.prototype.onResize = function (event) {
        if (event.target.innerWidth > 980) {
            this.isMobile = false;
            setTimeout(function () {
                new Treant(sys_apps_config);
            });
        }
        else {
            this.isMobile = true;
            setTimeout(function () {
                new Treant(sys_config);
                new Treant(apps_config);
                new Treant(tools_config);
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SysDiagramComponent.prototype, "onResize", null);
    SysDiagramComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sys-diagram',
            template: __webpack_require__(/*! ./sys-diagram.component.html */ "./src/app/components/sys-diagram/sys-diagram.component.html"),
            styles: [__webpack_require__(/*! ./sys-diagram.component.less */ "./src/app/components/sys-diagram/sys-diagram.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], SysDiagramComponent);
    return SysDiagramComponent;
}());



/***/ }),

/***/ "./src/app/directives/carousel-item.directive.ts":
/*!*******************************************************!*\
  !*** ./src/app/directives/carousel-item.directive.ts ***!
  \*******************************************************/
/*! exports provided: CarouselItemDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselItemDirective", function() { return CarouselItemDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarouselItemDirective = /** @class */ (function () {
    function CarouselItemDirective(tpl) {
        this.tpl = tpl;
    }
    CarouselItemDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[carouselItem]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]])
    ], CarouselItemDirective);
    return CarouselItemDirective;
}());



/***/ }),

/***/ "./src/assets/js/Treant.js":
/*!*********************************!*\
  !*** ./src/assets/js/Treant.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 * Treant-js
 *
 * (c) 2013 Fran Peručić
 * Treant-js may be freely distributed under the MIT license.
 * For all details and documentation:
 * http://fperucic.github.io/treant-js
 *
 * Treant is an open-source JavaScipt library for visualization of tree diagrams.
 * It implements the node positioning algorithm of John Q. Walker II "Positioning nodes for General Trees".
 *
 * References:
 * Emilio Cortegoso Lobato: ECOTree.js v1.0 (October 26th, 2006)
 *
 * Contributors:
 * Fran Peručić, https://github.com/fperucic
 * Dave Goodchild, https://github.com/dlgoodchild
 */

;( function() {
    // Polyfill for IE to use startsWith
    if (!String.prototype.startsWith) {
        String.prototype.startsWith = function(searchString, position){
            return this.substr(position || 0, searchString.length) === searchString;
        };
    }

    var $ = null;

    var UTIL = {

        /**
         * Directly updates, recursively/deeply, the first object with all properties in the second object
         * @param {object} applyTo
         * @param {object} applyFrom
         * @return {object}
         */
        inheritAttrs: function( applyTo, applyFrom ) {
            for ( var attr in applyFrom ) {
                if ( applyFrom.hasOwnProperty( attr ) ) {
                    if ( ( applyTo[attr] instanceof Object && applyFrom[attr] instanceof Object ) && ( typeof applyFrom[attr] !== 'function' ) ) {
                        this.inheritAttrs( applyTo[attr], applyFrom[attr] );
                    }
                    else {
                        applyTo[attr] = applyFrom[attr];
                    }
                }
            }
            return applyTo;
        },

        /**
         * Returns a new object by merging the two supplied objects
         * @param {object} obj1
         * @param {object} obj2
         * @returns {object}
         */
        createMerge: function( obj1, obj2 ) {
            var newObj = {};
            if ( obj1 ) {
                this.inheritAttrs( newObj, this.cloneObj( obj1 ) );
            }
            if ( obj2 ) {
                this.inheritAttrs( newObj, obj2 );
            }
            return newObj;
        },

        /**
         * Takes any number of arguments
         * @returns {*}
         */
        extend: function() {
            if ( $ ) {
                Array.prototype.unshift.apply( arguments, [true, {}] );
                return $.extend.apply( $, arguments );
            }
            else {
                return UTIL.createMerge.apply( this, arguments );
            }
        },

        /**
         * @param {object} obj
         * @returns {*}
         */
        cloneObj: function ( obj ) {
            if ( Object( obj ) !== obj ) {
                return obj;
            }
            var res = new obj.constructor();
            for ( var key in obj ) {
                if ( obj.hasOwnProperty(key) ) {
                    res[key] = this.cloneObj(obj[key]);
                }
            }
            return res;
        },

        /**
         * @param {Element} el
         * @param {string} eventType
         * @param {function} handler
         */
        addEvent: function( el, eventType, handler ) {
            if ( $ ) {
                $( el ).on( eventType+'.treant', handler );
            }
            else if ( el.addEventListener ) { // DOM Level 2 browsers
                el.addEventListener( eventType, handler, false );
            }
            else if ( el.attachEvent ) { // IE <= 8
                el.attachEvent( 'on' + eventType, handler );
            }
            else { // ancient browsers
                el['on' + eventType] = handler;
            }
        },

        /**
         * @param {string} selector
         * @param {boolean} raw
         * @param {Element} parentEl
         * @returns {Element|jQuery}
         */
        findEl: function( selector, raw, parentEl ) {
            parentEl = parentEl || document;

            if ( $ ) {
                var $element = $( selector, parentEl );
                return ( raw? $element.get( 0 ): $element );
            }
            else {
                // todo: getElementsByName()
                // todo: getElementsByTagName()
                // todo: getElementsByTagNameNS()
                if ( selector.charAt( 0 ) === '#' ) {
                    return parentEl.getElementById( selector.substring( 1 ) );
                }
                else if ( selector.charAt( 0 ) === '.' ) {
                    var oElements = parentEl.getElementsByClassName( selector.substring( 1 ) );
                    return ( oElements.length? oElements[0]: null );
                }

                throw new Error( 'Unknown container element' );
            }
        },

        getOuterHeight: function( element ) {
            var nRoundingCompensation = 1;
            if ( typeof element.getBoundingClientRect === 'function' ) {
                return element.getBoundingClientRect().height;
            }
            else if ( $ ) {
                return Math.ceil( $( element ).outerHeight() ) + nRoundingCompensation;
            }
            else {
                return Math.ceil(
                    element.clientHeight
                    + UTIL.getStyle( element, 'border-top-width', true )
                    + UTIL.getStyle( element, 'border-bottom-width', true )
                    + UTIL.getStyle( element, 'padding-top', true )
                    + UTIL.getStyle( element, 'padding-bottom', true )
                    + nRoundingCompensation
                );
            }
        },

        getOuterWidth: function( element ) {
            var nRoundingCompensation = 1;
            if ( typeof element.getBoundingClientRect === 'function' ) {
                return element.getBoundingClientRect().width;
            }
            else if ( $ ) {
                return Math.ceil( $( element ).outerWidth() ) + nRoundingCompensation;
            }
            else {
                return Math.ceil(
                    element.clientWidth
                    + UTIL.getStyle( element, 'border-left-width', true )
                    + UTIL.getStyle( element, 'border-right-width', true )
                    + UTIL.getStyle( element, 'padding-left', true )
                    + UTIL.getStyle( element, 'padding-right', true )
                    + nRoundingCompensation
                );
            }
        },

        getStyle: function( element, strCssRule, asInt ) {
            var strValue = "";
            if ( document.defaultView && document.defaultView.getComputedStyle ) {
                strValue = document.defaultView.getComputedStyle( element, '' ).getPropertyValue( strCssRule );
            }
            else if( element.currentStyle ) {
                strCssRule = strCssRule.replace(/\-(\w)/g,
                    function (strMatch, p1){
                        return p1.toUpperCase();
                    }
                );
                strValue = element.currentStyle[strCssRule];
            }
            //Number(elem.style.width.replace(/[^\d\.\-]/g, ''));
            return ( asInt? parseFloat( strValue ): strValue );
        },

        addClass: function( element, cssClass ) {
            if ( $ ) {
                $( element ).addClass( cssClass );
            }
            else {
                if ( !UTIL.hasClass( element, cssClass ) ) {
                    if ( element.classList ) {
                        element.classList.add( cssClass );
                    }
                    else {
                        element.className += " "+cssClass;
                    }
                }
            }
        },

        hasClass: function(element, my_class) {
            return (" " + element.className + " ").replace(/[\n\t]/g, " ").indexOf(" "+my_class+" ") > -1;
        },

        toggleClass: function ( element, cls, apply ) {
            if ( $ ) {
                $( element ).toggleClass( cls, apply );
            }
            else {
                if ( apply ) {
                    //element.className += " "+cls;
                    element.classList.add( cls );
                }
                else {
                    element.classList.remove( cls );
                }
            }
        },

        setDimensions: function( element, width, height ) {
            if ( $ ) {
                $( element ).width( width ).height( height );
            }
            else {
                element.style.width = width+'px';
                element.style.height = height+'px';
            }
        },
        isjQueryAvailable: function() {return(typeof ($) !== 'undefined' && $);},
    };

    /**
     * ImageLoader is used for determining if all the images from the Tree are loaded.
     * Node size (width, height) can be correctly determined only when all inner images are loaded
     */
    var ImageLoader = function() {
        this.reset();
    };

    ImageLoader.prototype = {

        /**
         * @returns {ImageLoader}
         */
        reset: function() {
            this.loading = [];
            return this;
        },

        /**
         * @param {TreeNode} node
         * @returns {ImageLoader}
         */
        processNode: function( node ) {
            var aImages = node.nodeDOM.getElementsByTagName( 'img' );

            var i = aImages.length;
            while ( i-- ) {
                this.create( node, aImages[i] );
            }
            return this;
        },

        /**
         * @returns {ImageLoader}
         */
        removeAll: function( img_src ) {
            var i = this.loading.length;
            while ( i-- ) {
                if ( this.loading[i] === img_src ) {
                    this.loading.splice( i, 1 );
                }
            }
            return this;
        },

        /**
         * @param {TreeNode} node
         * @param {Element} image
         * @returns {*}
         */
        create: function ( node, image ) {
            var self = this, source = image.src;

            function imgTrigger() {
                self.removeAll( source );
                node.width = node.nodeDOM.offsetWidth;
                node.height = node.nodeDOM.offsetHeight;
            }

            if ( image.src.indexOf( 'data:' ) !== 0 ) {
                this.loading.push( source );

                if ( image.complete ) {
                    return imgTrigger();
                }

                UTIL.addEvent( image, 'load', imgTrigger );
                UTIL.addEvent( image, 'error', imgTrigger ); // handle broken url-s

                // load event is not fired for cached images, force the load event
                image.src += ( ( image.src.indexOf( '?' ) > 0)? '&': '?' ) + new Date().getTime();
            }
            else {
                imgTrigger();
            }
        },

        /**
         * @returns {boolean}
         */
        isNotLoading: function() {
            return ( this.loading.length === 0 );
        }
    };

    /**
     * Class: TreeStore
     * TreeStore is used for holding initialized Tree objects
     *  Its purpose is to avoid global variables and enable multiple Trees on the page.
     */
    var TreeStore = {

        store: [],

        /**
         * @param {object} jsonConfig
         * @returns {Tree}
         */
        createTree: function( jsonConfig ) {
            var nNewTreeId = this.store.length;
            this.store.push( new Tree( jsonConfig, nNewTreeId ) );
            return this.get( nNewTreeId );
        },

        /**
         * @param {number} treeId
         * @returns {Tree}
         */
        get: function ( treeId ) {
            return this.store[treeId];
        },

        /**
         * @param {number} treeId
         * @returns {TreeStore}
         */
        destroy: function( treeId ) {
            var tree = this.get( treeId );
            if ( tree ) {
                tree._R.remove();
                var draw_area = tree.drawArea;

                while ( draw_area.firstChild ) {
                    draw_area.removeChild( draw_area.firstChild );
                }

                var classes = draw_area.className.split(' '),
                    classes_to_stay = [];

                for ( var i = 0; i < classes.length; i++ ) {
                    var cls = classes[i];
                    if ( cls !== 'Treant' && cls !== 'Treant-loaded' ) {
                        classes_to_stay.push(cls);
                    }
                }
                draw_area.style.overflowY = '';
                draw_area.style.overflowX = '';
                draw_area.className = classes_to_stay.join(' ');

                this.store[treeId] = null;
            }
            return this;
        }
    };

    /**
     * Tree constructor.
     * @param {object} jsonConfig
     * @param {number} treeId
     * @constructor
     */
    var Tree = function (jsonConfig, treeId ) {

        /**
         * @param {object} jsonConfig
         * @param {number} treeId
         * @returns {Tree}
         */
        this.reset = function( jsonConfig, treeId ) {
            this.initJsonConfig = jsonConfig;
            this.initTreeId = treeId;

            this.id = treeId;

            this.CONFIG = UTIL.extend( Tree.CONFIG, jsonConfig.chart );
            this.drawArea = UTIL.findEl( this.CONFIG.container, true );
            if ( !this.drawArea ) {
                throw new Error( 'Failed to find element by selector "'+this.CONFIG.container+'"' );
            }

            UTIL.addClass( this.drawArea, 'Treant' );

            // kill of any child elements that may be there
            this.drawArea.innerHTML = '';

            this.imageLoader = new ImageLoader();

            this.nodeDB = new NodeDB( jsonConfig.nodeStructure, this );

            // key store for storing reference to node connectors,
            // key = nodeId where the connector ends
            this.connectionStore = {};

            this.loaded = false;

            this._R = new Raphael( this.drawArea, 100, 100 );

            return this;
        };

        /**
         * @returns {Tree}
         */
        this.reload = function() {
            this.reset( this.initJsonConfig, this.initTreeId ).redraw();
            return this;
        };

        this.reset( jsonConfig, treeId );
    };

    Tree.prototype = {

        /**
         * @returns {NodeDB}
         */
        getNodeDb: function() {
            return this.nodeDB;
        },

        /**
         * @param {TreeNode} parentTreeNode
         * @param {object} nodeDefinition
         * @returns {TreeNode}
         */
        addNode: function( parentTreeNode, nodeDefinition ) {
            var dbEntry = this.nodeDB.get( parentTreeNode.id );

            this.CONFIG.callback.onBeforeAddNode.apply( this, [parentTreeNode, nodeDefinition] );

            var oNewNode = this.nodeDB.createNode( nodeDefinition, parentTreeNode.id, this );
            oNewNode.createGeometry( this );

            oNewNode.parent().createSwitchGeometry( this );

            this.positionTree();

            this.CONFIG.callback.onAfterAddNode.apply( this, [oNewNode, parentTreeNode, nodeDefinition] );

            return oNewNode;
        },

        /**
         * @returns {Tree}
         */
        redraw: function() {
            this.positionTree();
            return this;
        },

        /**
         * @param {function} callback
         * @returns {Tree}
         */
        positionTree: function( callback ) {
            var self = this;

            if ( this.imageLoader.isNotLoading() ) {
                var root = this.root(),
                    orient = this.CONFIG.rootOrientation;

                this.resetLevelData();

                this.firstWalk( root, 0 );
                this.secondWalk( root, 0, 0, 0 );

                this.positionNodes();

                if ( this.CONFIG.animateOnInit ) {
                    setTimeout(
                        function() {
                            root.toggleCollapse();
                        },
                        this.CONFIG.animateOnInitDelay
                    );
                }

                if ( !this.loaded ) {
                    UTIL.addClass( this.drawArea, 'Treant-loaded' ); // nodes are hidden until .loaded class is added
                    if ( Object.prototype.toString.call( callback ) === "[object Function]" ) {
                        callback( self );
                    }
                    self.CONFIG.callback.onTreeLoaded.apply( self, [root] );
                    this.loaded = true;
                }

            }
            else {
                setTimeout(
                    function() {
                        self.positionTree( callback );
                    }, 10
                );
            }
            return this;
        },

        /**
         * In a first post-order walk, every node of the tree is assigned a preliminary
         * x-coordinate (held in field node->prelim).
         * In addition, internal nodes are given modifiers, which will be used to move their
         * children to the right (held in field node->modifier).
         * @param {TreeNode} node
         * @param {number} level
         * @returns {Tree}
         */
        firstWalk: function( node, level ) {
            node.prelim = null;
            node.modifier = null;

            this.setNeighbors( node, level );
            this.calcLevelDim( node, level );

            var leftSibling = node.leftSibling();

            if ( node.childrenCount() === 0 || level == this.CONFIG.maxDepth ) {
                // set preliminary x-coordinate
                if ( leftSibling ) {
                    node.prelim = leftSibling.prelim + leftSibling.size() + this.CONFIG.siblingSeparation;
                }
                else {
                    node.prelim = 0;
                }
            }
            else {
                //node is not a leaf,  firstWalk for each child
                for ( var i = 0, n = node.childrenCount(); i < n; i++ ) {
                    this.firstWalk(node.childAt(i), level + 1);
                }

                var midPoint = node.childrenCenter() - node.size() / 2;

                if ( leftSibling ) {
                    node.prelim = leftSibling.prelim + leftSibling.size() + this.CONFIG.siblingSeparation;
                    node.modifier = node.prelim - midPoint;
                    this.apportion( node, level );
                }
                else {
                    node.prelim = midPoint;
                }

                // handle stacked children positioning
                if ( node.stackParent ) { // handle the parent of stacked children
                    node.modifier += this.nodeDB.get( node.stackChildren[0] ).size()/2 + node.connStyle.stackIndent;
                }
                else if ( node.stackParentId ) { // handle stacked children
                    node.prelim = 0;
                }
            }
            return this;
        },

        /*
         * Clean up the positioning of small sibling subtrees.
         * Subtrees of a node are formed independently and
         * placed as close together as possible. By requiring
         * that the subtrees be rigid at the time they are put
         * together, we avoid the undesirable effects that can
         * accrue from positioning nodes rather than subtrees.
         */
        apportion: function (node, level) {
            var firstChild              = node.firstChild(),
                firstChildLeftNeighbor  = firstChild.leftNeighbor(),
                compareDepth            = 1,
                depthToStop             = this.CONFIG.maxDepth - level;

            while( firstChild && firstChildLeftNeighbor && compareDepth <= depthToStop ) {
                // calculate the position of the firstChild, according to the position of firstChildLeftNeighbor

                var modifierSumRight    = 0,
                    modifierSumLeft     = 0,
                    leftAncestor        = firstChildLeftNeighbor,
                    rightAncestor       = firstChild;

                for ( var i = 0; i < compareDepth; i++ ) {
                    leftAncestor = leftAncestor.parent();
                    rightAncestor = rightAncestor.parent();
                    modifierSumLeft += leftAncestor.modifier;
                    modifierSumRight += rightAncestor.modifier;

                    // all the stacked children are oriented towards right so use right variables
                    if ( rightAncestor.stackParent !== undefined ) {
                        modifierSumRight += rightAncestor.size() / 2;
                    }
                }

                // find the gap between two trees and apply it to subTrees
                // and mathing smaller gaps to smaller subtrees

                var totalGap = (firstChildLeftNeighbor.prelim + modifierSumLeft + firstChildLeftNeighbor.size() + this.CONFIG.subTeeSeparation) - (firstChild.prelim + modifierSumRight );

                if ( totalGap > 0 ) {
                    var subtreeAux = node,
                        numSubtrees = 0;

                    // count all the subtrees in the LeftSibling
                    while ( subtreeAux && subtreeAux.id !== leftAncestor.id ) {
                        subtreeAux = subtreeAux.leftSibling();
                        numSubtrees++;
                    }

                    if ( subtreeAux ) {
                        var subtreeMoveAux = node,
                            singleGap = totalGap / numSubtrees;

                        while ( subtreeMoveAux.id !== leftAncestor.id ) {
                            subtreeMoveAux.prelim += totalGap;
                            subtreeMoveAux.modifier += totalGap;

                            totalGap -= singleGap;
                            subtreeMoveAux = subtreeMoveAux.leftSibling();
                        }
                    }
                }

                compareDepth++;

                firstChild = ( firstChild.childrenCount() === 0 )?
                    node.leftMost(0, compareDepth):
                    firstChild = firstChild.firstChild();

                if ( firstChild ) {
                    firstChildLeftNeighbor = firstChild.leftNeighbor();
                }
            }
        },

        /*
         * During a second pre-order walk, each node is given a
         * final x-coordinate by summing its preliminary
         * x-coordinate and the modifiers of all the node's
         * ancestors.  The y-coordinate depends on the height of
         * the tree.  (The roles of x and y are reversed for
         * RootOrientations of EAST or WEST.)
         */
        secondWalk: function( node, level, X, Y ) {
            if ( level <= this.CONFIG.maxDepth ) {
                var xTmp = node.prelim + X,
                    yTmp = Y, align = this.CONFIG.nodeAlign,
                    orient = this.CONFIG.rootOrientation,
                    levelHeight, nodesizeTmp;

                if (orient === 'NORTH' || orient === 'SOUTH') {
                    levelHeight = this.levelMaxDim[level].height;
                    nodesizeTmp = node.height;
                    if (node.pseudo) {
                        node.height = levelHeight;
                    } // assign a new size to pseudo nodes
                }
                else if (orient === 'WEST' || orient === 'EAST') {
                    levelHeight = this.levelMaxDim[level].width;
                    nodesizeTmp = node.width;
                    if (node.pseudo) {
                        node.width = levelHeight;
                    } // assign a new size to pseudo nodes
                }

                node.X = xTmp;

                if (node.pseudo) { // pseudo nodes need to be properly aligned, otherwise position is not correct in some examples
                    if (orient === 'NORTH' || orient === 'WEST') {
                        node.Y = yTmp; // align "BOTTOM"
                    }
                    else if (orient === 'SOUTH' || orient === 'EAST') {
                        node.Y = (yTmp + (levelHeight - nodesizeTmp)); // align "TOP"
                    }

                } else {
                    node.Y = ( align === 'CENTER' ) ? (yTmp + (levelHeight - nodesizeTmp) / 2) :
                        ( align === 'TOP' )  ? (yTmp + (levelHeight - nodesizeTmp)) :
                            yTmp;
                }

                if ( orient === 'WEST' || orient === 'EAST' ) {
                    var swapTmp = node.X;
                    node.X = node.Y;
                    node.Y = swapTmp;
                }

                if (orient === 'SOUTH' ) {
                    node.Y = -node.Y - nodesizeTmp;
                }
                else if ( orient === 'EAST' ) {
                    node.X = -node.X - nodesizeTmp;
                }

                if ( node.childrenCount() !== 0 ) {
                    if ( node.id === 0 && this.CONFIG.hideRootNode ) {
                        // ako je root node Hiden onda nemoj njegovu dijecu pomaknut po Y osi za Level separation, neka ona budu na vrhu
                        this.secondWalk(node.firstChild(), level + 1, X + node.modifier, Y);
                    }
                    else {
                        this.secondWalk(node.firstChild(), level + 1, X + node.modifier, Y + levelHeight + this.CONFIG.levelSeparation);
                    }
                }

                if ( node.rightSibling() ) {
                    this.secondWalk( node.rightSibling(), level, X, Y );
                }
            }
        },

        /**
         * position all the nodes, center the tree in center of its container
         * 0,0 coordinate is in the upper left corner
         * @returns {Tree}
         */
        positionNodes: function() {
            var self = this,
                treeSize = {
                    x: self.nodeDB.getMinMaxCoord('X', null, null),
                    y: self.nodeDB.getMinMaxCoord('Y', null, null)
                },

                treeWidth = treeSize.x.max - treeSize.x.min,
                treeHeight = treeSize.y.max - treeSize.y.min,

                treeCenter = {
                    x: treeSize.x.max - treeWidth/2,
                    y: treeSize.y.max - treeHeight/2
                };

            this.handleOverflow(treeWidth, treeHeight);

            var
                containerCenter = {
                    x: self.drawArea.clientWidth/2,
                    y: self.drawArea.clientHeight/2
                },

                deltaX = containerCenter.x - treeCenter.x,
                deltaY = containerCenter.y - treeCenter.y,

                // all nodes must have positive X or Y coordinates, handle this with offsets
                negOffsetX = ((treeSize.x.min + deltaX) <= 0) ? Math.abs(treeSize.x.min) : 0,
                negOffsetY = ((treeSize.y.min + deltaY) <= 0) ? Math.abs(treeSize.y.min) : 0,
                i, len, node;

            // position all the nodes
            for ( i = 0, len = this.nodeDB.db.length; i < len; i++ ) {

                node = this.nodeDB.get(i);

                self.CONFIG.callback.onBeforePositionNode.apply( self, [node, i, containerCenter, treeCenter] );

                if ( node.id === 0 && this.CONFIG.hideRootNode ) {
                    self.CONFIG.callback.onAfterPositionNode.apply( self, [node, i, containerCenter, treeCenter] );
                    continue;
                }

                // if the tree is smaller than the draw area, then center the tree within drawing area
                node.X += negOffsetX + ((treeWidth < this.drawArea.clientWidth) ? deltaX : this.CONFIG.padding);
                node.Y += negOffsetY + ((treeHeight < this.drawArea.clientHeight) ? deltaY : this.CONFIG.padding);

                var collapsedParent = node.collapsedParent(),
                    hidePoint = null;

                if (collapsedParent) {
                    // position the node behind the connector point of the parent, so future animations can be visible
                    hidePoint = collapsedParent.connectorPoint( true );
                    node.hide(hidePoint);

                }
                else if (node.positioned) {
                    // node is already positioned,
                    node.show();
                }
                else { // inicijalno stvaranje nodeova, postavi lokaciju
                    node.nodeDOM.style.left = node.X + 'px';
                    node.nodeDOM.style.top = node.Y + 'px';
                    node.positioned = true;
                }

                if (node.id !== 0 && !(node.parent().id === 0 && this.CONFIG.hideRootNode)) {
                    this.setConnectionToParent(node, hidePoint); // skip the root node
                }
                else if (!this.CONFIG.hideRootNode && node.drawLineThrough) {
                    // drawlinethrough is performed for for the root node also
                    node.drawLineThroughMe();
                }

                self.CONFIG.callback.onAfterPositionNode.apply( self, [node, i, containerCenter, treeCenter] );
            }
            return this;
        },

        /**
         * Create Raphael instance, (optionally set scroll bars if necessary)
         * @param {number} treeWidth
         * @param {number} treeHeight
         * @returns {Tree}
         */
        handleOverflow: function( treeWidth, treeHeight ) {
            var viewWidth = (treeWidth < this.drawArea.clientWidth) ? this.drawArea.clientWidth : treeWidth + this.CONFIG.padding*2,
                viewHeight = (treeHeight < this.drawArea.clientHeight) ? this.drawArea.clientHeight : treeHeight + this.CONFIG.padding*2;

            this._R.setSize( viewWidth, viewHeight );

            if ( this.CONFIG.scrollbar === 'resize') {
                UTIL.setDimensions( this.drawArea, viewWidth, viewHeight );
            }
            else if ( !UTIL.isjQueryAvailable() || this.CONFIG.scrollbar === 'native' ) {

                if ( this.drawArea.clientWidth < treeWidth ) { // is overflow-x necessary
                    this.drawArea.style.overflowX = "auto";
                }

                if ( this.drawArea.clientHeight < treeHeight ) { // is overflow-y necessary
                    this.drawArea.style.overflowY = "auto";
                }
            }
            // Fancy scrollbar relies heavily on jQuery, so guarding with if ( $ )
            else if ( this.CONFIG.scrollbar === 'fancy') {
                var jq_drawArea = $( this.drawArea );
                if (jq_drawArea.hasClass('ps-container')) { // znaci da je 'fancy' vec inicijaliziran, treba updateat
                    jq_drawArea.find('.Treant').css({
                        width: viewWidth,
                        height: viewHeight
                    });

                    jq_drawArea.perfectScrollbar('update');
                }
                else {
                    var mainContainer = jq_drawArea.wrapInner('<div class="Treant"/>'),
                        child = mainContainer.find('.Treant');

                    child.css({
                        width: viewWidth,
                        height: viewHeight
                    });

                    mainContainer.perfectScrollbar();
                }
            } // else this.CONFIG.scrollbar == 'None'

            return this;
        },        
        /**
         * @param {TreeNode} treeNode
         * @param {boolean} hidePoint
         * @returns {Tree}
         */
        setConnectionToParent: function( treeNode, hidePoint ) {
            var stacked = treeNode.stackParentId,
                connLine,
                parent = ( stacked? this.nodeDB.get( stacked ): treeNode.parent() ),

                pathString = hidePoint?
                    this.getPointPathString(hidePoint):
                    this.getPathString(parent, treeNode, stacked);

            if ( this.connectionStore[treeNode.id] ) {
                // connector already exists, update the connector geometry
                connLine = this.connectionStore[treeNode.id];
                this.animatePath( connLine, pathString );
            }
            else {
                connLine = this._R.path( pathString );
                this.connectionStore[treeNode.id] = connLine;

                // don't show connector arrows por pseudo nodes
                if ( treeNode.pseudo ) {
                    delete parent.connStyle.style['arrow-end'];
                }
                if ( parent.pseudo ) {
                    delete parent.connStyle.style['arrow-start'];
                }

                connLine.attr( parent.connStyle.style );

                if ( treeNode.drawLineThrough || treeNode.pseudo ) {
                    treeNode.drawLineThroughMe( hidePoint );
                }
            }
            treeNode.connector = connLine;
            return this;
        },

        /**
         * Create the path which is represented as a point, used for hiding the connection
         * A path with a leading "_" indicates the path will be hidden
         * See: http://dmitrybaranovskiy.github.io/raphael/reference.html#Paper.path
         * @param {object} hidePoint
         * @returns {string}
         */
        getPointPathString: function( hidePoint ) {
            return ["_M", hidePoint.x, ",", hidePoint.y, 'L', hidePoint.x, ",", hidePoint.y, hidePoint.x, ",", hidePoint.y].join(' ');
        },

        /**
         * This method relied on receiving a valid Raphael Paper.path.
         * See: http://dmitrybaranovskiy.github.io/raphael/reference.html#Paper.path
         * A pathString is typically in the format of "M10,20L30,40"
         * @param path
         * @param {string} pathString
         * @returns {Tree}
         */
        animatePath: function( path, pathString ) {
            if (path.hidden && pathString.charAt(0) !== "_") { // path will be shown, so show it
                path.show();
                path.hidden = false;
            }

            // See: http://dmitrybaranovskiy.github.io/raphael/reference.html#Element.animate
            path.animate(
                {
                    path: pathString.charAt(0) === "_"?
                        pathString.substring(1):
                        pathString // remove the "_" prefix if it exists
                },
                this.CONFIG.animation.connectorsSpeed,
                this.CONFIG.animation.connectorsAnimation,
                function() {
                    if ( pathString.charAt(0) === "_" ) { // animation is hiding the path, hide it at the and of animation
                        path.hide();
                        path.hidden = true;
                    }
                }
            );
            return this;
        },

        /**
         *
         * @param {TreeNode} from_node
         * @param {TreeNode} to_node
         * @param {boolean} stacked
         * @returns {string}
         */
        getPathString: function( from_node, to_node, stacked ) {
            var startPoint = from_node.connectorPoint( true ),
                endPoint = to_node.connectorPoint( false ),
                orientation = this.CONFIG.rootOrientation,
                connType = from_node.connStyle.type,
                P1 = {}, P2 = {};

            if ( orientation === 'NORTH' || orientation === 'SOUTH' ) {
                P1.y = P2.y = (startPoint.y + endPoint.y) / 2;

                P1.x = startPoint.x;
                P2.x = endPoint.x;
            }
            else if ( orientation === 'EAST' || orientation === 'WEST' ) {
                P1.x = P2.x = (startPoint.x + endPoint.x) / 2;

                P1.y = startPoint.y;
                P2.y = endPoint.y;
            }

            // sp, p1, pm, p2, ep == "x,y"
            var sp = startPoint.x+','+startPoint.y, p1 = P1.x+','+P1.y, p2 = P2.x+','+P2.y, ep = endPoint.x+','+endPoint.y,
                pm = (P1.x + P2.x)/2 +','+ (P1.y + P2.y)/2, pathString, stackPoint;

            if ( stacked ) { // STACKED CHILDREN

                stackPoint = (orientation === 'EAST' || orientation === 'WEST')?
                endPoint.x+','+startPoint.y:
                startPoint.x+','+endPoint.y;

                if ( connType === "step" || connType === "straight" ) {
                    pathString = ["M", sp, 'L', stackPoint, 'L', ep];
                }
                else if ( connType === "curve" || connType === "bCurve" ) {
                    var helpPoint, // used for nicer curve lines
                        indent = from_node.connStyle.stackIndent;

                    if ( orientation === 'NORTH' ) {
                        helpPoint = (endPoint.x - indent)+','+(endPoint.y - indent);
                    }
                    else if ( orientation === 'SOUTH' ) {
                        helpPoint = (endPoint.x - indent)+','+(endPoint.y + indent);
                    }
                    else if ( orientation === 'EAST' ) {
                        helpPoint = (endPoint.x + indent) +','+startPoint.y;
                    }
                    else if ( orientation === 'WEST' ) {
                        helpPoint = (endPoint.x - indent) +','+startPoint.y;
                    }
                    pathString = ["M", sp, 'L', helpPoint, 'S', stackPoint, ep];
                }

            }
            else {  // NORMAL CHILDREN
                if ( connType === "step" ) {
                    pathString = ["M", sp, 'L', p1, 'L', p2, 'L', ep];
                }
                else if ( connType === "curve" ) {
                    pathString = ["M", sp, 'C', p1, p2, ep ];
                }
                else if ( connType === "bCurve" ) {
                    pathString = ["M", sp, 'Q', p1, pm, 'T', ep];
                }
                else if (connType === "straight" ) {
                    pathString = ["M", sp, 'L', sp, ep];
                }
            }

            return pathString.join(" ");
        },

        /**
         * Algorithm works from left to right, so previous processed node will be left neighbour of the next node
         * @param {TreeNode} node
         * @param {number} level
         * @returns {Tree}
         */
        setNeighbors: function( node, level ) {
            node.leftNeighborId = this.lastNodeOnLevel[level];
            if ( node.leftNeighborId ) {
                node.leftNeighbor().rightNeighborId = node.id;
            }
            this.lastNodeOnLevel[level] = node.id;
            return this;
        },

        /**
         * Used for calculation of height and width of a level (level dimensions)
         * @param {TreeNode} node
         * @param {number} level
         * @returns {Tree}
         */
        calcLevelDim: function( node, level ) { // root node is on level 0
            this.levelMaxDim[level] = {
                width: Math.max( this.levelMaxDim[level]? this.levelMaxDim[level].width: 0, node.width ),
                height: Math.max( this.levelMaxDim[level]? this.levelMaxDim[level].height: 0, node.height )
            };
            return this;
        },

        /**
         * @returns {Tree}
         */
        resetLevelData: function() {
            this.lastNodeOnLevel = [];
            this.levelMaxDim = [];
            return this;
        },

        /**
         * @returns {TreeNode}
         */
        root: function() {
            return this.nodeDB.get( 0 );
        }
    };

    /**
     * NodeDB is used for storing the nodes. Each tree has its own NodeDB.
     * @param {object} nodeStructure
     * @param {Tree} tree
     * @constructor
     */
    var NodeDB = function ( nodeStructure, tree ) {
        this.reset( nodeStructure, tree );
    };

    NodeDB.prototype = {

        /**
         * @param {object} nodeStructure
         * @param {Tree} tree
         * @returns {NodeDB}
         */
        reset: function( nodeStructure, tree ) {

            this.db = [];

            var self = this;

            /**
             * @param {object} node
             * @param {number} parentId
             */
            function iterateChildren( node, parentId ) {
                var newNode = self.createNode( node, parentId, tree, null );

                if ( node.children ) {
                    // pseudo node is used for descending children to the next level
                    if ( node.childrenDropLevel && node.childrenDropLevel > 0 ) {
                        while ( node.childrenDropLevel-- ) {
                            // pseudo node needs to inherit the connection style from its parent for continuous connectors
                            var connStyle = UTIL.cloneObj( newNode.connStyle );
                            newNode = self.createNode( 'pseudo', newNode.id, tree, null );
                            newNode.connStyle = connStyle;
                            newNode.children = [];
                        }
                    }

                    var stack = ( node.stackChildren && !self.hasGrandChildren( node ) )? newNode.id: null;

                    // children are positioned on separate levels, one beneath the other
                    if ( stack !== null ) {
                        newNode.stackChildren = [];
                    }

                    for ( var i = 0, len = node.children.length; i < len ; i++ ) {
                        if ( stack !== null ) {
                            newNode =  self.createNode( node.children[i], newNode.id, tree, stack );
                            if ( ( i + 1 ) < len ) {
                                // last node cant have children
                                newNode.children = [];
                            }
                        }
                        else {
                            iterateChildren( node.children[i], newNode.id );
                        }
                    }
                }
            }

            if ( tree.CONFIG.animateOnInit ) {
                nodeStructure.collapsed = true;
            }

            iterateChildren( nodeStructure, -1 ); // root node

            this.createGeometries( tree );

            return this;
        },

        /**
         * @param {Tree} tree
         * @returns {NodeDB}
         */
        createGeometries: function( tree ) {
            var i = this.db.length;

            while ( i-- ) {
                this.get( i ).createGeometry( tree );
            }
            return this;
        },

        /**
         * @param {number} nodeId
         * @returns {TreeNode}
         */
        get: function ( nodeId ) {
            return this.db[nodeId]; // get TreeNode by ID
        },

        /**
         * @param {function} callback
         * @returns {NodeDB}
         */
        walk: function( callback ) {
            var i = this.db.length;

            while ( i-- ) {
                callback.apply( this, [ this.get( i ) ] );
            }
            return this;
        },

        /**
         *
         * @param {object} nodeStructure
         * @param {number} parentId
         * @param {Tree} tree
         * @param {number} stackParentId
         * @returns {TreeNode}
         */
        createNode: function( nodeStructure, parentId, tree, stackParentId ) {
            var node = new TreeNode( nodeStructure, this.db.length, parentId, tree, stackParentId );

            this.db.push( node );

            // skip root node (0)
            if ( parentId >= 0 ) {
                var parent = this.get( parentId );

                // todo: refactor into separate private method
                if ( nodeStructure.position ) {
                    if ( nodeStructure.position === 'left' ) {
                        parent.children.push( node.id );
                    }
                    else if ( nodeStructure.position === 'right' ) {
                        parent.children.splice( 0, 0, node.id );
                    }
                    else if ( nodeStructure.position === 'center' ) {
                        parent.children.splice( Math.floor( parent.children.length / 2 ), 0, node.id );
                    }
                    else {
                        // edge case when there's only 1 child
                        var position = parseInt( nodeStructure.position );
                        if ( parent.children.length === 1 && position > 0 ) {
                            parent.children.splice( 0, 0, node.id );
                        }
                        else {
                            parent.children.splice(
                                Math.max( position, parent.children.length - 1 ),
                                0, node.id
                            );
                        }
                    }
                }
                else {
                    parent.children.push( node.id );
                }
            }

            if ( stackParentId ) {
                this.get( stackParentId ).stackParent = true;
                this.get( stackParentId ).stackChildren.push( node.id );
            }

            return node;
        },

        getMinMaxCoord: function( dim, parent, MinMax ) { // used for getting the dimensions of the tree, dim = 'X' || 'Y'
            // looks for min and max (X and Y) within the set of nodes
            parent = parent || this.get(0);

            MinMax = MinMax || { // start with root node dimensions
                    min: parent[dim],
                    max: parent[dim] + ( ( dim === 'X' )? parent.width: parent.height )
                };

            var i = parent.childrenCount();

            while ( i-- ) {
                var node = parent.childAt( i ),
                    maxTest = node[dim] + ( ( dim === 'X' )? node.width: node.height ),
                    minTest = node[dim];

                if ( maxTest > MinMax.max ) {
                    MinMax.max = maxTest;
                }
                if ( minTest < MinMax.min ) {
                    MinMax.min = minTest;
                }

                this.getMinMaxCoord( dim, node, MinMax );
            }
            return MinMax;
        },

        /**
         * @param {object} nodeStructure
         * @returns {boolean}
         */
        hasGrandChildren: function( nodeStructure ) {
            var i = nodeStructure.children.length;
            while ( i-- ) {
                if ( nodeStructure.children[i].children ) {
                    return true;
                }
            }
            return false;
        }
    };

    /**
     * TreeNode constructor.
     * @param {object} nodeStructure
     * @param {number} id
     * @param {number} parentId
     * @param {Tree} tree
     * @param {number} stackParentId
     * @constructor
     */
    var TreeNode = function( nodeStructure, id, parentId, tree, stackParentId ) {
        this.reset( nodeStructure, id, parentId, tree, stackParentId );
    };

    TreeNode.prototype = {

        /**
         * @param {object} nodeStructure
         * @param {number} id
         * @param {number} parentId
         * @param {Tree} tree
         * @param {number} stackParentId
         * @returns {TreeNode}
         */
        reset: function( nodeStructure, id, parentId, tree, stackParentId ) {
            this.id = id;
            this.parentId = parentId;
            this.treeId = tree.id;

            this.prelim = 0;
            this.modifier = 0;
            this.leftNeighborId = null;

            this.stackParentId = stackParentId;

            // pseudo node is a node with width=height=0, it is invisible, but necessary for the correct positioning of the tree
            this.pseudo = nodeStructure === 'pseudo' || nodeStructure['pseudo']; // todo: surely if nodeStructure is a scalar then the rest will error:

            this.meta = nodeStructure.meta || {};
            this.image = nodeStructure.image || null;

            this.link = UTIL.createMerge( tree.CONFIG.node.link,  nodeStructure.link );

            this.connStyle = UTIL.createMerge( tree.CONFIG.connectors, nodeStructure.connectors );
            this.connector = null;

            this.drawLineThrough = nodeStructure.drawLineThrough === false ? false : ( nodeStructure.drawLineThrough || tree.CONFIG.node.drawLineThrough );

            this.collapsable = nodeStructure.collapsable === false ? false : ( nodeStructure.collapsable || tree.CONFIG.node.collapsable );
            this.collapsed = nodeStructure.collapsed;

            this.text = nodeStructure.text;

            // '.node' DIV
            this.nodeInnerHTML = nodeStructure.innerHTML;
            this.nodeHTMLclass = (tree.CONFIG.node.HTMLclass ? tree.CONFIG.node.HTMLclass : '') + // globally defined class for the nodex
                (nodeStructure.HTMLclass ? (' ' + nodeStructure.HTMLclass) : '');       // + specific node class

            this.nodeHTMLid = nodeStructure.HTMLid;

            this.children = [];

            return this;
        },

        /**
         * @returns {Tree}
         */
        getTree: function() {
            return TreeStore.get( this.treeId );
        },

        /**
         * @returns {object}
         */
        getTreeConfig: function() {
            return this.getTree().CONFIG;
        },

        /**
         * @returns {NodeDB}
         */
        getTreeNodeDb: function() {
            return this.getTree().getNodeDb();
        },

        /**
         * @param {number} nodeId
         * @returns {TreeNode}
         */
        lookupNode: function( nodeId ) {
            return this.getTreeNodeDb().get( nodeId );
        },

        /**
         * @returns {Tree}
         */
        Tree: function() {
            return TreeStore.get( this.treeId );
        },

        /**
         * @param {number} nodeId
         * @returns {TreeNode}
         */
        dbGet: function( nodeId ) {
            return this.getTreeNodeDb().get( nodeId );
        },

        /**
         * Returns the width of the node
         * @returns {float}
         */
        size: function() {
            var orientation = this.getTreeConfig().rootOrientation;

            if ( this.pseudo ) {
                // prevents separating the subtrees
                return ( -this.getTreeConfig().subTeeSeparation );
            }

            if ( orientation === 'NORTH' || orientation === 'SOUTH' ) {
                return this.width;
            }
            else if ( orientation === 'WEST' || orientation === 'EAST' ) {
                return this.height;
            }
        },

        /**
         * @returns {number}
         */
        childrenCount: function () {
            return ( ( this.collapsed || !this.children)? 0: this.children.length );
        },

        /**
         * @param {number} index
         * @returns {TreeNode}
         */
        childAt: function( index ) {
            return this.dbGet( this.children[index] );
        },

        /**
         * @returns {TreeNode}
         */
        firstChild: function() {
            return this.childAt( 0 );
        },

        /**
         * @returns {TreeNode}
         */
        lastChild: function() {
            return this.childAt( this.children.length - 1 );
        },

        /**
         * @returns {TreeNode}
         */
        parent: function() {
            return this.lookupNode( this.parentId );
        },

        /**
         * @returns {TreeNode}
         */
        leftNeighbor: function() {
            if ( this.leftNeighborId ) {
                return this.lookupNode( this.leftNeighborId );
            }
        },

        /**
         * @returns {TreeNode}
         */
        rightNeighbor: function() {
            if ( this.rightNeighborId ) {
                return this.lookupNode( this.rightNeighborId );
            }
        },

        /**
         * @returns {TreeNode}
         */
        leftSibling: function () {
            var leftNeighbor = this.leftNeighbor();

            if ( leftNeighbor && leftNeighbor.parentId === this.parentId ){
                return leftNeighbor;
            }
        },

        /**
         * @returns {TreeNode}
         */
        rightSibling: function () {
            var rightNeighbor = this.rightNeighbor();

            if ( rightNeighbor && rightNeighbor.parentId === this.parentId ) {
                return rightNeighbor;
            }
        },

        /**
         * @returns {number}
         */
        childrenCenter: function () {
            var first = this.firstChild(),
                last = this.lastChild();

            return ( first.prelim + ((last.prelim - first.prelim) + last.size()) / 2 );
        },

        /**
         * Find out if one of the node ancestors is collapsed
         * @returns {*}
         */
        collapsedParent: function() {
            var parent = this.parent();
            if ( !parent ) {
                return false;
            }
            if ( parent.collapsed ) {
                return parent;
            }
            return parent.collapsedParent();
        },

        /**
         * Returns the leftmost child at specific level, (initial level = 0)
         * @param level
         * @param depth
         * @returns {*}
         */
        leftMost: function ( level, depth ) {
            if ( level >= depth ) {
                return this;
            }
            if ( this.childrenCount() === 0 ) {
                return;
            }

            for ( var i = 0, n = this.childrenCount(); i < n; i++ ) {
                var leftmostDescendant = this.childAt( i ).leftMost( level + 1, depth );
                if ( leftmostDescendant ) {
                    return leftmostDescendant;
                }
            }
        },

        // returns start or the end point of the connector line, origin is upper-left
        connectorPoint: function(startPoint) {
            var orient = this.Tree().CONFIG.rootOrientation, point = {};

            if ( this.stackParentId ) { // return different end point if node is a stacked child
                if ( orient === 'NORTH' || orient === 'SOUTH' ) {
                    orient = 'WEST';
                }
                else if ( orient === 'EAST' || orient === 'WEST' ) {
                    orient = 'NORTH';
                }
            }

            // if pseudo, a virtual center is used
            if ( orient === 'NORTH' ) {
                point.x = (this.pseudo) ? this.X - this.Tree().CONFIG.subTeeSeparation/2 : this.X + this.width/2;
                point.y = (startPoint) ? this.Y + this.height : this.Y;
            }
            else if (orient === 'SOUTH') {
                point.x = (this.pseudo) ? this.X - this.Tree().CONFIG.subTeeSeparation/2 : this.X + this.width/2;
                point.y = (startPoint) ? this.Y : this.Y + this.height;
            }
            else if (orient === 'EAST') {
                point.x = (startPoint) ? this.X : this.X + this.width;
                point.y = (this.pseudo) ? this.Y - this.Tree().CONFIG.subTeeSeparation/2 : this.Y + this.height/2;
            }
            else if (orient === 'WEST') {
                point.x = (startPoint) ? this.X + this.width : this.X;
                point.y =  (this.pseudo) ? this.Y - this.Tree().CONFIG.subTeeSeparation/2 : this.Y + this.height/2;
            }
            return point;
        },

        /**
         * @returns {string}
         */
        pathStringThrough: function() { // get the geometry of a path going through the node
            var startPoint = this.connectorPoint( true ),
                endPoint = this.connectorPoint( false );

            return ["M", startPoint.x+","+startPoint.y, 'L', endPoint.x+","+endPoint.y].join(" ");
        },

        /**
         * @param {object} hidePoint
         */
        drawLineThroughMe: function( hidePoint ) { // hidepoint se proslijedjuje ako je node sakriven zbog collapsed
            var pathString = hidePoint?
                this.Tree().getPointPathString( hidePoint ):
                this.pathStringThrough();

            this.lineThroughMe = this.lineThroughMe || this.Tree()._R.path(pathString);

            var line_style = UTIL.cloneObj( this.connStyle.style );

            delete line_style['arrow-start'];
            delete line_style['arrow-end'];

            this.lineThroughMe.attr( line_style );

            if ( hidePoint ) {
                this.lineThroughMe.hide();
                this.lineThroughMe.hidden = true;
            }
        },

        addSwitchEvent: function( nodeSwitch ) {
            var self = this;
            UTIL.addEvent( nodeSwitch, 'click',
                function( e ) {
                    e.preventDefault();
                    if ( self.getTreeConfig().callback.onBeforeClickCollapseSwitch.apply( self, [ nodeSwitch, e ] ) === false ) {
                        return false;
                    }

                    self.toggleCollapse();

                    self.getTreeConfig().callback.onAfterClickCollapseSwitch.apply( self, [ nodeSwitch, e ] );
                }
            );
        },

        /**
         * @returns {TreeNode}
         */
        collapse: function() {
            if ( !this.collapsed ) {
                this.toggleCollapse();
            }
            return this;
        },

        /**
         * @returns {TreeNode}
         */
        expand: function() {
            if ( this.collapsed ) {
                this.toggleCollapse();
            }
            return this;
        },

        /**
         * @returns {TreeNode}
         */
        toggleCollapse: function() {
            var oTree = this.getTree();

            if ( !oTree.inAnimation ) {
                oTree.inAnimation = true;

                this.collapsed = !this.collapsed; // toggle the collapse at each click
                UTIL.toggleClass( this.nodeDOM, 'collapsed', this.collapsed );

                oTree.positionTree();

                var self = this;

                setTimeout(
                    function() { // set the flag after the animation
                        oTree.inAnimation = false;
                        oTree.CONFIG.callback.onToggleCollapseFinished.apply( oTree, [ self, self.collapsed ] );
                    },
                    ( oTree.CONFIG.animation.nodeSpeed > oTree.CONFIG.animation.connectorsSpeed )?
                        oTree.CONFIG.animation.nodeSpeed:
                        oTree.CONFIG.animation.connectorsSpeed
                );
            }
            return this;
        },

        hide: function( collapse_to_point ) {
            collapse_to_point = collapse_to_point || false;

            var bCurrentState = this.hidden;
            this.hidden = true;

            this.nodeDOM.style.overflow = 'hidden';

            var tree = this.getTree(),
                config = this.getTreeConfig(),
                oNewState = {
                    opacity: 0
                };

            if ( collapse_to_point ) {
                oNewState.left = collapse_to_point.x;
                oNewState.top = collapse_to_point.y;
            }

            // if parent was hidden in initial configuration, position the node behind the parent without animations
            if ( !this.positioned || bCurrentState ) {
                this.nodeDOM.style.visibility = 'hidden';
                if ( $ ) {
                    $( this.nodeDOM ).css( oNewState );
                }
                else {
                    this.nodeDOM.style.left = oNewState.left + 'px';
                    this.nodeDOM.style.top = oNewState.top + 'px';
                }
                this.positioned = true;
            }
            else {
                // todo: fix flashy bug when a node is manually hidden and tree.redraw is called.
                if ( $ ) {
                    $( this.nodeDOM ).animate(
                        oNewState, config.animation.nodeSpeed, config.animation.nodeAnimation,
                        function () {
                            this.style.visibility = 'hidden';
                        }
                    );
                }
                else {
                    this.nodeDOM.style.transition = 'all '+config.animation.nodeSpeed+'ms ease';
                    this.nodeDOM.style.transitionProperty = 'opacity, left, top';
                    this.nodeDOM.style.opacity = oNewState.opacity;
                    this.nodeDOM.style.left = oNewState.left + 'px';
                    this.nodeDOM.style.top = oNewState.top + 'px';
                    this.nodeDOM.style.visibility = 'hidden';
                }
            }

            // animate the line through node if the line exists
            if ( this.lineThroughMe ) {
                var new_path = tree.getPointPathString( collapse_to_point );
                if ( bCurrentState ) {
                    // update without animations
                    this.lineThroughMe.attr( { path: new_path } );
                }
                else {
                    // update with animations
                    tree.animatePath( this.lineThroughMe, tree.getPointPathString( collapse_to_point ) );
                }
            }

            return this;
        },

        /**
         * @returns {TreeNode}
         */
        hideConnector: function() {
            var oTree = this.Tree();
            var oPath = oTree.connectionStore[this.id];
            if ( oPath ) {
                oPath.animate(
                    { 'opacity': 0 },
                    oTree.CONFIG.animation.connectorsSpeed,
                    oTree.CONFIG.animation.connectorsAnimation
                );
            }
            return this;
        },

        show: function() {
            var bCurrentState = this.hidden;
            this.hidden = false;

            this.nodeDOM.style.visibility = 'visible';

            var oTree = this.Tree();

            var oNewState = {
                    left: this.X,
                    top: this.Y,
                    opacity: 1
                },
                config = this.getTreeConfig();

            // if the node was hidden, update opacity and position
            if ( $ ) {
                $( this.nodeDOM ).animate(
                    oNewState,
                    config.animation.nodeSpeed, config.animation.nodeAnimation,
                    function () {
                        // $.animate applies "overflow:hidden" to the node, remove it to avoid visual problems
                        this.style.overflow = "";
                    }
                );
            }
            else {
                this.nodeDOM.style.transition = 'all '+config.animation.nodeSpeed+'ms ease';
                this.nodeDOM.style.transitionProperty = 'opacity, left, top';
                this.nodeDOM.style.left = oNewState.left + 'px';
                this.nodeDOM.style.top = oNewState.top + 'px';
                this.nodeDOM.style.opacity = oNewState.opacity;
                this.nodeDOM.style.overflow = '';
            }

            if ( this.lineThroughMe ) {
                this.getTree().animatePath( this.lineThroughMe, this.pathStringThrough() );
            }

            return this;
        },

        /**
         * @returns {TreeNode}
         */
        showConnector: function() {
            var oTree = this.Tree();
            var oPath = oTree.connectionStore[this.id];
            if ( oPath ) {
                oPath.animate(
                    { 'opacity': 1 },
                    oTree.CONFIG.animation.connectorsSpeed,
                    oTree.CONFIG.animation.connectorsAnimation
                );
            }
            return this;
        }
    };


    /**
     * Build a node from the 'text' and 'img' property and return with it.
     *
     * The node will contain all the fields that present under the 'text' property
     * Each field will refer to a css class with name defined as node-{$property_name}
     *
     * Example:
     * The definition:
     *
     *   text: {
     *     desc: "some description",
     *     paragraph: "some text"
     *   }
     *
     * will generate the following elements:
     *
     *   <p class="node-desc">some description</p>
     *   <p class="node-paragraph">some text</p>
     *
     * @Returns the configured node
     */
    TreeNode.prototype.buildNodeFromText = function (node) {
        // IMAGE
        if (this.image) {
            image = document.createElement('img');
            image.src = this.image;
            node.appendChild(image);
        }

        // TEXT
        if (this.text) {
            for (var key in this.text) {
                // adding DATA Attributes to the node
                if (key.startsWith("data-")) {
                    node.setAttribute(key, this.text[key]);
                } else {
                    
                    var textElement = document.createElement(this.text[key].href ? 'a' : 'p');
                    
                    // make an <a> element if required
                    if (this.text[key].href) {
                        textElement.href = this.text[key].href;
                        if (this.text[key].target) {
                            textElement.target = this.text[key].target;
                        }
                    }
                    
                    textElement.className =  "node-"+key;
                    textElement.appendChild(document.createTextNode(
                        this.text[key].val ? this.text[key].val :
                        this.text[key] instanceof Object ? "'val' param missing!" : this.text[key]
                    )
                    );
                    
                    node.appendChild(textElement);
                }
            }
        }
        return node;
    };

    /**
     * Build a node from  'nodeInnerHTML' property that defines an existing HTML element, referenced by it's id, e.g: #someElement
     * Change the text in the passed node to 'Wrong ID selector' if the referenced element does ot exist,
     * return with a cloned and configured node otherwise
     *
     * @Returns node the configured node
     */
    TreeNode.prototype.buildNodeFromHtml = function(node) {
        // get some element by ID and clone its structure into a node
        if (this.nodeInnerHTML.charAt(0) === "#") {
            var elem = document.getElementById(this.nodeInnerHTML.substring(1));
            if (elem) {
                node = elem.cloneNode(true);
                node.id += "-clone";
                node.className += " node";
            }
            else {
                node.innerHTML = "<b> Wrong ID selector </b>";
            }
        }
        else {
            // insert your custom HTML into a node
            node.innerHTML = this.nodeInnerHTML;
        }
        return node;
    };

    /**
     * @param {Tree} tree
     */
    TreeNode.prototype.createGeometry = function( tree ) {
        if ( this.id === 0 && tree.CONFIG.hideRootNode ) {
            this.width = 0;
            this.height = 0;
            return;
        }

        var drawArea = tree.drawArea,
            image,

            /////////// CREATE NODE //////////////
            node = document.createElement( this.link.href? 'a': 'div' );

        node.className = ( !this.pseudo )? TreeNode.CONFIG.nodeHTMLclass: 'pseudo';
        if ( this.nodeHTMLclass && !this.pseudo ) {
            node.className += ' ' + this.nodeHTMLclass;
        }

        if ( this.nodeHTMLid ) {
            node.id = this.nodeHTMLid;
        }

        if ( this.link.href ) {
            node.href = this.link.href;
            node.target = this.link.target;
        }

        if ( $ ) {
            $( node ).data( 'treenode', this );
        }
        else {
            node.data = {
                'treenode': this
            };
        }

        /////////// BUILD NODE CONTENT //////////////
        if ( !this.pseudo ) {
            node = this.nodeInnerHTML? this.buildNodeFromHtml(node) : this.buildNodeFromText(node)

            // handle collapse switch
            if ( this.collapsed || (this.collapsable && this.childrenCount() && !this.stackParentId) ) {
                this.createSwitchGeometry( tree, node );
            }
        }

        tree.CONFIG.callback.onCreateNode.apply( tree, [this, node] );

        /////////// APPEND all //////////////
        drawArea.appendChild(node);

        this.width = node.offsetWidth;
        this.height = node.offsetHeight;

        this.nodeDOM = node;

        tree.imageLoader.processNode(this);
    };

    /**
     * @param {Tree} tree
     * @param {Element} nodeEl
     */
    TreeNode.prototype.createSwitchGeometry = function( tree, nodeEl ) {
        nodeEl = nodeEl || this.nodeDOM;

        // safe guard and check to see if it has a collapse switch
        var nodeSwitchEl = UTIL.findEl( '.collapse-switch', true, nodeEl );
        if ( !nodeSwitchEl ) {
            nodeSwitchEl = document.createElement( 'a' );
            nodeSwitchEl.className = "collapse-switch";

            nodeEl.appendChild( nodeSwitchEl );
            this.addSwitchEvent( nodeSwitchEl );
            if ( this.collapsed ) {
                nodeEl.className += " collapsed";
            }

            tree.CONFIG.callback.onCreateNodeCollapseSwitch.apply( tree, [this, nodeEl, nodeSwitchEl] );
        }
        return nodeSwitchEl;
    };


    // ###########################################
    //      Expose global + default CONFIG params
    // ###########################################


    Tree.CONFIG = {
        maxDepth: 100,
        rootOrientation: 'NORTH', // NORTH || EAST || WEST || SOUTH
        nodeAlign: 'CENTER', // CENTER || TOP || BOTTOM
        levelSeparation: 30,
        siblingSeparation: 30,
        subTeeSeparation: 30,

        hideRootNode: false,

        animateOnInit: false,
        animateOnInitDelay: 500,

        padding: 15, // the difference is seen only when the scrollbar is shown
        scrollbar: 'native', // "native" || "fancy" || "None" (PS: "fancy" requires jquery and perfect-scrollbar)

        connectors: {
            type: 'curve', // 'curve' || 'step' || 'straight' || 'bCurve'
            style: {
                stroke: 'black'
            },
            stackIndent: 15
        },

        node: { // each node inherits this, it can all be overridden in node config

            // HTMLclass: 'node',
            // drawLineThrough: false,
            // collapsable: false,
            link: {
                target: '_self'
            }
        },

        animation: { // each node inherits this, it can all be overridden in node config
            nodeSpeed: 450,
            nodeAnimation: 'linear',
            connectorsSpeed: 450,
            connectorsAnimation: 'linear'
        },

        callback: {
            onCreateNode: function( treeNode, treeNodeDom ) {}, // this = Tree
            onCreateNodeCollapseSwitch: function( treeNode, treeNodeDom, switchDom ) {}, // this = Tree
            onAfterAddNode: function( newTreeNode, parentTreeNode, nodeStructure ) {}, // this = Tree
            onBeforeAddNode: function( parentTreeNode, nodeStructure ) {}, // this = Tree
            onAfterPositionNode: function( treeNode, nodeDbIndex, containerCenter, treeCenter) {}, // this = Tree
            onBeforePositionNode: function( treeNode, nodeDbIndex, containerCenter, treeCenter) {}, // this = Tree
            onToggleCollapseFinished: function ( treeNode, bIsCollapsed ) {}, // this = Tree
            onAfterClickCollapseSwitch: function( nodeSwitch, event ) {}, // this = TreeNode
            onBeforeClickCollapseSwitch: function( nodeSwitch, event ) {}, // this = TreeNode
            onTreeLoaded: function( rootTreeNode ) {} // this = Tree
        }
    };

    TreeNode.CONFIG = {
        nodeHTMLclass: 'node'
    };

    // #############################################
    // Makes a JSON chart config out of Array config
    // #############################################

    var JSONconfig = {
        make: function( configArray ) {

            var i = configArray.length, node;

            this.jsonStructure = {
                chart: null,
                nodeStructure: null
            };
            //fist loop: find config, find root;
            while(i--) {
                node = configArray[i];
                if (node.hasOwnProperty('container')) {
                    this.jsonStructure.chart = node;
                    continue;
                }

                if (!node.hasOwnProperty('parent') && ! node.hasOwnProperty('container')) {
                    this.jsonStructure.nodeStructure = node;
                    node._json_id = 0;
                }
            }

            this.findChildren(configArray);

            return this.jsonStructure;
        },

        findChildren: function(nodes) {
            var parents = [0]; // start with a a root node

            while(parents.length) {
                var parentId = parents.pop(),
                    parent = this.findNode(this.jsonStructure.nodeStructure, parentId),
                    i = 0, len = nodes.length,
                    children = [];

                for(;i<len;i++) {
                    var node = nodes[i];
                    if(node.parent && (node.parent._json_id === parentId)) { // skip config and root nodes

                        node._json_id = this.getID();

                        delete node.parent;

                        children.push(node);
                        parents.push(node._json_id);
                    }
                }

                if (children.length) {
                    parent.children = children;
                }
            }
        },

        findNode: function( node, nodeId ) {
            var childrenLen, found;

            if (node._json_id === nodeId) {
                return node;
            }
            else if ( node.children ) {
                childrenLen = node.children.length;
                while ( childrenLen-- ) {
                    found = this.findNode(node.children[childrenLen], nodeId);
                    if ( found ) {
                        return found;
                    }
                }
            }
        },

        getID: (
            function() {
                var i = 1;
                return function() {
                    return i++;
                };
            }
        )()
    };

    /**
     * Chart constructor.
     */
    var Treant = function( jsonConfig, callback, jQuery ) {
        if ( jsonConfig instanceof Array ) {
            jsonConfig = JSONconfig.make( jsonConfig );
        }

        // optional
        if ( jQuery ) {
            $ = jQuery;
        }

        this.tree = TreeStore.createTree( jsonConfig );
        this.tree.positionTree( callback );
    };

    Treant.prototype.destroy = function() {
        TreeStore.destroy( this.tree.id );
    };

    /* expose constructor globally */
    window.Treant = Treant;

})();


/***/ }),

/***/ "./src/assets/js/devDiagram.js":
/*!*************************************!*\
  !*** ./src/assets/js/devDiagram.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var dev_config = {
    chart: {
        container: '#devDiagram',
        nodeAlign: 'BOTTOM',
        connectors: {
            type: 'step'
        },
        node: {
            HTMLclass: 'node1'
        }
    },
    nodeStructure: {
      text: {
              name: 'Dev'
          },
          HTMLclass: 'dev-diagram-css',
          children: [
                      {
                          text:{
                              name: 'Frontend'

                          },
                          HTMLclass: 'dev-diagram-css',
                          link: {
                              href: 'http://www.google.com'
                          },
                          children:[
                            {
                                text:{
                                  name:'HTML/CSS'
                                },
                                HTMLclass:'dev-diagram-css'
                            },
                            {
                              text:{
                                name:'JavaScript'
                              },
                              HTMLclass:'dev-diagram-css',
                              children:[
                                {
                                  text:{
                                    name:'JQuery'
                                  },
                                  HTMLclass:'dev-diagram-css'
                                },
                                {
                                  text:{
                                    name:'Angular ~7/Angular.JS'
                                  },
                                  HTMLclass:'dev-diagram-css',
                                  stackChildren:true,
                                  children:[
                                    {
                                      text:{
                                        name:'jslint'
                                      },
                                      HTMLclass:'dev-diagram-css'
                                    },
                                    {
                                      text:{
                                        name:'karma'
                                      },
                                      HTMLclass:'dev-diagram-css'
                                    },
                                    {
                                      text:{
                                        name:'grunt'
                                      },
                                      HTMLclass:'dev-diagram-css'
                                    },
                                    {
                                      text:{
                                        name:'express'
                                      },
                                      HTMLclass:'dev-diagram-css'
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                      },
                      {
                          text:{
                              name: 'Backend'
                          },
                          HTMLclass: 'dev-diagram-css',
                          children: [
                            {
                                text:{
                                    name: 'Java J2EE'
                                },
                                HTMLclass: 'dev-diagram-css',
                                stackChildren:true,
                                children: [
                                  {
                                      text:{
                                          name: 'Struts'
                                      },
                                      HTMLclass: 'dev-diagram-css'
                                  },
                                  {
                                      text:{
                                          name: 'Spring'
                                      },
                                      HTMLclass: 'dev-diagram-css',
                                      stackChildren:true,
                                      children:[
                                        {
                                            text:{
                                                name: 'Spring MVC'
                                            },
                                            HTMLclass: 'dev-diagram-css'
                                        },
                                        {
                                            text:{
                                                name: 'Spring Security'
                                            },
                                            HTMLclass: 'dev-diagram-css'
                                        }
                                      ]
                                  },
                                  {
                                      text:{
                                          name: 'Hibernate'
                                      },
                                      HTMLclass: 'dev-diagram-css'
                                  },
                                ]
                            }
                          ]
                      }
                  ]
    }
};


/***/ }),

/***/ "./src/assets/js/devDiagramInline.js":
/*!*******************************************!*\
  !*** ./src/assets/js/devDiagramInline.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var frontend_config = {
  chart: {
    container: '#frontendDiagram',
    nodeAlign: 'BOTTOM',
    connectors: {
      type: 'step'
    },
    node: {
      HTMLclass: 'node1'
    }
  },
  nodeStructure: {
    text: {
      name: 'Frontend'
    },
    HTMLclass: 'dev-diagram-css',
    link: {
      href: 'http://www.google.com'
    },
    stackChildren: true,
    children: [{
        text: {
          name: 'HTML/CSS'
        },
        HTMLclass: 'dev-diagram-css'
      },
      {
        text: {
          name: 'JavaScript'
        },
        HTMLclass: 'dev-diagram-css',
      },
      {
        text: {
          name: 'JQuery'
        },
        HTMLclass: 'dev-diagram-css'
      },
      {
        text: {
          name: 'Angular ~7/Angular.JS'
        },
        HTMLclass: 'dev-diagram-css',
      },
      {
        text: {
          name: 'jslint'
        },
        HTMLclass: 'dev-diagram-css'
      },
      {
        text: {
          name: 'karma'
        },
        HTMLclass: 'dev-diagram-css'
      },
      {
        text: {
          name: 'grunt'
        },
        HTMLclass: 'dev-diagram-css'
      },
      {
        text: {
          name: 'express'
        },
        HTMLclass: 'dev-diagram-css'
      }
    ]
  }
};
var backend_config = {
  chart: {
    container: '#backendDiagram',
    nodeAlign: 'BOTTOM',
    connectors: {
      type: 'step'
    },
    node: {
      HTMLclass: 'node1'
    }
  },
  nodeStructure: {
    text: {
      name: 'Backend'
    },
    HTMLclass: 'dev-diagram-css',
    stackChildren: true,
    children: [{
        text: {
          name: 'Java J2EE'
        },
        HTMLclass: 'dev-diagram-css',
      },
      {
        text: {
          name: 'Struts'
        },
        HTMLclass: 'dev-diagram-css'
      },
      {
        text: {
          name: 'Spring'
        },
        HTMLclass: 'dev-diagram-css',
      },
      {
        text: {
          name: 'Spring MVC'
        },
        HTMLclass: 'dev-diagram-css'
      },
      {
        text: {
          name: 'Spring Security'
        },
        HTMLclass: 'dev-diagram-css'
      },
      {
        text: {
          name: 'Hibernate'
        },
        HTMLclass: 'dev-diagram-css'
      }
    ]
  }
};


/***/ }),

/***/ "./src/assets/js/diagram.js":
/*!**********************************!*\
  !*** ./src/assets/js/diagram.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var archi_config = {
    chart: {
        container: '#archiDiagram',

        nodeAlign: 'BOTTOM',

        connectors: {
            type: 'step'
        },
        node: {
            HTMLclass: 'node1'
        }
    },
    nodeStructure: {
      text: {
              name: 'Architecture'
          },
          HTMLclass: 'archi-diagram-css',
          stackChildren:true,
          children: [
                      {
                          text:{
                              name: 'Analyze'
                          },
                          HTMLclass: 'archi-diagram-css',
                          link: {
                              href: 'http://www.google.com'
                          }
                      },
                      {
                          text:{
                              name: 'Conception'
                          },
                          HTMLclass: 'archi-diagram-css'
                      },
                      {
                          text:{
                              name: 'Technical Recommandation'
                          },
                          HTMLclass: 'archi-diagram-css'
                      }
                  ]
    }
};

var devops_config = {
    chart: {
        container: '#devOpsDiagram',

        nodeAlign: 'BOTTOM',

        connectors: {
            type: 'step'
        },
        node: {
            HTMLclass: 'node1'
        }
    },
    nodeStructure: {
      text: {
              name: 'DevOps'
          },
          HTMLclass: 'dev-ops-diagram-css',
          stackChildren:true,
          children: [
                      {
                          text:{
                              name: 'Development Environment',
                              title: 'Setup'

                          },
                          HTMLclass: 'dev-ops-diagram-css',
                          link: {
                              href: 'http://www.google.com'
                          }
                      },
                      {
                          text:{
                              name: 'Standard Development',
                              title: 'Rule Configuration'
                          },
                          HTMLclass: 'dev-ops-diagram-css'
                      },
                      {
                          text:{
                              name: 'IoC Management'
                          },
                          HTMLclass: 'dev-ops-diagram-css'
                      }
                  ]
    }
};

var database_config = {
    chart: {
        container: '#databaseDiagram',

        nodeAlign: 'BOTTOM',

        connectors: {
            type: 'step'
        },
        node: {
            HTMLclass: 'node1'
        }
    },
    nodeStructure: {
      text: {
              name: 'DataBase'
          },
          HTMLclass: 'database-diagram-css',
          stackChildren:true,
          children: [
                      {
                          text:{
                              name: 'MySQL'

                          },
                          HTMLclass: 'database-diagram-css',
                          link: {
                              href: 'http://www.google.com'
                          }
                      },
                      {
                          text:{
                              name: 'PostgreSQL'
                          },
                          HTMLclass: 'database-diagram-css'
                      },
                      {
                          text:{
                              name: 'Oracle'
                          },
                          HTMLclass: 'database-diagram-css'
                      },
                      {
                          text:{
                              name: 'SQL Server'
                          },
                          HTMLclass: 'database-diagram-css'
                      },
                      {
                          text:{
                              name: 'Sybase'
                          },
                          HTMLclass: 'database-diagram-css'
                      },
                      {
                          text:{
                              name: 'Derby'
                          },
                          HTMLclass: 'database-diagram-css'
                      },
                      {
                          text:{
                              name: 'MongoDB'
                          },
                          HTMLclass: 'database-diagram-css'
                      },
                      {
                          text:{
                              name: 'CouchBase'
                          },
                          HTMLclass: 'database-diagram-css'
                      },
                      {
                          text:{
                              name: 'NoSQL'
                          },
                          HTMLclass: 'database-diagram-css'
                      }
                  ]
    }
};


/***/ }),

/***/ "./src/assets/js/raphael.js":
/*!**********************************!*\
  !*** ./src/assets/js/raphael.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_LOCAL_MODULE_0__, __WEBPACK_LOCAL_MODULE_0__module;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_1__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_2__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_3__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// ┌────────────────────────────────────────────────────────────────────┐ \\
// │ Raphaël 2.1.4 - JavaScript Vector Library                          │ \\
// ├────────────────────────────────────────────────────────────────────┤ \\
// │ Copyright © 2008-2012 Dmitry Baranovskiy (http://raphaeljs.com)    │ \\
// │ Copyright © 2008-2012 Sencha Labs (http://sencha.com)              │ \\
// ├────────────────────────────────────────────────────────────────────┤ \\
// │ Licensed under the MIT (http://raphaeljs.com/license.html) license.│ \\
// └────────────────────────────────────────────────────────────────────┘ \\
!function(a,b){ true?!(__WEBPACK_LOCAL_MODULE_0__module = { id: "eve", exports: {}, loaded: false }, __WEBPACK_LOCAL_MODULE_0__ = function(){return b()}.call(__WEBPACK_LOCAL_MODULE_0__module.exports, __webpack_require__, __WEBPACK_LOCAL_MODULE_0__module.exports, __WEBPACK_LOCAL_MODULE_0__module), __WEBPACK_LOCAL_MODULE_0__module.loaded = true, __WEBPACK_LOCAL_MODULE_0__ === undefined && (__WEBPACK_LOCAL_MODULE_0__ = __WEBPACK_LOCAL_MODULE_0__module.exports)):undefined}(this,function(){var a,b,c="0.4.2",d="hasOwnProperty",e=/[\.\/]/,f="*",g=function(){},h=function(a,b){return a-b},i={n:{}},j=function(c,d){c=String(c);var e,f=b,g=Array.prototype.slice.call(arguments,2),i=j.listeners(c),k=0,l=[],m={},n=[],o=a;a=c,b=0;for(var p=0,q=i.length;q>p;p++)"zIndex"in i[p]&&(l.push(i[p].zIndex),i[p].zIndex<0&&(m[i[p].zIndex]=i[p]));for(l.sort(h);l[k]<0;)if(e=m[l[k++]],n.push(e.apply(d,g)),b)return b=f,n;for(p=0;q>p;p++)if(e=i[p],"zIndex"in e)if(e.zIndex==l[k]){if(n.push(e.apply(d,g)),b)break;do if(k++,e=m[l[k]],e&&n.push(e.apply(d,g)),b)break;while(e)}else m[e.zIndex]=e;else if(n.push(e.apply(d,g)),b)break;return b=f,a=o,n.length?n:null};return j._events=i,j.listeners=function(a){var b,c,d,g,h,j,k,l,m=a.split(e),n=i,o=[n],p=[];for(g=0,h=m.length;h>g;g++){for(l=[],j=0,k=o.length;k>j;j++)for(n=o[j].n,c=[n[m[g]],n[f]],d=2;d--;)b=c[d],b&&(l.push(b),p=p.concat(b.f||[]));o=l}return p},j.on=function(a,b){if(a=String(a),"function"!=typeof b)return function(){};for(var c=a.split(e),d=i,f=0,h=c.length;h>f;f++)d=d.n,d=d.hasOwnProperty(c[f])&&d[c[f]]||(d[c[f]]={n:{}});for(d.f=d.f||[],f=0,h=d.f.length;h>f;f++)if(d.f[f]==b)return g;return d.f.push(b),function(a){+a==+a&&(b.zIndex=+a)}},j.f=function(a){var b=[].slice.call(arguments,1);return function(){j.apply(null,[a,null].concat(b).concat([].slice.call(arguments,0)))}},j.stop=function(){b=1},j.nt=function(b){return b?new RegExp("(?:\\.|\\/|^)"+b+"(?:\\.|\\/|$)").test(a):a},j.nts=function(){return a.split(e)},j.off=j.unbind=function(a,b){if(!a)return void(j._events=i={n:{}});var c,g,h,k,l,m,n,o=a.split(e),p=[i];for(k=0,l=o.length;l>k;k++)for(m=0;m<p.length;m+=h.length-2){if(h=[m,1],c=p[m].n,o[k]!=f)c[o[k]]&&h.push(c[o[k]]);else for(g in c)c[d](g)&&h.push(c[g]);p.splice.apply(p,h)}for(k=0,l=p.length;l>k;k++)for(c=p[k];c.n;){if(b){if(c.f){for(m=0,n=c.f.length;n>m;m++)if(c.f[m]==b){c.f.splice(m,1);break}!c.f.length&&delete c.f}for(g in c.n)if(c.n[d](g)&&c.n[g].f){var q=c.n[g].f;for(m=0,n=q.length;n>m;m++)if(q[m]==b){q.splice(m,1);break}!q.length&&delete c.n[g].f}}else{delete c.f;for(g in c.n)c.n[d](g)&&c.n[g].f&&delete c.n[g].f}c=c.n}},j.once=function(a,b){var c=function(){return j.unbind(a,c),b.apply(this,arguments)};return j.on(a,c)},j.version=c,j.toString=function(){return"You are running Eve "+c},j}),function(a,b){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_0__], __WEBPACK_LOCAL_MODULE_1__ = ((function(a){return b(a)}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__))):undefined}(this,function(a){function b(c){if(b.is(c,"function"))return t?c():a.on("raphael.DOMload",c);if(b.is(c,U))return b._engine.create[C](b,c.splice(0,3+b.is(c[0],S))).add(c);var d=Array.prototype.slice.call(arguments,0);if(b.is(d[d.length-1],"function")){var e=d.pop();return t?e.call(b._engine.create[C](b,d)):a.on("raphael.DOMload",function(){e.call(b._engine.create[C](b,d))})}return b._engine.create[C](b,arguments)}function c(a){if("function"==typeof a||Object(a)!==a)return a;var b=new a.constructor;for(var d in a)a[y](d)&&(b[d]=c(a[d]));return b}function d(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return a.push(a.splice(c,1)[0])}function e(a,b,c){function e(){var f=Array.prototype.slice.call(arguments,0),g=f.join("␀"),h=e.cache=e.cache||{},i=e.count=e.count||[];return h[y](g)?(d(i,g),c?c(h[g]):h[g]):(i.length>=1e3&&delete h[i.shift()],i.push(g),h[g]=a[C](b,f),c?c(h[g]):h[g])}return e}function f(){return this.hex}function g(a,b){for(var c=[],d=0,e=a.length;e-2*!b>d;d+=2){var f=[{x:+a[d-2],y:+a[d-1]},{x:+a[d],y:+a[d+1]},{x:+a[d+2],y:+a[d+3]},{x:+a[d+4],y:+a[d+5]}];b?d?e-4==d?f[3]={x:+a[0],y:+a[1]}:e-2==d&&(f[2]={x:+a[0],y:+a[1]},f[3]={x:+a[2],y:+a[3]}):f[0]={x:+a[e-2],y:+a[e-1]}:e-4==d?f[3]=f[2]:d||(f[0]={x:+a[d],y:+a[d+1]}),c.push(["C",(-f[0].x+6*f[1].x+f[2].x)/6,(-f[0].y+6*f[1].y+f[2].y)/6,(f[1].x+6*f[2].x-f[3].x)/6,(f[1].y+6*f[2].y-f[3].y)/6,f[2].x,f[2].y])}return c}function h(a,b,c,d,e){var f=-3*b+9*c-9*d+3*e,g=a*f+6*b-12*c+6*d;return a*g-3*b+3*c}function i(a,b,c,d,e,f,g,i,j){null==j&&(j=1),j=j>1?1:0>j?0:j;for(var k=j/2,l=12,m=[-.1252,.1252,-.3678,.3678,-.5873,.5873,-.7699,.7699,-.9041,.9041,-.9816,.9816],n=[.2491,.2491,.2335,.2335,.2032,.2032,.1601,.1601,.1069,.1069,.0472,.0472],o=0,p=0;l>p;p++){var q=k*m[p]+k,r=h(q,a,c,e,g),s=h(q,b,d,f,i),t=r*r+s*s;o+=n[p]*M.sqrt(t)}return k*o}function j(a,b,c,d,e,f,g,h,j){if(!(0>j||i(a,b,c,d,e,f,g,h)<j)){var k,l=1,m=l/2,n=l-m,o=.01;for(k=i(a,b,c,d,e,f,g,h,n);P(k-j)>o;)m/=2,n+=(j>k?1:-1)*m,k=i(a,b,c,d,e,f,g,h,n);return n}}function k(a,b,c,d,e,f,g,h){if(!(N(a,c)<O(e,g)||O(a,c)>N(e,g)||N(b,d)<O(f,h)||O(b,d)>N(f,h))){var i=(a*d-b*c)*(e-g)-(a-c)*(e*h-f*g),j=(a*d-b*c)*(f-h)-(b-d)*(e*h-f*g),k=(a-c)*(f-h)-(b-d)*(e-g);if(k){var l=i/k,m=j/k,n=+l.toFixed(2),o=+m.toFixed(2);if(!(n<+O(a,c).toFixed(2)||n>+N(a,c).toFixed(2)||n<+O(e,g).toFixed(2)||n>+N(e,g).toFixed(2)||o<+O(b,d).toFixed(2)||o>+N(b,d).toFixed(2)||o<+O(f,h).toFixed(2)||o>+N(f,h).toFixed(2)))return{x:l,y:m}}}}function l(a,c,d){var e=b.bezierBBox(a),f=b.bezierBBox(c);if(!b.isBBoxIntersect(e,f))return d?0:[];for(var g=i.apply(0,a),h=i.apply(0,c),j=N(~~(g/5),1),l=N(~~(h/5),1),m=[],n=[],o={},p=d?0:[],q=0;j+1>q;q++){var r=b.findDotsAtSegment.apply(b,a.concat(q/j));m.push({x:r.x,y:r.y,t:q/j})}for(q=0;l+1>q;q++)r=b.findDotsAtSegment.apply(b,c.concat(q/l)),n.push({x:r.x,y:r.y,t:q/l});for(q=0;j>q;q++)for(var s=0;l>s;s++){var t=m[q],u=m[q+1],v=n[s],w=n[s+1],x=P(u.x-t.x)<.001?"y":"x",y=P(w.x-v.x)<.001?"y":"x",z=k(t.x,t.y,u.x,u.y,v.x,v.y,w.x,w.y);if(z){if(o[z.x.toFixed(4)]==z.y.toFixed(4))continue;o[z.x.toFixed(4)]=z.y.toFixed(4);var A=t.t+P((z[x]-t[x])/(u[x]-t[x]))*(u.t-t.t),B=v.t+P((z[y]-v[y])/(w[y]-v[y]))*(w.t-v.t);A>=0&&1.001>=A&&B>=0&&1.001>=B&&(d?p++:p.push({x:z.x,y:z.y,t1:O(A,1),t2:O(B,1)}))}}return p}function m(a,c,d){a=b._path2curve(a),c=b._path2curve(c);for(var e,f,g,h,i,j,k,m,n,o,p=d?0:[],q=0,r=a.length;r>q;q++){var s=a[q];if("M"==s[0])e=i=s[1],f=j=s[2];else{"C"==s[0]?(n=[e,f].concat(s.slice(1)),e=n[6],f=n[7]):(n=[e,f,e,f,i,j,i,j],e=i,f=j);for(var t=0,u=c.length;u>t;t++){var v=c[t];if("M"==v[0])g=k=v[1],h=m=v[2];else{"C"==v[0]?(o=[g,h].concat(v.slice(1)),g=o[6],h=o[7]):(o=[g,h,g,h,k,m,k,m],g=k,h=m);var w=l(n,o,d);if(d)p+=w;else{for(var x=0,y=w.length;y>x;x++)w[x].segment1=q,w[x].segment2=t,w[x].bez1=n,w[x].bez2=o;p=p.concat(w)}}}}}return p}function n(a,b,c,d,e,f){null!=a?(this.a=+a,this.b=+b,this.c=+c,this.d=+d,this.e=+e,this.f=+f):(this.a=1,this.b=0,this.c=0,this.d=1,this.e=0,this.f=0)}function o(){return this.x+G+this.y+G+this.width+" × "+this.height}function p(a,b,c,d,e,f){function g(a){return((l*a+k)*a+j)*a}function h(a,b){var c=i(a,b);return((o*c+n)*c+m)*c}function i(a,b){var c,d,e,f,h,i;for(e=a,i=0;8>i;i++){if(f=g(e)-a,P(f)<b)return e;if(h=(3*l*e+2*k)*e+j,P(h)<1e-6)break;e-=f/h}if(c=0,d=1,e=a,c>e)return c;if(e>d)return d;for(;d>c;){if(f=g(e),P(f-a)<b)return e;a>f?c=e:d=e,e=(d-c)/2+c}return e}var j=3*b,k=3*(d-b)-j,l=1-j-k,m=3*c,n=3*(e-c)-m,o=1-m-n;return h(a,1/(200*f))}function q(a,b){var c=[],d={};if(this.ms=b,this.times=1,a){for(var e in a)a[y](e)&&(d[$(e)]=a[e],c.push($(e)));c.sort(ka)}this.anim=d,this.top=c[c.length-1],this.percents=c}function r(c,d,e,f,g,h){e=$(e);var i,j,k,l,m,o,q=c.ms,r={},s={},t={};if(f)for(w=0,x=fb.length;x>w;w++){var u=fb[w];if(u.el.id==d.id&&u.anim==c){u.percent!=e?(fb.splice(w,1),k=1):j=u,d.attr(u.totalOrigin);break}}else f=+s;for(var w=0,x=c.percents.length;x>w;w++){if(c.percents[w]==e||c.percents[w]>f*c.top){e=c.percents[w],m=c.percents[w-1]||0,q=q/c.top*(e-m),l=c.percents[w+1],i=c.anim[e];break}f&&d.attr(c.anim[c.percents[w]])}if(i){if(j)j.initstatus=f,j.start=new Date-j.ms*f;else{for(var z in i)if(i[y](z)&&(ca[y](z)||d.paper.customAttributes[y](z)))switch(r[z]=d.attr(z),null==r[z]&&(r[z]=ba[z]),s[z]=i[z],ca[z]){case S:t[z]=(s[z]-r[z])/q;break;case"colour":r[z]=b.getRGB(r[z]);var A=b.getRGB(s[z]);t[z]={r:(A.r-r[z].r)/q,g:(A.g-r[z].g)/q,b:(A.b-r[z].b)/q};break;case"path":var B=Ia(r[z],s[z]),C=B[1];for(r[z]=B[0],t[z]=[],w=0,x=r[z].length;x>w;w++){t[z][w]=[0];for(var E=1,F=r[z][w].length;F>E;E++)t[z][w][E]=(C[w][E]-r[z][w][E])/q}break;case"transform":var G=d._,J=Na(G[z],s[z]);if(J)for(r[z]=J.from,s[z]=J.to,t[z]=[],t[z].real=!0,w=0,x=r[z].length;x>w;w++)for(t[z][w]=[r[z][w][0]],E=1,F=r[z][w].length;F>E;E++)t[z][w][E]=(s[z][w][E]-r[z][w][E])/q;else{var K=d.matrix||new n,L={_:{transform:G.transform},getBBox:function(){return d.getBBox(1)}};r[z]=[K.a,K.b,K.c,K.d,K.e,K.f],La(L,s[z]),s[z]=L._.transform,t[z]=[(L.matrix.a-K.a)/q,(L.matrix.b-K.b)/q,(L.matrix.c-K.c)/q,(L.matrix.d-K.d)/q,(L.matrix.e-K.e)/q,(L.matrix.f-K.f)/q]}break;case"csv":var M=H(i[z])[I](v),N=H(r[z])[I](v);if("clip-rect"==z)for(r[z]=N,t[z]=[],w=N.length;w--;)t[z][w]=(M[w]-r[z][w])/q;s[z]=M;break;default:for(M=[][D](i[z]),N=[][D](r[z]),t[z]=[],w=d.paper.customAttributes[z].length;w--;)t[z][w]=((M[w]||0)-(N[w]||0))/q}var O=i.easing,P=b.easing_formulas[O];if(!P)if(P=H(O).match(Y),P&&5==P.length){var Q=P;P=function(a){return p(a,+Q[1],+Q[2],+Q[3],+Q[4],q)}}else P=la;if(o=i.start||c.start||+new Date,u={anim:c,percent:e,timestamp:o,start:o+(c.del||0),status:0,initstatus:f||0,stop:!1,ms:q,easing:P,from:r,diff:t,to:s,el:d,callback:i.callback,prev:m,next:l,repeat:h||c.times,origin:d.attr(),totalOrigin:g},fb.push(u),f&&!j&&!k&&(u.stop=!0,u.start=new Date-q*f,1==fb.length))return hb();k&&(u.start=new Date-u.ms*f),1==fb.length&&gb(hb)}a("raphael.anim.start."+d.id,d,c)}}function s(a){for(var b=0;b<fb.length;b++)fb[b].el.paper==a&&fb.splice(b--,1)}b.version="2.1.4",b.eve=a;var t,u,v=/[, ]+/,w={circle:1,rect:1,path:1,ellipse:1,text:1,image:1},x=/\{(\d+)\}/g,y="hasOwnProperty",z={doc:document,win:window},A={was:Object.prototype[y].call(z.win,"Raphael"),is:z.win.Raphael},B=function(){this.ca=this.customAttributes={}},C="apply",D="concat",E="ontouchstart"in z.win||z.win.DocumentTouch&&z.doc instanceof DocumentTouch,F="",G=" ",H=String,I="split",J="click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[I](G),K={mousedown:"touchstart",mousemove:"touchmove",mouseup:"touchend"},L=H.prototype.toLowerCase,M=Math,N=M.max,O=M.min,P=M.abs,Q=M.pow,R=M.PI,S="number",T="string",U="array",V=Object.prototype.toString,W=(b._ISURL=/^url\(['"]?(.+?)['"]?\)$/i,/^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i),X={NaN:1,Infinity:1,"-Infinity":1},Y=/^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,Z=M.round,$=parseFloat,_=parseInt,aa=H.prototype.toUpperCase,ba=b._availableAttrs={"arrow-end":"none","arrow-start":"none",blur:0,"clip-rect":"0 0 1e9 1e9",cursor:"default",cx:0,cy:0,fill:"#fff","fill-opacity":1,font:'10px "Arial"',"font-family":'"Arial"',"font-size":"10","font-style":"normal","font-weight":400,gradient:0,height:0,href:"http://raphaeljs.com/","letter-spacing":0,opacity:1,path:"M0,0",r:0,rx:0,ry:0,src:"",stroke:"#000","stroke-dasharray":"","stroke-linecap":"butt","stroke-linejoin":"butt","stroke-miterlimit":0,"stroke-opacity":1,"stroke-width":1,target:"_blank","text-anchor":"middle",title:"Raphael",transform:"",width:0,x:0,y:0},ca=b._availableAnimAttrs={blur:S,"clip-rect":"csv",cx:S,cy:S,fill:"colour","fill-opacity":S,"font-size":S,height:S,opacity:S,path:"path",r:S,rx:S,ry:S,stroke:"colour","stroke-opacity":S,"stroke-width":S,transform:"transform",width:S,x:S,y:S},da=/[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,ea={hs:1,rg:1},fa=/,?([achlmqrstvxz]),?/gi,ga=/([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,ha=/([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,ia=/(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,ja=(b._radial_gradient=/^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/,{}),ka=function(a,b){return $(a)-$(b)},la=function(a){return a},ma=b._rectPath=function(a,b,c,d,e){return e?[["M",a+e,b],["l",c-2*e,0],["a",e,e,0,0,1,e,e],["l",0,d-2*e],["a",e,e,0,0,1,-e,e],["l",2*e-c,0],["a",e,e,0,0,1,-e,-e],["l",0,2*e-d],["a",e,e,0,0,1,e,-e],["z"]]:[["M",a,b],["l",c,0],["l",0,d],["l",-c,0],["z"]]},na=function(a,b,c,d){return null==d&&(d=c),[["M",a,b],["m",0,-d],["a",c,d,0,1,1,0,2*d],["a",c,d,0,1,1,0,-2*d],["z"]]},oa=b._getPath={path:function(a){return a.attr("path")},circle:function(a){var b=a.attrs;return na(b.cx,b.cy,b.r)},ellipse:function(a){var b=a.attrs;return na(b.cx,b.cy,b.rx,b.ry)},rect:function(a){var b=a.attrs;return ma(b.x,b.y,b.width,b.height,b.r)},image:function(a){var b=a.attrs;return ma(b.x,b.y,b.width,b.height)},text:function(a){var b=a._getBBox();return ma(b.x,b.y,b.width,b.height)},set:function(a){var b=a._getBBox();return ma(b.x,b.y,b.width,b.height)}},pa=b.mapPath=function(a,b){if(!b)return a;var c,d,e,f,g,h,i;for(a=Ia(a),e=0,g=a.length;g>e;e++)for(i=a[e],f=1,h=i.length;h>f;f+=2)c=b.x(i[f],i[f+1]),d=b.y(i[f],i[f+1]),i[f]=c,i[f+1]=d;return a};if(b._g=z,b.type=z.win.SVGAngle||z.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")?"SVG":"VML","VML"==b.type){var qa,ra=z.doc.createElement("div");if(ra.innerHTML='<v:shape adj="1"/>',qa=ra.firstChild,qa.style.behavior="url(#default#VML)",!qa||"object"!=typeof qa.adj)return b.type=F;ra=null}b.svg=!(b.vml="VML"==b.type),b._Paper=B,b.fn=u=B.prototype=b.prototype,b._id=0,b._oid=0,b.is=function(a,b){return b=L.call(b),"finite"==b?!X[y](+a):"array"==b?a instanceof Array:"null"==b&&null===a||b==typeof a&&null!==a||"object"==b&&a===Object(a)||"array"==b&&Array.isArray&&Array.isArray(a)||V.call(a).slice(8,-1).toLowerCase()==b},b.angle=function(a,c,d,e,f,g){if(null==f){var h=a-d,i=c-e;return h||i?(180+180*M.atan2(-i,-h)/R+360)%360:0}return b.angle(a,c,f,g)-b.angle(d,e,f,g)},b.rad=function(a){return a%360*R/180},b.deg=function(a){return Math.round(180*a/R%360*1e3)/1e3},b.snapTo=function(a,c,d){if(d=b.is(d,"finite")?d:10,b.is(a,U)){for(var e=a.length;e--;)if(P(a[e]-c)<=d)return a[e]}else{a=+a;var f=c%a;if(d>f)return c-f;if(f>a-d)return c-f+a}return c};b.createUUID=function(a,b){return function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(a,b).toUpperCase()}}(/[xy]/g,function(a){var b=16*M.random()|0,c="x"==a?b:3&b|8;return c.toString(16)});b.setWindow=function(c){a("raphael.setWindow",b,z.win,c),z.win=c,z.doc=z.win.document,b._engine.initWin&&b._engine.initWin(z.win)};var sa=function(a){if(b.vml){var c,d=/^\s+|\s+$/g;try{var f=new ActiveXObject("htmlfile");f.write("<body>"),f.close(),c=f.body}catch(g){c=createPopup().document.body}var h=c.createTextRange();sa=e(function(a){try{c.style.color=H(a).replace(d,F);var b=h.queryCommandValue("ForeColor");return b=(255&b)<<16|65280&b|(16711680&b)>>>16,"#"+("000000"+b.toString(16)).slice(-6)}catch(e){return"none"}})}else{var i=z.doc.createElement("i");i.title="Raphaël Colour Picker",i.style.display="none",z.doc.body.appendChild(i),sa=e(function(a){return i.style.color=a,z.doc.defaultView.getComputedStyle(i,F).getPropertyValue("color")})}return sa(a)},ta=function(){return"hsb("+[this.h,this.s,this.b]+")"},ua=function(){return"hsl("+[this.h,this.s,this.l]+")"},va=function(){return this.hex},wa=function(a,c,d){if(null==c&&b.is(a,"object")&&"r"in a&&"g"in a&&"b"in a&&(d=a.b,c=a.g,a=a.r),null==c&&b.is(a,T)){var e=b.getRGB(a);a=e.r,c=e.g,d=e.b}return(a>1||c>1||d>1)&&(a/=255,c/=255,d/=255),[a,c,d]},xa=function(a,c,d,e){a*=255,c*=255,d*=255;var f={r:a,g:c,b:d,hex:b.rgb(a,c,d),toString:va};return b.is(e,"finite")&&(f.opacity=e),f};b.color=function(a){var c;return b.is(a,"object")&&"h"in a&&"s"in a&&"b"in a?(c=b.hsb2rgb(a),a.r=c.r,a.g=c.g,a.b=c.b,a.hex=c.hex):b.is(a,"object")&&"h"in a&&"s"in a&&"l"in a?(c=b.hsl2rgb(a),a.r=c.r,a.g=c.g,a.b=c.b,a.hex=c.hex):(b.is(a,"string")&&(a=b.getRGB(a)),b.is(a,"object")&&"r"in a&&"g"in a&&"b"in a?(c=b.rgb2hsl(a),a.h=c.h,a.s=c.s,a.l=c.l,c=b.rgb2hsb(a),a.v=c.b):(a={hex:"none"},a.r=a.g=a.b=a.h=a.s=a.v=a.l=-1)),a.toString=va,a},b.hsb2rgb=function(a,b,c,d){this.is(a,"object")&&"h"in a&&"s"in a&&"b"in a&&(c=a.b,b=a.s,d=a.o,a=a.h),a*=360;var e,f,g,h,i;return a=a%360/60,i=c*b,h=i*(1-P(a%2-1)),e=f=g=c-i,a=~~a,e+=[i,h,0,0,h,i][a],f+=[h,i,i,h,0,0][a],g+=[0,0,h,i,i,h][a],xa(e,f,g,d)},b.hsl2rgb=function(a,b,c,d){this.is(a,"object")&&"h"in a&&"s"in a&&"l"in a&&(c=a.l,b=a.s,a=a.h),(a>1||b>1||c>1)&&(a/=360,b/=100,c/=100),a*=360;var e,f,g,h,i;return a=a%360/60,i=2*b*(.5>c?c:1-c),h=i*(1-P(a%2-1)),e=f=g=c-i/2,a=~~a,e+=[i,h,0,0,h,i][a],f+=[h,i,i,h,0,0][a],g+=[0,0,h,i,i,h][a],xa(e,f,g,d)},b.rgb2hsb=function(a,b,c){c=wa(a,b,c),a=c[0],b=c[1],c=c[2];var d,e,f,g;return f=N(a,b,c),g=f-O(a,b,c),d=0==g?null:f==a?(b-c)/g:f==b?(c-a)/g+2:(a-b)/g+4,d=(d+360)%6*60/360,e=0==g?0:g/f,{h:d,s:e,b:f,toString:ta}},b.rgb2hsl=function(a,b,c){c=wa(a,b,c),a=c[0],b=c[1],c=c[2];var d,e,f,g,h,i;return g=N(a,b,c),h=O(a,b,c),i=g-h,d=0==i?null:g==a?(b-c)/i:g==b?(c-a)/i+2:(a-b)/i+4,d=(d+360)%6*60/360,f=(g+h)/2,e=0==i?0:.5>f?i/(2*f):i/(2-2*f),{h:d,s:e,l:f,toString:ua}},b._path2string=function(){return this.join(",").replace(fa,"$1")};b._preload=function(a,b){var c=z.doc.createElement("img");c.style.cssText="position:absolute;left:-9999em;top:-9999em",c.onload=function(){b.call(this),this.onload=null,z.doc.body.removeChild(this)},c.onerror=function(){z.doc.body.removeChild(this)},z.doc.body.appendChild(c),c.src=a};b.getRGB=e(function(a){if(!a||(a=H(a)).indexOf("-")+1)return{r:-1,g:-1,b:-1,hex:"none",error:1,toString:f};if("none"==a)return{r:-1,g:-1,b:-1,hex:"none",toString:f};!(ea[y](a.toLowerCase().substring(0,2))||"#"==a.charAt())&&(a=sa(a));var c,d,e,g,h,i,j=a.match(W);return j?(j[2]&&(e=_(j[2].substring(5),16),d=_(j[2].substring(3,5),16),c=_(j[2].substring(1,3),16)),j[3]&&(e=_((h=j[3].charAt(3))+h,16),d=_((h=j[3].charAt(2))+h,16),c=_((h=j[3].charAt(1))+h,16)),j[4]&&(i=j[4][I](da),c=$(i[0]),"%"==i[0].slice(-1)&&(c*=2.55),d=$(i[1]),"%"==i[1].slice(-1)&&(d*=2.55),e=$(i[2]),"%"==i[2].slice(-1)&&(e*=2.55),"rgba"==j[1].toLowerCase().slice(0,4)&&(g=$(i[3])),i[3]&&"%"==i[3].slice(-1)&&(g/=100)),j[5]?(i=j[5][I](da),c=$(i[0]),"%"==i[0].slice(-1)&&(c*=2.55),d=$(i[1]),"%"==i[1].slice(-1)&&(d*=2.55),e=$(i[2]),"%"==i[2].slice(-1)&&(e*=2.55),("deg"==i[0].slice(-3)||"°"==i[0].slice(-1))&&(c/=360),"hsba"==j[1].toLowerCase().slice(0,4)&&(g=$(i[3])),i[3]&&"%"==i[3].slice(-1)&&(g/=100),b.hsb2rgb(c,d,e,g)):j[6]?(i=j[6][I](da),c=$(i[0]),"%"==i[0].slice(-1)&&(c*=2.55),d=$(i[1]),"%"==i[1].slice(-1)&&(d*=2.55),e=$(i[2]),"%"==i[2].slice(-1)&&(e*=2.55),("deg"==i[0].slice(-3)||"°"==i[0].slice(-1))&&(c/=360),"hsla"==j[1].toLowerCase().slice(0,4)&&(g=$(i[3])),i[3]&&"%"==i[3].slice(-1)&&(g/=100),b.hsl2rgb(c,d,e,g)):(j={r:c,g:d,b:e,toString:f},j.hex="#"+(16777216|e|d<<8|c<<16).toString(16).slice(1),b.is(g,"finite")&&(j.opacity=g),j)):{r:-1,g:-1,b:-1,hex:"none",error:1,toString:f}},b),b.hsb=e(function(a,c,d){return b.hsb2rgb(a,c,d).hex}),b.hsl=e(function(a,c,d){return b.hsl2rgb(a,c,d).hex}),b.rgb=e(function(a,b,c){function d(a){return a+.5|0}return"#"+(16777216|d(c)|d(b)<<8|d(a)<<16).toString(16).slice(1)}),b.getColor=function(a){var b=this.getColor.start=this.getColor.start||{h:0,s:1,b:a||.75},c=this.hsb2rgb(b.h,b.s,b.b);return b.h+=.075,b.h>1&&(b.h=0,b.s-=.2,b.s<=0&&(this.getColor.start={h:0,s:1,b:b.b})),c.hex},b.getColor.reset=function(){delete this.start},b.parsePathString=function(a){if(!a)return null;var c=ya(a);if(c.arr)return Aa(c.arr);var d={a:7,c:6,h:1,l:2,m:2,r:4,q:4,s:4,t:2,v:1,z:0},e=[];return b.is(a,U)&&b.is(a[0],U)&&(e=Aa(a)),e.length||H(a).replace(ga,function(a,b,c){var f=[],g=b.toLowerCase();if(c.replace(ia,function(a,b){b&&f.push(+b)}),"m"==g&&f.length>2&&(e.push([b][D](f.splice(0,2))),g="l",b="m"==b?"l":"L"),"r"==g)e.push([b][D](f));else for(;f.length>=d[g]&&(e.push([b][D](f.splice(0,d[g]))),d[g]););}),e.toString=b._path2string,c.arr=Aa(e),e},b.parseTransformString=e(function(a){if(!a)return null;var c=[];return b.is(a,U)&&b.is(a[0],U)&&(c=Aa(a)),c.length||H(a).replace(ha,function(a,b,d){{var e=[];L.call(b)}d.replace(ia,function(a,b){b&&e.push(+b)}),c.push([b][D](e))}),c.toString=b._path2string,c});var ya=function(a){var b=ya.ps=ya.ps||{};return b[a]?b[a].sleep=100:b[a]={sleep:100},setTimeout(function(){for(var c in b)b[y](c)&&c!=a&&(b[c].sleep--,!b[c].sleep&&delete b[c])}),b[a]};b.findDotsAtSegment=function(a,b,c,d,e,f,g,h,i){var j=1-i,k=Q(j,3),l=Q(j,2),m=i*i,n=m*i,o=k*a+3*l*i*c+3*j*i*i*e+n*g,p=k*b+3*l*i*d+3*j*i*i*f+n*h,q=a+2*i*(c-a)+m*(e-2*c+a),r=b+2*i*(d-b)+m*(f-2*d+b),s=c+2*i*(e-c)+m*(g-2*e+c),t=d+2*i*(f-d)+m*(h-2*f+d),u=j*a+i*c,v=j*b+i*d,w=j*e+i*g,x=j*f+i*h,y=90-180*M.atan2(q-s,r-t)/R;return(q>s||t>r)&&(y+=180),{x:o,y:p,m:{x:q,y:r},n:{x:s,y:t},start:{x:u,y:v},end:{x:w,y:x},alpha:y}},b.bezierBBox=function(a,c,d,e,f,g,h,i){b.is(a,"array")||(a=[a,c,d,e,f,g,h,i]);var j=Ha.apply(null,a);return{x:j.min.x,y:j.min.y,x2:j.max.x,y2:j.max.y,width:j.max.x-j.min.x,height:j.max.y-j.min.y}},b.isPointInsideBBox=function(a,b,c){return b>=a.x&&b<=a.x2&&c>=a.y&&c<=a.y2},b.isBBoxIntersect=function(a,c){var d=b.isPointInsideBBox;return d(c,a.x,a.y)||d(c,a.x2,a.y)||d(c,a.x,a.y2)||d(c,a.x2,a.y2)||d(a,c.x,c.y)||d(a,c.x2,c.y)||d(a,c.x,c.y2)||d(a,c.x2,c.y2)||(a.x<c.x2&&a.x>c.x||c.x<a.x2&&c.x>a.x)&&(a.y<c.y2&&a.y>c.y||c.y<a.y2&&c.y>a.y)},b.pathIntersection=function(a,b){return m(a,b)},b.pathIntersectionNumber=function(a,b){return m(a,b,1)},b.isPointInsidePath=function(a,c,d){var e=b.pathBBox(a);return b.isPointInsideBBox(e,c,d)&&m(a,[["M",c,d],["H",e.x2+10]],1)%2==1},b._removedFactory=function(b){return function(){a("raphael.log",null,"Raphaël: you are calling to method “"+b+"” of removed object",b)}};var za=b.pathBBox=function(a){var b=ya(a);if(b.bbox)return c(b.bbox);if(!a)return{x:0,y:0,width:0,height:0,x2:0,y2:0};a=Ia(a);for(var d,e=0,f=0,g=[],h=[],i=0,j=a.length;j>i;i++)if(d=a[i],"M"==d[0])e=d[1],f=d[2],g.push(e),h.push(f);else{var k=Ha(e,f,d[1],d[2],d[3],d[4],d[5],d[6]);g=g[D](k.min.x,k.max.x),h=h[D](k.min.y,k.max.y),e=d[5],f=d[6]}var l=O[C](0,g),m=O[C](0,h),n=N[C](0,g),o=N[C](0,h),p=n-l,q=o-m,r={x:l,y:m,x2:n,y2:o,width:p,height:q,cx:l+p/2,cy:m+q/2};return b.bbox=c(r),r},Aa=function(a){var d=c(a);return d.toString=b._path2string,d},Ba=b._pathToRelative=function(a){var c=ya(a);if(c.rel)return Aa(c.rel);b.is(a,U)&&b.is(a&&a[0],U)||(a=b.parsePathString(a));var d=[],e=0,f=0,g=0,h=0,i=0;"M"==a[0][0]&&(e=a[0][1],f=a[0][2],g=e,h=f,i++,d.push(["M",e,f]));for(var j=i,k=a.length;k>j;j++){var l=d[j]=[],m=a[j];if(m[0]!=L.call(m[0]))switch(l[0]=L.call(m[0]),l[0]){case"a":l[1]=m[1],l[2]=m[2],l[3]=m[3],l[4]=m[4],l[5]=m[5],l[6]=+(m[6]-e).toFixed(3),l[7]=+(m[7]-f).toFixed(3);break;case"v":l[1]=+(m[1]-f).toFixed(3);break;case"m":g=m[1],h=m[2];default:for(var n=1,o=m.length;o>n;n++)l[n]=+(m[n]-(n%2?e:f)).toFixed(3)}else{l=d[j]=[],"m"==m[0]&&(g=m[1]+e,h=m[2]+f);for(var p=0,q=m.length;q>p;p++)d[j][p]=m[p]}var r=d[j].length;switch(d[j][0]){case"z":e=g,f=h;break;case"h":e+=+d[j][r-1];break;case"v":f+=+d[j][r-1];break;default:e+=+d[j][r-2],f+=+d[j][r-1]}}return d.toString=b._path2string,c.rel=Aa(d),d},Ca=b._pathToAbsolute=function(a){var c=ya(a);if(c.abs)return Aa(c.abs);if(b.is(a,U)&&b.is(a&&a[0],U)||(a=b.parsePathString(a)),!a||!a.length)return[["M",0,0]];var d=[],e=0,f=0,h=0,i=0,j=0;"M"==a[0][0]&&(e=+a[0][1],f=+a[0][2],h=e,i=f,j++,d[0]=["M",e,f]);for(var k,l,m=3==a.length&&"M"==a[0][0]&&"R"==a[1][0].toUpperCase()&&"Z"==a[2][0].toUpperCase(),n=j,o=a.length;o>n;n++){if(d.push(k=[]),l=a[n],l[0]!=aa.call(l[0]))switch(k[0]=aa.call(l[0]),k[0]){case"A":k[1]=l[1],k[2]=l[2],k[3]=l[3],k[4]=l[4],k[5]=l[5],k[6]=+(l[6]+e),k[7]=+(l[7]+f);break;case"V":k[1]=+l[1]+f;break;case"H":k[1]=+l[1]+e;break;case"R":for(var p=[e,f][D](l.slice(1)),q=2,r=p.length;r>q;q++)p[q]=+p[q]+e,p[++q]=+p[q]+f;d.pop(),d=d[D](g(p,m));break;case"M":h=+l[1]+e,i=+l[2]+f;default:for(q=1,r=l.length;r>q;q++)k[q]=+l[q]+(q%2?e:f)}else if("R"==l[0])p=[e,f][D](l.slice(1)),d.pop(),d=d[D](g(p,m)),k=["R"][D](l.slice(-2));else for(var s=0,t=l.length;t>s;s++)k[s]=l[s];switch(k[0]){case"Z":e=h,f=i;break;case"H":e=k[1];break;case"V":f=k[1];break;case"M":h=k[k.length-2],i=k[k.length-1];default:e=k[k.length-2],f=k[k.length-1]}}return d.toString=b._path2string,c.abs=Aa(d),d},Da=function(a,b,c,d){return[a,b,c,d,c,d]},Ea=function(a,b,c,d,e,f){var g=1/3,h=2/3;return[g*a+h*c,g*b+h*d,g*e+h*c,g*f+h*d,e,f]},Fa=function(a,b,c,d,f,g,h,i,j,k){var l,m=120*R/180,n=R/180*(+f||0),o=[],p=e(function(a,b,c){var d=a*M.cos(c)-b*M.sin(c),e=a*M.sin(c)+b*M.cos(c);return{x:d,y:e}});if(k)y=k[0],z=k[1],w=k[2],x=k[3];else{l=p(a,b,-n),a=l.x,b=l.y,l=p(i,j,-n),i=l.x,j=l.y;var q=(M.cos(R/180*f),M.sin(R/180*f),(a-i)/2),r=(b-j)/2,s=q*q/(c*c)+r*r/(d*d);s>1&&(s=M.sqrt(s),c=s*c,d=s*d);var t=c*c,u=d*d,v=(g==h?-1:1)*M.sqrt(P((t*u-t*r*r-u*q*q)/(t*r*r+u*q*q))),w=v*c*r/d+(a+i)/2,x=v*-d*q/c+(b+j)/2,y=M.asin(((b-x)/d).toFixed(9)),z=M.asin(((j-x)/d).toFixed(9));y=w>a?R-y:y,z=w>i?R-z:z,0>y&&(y=2*R+y),0>z&&(z=2*R+z),h&&y>z&&(y-=2*R),!h&&z>y&&(z-=2*R)}var A=z-y;if(P(A)>m){var B=z,C=i,E=j;z=y+m*(h&&z>y?1:-1),i=w+c*M.cos(z),j=x+d*M.sin(z),o=Fa(i,j,c,d,f,0,h,C,E,[z,B,w,x])}A=z-y;var F=M.cos(y),G=M.sin(y),H=M.cos(z),J=M.sin(z),K=M.tan(A/4),L=4/3*c*K,N=4/3*d*K,O=[a,b],Q=[a+L*G,b-N*F],S=[i+L*J,j-N*H],T=[i,j];if(Q[0]=2*O[0]-Q[0],Q[1]=2*O[1]-Q[1],k)return[Q,S,T][D](o);o=[Q,S,T][D](o).join()[I](",");for(var U=[],V=0,W=o.length;W>V;V++)U[V]=V%2?p(o[V-1],o[V],n).y:p(o[V],o[V+1],n).x;return U},Ga=function(a,b,c,d,e,f,g,h,i){var j=1-i;return{x:Q(j,3)*a+3*Q(j,2)*i*c+3*j*i*i*e+Q(i,3)*g,y:Q(j,3)*b+3*Q(j,2)*i*d+3*j*i*i*f+Q(i,3)*h}},Ha=e(function(a,b,c,d,e,f,g,h){var i,j=e-2*c+a-(g-2*e+c),k=2*(c-a)-2*(e-c),l=a-c,m=(-k+M.sqrt(k*k-4*j*l))/2/j,n=(-k-M.sqrt(k*k-4*j*l))/2/j,o=[b,h],p=[a,g];return P(m)>"1e12"&&(m=.5),P(n)>"1e12"&&(n=.5),m>0&&1>m&&(i=Ga(a,b,c,d,e,f,g,h,m),p.push(i.x),o.push(i.y)),n>0&&1>n&&(i=Ga(a,b,c,d,e,f,g,h,n),p.push(i.x),o.push(i.y)),j=f-2*d+b-(h-2*f+d),k=2*(d-b)-2*(f-d),l=b-d,m=(-k+M.sqrt(k*k-4*j*l))/2/j,n=(-k-M.sqrt(k*k-4*j*l))/2/j,P(m)>"1e12"&&(m=.5),P(n)>"1e12"&&(n=.5),m>0&&1>m&&(i=Ga(a,b,c,d,e,f,g,h,m),p.push(i.x),o.push(i.y)),n>0&&1>n&&(i=Ga(a,b,c,d,e,f,g,h,n),p.push(i.x),o.push(i.y)),{min:{x:O[C](0,p),y:O[C](0,o)},max:{x:N[C](0,p),y:N[C](0,o)}}}),Ia=b._path2curve=e(function(a,b){var c=!b&&ya(a);if(!b&&c.curve)return Aa(c.curve);for(var d=Ca(a),e=b&&Ca(b),f={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},g={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},h=(function(a,b,c){var d,e,f={T:1,Q:1};if(!a)return["C",b.x,b.y,b.x,b.y,b.x,b.y];switch(!(a[0]in f)&&(b.qx=b.qy=null),a[0]){case"M":b.X=a[1],b.Y=a[2];break;case"A":a=["C"][D](Fa[C](0,[b.x,b.y][D](a.slice(1))));break;case"S":"C"==c||"S"==c?(d=2*b.x-b.bx,e=2*b.y-b.by):(d=b.x,e=b.y),a=["C",d,e][D](a.slice(1));break;case"T":"Q"==c||"T"==c?(b.qx=2*b.x-b.qx,b.qy=2*b.y-b.qy):(b.qx=b.x,b.qy=b.y),a=["C"][D](Ea(b.x,b.y,b.qx,b.qy,a[1],a[2]));break;case"Q":b.qx=a[1],b.qy=a[2],a=["C"][D](Ea(b.x,b.y,a[1],a[2],a[3],a[4]));break;case"L":a=["C"][D](Da(b.x,b.y,a[1],a[2]));break;case"H":a=["C"][D](Da(b.x,b.y,a[1],b.y));break;case"V":a=["C"][D](Da(b.x,b.y,b.x,a[1]));break;case"Z":a=["C"][D](Da(b.x,b.y,b.X,b.Y))}return a}),i=function(a,b){if(a[b].length>7){a[b].shift();for(var c=a[b];c.length;)k[b]="A",e&&(l[b]="A"),a.splice(b++,0,["C"][D](c.splice(0,6)));a.splice(b,1),p=N(d.length,e&&e.length||0)}},j=function(a,b,c,f,g){a&&b&&"M"==a[g][0]&&"M"!=b[g][0]&&(b.splice(g,0,["M",f.x,f.y]),c.bx=0,c.by=0,c.x=a[g][1],c.y=a[g][2],p=N(d.length,e&&e.length||0))},k=[],l=[],m="",n="",o=0,p=N(d.length,e&&e.length||0);p>o;o++){d[o]&&(m=d[o][0]),"C"!=m&&(k[o]=m,o&&(n=k[o-1])),d[o]=h(d[o],f,n),"A"!=k[o]&&"C"==m&&(k[o]="C"),i(d,o),e&&(e[o]&&(m=e[o][0]),"C"!=m&&(l[o]=m,o&&(n=l[o-1])),e[o]=h(e[o],g,n),"A"!=l[o]&&"C"==m&&(l[o]="C"),i(e,o)),j(d,e,f,g,o),j(e,d,g,f,o);var q=d[o],r=e&&e[o],s=q.length,t=e&&r.length;f.x=q[s-2],f.y=q[s-1],f.bx=$(q[s-4])||f.x,f.by=$(q[s-3])||f.y,g.bx=e&&($(r[t-4])||g.x),g.by=e&&($(r[t-3])||g.y),g.x=e&&r[t-2],g.y=e&&r[t-1]}return e||(c.curve=Aa(d)),e?[d,e]:d},null,Aa),Ja=(b._parseDots=e(function(a){for(var c=[],d=0,e=a.length;e>d;d++){var f={},g=a[d].match(/^([^:]*):?([\d\.]*)/);if(f.color=b.getRGB(g[1]),f.color.error)return null;f.opacity=f.color.opacity,f.color=f.color.hex,g[2]&&(f.offset=g[2]+"%"),c.push(f)}for(d=1,e=c.length-1;e>d;d++)if(!c[d].offset){for(var h=$(c[d-1].offset||0),i=0,j=d+1;e>j;j++)if(c[j].offset){i=c[j].offset;break}i||(i=100,j=e),i=$(i);for(var k=(i-h)/(j-d+1);j>d;d++)h+=k,c[d].offset=h+"%"}return c}),b._tear=function(a,b){a==b.top&&(b.top=a.prev),a==b.bottom&&(b.bottom=a.next),a.next&&(a.next.prev=a.prev),a.prev&&(a.prev.next=a.next)}),Ka=(b._tofront=function(a,b){b.top!==a&&(Ja(a,b),a.next=null,a.prev=b.top,b.top.next=a,b.top=a)},b._toback=function(a,b){b.bottom!==a&&(Ja(a,b),a.next=b.bottom,a.prev=null,b.bottom.prev=a,b.bottom=a)},b._insertafter=function(a,b,c){Ja(a,c),b==c.top&&(c.top=a),b.next&&(b.next.prev=a),a.next=b.next,a.prev=b,b.next=a},b._insertbefore=function(a,b,c){Ja(a,c),b==c.bottom&&(c.bottom=a),b.prev&&(b.prev.next=a),a.prev=b.prev,b.prev=a,a.next=b},b.toMatrix=function(a,b){var c=za(a),d={_:{transform:F},getBBox:function(){return c}};return La(d,b),d.matrix}),La=(b.transformPath=function(a,b){return pa(a,Ka(a,b))},b._extractTransform=function(a,c){if(null==c)return a._.transform;c=H(c).replace(/\.{3}|\u2026/g,a._.transform||F);var d=b.parseTransformString(c),e=0,f=0,g=0,h=1,i=1,j=a._,k=new n;if(j.transform=d||[],d)for(var l=0,m=d.length;m>l;l++){var o,p,q,r,s,t=d[l],u=t.length,v=H(t[0]).toLowerCase(),w=t[0]!=v,x=w?k.invert():0;"t"==v&&3==u?w?(o=x.x(0,0),p=x.y(0,0),q=x.x(t[1],t[2]),r=x.y(t[1],t[2]),k.translate(q-o,r-p)):k.translate(t[1],t[2]):"r"==v?2==u?(s=s||a.getBBox(1),k.rotate(t[1],s.x+s.width/2,s.y+s.height/2),e+=t[1]):4==u&&(w?(q=x.x(t[2],t[3]),r=x.y(t[2],t[3]),k.rotate(t[1],q,r)):k.rotate(t[1],t[2],t[3]),e+=t[1]):"s"==v?2==u||3==u?(s=s||a.getBBox(1),k.scale(t[1],t[u-1],s.x+s.width/2,s.y+s.height/2),h*=t[1],i*=t[u-1]):5==u&&(w?(q=x.x(t[3],t[4]),r=x.y(t[3],t[4]),k.scale(t[1],t[2],q,r)):k.scale(t[1],t[2],t[3],t[4]),h*=t[1],i*=t[2]):"m"==v&&7==u&&k.add(t[1],t[2],t[3],t[4],t[5],t[6]),j.dirtyT=1,a.matrix=k}a.matrix=k,j.sx=h,j.sy=i,j.deg=e,j.dx=f=k.e,j.dy=g=k.f,1==h&&1==i&&!e&&j.bbox?(j.bbox.x+=+f,j.bbox.y+=+g):j.dirtyT=1}),Ma=function(a){var b=a[0];switch(b.toLowerCase()){case"t":return[b,0,0];case"m":return[b,1,0,0,1,0,0];case"r":return 4==a.length?[b,0,a[2],a[3]]:[b,0];case"s":return 5==a.length?[b,1,1,a[3],a[4]]:3==a.length?[b,1,1]:[b,1]}},Na=b._equaliseTransform=function(a,c){
c=H(c).replace(/\.{3}|\u2026/g,a),a=b.parseTransformString(a)||[],c=b.parseTransformString(c)||[];for(var d,e,f,g,h=N(a.length,c.length),i=[],j=[],k=0;h>k;k++){if(f=a[k]||Ma(c[k]),g=c[k]||Ma(f),f[0]!=g[0]||"r"==f[0].toLowerCase()&&(f[2]!=g[2]||f[3]!=g[3])||"s"==f[0].toLowerCase()&&(f[3]!=g[3]||f[4]!=g[4]))return;for(i[k]=[],j[k]=[],d=0,e=N(f.length,g.length);e>d;d++)d in f&&(i[k][d]=f[d]),d in g&&(j[k][d]=g[d])}return{from:i,to:j}};b._getContainer=function(a,c,d,e){var f;return f=null!=e||b.is(a,"object")?a:z.doc.getElementById(a),null!=f?f.tagName?null==c?{container:f,width:f.style.pixelWidth||f.offsetWidth,height:f.style.pixelHeight||f.offsetHeight}:{container:f,width:c,height:d}:{container:1,x:a,y:c,width:d,height:e}:void 0},b.pathToRelative=Ba,b._engine={},b.path2curve=Ia,b.matrix=function(a,b,c,d,e,f){return new n(a,b,c,d,e,f)},function(a){function c(a){return a[0]*a[0]+a[1]*a[1]}function d(a){var b=M.sqrt(c(a));a[0]&&(a[0]/=b),a[1]&&(a[1]/=b)}a.add=function(a,b,c,d,e,f){var g,h,i,j,k=[[],[],[]],l=[[this.a,this.c,this.e],[this.b,this.d,this.f],[0,0,1]],m=[[a,c,e],[b,d,f],[0,0,1]];for(a&&a instanceof n&&(m=[[a.a,a.c,a.e],[a.b,a.d,a.f],[0,0,1]]),g=0;3>g;g++)for(h=0;3>h;h++){for(j=0,i=0;3>i;i++)j+=l[g][i]*m[i][h];k[g][h]=j}this.a=k[0][0],this.b=k[1][0],this.c=k[0][1],this.d=k[1][1],this.e=k[0][2],this.f=k[1][2]},a.invert=function(){var a=this,b=a.a*a.d-a.b*a.c;return new n(a.d/b,-a.b/b,-a.c/b,a.a/b,(a.c*a.f-a.d*a.e)/b,(a.b*a.e-a.a*a.f)/b)},a.clone=function(){return new n(this.a,this.b,this.c,this.d,this.e,this.f)},a.translate=function(a,b){this.add(1,0,0,1,a,b)},a.scale=function(a,b,c,d){null==b&&(b=a),(c||d)&&this.add(1,0,0,1,c,d),this.add(a,0,0,b,0,0),(c||d)&&this.add(1,0,0,1,-c,-d)},a.rotate=function(a,c,d){a=b.rad(a),c=c||0,d=d||0;var e=+M.cos(a).toFixed(9),f=+M.sin(a).toFixed(9);this.add(e,f,-f,e,c,d),this.add(1,0,0,1,-c,-d)},a.x=function(a,b){return a*this.a+b*this.c+this.e},a.y=function(a,b){return a*this.b+b*this.d+this.f},a.get=function(a){return+this[H.fromCharCode(97+a)].toFixed(4)},a.toString=function(){return b.svg?"matrix("+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)].join()+")":[this.get(0),this.get(2),this.get(1),this.get(3),0,0].join()},a.toFilter=function(){return"progid:DXImageTransform.Microsoft.Matrix(M11="+this.get(0)+", M12="+this.get(2)+", M21="+this.get(1)+", M22="+this.get(3)+", Dx="+this.get(4)+", Dy="+this.get(5)+", sizingmethod='auto expand')"},a.offset=function(){return[this.e.toFixed(4),this.f.toFixed(4)]},a.split=function(){var a={};a.dx=this.e,a.dy=this.f;var e=[[this.a,this.c],[this.b,this.d]];a.scalex=M.sqrt(c(e[0])),d(e[0]),a.shear=e[0][0]*e[1][0]+e[0][1]*e[1][1],e[1]=[e[1][0]-e[0][0]*a.shear,e[1][1]-e[0][1]*a.shear],a.scaley=M.sqrt(c(e[1])),d(e[1]),a.shear/=a.scaley;var f=-e[0][1],g=e[1][1];return 0>g?(a.rotate=b.deg(M.acos(g)),0>f&&(a.rotate=360-a.rotate)):a.rotate=b.deg(M.asin(f)),a.isSimple=!(+a.shear.toFixed(9)||a.scalex.toFixed(9)!=a.scaley.toFixed(9)&&a.rotate),a.isSuperSimple=!+a.shear.toFixed(9)&&a.scalex.toFixed(9)==a.scaley.toFixed(9)&&!a.rotate,a.noRotation=!+a.shear.toFixed(9)&&!a.rotate,a},a.toTransformString=function(a){var b=a||this[I]();return b.isSimple?(b.scalex=+b.scalex.toFixed(4),b.scaley=+b.scaley.toFixed(4),b.rotate=+b.rotate.toFixed(4),(b.dx||b.dy?"t"+[b.dx,b.dy]:F)+(1!=b.scalex||1!=b.scaley?"s"+[b.scalex,b.scaley,0,0]:F)+(b.rotate?"r"+[b.rotate,0,0]:F)):"m"+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)]}}(n.prototype);for(var Oa=function(){this.returnValue=!1},Pa=function(){return this.originalEvent.preventDefault()},Qa=function(){this.cancelBubble=!0},Ra=function(){return this.originalEvent.stopPropagation()},Sa=function(a){var b=z.doc.documentElement.scrollTop||z.doc.body.scrollTop,c=z.doc.documentElement.scrollLeft||z.doc.body.scrollLeft;return{x:a.clientX+c,y:a.clientY+b}},Ta=function(){return z.doc.addEventListener?function(a,b,c,d){var e=function(a){var b=Sa(a);return c.call(d,a,b.x,b.y)};if(a.addEventListener(b,e,!1),E&&K[b]){var f=function(b){for(var e=Sa(b),f=b,g=0,h=b.targetTouches&&b.targetTouches.length;h>g;g++)if(b.targetTouches[g].target==a){b=b.targetTouches[g],b.originalEvent=f,b.preventDefault=Pa,b.stopPropagation=Ra;break}return c.call(d,b,e.x,e.y)};a.addEventListener(K[b],f,!1)}return function(){return a.removeEventListener(b,e,!1),E&&K[b]&&a.removeEventListener(K[b],f,!1),!0}}:z.doc.attachEvent?function(a,b,c,d){var e=function(a){a=a||z.win.event;var b=z.doc.documentElement.scrollTop||z.doc.body.scrollTop,e=z.doc.documentElement.scrollLeft||z.doc.body.scrollLeft,f=a.clientX+e,g=a.clientY+b;return a.preventDefault=a.preventDefault||Oa,a.stopPropagation=a.stopPropagation||Qa,c.call(d,a,f,g)};a.attachEvent("on"+b,e);var f=function(){return a.detachEvent("on"+b,e),!0};return f}:void 0}(),Ua=[],Va=function(b){for(var c,d=b.clientX,e=b.clientY,f=z.doc.documentElement.scrollTop||z.doc.body.scrollTop,g=z.doc.documentElement.scrollLeft||z.doc.body.scrollLeft,h=Ua.length;h--;){if(c=Ua[h],E&&b.touches){for(var i,j=b.touches.length;j--;)if(i=b.touches[j],i.identifier==c.el._drag.id){d=i.clientX,e=i.clientY,(b.originalEvent?b.originalEvent:b).preventDefault();break}}else b.preventDefault();var k,l=c.el.node,m=l.nextSibling,n=l.parentNode,o=l.style.display;z.win.opera&&n.removeChild(l),l.style.display="none",k=c.el.paper.getElementByPoint(d,e),l.style.display=o,z.win.opera&&(m?n.insertBefore(l,m):n.appendChild(l)),k&&a("raphael.drag.over."+c.el.id,c.el,k),d+=g,e+=f,a("raphael.drag.move."+c.el.id,c.move_scope||c.el,d-c.el._drag.x,e-c.el._drag.y,d,e,b)}},Wa=function(c){b.unmousemove(Va).unmouseup(Wa);for(var d,e=Ua.length;e--;)d=Ua[e],d.el._drag={},a("raphael.drag.end."+d.el.id,d.end_scope||d.start_scope||d.move_scope||d.el,c);Ua=[]},Xa=b.el={},Ya=J.length;Ya--;)!function(a){b[a]=Xa[a]=function(c,d){return b.is(c,"function")&&(this.events=this.events||[],this.events.push({name:a,f:c,unbind:Ta(this.shape||this.node||z.doc,a,c,d||this)})),this},b["un"+a]=Xa["un"+a]=function(c){for(var d=this.events||[],e=d.length;e--;)d[e].name!=a||!b.is(c,"undefined")&&d[e].f!=c||(d[e].unbind(),d.splice(e,1),!d.length&&delete this.events);return this}}(J[Ya]);Xa.data=function(c,d){var e=ja[this.id]=ja[this.id]||{};if(0==arguments.length)return e;if(1==arguments.length){if(b.is(c,"object")){for(var f in c)c[y](f)&&this.data(f,c[f]);return this}return a("raphael.data.get."+this.id,this,e[c],c),e[c]}return e[c]=d,a("raphael.data.set."+this.id,this,d,c),this},Xa.removeData=function(a){return null==a?ja[this.id]={}:ja[this.id]&&delete ja[this.id][a],this},Xa.getData=function(){return c(ja[this.id]||{})},Xa.hover=function(a,b,c,d){return this.mouseover(a,c).mouseout(b,d||c)},Xa.unhover=function(a,b){return this.unmouseover(a).unmouseout(b)};var Za=[];Xa.drag=function(c,d,e,f,g,h){function i(i){(i.originalEvent||i).preventDefault();var j=i.clientX,k=i.clientY,l=z.doc.documentElement.scrollTop||z.doc.body.scrollTop,m=z.doc.documentElement.scrollLeft||z.doc.body.scrollLeft;if(this._drag.id=i.identifier,E&&i.touches)for(var n,o=i.touches.length;o--;)if(n=i.touches[o],this._drag.id=n.identifier,n.identifier==this._drag.id){j=n.clientX,k=n.clientY;break}this._drag.x=j+m,this._drag.y=k+l,!Ua.length&&b.mousemove(Va).mouseup(Wa),Ua.push({el:this,move_scope:f,start_scope:g,end_scope:h}),d&&a.on("raphael.drag.start."+this.id,d),c&&a.on("raphael.drag.move."+this.id,c),e&&a.on("raphael.drag.end."+this.id,e),a("raphael.drag.start."+this.id,g||f||this,i.clientX+m,i.clientY+l,i)}return this._drag={},Za.push({el:this,start:i}),this.mousedown(i),this},Xa.onDragOver=function(b){b?a.on("raphael.drag.over."+this.id,b):a.unbind("raphael.drag.over."+this.id)},Xa.undrag=function(){for(var c=Za.length;c--;)Za[c].el==this&&(this.unmousedown(Za[c].start),Za.splice(c,1),a.unbind("raphael.drag.*."+this.id));!Za.length&&b.unmousemove(Va).unmouseup(Wa),Ua=[]},u.circle=function(a,c,d){var e=b._engine.circle(this,a||0,c||0,d||0);return this.__set__&&this.__set__.push(e),e},u.rect=function(a,c,d,e,f){var g=b._engine.rect(this,a||0,c||0,d||0,e||0,f||0);return this.__set__&&this.__set__.push(g),g},u.ellipse=function(a,c,d,e){var f=b._engine.ellipse(this,a||0,c||0,d||0,e||0);return this.__set__&&this.__set__.push(f),f},u.path=function(a){a&&!b.is(a,T)&&!b.is(a[0],U)&&(a+=F);var c=b._engine.path(b.format[C](b,arguments),this);return this.__set__&&this.__set__.push(c),c},u.image=function(a,c,d,e,f){var g=b._engine.image(this,a||"about:blank",c||0,d||0,e||0,f||0);return this.__set__&&this.__set__.push(g),g},u.text=function(a,c,d){var e=b._engine.text(this,a||0,c||0,H(d));return this.__set__&&this.__set__.push(e),e},u.set=function(a){!b.is(a,"array")&&(a=Array.prototype.splice.call(arguments,0,arguments.length));var c=new jb(a);return this.__set__&&this.__set__.push(c),c.paper=this,c.type="set",c},u.setStart=function(a){this.__set__=a||this.set()},u.setFinish=function(a){var b=this.__set__;return delete this.__set__,b},u.getSize=function(){var a=this.canvas.parentNode;return{width:a.offsetWidth,height:a.offsetHeight}},u.setSize=function(a,c){return b._engine.setSize.call(this,a,c)},u.setViewBox=function(a,c,d,e,f){return b._engine.setViewBox.call(this,a,c,d,e,f)},u.top=u.bottom=null,u.raphael=b;var $a=function(a){var b=a.getBoundingClientRect(),c=a.ownerDocument,d=c.body,e=c.documentElement,f=e.clientTop||d.clientTop||0,g=e.clientLeft||d.clientLeft||0,h=b.top+(z.win.pageYOffset||e.scrollTop||d.scrollTop)-f,i=b.left+(z.win.pageXOffset||e.scrollLeft||d.scrollLeft)-g;return{y:h,x:i}};u.getElementByPoint=function(a,b){var c=this,d=c.canvas,e=z.doc.elementFromPoint(a,b);if(z.win.opera&&"svg"==e.tagName){var f=$a(d),g=d.createSVGRect();g.x=a-f.x,g.y=b-f.y,g.width=g.height=1;var h=d.getIntersectionList(g,null);h.length&&(e=h[h.length-1])}if(!e)return null;for(;e.parentNode&&e!=d.parentNode&&!e.raphael;)e=e.parentNode;return e==c.canvas.parentNode&&(e=d),e=e&&e.raphael?c.getById(e.raphaelid):null},u.getElementsByBBox=function(a){var c=this.set();return this.forEach(function(d){b.isBBoxIntersect(d.getBBox(),a)&&c.push(d)}),c},u.getById=function(a){for(var b=this.bottom;b;){if(b.id==a)return b;b=b.next}return null},u.forEach=function(a,b){for(var c=this.bottom;c;){if(a.call(b,c)===!1)return this;c=c.next}return this},u.getElementsByPoint=function(a,b){var c=this.set();return this.forEach(function(d){d.isPointInside(a,b)&&c.push(d)}),c},Xa.isPointInside=function(a,c){var d=this.realPath=oa[this.type](this);return this.attr("transform")&&this.attr("transform").length&&(d=b.transformPath(d,this.attr("transform"))),b.isPointInsidePath(d,a,c)},Xa.getBBox=function(a){if(this.removed)return{};var b=this._;return a?((b.dirty||!b.bboxwt)&&(this.realPath=oa[this.type](this),b.bboxwt=za(this.realPath),b.bboxwt.toString=o,b.dirty=0),b.bboxwt):((b.dirty||b.dirtyT||!b.bbox)&&((b.dirty||!this.realPath)&&(b.bboxwt=0,this.realPath=oa[this.type](this)),b.bbox=za(pa(this.realPath,this.matrix)),b.bbox.toString=o,b.dirty=b.dirtyT=0),b.bbox)},Xa.clone=function(){if(this.removed)return null;var a=this.paper[this.type]().attr(this.attr());return this.__set__&&this.__set__.push(a),a},Xa.glow=function(a){if("text"==this.type)return null;a=a||{};var b={width:(a.width||10)+(+this.attr("stroke-width")||1),fill:a.fill||!1,opacity:null==a.opacity?.5:a.opacity,offsetx:a.offsetx||0,offsety:a.offsety||0,color:a.color||"#000"},c=b.width/2,d=this.paper,e=d.set(),f=this.realPath||oa[this.type](this);f=this.matrix?pa(f,this.matrix):f;for(var g=1;c+1>g;g++)e.push(d.path(f).attr({stroke:b.color,fill:b.fill?b.color:"none","stroke-linejoin":"round","stroke-linecap":"round","stroke-width":+(b.width/c*g).toFixed(3),opacity:+(b.opacity/c).toFixed(3)}));return e.insertBefore(this).translate(b.offsetx,b.offsety)};var _a=function(a,c,d,e,f,g,h,k,l){return null==l?i(a,c,d,e,f,g,h,k):b.findDotsAtSegment(a,c,d,e,f,g,h,k,j(a,c,d,e,f,g,h,k,l))},ab=function(a,c){return function(d,e,f){d=Ia(d);for(var g,h,i,j,k,l="",m={},n=0,o=0,p=d.length;p>o;o++){if(i=d[o],"M"==i[0])g=+i[1],h=+i[2];else{if(j=_a(g,h,i[1],i[2],i[3],i[4],i[5],i[6]),n+j>e){if(c&&!m.start){if(k=_a(g,h,i[1],i[2],i[3],i[4],i[5],i[6],e-n),l+=["C"+k.start.x,k.start.y,k.m.x,k.m.y,k.x,k.y],f)return l;m.start=l,l=["M"+k.x,k.y+"C"+k.n.x,k.n.y,k.end.x,k.end.y,i[5],i[6]].join(),n+=j,g=+i[5],h=+i[6];continue}if(!a&&!c)return k=_a(g,h,i[1],i[2],i[3],i[4],i[5],i[6],e-n),{x:k.x,y:k.y,alpha:k.alpha}}n+=j,g=+i[5],h=+i[6]}l+=i.shift()+i}return m.end=l,k=a?n:c?m:b.findDotsAtSegment(g,h,i[0],i[1],i[2],i[3],i[4],i[5],1),k.alpha&&(k={x:k.x,y:k.y,alpha:k.alpha}),k}},bb=ab(1),cb=ab(),db=ab(0,1);b.getTotalLength=bb,b.getPointAtLength=cb,b.getSubpath=function(a,b,c){if(this.getTotalLength(a)-c<1e-6)return db(a,b).end;var d=db(a,c,1);return b?db(d,b).end:d},Xa.getTotalLength=function(){var a=this.getPath();if(a)return this.node.getTotalLength?this.node.getTotalLength():bb(a)},Xa.getPointAtLength=function(a){var b=this.getPath();if(b)return cb(b,a)},Xa.getPath=function(){var a,c=b._getPath[this.type];if("text"!=this.type&&"set"!=this.type)return c&&(a=c(this)),a},Xa.getSubpath=function(a,c){var d=this.getPath();if(d)return b.getSubpath(d,a,c)};var eb=b.easing_formulas={linear:function(a){return a},"<":function(a){return Q(a,1.7)},">":function(a){return Q(a,.48)},"<>":function(a){var b=.48-a/1.04,c=M.sqrt(.1734+b*b),d=c-b,e=Q(P(d),1/3)*(0>d?-1:1),f=-c-b,g=Q(P(f),1/3)*(0>f?-1:1),h=e+g+.5;return 3*(1-h)*h*h+h*h*h},backIn:function(a){var b=1.70158;return a*a*((b+1)*a-b)},backOut:function(a){a-=1;var b=1.70158;return a*a*((b+1)*a+b)+1},elastic:function(a){return a==!!a?a:Q(2,-10*a)*M.sin(2*(a-.075)*R/.3)+1},bounce:function(a){var b,c=7.5625,d=2.75;return 1/d>a?b=c*a*a:2/d>a?(a-=1.5/d,b=c*a*a+.75):2.5/d>a?(a-=2.25/d,b=c*a*a+.9375):(a-=2.625/d,b=c*a*a+.984375),b}};eb.easeIn=eb["ease-in"]=eb["<"],eb.easeOut=eb["ease-out"]=eb[">"],eb.easeInOut=eb["ease-in-out"]=eb["<>"],eb["back-in"]=eb.backIn,eb["back-out"]=eb.backOut;var fb=[],gb=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){setTimeout(a,16)},hb=function(){for(var c=+new Date,d=0;d<fb.length;d++){var e=fb[d];if(!e.el.removed&&!e.paused){var f,g,h=c-e.start,i=e.ms,j=e.easing,k=e.from,l=e.diff,m=e.to,n=(e.t,e.el),o={},p={};if(e.initstatus?(h=(e.initstatus*e.anim.top-e.prev)/(e.percent-e.prev)*i,e.status=e.initstatus,delete e.initstatus,e.stop&&fb.splice(d--,1)):e.status=(e.prev+(e.percent-e.prev)*(h/i))/e.anim.top,!(0>h))if(i>h){var q=j(h/i);for(var s in k)if(k[y](s)){switch(ca[s]){case S:f=+k[s]+q*i*l[s];break;case"colour":f="rgb("+[ib(Z(k[s].r+q*i*l[s].r)),ib(Z(k[s].g+q*i*l[s].g)),ib(Z(k[s].b+q*i*l[s].b))].join(",")+")";break;case"path":f=[];for(var t=0,u=k[s].length;u>t;t++){f[t]=[k[s][t][0]];for(var v=1,w=k[s][t].length;w>v;v++)f[t][v]=+k[s][t][v]+q*i*l[s][t][v];f[t]=f[t].join(G)}f=f.join(G);break;case"transform":if(l[s].real)for(f=[],t=0,u=k[s].length;u>t;t++)for(f[t]=[k[s][t][0]],v=1,w=k[s][t].length;w>v;v++)f[t][v]=k[s][t][v]+q*i*l[s][t][v];else{var x=function(a){return+k[s][a]+q*i*l[s][a]};f=[["m",x(0),x(1),x(2),x(3),x(4),x(5)]]}break;case"csv":if("clip-rect"==s)for(f=[],t=4;t--;)f[t]=+k[s][t]+q*i*l[s][t];break;default:var z=[][D](k[s]);for(f=[],t=n.paper.customAttributes[s].length;t--;)f[t]=+z[t]+q*i*l[s][t]}o[s]=f}n.attr(o),function(b,c,d){setTimeout(function(){a("raphael.anim.frame."+b,c,d)})}(n.id,n,e.anim)}else{if(function(c,d,e){setTimeout(function(){a("raphael.anim.frame."+d.id,d,e),a("raphael.anim.finish."+d.id,d,e),b.is(c,"function")&&c.call(d)})}(e.callback,n,e.anim),n.attr(m),fb.splice(d--,1),e.repeat>1&&!e.next){for(g in m)m[y](g)&&(p[g]=e.totalOrigin[g]);e.el.attr(p),r(e.anim,e.el,e.anim.percents[0],null,e.totalOrigin,e.repeat-1)}e.next&&!e.stop&&r(e.anim,e.el,e.next,null,e.totalOrigin,e.repeat)}}}fb.length&&gb(hb)},ib=function(a){return a>255?255:0>a?0:a};Xa.animateWith=function(a,c,d,e,f,g){var h=this;if(h.removed)return g&&g.call(h),h;var i=d instanceof q?d:b.animation(d,e,f,g);r(i,h,i.percents[0],null,h.attr());for(var j=0,k=fb.length;k>j;j++)if(fb[j].anim==c&&fb[j].el==a){fb[k-1].start=fb[j].start;break}return h},Xa.onAnimation=function(b){return b?a.on("raphael.anim.frame."+this.id,b):a.unbind("raphael.anim.frame."+this.id),this},q.prototype.delay=function(a){var b=new q(this.anim,this.ms);return b.times=this.times,b.del=+a||0,b},q.prototype.repeat=function(a){var b=new q(this.anim,this.ms);return b.del=this.del,b.times=M.floor(N(a,0))||1,b},b.animation=function(a,c,d,e){if(a instanceof q)return a;(b.is(d,"function")||!d)&&(e=e||d||null,d=null),a=Object(a),c=+c||0;var f,g,h={};for(g in a)a[y](g)&&$(g)!=g&&$(g)+"%"!=g&&(f=!0,h[g]=a[g]);if(f)return d&&(h.easing=d),e&&(h.callback=e),new q({100:h},c);if(e){var i=0;for(var j in a){var k=_(j);a[y](j)&&k>i&&(i=k)}i+="%",!a[i].callback&&(a[i].callback=e)}return new q(a,c)},Xa.animate=function(a,c,d,e){var f=this;if(f.removed)return e&&e.call(f),f;var g=a instanceof q?a:b.animation(a,c,d,e);return r(g,f,g.percents[0],null,f.attr()),f},Xa.setTime=function(a,b){return a&&null!=b&&this.status(a,O(b,a.ms)/a.ms),this},Xa.status=function(a,b){var c,d,e=[],f=0;if(null!=b)return r(a,this,-1,O(b,1)),this;for(c=fb.length;c>f;f++)if(d=fb[f],d.el.id==this.id&&(!a||d.anim==a)){if(a)return d.status;e.push({anim:d.anim,status:d.status})}return a?0:e},Xa.pause=function(b){for(var c=0;c<fb.length;c++)fb[c].el.id!=this.id||b&&fb[c].anim!=b||a("raphael.anim.pause."+this.id,this,fb[c].anim)!==!1&&(fb[c].paused=!0);return this},Xa.resume=function(b){for(var c=0;c<fb.length;c++)if(fb[c].el.id==this.id&&(!b||fb[c].anim==b)){var d=fb[c];a("raphael.anim.resume."+this.id,this,d.anim)!==!1&&(delete d.paused,this.status(d.anim,d.status))}return this},Xa.stop=function(b){for(var c=0;c<fb.length;c++)fb[c].el.id!=this.id||b&&fb[c].anim!=b||a("raphael.anim.stop."+this.id,this,fb[c].anim)!==!1&&fb.splice(c--,1);return this},a.on("raphael.remove",s),a.on("raphael.clear",s),Xa.toString=function(){return"Raphaël’s object"};var jb=function(a){if(this.items=[],this.length=0,this.type="set",a)for(var b=0,c=a.length;c>b;b++)!a[b]||a[b].constructor!=Xa.constructor&&a[b].constructor!=jb||(this[this.items.length]=this.items[this.items.length]=a[b],this.length++)},kb=jb.prototype;kb.push=function(){for(var a,b,c=0,d=arguments.length;d>c;c++)a=arguments[c],!a||a.constructor!=Xa.constructor&&a.constructor!=jb||(b=this.items.length,this[b]=this.items[b]=a,this.length++);return this},kb.pop=function(){return this.length&&delete this[this.length--],this.items.pop()},kb.forEach=function(a,b){for(var c=0,d=this.items.length;d>c;c++)if(a.call(b,this.items[c],c)===!1)return this;return this};for(var lb in Xa)Xa[y](lb)&&(kb[lb]=function(a){return function(){var b=arguments;return this.forEach(function(c){c[a][C](c,b)})}}(lb));return kb.attr=function(a,c){if(a&&b.is(a,U)&&b.is(a[0],"object"))for(var d=0,e=a.length;e>d;d++)this.items[d].attr(a[d]);else for(var f=0,g=this.items.length;g>f;f++)this.items[f].attr(a,c);return this},kb.clear=function(){for(;this.length;)this.pop()},kb.splice=function(a,b,c){a=0>a?N(this.length+a,0):a,b=N(0,O(this.length-a,b));var d,e=[],f=[],g=[];for(d=2;d<arguments.length;d++)g.push(arguments[d]);for(d=0;b>d;d++)f.push(this[a+d]);for(;d<this.length-a;d++)e.push(this[a+d]);var h=g.length;for(d=0;d<h+e.length;d++)this.items[a+d]=this[a+d]=h>d?g[d]:e[d-h];for(d=this.items.length=this.length-=b-h;this[d];)delete this[d++];return new jb(f)},kb.exclude=function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]==a)return this.splice(b,1),!0},kb.animate=function(a,c,d,e){(b.is(d,"function")||!d)&&(e=d||null);var f,g,h=this.items.length,i=h,j=this;if(!h)return this;e&&(g=function(){!--h&&e.call(j)}),d=b.is(d,T)?d:g;var k=b.animation(a,c,d,g);for(f=this.items[--i].animate(k);i--;)this.items[i]&&!this.items[i].removed&&this.items[i].animateWith(f,k,k),this.items[i]&&!this.items[i].removed||h--;return this},kb.insertAfter=function(a){for(var b=this.items.length;b--;)this.items[b].insertAfter(a);return this},kb.getBBox=function(){for(var a=[],b=[],c=[],d=[],e=this.items.length;e--;)if(!this.items[e].removed){var f=this.items[e].getBBox();a.push(f.x),b.push(f.y),c.push(f.x+f.width),d.push(f.y+f.height)}return a=O[C](0,a),b=O[C](0,b),c=N[C](0,c),d=N[C](0,d),{x:a,y:b,x2:c,y2:d,width:c-a,height:d-b}},kb.clone=function(a){a=this.paper.set();for(var b=0,c=this.items.length;c>b;b++)a.push(this.items[b].clone());return a},kb.toString=function(){return"Raphaël‘s set"},kb.glow=function(a){var b=this.paper.set();return this.forEach(function(c,d){var e=c.glow(a);null!=e&&e.forEach(function(a,c){b.push(a)})}),b},kb.isPointInside=function(a,b){var c=!1;return this.forEach(function(d){return d.isPointInside(a,b)?(c=!0,!1):void 0}),c},b.registerFont=function(a){if(!a.face)return a;this.fonts=this.fonts||{};var b={w:a.w,face:{},glyphs:{}},c=a.face["font-family"];for(var d in a.face)a.face[y](d)&&(b.face[d]=a.face[d]);if(this.fonts[c]?this.fonts[c].push(b):this.fonts[c]=[b],!a.svg){b.face["units-per-em"]=_(a.face["units-per-em"],10);for(var e in a.glyphs)if(a.glyphs[y](e)){var f=a.glyphs[e];if(b.glyphs[e]={w:f.w,k:{},d:f.d&&"M"+f.d.replace(/[mlcxtrv]/g,function(a){return{l:"L",c:"C",x:"z",t:"m",r:"l",v:"c"}[a]||"M"})+"z"},f.k)for(var g in f.k)f[y](g)&&(b.glyphs[e].k[g]=f.k[g])}}return a},u.getFont=function(a,c,d,e){if(e=e||"normal",d=d||"normal",c=+c||{normal:400,bold:700,lighter:300,bolder:800}[c]||400,b.fonts){var f=b.fonts[a];if(!f){var g=new RegExp("(^|\\s)"+a.replace(/[^\w\d\s+!~.:_-]/g,F)+"(\\s|$)","i");for(var h in b.fonts)if(b.fonts[y](h)&&g.test(h)){f=b.fonts[h];break}}var i;if(f)for(var j=0,k=f.length;k>j&&(i=f[j],i.face["font-weight"]!=c||i.face["font-style"]!=d&&i.face["font-style"]||i.face["font-stretch"]!=e);j++);return i}},u.print=function(a,c,d,e,f,g,h,i){g=g||"middle",h=N(O(h||0,1),-1),i=N(O(i||1,3),1);var j,k=H(d)[I](F),l=0,m=0,n=F;if(b.is(e,"string")&&(e=this.getFont(e)),e){j=(f||16)/e.face["units-per-em"];for(var o=e.face.bbox[I](v),p=+o[0],q=o[3]-o[1],r=0,s=+o[1]+("baseline"==g?q+ +e.face.descent:q/2),t=0,u=k.length;u>t;t++){if("\n"==k[t])l=0,x=0,m=0,r+=q*i;else{var w=m&&e.glyphs[k[t-1]]||{},x=e.glyphs[k[t]];l+=m?(w.w||e.w)+(w.k&&w.k[k[t]]||0)+e.w*h:0,m=1}x&&x.d&&(n+=b.transformPath(x.d,["t",l*j,r*j,"s",j,j,p,s,"t",(a-p)/j,(c-s)/j]))}}return this.path(n).attr({fill:"#000",stroke:"none"})},u.add=function(a){if(b.is(a,"array"))for(var c,d=this.set(),e=0,f=a.length;f>e;e++)c=a[e]||{},w[y](c.type)&&d.push(this[c.type]().attr(c));return d},b.format=function(a,c){var d=b.is(c,U)?[0][D](c):arguments;return a&&b.is(a,T)&&d.length-1&&(a=a.replace(x,function(a,b){return null==d[++b]?F:d[b]})),a||F},b.fullfill=function(){var a=/\{([^\}]+)\}/g,b=/(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,c=function(a,c,d){var e=d;return c.replace(b,function(a,b,c,d,f){b=b||d,e&&(b in e&&(e=e[b]),"function"==typeof e&&f&&(e=e()))}),e=(null==e||e==d?a:e)+""};return function(b,d){return String(b).replace(a,function(a,b){return c(a,b,d)})}}(),b.ninja=function(){return A.was?z.win.Raphael=A.is:delete Raphael,b},b.st=kb,a.on("raphael.DOMload",function(){t=!0}),function(a,c,d){function e(){/in/.test(a.readyState)?setTimeout(e,9):b.eve("raphael.DOMload")}null==a.readyState&&a.addEventListener&&(a.addEventListener(c,d=function(){a.removeEventListener(c,d,!1),a.readyState="complete"},!1),a.readyState="loading"),e()}(document,"DOMContentLoaded"),b}),function(a,b){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_1__], __WEBPACK_LOCAL_MODULE_2__ = ((function(a){return b(a)}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__))):undefined}(this,function(a){if(!a||a.svg){var b="hasOwnProperty",c=String,d=parseFloat,e=parseInt,f=Math,g=f.max,h=f.abs,i=f.pow,j=/[, ]+/,k=a.eve,l="",m=" ",n="http://www.w3.org/1999/xlink",o={block:"M5,0 0,2.5 5,5z",classic:"M5,0 0,2.5 5,5 3.5,3 3.5,2z",diamond:"M2.5,0 5,2.5 2.5,5 0,2.5z",open:"M6,1 1,3.5 6,6",oval:"M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"},p={};a.toString=function(){return"Your browser supports SVG.\nYou are running Raphaël "+this.version};var q=function(d,e){if(e){"string"==typeof d&&(d=q(d));for(var f in e)e[b](f)&&("xlink:"==f.substring(0,6)?d.setAttributeNS(n,f.substring(6),c(e[f])):d.setAttribute(f,c(e[f])))}else d=a._g.doc.createElementNS("http://www.w3.org/2000/svg",d),d.style&&(d.style.webkitTapHighlightColor="rgba(0,0,0,0)");return d},r=function(b,e){var j="linear",k=b.id+e,m=.5,n=.5,o=b.node,p=b.paper,r=o.style,s=a._g.doc.getElementById(k);if(!s){if(e=c(e).replace(a._radial_gradient,function(a,b,c){if(j="radial",b&&c){m=d(b),n=d(c);var e=2*(n>.5)-1;i(m-.5,2)+i(n-.5,2)>.25&&(n=f.sqrt(.25-i(m-.5,2))*e+.5)&&.5!=n&&(n=n.toFixed(5)-1e-5*e)}return l}),e=e.split(/\s*\-\s*/),"linear"==j){var t=e.shift();if(t=-d(t),isNaN(t))return null;var u=[0,0,f.cos(a.rad(t)),f.sin(a.rad(t))],v=1/(g(h(u[2]),h(u[3]))||1);u[2]*=v,u[3]*=v,u[2]<0&&(u[0]=-u[2],u[2]=0),u[3]<0&&(u[1]=-u[3],u[3]=0)}var w=a._parseDots(e);if(!w)return null;if(k=k.replace(/[\(\)\s,\xb0#]/g,"_"),b.gradient&&k!=b.gradient.id&&(p.defs.removeChild(b.gradient),delete b.gradient),!b.gradient){s=q(j+"Gradient",{id:k}),b.gradient=s,q(s,"radial"==j?{fx:m,fy:n}:{x1:u[0],y1:u[1],x2:u[2],y2:u[3],gradientTransform:b.matrix.invert()}),p.defs.appendChild(s);for(var x=0,y=w.length;y>x;x++)s.appendChild(q("stop",{offset:w[x].offset?w[x].offset:x?"100%":"0%","stop-color":w[x].color||"#fff","stop-opacity":isFinite(w[x].opacity)?w[x].opacity:1}))}}return q(o,{fill:"url('"+document.location.origin+document.location.pathname+"#"+k+"')",opacity:1,"fill-opacity":1}),r.fill=l,r.opacity=1,r.fillOpacity=1,1},s=function(a){var b=a.getBBox(1);q(a.pattern,{patternTransform:a.matrix.invert()+" translate("+b.x+","+b.y+")"})},t=function(d,e,f){if("path"==d.type){for(var g,h,i,j,k,m=c(e).toLowerCase().split("-"),n=d.paper,r=f?"end":"start",s=d.node,t=d.attrs,u=t["stroke-width"],v=m.length,w="classic",x=3,y=3,z=5;v--;)switch(m[v]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":w=m[v];break;case"wide":y=5;break;case"narrow":y=2;break;case"long":x=5;break;case"short":x=2}if("open"==w?(x+=2,y+=2,z+=2,i=1,j=f?4:1,k={fill:"none",stroke:t.stroke}):(j=i=x/2,k={fill:t.stroke,stroke:"none"}),d._.arrows?f?(d._.arrows.endPath&&p[d._.arrows.endPath]--,d._.arrows.endMarker&&p[d._.arrows.endMarker]--):(d._.arrows.startPath&&p[d._.arrows.startPath]--,d._.arrows.startMarker&&p[d._.arrows.startMarker]--):d._.arrows={},"none"!=w){var A="raphael-marker-"+w,B="raphael-marker-"+r+w+x+y+"-obj"+d.id;a._g.doc.getElementById(A)?p[A]++:(n.defs.appendChild(q(q("path"),{"stroke-linecap":"round",d:o[w],id:A})),p[A]=1);var C,D=a._g.doc.getElementById(B);D?(p[B]++,C=D.getElementsByTagName("use")[0]):(D=q(q("marker"),{id:B,markerHeight:y,markerWidth:x,orient:"auto",refX:j,refY:y/2}),C=q(q("use"),{"xlink:href":"#"+A,transform:(f?"rotate(180 "+x/2+" "+y/2+") ":l)+"scale("+x/z+","+y/z+")","stroke-width":(1/((x/z+y/z)/2)).toFixed(4)}),D.appendChild(C),n.defs.appendChild(D),p[B]=1),q(C,k);var E=i*("diamond"!=w&&"oval"!=w);f?(g=d._.arrows.startdx*u||0,h=a.getTotalLength(t.path)-E*u):(g=E*u,h=a.getTotalLength(t.path)-(d._.arrows.enddx*u||0)),k={},k["marker-"+r]="url(#"+B+")",(h||g)&&(k.d=a.getSubpath(t.path,g,h)),q(s,k),d._.arrows[r+"Path"]=A,d._.arrows[r+"Marker"]=B,d._.arrows[r+"dx"]=E,d._.arrows[r+"Type"]=w,d._.arrows[r+"String"]=e}else f?(g=d._.arrows.startdx*u||0,h=a.getTotalLength(t.path)-g):(g=0,h=a.getTotalLength(t.path)-(d._.arrows.enddx*u||0)),d._.arrows[r+"Path"]&&q(s,{d:a.getSubpath(t.path,g,h)}),delete d._.arrows[r+"Path"],delete d._.arrows[r+"Marker"],delete d._.arrows[r+"dx"],delete d._.arrows[r+"Type"],delete d._.arrows[r+"String"];for(k in p)if(p[b](k)&&!p[k]){var F=a._g.doc.getElementById(k);F&&F.parentNode.removeChild(F)}}},u={"-":[3,1],".":[1,1],"-.":[3,1,1,1],"-..":[3,1,1,1,1,1],". ":[1,3],"- ":[4,3],"--":[8,3],"- .":[4,3,1,3],"--.":[8,3,1,3],"--..":[8,3,1,3,1,3]},v=function(a,b,d){if(b=u[c(b).toLowerCase()]){for(var e=a.attrs["stroke-width"]||"1",f={round:e,square:e,butt:0}[a.attrs["stroke-linecap"]||d["stroke-linecap"]]||0,g=[],h=b.length;h--;)g[h]=b[h]*e+(h%2?1:-1)*f;q(a.node,{"stroke-dasharray":g.join(",")})}else q(a.node,{"stroke-dasharray":"none"})},w=function(d,f){var i=d.node,k=d.attrs,m=i.style.visibility;i.style.visibility="hidden";for(var o in f)if(f[b](o)){if(!a._availableAttrs[b](o))continue;var p=f[o];switch(k[o]=p,o){case"blur":d.blur(p);break;case"title":var u=i.getElementsByTagName("title");if(u.length&&(u=u[0]))u.firstChild.nodeValue=p;else{u=q("title");var w=a._g.doc.createTextNode(p);u.appendChild(w),i.appendChild(u)}break;case"href":case"target":var x=i.parentNode;if("a"!=x.tagName.toLowerCase()){var z=q("a");x.insertBefore(z,i),z.appendChild(i),x=z}"target"==o?x.setAttributeNS(n,"show","blank"==p?"new":p):x.setAttributeNS(n,o,p);break;case"cursor":i.style.cursor=p;break;case"transform":d.transform(p);break;case"arrow-start":t(d,p);break;case"arrow-end":t(d,p,1);break;case"clip-rect":var A=c(p).split(j);if(4==A.length){d.clip&&d.clip.parentNode.parentNode.removeChild(d.clip.parentNode);var B=q("clipPath"),C=q("rect");B.id=a.createUUID(),q(C,{x:A[0],y:A[1],width:A[2],height:A[3]}),B.appendChild(C),d.paper.defs.appendChild(B),q(i,{"clip-path":"url(#"+B.id+")"}),d.clip=C}if(!p){var D=i.getAttribute("clip-path");if(D){var E=a._g.doc.getElementById(D.replace(/(^url\(#|\)$)/g,l));E&&E.parentNode.removeChild(E),q(i,{"clip-path":l}),delete d.clip}}break;case"path":"path"==d.type&&(q(i,{d:p?k.path=a._pathToAbsolute(p):"M0,0"}),d._.dirty=1,d._.arrows&&("startString"in d._.arrows&&t(d,d._.arrows.startString),"endString"in d._.arrows&&t(d,d._.arrows.endString,1)));break;case"width":if(i.setAttribute(o,p),d._.dirty=1,!k.fx)break;o="x",p=k.x;case"x":k.fx&&(p=-k.x-(k.width||0));case"rx":if("rx"==o&&"rect"==d.type)break;case"cx":i.setAttribute(o,p),d.pattern&&s(d),d._.dirty=1;break;case"height":if(i.setAttribute(o,p),d._.dirty=1,!k.fy)break;o="y",p=k.y;case"y":k.fy&&(p=-k.y-(k.height||0));case"ry":if("ry"==o&&"rect"==d.type)break;case"cy":i.setAttribute(o,p),d.pattern&&s(d),d._.dirty=1;break;case"r":"rect"==d.type?q(i,{rx:p,ry:p}):i.setAttribute(o,p),d._.dirty=1;break;case"src":"image"==d.type&&i.setAttributeNS(n,"href",p);break;case"stroke-width":(1!=d._.sx||1!=d._.sy)&&(p/=g(h(d._.sx),h(d._.sy))||1),i.setAttribute(o,p),k["stroke-dasharray"]&&v(d,k["stroke-dasharray"],f),d._.arrows&&("startString"in d._.arrows&&t(d,d._.arrows.startString),"endString"in d._.arrows&&t(d,d._.arrows.endString,1));break;case"stroke-dasharray":v(d,p,f);break;case"fill":var F=c(p).match(a._ISURL);if(F){B=q("pattern");var G=q("image");B.id=a.createUUID(),q(B,{x:0,y:0,patternUnits:"userSpaceOnUse",height:1,width:1}),q(G,{x:0,y:0,"xlink:href":F[1]}),B.appendChild(G),function(b){a._preload(F[1],function(){var a=this.offsetWidth,c=this.offsetHeight;q(b,{width:a,height:c}),q(G,{width:a,height:c})})}(B),d.paper.defs.appendChild(B),q(i,{fill:"url(#"+B.id+")"}),d.pattern=B,d.pattern&&s(d);break}var H=a.getRGB(p);if(H.error){if(("circle"==d.type||"ellipse"==d.type||"r"!=c(p).charAt())&&r(d,p)){if("opacity"in k||"fill-opacity"in k){var I=a._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g,l));if(I){var J=I.getElementsByTagName("stop");q(J[J.length-1],{"stop-opacity":("opacity"in k?k.opacity:1)*("fill-opacity"in k?k["fill-opacity"]:1)})}}k.gradient=p,k.fill="none";break}}else delete f.gradient,delete k.gradient,!a.is(k.opacity,"undefined")&&a.is(f.opacity,"undefined")&&q(i,{opacity:k.opacity}),!a.is(k["fill-opacity"],"undefined")&&a.is(f["fill-opacity"],"undefined")&&q(i,{"fill-opacity":k["fill-opacity"]});H[b]("opacity")&&q(i,{"fill-opacity":H.opacity>1?H.opacity/100:H.opacity});case"stroke":H=a.getRGB(p),i.setAttribute(o,H.hex),"stroke"==o&&H[b]("opacity")&&q(i,{"stroke-opacity":H.opacity>1?H.opacity/100:H.opacity}),"stroke"==o&&d._.arrows&&("startString"in d._.arrows&&t(d,d._.arrows.startString),"endString"in d._.arrows&&t(d,d._.arrows.endString,1));break;case"gradient":("circle"==d.type||"ellipse"==d.type||"r"!=c(p).charAt())&&r(d,p);

break;case"opacity":k.gradient&&!k[b]("stroke-opacity")&&q(i,{"stroke-opacity":p>1?p/100:p});case"fill-opacity":if(k.gradient){I=a._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g,l)),I&&(J=I.getElementsByTagName("stop"),q(J[J.length-1],{"stop-opacity":p}));break}default:"font-size"==o&&(p=e(p,10)+"px");var K=o.replace(/(\-.)/g,function(a){return a.substring(1).toUpperCase()});i.style[K]=p,d._.dirty=1,i.setAttribute(o,p)}}y(d,f),i.style.visibility=m},x=1.2,y=function(d,f){if("text"==d.type&&(f[b]("text")||f[b]("font")||f[b]("font-size")||f[b]("x")||f[b]("y"))){var g=d.attrs,h=d.node,i=h.firstChild?e(a._g.doc.defaultView.getComputedStyle(h.firstChild,l).getPropertyValue("font-size"),10):10;if(f[b]("text")){for(g.text=f.text;h.firstChild;)h.removeChild(h.firstChild);for(var j,k=c(f.text).split("\n"),m=[],n=0,o=k.length;o>n;n++)j=q("tspan"),n&&q(j,{dy:i*x,x:g.x}),j.appendChild(a._g.doc.createTextNode(k[n])),h.appendChild(j),m[n]=j}else for(m=h.getElementsByTagName("tspan"),n=0,o=m.length;o>n;n++)n?q(m[n],{dy:i*x,x:g.x}):q(m[0],{dy:0});q(h,{x:g.x,y:g.y}),d._.dirty=1;var p=d._getBBox(),r=g.y-(p.y+p.height/2);r&&a.is(r,"finite")&&q(m[0],{dy:r})}},z=function(a){return a.parentNode&&"a"===a.parentNode.tagName.toLowerCase()?a.parentNode:a},A=function(b,c){this[0]=this.node=b,b.raphael=!0,this.id=a._oid++,b.raphaelid=this.id,this.matrix=a.matrix(),this.realPath=null,this.paper=c,this.attrs=this.attrs||{},this._={transform:[],sx:1,sy:1,deg:0,dx:0,dy:0,dirty:1},!c.bottom&&(c.bottom=this),this.prev=c.top,c.top&&(c.top.next=this),c.top=this,this.next=null},B=a.el;A.prototype=B,B.constructor=A,a._engine.path=function(a,b){var c=q("path");b.canvas&&b.canvas.appendChild(c);var d=new A(c,b);return d.type="path",w(d,{fill:"none",stroke:"#000",path:a}),d},B.rotate=function(a,b,e){if(this.removed)return this;if(a=c(a).split(j),a.length-1&&(b=d(a[1]),e=d(a[2])),a=d(a[0]),null==e&&(b=e),null==b||null==e){var f=this.getBBox(1);b=f.x+f.width/2,e=f.y+f.height/2}return this.transform(this._.transform.concat([["r",a,b,e]])),this},B.scale=function(a,b,e,f){if(this.removed)return this;if(a=c(a).split(j),a.length-1&&(b=d(a[1]),e=d(a[2]),f=d(a[3])),a=d(a[0]),null==b&&(b=a),null==f&&(e=f),null==e||null==f)var g=this.getBBox(1);return e=null==e?g.x+g.width/2:e,f=null==f?g.y+g.height/2:f,this.transform(this._.transform.concat([["s",a,b,e,f]])),this},B.translate=function(a,b){return this.removed?this:(a=c(a).split(j),a.length-1&&(b=d(a[1])),a=d(a[0])||0,b=+b||0,this.transform(this._.transform.concat([["t",a,b]])),this)},B.transform=function(c){var d=this._;if(null==c)return d.transform;if(a._extractTransform(this,c),this.clip&&q(this.clip,{transform:this.matrix.invert()}),this.pattern&&s(this),this.node&&q(this.node,{transform:this.matrix}),1!=d.sx||1!=d.sy){var e=this.attrs[b]("stroke-width")?this.attrs["stroke-width"]:1;this.attr({"stroke-width":e})}return d.transform=this.matrix.toTransformString(),this},B.hide=function(){return this.removed||(this.node.style.display="none"),this},B.show=function(){return this.removed||(this.node.style.display=""),this},B.remove=function(){var b=z(this.node);if(!this.removed&&b.parentNode){var c=this.paper;c.__set__&&c.__set__.exclude(this),k.unbind("raphael.*.*."+this.id),this.gradient&&c.defs.removeChild(this.gradient),a._tear(this,c),b.parentNode.removeChild(b),this.removeData();for(var d in this)this[d]="function"==typeof this[d]?a._removedFactory(d):null;this.removed=!0}},B._getBBox=function(){if("none"==this.node.style.display){this.show();var a=!0}var b,c=!1;this.paper.canvas.parentElement?b=this.paper.canvas.parentElement.style:this.paper.canvas.parentNode&&(b=this.paper.canvas.parentNode.style),b&&"none"==b.display&&(c=!0,b.display="");var d={};try{d=this.node.getBBox()}catch(e){d={x:this.node.clientLeft,y:this.node.clientTop,width:this.node.clientWidth,height:this.node.clientHeight}}finally{d=d||{},c&&(b.display="none")}return a&&this.hide(),d},B.attr=function(c,d){if(this.removed)return this;if(null==c){var e={};for(var f in this.attrs)this.attrs[b](f)&&(e[f]=this.attrs[f]);return e.gradient&&"none"==e.fill&&(e.fill=e.gradient)&&delete e.gradient,e.transform=this._.transform,e}if(null==d&&a.is(c,"string")){if("fill"==c&&"none"==this.attrs.fill&&this.attrs.gradient)return this.attrs.gradient;if("transform"==c)return this._.transform;for(var g=c.split(j),h={},i=0,l=g.length;l>i;i++)c=g[i],c in this.attrs?h[c]=this.attrs[c]:a.is(this.paper.customAttributes[c],"function")?h[c]=this.paper.customAttributes[c].def:h[c]=a._availableAttrs[c];return l-1?h:h[g[0]]}if(null==d&&a.is(c,"array")){for(h={},i=0,l=c.length;l>i;i++)h[c[i]]=this.attr(c[i]);return h}if(null!=d){var m={};m[c]=d}else null!=c&&a.is(c,"object")&&(m=c);for(var n in m)k("raphael.attr."+n+"."+this.id,this,m[n]);for(n in this.paper.customAttributes)if(this.paper.customAttributes[b](n)&&m[b](n)&&a.is(this.paper.customAttributes[n],"function")){var o=this.paper.customAttributes[n].apply(this,[].concat(m[n]));this.attrs[n]=m[n];for(var p in o)o[b](p)&&(m[p]=o[p])}return w(this,m),this},B.toFront=function(){if(this.removed)return this;var b=z(this.node);b.parentNode.appendChild(b);var c=this.paper;return c.top!=this&&a._tofront(this,c),this},B.toBack=function(){if(this.removed)return this;var b=z(this.node),c=b.parentNode;c.insertBefore(b,c.firstChild),a._toback(this,this.paper);this.paper;return this},B.insertAfter=function(b){if(this.removed||!b)return this;var c=z(this.node),d=z(b.node||b[b.length-1].node);return d.nextSibling?d.parentNode.insertBefore(c,d.nextSibling):d.parentNode.appendChild(c),a._insertafter(this,b,this.paper),this},B.insertBefore=function(b){if(this.removed||!b)return this;var c=z(this.node),d=z(b.node||b[0].node);return d.parentNode.insertBefore(c,d),a._insertbefore(this,b,this.paper),this},B.blur=function(b){var c=this;if(0!==+b){var d=q("filter"),e=q("feGaussianBlur");c.attrs.blur=b,d.id=a.createUUID(),q(e,{stdDeviation:+b||1.5}),d.appendChild(e),c.paper.defs.appendChild(d),c._blur=d,q(c.node,{filter:"url(#"+d.id+")"})}else c._blur&&(c._blur.parentNode.removeChild(c._blur),delete c._blur,delete c.attrs.blur),c.node.removeAttribute("filter");return c},a._engine.circle=function(a,b,c,d){var e=q("circle");a.canvas&&a.canvas.appendChild(e);var f=new A(e,a);return f.attrs={cx:b,cy:c,r:d,fill:"none",stroke:"#000"},f.type="circle",q(e,f.attrs),f},a._engine.rect=function(a,b,c,d,e,f){var g=q("rect");a.canvas&&a.canvas.appendChild(g);var h=new A(g,a);return h.attrs={x:b,y:c,width:d,height:e,rx:f||0,ry:f||0,fill:"none",stroke:"#000"},h.type="rect",q(g,h.attrs),h},a._engine.ellipse=function(a,b,c,d,e){var f=q("ellipse");a.canvas&&a.canvas.appendChild(f);var g=new A(f,a);return g.attrs={cx:b,cy:c,rx:d,ry:e,fill:"none",stroke:"#000"},g.type="ellipse",q(f,g.attrs),g},a._engine.image=function(a,b,c,d,e,f){var g=q("image");q(g,{x:c,y:d,width:e,height:f,preserveAspectRatio:"none"}),g.setAttributeNS(n,"href",b),a.canvas&&a.canvas.appendChild(g);var h=new A(g,a);return h.attrs={x:c,y:d,width:e,height:f,src:b},h.type="image",h},a._engine.text=function(b,c,d,e){var f=q("text");b.canvas&&b.canvas.appendChild(f);var g=new A(f,b);return g.attrs={x:c,y:d,"text-anchor":"middle",text:e,"font-family":a._availableAttrs["font-family"],"font-size":a._availableAttrs["font-size"],stroke:"none",fill:"#000"},g.type="text",w(g,g.attrs),g},a._engine.setSize=function(a,b){return this.width=a||this.width,this.height=b||this.height,this.canvas.setAttribute("width",this.width),this.canvas.setAttribute("height",this.height),this._viewBox&&this.setViewBox.apply(this,this._viewBox),this},a._engine.create=function(){var b=a._getContainer.apply(0,arguments),c=b&&b.container,d=b.x,e=b.y,f=b.width,g=b.height;if(!c)throw new Error("SVG container not found.");var h,i=q("svg"),j="overflow:hidden;";return d=d||0,e=e||0,f=f||512,g=g||342,q(i,{height:g,version:1.1,width:f,xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}),1==c?(i.style.cssText=j+"position:absolute;left:"+d+"px;top:"+e+"px",a._g.doc.body.appendChild(i),h=1):(i.style.cssText=j+"position:relative",c.firstChild?c.insertBefore(i,c.firstChild):c.appendChild(i)),c=new a._Paper,c.width=f,c.height=g,c.canvas=i,c.clear(),c._left=c._top=0,h&&(c.renderfix=function(){}),c.renderfix(),c},a._engine.setViewBox=function(a,b,c,d,e){k("raphael.setViewBox",this,this._viewBox,[a,b,c,d,e]);var f,h,i=this.getSize(),j=g(c/i.width,d/i.height),l=this.top,n=e?"xMidYMid meet":"xMinYMin";for(null==a?(this._vbSize&&(j=1),delete this._vbSize,f="0 0 "+this.width+m+this.height):(this._vbSize=j,f=a+m+b+m+c+m+d),q(this.canvas,{viewBox:f,preserveAspectRatio:n});j&&l;)h="stroke-width"in l.attrs?l.attrs["stroke-width"]:1,l.attr({"stroke-width":h}),l._.dirty=1,l._.dirtyT=1,l=l.prev;return this._viewBox=[a,b,c,d,!!e],this},a.prototype.renderfix=function(){var a,b=this.canvas,c=b.style;try{a=b.getScreenCTM()||b.createSVGMatrix()}catch(d){a=b.createSVGMatrix()}var e=-a.e%1,f=-a.f%1;(e||f)&&(e&&(this._left=(this._left+e)%1,c.left=this._left+"px"),f&&(this._top=(this._top+f)%1,c.top=this._top+"px"))},a.prototype.clear=function(){a.eve("raphael.clear",this);for(var b=this.canvas;b.firstChild;)b.removeChild(b.firstChild);this.bottom=this.top=null,(this.desc=q("desc")).appendChild(a._g.doc.createTextNode("Created with Raphaël "+a.version)),b.appendChild(this.desc),b.appendChild(this.defs=q("defs"))},a.prototype.remove=function(){k("raphael.remove",this),this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas);for(var b in this)this[b]="function"==typeof this[b]?a._removedFactory(b):null};var C=a.st;for(var D in B)B[b](D)&&!C[b](D)&&(C[D]=function(a){return function(){var b=arguments;return this.forEach(function(c){c[a].apply(c,b)})}}(D))}}),function(a,b){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_1__], __WEBPACK_LOCAL_MODULE_3__ = ((function(a){return b(a)}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__))):undefined}(this,function(a){if(!a||a.vml){var b="hasOwnProperty",c=String,d=parseFloat,e=Math,f=e.round,g=e.max,h=e.min,i=e.abs,j="fill",k=/[, ]+/,l=a.eve,m=" progid:DXImageTransform.Microsoft",n=" ",o="",p={M:"m",L:"l",C:"c",Z:"x",m:"t",l:"r",c:"v",z:"x"},q=/([clmz]),?([^clmz]*)/gi,r=/ progid:\S+Blur\([^\)]+\)/g,s=/-?[^,\s-]+/g,t="position:absolute;left:0;top:0;width:1px;height:1px;behavior:url(#default#VML)",u=21600,v={path:1,rect:1,image:1},w={circle:1,ellipse:1},x=function(b){var d=/[ahqstv]/gi,e=a._pathToAbsolute;if(c(b).match(d)&&(e=a._path2curve),d=/[clmz]/g,e==a._pathToAbsolute&&!c(b).match(d)){var g=c(b).replace(q,function(a,b,c){var d=[],e="m"==b.toLowerCase(),g=p[b];return c.replace(s,function(a){e&&2==d.length&&(g+=d+p["m"==b?"l":"L"],d=[]),d.push(f(a*u))}),g+d});return g}var h,i,j=e(b);g=[];for(var k=0,l=j.length;l>k;k++){h=j[k],i=j[k][0].toLowerCase(),"z"==i&&(i="x");for(var m=1,r=h.length;r>m;m++)i+=f(h[m]*u)+(m!=r-1?",":o);g.push(i)}return g.join(n)},y=function(b,c,d){var e=a.matrix();return e.rotate(-b,.5,.5),{dx:e.x(c,d),dy:e.y(c,d)}},z=function(a,b,c,d,e,f){var g=a._,h=a.matrix,k=g.fillpos,l=a.node,m=l.style,o=1,p="",q=u/b,r=u/c;if(m.visibility="hidden",b&&c){if(l.coordsize=i(q)+n+i(r),m.rotation=f*(0>b*c?-1:1),f){var s=y(f,d,e);d=s.dx,e=s.dy}if(0>b&&(p+="x"),0>c&&(p+=" y")&&(o=-1),m.flip=p,l.coordorigin=d*-q+n+e*-r,k||g.fillsize){var t=l.getElementsByTagName(j);t=t&&t[0],l.removeChild(t),k&&(s=y(f,h.x(k[0],k[1]),h.y(k[0],k[1])),t.position=s.dx*o+n+s.dy*o),g.fillsize&&(t.size=g.fillsize[0]*i(b)+n+g.fillsize[1]*i(c)),l.appendChild(t)}m.visibility="visible"}};a.toString=function(){return"Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël "+this.version};var A=function(a,b,d){for(var e=c(b).toLowerCase().split("-"),f=d?"end":"start",g=e.length,h="classic",i="medium",j="medium";g--;)switch(e[g]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":h=e[g];break;case"wide":case"narrow":j=e[g];break;case"long":case"short":i=e[g]}var k=a.node.getElementsByTagName("stroke")[0];k[f+"arrow"]=h,k[f+"arrowlength"]=i,k[f+"arrowwidth"]=j},B=function(e,i){e.attrs=e.attrs||{};var l=e.node,m=e.attrs,p=l.style,q=v[e.type]&&(i.x!=m.x||i.y!=m.y||i.width!=m.width||i.height!=m.height||i.cx!=m.cx||i.cy!=m.cy||i.rx!=m.rx||i.ry!=m.ry||i.r!=m.r),r=w[e.type]&&(m.cx!=i.cx||m.cy!=i.cy||m.r!=i.r||m.rx!=i.rx||m.ry!=i.ry),s=e;for(var t in i)i[b](t)&&(m[t]=i[t]);if(q&&(m.path=a._getPath[e.type](e),e._.dirty=1),i.href&&(l.href=i.href),i.title&&(l.title=i.title),i.target&&(l.target=i.target),i.cursor&&(p.cursor=i.cursor),"blur"in i&&e.blur(i.blur),(i.path&&"path"==e.type||q)&&(l.path=x(~c(m.path).toLowerCase().indexOf("r")?a._pathToAbsolute(m.path):m.path),e._.dirty=1,"image"==e.type&&(e._.fillpos=[m.x,m.y],e._.fillsize=[m.width,m.height],z(e,1,1,0,0,0))),"transform"in i&&e.transform(i.transform),r){var y=+m.cx,B=+m.cy,D=+m.rx||+m.r||0,E=+m.ry||+m.r||0;l.path=a.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x",f((y-D)*u),f((B-E)*u),f((y+D)*u),f((B+E)*u),f(y*u)),e._.dirty=1}if("clip-rect"in i){var G=c(i["clip-rect"]).split(k);if(4==G.length){G[2]=+G[2]+ +G[0],G[3]=+G[3]+ +G[1];var H=l.clipRect||a._g.doc.createElement("div"),I=H.style;I.clip=a.format("rect({1}px {2}px {3}px {0}px)",G),l.clipRect||(I.position="absolute",I.top=0,I.left=0,I.width=e.paper.width+"px",I.height=e.paper.height+"px",l.parentNode.insertBefore(H,l),H.appendChild(l),l.clipRect=H)}i["clip-rect"]||l.clipRect&&(l.clipRect.style.clip="auto")}if(e.textpath){var J=e.textpath.style;i.font&&(J.font=i.font),i["font-family"]&&(J.fontFamily='"'+i["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g,o)+'"'),i["font-size"]&&(J.fontSize=i["font-size"]),i["font-weight"]&&(J.fontWeight=i["font-weight"]),i["font-style"]&&(J.fontStyle=i["font-style"])}if("arrow-start"in i&&A(s,i["arrow-start"]),"arrow-end"in i&&A(s,i["arrow-end"],1),null!=i.opacity||null!=i["stroke-width"]||null!=i.fill||null!=i.src||null!=i.stroke||null!=i["stroke-width"]||null!=i["stroke-opacity"]||null!=i["fill-opacity"]||null!=i["stroke-dasharray"]||null!=i["stroke-miterlimit"]||null!=i["stroke-linejoin"]||null!=i["stroke-linecap"]){var K=l.getElementsByTagName(j),L=!1;if(K=K&&K[0],!K&&(L=K=F(j)),"image"==e.type&&i.src&&(K.src=i.src),i.fill&&(K.on=!0),(null==K.on||"none"==i.fill||null===i.fill)&&(K.on=!1),K.on&&i.fill){var M=c(i.fill).match(a._ISURL);if(M){K.parentNode==l&&l.removeChild(K),K.rotate=!0,K.src=M[1],K.type="tile";var N=e.getBBox(1);K.position=N.x+n+N.y,e._.fillpos=[N.x,N.y],a._preload(M[1],function(){e._.fillsize=[this.offsetWidth,this.offsetHeight]})}else K.color=a.getRGB(i.fill).hex,K.src=o,K.type="solid",a.getRGB(i.fill).error&&(s.type in{circle:1,ellipse:1}||"r"!=c(i.fill).charAt())&&C(s,i.fill,K)&&(m.fill="none",m.gradient=i.fill,K.rotate=!1)}if("fill-opacity"in i||"opacity"in i){var O=((+m["fill-opacity"]+1||2)-1)*((+m.opacity+1||2)-1)*((+a.getRGB(i.fill).o+1||2)-1);O=h(g(O,0),1),K.opacity=O,K.src&&(K.color="none")}l.appendChild(K);var P=l.getElementsByTagName("stroke")&&l.getElementsByTagName("stroke")[0],Q=!1;!P&&(Q=P=F("stroke")),(i.stroke&&"none"!=i.stroke||i["stroke-width"]||null!=i["stroke-opacity"]||i["stroke-dasharray"]||i["stroke-miterlimit"]||i["stroke-linejoin"]||i["stroke-linecap"])&&(P.on=!0),("none"==i.stroke||null===i.stroke||null==P.on||0==i.stroke||0==i["stroke-width"])&&(P.on=!1);var R=a.getRGB(i.stroke);P.on&&i.stroke&&(P.color=R.hex),O=((+m["stroke-opacity"]+1||2)-1)*((+m.opacity+1||2)-1)*((+R.o+1||2)-1);var S=.75*(d(i["stroke-width"])||1);if(O=h(g(O,0),1),null==i["stroke-width"]&&(S=m["stroke-width"]),i["stroke-width"]&&(P.weight=S),S&&1>S&&(O*=S)&&(P.weight=1),P.opacity=O,i["stroke-linejoin"]&&(P.joinstyle=i["stroke-linejoin"]||"miter"),P.miterlimit=i["stroke-miterlimit"]||8,i["stroke-linecap"]&&(P.endcap="butt"==i["stroke-linecap"]?"flat":"square"==i["stroke-linecap"]?"square":"round"),"stroke-dasharray"in i){var T={"-":"shortdash",".":"shortdot","-.":"shortdashdot","-..":"shortdashdotdot",". ":"dot","- ":"dash","--":"longdash","- .":"dashdot","--.":"longdashdot","--..":"longdashdotdot"};P.dashstyle=T[b](i["stroke-dasharray"])?T[i["stroke-dasharray"]]:o}Q&&l.appendChild(P)}if("text"==s.type){s.paper.canvas.style.display=o;var U=s.paper.span,V=100,W=m.font&&m.font.match(/\d+(?:\.\d*)?(?=px)/);p=U.style,m.font&&(p.font=m.font),m["font-family"]&&(p.fontFamily=m["font-family"]),m["font-weight"]&&(p.fontWeight=m["font-weight"]),m["font-style"]&&(p.fontStyle=m["font-style"]),W=d(m["font-size"]||W&&W[0])||10,p.fontSize=W*V+"px",s.textpath.string&&(U.innerHTML=c(s.textpath.string).replace(/</g,"&#60;").replace(/&/g,"&#38;").replace(/\n/g,"<br>"));var X=U.getBoundingClientRect();s.W=m.w=(X.right-X.left)/V,s.H=m.h=(X.bottom-X.top)/V,s.X=m.x,s.Y=m.y+s.H/2,("x"in i||"y"in i)&&(s.path.v=a.format("m{0},{1}l{2},{1}",f(m.x*u),f(m.y*u),f(m.x*u)+1));for(var Y=["x","y","text","font","font-family","font-weight","font-style","font-size"],Z=0,$=Y.length;$>Z;Z++)if(Y[Z]in i){s._.dirty=1;break}switch(m["text-anchor"]){case"start":s.textpath.style["v-text-align"]="left",s.bbx=s.W/2;break;case"end":s.textpath.style["v-text-align"]="right",s.bbx=-s.W/2;break;default:s.textpath.style["v-text-align"]="center",s.bbx=0}s.textpath.style["v-text-kern"]=!0}},C=function(b,f,g){b.attrs=b.attrs||{};var h=(b.attrs,Math.pow),i="linear",j=".5 .5";if(b.attrs.gradient=f,f=c(f).replace(a._radial_gradient,function(a,b,c){return i="radial",b&&c&&(b=d(b),c=d(c),h(b-.5,2)+h(c-.5,2)>.25&&(c=e.sqrt(.25-h(b-.5,2))*(2*(c>.5)-1)+.5),j=b+n+c),o}),f=f.split(/\s*\-\s*/),"linear"==i){var k=f.shift();if(k=-d(k),isNaN(k))return null}var l=a._parseDots(f);if(!l)return null;if(b=b.shape||b.node,l.length){b.removeChild(g),g.on=!0,g.method="none",g.color=l[0].color,g.color2=l[l.length-1].color;for(var m=[],p=0,q=l.length;q>p;p++)l[p].offset&&m.push(l[p].offset+n+l[p].color);g.colors=m.length?m.join():"0% "+g.color,"radial"==i?(g.type="gradientTitle",g.focus="100%",g.focussize="0 0",g.focusposition=j,g.angle=0):(g.type="gradient",g.angle=(270-k)%360),b.appendChild(g)}return 1},D=function(b,c){this[0]=this.node=b,b.raphael=!0,this.id=a._oid++,b.raphaelid=this.id,this.X=0,this.Y=0,this.attrs={},this.paper=c,this.matrix=a.matrix(),this._={transform:[],sx:1,sy:1,dx:0,dy:0,deg:0,dirty:1,dirtyT:1},!c.bottom&&(c.bottom=this),this.prev=c.top,c.top&&(c.top.next=this),c.top=this,this.next=null},E=a.el;D.prototype=E,E.constructor=D,E.transform=function(b){if(null==b)return this._.transform;var d,e=this.paper._viewBoxShift,f=e?"s"+[e.scale,e.scale]+"-1-1t"+[e.dx,e.dy]:o;e&&(d=b=c(b).replace(/\.{3}|\u2026/g,this._.transform||o)),a._extractTransform(this,f+b);var g,h=this.matrix.clone(),i=this.skew,j=this.node,k=~c(this.attrs.fill).indexOf("-"),l=!c(this.attrs.fill).indexOf("url(");if(h.translate(1,1),l||k||"image"==this.type)if(i.matrix="1 0 0 1",i.offset="0 0",g=h.split(),k&&g.noRotation||!g.isSimple){j.style.filter=h.toFilter();var m=this.getBBox(),p=this.getBBox(1),q=m.x-p.x,r=m.y-p.y;j.coordorigin=q*-u+n+r*-u,z(this,1,1,q,r,0)}else j.style.filter=o,z(this,g.scalex,g.scaley,g.dx,g.dy,g.rotate);else j.style.filter=o,i.matrix=c(h),i.offset=h.offset();return null!==d&&(this._.transform=d,a._extractTransform(this,d)),this},E.rotate=function(a,b,e){if(this.removed)return this;if(null!=a){if(a=c(a).split(k),a.length-1&&(b=d(a[1]),e=d(a[2])),a=d(a[0]),null==e&&(b=e),null==b||null==e){var f=this.getBBox(1);b=f.x+f.width/2,e=f.y+f.height/2}return this._.dirtyT=1,this.transform(this._.transform.concat([["r",a,b,e]])),this}},E.translate=function(a,b){return this.removed?this:(a=c(a).split(k),a.length-1&&(b=d(a[1])),a=d(a[0])||0,b=+b||0,this._.bbox&&(this._.bbox.x+=a,this._.bbox.y+=b),this.transform(this._.transform.concat([["t",a,b]])),this)},E.scale=function(a,b,e,f){if(this.removed)return this;if(a=c(a).split(k),a.length-1&&(b=d(a[1]),e=d(a[2]),f=d(a[3]),isNaN(e)&&(e=null),isNaN(f)&&(f=null)),a=d(a[0]),null==b&&(b=a),null==f&&(e=f),null==e||null==f)var g=this.getBBox(1);return e=null==e?g.x+g.width/2:e,f=null==f?g.y+g.height/2:f,this.transform(this._.transform.concat([["s",a,b,e,f]])),this._.dirtyT=1,this},E.hide=function(){return!this.removed&&(this.node.style.display="none"),this},E.show=function(){return!this.removed&&(this.node.style.display=o),this},E.auxGetBBox=a.el.getBBox,E.getBBox=function(){var a=this.auxGetBBox();if(this.paper&&this.paper._viewBoxShift){var b={},c=1/this.paper._viewBoxShift.scale;return b.x=a.x-this.paper._viewBoxShift.dx,b.x*=c,b.y=a.y-this.paper._viewBoxShift.dy,b.y*=c,b.width=a.width*c,b.height=a.height*c,b.x2=b.x+b.width,b.y2=b.y+b.height,b}return a},E._getBBox=function(){return this.removed?{}:{x:this.X+(this.bbx||0)-this.W/2,y:this.Y-this.H,width:this.W,height:this.H}},E.remove=function(){if(!this.removed&&this.node.parentNode){this.paper.__set__&&this.paper.__set__.exclude(this),a.eve.unbind("raphael.*.*."+this.id),a._tear(this,this.paper),this.node.parentNode.removeChild(this.node),this.shape&&this.shape.parentNode.removeChild(this.shape);for(var b in this)this[b]="function"==typeof this[b]?a._removedFactory(b):null;this.removed=!0}},E.attr=function(c,d){if(this.removed)return this;if(null==c){var e={};for(var f in this.attrs)this.attrs[b](f)&&(e[f]=this.attrs[f]);return e.gradient&&"none"==e.fill&&(e.fill=e.gradient)&&delete e.gradient,e.transform=this._.transform,e}if(null==d&&a.is(c,"string")){if(c==j&&"none"==this.attrs.fill&&this.attrs.gradient)return this.attrs.gradient;for(var g=c.split(k),h={},i=0,m=g.length;m>i;i++)c=g[i],c in this.attrs?h[c]=this.attrs[c]:a.is(this.paper.customAttributes[c],"function")?h[c]=this.paper.customAttributes[c].def:h[c]=a._availableAttrs[c];return m-1?h:h[g[0]]}if(this.attrs&&null==d&&a.is(c,"array")){for(h={},i=0,m=c.length;m>i;i++)h[c[i]]=this.attr(c[i]);return h}var n;null!=d&&(n={},n[c]=d),null==d&&a.is(c,"object")&&(n=c);for(var o in n)l("raphael.attr."+o+"."+this.id,this,n[o]);if(n){for(o in this.paper.customAttributes)if(this.paper.customAttributes[b](o)&&n[b](o)&&a.is(this.paper.customAttributes[o],"function")){var p=this.paper.customAttributes[o].apply(this,[].concat(n[o]));this.attrs[o]=n[o];for(var q in p)p[b](q)&&(n[q]=p[q])}n.text&&"text"==this.type&&(this.textpath.string=n.text),B(this,n)}return this},E.toFront=function(){return!this.removed&&this.node.parentNode.appendChild(this.node),this.paper&&this.paper.top!=this&&a._tofront(this,this.paper),this},E.toBack=function(){return this.removed?this:(this.node.parentNode.firstChild!=this.node&&(this.node.parentNode.insertBefore(this.node,this.node.parentNode.firstChild),a._toback(this,this.paper)),this)},E.insertAfter=function(b){return this.removed?this:(b.constructor==a.st.constructor&&(b=b[b.length-1]),b.node.nextSibling?b.node.parentNode.insertBefore(this.node,b.node.nextSibling):b.node.parentNode.appendChild(this.node),a._insertafter(this,b,this.paper),this)},E.insertBefore=function(b){return this.removed?this:(b.constructor==a.st.constructor&&(b=b[0]),b.node.parentNode.insertBefore(this.node,b.node),a._insertbefore(this,b,this.paper),this)},E.blur=function(b){var c=this.node.runtimeStyle,d=c.filter;return d=d.replace(r,o),0!==+b?(this.attrs.blur=b,c.filter=d+n+m+".Blur(pixelradius="+(+b||1.5)+")",c.margin=a.format("-{0}px 0 0 -{0}px",f(+b||1.5))):(c.filter=d,c.margin=0,delete this.attrs.blur),this},a._engine.path=function(a,b){var c=F("shape");c.style.cssText=t,c.coordsize=u+n+u,c.coordorigin=b.coordorigin;var d=new D(c,b),e={fill:"none",stroke:"#000"};a&&(e.path=a),d.type="path",d.path=[],d.Path=o,B(d,e),b.canvas.appendChild(c);var f=F("skew");return f.on=!0,c.appendChild(f),d.skew=f,d.transform(o),d},a._engine.rect=function(b,c,d,e,f,g){var h=a._rectPath(c,d,e,f,g),i=b.path(h),j=i.attrs;return i.X=j.x=c,i.Y=j.y=d,i.W=j.width=e,i.H=j.height=f,j.r=g,j.path=h,i.type="rect",i},a._engine.ellipse=function(a,b,c,d,e){{var f=a.path();f.attrs}return f.X=b-d,f.Y=c-e,f.W=2*d,f.H=2*e,f.type="ellipse",B(f,{cx:b,cy:c,rx:d,ry:e}),f},a._engine.circle=function(a,b,c,d){{var e=a.path();e.attrs}return e.X=b-d,e.Y=c-d,e.W=e.H=2*d,e.type="circle",B(e,{cx:b,cy:c,r:d}),e},a._engine.image=function(b,c,d,e,f,g){var h=a._rectPath(d,e,f,g),i=b.path(h).attr({stroke:"none"}),k=i.attrs,l=i.node,m=l.getElementsByTagName(j)[0];return k.src=c,i.X=k.x=d,i.Y=k.y=e,i.W=k.width=f,i.H=k.height=g,k.path=h,i.type="image",m.parentNode==l&&l.removeChild(m),m.rotate=!0,m.src=c,m.type="tile",i._.fillpos=[d,e],i._.fillsize=[f,g],l.appendChild(m),z(i,1,1,0,0,0),i},a._engine.text=function(b,d,e,g){var h=F("shape"),i=F("path"),j=F("textpath");d=d||0,e=e||0,g=g||"",i.v=a.format("m{0},{1}l{2},{1}",f(d*u),f(e*u),f(d*u)+1),i.textpathok=!0,j.string=c(g),j.on=!0,h.style.cssText=t,h.coordsize=u+n+u,h.coordorigin="0 0";var k=new D(h,b),l={fill:"#000",stroke:"none",font:a._availableAttrs.font,text:g};k.shape=h,k.path=i,k.textpath=j,k.type="text",k.attrs.text=c(g),k.attrs.x=d,k.attrs.y=e,k.attrs.w=1,k.attrs.h=1,B(k,l),h.appendChild(j),h.appendChild(i),b.canvas.appendChild(h);var m=F("skew");return m.on=!0,h.appendChild(m),k.skew=m,k.transform(o),k},a._engine.setSize=function(b,c){var d=this.canvas.style;return this.width=b,this.height=c,b==+b&&(b+="px"),c==+c&&(c+="px"),d.width=b,d.height=c,d.clip="rect(0 "+b+" "+c+" 0)",this._viewBox&&a._engine.setViewBox.apply(this,this._viewBox),this},a._engine.setViewBox=function(b,c,d,e,f){a.eve("raphael.setViewBox",this,this._viewBox,[b,c,d,e,f]);var g,h,i=this.getSize(),j=i.width,k=i.height;return f&&(g=k/e,h=j/d,j>d*g&&(b-=(j-d*g)/2/g),k>e*h&&(c-=(k-e*h)/2/h)),this._viewBox=[b,c,d,e,!!f],this._viewBoxShift={dx:-b,dy:-c,scale:i},this.forEach(function(a){a.transform("...")}),this};var F;a._engine.initWin=function(a){var b=a.document;b.styleSheets.length<31?b.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)"):b.styleSheets[0].addRule(".rvml","behavior:url(#default#VML)");try{!b.namespaces.rvml&&b.namespaces.add("rvml","urn:schemas-microsoft-com:vml"),F=function(a){return b.createElement("<rvml:"+a+' class="rvml">')}}catch(c){F=function(a){return b.createElement("<"+a+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}},a._engine.initWin(a._g.win),a._engine.create=function(){var b=a._getContainer.apply(0,arguments),c=b.container,d=b.height,e=b.width,f=b.x,g=b.y;if(!c)throw new Error("VML container not found.");var h=new a._Paper,i=h.canvas=a._g.doc.createElement("div"),j=i.style;return f=f||0,g=g||0,e=e||512,d=d||342,h.width=e,h.height=d,e==+e&&(e+="px"),d==+d&&(d+="px"),h.coordsize=1e3*u+n+1e3*u,h.coordorigin="0 0",h.span=a._g.doc.createElement("span"),h.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;",i.appendChild(h.span),j.cssText=a.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden",e,d),1==c?(a._g.doc.body.appendChild(i),j.left=f+"px",j.top=g+"px",j.position="absolute"):c.firstChild?c.insertBefore(i,c.firstChild):c.appendChild(i),h.renderfix=function(){},h},a.prototype.clear=function(){a.eve("raphael.clear",this),this.canvas.innerHTML=o,this.span=a._g.doc.createElement("span"),this.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;",this.canvas.appendChild(this.span),this.bottom=this.top=null},a.prototype.remove=function(){a.eve("raphael.remove",this),this.canvas.parentNode.removeChild(this.canvas);for(var b in this)this[b]="function"==typeof this[b]?a._removedFactory(b):null;return!0};var G=a.st;for(var H in E)E[b](H)&&!G[b](H)&&(G[H]=function(a){return function(){var b=arguments;return this.forEach(function(c){c[a].apply(c,b)})}}(H))}}),function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_1__,__WEBPACK_LOCAL_MODULE_2__,__WEBPACK_LOCAL_MODULE_3__], __WEBPACK_AMD_DEFINE_RESULT__ = (function(c){return a.Raphael=b(c)}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else { var c; }}(this,function(a){return a.ninja()});

/***/ }),

/***/ "./src/assets/js/sysDiagram.js":
/*!*************************************!*\
  !*** ./src/assets/js/sysDiagram.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var sys_apps_config={
  chart: {
      container: '#sysAppDiagram',

      nodeAlign: 'BOTTOM',

      connectors: {
          type: 'step'
      },
      node: {
          HTMLclass: 'node1'
      }
  },
  nodeStructure: {
    text:{
      name:'System/Apps'
    },
    HTMLclass:'sys-diagram-css',
    children:[
      {
        text:{
          name:'Systems'
        },
        HTMLclass:'sys-diagram-css',
        children:[
          {
            text:{
              name:'Windows'
            },
            HTMLclass:'sys-diagram-css'
          },
          {
            text:{
              name:'UNIX/AIX'
            },
            HTMLclass:'sys-diagram-css'
          },
          {
            text:{
              name:'Linux'
            },
            HTMLclass:'sys-diagram-css',
            stackChildren:true,
            children:[
              {
                text:{
                  name:'Debian'
                },
                HTMLclass:'sys-diagram-css'
              },
              {
                text:{
                  name:'Ubuntu'
                },
                HTMLclass:'sys-diagram-css'
              },
              {
                text:{
                  name:'Mint'
                },
                HTMLclass:'sys-diagram-css'
              },
              {
                text:{
                  name:'Centos'
                },
                HTMLclass:'sys-diagram-css'
              },
            ]
          }
        ]
      },
      {
        text:{
          name:'App server'
        },
        HTMLclass:'sys-diagram-css',
        stackChildren:true,
        children:[
          {
            text:{
              name:'Apache'
            },
            HTMLclass:'sys-diagram-css'
          },
          {
            text:{
              name:'Tomcat/TomEE'
            },
            HTMLclass:'sys-diagram-css'
          },
          {
            text:{
              name:'WebLogic'
            },
            HTMLclass:'sys-diagram-css'
          },
          {
            text:{
              name:'JBoss'
            },
            HTMLclass:'sys-diagram-css'
          },
          {
            text:{
              name:'Nginx'
            },
            HTMLclass:'sys-diagram-css'
          },
          {
            text:{
              name:'NodeJS'
            },
            HTMLclass:'sys-diagram-css'
          }
        ]
      },
      {
        text:{
          name:'Tools'
        },
        HTMLclass:'sys-diagram-css',
        stackChildren:true,
        children:[
          {
            text:{
              name:'Eclipse/IntelliJ'
            },
            HTMLclass:'sys-diagram-css'
          },
          {
            text:{
              name:'Git/CVS/ClearCase'
            },
            HTMLclass:'sys-diagram-css'
          },
          {
            text:{
              name:'TOAD/SQL Developer'
            },
            HTMLclass:'sys-diagram-css'
          },
          {
            text:{
              name:'Microsoft Office Suites'
            },
            HTMLclass:'sys-diagram-css'
          },
          {
            text:{
              name:'Jira'
            },
            HTMLclass:'sys-diagram-css'
          }
        ]
      }
    ]
  }
}


/***/ }),

/***/ "./src/assets/js/sysDiagramInline.js":
/*!*******************************************!*\
  !*** ./src/assets/js/sysDiagramInline.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var sys_config = {
  chart: {
    container: '#sysDiagram',

    nodeAlign: 'BOTTOM',

    connectors: {
      type: 'step'
    },
    node: {
      HTMLclass: 'node1'
    }
  },
  nodeStructure: {
    text: {
      name: 'System'
    },
    HTMLclass: 'sys-diagram-css',
    stackChildren: true,
    children: [{
        text: {
          name: 'Windows'
        },
        HTMLclass: 'sys-diagram-css'
      },
      {
        text: {
          name: 'UNIX/AIX'
        },
        HTMLclass: 'sys-diagram-css'
      },
      {
        text: {
          name: 'Debian'
        },
        HTMLclass: 'sys-diagram-css'
      },
      {
        text: {
          name: 'Ubuntu'
        },
        HTMLclass: 'sys-diagram-css'
      },
      {
        text: {
          name: 'Mint'
        },
        HTMLclass: 'sys-diagram-css'
      },
      {
        text: {
          name: 'Centos'
        },
        HTMLclass: 'sys-diagram-css'
      },
    ]
  }
};

var apps_config = {
  chart: {
    container: '#appDiagram',

    nodeAlign: 'BOTTOM',

    connectors: {
      type: 'step'
    },
    node: {
      HTMLclass: 'node1'
    }
  },
  nodeStructure: {
    text: {
      name: 'Applications'
    },
    HTMLclass: 'sys-diagram-css',
    stackChildren: true,
    children: [{
        text: {
          name: 'Apache'
        },
        HTMLclass: 'sys-diagram-css'
      },
      {
        text: {
          name: 'Tomcat/TomEE'
        },
        HTMLclass: 'sys-diagram-css'
      },
      {
        text: {
          name: 'WebLogic'
        },
        HTMLclass: 'sys-diagram-css'
      },
      {
        text: {
          name: 'JBoss'
        },
        HTMLclass: 'sys-diagram-css'
      },
      {
        text: {
          name: 'Nginx'
        },
        HTMLclass: 'sys-diagram-css'
      },
      {
        text: {
          name: 'NodeJS'
        },
        HTMLclass: 'sys-diagram-css'
      }
    ]
  }
};

var tools_config = {
  chart: {
    container: '#toolsDiagram',

    nodeAlign: 'BOTTOM',

    connectors: {
      type: 'step'
    },
    node: {
      HTMLclass: 'node1'
    }
  },
  nodeStructure: {
    text: {
      name: 'Tools'
    },
    HTMLclass: 'sys-diagram-css',
    stackChildren: true,
    children: [{
        text: {
          name: 'Eclipse/IntelliJ'
        },
        HTMLclass: 'sys-diagram-css'
      },
      {
        text: {
          name: 'Git/CVS/ClearCase'
        },
        HTMLclass: 'sys-diagram-css'
      },
      {
        text: {
          name: 'TOAD/SQL Developer'
        },
        HTMLclass: 'sys-diagram-css'
      },
      {
        text: {
          name: 'Microsoft Office Suites'
        },
        HTMLclass: 'sys-diagram-css'
      },
      {
        text: {
          name: 'Jira'
        },
        HTMLclass: 'sys-diagram-css'
      }
    ]
  }
};


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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/wallace/Dev/Workspace/presentationWebSite/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map