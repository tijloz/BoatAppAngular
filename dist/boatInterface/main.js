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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _lights_lights_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lights/lights.component */ "./src/app/lights/lights.component.ts");
/* harmony import */ var _protection_protection_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./protection/protection.component */ "./src/app/protection/protection.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _light_edit_light_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./light-edit/light-edit.component */ "./src/app/light-edit/light-edit.component.ts");
/* harmony import */ var _protection_edit_protection_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./protection-edit/protection-edit.component */ "./src/app/protection-edit/protection-edit.component.ts");
/* harmony import */ var _tracking_tracking_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tracking/tracking.component */ "./src/app/tracking/tracking.component.ts");










var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: 'lights', component: _lights_lights_component__WEBPACK_IMPORTED_MODULE_3__["LightsComponent"] },
    { path: 'protection', component: _protection_protection_component__WEBPACK_IMPORTED_MODULE_4__["ProtectionComponent"] },
    { path: 'settings', component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_5__["SettingsComponent"] },
    { path: 'light-edit', component: _light_edit_light_edit_component__WEBPACK_IMPORTED_MODULE_7__["LightEditComponent"] },
    { path: 'protection-edit', component: _protection_edit_protection_edit_component__WEBPACK_IMPORTED_MODULE_8__["ProtectionEditComponent"] },
    { path: 'tracking', component: _tracking_tracking_component__WEBPACK_IMPORTED_MODULE_9__["TrackingComponent"] },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = "<nav mat-tab-nav-bar\r\n     mat-align-tabs=\"center\"\r\n     animationDuration=\"500ms\">\r\n\r\n  <span *ngFor=\"let link of navLinks\">\r\n\r\n  <a mat-tab-link\r\n\r\n     [routerLink]=\"['/'+link.path]\"\r\n     routerLinkActive #rla=\"routerLinkActive\"\r\n     [active]=\"rla.isActive\">\r\n    {{link.label}}\r\n  </a>\r\n\r\n  <mat-icon *ngIf=\"link.hasNotification\" matBadge=\"{{link.notificationCount}}\" matBadgeColor=\"accent\" matBadgePosition=\"below before\"></mat-icon>\r\n\r\n  </span>\r\n\r\n</nav>\r\n\r\n  <router-outlet></router-outlet>\r\n  <app-messages></app-messages>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.navLinks = [
            { path: 'home', redirectTo: '/home', label: 'Home', hasNotification: false },
            { path: 'lights', label: 'Lights', hasNotification: false },
            { path: 'protection', label: 'Protection', hasNotification: false },
            { path: 'settings', label: 'Settings', hasNotification: true, notificationCount: 6 }
        ];
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _lights_lights_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lights/lights.component */ "./src/app/lights/lights.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _protection_protection_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./protection/protection.component */ "./src/app/protection/protection.component.ts");
/* harmony import */ var _light_detail_light_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./light-detail/light-detail.component */ "./src/app/light-detail/light-detail.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _light_edit_light_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./light-edit/light-edit.component */ "./src/app/light-edit/light-edit.component.ts");
/* harmony import */ var _protection_edit_protection_edit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./protection-edit/protection-edit.component */ "./src/app/protection-edit/protection-edit.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var _in_memory_data_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./in-memory-data.service */ "./src/app/in-memory-data.service.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _digital_clock_digital_clock_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./digital-clock/digital-clock.component */ "./src/app/digital-clock/digital-clock.component.ts");
/* harmony import */ var _shared_services_util_util_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./shared/services/util/util.service */ "./src/app/shared/services/util/util.service.ts");
/* harmony import */ var ngx_electron__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-electron */ "./node_modules/ngx-electron/fesm5/ngx-electron.js");
/* harmony import */ var _tracking_tracking_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./tracking/tracking.component */ "./src/app/tracking/tracking.component.ts");
/* harmony import */ var _wifi_wifi_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./wifi/wifi.component */ "./src/app/wifi/wifi.component.ts");
/* harmony import */ var _protection_detail_protection_detail_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./protection-detail/protection-detail.component */ "./src/app/protection-detail/protection-detail.component.ts");



 // <-- NgModel lives here

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _lights_lights_component__WEBPACK_IMPORTED_MODULE_9__["LightsComponent"],
                _settings_settings_component__WEBPACK_IMPORTED_MODULE_10__["SettingsComponent"],
                _protection_protection_component__WEBPACK_IMPORTED_MODULE_11__["ProtectionComponent"],
                _light_detail_light_detail_component__WEBPACK_IMPORTED_MODULE_12__["LightDetailComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                _light_edit_light_edit_component__WEBPACK_IMPORTED_MODULE_14__["LightEditComponent"],
                _protection_edit_protection_edit_component__WEBPACK_IMPORTED_MODULE_15__["ProtectionEditComponent"],
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_22__["MessagesComponent"],
                _digital_clock_digital_clock_component__WEBPACK_IMPORTED_MODULE_23__["DigitalClockComponent"],
                _tracking_tracking_component__WEBPACK_IMPORTED_MODULE_26__["TrackingComponent"],
                _wifi_wifi_component__WEBPACK_IMPORTED_MODULE_27__["WifiComponent"],
                _protection_detail_protection_detail_component__WEBPACK_IMPORTED_MODULE_28__["ProtectionDetailComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                ngx_electron__WEBPACK_IMPORTED_MODULE_25__["NgxElectronModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSliderModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__["MatBadgeModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
                angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_18__["HttpClientInMemoryWebApiModule"].forRoot(_in_memory_data_service__WEBPACK_IMPORTED_MODULE_19__["InMemoryDataService"], { dataEncapsulation: false }),
                _agm_core__WEBPACK_IMPORTED_MODULE_20__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyDmeuRDj4XQR3MPTxaN7Wh1uaevNhKUATA'
                })
            ],
            providers: [_shared_services_util_util_service__WEBPACK_IMPORTED_MODULE_24__["UtilService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/digital-clock/digital-clock.component.html":
/*!************************************************************!*\
  !*** ./src/app/digital-clock/digital-clock.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"clock\" class=\"light\">\r\n  <div class=\"display clock-display\">\r\n    <div class=\"weekdays\">\r\n      <ul class=\"clock-weekdays-block\">\r\n        <li class=\"day-block\" *ngFor=\"let day of days\" [class.active]=\"today == day\">{{day}}</li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"alarm\"></div>\r\n    <div class=\"digits\">\r\n      <ng-container *ngFor=\"let d of timeFormatList\">\r\n        <div class=\"dots\" *ngIf=\"d == 'dots'\" [style.visibility]=\"!displayDots ? 'visible': 'hidden'\"></div>\r\n        <div [attr.class]=\"d ? d: null\" *ngIf=\"d != 'dots'\">\r\n          <span *ngFor=\"let border of borders\" [attr.class]=\"border\"></span>\r\n        </div>\r\n      </ng-container>\r\n      <div class=\"ampm\">\r\n        <ul class=\"clock-meridian-block\">\r\n          <li class=\"clock-meridian\" *ngFor=\"let m of ['AM', 'PM']\" [class.active]=\"meridian == m\">{{m}}</li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <div class=\"clock-date\">\r\n      <div class=\"small\">{{monthYear}}</div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/digital-clock/digital-clock.component.scss":
/*!************************************************************!*\
  !*** ./src/app/digital-clock/digital-clock.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".clock-display .clock-meridian,\n.clock-display .clock-weekdays-block .day-block {\n  opacity: 0.3;\n  list-style-type: none; }\n  .clock-display .clock-meridian.active,\n  .clock-display .clock-weekdays-block .day-block.active {\n    opacity: 1;\n    font-weight: bold; }\n  .clock-display .clock-weekdays-block > .day-block {\n  padding: 0 10px;\n  display: inline-block; }\n  .clock-display .small {\n  font-family: cursive;\n  font-size: 10px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlnaXRhbC1jbG9jay9DOlxcVXNlcnNcXFJvYmVydFxcRGVza3RvcFxcZGVsTWVcXEJvYXRBcHBBbmd1bGFyL3NyY1xcYXBwXFxkaWdpdGFsLWNsb2NrXFxkaWdpdGFsLWNsb2NrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUdFLFlBQVk7RUFDWixxQkFBcUIsRUFBQTtFQUp2Qjs7SUFPRyxVQUFVO0lBQ1YsaUJBQWlCLEVBQUE7RUFScEI7RUFjRSxlQUFlO0VBQ2YscUJBQXFCLEVBQUE7RUFmdkI7RUFvQkUsb0JBQW9CO0VBQ3BCLDBCQUEwQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZGlnaXRhbC1jbG9jay9kaWdpdGFsLWNsb2NrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsb2NrLWRpc3BsYXkgIHtcclxuLmNsb2NrLW1lcmlkaWFuLFxyXG4uY2xvY2std2Vla2RheXMtYmxvY2sgLmRheS1ibG9jayB7XHJcbiAgb3BhY2l0eTogMC4zO1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuXHJcbiYuYWN0aXZlIHtcclxuICAgb3BhY2l0eTogMTtcclxuICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiB9XHJcbn1cclxuXHJcbi5jbG9jay13ZWVrZGF5cy1ibG9jayB7XHJcbj4gLmRheS1ibG9jayB7XHJcbiAgcGFkZGluZzogMCAxMHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG59XHJcblxyXG4uc21hbGwge1xyXG4gIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG4gIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/digital-clock/digital-clock.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/digital-clock/digital-clock.component.ts ***!
  \**********************************************************/
/*! exports provided: DigitalClockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DigitalClockComponent", function() { return DigitalClockComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_util_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/util/util.service */ "./src/app/shared/services/util/util.service.ts");
/* harmony import */ var _shared_constants_calendar_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/constants/calendar.constants */ "./src/app/shared/constants/calendar.constants.ts");





var DigitalClockComponent = /** @class */ (function () {
    function DigitalClockComponent(util) {
        this.util = util;
        this.displayDots = false;
        this.days = _shared_constants_calendar_constants__WEBPACK_IMPORTED_MODULE_4__["DAYS_SHORT"];
        this.timeFormatList = [];
        this.subscriptions = [];
        this.borders = 'd1 d2 d3 d4 d5 d6 d7'.split(' ');
        this._init();
    }
    DigitalClockComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions.push(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(0, 1000)
            .subscribe(function (t) {
            _this._init();
        }));
    };
    DigitalClockComponent.prototype._init = function () {
        var _this = this;
        var now = new Date();
        var t = now.toLocaleTimeString().split(' ');
        if (Array.isArray(t) && t[0]) {
            var digits = t[0]
                .split(':')
                .map(function (v) { return _this.util.to2Digit(v); })
                .join(':')
                .split('');
            this.timeFormatList = [];
            for (var _i = 0, digits_1 = digits; _i < digits_1.length; _i++) {
                var i = digits_1[_i];
                this.timeFormatList.push(_shared_constants_calendar_constants__WEBPACK_IMPORTED_MODULE_4__["CLASS_LIST"][i]);
            }
            // run the other options.
            this._run(t[1]);
        }
    };
    DigitalClockComponent.prototype._run = function (_meridian) {
        var d = (new Date())
            .toDateString()
            .split(' ');
        // toggles the dots
        this.displayDots = !this.displayDots;
        // sets the day today
        this.today = (d[0] || '').toUpperCase();
        // sets the month & year
        this.monthYear = d[1] + " " + d[2] + ", " + d[3];
        // sets am/pm
        this.meridian = (_meridian || '').toUpperCase();
    };
    DigitalClockComponent.prototype.ngOnDestroy = function () {
        for (var _i = 0, _a = this.subscriptions; _i < _a.length; _i++) {
            var subscription = _a[_i];
            if (!!subscription) {
                subscription.unsubscribe();
            }
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DigitalClockComponent.prototype, "displayDots", void 0);
    DigitalClockComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-digital-clock',
            template: __webpack_require__(/*! ./digital-clock.component.html */ "./src/app/digital-clock/digital-clock.component.html"),
            styles: [__webpack_require__(/*! ./digital-clock.component.scss */ "./src/app/digital-clock/digital-clock.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_util_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]])
    ], DigitalClockComponent);
    return DigitalClockComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n\r\n  <!--<button id=\"lightBtnOn\" role=\"button\" (click)=\"LightOn()\">Light On</button>-->\r\n  <!--<button id=\"lightBtnOff\" role=\"button\" (click)=\"LightOff()\">Light Off</button>-->\r\n  <!--<div class=\"bg\"></div>-->\r\n\r\n  <!--<button mat-raised-button color=\"primary\" (click)=\"LightOn()\">On</button>-->\r\n  <!--<button mat-raised-button color=\"primary\" (click)=\"LightOff()\">Off</button>-->\r\n\r\n</div>\r\n\r\n<app-digital-clock></app-digital-clock>\r\n\r\n<ul></ul>\r\n\r\n<script>\r\n\r\n</script>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_electron__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-electron */ "./node_modules/ngx-electron/fesm5/ngx-electron.js");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(_electronService) {
        this._electronService = _electronService;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.LightOn = function () {
        this._electronService.ipcRenderer.send('lightChannel', { lightState: 1 });
        console.log('Requesting light on');
    };
    HomeComponent.prototype.LightOff = function () {
        this._electronService.ipcRenderer.send('lightChannel', { lightState: 0 });
        console.log('Requesting light on');
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_electron__WEBPACK_IMPORTED_MODULE_2__["ElectronService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/in-memory-data.service.ts":
/*!*******************************************!*\
  !*** ./src/app/in-memory-data.service.ts ***!
  \*******************************************/
/*! exports provided: InMemoryDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InMemoryDataService", function() { return InMemoryDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InMemoryDataService = /** @class */ (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var lights = [
            { id: 0, name: 'Anchor', state: 0, brightness: 0, Timer: 0, Channel: 0 },
            { id: 1, name: 'Nav', state: 0, brightness: 1, Timer: 0, Channel: 0 },
            { id: 2, name: 'Deck', state: 0, brightness: 2, Timer: 0, Channel: 0 },
            { id: 3, name: 'Galley', state: 0, brightness: 0, Timer: 0, Channel: 0 },
            { id: 4, name: 'Bathroom', state: 0, brightness: 1, Timer: 0, Channel: 0 },
            { id: 5, name: 'Cabin1', state: 0, brightness: 2, Timer: 0, Channel: 0 },
            { id: 6, name: 'Cabin2', state: 0, brightness: 3, Timer: 0, Channel: 0 },
            { id: 7, name: 'Ride', state: 0, brightness: 0, Timer: 0, Channel: 0 }
        ];
        return { lights: lights };
    };
    // Overrides the genId method to ensure that a hero always has an id.
    // If the heroes array is empty,
    // the method below returns the initial number (11).
    // if the heroes array is not empty, the method below returns the highest
    // hero id + 1.
    InMemoryDataService.prototype.genId = function (lights) {
        return lights.length > 0 ? Math.max.apply(Math, lights.map(function (light) { return light.id; })) + 1 : 11;
    };
    InMemoryDataService.prototype.genPId = function (protections) {
        return protections.length > 0 ? Math.max.apply(Math, protections.map(function (protection) { return protection.id; })) + 1 : 11;
    };
    InMemoryDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], InMemoryDataService);
    return InMemoryDataService;
}());



/***/ }),

/***/ "./src/app/light-detail/light-detail.component.html":
/*!**********************************************************!*\
  !*** ./src/app/light-detail/light-detail.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div *ngIf=\"light\">-->\r\n\r\n<!--<h2>{{light.name | uppercase}} Details</h2>-->\r\n<!--<div><span>Pin id: </span>{{light.id}}</div>-->\r\n<!--<div>-->\r\n<!--<label> name:-->\r\n<!--<input [(ngModel)]=\"light.name\" placeholder=\"name\"/>-->\r\n<!--</label>-->\r\n<!--</div>-->\r\n<!--<button (click)=\"goBack()\">go back</button>-->\r\n<!--<button (click)=\"save()\">save</button>-->\r\n<!--</div>-->\r\n\r\n\r\n<mat-card *ngIf=\"light\" class=\"lightDetailCardContainer\">\r\n  <mat-card-header>\r\n    <div mat-card-avatar class=\"example-header-image\"></div>\r\n    <mat-card-title>{{light.name | uppercase}} Details</mat-card-title>\r\n    <mat-card-subtitle>Pin id: {{light.id}}</mat-card-subtitle>\r\n  </mat-card-header>\r\n\r\n  <mat-card-content>\r\n    <p>\r\n\r\n    </p>\r\n    <label> Name:\r\n      <input [(ngModel)]=\"light.name\" placeholder=\"name\"/>\r\n    </label>\r\n\r\n    <h3>Current Brightness</h3>\r\n    <mat-slider [(ngModel)]=\"light.brightness\" [max]=\"3\"\r\n                [min]=\"1\"\r\n                [tickInterval]=\"1\"\r\n    ></mat-slider>\r\n\r\n  </mat-card-content>\r\n  <mat-card-actions>\r\n    <button (click)=\"close()\" mat-button>Close</button>\r\n  </mat-card-actions>\r\n</mat-card>\r\n\r\n"

/***/ }),

/***/ "./src/app/light-detail/light-detail.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/light-detail/light-detail.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* HeroDetailComponent's private CSS styles */\nlabel {\n  display: inline-block;\n  width: 3em;\n  margin: .5em 0;\n  color: #607D8B;\n  font-weight: bold; }\ninput {\n  height: 2em;\n  font-size: 1em;\n  padding-left: .4em; }\nbutton {\n  margin-top: 20px;\n  font-family: Arial;\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand; }\nbutton:hover {\n  background-color: #cfd8dc; }\nbutton:disabled {\n  background-color: #eee;\n  color: #ccc;\n  cursor: auto; }\n.example-header-image {\n  background-image: url(\"https://material.angular.io/assets/img/examples/shiba1.jpg\");\n  background-size: cover; }\n.lightDetailCardContainer {\n  margin: 0 auto;\n  margin-top: 10%;\n  max-width: 400px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlnaHQtZGV0YWlsL0M6XFxVc2Vyc1xcUm9iZXJ0XFxEZXNrdG9wXFxkZWxNZVxcQm9hdEFwcEFuZ3VsYXIvc3JjXFxhcHBcXGxpZ2h0LWRldGFpbFxcbGlnaHQtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZDQUFBO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsVUFBVTtFQUNWLGNBQWM7RUFDZCxjQUFjO0VBQ2QsaUJBQWlCLEVBQUE7QUFHbkI7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQixFQUFBO0FBR3BCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVksRUFBQTtBQUdkO0VBQ0UseUJBQXlCLEVBQUE7QUFHM0I7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFlBQVksRUFBQTtBQU9kO0VBQ0UsbUZBQW1GO0VBQ25GLHNCQUFzQixFQUFBO0FBR3hCO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xpZ2h0LWRldGFpbC9saWdodC1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBIZXJvRGV0YWlsQ29tcG9uZW50J3MgcHJpdmF0ZSBDU1Mgc3R5bGVzICovXHJcbmxhYmVsIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDNlbTtcclxuICBtYXJnaW46IC41ZW0gMDtcclxuICBjb2xvcjogIzYwN0Q4QjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIGhlaWdodDogMmVtO1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG4gIHBhZGRpbmctbGVmdDogLjRlbTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGN1cnNvcjogaGFuZDtcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZkOGRjO1xyXG59XHJcblxyXG5idXR0b246ZGlzYWJsZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgY29sb3I6ICNjY2M7XHJcbiAgY3Vyc29yOiBhdXRvO1xyXG59XHJcblxyXG5cclxuLmV4YW1wbGUtY2FyZCB7XHJcbn1cclxuXHJcbi5leGFtcGxlLWhlYWRlci1pbWFnZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vYXNzZXRzL2ltZy9leGFtcGxlcy9zaGliYTEuanBnJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLmxpZ2h0RGV0YWlsQ2FyZENvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMTAlO1xyXG4gIG1heC13aWR0aDogNDAwcHg7XHJcblxyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/light-detail/light-detail.component.ts":
/*!********************************************************!*\
  !*** ./src/app/light-detail/light-detail.component.ts ***!
  \********************************************************/
/*! exports provided: LightDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LightDetailComponent", function() { return LightDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _lights__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lights */ "./src/app/lights.ts");
/* harmony import */ var _light_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../light.service */ "./src/app/light.service.ts");





var LightDetailComponent = /** @class */ (function () {
    // @Input() switch: Light;
    function LightDetailComponent(route, lightService) {
        this.route = route;
        this.lightService = lightService;
    }
    LightDetailComponent.prototype.ngOnInit = function () {
        // this.getLight();
    };
    LightDetailComponent.prototype.close = function () {
        this.light = null;
    };
    LightDetailComponent.prototype.getLight = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.lightService.getLight(id)
            .subscribe(function (light) { return _this.light = light; });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _lights__WEBPACK_IMPORTED_MODULE_3__["Light"])
    ], LightDetailComponent.prototype, "light", void 0);
    LightDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-light-detail',
            template: __webpack_require__(/*! ./light-detail.component.html */ "./src/app/light-detail/light-detail.component.html"),
            styles: [__webpack_require__(/*! ./light-detail.component.scss */ "./src/app/light-detail/light-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _light_service__WEBPACK_IMPORTED_MODULE_4__["LightService"]])
    ], LightDetailComponent);
    return LightDetailComponent;
}());



/***/ }),

/***/ "./src/app/light-edit/light-edit.component.html":
/*!******************************************************!*\
  !*** ./src/app/light-edit/light-edit.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Lights</h2>\r\n<div>\r\n  <input  #lightName value=\"Light name\" onfocus=\"this.value=''\" />\r\n  <!-- (click) passes input value to add() and then clears the input -->\r\n  <button (click)=\"add(lightName.value); lightName.value=''\">\r\n    add\r\n  </button>\r\n  <button (click)=\"goBack()\">go back</button>\r\n</div>\r\n\r\n<ul class=\"lights\">\r\n  <li *ngFor=\"let light of lights\">\r\n    <a routerLink=\"/detail/{{light.id}}\">\r\n      <span class=\"badge\">{{light.id}}</span> {{light.name}}\r\n    </a>\r\n    <button class=\"delete\" title=\"delete light\"\r\n            (click)=\"delete(light)\">x</button>\r\n  </li>\r\n</ul>\r\n"

/***/ }),

/***/ "./src/app/light-edit/light-edit.component.scss":
/*!******************************************************!*\
  !*** ./src/app/light-edit/light-edit.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* HeroesComponent's private CSS styles */\n.lights {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 15em; }\n.lights li {\n  position: relative;\n  cursor: pointer;\n  background-color: #EEE;\n  margin: .5em;\n  padding: .3em 0;\n  height: 1.6em;\n  border-radius: 4px; }\n.lights li:hover {\n  color: #607D8B;\n  background-color: #DDD;\n  left: .1em; }\n.lights a {\n  color: #888;\n  text-decoration: none;\n  position: relative;\n  display: block;\n  width: 250px; }\n.lights a:hover {\n  color: #607D8B; }\n.lights .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #607D8B;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  min-width: 16px;\n  text-align: right;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px; }\nbutton {\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand;\n  font-family: Arial; }\nbutton:hover {\n  background-color: #cfd8dc; }\nbutton.delete {\n  position: relative;\n  left: 194px;\n  top: -32px;\n  background-color: gray !important;\n  color: white; }\n/*\r\nCopyright Google LLC. All Rights Reserved.\r\nUse of this source code is governed by an MIT-style license that\r\ncan be found in the LICENSE file at http://angular.io/license\r\n*/\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlnaHQtZWRpdC9DOlxcVXNlcnNcXFJvYmVydFxcRGVza3RvcFxcZGVsTWVcXEJvYXRBcHBBbmd1bGFyL3NyY1xcYXBwXFxsaWdodC1lZGl0XFxsaWdodC1lZGl0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9saWdodC1lZGl0L2xpZ2h0LWVkaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseUNBQUE7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsVUFBVTtFQUNWLFdBQVcsRUFBQTtBQUViO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGVBQWU7RUFDZixhQUFhO0VBQ2Isa0JBQWtCLEVBQUE7QUFHcEI7RUFDRSxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLFVBQVUsRUFBQTtBQUdaO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFlBQVksRUFBQTtBQUdkO0VBQ0UsY0FBYSxFQUFBO0FBR2Y7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFNBQVM7RUFDVCxhQUFhO0VBQ2IsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsMEJBQTBCLEVBQUE7QUFHNUI7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0IsRUFBQTtBQUdwQjtFQUNFLHlCQUF5QixFQUFBO0FBRzNCO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsaUNBQWlDO0VBQ2pDLFlBQVksRUFBQTtBQUtkOzs7O0NDTkMiLCJmaWxlIjoic3JjL2FwcC9saWdodC1lZGl0L2xpZ2h0LWVkaXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBIZXJvZXNDb21wb25lbnQncyBwcml2YXRlIENTUyBzdHlsZXMgKi9cclxuLmxpZ2h0cyB7XHJcbiAgbWFyZ2luOiAwIDAgMmVtIDA7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgd2lkdGg6IDE1ZW07XHJcbn1cclxuLmxpZ2h0cyBsaSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFO1xyXG4gIG1hcmdpbjogLjVlbTtcclxuICBwYWRkaW5nOiAuM2VtIDA7XHJcbiAgaGVpZ2h0OiAxLjZlbTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbi5saWdodHMgbGk6aG92ZXIge1xyXG4gIGNvbG9yOiAjNjA3RDhCO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNEREQ7XHJcbiAgbGVmdDogLjFlbTtcclxufVxyXG5cclxuLmxpZ2h0cyBhIHtcclxuICBjb2xvcjogIzg4ODtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAyNTBweDtcclxufVxyXG5cclxuLmxpZ2h0cyBhOmhvdmVyIHtcclxuICBjb2xvcjojNjA3RDhCO1xyXG59XHJcblxyXG4ubGlnaHRzIC5iYWRnZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDAuOGVtIDAuN2VtIDAgMC43ZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYwN0Q4QjtcclxuICBsaW5lLWhlaWdodDogMWVtO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiAtMXB4O1xyXG4gIHRvcDogLTRweDtcclxuICBoZWlnaHQ6IDEuOGVtO1xyXG4gIG1pbi13aWR0aDogMTZweDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBtYXJnaW4tcmlnaHQ6IC44ZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4IDAgMCA0cHg7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjdXJzb3I6IGhhbmQ7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjZmQ4ZGM7XHJcbn1cclxuXHJcbmJ1dHRvbi5kZWxldGUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiAxOTRweDtcclxuICB0b3A6IC0zMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXkgIWltcG9ydGFudDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcblxyXG5cclxuLypcclxuQ29weXJpZ2h0IEdvb2dsZSBMTEMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcblVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXRcclxuY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cDovL2FuZ3VsYXIuaW8vbGljZW5zZVxyXG4qL1xyXG4iLCIvKiBIZXJvZXNDb21wb25lbnQncyBwcml2YXRlIENTUyBzdHlsZXMgKi9cbi5saWdodHMge1xuICBtYXJnaW46IDAgMCAyZW0gMDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMTVlbTsgfVxuXG4ubGlnaHRzIGxpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XG4gIG1hcmdpbjogLjVlbTtcbiAgcGFkZGluZzogLjNlbSAwO1xuICBoZWlnaHQ6IDEuNmVtO1xuICBib3JkZXItcmFkaXVzOiA0cHg7IH1cblxuLmxpZ2h0cyBsaTpob3ZlciB7XG4gIGNvbG9yOiAjNjA3RDhCO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREREO1xuICBsZWZ0OiAuMWVtOyB9XG5cbi5saWdodHMgYSB7XG4gIGNvbG9yOiAjODg4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAyNTBweDsgfVxuXG4ubGlnaHRzIGE6aG92ZXIge1xuICBjb2xvcjogIzYwN0Q4QjsgfVxuXG4ubGlnaHRzIC5iYWRnZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwLjhlbSAwLjdlbSAwIDAuN2VtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA3RDhCO1xuICBsaW5lLWhlaWdodDogMWVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IC0xcHg7XG4gIHRvcDogLTRweDtcbiAgaGVpZ2h0OiAxLjhlbTtcbiAgbWluLXdpZHRoOiAxNnB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAuOGVtO1xuICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDsgfVxuXG5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY3Vyc29yOiBoYW5kO1xuICBmb250LWZhbWlseTogQXJpYWw7IH1cblxuYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NmZDhkYzsgfVxuXG5idXR0b24uZGVsZXRlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAxOTRweDtcbiAgdG9wOiAtMzJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheSAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7IH1cblxuLypcclxuQ29weXJpZ2h0IEdvb2dsZSBMTEMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcblVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXRcclxuY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cDovL2FuZ3VsYXIuaW8vbGljZW5zZVxyXG4qL1xuIl19 */"

/***/ }),

/***/ "./src/app/light-edit/light-edit.component.ts":
/*!****************************************************!*\
  !*** ./src/app/light-edit/light-edit.component.ts ***!
  \****************************************************/
/*! exports provided: LightEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LightEditComponent", function() { return LightEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _light_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../light.service */ "./src/app/light.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var LightEditComponent = /** @class */ (function () {
    function LightEditComponent(route, lightService, location) {
        this.route = route;
        this.lightService = lightService;
        this.location = location;
    }
    LightEditComponent.prototype.ngOnInit = function () {
        this.getLights();
    };
    LightEditComponent.prototype.getLights = function () {
        var _this = this;
        this.lightService.getLights()
            .subscribe(function (lights) { return _this.lights = lights; });
    };
    LightEditComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.lightService.addLight({ name: name })
            .subscribe(function (light) {
            _this.lights.push(light);
        });
    };
    LightEditComponent.prototype.delete = function (light) {
        this.lights = this.lights.filter(function (h) { return h !== light; });
        this.lightService.deleteLight(light).subscribe();
    };
    // save(): void {
    //   this.lightService.updateLight(this.light)
    //     .subscribe(() => this.goBack());
    // }
    LightEditComponent.prototype.goBack = function () {
        this.location.back();
    };
    LightEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-light-edit',
            template: __webpack_require__(/*! ./light-edit.component.html */ "./src/app/light-edit/light-edit.component.html"),
            styles: [__webpack_require__(/*! ./light-edit.component.scss */ "./src/app/light-edit/light-edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _light_service__WEBPACK_IMPORTED_MODULE_2__["LightService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], LightEditComponent);
    return LightEditComponent;
}());



/***/ }),

/***/ "./src/app/light.service.ts":
/*!**********************************!*\
  !*** ./src/app/light.service.ts ***!
  \**********************************/
/*! exports provided: LightService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LightService", function() { return LightService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./message.service */ "./src/app/message.service.ts");






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var LightService = /** @class */ (function () {
    function LightService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.lightsUrl = 'api/lights'; // URL to web api
    }
    LightService.prototype.getLights = function () {
        return this.http.get(this.lightsUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getLights', [])));
    };
    /** GET light by id. Will 404 if id not found */
    LightService.prototype.getLight = function (id) {
        var url = this.lightsUrl + "/" + id;
        return this.http.get(url).pipe(
        // tap(_ => this.log(`fetched light id=${id}`)),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("getLight id=" + id)));
    };
    /** PUT: update the light on the server */
    LightService.prototype.updateLight = function (light) {
        var _this = this;
        return this.http.put(this.lightsUrl, light, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("updated light id=" + light.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('updateLight')));
    };
    /** POST: add a new light to the server */
    LightService.prototype.addLight = function (light) {
        var _this = this;
        return this.http.post(this.lightsUrl, light, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (newLight) { return _this.log("added hero w/ id=" + newLight.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addLight')));
    };
    /** DELETE: delete the light from the server */
    LightService.prototype.deleteLight = function (light) {
        var _this = this;
        var id = typeof light === 'number' ? light : light.id;
        var url = this.lightsUrl + "/" + id;
        return this.http.delete(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("deleted light id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('deleteLight')));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    LightService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    /** Log a LightService message with the MessageService */
    LightService.prototype.log = function (message) {
        this.messageService.add("LightService: " + message);
    };
    LightService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"]])
    ], LightService);
    return LightService;
}());



/***/ }),

/***/ "./src/app/lights.ts":
/*!***************************!*\
  !*** ./src/app/lights.ts ***!
  \***************************/
/*! exports provided: Light */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Light", function() { return Light; });
var Light = /** @class */ (function () {
    function Light() {
    }
    return Light;
}());



/***/ }),

/***/ "./src/app/lights/lights.component.html":
/*!**********************************************!*\
  !*** ./src/app/lights/lights.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Lights</h2>\r\n\r\n<div class=\"device\">\r\n  <div class=\"\" *ngFor=\"let light of lights\">\r\n    <div class=\"internalRow\"\r\n         [class.switched]=\"light === switchedLight\"\r\n         (click)=\"onSwitch(light)\"\r\n    >\r\n\r\n      <div class=\"newBadge\">\r\n\r\n        <mat-icon *ngIf=\"light.state\">brightness_7</mat-icon>\r\n        <mat-icon *ngIf=\"!light.state\">brightness_1</mat-icon>\r\n\r\n      </div>\r\n\r\n      <div class=\"deviceName\">{{light.name}}</div>\r\n\r\n      <div class=\"\">\r\n        <button (click)=\"showOptions(light)\" mat-icon-button>\r\n          <mat-icon aria-label=\"Light Options\">info</mat-icon>\r\n        </button>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n<div *ngIf=\"switch\">\r\n\r\n</div>\r\n\r\n\r\n<app-light-detail [light]=\"switchedLight\"></app-light-detail>\r\n"

/***/ }),

/***/ "./src/app/lights/lights.component.scss":
/*!**********************************************!*\
  !*** ./src/app/lights/lights.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpZ2h0cy9saWdodHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/lights/lights.component.ts":
/*!********************************************!*\
  !*** ./src/app/lights/lights.component.ts ***!
  \********************************************/
/*! exports provided: LightsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LightsComponent", function() { return LightsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _lights__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lights */ "./src/app/lights.ts");
/* harmony import */ var _light_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../light.service */ "./src/app/light.service.ts");
/* harmony import */ var ngx_electron__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-electron */ "./node_modules/ngx-electron/fesm5/ngx-electron.js");





var LightsComponent = /** @class */ (function () {
    function LightsComponent(lightService, _electronService) {
        this.lightService = lightService;
        this._electronService = _electronService;
    }
    LightsComponent.prototype.ngOnInit = function () {
        this.getLights();
    };
    LightsComponent.prototype.getLights = function () {
        var _this = this;
        this.lightService.getLights()
            .subscribe(function (lights) { return _this.lights = lights; });
    };
    LightsComponent.prototype.showOptions = function (light) {
        this.switchedLight = light;
    };
    LightsComponent.prototype.onSwitch = function (light) {
        // light.state = !light.state;
        // light.state = !light.state;
        // this._electronService.ipcRenderer.send('lightChannel', { lightState: 1 });
        // console.log('Requesting light on');
        if (light.state === 1) {
            console.log('Requesting light off');
            light.state = 0;
            this._electronService.ipcRenderer.send('lightChannel', {
                lightDevice: 1,
                lightTimer: light.timer,
                lightChan: light.channel,
                lightState: 0,
                lightBrightness: light.brightness
            });
        }
        else {
            console.log('Requesting light on');
            light.state = 1;
            this._electronService.ipcRenderer.send('lightChannel', {
                lightDevice: 1,
                lightTimer: light.timer,
                lightChan: light.channel,
                lightState: 0,
                lightBrightness: light.brightness
            });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _lights__WEBPACK_IMPORTED_MODULE_2__["Light"])
    ], LightsComponent.prototype, "switch", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _lights__WEBPACK_IMPORTED_MODULE_2__["Light"])
    ], LightsComponent.prototype, "light", void 0);
    LightsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lights',
            template: __webpack_require__(/*! ./lights.component.html */ "./src/app/lights/lights.component.html"),
            styles: [__webpack_require__(/*! ./lights.component.scss */ "./src/app/lights/lights.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_light_service__WEBPACK_IMPORTED_MODULE_3__["LightService"],
            ngx_electron__WEBPACK_IMPORTED_MODULE_4__["ElectronService"]])
    ], LightsComponent);
    return LightsComponent;
}());



/***/ }),

/***/ "./src/app/maps.service.ts":
/*!*********************************!*\
  !*** ./src/app/maps.service.ts ***!
  \*********************************/
/*! exports provided: MapsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsService", function() { return MapsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var MapsService = /** @class */ (function () {
    function MapsService(http) {
        this.http = http;
    }
    MapsService.prototype.getLocation = function () {
        return this.http.get('https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDmeuRDj4XQR3MPTxaN7Wh1uaevNhKUATA'); //https://ipapi.co/json/
    };
    MapsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MapsService);
    return MapsService;
}());



/***/ }),

/***/ "./src/app/message.service.ts":
/*!************************************!*\
  !*** ./src/app/message.service.ts ***!
  \************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/messages/messages.component.html":
/*!**************************************************!*\
  !*** ./src/app/messages/messages.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"messageService.messages.length\">\r\n\r\n  <h2>Messages</h2>\r\n  <button class=\"clear\"\r\n          (click)=\"messageService.clear()\">clear</button>\r\n  <div *ngFor='let message of messageService.messages'> {{message}} </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/messages/messages.component.scss":
/*!**************************************************!*\
  !*** ./src/app/messages/messages.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* MessagesComponent's private CSS styles */\nh2 {\n  color: red;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: lighter; }\nbody {\n  margin: 2em; }\nbody, input[text], button {\n  color: crimson;\n  font-family: Cambria, Georgia; }\nbutton.clear {\n  font-family: Arial;\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand; }\nbutton:hover {\n  background-color: #cfd8dc; }\nbutton:disabled {\n  background-color: #eee;\n  color: #aaa;\n  cursor: auto; }\nbutton.clear {\n  color: #888;\n  margin-bottom: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZXMvQzpcXFVzZXJzXFxSb2JlcnRcXERlc2t0b3BcXGRlbE1lXFxCb2F0QXBwQW5ndWxhci9zcmNcXGFwcFxcbWVzc2FnZXNcXG1lc3NhZ2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJDQUFBO0FBQ0E7RUFDRSxVQUFVO0VBQ1YseUNBQXlDO0VBQ3pDLG9CQUFvQixFQUFBO0FBRXRCO0VBQ0UsV0FBVyxFQUFBO0FBRWI7RUFDRSxjQUFjO0VBQ2QsNkJBQTZCLEVBQUE7QUFHL0I7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZLEVBQUE7QUFFZDtFQUNFLHlCQUF5QixFQUFBO0FBRTNCO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZLEVBQUE7QUFFZDtFQUNFLFdBQVc7RUFDWCxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogTWVzc2FnZXNDb21wb25lbnQncyBwcml2YXRlIENTUyBzdHlsZXMgKi9cclxuaDIge1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbn1cclxuYm9keSB7XHJcbiAgbWFyZ2luOiAyZW07XHJcbn1cclxuYm9keSwgaW5wdXRbdGV4dF0sIGJ1dHRvbiB7XHJcbiAgY29sb3I6IGNyaW1zb247XHJcbiAgZm9udC1mYW1pbHk6IENhbWJyaWEsIEdlb3JnaWE7XHJcbn1cclxuXHJcbmJ1dHRvbi5jbGVhciB7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY3Vyc29yOiBoYW5kO1xyXG59XHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NmZDhkYztcclxufVxyXG5idXR0b246ZGlzYWJsZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgY29sb3I6ICNhYWE7XHJcbiAgY3Vyc29yOiBhdXRvO1xyXG59XHJcbmJ1dHRvbi5jbGVhciB7XHJcbiAgY29sb3I6ICM4ODg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");



var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(messageService) {
        this.messageService = messageService;
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.scss */ "./src/app/messages/messages.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/protection-detail/protection-detail.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/protection-detail/protection-detail.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb3RlY3Rpb24tZGV0YWlsL3Byb3RlY3Rpb24tZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/protection-detail/protection-detail.component.html":
/*!********************************************************************!*\
  !*** ./src/app/protection-detail/protection-detail.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  protection-detail works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/protection-detail/protection-detail.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/protection-detail/protection-detail.component.ts ***!
  \******************************************************************/
/*! exports provided: ProtectionDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProtectionDetailComponent", function() { return ProtectionDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _protections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../protections */ "./src/app/protections.ts");
/* harmony import */ var _protection_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../protection.service */ "./src/app/protection.service.ts");





var ProtectionDetailComponent = /** @class */ (function () {
    function ProtectionDetailComponent(route, protectionService) {
        this.route = route;
        this.protectionService = protectionService;
    }
    ProtectionDetailComponent.prototype.ngOnInit = function () {
    };
    ProtectionDetailComponent.prototype.close = function () {
        this.protection = null;
    };
    ProtectionDetailComponent.prototype.getProtection = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.protectionService.getProtection(id)
            .subscribe(function (protection) { return _this.protection = protection; });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _protections__WEBPACK_IMPORTED_MODULE_3__["Protection"])
    ], ProtectionDetailComponent.prototype, "protection", void 0);
    ProtectionDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-protection-detail',
            template: __webpack_require__(/*! ./protection-detail.component.html */ "./src/app/protection-detail/protection-detail.component.html"),
            styles: [__webpack_require__(/*! ./protection-detail.component.css */ "./src/app/protection-detail/protection-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _protection_service__WEBPACK_IMPORTED_MODULE_4__["ProtectionService"]])
    ], ProtectionDetailComponent);
    return ProtectionDetailComponent;
}());



/***/ }),

/***/ "./src/app/protection-edit/protection-edit.component.html":
/*!****************************************************************!*\
  !*** ./src/app/protection-edit/protection-edit.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  protection-edit works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/protection-edit/protection-edit.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/protection-edit/protection-edit.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb3RlY3Rpb24tZWRpdC9wcm90ZWN0aW9uLWVkaXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/protection-edit/protection-edit.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/protection-edit/protection-edit.component.ts ***!
  \**************************************************************/
/*! exports provided: ProtectionEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProtectionEditComponent", function() { return ProtectionEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProtectionEditComponent = /** @class */ (function () {
    function ProtectionEditComponent() {
    }
    ProtectionEditComponent.prototype.ngOnInit = function () {
    };
    ProtectionEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-protection-edit',
            template: __webpack_require__(/*! ./protection-edit.component.html */ "./src/app/protection-edit/protection-edit.component.html"),
            styles: [__webpack_require__(/*! ./protection-edit.component.scss */ "./src/app/protection-edit/protection-edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProtectionEditComponent);
    return ProtectionEditComponent;
}());



/***/ }),

/***/ "./src/app/protection.service.ts":
/*!***************************************!*\
  !*** ./src/app/protection.service.ts ***!
  \***************************************/
/*! exports provided: ProtectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProtectionService", function() { return ProtectionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _protections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./protections */ "./src/app/protections.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./message.service */ "./src/app/message.service.ts");







var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var ProtectionService = /** @class */ (function () {
    function ProtectionService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.fakeDB = [new _protections__WEBPACK_IMPORTED_MODULE_2__["Protection"](0, 'Anchor', 0),
            new _protections__WEBPACK_IMPORTED_MODULE_2__["Protection"](1, 'Outdrive', 0),
            new _protections__WEBPACK_IMPORTED_MODULE_2__["Protection"](2, 'Prop', 0)
        ];
        this.protectionsUrl = 'api/protections'; // URL to web api
    }
    ProtectionService.prototype.getProtections = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            observer.next(_this.fakeDB);
            observer.complete();
        });
        // return this.http.get<Protection[]>(this.protectionsUrl)
        //   .pipe(
        //     catchError(this.handleError('getProtections', []))
        //   );
    };
    // /** GET light by id. Will 404 if id not found */
    /**
     * getProtection
     *
     * @param id   not used?
     */
    ProtectionService.prototype.getProtection = function (id) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            // const url = `${this.protectionsUrl}/${id}`;
            // return this.http.get<Protection>(url).pipe(
            //   // tap(_ => this.log(`fetched light id=${id}`)),
            //   catchError(this.handleError<Protection>(`getProtection id=${id}`))
            // );
            var protection = _this.fakeDB.filter(function (element) { return (element.id === id); })[0];
            observer.next(protection);
            observer.complete();
        });
    };
    /** PUT: update the light on the server */
    ProtectionService.prototype.updateProtection = function (protection) {
        var _this = this;
        return this.http.put(this.protectionsUrl, protection, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (_) { return _this.log("updated protection id=" + protection.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('updateProtection')));
    };
    /** POST: add a new light to the server */
    ProtectionService.prototype.addProtection = function (protection) {
        var _this = this;
        return this.http.post(this.protectionsUrl, protection, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (newProtection) { return _this.log("added protection w/ id=" + newProtection.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('addProtection')));
    };
    /** DELETE: delete the light from the server */
    ProtectionService.prototype.deleteProtection = function (protection) {
        var _this = this;
        var id = typeof protection === 'number' ? protection : protection.id;
        var url = this.protectionsUrl + "/" + id;
        return this.http.delete(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (_) { return _this.log("deleted protection id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('deleteProtection')));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    ProtectionService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    /** Log a LightService message with the MessageService */
    ProtectionService.prototype.log = function (message) {
        this.messageService.add("ProtectionService: " + message);
    };
    ProtectionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _message_service__WEBPACK_IMPORTED_MODULE_6__["MessageService"]])
    ], ProtectionService);
    return ProtectionService;
}());



/***/ }),

/***/ "./src/app/protection/protection.component.html":
/*!******************************************************!*\
  !*** ./src/app/protection/protection.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Cathodic Protection</h2>\r\n\r\n<div class=\"device\">\r\n  <div class=\"\" *ngFor=\"let protection of protections\">\r\n    <div class=\"internalRow\"\r\n         [class.switched]=\"protection === switchedProtection\"\r\n         (click)=\"onSwitch(protection)\"\r\n\r\n    >\r\n\r\n\r\n\r\n      <div class=\"newBadge\">\r\n\r\n        <mat-icon *ngIf=\"protection.state\">brightness_7</mat-icon>\r\n        <mat-icon *ngIf=\"!protection.state\">brightness_1</mat-icon>\r\n\r\n      </div>\r\n\r\n      <div class=\"deviceName\">{{protection.name}}</div>\r\n\r\n\r\n\r\n      <div class=\"\">\r\n        <button (click)=\"showOptions(protection)\" mat-icon-button>\r\n          <mat-icon aria-label=\"Protection Options\">info</mat-icon>\r\n        </button>\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n  </div>\r\n\r\n\r\n</div>\r\n<div *ngIf=\"switch\">\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/protection/protection.component.scss":
/*!******************************************************!*\
  !*** ./src/app/protection/protection.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".selected {\n  background-color: #CFD8DC !important;\n  color: white; }\n\n.device {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 15em; }\n\n.device li {\n  cursor: pointer;\n  position: relative;\n  left: 0;\n  background-color: #EEE;\n  margin: .5em;\n  padding: .3em 0;\n  height: 1.6em;\n  border-radius: 4px; }\n\n.device .text {\n  position: relative;\n  top: -3px; }\n\n.device .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #607D8B;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px; }\n\n.internalRow {\n  display: flex;\n  width: 40vw;\n  -webkit-touch-callout: none;\n  /* iOS Safari */\n  -webkit-user-select: none;\n  /* Safari */\n  /* Konqueror HTML */\n  -moz-user-select: none;\n  /* Firefox */\n  -ms-user-select: none;\n  /* Internet Explorer/Edge */\n  user-select: none;\n  /* Non-prefixed version, currently\r\n                                  supported by Chrome and Opera */\n  border-radius: 4px 0 0 4px;\n  margin-bottom: 1vh;\n  justify-content: space-between;\n  font-family: 'Playfair Display', serif; }\n\n.newBadge {\n  background-color: #BBD8DC;\n  min-width: 35px;\n  padding-top: 10px;\n  padding-right: 25px;\n  padding-left: 10px;\n  border-radius: 4px 0 0 4px; }\n\n.internalRow:active {\n  background-color: pink; }\n\n.deviceName {\n  padding-top: 10px;\n  padding-right: 25px;\n  padding-left: 10px; }\n\n.internalRow:first-child {\n  margin-right: auto; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvdGVjdGlvbi9DOlxcVXNlcnNcXFJvYmVydFxcRGVza3RvcFxcZGVsTWVcXEJvYXRBcHBBbmd1bGFyL3NyY1xcYXBwXFxwcm90ZWN0aW9uXFxwcm90ZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm90ZWN0aW9uL3Byb3RlY3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBb0M7RUFDcEMsWUFBWSxFQUFBOztBQUdkO0VBQ0UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsV0FBVyxFQUFBOztBQUdiO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1Asc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixlQUFlO0VBQ2YsYUFBYTtFQUNiLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGtCQUFrQjtFQUNsQixTQUFTLEVBQUE7O0FBR1g7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFNBQVM7RUFDVCxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLDBCQUEwQixFQUFBOztBQUs1QjtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsMkJBQTJCO0VBQUUsZUFBQTtFQUM3Qix5QkFBeUI7RUFBRSxXQUFBO0VBQ0QsbUJBQUE7RUFDMUIsc0JBQXNCO0VBQUUsWUFBQTtFQUN4QixxQkFBcUI7RUFBRSwyQkFBQTtFQUN2QixpQkFBaUI7RUFBRTtpRUNBNEM7RURFL0QsMEJBQTBCO0VBRTFCLGtCQUFrQjtFQUNsQiw4QkFBOEI7RUFDOUIsc0NBQXNDLEVBQUE7O0FBR3hDO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQiwwQkFBMEIsRUFBQTs7QUFlNUI7RUFDRSxzQkFBc0IsRUFBQTs7QUFFeEI7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcHJvdGVjdGlvbi9wcm90ZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlbGVjdGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0ZEOERDICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZGV2aWNlIHtcclxuICBtYXJnaW46IDAgMCAyZW0gMDtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxuICB3aWR0aDogMTVlbTtcclxufVxyXG5cclxuLmRldmljZSBsaSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XHJcbiAgbWFyZ2luOiAuNWVtO1xyXG4gIHBhZGRpbmc6IC4zZW0gMDtcclxuICBoZWlnaHQ6IDEuNmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLmRldmljZSAudGV4dCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogLTNweDtcclxufVxyXG5cclxuLmRldmljZSAuYmFkZ2Uge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IHNtYWxsO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAwLjhlbSAwLjdlbSAwIDAuN2VtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2MDdEOEI7XHJcbiAgbGluZS1oZWlnaHQ6IDFlbTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDogLTFweDtcclxuICB0b3A6IC00cHg7XHJcbiAgaGVpZ2h0OiAxLjhlbTtcclxuICBtYXJnaW4tcmlnaHQ6IC44ZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4IDAgMCA0cHg7XHJcbn1cclxuXHJcblxyXG5cclxuLmludGVybmFsUm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiA0MHZ3O1xyXG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTsgLyogaU9TIFNhZmFyaSAqL1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFNhZmFyaSAqL1xyXG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTsgLyogS29ucXVlcm9yIEhUTUwgKi9cclxuICAtbW96LXVzZXItc2VsZWN0OiBub25lOyAvKiBGaXJlZm94ICovXHJcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAvKiBJbnRlcm5ldCBFeHBsb3Jlci9FZGdlICovXHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7IC8qIE5vbi1wcmVmaXhlZCB2ZXJzaW9uLCBjdXJyZW50bHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1cHBvcnRlZCBieSBDaHJvbWUgYW5kIE9wZXJhICovXHJcbiAgYm9yZGVyLXJhZGl1czogNHB4IDAgMCA0cHg7XHJcbiAgLy9iYWNrZ3JvdW5kLWNvbG9yOiBEREQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXZoO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXknLCBzZXJpZjtcclxuXHJcbn1cclxuLm5ld0JhZGdlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkJEOERDO1xyXG4gIG1pbi13aWR0aDogMzVweDtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcclxufVxyXG5cclxuLy8uaW50ZXJuYWxSb3cgZGl2LnNlbGVjdGVkOmhvdmVyIHtcclxuLy8gIGJhY2tncm91bmQtY29sb3I6ICNCQkQ4REMgIWltcG9ydGFudDtcclxuLy8gIGNvbG9yOiB3aGl0ZTtcclxuLy99XHJcbi8vXHJcbi8vLmludGVybmFsUm93IGRpdjpob3ZlciB7XHJcbi8vICBjb2xvcjogIzYwN0Q4QjtcclxuLy8gIGJhY2tncm91bmQtY29sb3I6ICNEREQ7XHJcbi8vICBsZWZ0OiAuMWVtO1xyXG4vL31cclxuXHJcblxyXG4uaW50ZXJuYWxSb3c6YWN0aXZlICB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcGluaztcclxufVxyXG4uZGV2aWNlTmFtZSB7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMjVweDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcblxyXG59XHJcbi5pbnRlcm5hbFJvdzpmaXJzdC1jaGlsZCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcbiIsIi5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDRkQ4REMgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlOyB9XG5cbi5kZXZpY2Uge1xuICBtYXJnaW46IDAgMCAyZW0gMDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMTVlbTsgfVxuXG4uZGV2aWNlIGxpIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XG4gIG1hcmdpbjogLjVlbTtcbiAgcGFkZGluZzogLjNlbSAwO1xuICBoZWlnaHQ6IDEuNmVtO1xuICBib3JkZXItcmFkaXVzOiA0cHg7IH1cblxuLmRldmljZSAudGV4dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtM3B4OyB9XG5cbi5kZXZpY2UgLmJhZGdlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IHNtYWxsO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAuOGVtIDAuN2VtIDAgMC43ZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MDdEOEI7XG4gIGxpbmUtaGVpZ2h0OiAxZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogLTFweDtcbiAgdG9wOiAtNHB4O1xuICBoZWlnaHQ6IDEuOGVtO1xuICBtYXJnaW4tcmlnaHQ6IC44ZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4OyB9XG5cbi5pbnRlcm5hbFJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA0MHZ3O1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gIC8qIGlPUyBTYWZhcmkgKi9cbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLyogU2FmYXJpICovXG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLyogS29ucXVlcm9yIEhUTUwgKi9cbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLyogRmlyZWZveCAqL1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC8qIEludGVybmV0IEV4cGxvcmVyL0VkZ2UgKi9cbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC8qIE5vbi1wcmVmaXhlZCB2ZXJzaW9uLCBjdXJyZW50bHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1cHBvcnRlZCBieSBDaHJvbWUgYW5kIE9wZXJhICovXG4gIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xuICBtYXJnaW4tYm90dG9tOiAxdmg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZm9udC1mYW1pbHk6ICdQbGF5ZmFpciBEaXNwbGF5Jywgc2VyaWY7IH1cblxuLm5ld0JhZGdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0JCRDhEQztcbiAgbWluLXdpZHRoOiAzNXB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMjVweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDsgfVxuXG4uaW50ZXJuYWxSb3c6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcGluazsgfVxuXG4uZGV2aWNlTmFtZSB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7IH1cblxuLmludGVybmFsUm93OmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvOyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/protection/protection.component.ts":
/*!****************************************************!*\
  !*** ./src/app/protection/protection.component.ts ***!
  \****************************************************/
/*! exports provided: ProtectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProtectionComponent", function() { return ProtectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _protections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../protections */ "./src/app/protections.ts");
/* harmony import */ var _protection_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../protection.service */ "./src/app/protection.service.ts");
/* harmony import */ var ngx_electron__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-electron */ "./node_modules/ngx-electron/fesm5/ngx-electron.js");





var ProtectionComponent = /** @class */ (function () {
    // protection: Protection[];
    function ProtectionComponent(protectionService, _electronService) {
        this.protectionService = protectionService;
        this._electronService = _electronService;
    }
    ProtectionComponent.prototype.ngOnInit = function () {
        this.getProtections();
    };
    ProtectionComponent.prototype.getProtections = function () {
        var _this = this;
        this.protectionService.getProtections().subscribe(function (arrayOfProtections) {
            _this.protections = arrayOfProtections;
        }, function (err) {
            console.error('Failed to get protections');
            console.error(err);
        });
    };
    ProtectionComponent.prototype.showOptions = function (protection) {
        this.switchedProtection = protection;
    };
    ProtectionComponent.prototype.onSwitch = function (protection) {
        if (protection.state === 1) {
            console.log('Requesting protection off');
            protection.state = 0;
            this._electronService.ipcRenderer.send('deviceChannel', { protectionState: 0 });
        }
        else {
            console.log('Requesting protection on');
            protection.state = 1;
            this._electronService.ipcRenderer.send('deviceChannel', { protectionState: 1 });
        }
        this._electronService.ipcRenderer.send('deviceChannel', {});
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _protections__WEBPACK_IMPORTED_MODULE_2__["Protection"])
    ], ProtectionComponent.prototype, "switch", void 0);
    ProtectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-protection',
            template: __webpack_require__(/*! ./protection.component.html */ "./src/app/protection/protection.component.html"),
            styles: [__webpack_require__(/*! ./protection.component.scss */ "./src/app/protection/protection.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_protection_service__WEBPACK_IMPORTED_MODULE_3__["ProtectionService"],
            ngx_electron__WEBPACK_IMPORTED_MODULE_4__["ElectronService"]])
    ], ProtectionComponent);
    return ProtectionComponent;
}());



/***/ }),

/***/ "./src/app/protections.ts":
/*!********************************!*\
  !*** ./src/app/protections.ts ***!
  \********************************/
/*! exports provided: Protection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Protection", function() { return Protection; });
var Protection = /** @class */ (function () {
    function Protection(id, name, state) {
        this.id = id;
        this.name = name;
        this.state = state;
    }
    return Protection;
}());



/***/ }),

/***/ "./src/app/settings/settings.component.html":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav mat-tab-nav-bar\r\n     mat-align-tabs=\"center\"\r\n     animationDuration=\"500ms\">\r\n  <div class=\"container\">\r\n      <a mat-tab-link\r\n         *ngFor=\"let link of navLinks\"\r\n         [routerLink]=\"['/'+link.path]\"\r\n         routerLinkActive #rla=\"routerLinkActive\"\r\n         [active]=\"rla.isActive\">\r\n        {{link.label}}\r\n      </a>\r\n    </div>\r\n</nav>\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/settings/settings.component.scss":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SettingsComponent = /** @class */ (function () {
    function SettingsComponent() {
        this.navLinks = [
            { path: 'light-edit', label: 'Add / Remove a light', },
            { path: 'protection-edit', label: 'Add / Remove cathodic protection' },
            { path: 'tracking', label: 'View map and enable tracking' }
            // { path: 'wifi', label: 'WIFI configuration'}
        ];
    }
    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.scss */ "./src/app/settings/settings.component.scss")]
        })
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/shared/constants/calendar.constants.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/constants/calendar.constants.ts ***!
  \********************************************************/
/*! exports provided: CLASS_LIST, DAYS_LONG, DAYS_SHORT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLASS_LIST", function() { return CLASS_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DAYS_LONG", function() { return DAYS_LONG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DAYS_SHORT", function() { return DAYS_SHORT; });
/**
 * @author: Shoukath Mohammed
 * @constant
 */
var DAYS_SHORT = [
    'MON',
    'TUE',
    'WED',
    'THUR',
    'FRI',
    'SAT',
    'SUN'
];
/**
 * @constant
 */
var DAYS_LONG = [
    'MONDAY',
    'TUESDAY',
    'WEDNESDAY',
    'THURSDAY',
    'FRIDAY',
    'SATURDAY',
    'SUNDAY'
];
/**
 * @constant
 */
var CLASS_LIST = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    ':': 'dots',
    'dots': ':'
};
/**
 * @exports
 */



/***/ }),

/***/ "./src/app/shared/services/util/util.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/util/util.service.ts ***!
  \******************************************************/
/*! exports provided: UtilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilService", function() { return UtilService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/**
 * @author: Shoukath Mohammed
 */
var UtilService = /** @class */ (function () {
    /**
     * @constructor
     */
    function UtilService() {
    }
    /**
     * @public
     * @return: string
     * @description: a helper method that prepends
     * `0` to the single digit.
     */
    UtilService.prototype.to2Digit = function (str) {
        if (!str) {
            return null;
        }
        var isString = (typeof str == 'string');
        if (isString && str.length == 1) {
            str = 0 + str;
        }
        return str;
    };
    UtilService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UtilService);
    return UtilService;
}());



/***/ }),

/***/ "./src/app/tracking/tracking.component.html":
/*!**************************************************!*\
  !*** ./src/app/tracking/tracking.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Maps</h1>\r\n\r\n<!--<agm-map [latitude]=\"lat\" [longitude]=\"lng\">-->\r\n  <!--<agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>-->\r\n<!--</agm-map>-->\r\n\r\n\r\n<iframe width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\"\r\n        src=\"https://www.google.com/maps/embed/v1/place?q=place_id:ChIJPaImb4O8cEgRcp1Xvy-pcR0&key=AIzaSyBTXSZtGchCgoBI3mVHE8l1hlHBb2LWqzQ\" allowfullscreen></iframe>\r\n"

/***/ }),

/***/ "./src/app/tracking/tracking.component.scss":
/*!**************************************************!*\
  !*** ./src/app/tracking/tracking.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\n  height: 400px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhY2tpbmcvQzpcXFVzZXJzXFxSb2JlcnRcXERlc2t0b3BcXGRlbE1lXFxCb2F0QXBwQW5ndWxhci9zcmNcXGFwcFxcdHJhY2tpbmdcXHRyYWNraW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdHJhY2tpbmcvdHJhY2tpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhZ20tbWFwIHtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/tracking/tracking.component.ts":
/*!************************************************!*\
  !*** ./src/app/tracking/tracking.component.ts ***!
  \************************************************/
/*! exports provided: TrackingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackingComponent", function() { return TrackingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _maps_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../maps.service */ "./src/app/maps.service.ts");



var TrackingComponent = /** @class */ (function () {
    function TrackingComponent(map) {
        this.map = map;
        this.lat = '';
        this.lng = '';
    }
    TrackingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.map.getLocation().subscribe(function (data) {
            console.log(data);
            _this.lat = data.latitude;
            _this.lng = data.longitude;
        });
    };
    TrackingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tracking',
            template: __webpack_require__(/*! ./tracking.component.html */ "./src/app/tracking/tracking.component.html"),
            styles: [__webpack_require__(/*! ./tracking.component.scss */ "./src/app/tracking/tracking.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_maps_service__WEBPACK_IMPORTED_MODULE_2__["MapsService"]])
    ], TrackingComponent);
    return TrackingComponent;
}());



/***/ }),

/***/ "./src/app/wifi/wifi.component.html":
/*!******************************************!*\
  !*** ./src/app/wifi/wifi.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  wifi works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/wifi/wifi.component.scss":
/*!******************************************!*\
  !*** ./src/app/wifi/wifi.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpZmkvd2lmaS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/wifi/wifi.component.ts":
/*!****************************************!*\
  !*** ./src/app/wifi/wifi.component.ts ***!
  \****************************************/
/*! exports provided: WifiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WifiComponent", function() { return WifiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WifiComponent = /** @class */ (function () {
    function WifiComponent() {
    }
    WifiComponent.prototype.ngOnInit = function () {
    };
    WifiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-wifi',
            template: __webpack_require__(/*! ./wifi.component.html */ "./src/app/wifi/wifi.component.html"),
            styles: [__webpack_require__(/*! ./wifi.component.scss */ "./src/app/wifi/wifi.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WifiComponent);
    return WifiComponent;
}());



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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Robert\Desktop\delMe\BoatAppAngular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map