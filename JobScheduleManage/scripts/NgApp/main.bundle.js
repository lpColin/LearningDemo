webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.rp.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppRpComponent = (function () {
    function AppRpComponent() {
        this.title = 'app';
    }
    AppRpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/views/app.rp.component.html")
        })
    ], AppRpComponent);
    return AppRpComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.rp.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_rp_component__ = __webpack_require__("../../../../../src/app/app.rp.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_app_rp_common_module__ = __webpack_require__("../../../../../src/app/components/app.rp.common.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_rp_routing__ = __webpack_require__("../../../../../src/app/app.rp.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_app_rp_prime_dragula_component__ = __webpack_require__("../../../../../src/app/components/app.rp.prime.dragula.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_rp_component__["a" /* AppRpComponent */],
                __WEBPACK_IMPORTED_MODULE_6__app_rp_routing__["b" /* RoutedComponents */],
                __WEBPACK_IMPORTED_MODULE_7__components_app_rp_prime_dragula_component__["a" /* PrimeDragulaDirective */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_6__app_rp_routing__["a" /* AppRpRouting */],
                __WEBPACK_IMPORTED_MODULE_5__components_app_rp_common_module__["a" /* AppCommonModule */],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["PanelModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["PanelMenuModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["GrowlModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["SharedModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["ButtonModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["InputTextModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["InputTextareaModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["DropdownModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["FileUploadModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["ConfirmDialogModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["BlockUIModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["LightboxModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["CarouselModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["OverlayPanelModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["ContextMenuModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["TabMenuModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["MenuModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["MenubarModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["DataGridModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["DragDropModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["ColorPickerModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["CheckboxModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["ChartModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["ListboxModule"],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["b" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["d" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_8_ng2_dragula__["DragulaModule"]
            ],
            exports: [],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_rp_component__["a" /* AppRpComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.rp.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRpRouting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RoutedComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_app_rp_workspace_component__ = __webpack_require__("../../../../../src/app/components/app.rp.workspace.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_app_rp_empview_component__ = __webpack_require__("../../../../../src/app/components/app.rp.empview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_app_rp_calview_component__ = __webpack_require__("../../../../../src/app/components/app.rp.calview.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'App/rp/workspace', },
    { path: 'App/rp/workspace', component: __WEBPACK_IMPORTED_MODULE_2__components_app_rp_workspace_component__["a" /* AppRpWorkspaceComponent */] },
    { path: 'App/rp/empview', component: __WEBPACK_IMPORTED_MODULE_3__components_app_rp_empview_component__["a" /* AppRpEmpViewComponent */] },
    { path: 'App/rp/calview', component: __WEBPACK_IMPORTED_MODULE_4__components_app_rp_calview_component__["a" /* AppRpCalViewComponent */] }
];
var AppRpRouting = (function () {
    function AppRpRouting() {
    }
    AppRpRouting = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forRoot(routes, { preloadingStrategy: __WEBPACK_IMPORTED_MODULE_1__angular_router__["PreloadAllModules"] })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]],
            providers: []
        })
    ], AppRpRouting);
    return AppRpRouting;
}());

var RoutedComponents = [__WEBPACK_IMPORTED_MODULE_2__components_app_rp_workspace_component__["a" /* AppRpWorkspaceComponent */], __WEBPACK_IMPORTED_MODULE_3__components_app_rp_empview_component__["a" /* AppRpEmpViewComponent */], __WEBPACK_IMPORTED_MODULE_4__components_app_rp_calview_component__["a" /* AppRpCalViewComponent */]];


/***/ }),

/***/ "../../../../../src/app/components/app.rp.calview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRpCalViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_app_rp_model__ = __webpack_require__("../../../../../src/app/models/app.rp.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_dragula__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppRpCalViewComponent = (function () {
    function AppRpCalViewComponent(dragulaService, el) {
        this.dragulaService = dragulaService;
        this.el = el;
        this.employees = [];
        this.gradesList = [];
        this.employeeGroupList = [];
        this.potentialGradeList = [];
        this.performanceGradeList = [];
        this.dialogDisplay = false;
        this.calViewData = [];
        this.calViewShowingData = [];
        this.selectedEmp = new __WEBPACK_IMPORTED_MODULE_1__models_app_rp_model__["c" /* EmployeeInfoModal */]();
        this.yPergrade = [];
        this.viewEmpDetail = new __WEBPACK_IMPORTED_MODULE_1__models_app_rp_model__["c" /* EmployeeInfoModal */]();
        // dragulaService.setOptions('first-bag', {
        //  	revertOnSpill: true
        // });
    }
    AppRpCalViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        for (var i = 1; i <= 11; i++) {
            var employee = new __WEBPACK_IMPORTED_MODULE_1__models_app_rp_model__["c" /* EmployeeInfoModal */]();
            employee.Id = "S110100" + i;
            employee.Name = "lp" + i;
            // employee.value = "lp" + i;
            employee.label = "lp" + i;
            employee.ImageSource = '../assets/img/1000' + i + '.jpg';
            if (i < 4) {
                employee.Grade = "MX 8";
            }
            else if (i >= 4 && i < 8) {
                employee.Grade = "MX 9";
            }
            else {
                employee.Grade = "MX 10";
            }
            employee.EmployeeGroup = "ES1";
            if (i < 3) {
                employee.PotentialGrade = "PR 10";
                employee.PerformanceGrade = 1;
            }
            else if (i >= 3 && i < 7) {
                employee.PotentialGrade = "PR 11";
                employee.PerformanceGrade = 2;
            }
            else {
                employee.PotentialGrade = "PR 12";
                employee.PerformanceGrade = 3;
            }
            employee.PotentialRankedOrder = i + 1;
            employee.PerformanceRankedOrder = i + 1;
            employee.Ministry = "Division A";
            employee.Department = "Department A";
            employee.Age = "20";
            employee.JobGrade = "JR01";
            employee.DivisionalStatus = "Div 1";
            employee.DateJoined = "01/04/2007";
            employee.NSDuration = "2 yrs 6 mths";
            employee.YIG = 5;
            employee.YIS = 8;
            employee.NextSubstantiveGrade = "MX12";
            this.employees.push(employee);
        }
        this.gradesList.push({ label: 'All', value: null });
        this.gradesList.push({ label: 'MX 8', value: 'MX 8' });
        this.gradesList.push({ label: 'MX 9', value: 'MX 9' });
        this.gradesList.push({ label: 'MX 10', value: 'MX 10' });
        this.employeeGroupList.push({ label: 'All', value: null });
        this.employeeGroupList.push({ label: 'ES1', value: 'ES1' });
        this.employeeGroupList.push({ label: 'ES2', value: 'ES2' });
        this.potentialGradeList.push({ label: 'All', value: null });
        this.potentialGradeList.push({ label: 'PR 10', value: 'PR 10' });
        this.potentialGradeList.push({ label: 'PR 11', value: 'PR 11' });
        this.potentialGradeList.push({ label: 'PR 12', value: 'PR 12' });
        this.potentialGradeList.push({ label: 'PR 13', value: 'PR 13' });
        this.performanceGradeList.push({ label: 'All', value: null });
        this.performanceGradeList.push({ label: '1', value: '1' });
        this.performanceGradeList.push({ label: '2', value: '2' });
        this.performanceGradeList.push({ label: '3', value: '3' });
        this.performanceGradeList.push({ label: '4', value: '4' });
        this.performanceGradeList.push({ label: '5', value: '5' });
        this.items = [
            { label: 'View Profile', icon: 'fa-search', command: function (event) { return _this.detailOnClik(); } },
        ];
        //init cal view data list
        this.yPergrade = this.performanceGradeList.filter(function (o) { return o.label != 'All'; });
        this.yPergrade.unshift({ label: '', value: null });
        this.yPergrade[this.yPergrade.length - 1].label = this.yPergrade[this.yPergrade.length - 1].label + ' (Performance Grade)';
        var _loop_1 = function (perfGrade) {
            var _loop_2 = function (poteGrade) {
                var calViewDataModel = new __WEBPACK_IMPORTED_MODULE_1__models_app_rp_model__["a" /* CalViewModel */]();
                calViewDataModel.EmployeeInfoModals = this_1.employees.filter(function (o) { return o.PotentialGrade == poteGrade.value && o.PerformanceGrade == perfGrade.value; });
                var percentage = (calViewDataModel.EmployeeInfoModals.length / this_1.employees.length).toFixed(2);
                calViewDataModel.TilePercentage = percentage;
                calViewDataModel.CalYPosition = poteGrade.label;
                calViewDataModel.CalXPosition = perfGrade.label;
                this_1.calViewData.push(calViewDataModel);
            };
            for (var _i = 0, _a = this_1.potentialGradeList; _i < _a.length; _i++) {
                var poteGrade = _a[_i];
                _loop_2(poteGrade);
            }
        };
        var this_1 = this;
        for (var _i = 0, _a = this.performanceGradeList.filter(function (o) { return o.label != 'All'; }); _i < _a.length; _i++) {
            var perfGrade = _a[_i];
            _loop_1(perfGrade);
        }
        var flag = 0;
        var _loop_3 = function (poteGrade) {
            if (flag == 0) {
                this_2.calViewShowingData[flag] = {
                    listData: this_2.calViewData.filter(function (o) { return o.CalYPosition == poteGrade.label; }),
                    proGrade: poteGrade.label, flag: 0
                };
            }
            else {
                this_2.calViewShowingData[flag] = {
                    listData: this_2.calViewData.filter(function (o) { return o.CalYPosition == poteGrade.label; }),
                    proGrade: poteGrade.label, flag: 1
                };
            }
            flag++;
        };
        var this_2 = this;
        for (var _b = 0, _c = this.potentialGradeList.filter(function (o) { return o.label != 'All'; }); _b < _c.length; _b++) {
            var poteGrade = _c[_b];
            _loop_3(poteGrade);
        }
    };
    AppRpCalViewComponent.prototype.detailOnClik = function () {
        this.dialogDisplay = true;
    };
    AppRpCalViewComponent.prototype.showSelectList = function (event, selectListemp, contextMenu) {
        if (selectListemp != null && selectListemp.Name != "Selected employees") {
            this.viewEmpDetail = selectListemp;
            contextMenu.show(event);
        }
    };
    AppRpCalViewComponent.prototype.removeColor = function () {
        this.selectedEmp = new __WEBPACK_IMPORTED_MODULE_1__models_app_rp_model__["c" /* EmployeeInfoModal */]();
    };
    AppRpCalViewComponent.prototype.dragStart = function (event, emp) {
        this.draggedEmp = emp;
    };
    AppRpCalViewComponent.prototype.drop = function (event) {
        debugger;
        if (this.draggedEmp) {
            this.draggedEmp = null;
        }
    };
    AppRpCalViewComponent.prototype.dragEnd = function (event, value) {
        debugger;
        this.draggedEmp = null;
    };
    AppRpCalViewComponent.prototype.fileChange = function (File) {
        this.dowloadFile = File.target.files;
        if (this.dowloadFile.length > 0) {
            this.fileUrl = URL.createObjectURL(this.dowloadFile[0]);
        }
    };
    AppRpCalViewComponent.prototype.downloadSelectedItem = function () {
        // if(this.dowloadFile.length > 0  ){
        // 	if(this.dowloadFile[0].type != "application/x-zip-compressed"){
        // 		window.open(this.fileUrl，'_blank');
        // 	}else{
        // 		window.location.href = this.fileUrl;
        // 	}
        // }
    };
    AppRpCalViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            template: __webpack_require__("../../../../../src/app/views/app.rp.calview.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2_ng2_dragula__["DragulaService"]]
            // styleUrls: ['../my_assets/css/app.rp.component.css']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ng2_dragula__["DragulaService"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], AppRpCalViewComponent);
    return AppRpCalViewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/app.rp.common.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppCommonModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_rp_header_component__ = __webpack_require__("../../../../../src/app/components/app.rp.header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_primeng_primeng__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// imports: imports the module's exports. which is usually declarables and providers
// in our case the spinner has no providers.
//
// exports: exports modules AND components/directives/pipes that other modules may want to use
var AppCommonModule = (function () {
    function AppCommonModule() {
    }
    AppCommonModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forRoot([]), __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["TabMenuModule"], __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["ButtonModule"]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__app_rp_header_component__["a" /* AppRpHeaderComponent */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__app_rp_header_component__["a" /* AppRpHeaderComponent */]]
        }),
        __metadata("design:paramtypes", [])
    ], AppCommonModule);
    return AppCommonModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/app.rp.empview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRpEmpViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_app_rp_model__ = __webpack_require__("../../../../../src/app/models/app.rp.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppRpEmpViewComponent = (function () {
    function AppRpEmpViewComponent() {
        this.employees = [];
        this.searchEmployees = [];
        this.gradesList = [];
        this.employeeGroupList = [];
        this.potentialGradeList = [];
        this.performanceGradeList = [];
        this.selectedEmployee = new __WEBPACK_IMPORTED_MODULE_1__models_app_rp_model__["c" /* EmployeeInfoModal */]();
        this.dialogDisplay = false;
    }
    AppRpEmpViewComponent.prototype.ngOnInit = function () {
        for (var i = 1; i <= 11; i++) {
            var employee = new __WEBPACK_IMPORTED_MODULE_1__models_app_rp_model__["c" /* EmployeeInfoModal */]();
            employee.Id = "S110100" + i;
            employee.Name = "lp" + i;
            // employee.value = "lp" + i;
            employee.label = "lp" + i;
            employee.ImageSource = '../assets/img/1000' + i + '.jpg';
            if (i < 4) {
                employee.Grade = "MX 8";
            }
            else if (i >= 4 && i < 8) {
                employee.Grade = "MX 9";
            }
            else {
                employee.Grade = "MX 10";
            }
            employee.EmployeeGroup = "ES1";
            if (i < 3) {
                employee.PotentialGrade = "PR 10";
                employee.PerformanceGrade = 1;
            }
            else if (i >= 3 && i < 7) {
                employee.PotentialGrade = "PR 11";
                employee.PerformanceGrade = 2;
            }
            else {
                employee.PotentialGrade = "PR 12";
                employee.PerformanceGrade = 3;
            }
            employee.PotentialRankedOrder = i + 1;
            // employee.PerformanceGrade = i + 1;
            employee.PerformanceRankedOrder = i + 1;
            employee.Ministry = "Division A";
            employee.Department = "Department A";
            employee.Age = "20";
            employee.JobGrade = "JR01";
            employee.DivisionalStatus = "Div 1";
            employee.DateJoined = "01/04/2007";
            employee.NSDuration = "2 yrs 6 mths";
            employee.YIG = 5;
            employee.YIS = 8;
            employee.NextSubstantiveGrade = "MX12";
            this.employees.push(employee);
        }
        this.gradesList.push({ label: 'All', value: null });
        this.gradesList.push({ label: 'MX 8', value: 'MX 8' });
        this.gradesList.push({ label: 'MX 9', value: 'MX 9' });
        this.gradesList.push({ label: 'MX 10', value: 'MX 10' });
        this.employeeGroupList.push({ label: 'All', value: null });
        this.employeeGroupList.push({ label: 'ES1', value: 'ES1' });
        this.employeeGroupList.push({ label: 'ES2', value: 'ES2' });
        this.potentialGradeList.push({ label: 'All', value: null });
        this.potentialGradeList.push({ label: 'PR 10', value: 'PR 10' });
        this.potentialGradeList.push({ label: 'PR 11', value: 'PR 11' });
        this.potentialGradeList.push({ label: 'PR 12', value: 'PR 12' });
        this.performanceGradeList.push({ label: 'All', value: null });
        this.performanceGradeList.push({ label: '1', value: '1' });
        this.performanceGradeList.push({ label: '2', value: '2' });
        this.performanceGradeList.push({ label: '3', value: '3' });
        //init employee for glob search
        this.searchEmployees = this.employees;
    };
    AppRpEmpViewComponent.prototype.searchEmp = function () {
        var _this = this;
        debugger;
        if (this.seatchText != null && this.seatchText != "") {
            this.employees = this.searchEmployees.filter(function (o) { return o.Name.match(_this.seatchText); });
        }
        else {
            this.employees = this.searchEmployees;
        }
    };
    AppRpEmpViewComponent.prototype.showEmpDetails = function (emp) {
        this.dialogDisplay = true;
        this.selectedEmployee = emp;
    };
    AppRpEmpViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            template: __webpack_require__("../../../../../src/app/views/app.rp.empview.component.html"),
            providers: []
            // styleUrls: ['../my_assets/css/app.rp.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], AppRpEmpViewComponent);
    return AppRpEmpViewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/app.rp.header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRpHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppRpHeaderComponent = (function () {
    function AppRpHeaderComponent() {
        // code...
    }
    AppRpHeaderComponent.prototype.ngOnInit = function () {
        // this.items = [
        //           {label: 'Stats', icon: 'fa-bar-chart'},
        //           {label: 'Calendar', icon: 'fa-calendar'},
        //           {label: 'Documentation', icon: 'fa-book'},
        //           {label: 'Support', icon: 'fa-support'},
        //           {label: 'Social', icon: 'fa-twitter'}
    };
    AppRpHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'nav-header',
            template: __webpack_require__("../../../../../src/app/views/app.rp.header.component.html"),
            providers: [],
            styleUrls: []
        }),
        __metadata("design:paramtypes", [])
    ], AppRpHeaderComponent);
    return AppRpHeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/app.rp.prime.dragula.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrimeDragulaDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_dragula__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PrimeDragulaDirective = (function () {
    function PrimeDragulaDirective(el, dragulaService) {
        this.el = el;
        this.dragulaService = dragulaService;
    }
    PrimeDragulaDirective.prototype.ngOnInit = function () {
        this.options = Object.assign({}, this.dragulaOptions);
        this.container = this.el.nativeElement;
        if (!this.options.initAfterView) {
            this.initialize();
        }
    };
    PrimeDragulaDirective.prototype.ngAfterViewInit = function () {
        if (this.options.initAfterView) {
            this.initialize();
        }
    };
    //since we dont have access to the ngprime datatable body or table itself we need to bing laters in the angular event cycle
    //Once this fires we have a tbody tag to attach to and create the drag drop area from.
    //because we need to setup dragula later we needed to create our own version of the directive so we have access to the private property container.
    //If ngdragula ever changes that to protected we can just extend that directive outright and override the container.
    PrimeDragulaDirective.prototype.initialize = function () {
        var _this = this;
        if (this.options.childContainerSelector) {
            this.container = this.el.nativeElement.querySelector(this.options.childContainerSelector);
            this.options.mirrorContainer = this.container;
        }
        var bag = this.dragulaService.find(this.primeDragula);
        var checkModel = function () {
            if (_this.dragulaModel) {
                if (_this.drake.models) {
                    _this.drake.models.push(_this.dragulaModel);
                }
                else {
                    _this.drake.models = [_this.dragulaModel];
                }
            }
        };
        if (bag) {
            this.drake = bag.drake;
            checkModel();
            this.drake.containers.push(this.container);
        }
        else {
            this.drake = Object(__WEBPACK_IMPORTED_MODULE_1_ng2_dragula__["dragula"])([this.container], this.options);
            checkModel();
            this.dragulaService.add(this.primeDragula, this.drake);
        }
    };
    PrimeDragulaDirective.prototype.ngOnChanges = function (changes) {
        if (changes && changes.dragulaModel) {
            if (this.drake) {
                if (this.drake.models) {
                    var modelIndex = this.drake.models.indexOf(changes.dragulaModel.previousValue);
                    this.drake.models.splice(modelIndex, 1, changes.dragulaModel.currentValue);
                }
                else {
                    this.drake.models = [changes.dragulaModel.currentValue];
                }
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], PrimeDragulaDirective.prototype, "primeDragula", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], PrimeDragulaDirective.prototype, "dragulaModel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], PrimeDragulaDirective.prototype, "dragulaOptions", void 0);
    PrimeDragulaDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: '[primeDragula]' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1_ng2_dragula__["DragulaService"]])
    ], PrimeDragulaDirective);
    return PrimeDragulaDirective;
}());



/***/ }),

/***/ "../../../../../src/app/components/app.rp.workspace.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRpWorkspaceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_app_rp_model__ = __webpack_require__("../../../../../src/app/models/app.rp.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_dragula__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppRpWorkspaceComponent = (function () {
    function AppRpWorkspaceComponent(dialog, dragulaService, el) {
        this.dialog = dialog;
        this.dragulaService = dragulaService;
        this.el = el;
        // @Input() public dragulaModel: any;
        // @Input() public dragulaOptions: any;
        this.employees = [];
        this.colorSettingList = [];
        this.gradesList = [];
        this.employeeGroupList = [];
        this.potentialGradeList = [];
        this.performanceGradeList = [];
        this.selectedEmployees = [];
        this.compareViewDisplay = false;
        this.settingColorDisplay = false;
        this.setColumnDisplay = false;
        this.setRankedListDataDisplay = false;
        this.potentialGradeChartDisplay = false;
        this.performanceGradeChartDisplay = false;
        this.selectListEmployees = [];
        this.percentageShowError = false;
        this.hiddenOrShowItem = false;
        this.columnShowOrHidden = new __WEBPACK_IMPORTED_MODULE_1__models_app_rp_model__["b" /* ColumnShowOrHidden */];
        console.log("Workspace loaded!");
    }
    AppRpWorkspaceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.options = {
            responsive: false,
            maintainAspectRatio: false
        };
        for (var i = 1; i <= 11; i++) {
            var employee = new __WEBPACK_IMPORTED_MODULE_1__models_app_rp_model__["c" /* EmployeeInfoModal */]();
            employee.Id = "S110100" + i;
            employee.Name = "lp" + i;
            // employee.value = "lp" + i;
            employee.label = "lp" + i;
            employee.ImageSource = '../assets/img/1000' + i + '.jpg';
            if (i < 4) {
                employee.Grade = "MX 8";
            }
            else if (i >= 4 && i < 8) {
                employee.Grade = "MX 9";
            }
            else {
                employee.Grade = "MX 10";
            }
            employee.EmployeeGroup = "ES1";
            if (i < 3) {
                employee.PotentialGrade = "PR 10";
                employee.PerformanceGrade = 1;
            }
            else if (i >= 3 && i < 7) {
                employee.PotentialGrade = "PR 11";
                employee.PerformanceGrade = 2;
            }
            else {
                employee.PotentialGrade = "PR 12";
                employee.PerformanceGrade = 3;
            }
            employee.PotentialRankedOrder = i + 1;
            // employee.PerformanceGrade = i + 1;
            employee.PerformanceRankedOrder = i + 1;
            employee.Ministry = "Division A";
            employee.Department = "Department A";
            employee.Age = "20";
            employee.JobGrade = "JR01";
            employee.DivisionalStatus = "Div 1";
            employee.DateJoined = "01/04/2007";
            employee.NSDuration = "2 yrs 6 mths";
            employee.YIG = 5;
            employee.YIS = 8;
            employee.NextSubstantiveGrade = "MX12";
            this.employees.push(employee);
        }
        this.gradesList.push({ label: 'All', value: null });
        this.gradesList.push({ label: 'MX 8', value: 'MX 8' });
        this.gradesList.push({ label: 'MX 9', value: 'MX 9' });
        this.gradesList.push({ label: 'MX 10', value: 'MX 10' });
        this.employeeGroupList.push({ label: 'All', value: null });
        this.employeeGroupList.push({ label: 'ES1', value: 'ES1' });
        this.employeeGroupList.push({ label: 'ES2', value: 'ES2' });
        this.potentialGradeList.push({ label: 'All', value: null });
        this.potentialGradeList.push({ label: 'PR 10', value: 'PR 10' });
        this.potentialGradeList.push({ label: 'PR 11', value: 'PR 11' });
        this.potentialGradeList.push({ label: 'PR 12', value: 'PR 12' });
        this.performanceGradeList.push({ label: 'All', value: null });
        this.performanceGradeList.push({ label: '1', value: '1' });
        this.performanceGradeList.push({ label: '2', value: '2' });
        this.performanceGradeList.push({ label: '3', value: '3' });
        //init color setting
        this.colorSettingList.push({ Percentage: 10, ColorStr: '#b52828' });
        this.colorSettingList.push({ Percentage: 20, ColorStr: '#59610e' });
        this.colorSettingList.push({ Percentage: 20, ColorStr: '#2aded2' });
        this.colorSettingList.push({ Percentage: 40, ColorStr: '#de2aae' });
        this.colorSettingList.push({ Percentage: 10, ColorStr: '#de512a' });
        this.SetColorChange();
        this.items = [
            { label: 'Compare view', icon: 'fa-search', command: function (event) { return _this.compareOnClik(1); } },
            { label: 'Delete', icon: 'fa-close', command: function (event) { return _this.removeSelectEmp(_this.removedSelectedEmployee); } }
        ];
        this.settingList = [
            { label: 'Setup quota distribution', icon: '', command: function (event) { return _this.showColorPanel(); } },
            { label: 'Show/Hidden columns', icon: '', command: function (event) { return _this.ShowOrHiddenColumns(1); } },
            { label: 'Show/Hidden individual column', icon: '', command: function (event) { return _this.ShowOrHiddenColumns(2); } },
            { label: 'Update ranked list data', icon: '', command: function (event) { return _this.SetRankedDataList(); } }
        ];
        this.charMenuList = [
            { label: 'Potential Grade(Current)', icon: '', command: function (event) { return _this.openPotentialGradeChart(); } },
            { label: 'Performance Grade(Current)', icon: '', command: function (event) { return _this.openPerfGradeChart(); } }
        ];
    };
    AppRpWorkspaceComponent.prototype.compareOnClik = function (e) {
        if (this.selectedEmployees.length == 0) {
        }
        else {
            this.compareViewDisplay = true;
            this.employeeImages = [];
            for (var _i = 0, _a = this.selectedEmployees; _i < _a.length; _i++) {
                var emp = _a[_i];
                //this.employeeImages.push({ source: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg', thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg', title: emp.Name });
                //emp.ImageSource = 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg';
                //emp.Images = this.employeeImages;
            }
        }
    };
    AppRpWorkspaceComponent.prototype.autoRankingClik = function () {
        var bag = this.dragulaService.find(this.primeDragula);
        if (bag) {
            this.drake = bag.drake;
            var i = 1;
            for (var _i = 0, _a = this.drake.containers[0].rows; _i < _a.length; _i++) {
                var row = _a[_i];
                var empId = row.children[2].innerText;
                for (var _b = 0, _c = this.employees; _b < _c.length; _b++) {
                    var emp = _c[_b];
                    if (emp.Id == empId) {
                        emp.PerformanceRankedOrder = i++;
                    }
                }
            }
        }
    };
    AppRpWorkspaceComponent.prototype.onRowSelect = function (e) {
        // this.selectListEmployees = this.selectedEmployees;
        // if (this.selectListEmployees.length > 0 && this.selectListEmployees[0].Name != 'Selected employees') {
        //     let emp = new EmployeeInfoModal();
        //     emp.label = "Selected employees";
        //     emp.Name = "Selected employees";
        //     this.selectListEmployees.unshift(emp)
        // }
    };
    AppRpWorkspaceComponent.prototype.onUnselect = function (e) {
        // this.selectListEmployees = this.selectedEmployees;
        // if (this.selectListEmployees.length > 0 && this.selectListEmployees[0].Name != 'Selected employees') {
        //     let emp = new EmployeeInfoModal();
        //     emp.label = "Selected employees";
        //     emp.Name = "Selected employees";
        //     this.selectListEmployees.unshift(emp)
        // }
    };
    AppRpWorkspaceComponent.prototype.removeSelectEmp = function (e) {
        this.selectedEmployees = this.selectedEmployees.filter(function (o) { return o != e; });
    };
    AppRpWorkspaceComponent.prototype.showSelectList = function (event, selectListemp, contextMenu) {
        if (selectListemp != null && selectListemp.Name != "Selected employees") {
            this.removedSelectedEmployee = selectListemp;
            contextMenu.show(event);
        }
    };
    AppRpWorkspaceComponent.prototype.closeDialog = function () {
        this.compareViewDisplay = false;
        this.settingColorDisplay = false;
        this.setColumnDisplay = false;
        this.setRankedListDataDisplay = false;
        this.potentialGradeChartDisplay = false;
    };
    //for editor
    AppRpWorkspaceComponent.prototype.test = function () {
    };
    AppRpWorkspaceComponent.prototype.showColorPanel = function () {
        this.settingColorDisplay = true;
    };
    AppRpWorkspaceComponent.prototype.onSaveColorClick = function () {
        var sum = 0;
        for (var _i = 0, _a = this.colorSettingList; _i < _a.length; _i++) {
            var percentage = _a[_i];
            sum = parseInt(percentage.Percentage.toString()) + sum;
        }
        if (sum == 100) {
            this.SetColorChange();
            this.percentageShowError = false;
            this.settingColorDisplay = false;
        }
        else {
            this.percentageShowError = true;
        }
    };
    AppRpWorkspaceComponent.prototype.getColor = function (x, data) {
        x.parentNode.parentNode.style.background = data.ColorStr; // x.parentNode.parentNode accesses the <td> element of table :)
    };
    AppRpWorkspaceComponent.prototype.ShowOrHiddenColumns = function (e) {
        if (e == 1) {
            if (this.hiddenOrShowItem) {
                this.SetColumVisible(false);
                this.hiddenOrShowItem = false;
            }
            else {
                this.SetColumVisible(true);
                this.hiddenOrShowItem = true;
            }
        }
        else if (e == 2) {
            this.setColumnDisplay = true;
        }
    };
    AppRpWorkspaceComponent.prototype.onSaveColumnClick = function () {
        this.hiddenOrShowItem = true;
        this.setColumnDisplay = false;
    };
    AppRpWorkspaceComponent.prototype.SetRankedDataList = function () {
        this.setRankedListDataDisplay = true;
    };
    AppRpWorkspaceComponent.prototype.onSaveRankedDataClick = function () {
    };
    AppRpWorkspaceComponent.prototype.openPotentialGradeChart = function () {
        var _this = this;
        var xName = [];
        var yValue = [];
        for (var i = 1; i <= this.potentialGradeList.length - 1; i++) {
            xName.push(this.potentialGradeList[i].label);
            yValue.push(this.employees.filter(function (o) { return o.PotentialGrade == _this.potentialGradeList[i].label; }).length);
        }
        this.potentialGradeChartData = {
            labels: xName,
            datasets: [
                {
                    label: 'Potential Grade',
                    data: yValue,
                    fill: false,
                    borderColor: '#4bc0c0'
                },
                {
                    label: 'Second Dataset test',
                    data: [3, 2, 7],
                    fill: false,
                    borderColor: '#565656'
                }
            ]
        };
        // setTimeout(() => {
        //     this.potentialGradeChartDisplay = true;
        // }, 10);
        this.potentialGradeChartDisplay = true;
    };
    AppRpWorkspaceComponent.prototype.openPerfGradeChart = function () {
    };
    AppRpWorkspaceComponent.prototype.SetColorChange = function () {
        var count = 0;
        var empCount = 1;
        var endCountFlag = 0;
        for (var i = 0; i <= this.employees.length - 1; i++) {
            if (count == 4) {
                this.employees[i].ColorStr = this.colorSettingList[count].ColorStr;
            }
            else {
                var endCount = Math.round(this.employees.length * this.colorSettingList[count].Percentage / 100) + endCountFlag;
                if (empCount <= endCount) {
                    this.employees[i].ColorStr = this.colorSettingList[count].ColorStr;
                    if (empCount == endCount) {
                        count++;
                        endCountFlag = endCount;
                    }
                }
                empCount++;
            }
        }
    };
    AppRpWorkspaceComponent.prototype.SetColumVisible = function (value) {
        this.columnShowOrHidden.AgeOn = value;
        this.columnShowOrHidden.DateJoinedOn = value;
        this.columnShowOrHidden.DepartmentOn = value;
        this.columnShowOrHidden.DivisionalStatusOn = value;
        this.columnShowOrHidden.JobGradeOn = value;
        this.columnShowOrHidden.MinistryOn = value;
        this.columnShowOrHidden.NSDurationOn = value;
        this.columnShowOrHidden.NextSubstantiveGradeOn = value;
        this.columnShowOrHidden.RankedCEP2011 = value;
        this.columnShowOrHidden.RankedCEP2012 = value;
        this.columnShowOrHidden.RankedPerfGrade2011 = value;
        this.columnShowOrHidden.RankedPerfGrade2012 = value;
        this.columnShowOrHidden.YIGOn = value;
        this.columnShowOrHidden.YISOn = value;
    };
    AppRpWorkspaceComponent.prototype.onDialogShow = function () {
        var _this = this;
        debugger;
        setTimeout(function () {
            // this.el.nativeElement.children[9].firstElementChild.style.left = '40%';
            // this.el.nativeElement.children[9].firstElementChild.style.top = '50%';
            _this.el.nativeElement.children[9].firstElementChild.style.height = '60%';
        }, 10);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], AppRpWorkspaceComponent.prototype, "primeDragula", void 0);
    AppRpWorkspaceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            template: __webpack_require__("../../../../../src/app/views/app.rp.workspace.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_3_ng2_dragula__["DragulaService"]]
            // styleUrls: ['../my_assets/css/app.rp.component.css']
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: '[primeDragula]' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_dragula__["DragulaService"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], AppRpWorkspaceComponent);
    return AppRpWorkspaceComponent;
}());



/***/ }),

/***/ "../../../../../src/app/models/app.rp.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return EmployeeInfoModal; });
/* unused harmony export ColorSetting */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ColumnShowOrHidden; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalViewModel; });
var EmployeeInfoModal = (function () {
    function EmployeeInfoModal() {
    }
    return EmployeeInfoModal;
}());

var ColorSetting = (function () {
    function ColorSetting() {
    }
    return ColorSetting;
}());

var ColumnShowOrHidden = (function () {
    function ColumnShowOrHidden() {
    }
    return ColumnShowOrHidden;
}());

var CalViewModel = (function () {
    function CalViewModel() {
    }
    return CalViewModel;
}());



/***/ }),

/***/ "../../../../../src/app/views/app.rp.calview.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <input id=\"my-file-selector\" type=\"file\" (change)=\"fileChange($event)\" multiple=\"multiple\" maxFileSize=\"1000000\" />\r\n<button pButton type=\"button\" icon=\"fa fa-download\" (click)=\"downloadSelectedItem()\"> </button> -->\r\n  <p-panel>\r\n    <p-header [style]=\"\">\r\n      <div style=\"text-align: center;\">\r\n        <span>Calibration View</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n        <button pButton type=\"button\" label=\"Save\"></button>    \r\n      </div>\r\n    </p-header>\r\n    <div style=\"margin-right: auto; margin-left: auto;\" [ngStyle]=\"{'width': 180*yPergrade.length-70 + 'px'}\">\r\n  <div style=\"max-width: 100%;padding: 10px;text-align: center;\" class=\"ui-g\">\r\n    <div style=\"width: 1%\">\r\n      <div style=\"border-right: 1px solid black;width: 0px;padding-left: 0px;float: right;\" [ngStyle]=\"{'height': calViewShowingData.length*120+30 + 'px'}\">\r\n      </div>\r\n    </div>\r\n    <div style=\"width: 95%\">\r\n      <table>\r\n        <tr *ngFor=\"let lineDataList of calViewShowingData\">\r\n          <td style=\"height: 120px\">\r\n            <div *ngIf=\"lineDataList.flag == 0\" style=\"margin-top: -60px;\">\r\n              <span>\r\n                (Protential\r\n            </span>\r\n              <br/>\r\n              <span>\r\n                 Grade)\r\n            </span>\r\n            </div>\r\n            <div style=\"margin-top: 20px\">\r\n              {{lineDataList.proGrade}}\r\n            </div>\r\n            <!--  <div style=\"border-right: 1px solid black;width: 0px;height: 120px\"></div> -->\r\n          </td>\r\n          <td *ngFor=\"let lineData of lineDataList.listData\">\r\n            <!--{{lineData.TilePercentage}} {{lineData.CalYPosition}} {{lineData.CalXPosition}}-->\r\n            <p-panel [style]=\"{'height':'120px','width':'180px'}\">\r\n              <p-header>\r\n                <span style=\"padding-left: 0%\">{{lineData.TilePercentage}}</span>\r\n              </p-header>\r\n              <!--             <p-listbox [options]=\"lineData.EmployeeInfoModals\" [(ngModel)]=\"selectedEmp\" [style]=\"{'width':'170px','margin-left':'-8px','margin-top':'-8px','border':'none','text-align':'left'}\" [listStyle]=\"{'max-height':'74px'}\" *ngIf=\"lineData.EmployeeInfoModals.length\" dataKey=\"Id\" (onChange)=\"removeColor()\">\r\n              <ng-template let-emp pTemplate=\"item\">\r\n                <div class=\"ui-helper-clearfix\" on-contextmenu =\"showSelectList($event,emp,cm)\">\r\n                  <img src=\"{{emp.ImageSource}}\" width=\"20\">\r\n                  <span style=\"margin-left: 20px\">{{emp.Name}}</span>\r\n                </div>\r\n              </ng-template>\r\n            </p-listbox> -->\r\n              <div [dragula]=\"'bag'\" [dragulaModel]='lineData.EmployeeInfoModals' style=\"min-height: 50px;max-height: 70px; overflow:auto; text-align: left;\">\r\n                <div *ngFor='let emp of lineData.EmployeeInfoModals' on-contextmenu=\"showSelectList($event,emp,cm)\" style=\"padding: 2px\" class=\"listBoxBColor\">\r\n                  <img src=\"{{emp.ImageSource}}\" width=\"20\">\r\n                  <span style=\"margin-left: 20px\">{{emp.Name}}</span>\r\n                </div>\r\n              </div>\r\n            </p-panel>\r\n          </td>\r\n        </tr>\r\n        <tr style=\"text-align: center;\">\r\n          <td *ngFor=\"let line of yPergrade\">\r\n            {{line.label}}\r\n          </td>\r\n        </tr>\r\n      </table>\r\n      <div style=\"border-top: 1px solid black;height: 0px; margin-left: 5px\" [ngStyle]=\"{'width': 180*yPergrade.length-70 + 'px'}\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <p-contextMenu #cm [model]=\"items\"></p-contextMenu>\r\n    </div>\r\n  </p-panel>\r\n\r\n<div id=\"calViewDialog\">\r\n  <p-dialog [(visible)]=\"dialogDisplay\" modal=\"modal\" [style]=\"{'text-align':'center'}\">\r\n    <p-header>\r\n      <span>Employee Profile</span>\r\n    </p-header>\r\n    <div class=\"ui-g\">\r\n      <div class=\"ui-g-3\" style=\"text-align: center;\">\r\n        <img src=\"{{viewEmpDetail.ImageSource}}\" width=\"190\" height=\"180\" />\r\n      </div>\r\n      <div class=\"ui-g-9\">\r\n        <h1>{{viewEmpDetail.Name}}</h1>\r\n        <p>{{viewEmpDetail.Id}}</p>\r\n        <p>{{viewEmpDetail.Department}}</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g\" style=\"padding-left:2px;width: 100%\">\r\n      <div class=\"ui-g-12\" style=\"padding-left: 10%\">\r\n        <table border=\"1\" cellspacing=\"0\">\r\n          <tr>\r\n            <td>Age</td>\r\n            <td>{{viewEmpDetail.Age}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td>Year In Service</td>\r\n            <td>{{viewEmpDetail.YIS}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td>2013 SAR CEP</td>\r\n            <td></td>\r\n          </tr>\r\n          <tr>\r\n            <td>2013 SAR Perf Grade</td>\r\n            <td>{{viewEmpDetail.PerformanceGrade}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td>2013 Performance Ranked Order</td>\r\n            <td>{{viewEmpDetail.PerformanceRankedOrder}}</td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </p-dialog>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/app.rp.component.html":
/***/ (function(module, exports) {

module.exports = "<nav-header></nav-header>\n<!-- <left-aside ></left-aside>\n<right-aside></right-aside> -->\n<div class=\"content-wrapper\" style=\"min-height: 600px;\">\n    <!-- Content Header (Page header) -->\n    <!-- <title-bread-crumb [titleBreadCrumb]=\"titleBreadCrumb\"></title-bread-crumb> -->\n    <!-- Main content -->\n    <section class=\"content\">\n        <router-outlet></router-outlet>\n    </section>\n    <!-- /.content -->\n</div>\n<!-- <nav-footer></nav-footer> -->"

/***/ }),

/***/ "../../../../../src/app/views/app.rp.empview.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <p-dataGrid [value]=\"employees\" [paginator]=\"true\" [rows]=\"12\">\r\n    <p-header [style]=\"\">\r\n      <div style=\"text-align: left;\">\r\n        <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\r\n        <input #gb type=\"text\" size=\"30\" [(ngModel)]=\"seatchText\" (ngModelChange)=\"searchEmp()\" pInputText placeholder=\"Global Filter\">\r\n        <span style=\"padding-left: 20%\">List of employee</span>\r\n      </div>\r\n    </p-header>\r\n    <ng-template let-employee pTemplate=\"item\">\r\n      <div style=\"padding:3px\" class=\"ui-g-12 ui-md-3\">\r\n        <p-panel [header]=\"employee.Name\" [style]=\"{'text-align':'center'}\">\r\n          <img src=\"{{employee.ImageSource}}\" width=\"200\" height=\"150\">\r\n          <hr class=\"ui-widget-content\" style=\"border-top:0\">\r\n          <i class=\"fa fa-search\" (click)=\"showEmpDetails(employee)\" style=\"cursor:pointer\"></i>\r\n        </p-panel>\r\n      </div>\r\n    </ng-template>\r\n  </p-dataGrid>\r\n</div>\r\n\r\n<p-dialog [(visible)]=\"dialogDisplay\" modal=\"modal\">\r\n  <p-header>\r\n    <span style=\"padding-left: 45%\">{{selectedEmployee.Name}}</span>\r\n  </p-header>  \r\n  <div class=\"ui-g\">\r\n    <div class=\"ui-g-3\" style=\"text-align: center;\">\r\n      <img src=\"{{selectedEmployee.ImageSource}}\" width=\"190\" height=\"210\" />\r\n    </div>\r\n    <div class=\"ui-g-9\">\r\n      <p-panel [toggleable]=\"true\" [collapsed]=\"false\">\r\n        <p-header>\r\n          <span> Employee Details </span>\r\n        </p-header>\r\n        <div class=\"ui-g\">\r\n          <div class=\"ui-g-4\">\r\n            <label style=\"font-weight: bold;\">Division: </label>\r\n            <span>{{selectedEmployee.Ministry}}</span>\r\n          </div>\r\n          <div class=\"ui-g-4\">\r\n            <label style=\"font-weight: bold;\">Grade: </label>\r\n            <span>{{selectedEmployee.Grade}}</span>\r\n          </div>\r\n          <div class=\"ui-g-4\">\r\n            <label style=\"font-weight: bold;\">Years in Grade: </label>\r\n            <span>{{selectedEmployee.YIG}}</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g\">\r\n          <div class=\"ui-g-4\">\r\n            <label style=\"font-weight: bold;\">Department: </label>\r\n            <span>{{selectedEmployee.Department}}</span>\r\n          </div>\r\n          <div class=\"ui-g-4\">\r\n            <label style=\"font-weight: bold;\">Employee Group: </label>\r\n            <span>{{selectedEmployee.EmployeeGroup}}</span>\r\n          </div>\r\n          <div class=\"ui-g-4\">\r\n            <label style=\"font-weight: bold;\">Years in Service: </label>\r\n            <span>{{selectedEmployee.YIS}}</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g\">\r\n          <div class=\"ui-g-4\">\r\n            <label style=\"font-weight: bold;\">ID: </label>\r\n            <span>{{selectedEmployee.Id}}</span>\r\n          </div>\r\n          <div class=\"ui-g-4\">\r\n            <label style=\"font-weight: bold;\">Job Grade: </label>\r\n            <span>{{selectedEmployee.JobGrade}}</span>\r\n          </div>\r\n          <div class=\"ui-g-4\">\r\n            <label style=\"font-weight: bold;\">Name: </label>\r\n            <span>{{selectedEmployee.Name}}</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g\">\r\n          <div class=\"ui-g-4\">\r\n            <label style=\"font-weight: bold;\">Employee Subgroup: </label>\r\n            <span>{{selectedEmployee.NextSubstantiveGrade}}</span>\r\n          </div>\r\n          <div class=\"ui-g-4\">\r\n            <label style=\"font-weight: bold;\">Age: </label>\r\n            <span>{{selectedEmployee.Age}}</span>\r\n          </div>\r\n          <div class=\"ui-g-4\">\r\n            <label style=\"font-weight: bold;\">Date Joined: </label>\r\n            <span>{{selectedEmployee.DateJoined}}</span>\r\n          </div>\r\n        </div>\r\n      </p-panel>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g\" style=\"padding-left:2px;width: 100%\">\r\n    <div class=\"ui-g-12\">\r\n      <p-panel [toggleable]=\"true\" [collapsed]=\"true\">\r\n        <p-header>\r\n          <span> Potential Ranking Info </span>\r\n        </p-header>\r\n        <div class=\"ui-g\">\r\n          <div class=\"ui-g-4\">\r\n            <label  class=\"ui-g-8\" style=\"font-weight: bold;\">Potential Grade (Current): </label>\r\n            <span class=\"ui-g-4\">{{selectedEmployee.PotentialGrade}}</span>\r\n          </div>\r\n          <div class=\"ui-g-4\">\r\n            <label class=\"ui-g-8\" style=\"font-weight: bold;\">Potential Grade (Current - 2): </label>\r\n            <span class=\"ui-g-4\">{{selectedEmployee.PotentialGrade}}</span>\r\n          </div>\r\n          <div class=\"ui-g-4\">\r\n            <label class=\"ui-g-8\" style=\"font-weight: bold;\">Potential Grade (Current - 1): </label>\r\n            <span class=\"ui-g-4\">{{selectedEmployee.PotentialGrade}}</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g\">\r\n          <div class=\"ui-g-4\">\r\n            <label class=\"ui-g-8\" style=\"font-weight: bold;\">Potential Ranked Order (Current): </label>\r\n            <span class=\"ui-g-4\">{{selectedEmployee.PotentialRankedOrder}}</span>\r\n          </div>\r\n          <div class=\"ui-g-4\">\r\n          </div>\r\n          <div class=\"ui-g-4\">\r\n          </div>\r\n        </div>\r\n      </p-panel>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n      <p-panel [toggleable]=\"true\" [collapsed]=\"true\">\r\n        <p-header>\r\n          <span> Performance Ranking Info </span>\r\n        </p-header>\r\n        <div class=\"ui-g\">\r\n          <div class=\"ui-g-4\">\r\n            <label class=\"ui-g-8\" style=\"font-weight: bold;\">Performance Grade (Current): </label>\r\n            <span class=\"ui-g-4\">{{selectedEmployee.PerformanceGrade}}</span>\r\n          </div>\r\n          <div class=\"ui-g-4\">\r\n            <label class=\"ui-g-8\" style=\"font-weight: bold;\">Performance Grade (Current - 2): </label>\r\n            <span class=\"ui-g-4\">{{selectedEmployee.PerformanceGrade}}</span>\r\n          </div>\r\n          <div class=\"ui-g-4\">\r\n            <label class=\"ui-g-8\" style=\"font-weight: bold;\">Performance Grade (Current - 1): </label>\r\n            <span class=\"ui-g-4\">{{selectedEmployee.PerformanceGrade}}</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g\">\r\n          <div class=\"ui-g-4\">\r\n            <label class=\"ui-g-8\" style=\"font-weight: bold;\">Performance Ranked Order (Current): </label>\r\n            <span class=\"ui-g-4\">{{selectedEmployee.PerformanceRankedOrder}}</span>\r\n          </div>\r\n          <div class=\"ui-g-4\">\r\n          </div>\r\n          <div class=\"ui-g-4\">\r\n          </div>\r\n        </div>\r\n      </p-panel>\r\n    </div>\r\n  </div>\r\n</p-dialog>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/app.rp.header.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <p-tabMenu [model]=\"items\" [style]=\"{'background':'cornflowerblue','width':'80%'}\" ></p-tabMenu>\r\n<div style=\"float:right\">\r\n  <i class=\"fa fa-user\"></i>\r\n  <span style=\"color: white;\">LP</span>\r\n  <button pButton type=\"button\" label=\"Logout\"></button>\r\n</div> -->\r\n\r\n<div class=\"ui-tabmenu ui-widget ui-widget-content ui-corner-all\" ng-reflect-ng-class=\"ui-tabmenu ui-widget ui-widget\" style=\"background: cornflowerblue none repeat scroll 0% 0%;\" ng-reflect-ng-style=\"[object Object]\">\r\n  <ul class=\"ui-tabmenu-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all\" role=\"tablist\">\r\n    <li class=\"ui-tabmenuitem ui-state-default ui-corner-top ui-tabmenuitem-hasicon\" ng-reflect-ng-class=\"[object Object]\" ng-reflect-router-link-active-options=\"[object Object]\" ng-reflect-router-link-active=\"ui-state-active\">\r\n      <a class=\"ui-menuitem-link ui-corner-all\" routerLink=\"../App/rp/workspace\">\r\n\t\t<span class=\"ui-menuitem-icon fa fa-bar-chart\" ng-reflect-klass=\"ui-menuitem-icon fa\" ng-reflect-ng-class=\"fa-bar-chart\"></span>\r\n        <span class=\"ui-menuitem-text\">List View</span>\r\n      </a>\r\n    </li>\r\n    <li class=\"ui-tabmenuitem ui-state-default ui-corner-top ui-tabmenuitem-hasicon\" ng-reflect-ng-class=\"[object Object]\" ng-reflect-router-link-active-options=\"[object Object]\" ng-reflect-router-link-active=\"ui-state-active\">\r\n      <a class=\"ui-menuitem-link ui-corner-all\" routerLink=\"../App/rp/calview\">\r\n\t\t<span class=\"ui-menuitem-icon fa fa-calendar\" ng-reflect-klass=\"ui-menuitem-icon fa\" ng-reflect-ng-class=\"fa-calendar\"></span>\r\n        <span class=\"ui-menuitem-text\">Calibration View</span>\r\n      </a>\r\n    </li>\r\n    <li class=\"ui-tabmenuitem ui-state-default ui-corner-top ui-tabmenuitem-hasicon\" ng-reflect-ng-class=\"[object Object]\" ng-reflect-router-link-active-options=\"[object Object]\" ng-reflect-router-link-active=\"ui-state-active\">\r\n      <a class=\"ui-menuitem-link ui-corner-all\" routerLink=\"../App/rp/empview\">\r\n\t\t<span class=\"ui-menuitem-icon fa fa-book\" ng-reflect-klass=\"ui-menuitem-icon fa\" ng-reflect-ng-class=\"fa-book\"></span>\r\n        <span class=\"ui-menuitem-text\">Employee View</span>\r\n      </a>\r\n    </li>\r\n<!--     <li class=\"ui-tabmenuitem ui-state-default ui-corner-top ui-tabmenuitem-hasicon\" ng-reflect-ng-class=\"[object Object]\" ng-reflect-router-link-active-options=\"[object Object]\" ng-reflect-router-link-active=\"ui-state-active\">\r\n      <a class=\"ui-menuitem-link ui-corner-all\" href=\"#\">\r\n\t\t<span class=\"ui-menuitem-icon fa fa-support\" ng-reflect-klass=\"ui-menuitem-icon fa\" ng-reflect-ng-class=\"fa-support\"></span>\r\n        <span class=\"ui-menuitem-text\">Support</span>\r\n      </a>\r\n    </li>\r\n    <li class=\"ui-tabmenuitem ui-state-default ui-corner-top ui-tabmenuitem-hasicon\" ng-reflect-ng-class=\"[object Object]\" ng-reflect-router-link-active-options=\"[object Object]\" ng-reflect-router-link-active=\"ui-state-active\">\r\n      <a class=\"ui-menuitem-link ui-corner-all\" href=\"#\">\r\n\t\t<span class=\"ui-menuitem-icon fa fa-twitter\" ng-reflect-klass=\"ui-menuitem-icon fa\" ng-reflect-ng-class=\"fa-twitter\"></span>\r\n        <span class=\"ui-menuitem-text\">Social</span>\r\n      </a>\r\n    </li> -->\r\n    <li style=\"float:right;padding-top: 7px;background-color: cornflowerblue\">\r\n        <i class=\"fa fa-user\"></i>\r\n        <span style=\"color: white;\">LP</span>\r\n       <!--  <button pButton type=\"button\" label=\"Logout\" ></button> -->\r\n       <a href=\"#\" style=\"text-decoration: none;\">\r\n       \t\t<i class=\"fa fa-sign-out\"></i>\r\n        \t<span style=\"font-weight: bold;color: white\">Sign out</span>\r\n    \t</a>\r\n    </li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/app.rp.workspace.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-widget-header ui-g\" style=\"padding:4px 10px;border-bottom: 0 none\">\r\n  <div class=\"ui-g-12 ui-md-6\">\r\n    <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\r\n    <input #gb type=\"text\" size=\"30\" pInputText placeholder=\"Global Filter\">\r\n  </div>\r\n  <div class=\"ui-g-12 ui-md-6\" style=\"text-align: right;\">\r\n    <p-dropdown [options]=\"selectedEmployees\" [(ngModel)]=\"removedSelectedEmployee\" filter=\"true\" placeholder=\"Selected employees\">\r\n      <ng-template let-selectedEmployee pTemplate=\"item\">\r\n        <div class=\"ui-helper-clearfix\" style=\"position: relative;height: 25px;\" (mouseenter)=\"showSelectList($event,selectedEmployee,cm)\">\r\n          <img src=\"{{selectedEmployee.ImageSource}}\" style=\"width:24px;position:absolute;top:1px;left:5px\" />\r\n          <div style=\"font-size:14px;float:right;margin-top:4px\">{{selectedEmployee.Name}} - {{selectedEmployee.Id}}</div>\r\n        </div>\r\n      </ng-template>\r\n    </p-dropdown>\r\n    <button pButton type=\"button\" label=\"Compare\" (click)=\"compareOnClik()\"></button>\r\n    <button pButton type=\"button\" label=\"Charts\" icon=\"fa fa-list\" (click)=\"charMenu.toggle($event)\"></button>\r\n    <button pButton type=\"button\" label=\"Setting\" icon=\"fa fa-list\" (click)=\"setMenu.toggle($event)\"></button>\r\n    <button pButton type=\"button\" label=\"Auto Ranking\" (click)=\"autoRankingClik()\"></button>\r\n  </div>\r\n</div>\r\n<!-- <p-overlayPanel #op1>\r\n   <img src=\"assets/showcase/images/demo/galleria/galleria1.jpg\" alt=\"Galleria 1\" />\r\n</p-overlayPanel> -->\r\n<p-contextMenu #cm [model]=\"items\"></p-contextMenu>\r\n<!-- <p-contextMenu [model]=\"settings\" [target]=\"settingMenu\"></p-contextMenu> -->\r\n<p-menu #setMenu popup=\"true\" [model]=\"settingList\"></p-menu>\r\n<p-menu #charMenu popup=\"true\" [model]=\"charMenuList\"></p-menu>\r\n\r\n<p-dataTable [value]=\"employees\" [loading]=\"false\" [rows]=\"10\" resizableColumns=\"true\" scrollable=\"true\" scrollHeight=\"400px\" [sortMode]=\"multiple\" [globalFilter]=\"gb\" [editable]=\"true\" [responsive]=\"true\" [(selection)]=\"selectedEmployees\" (onRowSelect)=\"onRowSelect($event)\" (onRowUnselect)=\"onUnselect($event)\" [sortField]=\"PerformanceRankedOrder\" dataKey=\"Id\" [primeDragula]=\"bag\" [dragulaModel]=\"rows\" [dragulaOptions]=\"{ childContainerSelector: 'tbody', initAfterView: true }\" #dt>\r\n  <p-column [style]=\"{'width':'38px'}\" selectionMode=\"multiple\">\r\n    <ng-template let-col let-employee=\"rowData\" pTemplate=\"body\">\r\n      <!--<i class=\"fa fa-edit\" style=\"font-size:20px\" (click)=\"test(employee)\"></i> -->\r\n      <span pDraggable=\"eventos\" (onDragStart)=\"dragStart($event)\"></span>\r\n    </ng-template>\r\n  </p-column>\r\n  <p-column field=\"Name\" header=\"Name\" [sortable]=\"true\" [filter]=\"true\" filterPlaceholder=\"Search\" filterMatchMode=\"contains\">\r\n    <ng-template let-col let-employee=\"rowData\" pTemplate=\"body\">\r\n      <span pDraggable=\"eventos\" (onDragStart)=\"dragStart($event)\"></span>\r\n      <span #x> {{ getColor(x,employee) }}</span>\r\n      <div class=\"ui-g\">\r\n        <div class=\"ui-g-4\" style=\"padding: 0px\">\r\n          <img src=\"{{employee.ImageSource}}\" width=\"42\" height=\"42\">\r\n        </div>\r\n        <div class=\"ui-g-8\" style=\"padding: 0px; text-align: left\">\r\n          <div style=\"padding-top: 10%;\">\r\n            <span>{{employee[col.field]}}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ng-template>\r\n  </p-column>\r\n\r\n  <p-column field=\"Ministry\" header=\"Ministry\" [sortable]=\"true\" *ngIf=\"hiddenOrShowItem && columnShowOrHidden.MinistryOn\" [style]=\"{'width':'50px'}\">\r\n    <ng-template let-col let-employee=\"rowData\" pTemplate=\"body\">\r\n      <span #x> {{ getColor(x,employee) }} {{employee.Ministry}}</span>\r\n    </ng-template>\r\n  </p-column>\r\n\r\n    <p-column field=\"Department\" header=\"Department\" [sortable]=\"true\" *ngIf=\"hiddenOrShowItem && columnShowOrHidden.DepartmentOn\" [style]=\"{'width':'50px'}\">\r\n    <ng-template let-col let-employee=\"rowData\" pTemplate=\"body\">\r\n      <span #x> {{ getColor(x,employee) }} {{employee.Department}}</span>\r\n    </ng-template>\r\n  </p-column>\r\n\r\n  <p-column field=\"Id\" header=\"ID\" [sortable]=\"true\" [filter]=\"true\" filterPlaceholder=\"Search\" filterMatchMode=\"contains\">\r\n    <ng-template let-col let-employee=\"rowData\" pTemplate=\"body\">\r\n      <span #x> {{ getColor(x,employee) }} {{employee.Id}}</span>\r\n    </ng-template>\r\n  </p-column>\r\n\r\n  <p-column field=\"Age\" header=\"Age\" [sortable]=\"true\" *ngIf=\"hiddenOrShowItem && columnShowOrHidden.AgeOn\" [style]=\"{'width':'30px'}\">\r\n    <ng-template let-col let-employee=\"rowData\" pTemplate=\"body\">\r\n      <span #x> {{ getColor(x,employee) }} {{employee.Age}}</span>\r\n    </ng-template>\r\n  </p-column>\r\n\r\n  <p-column field=\"Grade\" header=\"Grade\" [sortable]=\"true\" [filter]=\"true\" filterMatchMode=\"equals\">\r\n    <ng-template pTemplate=\"filter\" let-col>\r\n      <p-dropdown [options]=\"gradesList\" [style]=\"{'width':'100%'}\" (onChange)=\"dt.filter($event.value,col.field,col.filterMatchMode)\" styleClass=\"ui-column-filter\" appendTo=\"body\"></p-dropdown>\r\n    </ng-template>\r\n    <ng-template let-col let-employee=\"rowData\" pTemplate=\"body\">\r\n      <span #x> {{ getColor(x,employee) }} {{employee.Grade}}</span>\r\n    </ng-template>\r\n  </p-column>\r\n  <p-column field=\"EmployeeGroup\" header=\"Employee Group\" [sortable]=\"true\" [filter]=\"true\" filterMatchMode=\"equals\">\r\n    <ng-template pTemplate=\"filter\" let-col>\r\n      <p-dropdown [options]=\"employeeGroupList\" [style]=\"{'width':'100%'}\" (onChange)=\"dt.filter($event.value,col.field,col.filterMatchMode)\" styleClass=\"ui-column-filter\" appendTo=\"body\"></p-dropdown>\r\n    </ng-template>\r\n    <ng-template let-col let-employee=\"rowData\" pTemplate=\"body\">\r\n      <span #x> {{ getColor(x,employee) }} {{employee.EmployeeGroup}}</span>\r\n    </ng-template>\r\n  </p-column>\r\n\r\n  <p-column field=\"JobGrade\" header=\"Job Grade\" [sortable]=\"true\" *ngIf=\"hiddenOrShowItem && columnShowOrHidden.JobGradeOn\" [style]=\"{'width':'30px'}\">\r\n    <ng-template let-col let-employee=\"rowData\" pTemplate=\"body\">\r\n      <span #x> {{ getColor(x,employee) }} {{employee.JobGrade}}</span>\r\n    </ng-template>\r\n  </p-column>\r\n\r\n    <p-column field=\"DivisionalStatus\" header=\"Divisional Status\" [sortable]=\"true\" *ngIf=\"hiddenOrShowItem && columnShowOrHidden.DivisionalStatusOn\" [style]=\"{'width':'40px'}\">\r\n    <ng-template let-col let-employee=\"rowData\" pTemplate=\"body\">\r\n      <span #x> {{ getColor(x,employee) }} {{employee.DivisionalStatus}}</span>\r\n    </ng-template>\r\n  </p-column>\r\n\r\n    <p-column field=\"DateJoined\" header=\"Date Joined\" [sortable]=\"true\" *ngIf=\"hiddenOrShowItem && columnShowOrHidden.DateJoinedOn\" [style]=\"{'width':'40px'}\">\r\n    <ng-template let-col let-employee=\"rowData\" pTemplate=\"body\">\r\n      <span #x> {{ getColor(x,employee) }} {{employee.DateJoined}}</span>\r\n    </ng-template>\r\n  </p-column>\r\n\r\n    <p-column field=\"NSDuration\" header=\"NS Duration\" [sortable]=\"true\" *ngIf=\"hiddenOrShowItem && columnShowOrHidden.NSDurationOn\" [style]=\"{'width':'40px'}\">\r\n    <ng-template let-col let-employee=\"rowData\" pTemplate=\"body\">\r\n      <span #x> {{ getColor(x,employee) }} {{employee.NSDuration}}</span>\r\n    </ng-template>\r\n  </p-column>\r\n\r\n    <p-column field=\"YIG\" header=\"YIG\" [sortable]=\"true\" *ngIf=\"hiddenOrShowItem && columnShowOrHidden.YIGOn\" [style]=\"{'width':'30px'}\">\r\n    <ng-template let-col let-employee=\"rowData\" pTemplate=\"body\">\r\n      <span #x> {{ getColor(x,employee) }} {{employee.YIG}}</span>\r\n    </ng-template>\r\n  </p-column>\r\n\r\n  <p-column field=\"YIS\" header=\"YIS\" [sortable]=\"true\" *ngIf=\"hiddenOrShowItem && columnShowOrHidden.YISOn\" [style]=\"{'width':'30px'}\">\r\n    <ng-template let-col let-employee=\"rowData\" pTemplate=\"body\">\r\n      <span #x> {{ getColor(x,employee) }} {{employee.YIS}}</span>\r\n    </ng-template>\r\n  </p-column>\r\n\r\n  <p-column field=\"NextSubstantiveGrade\" header=\"Next Substantive Grade\" [sortable]=\"true\" *ngIf=\"hiddenOrShowItem && columnShowOrHidden.NextSubstantiveGradeOn\" [style]=\"{'width':'40px'}\">\r\n    <ng-template let-col let-employee=\"rowData\" pTemplate=\"body\">\r\n      <span #x> {{ getColor(x,employee) }} {{employee.NextSubstantiveGrade}}</span>\r\n    </ng-template>\r\n  </p-column>\r\n\r\n  <p-column field=\"PotentialGrade\" header=\"Potential Grade\" [sortable]=\"true\" [filter]=\"true\" filterMatchMode=\"equals\" [editable]=\"true\">\r\n    <ng-template pTemplate=\"filter\" let-col>\r\n      <p-dropdown [options]=\"potentialGradeList\" [style]=\"{'width':'100%'}\" (onChange)=\"dt.filter($event.value,col.field,col.filterMatchMode)\" styleClass=\"ui-column-filter\" appendTo=\"body\"></p-dropdown>\r\n    </ng-template>\r\n    <ng-template let-col let-employee=\"rowData\" pTemplate=\"editor\">\r\n      <span #x> {{ getColor(x,employee) }}</span>\r\n      <p-dropdown [(ngModel)]=\"employee[col.field]\" [options]=\"potentialGradeList\" [autoWidth]=\"false\" [style]=\"{'width':'100%'}\" required=\"true\" appendTo=\"body\"></p-dropdown>\r\n    </ng-template>\r\n  </p-column>\r\n  <p-column field=\"PotentialRankedOrder\" header=\"Potential Ranked Order\" [sortable]=\"true\" [editable]=\"true\">\r\n    <ng-template let-col let-employee=\"rowData\" pTemplate=\"body\">\r\n      <span #x> {{ getColor(x,employee) }} {{employee.PotentialRankedOrder}}</span>\r\n    </ng-template>\r\n  </p-column>\r\n  <p-column field=\"PerformanceGrade\" header=\"Performance Grade\" [sortable]=\"true\" [filter]=\"true\" filterMatchMode=\"equals\" [editable]=\"true\">\r\n    <ng-template pTemplate=\"filter\" let-col>\r\n      <p-dropdown [options]=\"performanceGradeList\" [style]=\"{'width':'100%'}\" (onChange)=\"dt.filter($event.value,col.field,col.filterMatchMode)\" styleClass=\"ui-column-filter\" appendTo=\"body\"></p-dropdown>\r\n    </ng-template>\r\n    <ng-template let-col let-employee=\"rowData\" pTemplate=\"editor\">\r\n      <span #x> {{ getColor(x,employee) }}</span>\r\n      <p-dropdown [(ngModel)]=\"employee[col.field]\" [options]=\"performanceGradeList\" [autoWidth]=\"false\" [style]=\"{'width':'100%'}\" required=\"true\" appendTo=\"body\"></p-dropdown>\r\n    </ng-template>\r\n  </p-column>\r\n  <p-column field=\"PerformanceRankedOrder\" header=\"Performance Ranked Order\" [sortable]=\"true\" [editable]=\"true\">\r\n    <ng-template let-col let-employee=\"rowData\" pTemplate=\"body\">\r\n      <span #x> {{ getColor(x,employee) }} {{employee.PerformanceRankedOrder}}</span>\r\n    </ng-template>\r\n  </p-column>\r\n</p-dataTable>\r\n\r\n<p-dialog header=\"Employee Compare\" [(visible)]=\"compareViewDisplay\" [modal]=\"true\" [showHeader]=\"false\">\r\n  <div class=\"box-body dialog-body\">\r\n    <p-carousel headerText=\"Employees\" [value]=\"selectedEmployees\">\r\n      <ng-template let-selectedEmployee pTemplate=\"item\">\r\n        <div class=\"ui-grid ui-grid-responsive\">\r\n          <div class=\"ui-grid-row\">\r\n            <div class=\"ui-grid-col-12\">\r\n              <img src=\"{{selectedEmployee.ImageSource}}\" width=\"80\" height=\"80\">\r\n              <!-- <p-lightbox [images]=\"selectedEmployee.Images\" [styleClass]=\"lightbox_style\"></p-lightbox> -->\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-grid-row\">\r\n            <div class=\"ui-grid-col-6\">Name</div>\r\n            <div class=\"ui-grid-col-6\">{{selectedEmployee.Name}}</div>\r\n          </div>\r\n          <div class=\"ui-grid-row\">\r\n            <div class=\"ui-grid-col-6\">ID</div>\r\n            <div class=\"ui-grid-col-6\">{{selectedEmployee.Id}}</div>\r\n          </div>\r\n          <div class=\"ui-grid-row\">\r\n            <div class=\"ui-grid-col-6\">Grade</div>\r\n            <div class=\"ui-grid-col-6\">{{selectedEmployee.Grade}}</div>\r\n          </div>\r\n          <div class=\"ui-grid-row\">\r\n            <div class=\"ui-grid-col-6\">Employee Group</div>\r\n            <div class=\"ui-grid-col-6\">{{selectedEmployee.EmployeeGroup}}</div>\r\n          </div>\r\n          <div class=\"ui-grid-row\">\r\n            <div class=\"ui-grid-col-6\">Potential Grade</div>\r\n            <div class=\"ui-grid-col-6\">{{selectedEmployee.PotentialGrade}}</div>\r\n          </div>\r\n          <div class=\"ui-grid-row\">\r\n            <div class=\"ui-grid-col-6\">Potential RankedOrder</div>\r\n            <div class=\"ui-grid-col-6\">{{selectedEmployee.PotentialRankedOrder}}</div>\r\n          </div>\r\n          <div class=\"ui-grid-row\">\r\n            <div class=\"ui-grid-col-6\">Performance Grade</div>\r\n            <div class=\"ui-grid-col-6\">{{selectedEmployee.PerformanceGrade}}</div>\r\n          </div>\r\n          <div class=\"ui-grid-row\">\r\n            <div class=\"ui-grid-col-6\">Potential Grade</div>\r\n            <div class=\"ui-grid-col-6\">{{selectedEmployee.PotentialGrade}}</div>\r\n          </div>\r\n          <div class=\"ui-grid-row\">\r\n            <div class=\"ui-grid-col-6\">Potential RankedOrder</div>\r\n            <div class=\"ui-grid-col-6\">{{selectedEmployee.PotentialRankedOrder}}</div>\r\n          </div>\r\n          <div class=\"ui-grid-row\">\r\n            <div class=\"ui-grid-col-6\">Performance Grade</div>\r\n            <div class=\"ui-grid-col-6\">{{selectedEmployee.PerformanceGrade}}</div>\r\n          </div>\r\n          <div class=\"ui-grid-row\">\r\n            <div class=\"ui-grid-col-6\">Potential Grade</div>\r\n            <div class=\"ui-grid-col-6\">{{selectedEmployee.PotentialGrade}}</div>\r\n          </div>\r\n          <div class=\"ui-grid-row\">\r\n            <div class=\"ui-grid-col-6\">Potential RankedOrder</div>\r\n            <div class=\"ui-grid-col-6\">{{selectedEmployee.PotentialRankedOrder}}</div>\r\n          </div>\r\n          <div class=\"ui-grid-row\">\r\n            <div class=\"ui-grid-col-6\">Performance Grade</div>\r\n            <div class=\"ui-grid-col-6\">{{selectedEmployee.PerformanceGrade}}</div>\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n    </p-carousel>\r\n  </div>\r\n  <p-footer>\r\n    <!-- <button type=\"button\" pButton (click)=\"onSaveClick(3)\" label=\"Save and close\"></button> -->\r\n    <button type=\"button\" pButton (click)=\"closeDialog()\" label=\"Close\"></button>\r\n  </p-footer>\r\n</p-dialog>\r\n\r\n<!--<button mat-button (click)=\"openDialog()\">Open dialog</button>-->\r\n<p-dialog header=\"Setup quota distribution\" [(visible)]=\"settingColorDisplay\" [modal]=\"true\">\r\n  <div class=\"box-body dialog-body\" style=\"padding-bottom: 50px\">\r\n    <p-dataTable [value]=\"colorSettingList\" [loading]=\"false\" [sortMode]=\"multiple\" [editable]=\"true\">\r\n      <p-column field=\"Percentage\" header=\"Percentage (%)\" [sortable]=\"true\" [editable]=\"true\">\r\n        <ng-template let-col let-color=\"rowData\" pTemplate=\"editor\">\r\n          <div class=\"ui-g\">\r\n            <div class=\"ui-g-12\">\r\n              <div class=\"ui-inputgroup\">\r\n                <input type=\"text\" [(ngModel)]=\"color.Percentage\" pInputText>\r\n                <span class=\"ui-inputgroup-addon\">%</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"ColorStr\" header=\"Color\" [sortable]=\"true\">\r\n        <ng-template let-col let-color=\"rowData\" pTemplate=\"body\">\r\n          <p-colorPicker [(ngModel)]=\"color.ColorStr\"></p-colorPicker>\r\n          <span>{{color.ColorStr}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n    </p-dataTable>\r\n    <div class=\"ui-message ui-messages-error ui-corner-all\" *ngIf=\"percentageShowError\">\r\n      <i class=\"fa fa-close\"></i> Sum of Percentage Column Value Should Be Equal to 100.\r\n    </div>\r\n  </div>\r\n  <p-footer>\r\n    <button type=\"button\" pButton (click)=\"onSaveColorClick()\" label=\"Save and close\"></button>\r\n    <button type=\"button\" pButton (click)=\"closeDialog()\" label=\"Close\"></button>\r\n  </p-footer>\r\n</p-dialog>\r\n\r\n<p-dialog header=\"Show/Hide individual column\" [(visible)]=\"setColumnDisplay\" [modal]=\"true\">\r\n  <div class=\"box-body dialog-body\">\r\n    <div class=\"ui-g\">\r\n      <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-4\">\r\n          <p-checkbox [(ngModel)]=\"columnShowOrHidden.DepartmentOn\" binary=\"true\" label=\"Department\"></p-checkbox>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n          <p-checkbox [(ngModel)]=\"columnShowOrHidden.MinistryOn\" binary=\"true\" label=\"Ministry\"></p-checkbox>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n          <p-checkbox [(ngModel)]=\"columnShowOrHidden.AgeOn\" binary=\"true\" label=\"Age\"></p-checkbox>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-4\">\r\n          <p-checkbox [(ngModel)]=\"columnShowOrHidden.DateJoinedOn\" binary=\"true\" label=\"Date Joined\"></p-checkbox>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n          <p-checkbox [(ngModel)]=\"columnShowOrHidden.DivisionalStatusOn\" binary=\"true\" label=\"Divisional Status\"></p-checkbox>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n          <p-checkbox [(ngModel)]=\"columnShowOrHidden.JobGradeOn\" binary=\"true\" label=\"Job Grade\"></p-checkbox>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-4\">\r\n          <p-checkbox [(ngModel)]=\"columnShowOrHidden.NSDurationOn\" binary=\"true\" label=\"NS Duration\"></p-checkbox>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n          <p-checkbox [(ngModel)]=\"columnShowOrHidden.NextSubstantiveGradeOn\" binary=\"true\" label=\"Next Substantive Grade\"></p-checkbox>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n          <p-checkbox [(ngModel)]=\"columnShowOrHidden.RankedCEP2011\" binary=\"true\" label=\"2011 Ranked CEP\"></p-checkbox>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-4\">\r\n          <p-checkbox [(ngModel)]=\"columnShowOrHidden.RankedCEP2012\" binary=\"true\" label=\"2012 Ranked CEP\"></p-checkbox>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n          <p-checkbox [(ngModel)]=\"columnShowOrHidden.RankedPerfGrade2011\" binary=\"true\" label=\"2011 Ranked Perf Grade\"></p-checkbox>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n          <p-checkbox [(ngModel)]=\"columnShowOrHidden.RankedPerfGrade2012\" binary=\"true\" label=\"2012 Ranked Perf Grade\"></p-checkbox>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-4\">\r\n          <p-checkbox [(ngModel)]=\"columnShowOrHidden.YIGOn\" binary=\"true\" label=\"YIG\"></p-checkbox>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n          <p-checkbox [(ngModel)]=\"columnShowOrHidden.YISOn\" binary=\"true\" label=\"YIS\"></p-checkbox>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n    <p-footer>\r\n      <button type=\"button\" pButton (click)=\"onSaveColumnClick()\" label=\"Apply\"></button>\r\n      <button type=\"button\" pButton (click)=\"closeDialog()\" label=\"Close\"></button>\r\n  </p-footer>\r\n</p-dialog>\r\n\r\n<p-dialog header=\"Data Management\" [(visible)]=\"setRankedListDataDisplay\" [modal]=\"true\" resizable=\"true\">\r\n  <div class=\"box-body dialog-body\">\r\n    <p-dataTable [value]=\"employees\" [loading]=\"false\" [rows]=\"10\" resizableColumns=\"true\" scrollable=\"true\" scrollHeight=\"400px\" [sortMode]=\"multiple\" [editable]=\"true\" [responsive]=\"true\" [sortField]=\"PerformanceRankedOrder\">\r\n      <p-column field=\"Name\" header=\"Name\" [sortable]=\"true\" [editable]=\"true\">\r\n      </p-column>\r\n      <p-column field=\"Ministry\" header=\"Ministry\" [sortable]=\"true\" [editable]=\"true\">\r\n      </p-column>\r\n      <p-column field=\"Department\" header=\"Department\" [sortable]=\"true\" [editable]=\"true\">\r\n      </p-column>\r\n      <p-column field=\"Id\" header=\"ID\" [sortable]=\"true\" [editable]=\"true\">\r\n      </p-column>\r\n      <p-column field=\"Age\" header=\"Age\" [sortable]=\"true\" [editable]=\"true\">\r\n      </p-column>\r\n      <p-column field=\"Grade\" header=\"Grade\" [sortable]=\"true\" [editable]=\"true\">\r\n      </p-column>\r\n      <p-column field=\"EmployeeGroup\" header=\"Employee Group\" [sortable]=\"true\" [editable]=\"true\">\r\n      </p-column>\r\n      <p-column field=\"JobGrade\" header=\"Job Grade\" [sortable]=\"true\" [editable]=\"true\" [editable]=\"true\">\r\n      </p-column>\r\n      <p-column field=\"DivisionalStatus\" header=\"Divisional Status\" [sortable]=\"true\" [editable]=\"true\">\r\n      </p-column>\r\n      <p-column field=\"DateJoined\" header=\"Date Joined\" [sortable]=\"true\" [editable]=\"true\">\r\n      </p-column>\r\n      <p-column field=\"NSDuration\" header=\"NS Duration\" [sortable]=\"true\" [editable]=\"true\">\r\n      </p-column>\r\n      <p-column field=\"YIG\" header=\"YIG\" [sortable]=\"true\" [editable]=\"true\">\r\n      </p-column>\r\n      <p-column field=\"YIS\" header=\"YIS\" [sortable]=\"true\" [editable]=\"true\">\r\n      </p-column>\r\n      <p-column field=\"NextSubstantiveGrade\" header=\"Next Substantive Grade\" [sortable]=\"true\" [editable]=\"true\">\r\n      </p-column>\r\n      <p-column field=\"PotentialGrade\" header=\"Potential Grade\" [sortable]=\"true\" [editable]=\"true\">\r\n        <ng-template let-col let-employee=\"rowData\" pTemplate=\"editor\">\r\n          <p-dropdown [(ngModel)]=\"employee[col.field]\" [options]=\"potentialGradeList\" [autoWidth]=\"false\" [style]=\"{'width':'100%'}\" required=\"true\" appendTo=\"body\"></p-dropdown>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"PotentialRankedOrder\" header=\"Potential Ranked Order\" [sortable]=\"true\" [editable]=\"true\">\r\n      </p-column>\r\n      <p-column field=\"PerformanceGrade\" header=\"Performance Grade\" [sortable]=\"true\" [editable]=\"true\">\r\n        <ng-template let-col let-employee=\"rowData\" pTemplate=\"editor\">\r\n          <p-dropdown [(ngModel)]=\"employee[col.field]\" [options]=\"performanceGradeList\" [autoWidth]=\"false\" [style]=\"{'width':'100%'}\" required=\"true\" appendTo=\"body\"> </p-dropdown>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"PerformanceRankedOrder\" header=\"Performance Ranked Order\" [sortable]=\"true\" [editable]=\"true\">\r\n      </p-column>\r\n    </p-dataTable>\r\n  </div>\r\n    <p-footer>\r\n      <button type=\"button\" pButton (click)=\"onSaveRankedDataClick()\" label=\"Save\"></button>\r\n      <button type=\"button\" pButton (click)=\"closeDialog()\" label=\"Close\"></button>\r\n  </p-footer>\r\n</p-dialog>\r\n\r\n<p-dialog header=\"Potential Grade Chart\" [(visible)]=\"potentialGradeChartDisplay\" [modal]=\"true\" resizable=\"true\">\r\n  <div class=\"box-body dialog-body\" style=\"padding-bottom: 60px\">\r\n      <p-chart type=\"line\" [data]=\"potentialGradeChartData\" height=\"90%\"></p-chart>\r\n  </div>\r\n  <p-footer>\r\n      <button type=\"button\" pButton (click)=\"closeDialog()\" label=\"Close\"></button>\r\n  </p-footer>\r\n</p-dialog>\r\n\r\n<p-dialog header=\"Performance Grade Chart\" [(visible)]=\"performanceGradeChartDisplay\" [modal]=\"true\" resizable=\"true\" (onShow)=\"onDialogShow()\">\r\n  <div class=\"box-body dialog-body\">\r\n      <p-chart type=\"line\" [data]=\"performanceGradeChartData\" height= \"90%\"></p-chart>\r\n  </div>\r\n</p-dialog>"

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_rp_module__ = __webpack_require__("../../../../../src/app/app.rp.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_rp_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map