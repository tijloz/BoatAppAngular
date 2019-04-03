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
/* harmony import */ var _serial_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./serial.service */ "./src/app/serial.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(serialService) {
        this.serialService = serialService;
        this.navLinks = [
            { path: 'home', redirectTo: '/home', label: 'Home', hasNotification: false },
            { path: 'lights', label: 'Lights', hasNotification: false },
            { path: 'protection', label: 'Protection', hasNotification: false },
            { path: 'settings', label: 'Settings', hasNotification: true, notificationCount: 6 }
        ];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.serialService.disconnectListener();
        this.serialService.voltageListener();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_serial_service__WEBPACK_IMPORTED_MODULE_2__["SerialService"]])
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
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _lights_lights_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lights/lights.component */ "./src/app/lights/lights.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _protection_protection_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./protection/protection.component */ "./src/app/protection/protection.component.ts");
/* harmony import */ var _light_detail_light_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./light-detail/light-detail.component */ "./src/app/light-detail/light-detail.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _light_edit_light_edit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./light-edit/light-edit.component */ "./src/app/light-edit/light-edit.component.ts");
/* harmony import */ var _protection_edit_protection_edit_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./protection-edit/protection-edit.component */ "./src/app/protection-edit/protection-edit.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var _in_memory_data_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./in-memory-data.service */ "./src/app/in-memory-data.service.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _digital_clock_digital_clock_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./digital-clock/digital-clock.component */ "./src/app/digital-clock/digital-clock.component.ts");
/* harmony import */ var _shared_services_util_util_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./shared/services/util/util.service */ "./src/app/shared/services/util/util.service.ts");
/* harmony import */ var ngx_electron__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-electron */ "./node_modules/ngx-electron/fesm5/ngx-electron.js");
/* harmony import */ var _tracking_tracking_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./tracking/tracking.component */ "./src/app/tracking/tracking.component.ts");
/* harmony import */ var _wifi_wifi_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./wifi/wifi.component */ "./src/app/wifi/wifi.component.ts");
/* harmony import */ var _protection_detail_protection_detail_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./protection-detail/protection-detail.component */ "./src/app/protection-detail/protection-detail.component.ts");



 // <-- NgModel lives here


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _lights_lights_component__WEBPACK_IMPORTED_MODULE_10__["LightsComponent"],
                _settings_settings_component__WEBPACK_IMPORTED_MODULE_11__["SettingsComponent"],
                _protection_protection_component__WEBPACK_IMPORTED_MODULE_12__["ProtectionComponent"],
                _light_detail_light_detail_component__WEBPACK_IMPORTED_MODULE_13__["LightDetailComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
                _light_edit_light_edit_component__WEBPACK_IMPORTED_MODULE_15__["LightEditComponent"],
                _protection_edit_protection_edit_component__WEBPACK_IMPORTED_MODULE_16__["ProtectionEditComponent"],
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_23__["MessagesComponent"],
                _digital_clock_digital_clock_component__WEBPACK_IMPORTED_MODULE_24__["DigitalClockComponent"],
                _tracking_tracking_component__WEBPACK_IMPORTED_MODULE_27__["TrackingComponent"],
                _wifi_wifi_component__WEBPACK_IMPORTED_MODULE_28__["WifiComponent"],
                _protection_detail_protection_detail_component__WEBPACK_IMPORTED_MODULE_29__["ProtectionDetailComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                ngx_electron__WEBPACK_IMPORTED_MODULE_26__["NgxElectronModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSliderModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__["MatBadgeModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"],
                angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_19__["HttpClientInMemoryWebApiModule"].forRoot(_in_memory_data_service__WEBPACK_IMPORTED_MODULE_20__["InMemoryDataService"], { dataEncapsulation: false }),
                _agm_core__WEBPACK_IMPORTED_MODULE_21__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyDmeuRDj4XQR3MPTxaN7Wh1uaevNhKUATA'
                })
            ],
            providers: [_shared_services_util_util_service__WEBPACK_IMPORTED_MODULE_25__["UtilService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
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

module.exports = "<div id=\"clock\" class=\"light\">\n  <div class=\"display clock-display\">\n    <div class=\"weekdays\">\n      <ul class=\"clock-weekdays-block\">\n        <li class=\"day-block\" *ngFor=\"let day of days\" [class.active]=\"today == day\">{{day}}</li>\n      </ul>\n    </div>\n    <div class=\"alarm\"></div>\n    <div class=\"digits\">\n      <ng-container *ngFor=\"let d of timeFormatList\">\n        <div class=\"dots\" *ngIf=\"d == 'dots'\" [style.visibility]=\"!displayDots ? 'visible': 'hidden'\"></div>\n        <div [attr.class]=\"d ? d: null\" *ngIf=\"d != 'dots'\">\n          <span *ngFor=\"let border of borders\" [attr.class]=\"border\"></span>\n        </div>\n      </ng-container>\n      <div class=\"ampm\">\n        <ul class=\"clock-meridian-block\">\n          <li class=\"clock-meridian\" *ngFor=\"let m of ['AM', 'PM']\" [class.active]=\"meridian == m\">{{m}}</li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"clock-date\">\n      <div class=\"small\">{{monthYear}}</div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/digital-clock/digital-clock.component.scss":
/*!************************************************************!*\
  !*** ./src/app/digital-clock/digital-clock.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".clock-display .clock-meridian,\n.clock-display .clock-weekdays-block .day-block {\n  opacity: 0.3;\n  list-style-type: none; }\n  .clock-display .clock-meridian.active,\n  .clock-display .clock-weekdays-block .day-block.active {\n    opacity: 1;\n    font-weight: bold; }\n  .clock-display .clock-weekdays-block > .day-block {\n  padding: 0 10px;\n  display: inline-block; }\n  .clock-display .small {\n  font-family: cursive;\n  font-size: 10px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlnaXRhbC1jbG9jay9DOlxcVXNlcnNcXGxvemhvXFxEb2N1bWVudHNcXEZZUFxcYm9hdEludGVyZmFjZUFuZ3VsYXJcXGJvYXRJbnRlcmZhY2Uvc3JjXFxhcHBcXGRpZ2l0YWwtY2xvY2tcXGRpZ2l0YWwtY2xvY2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBR0UsWUFBWTtFQUNaLHFCQUFxQixFQUFBO0VBSnZCOztJQU9HLFVBQVU7SUFDVixpQkFBaUIsRUFBQTtFQVJwQjtFQWNFLGVBQWU7RUFDZixxQkFBcUIsRUFBQTtFQWZ2QjtFQW9CRSxvQkFBb0I7RUFDcEIsMEJBQTBCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kaWdpdGFsLWNsb2NrL2RpZ2l0YWwtY2xvY2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xvY2stZGlzcGxheSAge1xyXG4uY2xvY2stbWVyaWRpYW4sXHJcbi5jbG9jay13ZWVrZGF5cy1ibG9jayAuZGF5LWJsb2NrIHtcclxuICBvcGFjaXR5OiAwLjM7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG5cclxuJi5hY3RpdmUge1xyXG4gICBvcGFjaXR5OiAxO1xyXG4gICBmb250LXdlaWdodDogYm9sZDtcclxuIH1cclxufVxyXG5cclxuLmNsb2NrLXdlZWtkYXlzLWJsb2NrIHtcclxuPiAuZGF5LWJsb2NrIHtcclxuICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbn1cclxuXHJcbi5zbWFsbCB7XHJcbiAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbiAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxufVxyXG4iXX0= */"

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

module.exports = "<div class=\"content\">\n\n  <!--<button id=\"lightBtnOn\" role=\"button\" (click)=\"LightOn()\">Light On</button>-->\n  <!--<button id=\"lightBtnOff\" role=\"button\" (click)=\"LightOff()\">Light Off</button>-->\n  <!--<div class=\"bg\"></div>-->\n\n  <!--<button mat-raised-button color=\"primary\" (click)=\"LightOn()\">On</button>-->\n  <!--<button mat-raised-button color=\"primary\" (click)=\"LightOff()\">Off</button>-->\n\n</div>\n\n<app-digital-clock></app-digital-clock>\n\n<ul></ul>\n\n<script>\n\n</script>\n"

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
            { id: 0, name: 'Anchor', state: '0', brightness: '0', timer: '4', channel: '1' },
            { id: 1, name: 'Nav', state: '0', brightness: '1', timer: '3', channel: '2' },
            { id: 2, name: 'Deck', state: '0', brightness: '2', timer: '2', channel: '3' },
            { id: 3, name: 'Galley', state: '0', brightness: '0', timer: '3', channel: '0' },
            { id: 4, name: 'Bathroom', state: '0', brightness: '1', timer: '3', channel: '1' },
            { id: 5, name: 'Cabin1', state: '0', brightness: '10', timer: '5', channel: '3' },
            { id: 6, name: 'Cabin2', state: '0', brightness: '3', timer: '2', channel: '2' },
            { id: 7, name: 'Ride', state: '0', brightness: '0', timer: '0', channel: '0' }
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

module.exports = "<mat-card *ngIf=\"light\" class=\"lightDetailCardContainer\">\r\n  <mat-card-header>\r\n    <div mat-card-avatar class=\"example-header-image\"></div>\r\n    <mat-card-title>{{light.name | uppercase}} Details</mat-card-title>\r\n    <mat-card-subtitle>Pin id: {{light.id}}</mat-card-subtitle>\r\n  </mat-card-header>\r\n\r\n  <mat-card-content>\r\n\r\n    <label>\r\n      Name:\r\n      <input matInput  [(ngModel)]=\"light.name\" placeholder=\"name\"/>\r\n    </label>\r\n\r\n    <h3>Current Brightness</h3>\r\n    <mat-slider [(ngModel)]=\"light.brightness\" [max]=\"255\"\r\n                [min]=\"1\"\r\n                [tickInterval]=\"1\"\r\n    ></mat-slider>\r\n\r\n  </mat-card-content>\r\n  <mat-card-actions>\r\n    <button (click)=\"close()\" mat-button>Close</button>\r\n  </mat-card-actions>\r\n</mat-card>\r\n\r\n"

/***/ }),

/***/ "./src/app/light-detail/light-detail.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/light-detail/light-detail.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* HeroDetailComponent's private CSS styles */\nlabel {\n  display: inline-block;\n  width: 3em;\n  margin: .5em 0;\n  color: #607D8B;\n  font-weight: bold; }\ninput {\n  height: 2em;\n  font-size: 1em;\n  padding-left: .4em; }\nbutton {\n  margin-top: 20px;\n  font-family: Arial;\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand; }\nbutton:hover {\n  background-color: #cfd8dc; }\nbutton:disabled {\n  background-color: #eee;\n  color: #ccc;\n  cursor: auto; }\n.example-header-image {\n  background-image: url(\"https://material.angular.io/assets/img/examples/shiba1.jpg\");\n  background-size: cover; }\n.lightDetailCardContainer {\n  margin: 0 auto;\n  margin-top: 10%;\n  max-width: 400px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlnaHQtZGV0YWlsL0M6XFxVc2Vyc1xcbG96aG9cXERvY3VtZW50c1xcRllQXFxib2F0SW50ZXJmYWNlQW5ndWxhclxcYm9hdEludGVyZmFjZS9zcmNcXGFwcFxcbGlnaHQtZGV0YWlsXFxsaWdodC1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkNBQUE7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsY0FBYztFQUNkLGNBQWM7RUFDZCxpQkFBaUIsRUFBQTtBQUduQjtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsa0JBQWtCLEVBQUE7QUFHcEI7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWSxFQUFBO0FBR2Q7RUFDRSx5QkFBeUIsRUFBQTtBQUczQjtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWSxFQUFBO0FBT2Q7RUFDRSxtRkFBbUY7RUFDbkYsc0JBQXNCLEVBQUE7QUFHeEI7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGlnaHQtZGV0YWlsL2xpZ2h0LWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEhlcm9EZXRhaWxDb21wb25lbnQncyBwcml2YXRlIENTUyBzdHlsZXMgKi9cclxubGFiZWwge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogM2VtO1xyXG4gIG1hcmdpbjogLjVlbSAwO1xyXG4gIGNvbG9yOiAjNjA3RDhCO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgaGVpZ2h0OiAyZW07XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgcGFkZGluZy1sZWZ0OiAuNGVtO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY3Vyc29yOiBoYW5kO1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjZmQ4ZGM7XHJcbn1cclxuXHJcbmJ1dHRvbjpkaXNhYmxlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICBjb2xvcjogI2NjYztcclxuICBjdXJzb3I6IGF1dG87XHJcbn1cclxuXHJcblxyXG4uZXhhbXBsZS1jYXJkIHtcclxufVxyXG5cclxuLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMS5qcGcnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4ubGlnaHREZXRhaWxDYXJkQ29udGFpbmVyIHtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxuXHJcbn1cclxuXHJcbiJdfQ== */"

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

module.exports = "<h2>Lights</h2>\n<div>\n  <input  #lightName value=\"Light name\" onfocus=\"this.value=''\" />\n  <!-- (click) passes input value to add() and then clears the input -->\n  <button (click)=\"add(lightName.value); lightName.value=''\">\n    add\n  </button>\n  <button (click)=\"goBack()\">go back</button>\n</div>\n\n<ul class=\"lights\">\n  <li *ngFor=\"let light of lights\">\n    <a routerLink=\"/detail/{{light.id}}\">\n      <span class=\"badge\">{{light.id}}</span> {{light.name}}\n    </a>\n    <button class=\"delete\" title=\"delete light\"\n            (click)=\"delete(light)\">x</button>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/light-edit/light-edit.component.scss":
/*!******************************************************!*\
  !*** ./src/app/light-edit/light-edit.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* HeroesComponent's private CSS styles */\n.lights {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 15em; }\n.lights li {\n  position: relative;\n  cursor: pointer;\n  background-color: #EEE;\n  margin: .5em;\n  padding: .3em 0;\n  height: 1.6em;\n  border-radius: 4px; }\n.lights li:hover {\n  color: #607D8B;\n  background-color: #DDD;\n  left: .1em; }\n.lights a {\n  color: #888;\n  text-decoration: none;\n  position: relative;\n  display: block;\n  width: 250px; }\n.lights a:hover {\n  color: #607D8B; }\n.lights .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #607D8B;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  min-width: 16px;\n  text-align: right;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px; }\nbutton {\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand;\n  font-family: Arial; }\nbutton:hover {\n  background-color: #cfd8dc; }\nbutton.delete {\n  position: relative;\n  left: 194px;\n  top: -32px;\n  background-color: gray !important;\n  color: white; }\n/*\r\nCopyright Google LLC. All Rights Reserved.\r\nUse of this source code is governed by an MIT-style license that\r\ncan be found in the LICENSE file at http://angular.io/license\r\n*/\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlnaHQtZWRpdC9DOlxcVXNlcnNcXGxvemhvXFxEb2N1bWVudHNcXEZZUFxcYm9hdEludGVyZmFjZUFuZ3VsYXJcXGJvYXRJbnRlcmZhY2Uvc3JjXFxhcHBcXGxpZ2h0LWVkaXRcXGxpZ2h0LWVkaXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xpZ2h0LWVkaXQvbGlnaHQtZWRpdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5Q0FBQTtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsV0FBVyxFQUFBO0FBRWI7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osZUFBZTtFQUNmLGFBQWE7RUFDYixrQkFBa0IsRUFBQTtBQUdwQjtFQUNFLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsVUFBVSxFQUFBO0FBR1o7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsWUFBWSxFQUFBO0FBR2Q7RUFDRSxjQUFhLEVBQUE7QUFHZjtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLDRCQUE0QjtFQUM1Qix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsU0FBUztFQUNULGFBQWE7RUFDYixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQiwwQkFBMEIsRUFBQTtBQUc1QjtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQixFQUFBO0FBR3BCO0VBQ0UseUJBQXlCLEVBQUE7QUFHM0I7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFVBQVU7RUFDVixpQ0FBaUM7RUFDakMsWUFBWSxFQUFBO0FBS2Q7Ozs7Q0NOQyIsImZpbGUiOiJzcmMvYXBwL2xpZ2h0LWVkaXQvbGlnaHQtZWRpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEhlcm9lc0NvbXBvbmVudCdzIHByaXZhdGUgQ1NTIHN0eWxlcyAqL1xyXG4ubGlnaHRzIHtcclxuICBtYXJnaW46IDAgMCAyZW0gMDtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxuICB3aWR0aDogMTVlbTtcclxufVxyXG4ubGlnaHRzIGxpIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XHJcbiAgbWFyZ2luOiAuNWVtO1xyXG4gIHBhZGRpbmc6IC4zZW0gMDtcclxuICBoZWlnaHQ6IDEuNmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLmxpZ2h0cyBsaTpob3ZlciB7XHJcbiAgY29sb3I6ICM2MDdEOEI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RERDtcclxuICBsZWZ0OiAuMWVtO1xyXG59XHJcblxyXG4ubGlnaHRzIGEge1xyXG4gIGNvbG9yOiAjODg4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG59XHJcblxyXG4ubGlnaHRzIGE6aG92ZXIge1xyXG4gIGNvbG9yOiM2MDdEOEI7XHJcbn1cclxuXHJcbi5saWdodHMgLmJhZGdlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiBzbWFsbDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMC44ZW0gMC43ZW0gMCAwLjdlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA3RDhCO1xyXG4gIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxlZnQ6IC0xcHg7XHJcbiAgdG9wOiAtNHB4O1xyXG4gIGhlaWdodDogMS44ZW07XHJcbiAgbWluLXdpZHRoOiAxNnB4O1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIG1hcmdpbi1yaWdodDogLjhlbTtcclxuICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGN1cnNvcjogaGFuZDtcclxuICBmb250LWZhbWlseTogQXJpYWw7XHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NmZDhkYztcclxufVxyXG5cclxuYnV0dG9uLmRlbGV0ZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxlZnQ6IDE5NHB4O1xyXG4gIHRvcDogLTMycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuXHJcblxyXG4vKlxyXG5Db3B5cmlnaHQgR29vZ2xlIExMQy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdFxyXG5jYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwOi8vYW5ndWxhci5pby9saWNlbnNlXHJcbiovXHJcbiIsIi8qIEhlcm9lc0NvbXBvbmVudCdzIHByaXZhdGUgQ1NTIHN0eWxlcyAqL1xuLmxpZ2h0cyB7XG4gIG1hcmdpbjogMCAwIDJlbSAwO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAxNWVtOyB9XG5cbi5saWdodHMgbGkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcbiAgbWFyZ2luOiAuNWVtO1xuICBwYWRkaW5nOiAuM2VtIDA7XG4gIGhlaWdodDogMS42ZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweDsgfVxuXG4ubGlnaHRzIGxpOmhvdmVyIHtcbiAgY29sb3I6ICM2MDdEOEI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEREQ7XG4gIGxlZnQ6IC4xZW07IH1cblxuLmxpZ2h0cyBhIHtcbiAgY29sb3I6ICM4ODg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDI1MHB4OyB9XG5cbi5saWdodHMgYTpob3ZlciB7XG4gIGNvbG9yOiAjNjA3RDhCOyB9XG5cbi5saWdodHMgLmJhZGdlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IHNtYWxsO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAuOGVtIDAuN2VtIDAgMC43ZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MDdEOEI7XG4gIGxpbmUtaGVpZ2h0OiAxZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogLTFweDtcbiAgdG9wOiAtNHB4O1xuICBoZWlnaHQ6IDEuOGVtO1xuICBtaW4td2lkdGg6IDE2cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IC44ZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4OyB9XG5cbmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjdXJzb3I6IGhhbmQ7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbDsgfVxuXG5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZkOGRjOyB9XG5cbmJ1dHRvbi5kZWxldGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDE5NHB4O1xuICB0b3A6IC0zMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTsgfVxuXG4vKlxyXG5Db3B5cmlnaHQgR29vZ2xlIExMQy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdFxyXG5jYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwOi8vYW5ndWxhci5pby9saWNlbnNlXHJcbiovXG4iXX0= */"

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

module.exports = "<h2>Lights</h2>\r\n\r\n<div class=\"device\">\r\n  <div class=\"\" *ngFor=\"let light of lights\">\r\n    <div class=\"selectionList_internalRow\"\r\n         [class.switched]=\"light === switchedLight\"\r\n         (click)=\"onSwitch(light)\"\r\n    >\r\n\r\n      <div class=\"selectionList_newBadge\">\r\n        <mat-icon *ngIf=\"light.state\">brightness_7</mat-icon>\r\n        <mat-icon *ngIf=\"!light.state\">brightness_1</mat-icon>\r\n      </div>\r\n\r\n      <div class=\"selectionList_deviceName\">{{light.name}}</div>\r\n\r\n      <div>\r\n        <button (click)=\"showOptions(light)\" mat-icon-button>\r\n          <mat-icon aria-label=\"Light Options\">info</mat-icon>\r\n        </button>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n<div *ngIf=\"switch\">\r\n\r\n</div>\r\n\r\n\r\n<app-light-detail [light]=\"switchedLight\"></app-light-detail>\r\n"

/***/ }),

/***/ "./src/app/lights/lights.component.scss":
/*!**********************************************!*\
  !*** ./src/app/lights/lights.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".selected {\n  background-color: #CFD8DC !important;\n  color: white; }\n\n.device {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 15em; }\n\n.device li {\n  cursor: pointer;\n  position: relative;\n  left: 0;\n  background-color: #EEE;\n  margin: .5em;\n  padding: .3em 0;\n  height: 1.6em;\n  border-radius: 4px; }\n\n.device .text {\n  position: relative;\n  top: -3px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlnaHRzL0M6XFxVc2Vyc1xcbG96aG9cXERvY3VtZW50c1xcRllQXFxib2F0SW50ZXJmYWNlQW5ndWxhclxcYm9hdEludGVyZmFjZS9zcmNcXGFwcFxcbGlnaHRzXFxsaWdodHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBb0M7RUFDcEMsWUFBWSxFQUFBOztBQUdkO0VBQ0UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsV0FBVyxFQUFBOztBQUdiO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1Asc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixlQUFlO0VBQ2YsYUFBYTtFQUNiLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGtCQUFrQjtFQUNsQixTQUFTLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9saWdodHMvbGlnaHRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlbGVjdGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0ZEOERDICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZGV2aWNlIHtcclxuICBtYXJnaW46IDAgMCAyZW0gMDtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxuICB3aWR0aDogMTVlbTtcclxufVxyXG5cclxuLmRldmljZSBsaSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XHJcbiAgbWFyZ2luOiAuNWVtO1xyXG4gIHBhZGRpbmc6IC4zZW0gMDtcclxuICBoZWlnaHQ6IDEuNmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLmRldmljZSAudGV4dCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogLTNweDtcclxufVxyXG5cclxuLy8uc2VsZWN0ZWQge1xyXG4vLyAgYmFja2dyb3VuZC1jb2xvcjogI0NGRDhEQyAhaW1wb3J0YW50O1xyXG4vLyAgY29sb3I6IHdoaXRlO1xyXG4vL31cclxuLy9cclxuLy8gLmRldmljZSB7XHJcbi8vICBtYXJnaW46IDAgMCAyZW0gMDtcclxuLy8gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuLy8gIHBhZGRpbmc6IDA7XHJcbi8vICB3aWR0aDogMTVlbTtcclxuLy99XHJcbi8vXHJcbi8vICAuZGV2aWNlIGxpIHtcclxuLy8gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4vLyAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbi8vICAgIGxlZnQ6IDA7XHJcbi8vICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XHJcbi8vICAgIG1hcmdpbjogLjVlbTtcclxuLy8gICAgcGFkZGluZzogLjNlbSAwO1xyXG4vLyAgICBoZWlnaHQ6IDEuNmVtO1xyXG4vLyAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbi8vICB9XHJcbi8vXHJcbi8vICAgIC8vLmxpZ2h0cyBsaS5zZWxlY3RlZDpob3ZlciB7XHJcbi8vICAgIC8vICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkJEOERDICFpbXBvcnRhbnQ7XHJcbi8vICAgIC8vICBjb2xvcjogd2hpdGU7XHJcbi8vICAgIC8vfVxyXG4vL1xyXG4vLyAgICAvLy5saWdodHMgbGk6aG92ZXIge1xyXG4vLyAgICAvLyAgY29sb3I6ICM2MDdEOEI7XHJcbi8vICAgIC8vICBiYWNrZ3JvdW5kLWNvbG9yOiAjREREO1xyXG4vLyAgICAvLyAgbGVmdDogLjFlbTtcclxuLy8gICAgLy99XHJcbi8vXHJcbi8vICAubGlnaHRzIC50ZXh0IHtcclxuLy8gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyAgICB0b3A6IC0zcHg7XHJcbi8vICB9XHJcbi8vXHJcbi8vICAuZGV2aWNlIC5iYWRnZSB7XHJcbi8vICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuLy8gICAgZm9udC1zaXplOiBzbWFsbDtcclxuLy8gICAgY29sb3I6IHdoaXRlO1xyXG4vLyAgICBwYWRkaW5nOiAwLjhlbSAwLjdlbSAwIDAuN2VtO1xyXG4vLyAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA3RDhCO1xyXG4vLyAgICBsaW5lLWhlaWdodDogMWVtO1xyXG4vLyAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbi8vICAgIGxlZnQ6IC0xcHg7XHJcbi8vICAgIHRvcDogLTRweDtcclxuLy8gICAgaGVpZ2h0OiAxLjhlbTtcclxuLy8gICAgbWFyZ2luLXJpZ2h0OiAuOGVtO1xyXG4vLyAgICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcclxuLy8gIH1cclxuLy9cclxuLy9cclxuLy9cclxuLy8uaW50ZXJuYWxSb3cge1xyXG4vLyAgZGlzcGxheTogZmxleDtcclxuLy8gIHdpZHRoOiA0MHZ3O1xyXG4vLyAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lOyAvKiBpT1MgU2FmYXJpICovXHJcbi8vICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAvKiBTYWZhcmkgKi9cclxuLy8gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTsgLyogS29ucXVlcm9yIEhUTUwgKi9cclxuLy8gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEZpcmVmb3ggKi9cclxuLy8gIC1tcy11c2VyLXNlbGVjdDogbm9uZTsgLyogSW50ZXJuZXQgRXhwbG9yZXIvRWRnZSAqL1xyXG4vLyAgdXNlci1zZWxlY3Q6IG5vbmU7IC8qIE5vbi1wcmVmaXhlZCB2ZXJzaW9uLCBjdXJyZW50bHlcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VwcG9ydGVkIGJ5IENocm9tZSBhbmQgT3BlcmEgKi9cclxuLy8gIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xyXG4vLyAgLy9iYWNrZ3JvdW5kLWNvbG9yOiBEREQ7XHJcbi8vICBtYXJnaW4tYm90dG9tOiAxdmg7XHJcbi8vICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbi8vICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXknLCBzZXJpZjtcclxuLy9cclxuLy99XHJcbi8vLm5ld0JhZGdlIHtcclxuLy8gIGJhY2tncm91bmQtY29sb3I6ICNCQkQ4REM7XHJcbi8vICBtaW4td2lkdGg6IDM1cHg7XHJcbi8vICBwYWRkaW5nLXRvcDogMTBweDtcclxuLy8gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XHJcbi8vICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbi8vICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcclxuLy99XHJcbi8vXHJcbi8vLy8uaW50ZXJuYWxSb3cgZGl2LnNlbGVjdGVkOmhvdmVyIHtcclxuLy8vLyAgYmFja2dyb3VuZC1jb2xvcjogI0JCRDhEQyAhaW1wb3J0YW50O1xyXG4vLy8vICBjb2xvcjogd2hpdGU7XHJcbi8vLy99XHJcbi8vLy9cclxuLy8vLy5pbnRlcm5hbFJvdyBkaXY6aG92ZXIge1xyXG4vLy8vICBjb2xvcjogIzYwN0Q4QjtcclxuLy8vLyAgYmFja2dyb3VuZC1jb2xvcjogI0RERDtcclxuLy8vLyAgbGVmdDogLjFlbTtcclxuLy8vL31cclxuLy9cclxuLy9cclxuLy8uaW50ZXJuYWxSb3c6YWN0aXZlICB7XHJcbi8vICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xyXG4vL31cclxuLy8uZGV2aWNlTmFtZSB7XHJcbi8vICBwYWRkaW5nLXRvcDogMTBweDtcclxuLy8gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XHJcbi8vICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbi8vXHJcbi8vfVxyXG4vLy5pbnRlcm5hbFJvdzpmaXJzdC1jaGlsZCB7XHJcbi8vICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbi8vfVxyXG4iXX0= */"

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
        if (light.state === '1') {
            console.log('Requesting light off');
            light.state = '0';
            this._electronService.ipcRenderer.send('lightChannel', {
                lightDevice: '1',
                lightTimer: "" + light.timer,
                lightChan: "" + light.channel,
                lightState: "" + light.state,
                lightBrightness: "" + light.brightness
            });
        }
        else {
            console.log('Requesting light on');
            light.state = '1';
            this._electronService.ipcRenderer.send('lightChannel', {
                lightDevice: '1',
                lightTimer: "" + light.timer,
                lightChan: "" + light.channel,
                lightState: "" + light.state,
                lightBrightness: "" + light.brightness
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

;


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

module.exports = "<div *ngIf=\"messageService.messages.length\">\n\n  <h2>Messages</h2>\n  <button class=\"clear\"\n          (click)=\"messageService.clear()\">clear</button>\n  <div *ngFor='let message of messageService.messages'> {{message}} </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/messages/messages.component.scss":
/*!**************************************************!*\
  !*** ./src/app/messages/messages.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* MessagesComponent's private CSS styles */\nh2 {\n  color: red;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: lighter; }\nbody {\n  margin: 2em; }\nbody, input[text], button {\n  color: crimson;\n  font-family: Cambria, Georgia; }\nbutton.clear {\n  font-family: Arial;\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand; }\nbutton:hover {\n  background-color: #cfd8dc; }\nbutton:disabled {\n  background-color: #eee;\n  color: #aaa;\n  cursor: auto; }\nbutton.clear {\n  color: #888;\n  margin-bottom: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZXMvQzpcXFVzZXJzXFxsb3pob1xcRG9jdW1lbnRzXFxGWVBcXGJvYXRJbnRlcmZhY2VBbmd1bGFyXFxib2F0SW50ZXJmYWNlL3NyY1xcYXBwXFxtZXNzYWdlc1xcbWVzc2FnZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkNBQUE7QUFDQTtFQUNFLFVBQVU7RUFDVix5Q0FBeUM7RUFDekMsb0JBQW9CLEVBQUE7QUFFdEI7RUFDRSxXQUFXLEVBQUE7QUFFYjtFQUNFLGNBQWM7RUFDZCw2QkFBNkIsRUFBQTtBQUcvQjtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVksRUFBQTtBQUVkO0VBQ0UseUJBQXlCLEVBQUE7QUFFM0I7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFlBQVksRUFBQTtBQUVkO0VBQ0UsV0FBVztFQUNYLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBNZXNzYWdlc0NvbXBvbmVudCdzIHByaXZhdGUgQ1NTIHN0eWxlcyAqL1xyXG5oMiB7XHJcbiAgY29sb3I6IHJlZDtcclxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogbGlnaHRlcjtcclxufVxyXG5ib2R5IHtcclxuICBtYXJnaW46IDJlbTtcclxufVxyXG5ib2R5LCBpbnB1dFt0ZXh0XSwgYnV0dG9uIHtcclxuICBjb2xvcjogY3JpbXNvbjtcclxuICBmb250LWZhbWlseTogQ2FtYnJpYSwgR2VvcmdpYTtcclxufVxyXG5cclxuYnV0dG9uLmNsZWFyIHtcclxuICBmb250LWZhbWlseTogQXJpYWw7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjdXJzb3I6IGhhbmQ7XHJcbn1cclxuYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZkOGRjO1xyXG59XHJcbmJ1dHRvbjpkaXNhYmxlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICBjb2xvcjogI2FhYTtcclxuICBjdXJzb3I6IGF1dG87XHJcbn1cclxuYnV0dG9uLmNsZWFyIHtcclxuICBjb2xvcjogIzg4ODtcclxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG59XHJcbiJdfQ== */"

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

/***/ "./src/app/protection-detail/protection-detail.component.html":
/*!********************************************************************!*\
  !*** ./src/app/protection-detail/protection-detail.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card *ngIf=\"protection\" class=\"protectionDetailCardContainer\">\n  <mat-card-header>\n    <div mat-card-avatar class=\"example-header-image\"></div>\n    <mat-card-title>{{protection.name | uppercase}} Details</mat-card-title>\n    <mat-card-subtitle>Pin id: {{protection.id}}</mat-card-subtitle>\n  </mat-card-header>\n\n\n  <mat-card-content class=\"protectionDetails\">\n\n    <div class=\"protectionDetails_topLevel\" (click)=\"setCurrentVoltageViewMode('off')\">\n      <label> Name:\n        <input [(ngModel)]=\"protection.name\" placeholder=\"name\"/>\n      </label>\n    </div>\n\n\n    <mat-divider [inset]=\"true\"></mat-divider>\n\n    <div class=\"protectionDetails_electricalDetails\">\n      <div class=\"protectionDetails_electricalDetails-spec\" (click)=\"setCurrentVoltageViewMode('anode')\">\n        <label> Anode voltage:\n          <p> {{protectionDetailVoltage}} </p>\n        </label>\n      </div>\n      <div class=\"protectionDetails_electricalDetails-spec\" (click)=\"setCurrentVoltageViewMode('cathode')\">\n        <label> Cathode current:\n          <p> {{protectionDetailCurrent}} </p>\n        </label>\n      </div>\n      <div class=\"protectionDetails_electricalDetails-spec\" (click)=\"setCurrentVoltageViewMode('temperatureMode')\">\n        <label> Controller temperature:\n          <p> {{protectionDetailTempature}} </p>\n        </label>\n      </div>\n    </div>\n\n  </mat-card-content>\n\n  <mat-card-actions>\n    <button (click)=\"close()\"  mat-raised-button>Close</button>\n  </mat-card-actions>\n\n</mat-card>\n\n"

/***/ }),

/***/ "./src/app/protection-detail/protection-detail.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/protection-detail/protection-detail.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".protectionDetails {\n  width: 85%;\n  margin: auto;\n  margin-top: 25px; }\n  .protectionDetails_topLevel {\n    margin-bottom: 25px; }\n  .protectionDetails_electricalDetails {\n    margin-top: 25px;\n    display: flex;\n    justify-content: space-around; }\n  .protectionDetailCardContainer {\n  width: 80%;\n  margin: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvdGVjdGlvbi1kZXRhaWwvQzpcXFVzZXJzXFxsb3pob1xcRG9jdW1lbnRzXFxGWVBcXGJvYXRJbnRlcmZhY2VBbmd1bGFyXFxib2F0SW50ZXJmYWNlL3NyY1xcYXBwXFxwcm90ZWN0aW9uLWRldGFpbFxccHJvdGVjdGlvbi1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGdCQUFnQixFQUFBO0VBR2hCO0lBQ0UsbUJBQW1CLEVBQUE7RUFHdEI7SUFDRSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLDZCQUE2QixFQUFBO0VBTWhDO0VBQ0UsVUFBVTtFQUNWLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Byb3RlY3Rpb24tZGV0YWlsL3Byb3RlY3Rpb24tZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb3RlY3Rpb25EZXRhaWxzIHtcclxuICB3aWR0aDogODUlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXJnaW4tdG9wOiAyNXB4O1xyXG5cclxuXHJcbiAgJl90b3BMZXZlbCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gIH1cclxuXHJcbiAmX2VsZWN0cmljYWxEZXRhaWxzIHtcclxuICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgZGlzcGxheTogZmxleDtcclxuICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiB9XHJcblxyXG59XHJcblxyXG4vLyBPbmx5IG1ha2UgdGhlIGNhcmQgODAlIG9mIGl0cyBwYXJlbnRzIHdpZHRoXHJcbi5wcm90ZWN0aW9uRGV0YWlsQ2FyZENvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuIl19 */"

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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");






var ProtectionDetailComponent = /** @class */ (function () {
    function ProtectionDetailComponent(route, protectionService) {
        this.route = route;
        this.protectionService = protectionService;
        this.currentVoltageViewMode = 'anode';
        this.protectionDetailVoltage = '0';
        this.protectionDetailCurrent = '0';
        this.protectionDetailTempature = '0';
    }
    ProtectionDetailComponent.prototype.setCurrentVoltageViewMode = function (newViewMode) {
        this.currentVoltageViewMode = newViewMode;
        console.log('Set the viewmpde to:' + newViewMode);
    };
    ProtectionDetailComponent.prototype.getRandomBetween = function (lower, upper) {
        var test = ((Math.random() * upper) + lower).toFixed(3);
        console.log(test);
        return test;
    };
    ProtectionDetailComponent.prototype.updateProtectionDetails = function () {
        console.log('Updating Protection Details');
        // Dont run if protection is undefined
        console.log("this.currentVoltageViewMode: " + this.protectionDetailVoltage);
        switch (this.currentVoltageViewMode) {
            case 'anode':
                console.log("updated volt: " + this.protectionDetailVoltage);
                this.protectionDetailVoltage = this.getRandomBetween(0.55, 0.6);
                this.protectionDetailCurrent = this.getRandomBetween(3.2, 3.4);
                break;
            case 'cathode':
                this.protectionDetailVoltage = this.getRandomBetween(0.6, 0.7);
                this.protectionDetailCurrent = this.getRandomBetween(0.8, 0.9);
                break;
            case 'off':
                this.protectionDetailVoltage = '0';
                this.protectionDetailCurrent = '0';
                break;
            default:
                this.protectionDetailVoltage = this.getRandomBetween(55.6, 88.7);
                this.protectionDetailCurrent = this.getRandomBetween(55.8, 88.9);
                console.log('Failed to identify voltage viewmode');
        }
    };
    ProtectionDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Update the protection details
        this.updateProtectionDetails();
        this.trigger().subscribe(function () {
            _this.updateProtectionDetails();
        });
    };
    ProtectionDetailComponent.prototype.trigger = function () {
        return new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"](function (obserber) {
            setInterval(function () {
                obserber.next(true);
            }, 500);
        });
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
            styles: [__webpack_require__(/*! ./protection-detail.component.scss */ "./src/app/protection-detail/protection-detail.component.scss")]
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

module.exports = "<p>\n  protection-edit works!\n</p>\n"

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
        this.fakeDB = [new _protections__WEBPACK_IMPORTED_MODULE_2__["Protection"](0, 'Anchor', '0', '0.00', '0.00', '20'),
            new _protections__WEBPACK_IMPORTED_MODULE_2__["Protection"](1, 'Outdrive', '0', '0.00', '0.00', '20'),
            new _protections__WEBPACK_IMPORTED_MODULE_2__["Protection"](2, 'Prop', '0', '0.00', '0.00', '20')
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

module.exports = "<h2>Cathodic Protection</h2>\n\n<div class=\"device\">\n  <div class=\"\" *ngFor=\"let protection of protections\">\n    <div class=\"selectionList_internalRow\"\n         [class.switched]=\"protection === switchedProtection\"\n         (click)=\"onSwitch(protection)\">\n\n      <div class=\"selectionList_newBadge\">\n        <mat-icon *ngIf=\"protection.state\">brightness_7</mat-icon>\n        <mat-icon *ngIf=\"!protection.state\">brightness_1</mat-icon>\n      </div>\n\n      <div class=\"selectionList_deviceName\">{{protection.name}}</div>\n\n\n\n      <div>\n        <button (click)=\"showOptions(protection)\" mat-icon-button>\n          <mat-icon aria-label=\"Protection Options\">info</mat-icon>\n        </button>\n      </div>\n\n    </div>\n\n\n  </div>\n\n\n</div>\n<div *ngIf=\"switch\">\n\n</div>\n\n<app-protection-detail [protection]=\"switchedProtection\"></app-protection-detail>\n"

/***/ }),

/***/ "./src/app/protection/protection.component.scss":
/*!******************************************************!*\
  !*** ./src/app/protection/protection.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".selected {\n  background-color: #CFD8DC !important;\n  color: white; }\n\n.device {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 15em; }\n\n.device li {\n  cursor: pointer;\n  position: relative;\n  left: 0;\n  background-color: #EEE;\n  margin: .5em;\n  padding: .3em 0;\n  height: 1.6em;\n  border-radius: 4px; }\n\n.device .text {\n  position: relative;\n  top: -3px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvdGVjdGlvbi9DOlxcVXNlcnNcXGxvemhvXFxEb2N1bWVudHNcXEZZUFxcYm9hdEludGVyZmFjZUFuZ3VsYXJcXGJvYXRJbnRlcmZhY2Uvc3JjXFxhcHBcXHByb3RlY3Rpb25cXHByb3RlY3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBb0M7RUFDcEMsWUFBWSxFQUFBOztBQUdkO0VBQ0UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsV0FBVyxFQUFBOztBQUdiO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1Asc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixlQUFlO0VBQ2YsYUFBYTtFQUNiLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGtCQUFrQjtFQUNsQixTQUFTLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wcm90ZWN0aW9uL3Byb3RlY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VsZWN0ZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNDRkQ4REMgIWltcG9ydGFudDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5kZXZpY2Uge1xyXG4gIG1hcmdpbjogMCAwIDJlbSAwO1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHdpZHRoOiAxNWVtO1xyXG59XHJcblxyXG4uZGV2aWNlIGxpIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcclxuICBtYXJnaW46IC41ZW07XHJcbiAgcGFkZGluZzogLjNlbSAwO1xyXG4gIGhlaWdodDogMS42ZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4uZGV2aWNlIC50ZXh0IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAtM3B4O1xyXG59XHJcblxyXG4vL1xyXG4vLy5kZXZpY2UgLmJhZGdlIHtcclxuLy8gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuLy8gIGZvbnQtc2l6ZTogc21hbGw7XHJcbi8vICBjb2xvcjogd2hpdGU7XHJcbi8vICBwYWRkaW5nOiAwLjhlbSAwLjdlbSAwIDAuN2VtO1xyXG4vLyAgYmFja2dyb3VuZC1jb2xvcjogIzYwN0Q4QjtcclxuLy8gIGxpbmUtaGVpZ2h0OiAxZW07XHJcbi8vICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbi8vICBsZWZ0OiAtMXB4O1xyXG4vLyAgdG9wOiAtNHB4O1xyXG4vLyAgaGVpZ2h0OiAxLjhlbTtcclxuLy8gIG1hcmdpbi1yaWdodDogLjhlbTtcclxuLy8gIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xyXG4vL31cclxuXHJcblxyXG5cclxuLy8uaW50ZXJuYWxSb3cge1xyXG4vLyAgZGlzcGxheTogZmxleDtcclxuLy8gIHdpZHRoOiA0MHZ3O1xyXG4vLyAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lOyAvKiBpT1MgU2FmYXJpICovXHJcbi8vICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAvKiBTYWZhcmkgKi9cclxuLy8gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTsgLyogS29ucXVlcm9yIEhUTUwgKi9cclxuLy8gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEZpcmVmb3ggKi9cclxuLy8gIC1tcy11c2VyLXNlbGVjdDogbm9uZTsgLyogSW50ZXJuZXQgRXhwbG9yZXIvRWRnZSAqL1xyXG4vLyAgdXNlci1zZWxlY3Q6IG5vbmU7IC8qIE5vbi1wcmVmaXhlZCB2ZXJzaW9uLCBjdXJyZW50bHlcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VwcG9ydGVkIGJ5IENocm9tZSBhbmQgT3BlcmEgKi9cclxuLy8gIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xyXG4vLyAgLy9iYWNrZ3JvdW5kLWNvbG9yOiBEREQ7XHJcbi8vICBtYXJnaW4tYm90dG9tOiAxdmg7XHJcbi8vICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbi8vICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXknLCBzZXJpZjtcclxuLy9cclxuLy99XHJcbi8vLm5ld0JhZGdlIHtcclxuLy8gIGJhY2tncm91bmQtY29sb3I6ICNCQkQ4REM7XHJcbi8vICBtaW4td2lkdGg6IDM1cHg7XHJcbi8vICBwYWRkaW5nLXRvcDogMTBweDtcclxuLy8gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XHJcbi8vICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbi8vICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcclxuLy99XHJcblxyXG4vLy5pbnRlcm5hbFJvdyBkaXYuc2VsZWN0ZWQ6aG92ZXIge1xyXG4vLyAgYmFja2dyb3VuZC1jb2xvcjogI0JCRDhEQyAhaW1wb3J0YW50O1xyXG4vLyAgY29sb3I6IHdoaXRlO1xyXG4vL31cclxuLy9cclxuLy8uaW50ZXJuYWxSb3cgZGl2OmhvdmVyIHtcclxuLy8gIGNvbG9yOiAjNjA3RDhCO1xyXG4vLyAgYmFja2dyb3VuZC1jb2xvcjogI0RERDtcclxuLy8gIGxlZnQ6IC4xZW07XHJcbi8vfVxyXG5cclxuLy8uaW50ZXJuYWxSb3c6aG92ZXIge1xyXG4vLyAgY3Vyc29yOiBwb2ludGVyO1xyXG4vL31cclxuLy8uaW50ZXJuYWxSb3c6YWN0aXZlICB7XHJcbi8vICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xyXG4vL31cclxuLy8uaW50ZXJuYWxSb3c6YWN0aXZlIHtcclxuLy8gICAgYmFja2dyb3VuZDogI2U1ZTVlNTtcclxuLy8gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuLy8gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4ICNjMWMxYzE7XHJcbi8vICAgIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMCAwIDVweCAjYzFjMWMxO1xyXG4vLyAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4ICNjMWMxYzE7XHJcbi8vICAgIG91dGxpbmU6IG5vbmU7XHJcbi8vfVxyXG4vL1xyXG4vLy5kZXZpY2VOYW1lIHtcclxuLy8gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4vLyAgcGFkZGluZy1yaWdodDogMjVweDtcclxuLy8gIHBhZGRpbmctbGVmdDogMTBweDtcclxuLy9cclxuLy99XHJcbi8vLmludGVybmFsUm93OmZpcnN0LWNoaWxkIHtcclxuLy8gIG1hcmdpbi1yaWdodDogYXV0bztcclxuLy99XHJcbiJdfQ== */"

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
        this._electronService.ipcRenderer.on('lightChannel', function (event, arg) {
            console.log(arg); // prints "ping"
        });
        //   add(name: string): void {
        //     name = name.trim();
        //   if (!name) { return; }
        //   this.lightService.addLight({ name } as Light)
        //     .subscribe(light => {
        //       this.lights.push(light);
        //     });
        // }
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
        if (protection.state === '1') {
            console.log('Requesting protection off');
            protection.state = '0';
            this._electronService.ipcRenderer.send('deviceChannel', { protectionState: 0 });
        }
        else {
            console.log('Requesting protection on');
            protection.state = '1';
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
    function Protection(id, name, state, voltage, current, temperature) {
        this.id = id;
        this.name = name;
        this.state = state;
        this.voltage = voltage;
        this.current = current;
        this.temperature = temperature;
    }
    return Protection;
}());



/***/ }),

/***/ "./src/app/serial.service.ts":
/*!***********************************!*\
  !*** ./src/app/serial.service.ts ***!
  \***********************************/
/*! exports provided: SerialService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SerialService", function() { return SerialService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_electron__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-electron */ "./node_modules/ngx-electron/fesm5/ngx-electron.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var SerialService = /** @class */ (function () {
    function SerialService(_electronService, snackBar) {
        this._electronService = _electronService;
        this.snackBar = snackBar;
    }
    SerialService.prototype.disconnectListener = function () {
        var _this = this;
        // Register a listener
        this._electronService.ipcRenderer.on('serialHeatBeat', function (event, message) {
            switch (message.eventType) {
                case 'disconnect':
                    console.error('Serial port was disconnected');
                    _this.snackBar.open('Device Disconnected!', 'Device Connection', {
                        duration: 5000,
                    });
                    break;
                case 'reconnect':
                    _this.snackBar.open('Device Reconnected!', 'Device Connection', {
                        duration: 5000,
                    });
                    break;
                default:
                    console.log('Could not decode serialHeatBeat message');
            }
        });
    };
    SerialService.prototype.voltageListener = function () {
        // Register a listener
        this._electronService.ipcRenderer.on('serialVoltageOut', function (event, message) {
            switch (message.eventType) {
                case 'voltage':
                    console.log('Serial voltage message received');
                    break;
                case 'current':
                    console.log('Serial voltage message received');
                    break;
                default:
                    console.log('Could not decode serial voltage message');
            }
        });
    };
    SerialService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_electron__WEBPACK_IMPORTED_MODULE_2__["ElectronService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], SerialService);
    return SerialService;
}());



/***/ }),

/***/ "./src/app/settings/settings.component.html":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav mat-tab-nav-bar\n     mat-align-tabs=\"center\"\n     animationDuration=\"500ms\">\n  <div class=\"container\">\n      <a mat-tab-link\n         *ngFor=\"let link of navLinks\"\n         [routerLink]=\"['/'+link.path]\"\n         routerLinkActive #rla=\"routerLinkActive\"\n         [active]=\"rla.isActive\">\n        {{link.label}}\n      </a>\n    </div>\n</nav>\n\n<router-outlet></router-outlet>\n"

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

module.exports = "<h1>Maps</h1>\n\n<!--<agm-map [latitude]=\"lat\" [longitude]=\"lng\">-->\n  <!--<agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>-->\n<!--</agm-map>-->\n\n\n<iframe width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\"\n        src=\"https://www.google.com/maps/embed/v1/place?q=place_id:ChIJPaImb4O8cEgRcp1Xvy-pcR0&key=AIzaSyBTXSZtGchCgoBI3mVHE8l1hlHBb2LWqzQ\" allowfullscreen></iframe>\n"

/***/ }),

/***/ "./src/app/tracking/tracking.component.scss":
/*!**************************************************!*\
  !*** ./src/app/tracking/tracking.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\n  height: 400px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhY2tpbmcvQzpcXFVzZXJzXFxsb3pob1xcRG9jdW1lbnRzXFxGWVBcXGJvYXRJbnRlcmZhY2VBbmd1bGFyXFxib2F0SW50ZXJmYWNlL3NyY1xcYXBwXFx0cmFja2luZ1xcdHJhY2tpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90cmFja2luZy90cmFja2luZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFnbS1tYXAge1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbn1cclxuIl19 */"

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

module.exports = "<p>\n  wifi works!\n</p>\n"

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

module.exports = __webpack_require__(/*! C:\Users\lozho\Documents\FYP\boatInterfaceAngular\boatInterface\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map