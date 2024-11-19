"use strict";
(self["webpackChunkeshopAdmin"] = self["webpackChunkeshopAdmin"] || []).push([["main"],{

/***/ 7710:
/*!********************************************************************!*\
  !*** ./src/app/account/account-create/account-create.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountCreateComponent: () => (/* binding */ AccountCreateComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var _model_admin_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../model/admin/admin */ 9714);
/* harmony import */ var _model_error_error_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/error/error-dto */ 3990);
/* harmony import */ var _common_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/app-constants */ 9827);
/* harmony import */ var _model_admin_role__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/admin/role */ 6613);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _service_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/account.service */ 1522);
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/auth.service */ 9692);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ 8375);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ 7548);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _shared_error_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/error.component */ 6333);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 683);
















function AccountCreateComponent_div_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AccountCreateComponent_div_14_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Name must be at least 4 characters long.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AccountCreateComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AccountCreateComponent_div_14_div_1_Template, 2, 0, "div", 28)(2, AccountCreateComponent_div_14_div_2_Template, 2, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _r1.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _r1.errors.minlength);
  }
}
function AccountCreateComponent_div_20_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Email is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AccountCreateComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AccountCreateComponent_div_20_div_1_Template, 2, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _r3.errors.required);
  }
}
function AccountCreateComponent_option_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const role_r12 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngValue", ctx_r6.roleHelper[role_r12]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", role_r12, " ");
  }
}
function AccountCreateComponent_div_27_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " ROle must be selected. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AccountCreateComponent_div_27_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Role must be at least 4 characters long. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AccountCreateComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AccountCreateComponent_div_27_div_1_Template, 2, 0, "div", 28)(2, AccountCreateComponent_div_27_div_2_Template, 2, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _r5.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _r5.errors.minlength);
  }
}
function AccountCreateComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx_r8.info, " ");
  }
}
const _c0 = () => ({
  standalone: true
});
class AccountCreateComponent {
  constructor(accountService, authService, spinner, toastr, route) {
    this.accountService = accountService;
    this.authService = authService;
    this.spinner = spinner;
    this.toastr = toastr;
    this.route = route;
    this.account = new _model_admin_admin__WEBPACK_IMPORTED_MODULE_0__.Admin();
    this.faArrowLeft = _common_app_constants__WEBPACK_IMPORTED_MODULE_2__.AppConstants.iconArrowLeft;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    this.info = '';
    this.roles = Object.keys(_model_admin_role__WEBPACK_IMPORTED_MODULE_3__.Role).map(key => _model_admin_role__WEBPACK_IMPORTED_MODULE_3__.Role[key]).filter(value => typeof value === 'string' && value != _model_admin_role__WEBPACK_IMPORTED_MODULE_3__.Role[_model_admin_role__WEBPACK_IMPORTED_MODULE_3__.Role.OWNER]);
    this.faUser = _common_app_constants__WEBPACK_IMPORTED_MODULE_2__.AppConstants.iconUser;
    this.roleHelper = _model_admin_role__WEBPACK_IMPORTED_MODULE_3__.Role;
    this.faCalendar = _common_app_constants__WEBPACK_IMPORTED_MODULE_2__.AppConstants.iconCalendar;
  }
  ngOnInit() {
    this.account = new _model_admin_admin__WEBPACK_IMPORTED_MODULE_0__.Admin();
    this.account.role = _model_admin_role__WEBPACK_IMPORTED_MODULE_3__.Role.ADMIN;
    this.errorDto = new _model_error_error_dto__WEBPACK_IMPORTED_MODULE_1__.ErrorDto();
  }
  selectRole(value) {
    this.account.role = value;
  }
  createAccount() {
    this.spinner.show('accountSpinner').then(r => r);
    this.accountService.createAccount(this.account, this.errorDto).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe({
      next: adminResponse => {
        this.spinner.hide('accountSpinner').then(() => {
          this.toastr.success('Account updated 200', 'Accounts');
          this.account = adminResponse.data;
          this.errorDto = new _model_error_error_dto__WEBPACK_IMPORTED_MODULE_1__.ErrorDto();
          this.info = 'Account created';
          setTimeout(() => {
            this.route.navigate(['/accounts']);
          }, _common_app_constants__WEBPACK_IMPORTED_MODULE_2__.AppConstants.toastSuccessDelay);
        });
      },
      error: () => {
        this.spinner.hide('accountSpinner').then(() => {
          this.toastr.error('Account create failed ' + this.errorDto.httpStatus, 'Accounts');
        });
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  static #_ = this.ɵfac = function AccountCreateComponent_Factory(t) {
    return new (t || AccountCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_service_account_service__WEBPACK_IMPORTED_MODULE_4__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_10__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_11__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: AccountCreateComponent,
    selectors: [["app-account-create"]],
    decls: 38,
    vars: 12,
    consts: [[1, "box"], [1, "row", "justify-content-center"], [1, "col-lg-3", "col-md-10", "col-sm-12", "align-self-center"], [1, "box-part", "text-center"], ["novalidate", "", 3, "ngSubmit"], ["createAccountForm", "ngForm"], [1, "mb-1"], ["for", "account-username", 1, "col-form-label"], ["id", "account-username", "name", "username", "type", "text", "placeholder", "required", "required", "", "minlength", "4", 1, "form-control", 3, "ngModel", "ngModelChange"], ["username", "ngModel"], [1, "mt-1"], ["class", "alert alert-danger", 4, "ngIf"], ["for", "account-email", 1, "col-form-label"], ["id", "account-email", "name", "email", "type", "text", "placeholder", "required", "required", "", "minlength", "4", 1, "form-control", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["class", "alert alert-danger mt-1", 4, "ngIf"], ["for", "account-role", 1, "col-form-label"], ["id", "account-role", "minlength", "4", 1, "form-select", "form-select-lg", "mb-3", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["select", "ngModel"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["bdColor", "rgba(51,51,51,0.8)", "size", "medium", "color", "#fff", "type", "ball-spin-clockwise"], [1, "mb-3"], ["class", "alert alert-success", "role", "alert", 4, "ngIf"], [3, "errorDto"], ["type", "submit", 1, "btn", "btn-primary", "m-3"], ["type", "button", "appBackButton", "", 1, "ms-2", "btn", "btn-danger", "m-3"], [3, "icon"], [1, "alert", "alert-danger"], [4, "ngIf"], [1, "alert", "alert-danger", "mt-1"], [3, "ngValue"], ["role", "alert", 1, "alert", "alert-success"]],
    template: function AccountCreateComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "form", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function AccountCreateComponent_Template_form_ngSubmit_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r15);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](5);
          return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](_r0.form.valid && ctx.createAccount());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Create account");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 6)(9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function AccountCreateComponent_Template_input_ngModelChange_11_listener($event) {
          return ctx.account.username = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, AccountCreateComponent_div_14_Template, 3, 2, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 6)(16, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "input", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function AccountCreateComponent_Template_input_ngModelChange_18_listener($event) {
          return ctx.account.email = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, AccountCreateComponent_div_20_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 6)(22, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "select", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function AccountCreateComponent_Template_select_ngModelChange_24_listener($event) {
          return ctx.account.role = $event;
        })("ngModelChange", function AccountCreateComponent_Template_select_ngModelChange_24_listener($event) {
          return ctx.selectRole($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](26, AccountCreateComponent_option_26_Template, 2, 2, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](27, AccountCreateComponent_div_27_Template, 3, 2, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](28, "ngx-spinner", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](30, AccountCreateComponent_div_30_Template, 2, 1, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](31, "app-error", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "div", 21)(33, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, "Create ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](36, "fa-icon", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37, "\u00A0Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](5);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](12);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](19);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.account.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _r0.submitted && _r1.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.account.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _r0.submitted && _r3.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.account.role)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](11, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.roles);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _r0.submitted && _r5.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.info);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("errorDto", ctx.errorDto);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", ctx.faArrowLeft);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _shared_error_component__WEBPACK_IMPORTED_MODULE_6__.ErrorComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgForm, ngx_spinner__WEBPACK_IMPORTED_MODULE_10__.NgxSpinnerComponent, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__.FaIconComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 8308:
/*!****************************************************************!*\
  !*** ./src/app/account/account-edit/account-edit.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountEditComponent: () => (/* binding */ AccountEditComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 274);
/* harmony import */ var _model_admin_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../model/admin/admin */ 9714);
/* harmony import */ var _model_audit_audit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/audit/audit */ 5201);
/* harmony import */ var _model_error_error_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/error/error-dto */ 3990);
/* harmony import */ var _common_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/app-constants */ 9827);
/* harmony import */ var _model_admin_role__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/admin/role */ 6613);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _service_account_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/account.service */ 1522);
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/auth.service */ 9692);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-spinner */ 8375);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-toastr */ 7548);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _shared_error_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/error.component */ 6333);
/* harmony import */ var _shared_app_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/app-info.component */ 3425);
/* harmony import */ var _shared_audit_audit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/audit/audit.component */ 887);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 683);



















function AccountEditComponent_div_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function AccountEditComponent_div_14_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Name must be at least 4 characters long.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function AccountEditComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, AccountEditComponent_div_14_div_1_Template, 2, 0, "div", 27)(2, AccountEditComponent_div_14_div_2_Template, 2, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _r1.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _r1.errors.minlength);
  }
}
function AccountEditComponent_div_20_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Email is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function AccountEditComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, AccountEditComponent_div_20_div_1_Template, 2, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _r3.errors.required);
  }
}
function AccountEditComponent_option_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const role_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", role_r11, " ");
  }
}
function AccountEditComponent_div_27_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Role must be selected. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function AccountEditComponent_div_27_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Role must be at least 4 characters long. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function AccountEditComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, AccountEditComponent_div_27_div_1_Template, 2, 0, "div", 27)(2, AccountEditComponent_div_27_div_2_Template, 2, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _r5.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _r5.errors.minlength);
  }
}
const _c0 = () => ({
  standalone: true
});
class AccountEditComponent {
  constructor(accountService, authService, spinner, toastr, route, actRoute) {
    this.accountService = accountService;
    this.authService = authService;
    this.spinner = spinner;
    this.toastr = toastr;
    this.route = route;
    this.actRoute = actRoute;
    this.originalUsername = '';
    this.selectedAccount = new _model_admin_admin__WEBPACK_IMPORTED_MODULE_0__.Admin();
    this.audit = new _model_audit_audit__WEBPACK_IMPORTED_MODULE_1__.Audit();
    this.faArrowLeft = _common_app_constants__WEBPACK_IMPORTED_MODULE_3__.AppConstants.iconArrowLeft;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subject();
    this.info = '';
    this.faUser = _common_app_constants__WEBPACK_IMPORTED_MODULE_3__.AppConstants.iconUser;
    this.faCalendar = _common_app_constants__WEBPACK_IMPORTED_MODULE_3__.AppConstants.iconCalendar;
    this.roleHelper = _model_admin_role__WEBPACK_IMPORTED_MODULE_4__.Role;
  }
  ngOnInit() {
    this.roles = Object.keys(_model_admin_role__WEBPACK_IMPORTED_MODULE_4__.Role).map(key => _model_admin_role__WEBPACK_IMPORTED_MODULE_4__.Role[key]).filter(value => typeof value === 'string' && value != _model_admin_role__WEBPACK_IMPORTED_MODULE_4__.Role[_model_admin_role__WEBPACK_IMPORTED_MODULE_4__.Role.OWNER]);
    this.currentAdmin = this.authService.currentAdminValue;
    this.errorDto = new _model_error_error_dto__WEBPACK_IMPORTED_MODULE_2__.ErrorDto();
    this.actRoute.paramMap.subscribe(params => {
      this.originalUsername = params.get('username');
      this.loadAccount(this.originalUsername);
    });
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  updateAccount() {
    this.spinner.show('accountSpinner').then(r => r);
    this.accountService.editAccount(this.selectedAccount, this.originalUsername, this.errorDto).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this.destroy$)).subscribe({
      next: adminResponse => {
        this.spinner.hide('accountSpinner').then(() => {
          this.toastr.success('Account updated 200', 'Accounts');
          this.selectedAccount = adminResponse.data;
          this.audit = adminResponse.audit;
          this.errorDto = new _model_error_error_dto__WEBPACK_IMPORTED_MODULE_2__.ErrorDto();
          this.info = 'Account updated';
          setTimeout(() => {
            this.route.navigate(['/accounts']);
          }, _common_app_constants__WEBPACK_IMPORTED_MODULE_3__.AppConstants.toastSuccessDelay);
        });
      },
      error: () => {
        this.spinner.hide('accountSpinner').then(() => {
          this.toastr.error('Account update failed ' + this.errorDto.httpStatus, 'Accounts');
        });
      }
    });
  }
  loadAccount(username) {
    this.spinner.show('accountSpinner').then(r => r);
    this.accountService.getAccount(username, this.errorDto).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this.destroy$)).subscribe({
      next: adminResponse => {
        this.spinner.hide('accountSpinner').then(() => this.toastr.info('account reloaded', 'Accounts'));
        this.selectedAccount = adminResponse.data;
        this.audit = adminResponse.audit;
        this.errorDto = new _model_error_error_dto__WEBPACK_IMPORTED_MODULE_2__.ErrorDto();
        if (this.selectedAccount.role.toString() == _model_admin_role__WEBPACK_IMPORTED_MODULE_4__.Role[_model_admin_role__WEBPACK_IMPORTED_MODULE_4__.Role.OWNER]) {
          this.roles.push(_model_admin_role__WEBPACK_IMPORTED_MODULE_4__.Role[_model_admin_role__WEBPACK_IMPORTED_MODULE_4__.Role.OWNER]);
        }
      },
      error: () => {
        this.spinner.hide('accountSpinner').then(() => {
          this.selectedAccount = new _model_admin_admin__WEBPACK_IMPORTED_MODULE_0__.Admin();
          this.toastr.error('Unable to load account ' + this.errorDto.httpStatus, 'Accounts');
        });
      }
    });
  }
  selectRole(value) {
    this.selectedAccount.role = value;
  }
  isOwnAccountOrOwnerRole() {
    return !this.isNotOwnAccount() || this.selectedAccount?.role?.toString() == _model_admin_role__WEBPACK_IMPORTED_MODULE_4__.Role[_model_admin_role__WEBPACK_IMPORTED_MODULE_4__.Role.OWNER];
  }
  isNotOwnAccount() {
    return this.currentAdmin.username != this.originalUsername;
  }
  static #_ = this.ɵfac = function AccountEditComponent_Factory(t) {
    return new (t || AccountEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_service_account_service__WEBPACK_IMPORTED_MODULE_5__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_13__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_14__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
    type: AccountEditComponent,
    selectors: [["app-account-edit"]],
    decls: 37,
    vars: 17,
    consts: [[1, "box"], [1, "row", "justify-content-center"], [1, "col-lg-4", "col-sm-6", "align-self-center"], [1, "box-part", "text-center"], ["novalidate", "", 3, "ngSubmit"], ["editAccountForm", "ngForm"], [3, "audit"], [1, "mb-1"], ["for", "account-username", 1, "col-form-label"], ["id", "account-username", "name", "username", "type", "text", "placeholder", "required", "required", "", "minlength", "4", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange"], ["username", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], ["for", "account-email", 1, "col-form-label"], ["id", "account-email", "name", "email", "type", "text", "placeholder", "required", "required", "", "minlength", "4", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange"], ["email", "ngModel"], ["for", "account-role", 1, "col-form-label"], ["id", "account-role", "minlength", "4", 1, "form-select", "mb-3", 3, "ngModel", "ngModelOptions", "disabled", "ngModelChange"], ["select", "ngModel"], [4, "ngFor", "ngForOf"], ["bdColor", "rgba(51,51,51,0.8)", "size", "medium", "color", "#fff", "type", "ball-spin-clockwise"], [3, "info"], [3, "errorDto"], [1, "col-auto"], ["type", "submit", 1, "ms-3", "ms-sm-5", "btn", "btn-primary", 3, "disabled"], ["type", "button", "appBackButton", "", 1, "ms-3", "ms-sm-5", "btn", "btn-danger"], [1, "me-2", 3, "icon"], [1, "alert", "alert-danger"], [4, "ngIf"]],
    template: function AccountEditComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "form", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngSubmit", function AccountEditComponent_Template_form_ngSubmit_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r14);
          const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](25);
          const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](19);
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](13);
          return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"]((_r5.valid || _r5.isDisabled) && (_r3.valid || _r3.isDisabled) && (_r1.valid || _r1.isDisabled) && ctx.updateAccount());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "Update account");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "app-audit", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 7)(10, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function AccountEditComponent_Template_input_ngModelChange_12_listener($event) {
          return ctx.selectedAccount.username = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, AccountEditComponent_div_14_Template, 3, 2, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div", 7)(16, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "input", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function AccountEditComponent_Template_input_ngModelChange_18_listener($event) {
          return ctx.selectedAccount.email = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](20, AccountEditComponent_div_20_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "div", 7)(22, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23, "Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "select", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function AccountEditComponent_Template_select_ngModelChange_24_listener($event) {
          return ctx.selectedAccount.role = $event;
        })("ngModelChange", function AccountEditComponent_Template_select_ngModelChange_24_listener($event) {
          return ctx.selectRole($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](26, AccountEditComponent_option_26_Template, 2, 1, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](27, AccountEditComponent_div_27_Template, 3, 2, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](28, "ngx-spinner", 19)(29, "app-info", 20)(30, "app-error", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "div", 22)(32, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](33, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](35, "fa-icon", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](36, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](5);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](13);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](19);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("audit", ctx.audit);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.selectedAccount.username)("disabled", ctx.isNotOwnAccount());
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _r0.submitted && _r1.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.selectedAccount.email)("disabled", ctx.isNotOwnAccount());
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _r0.submitted && _r3.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.selectedAccount.role)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](16, _c0))("disabled", ctx.isOwnAccountOrOwnerRole());
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.roles);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _r0.submitted && _r5.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("info", ctx.info);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("errorDto", ctx.errorDto);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", !(_r0.dirty || _r5.dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("icon", ctx.faArrowLeft);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _shared_error_component__WEBPACK_IMPORTED_MODULE_7__.ErrorComponent, _shared_app_info_component__WEBPACK_IMPORTED_MODULE_8__.InfoComponent, _shared_audit_audit_component__WEBPACK_IMPORTED_MODULE_9__.AuditComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgForm, ngx_spinner__WEBPACK_IMPORTED_MODULE_13__.NgxSpinnerComponent, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_18__.FaIconComponent],
    styles: [".list-unstyled[_ngcontent-%COMP%] {\n  color: #e5e5e5;\n  text-align: left;\n}\n\n.child[_ngcontent-%COMP%]{\n  min-width: 100px;\n  width: 220px;\n  margin: 0 auto;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWNjb3VudC9hY2NvdW50LWVkaXQvYWNjb3VudC1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osY0FBYztBQUNoQiIsInNvdXJjZXNDb250ZW50IjpbIlxuLmxpc3QtdW5zdHlsZWQge1xuICBjb2xvcjogI2U1ZTVlNTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmNoaWxke1xuICBtaW4td2lkdGg6IDEwMHB4O1xuICB3aWR0aDogMjIwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5898:
/*!****************************************************************!*\
  !*** ./src/app/account/account-list/account-list.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountListComponent: () => (/* binding */ AccountListComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 274);
/* harmony import */ var _common_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/app-constants */ 9827);
/* harmony import */ var _model_error_error_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/error/error-dto */ 3990);
/* harmony import */ var _model_admin_role__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/admin/role */ 6613);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _service_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/account.service */ 1522);
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/auth.service */ 9692);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ 8375);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ 7548);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _shared_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/error.component */ 6333);
/* harmony import */ var _shared_app_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/app-info.component */ 3425);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 683);















const _c0 = a0 => ({
  "d-col-sm-0": a0
});
function AccountListComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 19)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "fa-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](2, _c0, !ctx_r0.showDelete()));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", ctx_r0.faDelete);
  }
}
const _c1 = a0 => ({
  "col-sm-0": a0
});
function AccountListComponent_div_25_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 34)(1, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AccountListComponent_div_25_div_21_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const admin_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r4.deleteAccount(admin_r2.username));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "fa-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](2, _c1, !ctx_r3.showDelete()));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", ctx_r3.faDelete);
  }
}
const _c2 = a0 => ({
  "col-sm-3": a0
});
const _c3 = a1 => ["/accounts/edit/", a1];
function AccountListComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 20)(1, "div", 21)(2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 30)(19, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](20, "fa-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, AccountListComponent_div_25_div_21_Template, 3, 4, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const admin_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](admin_r2.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](admin_r2.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](admin_r2.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](8, _c2, !ctx_r1.showDelete()));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](admin_r2.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](10, _c3, admin_r2.username));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", ctx_r1.faEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.showDelete());
  }
}
class AccountListComponent {
  constructor(accountService, authService, router, spinner, toastr) {
    this.accountService = accountService;
    this.authService = authService;
    this.router = router;
    this.spinner = spinner;
    this.toastr = toastr;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    this.adminList = new Array();
    this.faEdit = _common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.iconEdit;
    this.faDelete = _common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.iconDelete;
  }
  ngOnInit() {
    this.errorDto = new _model_error_error_dto__WEBPACK_IMPORTED_MODULE_1__.ErrorDto();
    this.currentAdmin = this.authService.currentAdminValue;
    this.getAccounts();
  }
  getAccounts() {
    this.spinner.show('accountSpinner').then(r => r);
    this.accountService.getAccounts(this.errorDto).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe({
      next: adminList => {
        this.spinner.hide('accountSpinner').then(() => this.toastr.info(adminList.data.length + ' accounts reloaded', 'Accounts'));
        this.adminList = adminList.data;
      },
      error: () => {
        this.spinner.hide('accountSpinner').then(() => {
          this.toastr.error(this.errorDto.httpStatus + ' load accounts failed', 'Accounts');
          this.adminList = new Array();
        });
      }
    });
  }
  deleteAccount(username) {
    if (!confirm('Are you sure to delete account?' + username + '?')) {
      return;
    }
    this.spinner.show().then(r => r);
    this.accountService.deleteAccount(username, this.errorDto).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe({
      next: () => {
        this.spinner.hide().then(() => {
          this.info = 'Account ' + username + ' deleted';
          this.errorDto = new _model_error_error_dto__WEBPACK_IMPORTED_MODULE_1__.ErrorDto();
          this.toastr.success(' 204 account ' + username + ' deleted', 'Account');
          setTimeout(() => {
            this.info = null;
          }, _common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.toastSuccessDelay);
          this.getAccounts();
        });
      },
      error: () => {
        this.spinner.hide().then(() => this.toastr.error(+this.errorDto.httpStatus + ' delete failed', 'Account'));
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  showDelete() {
    return this.currentAdmin?.role?.toString() == _model_admin_role__WEBPACK_IMPORTED_MODULE_2__.Role[_model_admin_role__WEBPACK_IMPORTED_MODULE_2__.Role.OWNER];
  }
  static #_ = this.ɵfac = function AccountListComponent_Factory(t) {
    return new (t || AccountListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_service_account_service__WEBPACK_IMPORTED_MODULE_3__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_11__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_12__.ToastrService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: AccountListComponent,
    selectors: [["app-account-list"]],
    decls: 30,
    vars: 8,
    consts: [[1, "box"], [1, "row", "justify-content-center"], [1, "col-lg-8", "col-md-10", "col-12", "align-self-center"], [1, "box-part", "text-center"], [1, "text-orange", "mb-3"], [1, "row"], [1, "input-group", "d-none", "d-sm-inline-flex", "text-center"], [1, "col-12", "col-sm-2"], [1, "text-darkorange"], [1, "col-12", "col-sm-4"], [1, "col-12", "col-sm-2", 3, "ngClass"], [1, "col-12", "col-sm-1"], [1, "text-darkorange", 3, "icon"], ["class", "col-12 col-sm-1", 3, "ngClass", 4, "ngIf"], ["bdColor", "rgba(51,51,51,0.8)", "size", "medium", "color", "#fff", "type", "ball-spin-clockwise"], ["class", "row text-center text-sm-start", 4, "ngFor", "ngForOf"], [3, "info"], [3, "errorDto"], ["routerLinkActive", "active", "routerLink", "/accounts/create", 1, "btn", "btn-primary"], [1, "col-12", "col-sm-1", 3, "ngClass"], [1, "row", "text-center", "text-sm-start"], [1, "input-group", "link"], [1, "col-12", "col-sm-2", "border-bottom"], ["data-label", "Username", 1, "d-inline-block", "m-2", "text-darkorange", "d-sm-none"], [1, "d-inline-block", "m-2", "text-white"], [1, "col-12", "col-sm-4", "text-white", "border-bottom"], ["data-label", "Email", 1, "d-inline-block", "m-2", "text-darkorange", "d-sm-none"], ["data-label", "Role", 1, "d-inline-block", "m-2", "text-darkorange", "d-sm-none"], [1, "col-12", "col-sm-2", "border-bottom", 3, "ngClass"], ["data-label", "Status", 1, "d-inline-block", "m-2", "text-darkorange", "d-sm-none"], [1, "col-12", "col-sm-1", "border-bottom", "text-center"], ["routerLinkActive", "active", 1, "btn", "btn-primary", "btn-sm", "m-2", 3, "routerLink"], [3, "icon"], ["class", "col-12 col-sm-1 border-bottom text-center", 3, "ngClass", 4, "ngIf"], [1, "col-12", "col-sm-1", "border-bottom", "text-center", 3, "ngClass"], ["routerLinkActive", "active", 1, "btn", "btn-danger", "btn-sm", "m-2", 3, "click"]],
    template: function AccountListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Accounts");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 9)(12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 7)(15, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 10)(18, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 11)(21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](22, "fa-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, AccountListComponent_div_23_Template, 3, 4, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](24, "ngx-spinner", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](25, AccountListComponent_div_25_Template, 22, 12, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](26, "app-info", 16)(27, "app-error", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "Create account");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](6, _c2, !ctx.showDelete()));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", ctx.faEdit);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showDelete());
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.adminList);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("info", ctx.info);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("errorDto", ctx.errorDto);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _shared_error_component__WEBPACK_IMPORTED_MODULE_5__.ErrorComponent, _shared_app_info_component__WEBPACK_IMPORTED_MODULE_6__.InfoComponent, ngx_spinner__WEBPACK_IMPORTED_MODULE_11__.NgxSpinnerComponent, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__.FaIconComponent, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink],
    encapsulation: 2
  });
}

/***/ }),

/***/ 1995:
/*!*******************************************!*\
  !*** ./src/app/account/account.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountModule: () => (/* binding */ AccountModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 6208);
/* harmony import */ var _account_create_account_create_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account-create/account-create.component */ 7710);
/* harmony import */ var _account_edit_account_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account-edit/account-edit.component */ 8308);
/* harmony import */ var _account_list_account_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account-list/account-list.component */ 5898);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ 8375);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);










class AccountModule {
  static #_ = this.ɵfac = function AccountModule_Factory(t) {
    return new (t || AccountModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: AccountModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_7__.NgxSpinnerModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__.FaIconComponent]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AccountModule, {
    declarations: [_account_list_account_list_component__WEBPACK_IMPORTED_MODULE_3__.AccountListComponent, _account_edit_account_edit_component__WEBPACK_IMPORTED_MODULE_2__.AccountEditComponent, _account_create_account_create_component__WEBPACK_IMPORTED_MODULE_1__.AccountCreateComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_7__.NgxSpinnerModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__.FaIconComponent, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink]
  });
})();

/***/ }),

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ 6459);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ 2014);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-guard */ 2695);
/* harmony import */ var _password_change_password_change_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./password-change/password-change.component */ 1933);
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ 3903);
/* harmony import */ var _qr_qr_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./qr/qr.component */ 7155);
/* harmony import */ var _write_us_write_us_list_write_us_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./write-us/write-us-list/write-us-list.component */ 1801);
/* harmony import */ var _write_us_write_us_write_us_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./write-us/write-us/write-us.component */ 3237);
/* harmony import */ var _variant_catalog_list_variant_catalog_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./variant-catalog-list/variant-catalog-list.component */ 9931);
/* harmony import */ var _upsert_variant_catalog_upsert_variant_catalog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./upsert-variant-catalog/upsert-variant-catalog.component */ 2690);
/* harmony import */ var _graph_home_graph_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./graph-home/graph-home.component */ 6889);
/* harmony import */ var _order_order_list_order_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./order/order-list/order-list.component */ 1415);
/* harmony import */ var _order_order_view_order_view_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./order/order-view/order-view.component */ 178);
/* harmony import */ var _genericconfig_generic_config_list_generic_config_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./genericconfig/generic-config-list/generic-config-list.component */ 147);
/* harmony import */ var _genericconfig_generic_config_create_generic_config_create_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./genericconfig/generic-config-create/generic-config-create.component */ 7834);
/* harmony import */ var _genericconfig_generic_config_edit_generic_config_edit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./genericconfig/generic-config-edit/generic-config-edit.component */ 3086);
/* harmony import */ var _category_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./category/category-list/category-list.component */ 7480);
/* harmony import */ var _category_category_upsert_category_upsert_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./category/category-upsert/category-upsert.component */ 3749);
/* harmony import */ var _category_category_view_category_view_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./category/category-view/category-view.component */ 6130);
/* harmony import */ var _account_account_list_account_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./account/account-list/account-list.component */ 5898);
/* harmony import */ var _account_account_edit_account_edit_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./account/account-edit/account-edit.component */ 8308);
/* harmony import */ var _account_account_create_account_create_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./account/account-create/account-create.component */ 7710);
/* harmony import */ var _product_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./product/product-list/product-list.component */ 936);
/* harmony import */ var _product_product_view_product_view_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./product/product-view/product-view.component */ 9524);
/* harmony import */ var _product_product_upsert_product_upsert_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./product/product-upsert/product-upsert.component */ 1110);
/* harmony import */ var _product_product_sku_product_sku_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./product/product-sku/product-sku.component */ 6370);
/* harmony import */ var _product_sku_view_product_sku_view_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./product/sku-view/product-sku-view.component */ 344);
/* harmony import */ var _genericconfig_img_configuration_img_configuration_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./genericconfig/img-configuration/img-configuration.component */ 6020);
/* harmony import */ var _genericconfig_advertisement_view_advertisement_view_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./genericconfig/advertisement-view/advertisement-view.component */ 2281);
/* harmony import */ var _genericconfig_bank_configuration_bank_configuration_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./genericconfig/bank-configuration/bank-configuration.component */ 8088);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/core */ 1699);

































const routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'home'
}, {
  path: 'home',
  component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent,
  canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__.authGuard]
}, {
  path: 'login',
  component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent
}, {
  path: 'password-change',
  component: _password_change_password_change_component__WEBPACK_IMPORTED_MODULE_3__.PasswordChangeComponent
}, {
  path: 'forgot-password',
  component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_4__.ForgotPasswordComponent
}, {
  path: 'advertisement',
  component: _genericconfig_advertisement_view_advertisement_view_component__WEBPACK_IMPORTED_MODULE_28__.AdvertisementViewComponent,
  canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__.authGuard]
}, {
  path: 'bank',
  component: _genericconfig_bank_configuration_bank_configuration_component__WEBPACK_IMPORTED_MODULE_29__.BankConfigurationComponent,
  canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__.authGuard]
}, {
  path: 'img',
  component: _genericconfig_img_configuration_img_configuration_component__WEBPACK_IMPORTED_MODULE_27__.ImgConfigurationComponent,
  canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__.authGuard]
}, {
  path: 'qr-code',
  component: _qr_qr_component__WEBPACK_IMPORTED_MODULE_5__.QrComponent,
  canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__.authGuard]
}, {
  path: 'categories',
  component: _category_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_16__.CategoryListComponent,
  canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__.authGuard]
}, {
  path: 'categories/upsert',
  component: _category_category_upsert_category_upsert_component__WEBPACK_IMPORTED_MODULE_17__.CategoryUpsertComponent,
  canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__.authGuard]
}, {
  path: 'categories/view/:categoryUrl',
  component: _category_category_view_category_view_component__WEBPACK_IMPORTED_MODULE_18__.CategoryViewComponent,
  canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__.authGuard]
}, {
  path: 'products',
  component: _product_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_22__.ProductListComponent,
  canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__.authGuard]
}, {
  path: 'products/view/:productUrl',
  component: _product_product_view_product_view_component__WEBPACK_IMPORTED_MODULE_23__.ProductViewComponent,
  canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__.authGuard]
}, {
  path: 'products/upsert',
  component: _product_product_upsert_product_upsert_component__WEBPACK_IMPORTED_MODULE_24__.ProductUpsertComponent,
  canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__.authGuard]
}, {
  path: 'products/sku/:productUrl',
  component: _product_product_sku_product_sku_component__WEBPACK_IMPORTED_MODULE_25__.ProductSkuComponent,
  canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__.authGuard]
}, {
  path: 'products/sku/view/:sku',
  component: _product_sku_view_product_sku_view_component__WEBPACK_IMPORTED_MODULE_26__.ProductSkuViewComponent,
  canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__.authGuard]
}, {
  path: 'accounts',
  component: _account_account_list_account_list_component__WEBPACK_IMPORTED_MODULE_19__.AccountListComponent,
  canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__.authGuard]
}, {
  path: 'accounts/edit/:username',
  component: _account_account_edit_account_edit_component__WEBPACK_IMPORTED_MODULE_20__.AccountEditComponent,
  canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__.authGuard]
}, {
  path: 'accounts/create',
  component: _account_account_create_account_create_component__WEBPACK_IMPORTED_MODULE_21__.AccountCreateComponent,
  canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__.authGuard]
}, {
  path: 'generic-configs',
  component: _genericconfig_generic_config_list_generic_config_list_component__WEBPACK_IMPORTED_MODULE_13__.GenericConfigListComponent,
  canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__.authGuard]
}, {
  path: 'generic-configs/create',
  component: _genericconfig_generic_config_create_generic_config_create_component__WEBPACK_IMPORTED_MODULE_14__.GenericConfigCreateComponent,
  canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__.authGuard]
}, {
  path: 'generic-configs/edit/:module/:key',
  component: _genericconfig_generic_config_edit_generic_config_edit_component__WEBPACK_IMPORTED_MODULE_15__.GenericConfigEditComponent,
  canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__.authGuard]
}, {
  path: 'email/write-us',
  component: _write_us_write_us_list_write_us_list_component__WEBPACK_IMPORTED_MODULE_6__.WriteUsListComponent,
  canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__.authGuard]
}, {
  path: 'email/write-us/:email',
  component: _write_us_write_us_write_us_component__WEBPACK_IMPORTED_MODULE_7__.WriteUsComponent,
  canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__.authGuard]
}, {
  path: 'variant-catalogs',
  component: _variant_catalog_list_variant_catalog_list_component__WEBPACK_IMPORTED_MODULE_8__.VariantCatalogListComponent,
  canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__.authGuard]
}, {
  path: 'variant-catalogs/create',
  component: _upsert_variant_catalog_upsert_variant_catalog_component__WEBPACK_IMPORTED_MODULE_9__.UpsertVariantCatalogComponent,
  canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__.authGuard]
}, {
  path: 'variant-catalogs/:paramName',
  component: _upsert_variant_catalog_upsert_variant_catalog_component__WEBPACK_IMPORTED_MODULE_9__.UpsertVariantCatalogComponent,
  canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__.authGuard]
}, {
  path: 'graph/home',
  component: _graph_home_graph_home_component__WEBPACK_IMPORTED_MODULE_10__.GraphHomeComponent,
  canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__.authGuard]
}, {
  path: 'orders',
  component: _order_order_list_order_list_component__WEBPACK_IMPORTED_MODULE_11__.OrderListComponent,
  canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__.authGuard]
}, {
  path: 'orders/view/:orderId',
  component: _order_order_view_order_view_component__WEBPACK_IMPORTED_MODULE_12__.OrderViewComponent,
  canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__.authGuard]
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_31__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_31__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_31__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_31__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _common_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/app-constants */ 9827);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _service_shared_img_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service/shared-img.service */ 7903);
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/auth.service */ 9692);
/* harmony import */ var _service_themes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/themes.service */ 4984);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var ngx_popperjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-popperjs */ 5318);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 683);
/* harmony import */ var ng_toggle_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-toggle-button */ 9502);











function AppComponent_li_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 7)(1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Login ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function AppComponent_li_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 7)(1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Categories ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", "/categories");
  }
}
function AppComponent_li_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 7)(1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Products ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", "/products");
  }
}
function AppComponent_li_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 22)(1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Configuration ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ul", 24)(4, "li")(5, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Advertisement");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "li")(8, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Bank");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "li")(11, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "li")(14, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Qr Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "li")(17, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Generic config");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", "/advertisement");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", "/bank");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", "/img");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", "/qr-code");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", "/generic-configs");
  }
}
function AppComponent_li_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 7)(1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Catalog ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", "/variant-catalogs");
  }
}
function AppComponent_li_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 7)(1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Accounts ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", "/accounts");
  }
}
function AppComponent_li_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 7)(1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Graphs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", "/graph/home");
  }
}
function AppComponent_li_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 7)(1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Orders ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", "/orders");
  }
}
function AppComponent_li_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 7)(1, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppComponent_li_21_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r12.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function AppComponent_li_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 27)(1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "fa-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("popper", _r10)("popperApplyClass", "popper-content")("popperShowOnStart", false)("popperTrigger", "hover")("popperHideOnClickOutside", true)("popperHideOnScroll", true)("popperPlacement", "bottom");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx_r9.faUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("\u00A0", ctx_r9.currentAdmin.username, "");
  }
}
function AppComponent_li_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 28)(1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "fa-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("popperApplyClass", "popper-content")("popper", "Time out")("popperTrigger", "hover")("popperPlacement", "bottom");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx_r11.faClock);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](4, 6, ctx_r11.currentAdmin.expiration, "HH:mm"), "");
  }
}
const _c0 = () => ({
  unchecked: "blue",
  checked: "darkorange"
});
class AppComponent {
  constructor(sharedService, authService, theme, route) {
    this.sharedService = sharedService;
    this.authService = authService;
    this.theme = theme;
    this.route = route;
    this.faUser = _common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.iconUser;
    this.faClock = _common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.iconClock;
    this.faEmail = _common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.iconEmail;
    this.value = true;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.authService.currentAdmin.subscribe(x => this.currentAdmin = x);
  }
  ngOnInit() {
    this.resolveThemeMarker();
    this.currentAdmin = this.authService.currentAdminValue;
  }
  logout() {
    this.authService.logout();
    this.route.navigate(['/login']);
  }
  switchTheme() {
    this.value = !this.value;
    if (this.theme.current === 'light') {
      this.theme.current = 'dark';
      this.darkTheme = 'Dark theme';
      this.sharedService.addLoginImgPath('/assets/images/user-white.png');
    } else {
      this.theme.current = 'light';
      this.darkTheme = 'Light theme';
      this.sharedService.addLoginImgPath('/assets/images/user-black.png');
    }
  }
  resolveThemeMarker() {
    if (this.theme.current === 'light') {
      this.darkTheme = 'Light theme';
      this.value = false;
      this.theme.current = 'light';
      this.sharedService.addLoginImgPath('/assets/images/user-black.png');
    } else {
      this.value = true;
      this.darkTheme = 'Dark theme';
      this.theme.current = 'dark';
      this.sharedService.addLoginImgPath('/assets/images/user-white.png');
    }
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_shared_img_service__WEBPACK_IMPORTED_MODULE_1__.SharedImgService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_themes_service__WEBPACK_IMPORTED_MODULE_3__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 34,
    vars: 19,
    consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarHome", "aria-controls", "navbarHome", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "mx-3", "mb-3"], [1, "navbar-toggler-icon"], ["id", "navbarHome", 1, "collapse", "navbar-collapse", "mx-3"], ["href", "#", 1, "navbar-brand", "brand"], ["src", "/assets/images/logo.png", "alt", "logo", 1, "img-banner"], [1, "navbar-nav", "me-auto"], [1, "nav-item"], [1, "nav-link"], [1, "me-2"], [3, "value", "color", "valueChange"], ["class", "nav-item", 4, "ngIf"], ["class", "nav-item dropdown", "id", "myDropdown", 4, "ngIf"], [1, "navbar-nav", "ms-auto"], ["class", "nav-item", 3, "popper", "popperApplyClass", "popperShowOnStart", "popperTrigger", "popperHideOnClickOutside", "popperHideOnScroll", "popperPlacement", 4, "ngIf"], ["popper1Content", ""], [1, "mb-2", "d-block"], [3, "icon"], [1, "d-block"], ["class", "nav-item", 3, "popperApplyClass", "popper", "popperTrigger", "popperPlacement", 4, "ngIf"], ["routerLinkActive", "active", "routerLink", "login", 1, "nav-link"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink"], ["id", "myDropdown", 1, "nav-item", "dropdown"], ["href", "#", "data-bs-toggle", "dropdown", 1, "nav-link", "dropdown-toggle"], [1, "dropdown-menu"], ["routerLinkActive", "active", 1, "dropdown-item", 3, "routerLink"], [1, "nav-link", 3, "click"], [1, "nav-item", 3, "popper", "popperApplyClass", "popperShowOnStart", "popperTrigger", "popperHideOnClickOutside", "popperHideOnScroll", "popperPlacement"], [1, "nav-item", 3, "popperApplyClass", "popper", "popperTrigger", "popperPlacement"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nav", 0)(1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3)(4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Admin eshop");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ul", 6)(8, "li", 7)(9, "span", 8)(10, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "ng-toggle", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("valueChange", function AppComponent_Template_ng_toggle_valueChange_12_listener() {
          return ctx.switchTheme();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, AppComponent_li_13_Template, 3, 0, "li", 11)(14, AppComponent_li_14_Template, 3, 1, "li", 11)(15, AppComponent_li_15_Template, 3, 1, "li", 11)(16, AppComponent_li_16_Template, 19, 5, "li", 12)(17, AppComponent_li_17_Template, 3, 1, "li", 11)(18, AppComponent_li_18_Template, 3, 1, "li", 11)(19, AppComponent_li_19_Template, 3, 1, "li", 11)(20, AppComponent_li_20_Template, 3, 1, "li", 11)(21, AppComponent_li_21_Template, 3, 0, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, AppComponent_li_23_Template, 4, 9, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "popper-content", null, 15)(26, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "fa-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "fa-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, AppComponent_li_32_Template, 5, 9, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "router-outlet");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.darkTheme);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx.value)("color", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](18, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.currentAdmin);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.currentAdmin);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.currentAdmin);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.currentAdmin);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.currentAdmin);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.currentAdmin);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.currentAdmin);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.currentAdmin);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.currentAdmin);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.currentAdmin);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx.faEmail);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("\u00A0\u00A0", ctx.currentAdmin == null ? null : ctx.currentAdmin.email, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx.faUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("\u00A0\u00A0", ctx.currentAdmin == null ? null : ctx.currentAdmin.role, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.currentAdmin);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkActive, ngx_popperjs__WEBPACK_IMPORTED_MODULE_8__.NgxPopperjsContentComponent, ngx_popperjs__WEBPACK_IMPORTED_MODULE_8__.NgxPopperjsDirective, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__.FaIconComponent, ng_toggle_button__WEBPACK_IMPORTED_MODULE_10__.NgToggleComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe],
    styles: [".bg-dark[_ngcontent-%COMP%] {\n  background-color: var(--color-background-nabvar)!important;\n}\n\n.navbar-dark[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:active, .navbar-dark[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:current {\n  color: var(--color-primary);\n}\n\n.navbar-dark[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: var(--color-dropdown);\n}\n\n.navbar-dark[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  color: var(--color-primary);\n}\n\n#navbarHome[_ngcontent-%COMP%]    > ul.navbar-nav.ms-auto[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  color: var(--color-link);\n  cursor: pointer;\n}\n\n#navbarHome[_ngcontent-%COMP%]    > ul.navbar-nav.ms-auto[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  color: var(--color-link-hover);\n}\n\n#myDropdown[_ngcontent-%COMP%]    > ul.navbar-nav.ms-auto[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  color: var(--color-link);\n  cursor: pointer;\n}\n\n#myDropdown[_ngcontent-%COMP%]    > ul.navbar-nav.ms-auto[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  color: var(--color-link-hover);\n}\n\n.dropdown-menu[data-bs-popper][_ngcontent-%COMP%] {\n  background: var(--color-background-dropdown) !important;\n  box-shadow: var(--color-box-shadow-primary) !important;;\n  color: var(--color-dropdown);\n}\n\n.dropdown-item[_ngcontent-%COMP%] {\n  color: var(--color-dropdown);\n}\n\n.dropdown-item[_ngcontent-%COMP%]:hover {\n  color: var(--color-primary);\n  background: var(--color-background-dropdown);\n}\n\n.dropdown-item.active[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  background: var(--color-background-dropdown);\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsMERBQTBEO0FBQzVEOztBQUVBOztFQUVFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSx1REFBdUQ7RUFDdkQsc0RBQXNEO0VBQ3RELDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQiw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsNENBQTRDO0FBQzlDIiwic291cmNlc0NvbnRlbnQiOlsiXG4uYmctZGFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJhY2tncm91bmQtbmFidmFyKSFpbXBvcnRhbnQ7XG59XG5cbi5uYXZiYXItZGFyayAubmF2YmFyLW5hdiAubmF2LWxpbms6YWN0aXZlLFxuLm5hdmJhci1kYXJrIC5uYXZiYXItbmF2IC5uYXYtbGluazpjdXJyZW50IHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xufVxuXG4ubmF2YmFyLWRhcmsgLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWRyb3Bkb3duKTtcbn1cblxuLm5hdmJhci1kYXJrIC5uYXZiYXItbmF2IC5uYXYtbGluazpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbn1cblxuI25hdmJhckhvbWUgPiB1bC5uYXZiYXItbmF2Lm1zLWF1dG8gPiBsaSA+IGEge1xuICBjb2xvcjogdmFyKC0tY29sb3ItbGluayk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI25hdmJhckhvbWUgPiB1bC5uYXZiYXItbmF2Lm1zLWF1dG8gPiBsaSA+IGE6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tY29sb3ItbGluay1ob3Zlcik7XG59XG5cbiNteURyb3Bkb3duID4gdWwubmF2YmFyLW5hdi5tcy1hdXRvID4gbGkgPiBhIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWxpbmspO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNteURyb3Bkb3duID4gdWwubmF2YmFyLW5hdi5tcy1hdXRvID4gbGkgPiBhOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWxpbmstaG92ZXIpO1xufVxuXG4uZHJvcGRvd24tbWVudVtkYXRhLWJzLXBvcHBlcl0ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1iYWNrZ3JvdW5kLWRyb3Bkb3duKSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiB2YXIoLS1jb2xvci1ib3gtc2hhZG93LXByaW1hcnkpICFpbXBvcnRhbnQ7O1xuICBjb2xvcjogdmFyKC0tY29sb3ItZHJvcGRvd24pO1xufVxuXG4uZHJvcGRvd24taXRlbSB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1kcm9wZG93bik7XG59XG5cbi5kcm9wZG93bi1pdGVtOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1iYWNrZ3JvdW5kLWRyb3Bkb3duKTtcbn1cblxuLmRyb3Bkb3duLWl0ZW0uYWN0aXZlIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1iYWNrZ3JvdW5kLWRyb3Bkb3duKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ 6459);
/* harmony import */ var _validator_isbn_validator_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validator/isbn-validator.directive */ 8901);
/* harmony import */ var _validator_price_validator_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./validator/price-validator.directive */ 8173);
/* harmony import */ var _validator_url_validator_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./validator/url-validator.directive */ 7438);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ 2014);
/* harmony import */ var _interceptor_auth_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./interceptor/auth.interceptor */ 3061);
/* harmony import */ var _interceptor_error_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./interceptor/error.interceptor */ 5096);
/* harmony import */ var _navigation_back_button_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navigation/back-button.directive */ 934);
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @kolkov/angular-editor */ 6070);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ngx-spinner */ 8375);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ngx-toastr */ 7548);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 683);
/* harmony import */ var _password_change_password_change_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./password-change/password-change.component */ 1933);
/* harmony import */ var _validator_password_pattern_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./validator/password-pattern.directive */ 5380);
/* harmony import */ var _validator_password_matcher_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./validator/password-matcher.directive */ 159);
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ 3903);
/* harmony import */ var _service_themes_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./service/themes.service */ 4984);
/* harmony import */ var ng_toggle_button__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ng-toggle-button */ 9502);
/* harmony import */ var _qr_qr_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./qr/qr.component */ 7155);
/* harmony import */ var _write_us_write_us_list_write_us_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./write-us/write-us-list/write-us-list.component */ 1801);
/* harmony import */ var _write_us_write_us_write_us_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./write-us/write-us/write-us.component */ 3237);
/* harmony import */ var _variant_catalog_list_variant_catalog_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./variant-catalog-list/variant-catalog-list.component */ 9931);
/* harmony import */ var _upsert_variant_catalog_upsert_variant_catalog_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./upsert-variant-catalog/upsert-variant-catalog.component */ 2690);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var ngx_popperjs__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ngx-popperjs */ 5318);
/* harmony import */ var _graph_home_graph_home_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./graph-home/graph-home.component */ 6889);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @swimlane/ngx-charts */ 8278);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shared/shared.module */ 6208);
/* harmony import */ var _order_order_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./order/order.module */ 2208);
/* harmony import */ var _genericconfig_generic_config_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./genericconfig/generic-config.module */ 3577);
/* harmony import */ var _category_category_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./category/category.module */ 3370);
/* harmony import */ var _account_account_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./account/account.module */ 1995);
/* harmony import */ var _product_product_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./product/product.module */ 6848);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/core */ 1699);










































class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineInjector"]({
    providers: [_interceptor_auth_interceptor__WEBPACK_IMPORTED_MODULE_7__.authInterceptorProviders, _interceptor_error_interceptor__WEBPACK_IMPORTED_MODULE_8__.errorInterceptorProviders, _service_themes_service__WEBPACK_IMPORTED_MODULE_14__.ThemeService],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_28__.CommonModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_29__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_30__.BrowserAnimationsModule, ngx_popperjs__WEBPACK_IMPORTED_MODULE_31__.NgxPopperjsModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_32__.NgxSpinnerModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_33__.FontAwesomeModule, _angular_forms__WEBPACK_IMPORTED_MODULE_34__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_35__.HttpClientModule, _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_36__.AngularEditorModule, ng_toggle_button__WEBPACK_IMPORTED_MODULE_37__.NgToggleModule.forRoot(), ngx_toastr__WEBPACK_IMPORTED_MODULE_38__.ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      progressBar: true,
      progressAnimation: 'increasing'
    }), _angular_forms__WEBPACK_IMPORTED_MODULE_34__.ReactiveFormsModule, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_39__.NgxChartsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_21__.SharedModule, _product_product_module__WEBPACK_IMPORTED_MODULE_26__.ProductModule, _account_account_module__WEBPACK_IMPORTED_MODULE_25__.AccountModule, _genericconfig_generic_config_module__WEBPACK_IMPORTED_MODULE_23__.GenericConfigModule, _category_category_module__WEBPACK_IMPORTED_MODULE_24__.CategoryModule, _order_order_module__WEBPACK_IMPORTED_MODULE_22__.OrderModule, _angular_common__WEBPACK_IMPORTED_MODULE_28__.CommonModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_33__.FontAwesomeModule, ng_toggle_button__WEBPACK_IMPORTED_MODULE_37__.NgToggleModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent, _validator_password_matcher_directive__WEBPACK_IMPORTED_MODULE_12__.PasswordMatcherDirective, _validator_password_pattern_directive__WEBPACK_IMPORTED_MODULE_11__.PasswordPatternDirective, _validator_isbn_validator_directive__WEBPACK_IMPORTED_MODULE_3__.IsbnValidatorDirective, _validator_price_validator_directive__WEBPACK_IMPORTED_MODULE_4__.PriceValidatorDirective, _validator_url_validator_directive__WEBPACK_IMPORTED_MODULE_5__.UrlValidatorDirective, _login_login_component__WEBPACK_IMPORTED_MODULE_6__.LoginComponent, _navigation_back_button_directive__WEBPACK_IMPORTED_MODULE_9__.BackButtonDirective, _password_change_password_change_component__WEBPACK_IMPORTED_MODULE_10__.PasswordChangeComponent, _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_13__.ForgotPasswordComponent, _qr_qr_component__WEBPACK_IMPORTED_MODULE_15__.QrComponent, _write_us_write_us_list_write_us_list_component__WEBPACK_IMPORTED_MODULE_16__.WriteUsListComponent, _write_us_write_us_write_us_component__WEBPACK_IMPORTED_MODULE_17__.WriteUsComponent, _variant_catalog_list_variant_catalog_list_component__WEBPACK_IMPORTED_MODULE_18__.VariantCatalogListComponent, _upsert_variant_catalog_upsert_variant_catalog_component__WEBPACK_IMPORTED_MODULE_19__.UpsertVariantCatalogComponent, _graph_home_graph_home_component__WEBPACK_IMPORTED_MODULE_20__.GraphHomeComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_28__.CommonModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_29__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_30__.BrowserAnimationsModule, ngx_popperjs__WEBPACK_IMPORTED_MODULE_31__.NgxPopperjsModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_32__.NgxSpinnerModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_33__.FontAwesomeModule, _angular_forms__WEBPACK_IMPORTED_MODULE_34__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_35__.HttpClientModule, _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_36__.AngularEditorModule, ng_toggle_button__WEBPACK_IMPORTED_MODULE_37__.NgToggleModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_38__.ToastrModule, _angular_forms__WEBPACK_IMPORTED_MODULE_34__.ReactiveFormsModule, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_39__.NgxChartsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_21__.SharedModule, _product_product_module__WEBPACK_IMPORTED_MODULE_26__.ProductModule, _account_account_module__WEBPACK_IMPORTED_MODULE_25__.AccountModule, _genericconfig_generic_config_module__WEBPACK_IMPORTED_MODULE_23__.GenericConfigModule, _category_category_module__WEBPACK_IMPORTED_MODULE_24__.CategoryModule, _order_order_module__WEBPACK_IMPORTED_MODULE_22__.OrderModule, _angular_common__WEBPACK_IMPORTED_MODULE_28__.NgOptimizedImage],
    exports: [_angular_common__WEBPACK_IMPORTED_MODULE_28__.CommonModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_33__.FontAwesomeModule, ng_toggle_button__WEBPACK_IMPORTED_MODULE_37__.NgToggleModule]
  });
})();

/***/ }),

/***/ 2695:
/*!*******************************!*\
  !*** ./src/app/auth-guard.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authGuard: () => (/* binding */ authGuard),
/* harmony export */   canActivateChild: () => (/* binding */ canActivateChild)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _service_token_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service/token-storage.service */ 2981);
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service/auth.service */ 9692);
// auth.guard.ts




const authGuard = (route, state) => {
  const authService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_service_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService);
  const router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router);
  const tokenStorage = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_service_token_storage_service__WEBPACK_IMPORTED_MODULE_0__.TokenStorageService);
  console.log('Call auth guard');
  if (tokenStorage.isExpired()) {
    authService.logout();
    window.alert('You don\'t have permission to view this page');
    router.navigate(['/login']).then(r => r);
    return false;
  }
  return true;
};
const canActivateChild = (route, state) => authGuard(route, state);

/***/ }),

/***/ 7480:
/*!*******************************************************************!*\
  !*** ./src/app/category/category-list/category-list.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoryListComponent: () => (/* binding */ CategoryListComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 274);
/* harmony import */ var _common_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/app-constants */ 9827);
/* harmony import */ var _model_error_error_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/error/error-dto */ 3990);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _service_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/category.service */ 4206);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ 8375);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ 7548);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 683);
/* harmony import */ var _shared_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/error.component */ 6333);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 7947);












const _c0 = a1 => ["/categories/view/", a1];
const _c1 = () => ["/categories/upsert"];
const _c2 = a0 => ({
  categoryUrl: a0
});
function CategoryListComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 15)(1, "div", 16)(2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "fa-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 25)(16, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "fa-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 28)(19, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CategoryListComponent_div_22_Template_button_click_19_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const category_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.removeCategory(category_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "fa-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const category_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](9, _c0, category_r1.url));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx_r0.faEye);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", category_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](category_r1.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](category_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](11, _c1))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](12, _c2, category_r1.url));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx_r0.faEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx_r0.faTrash);
  }
}
class CategoryListComponent {
  constructor(categoryService, spinner, toastr) {
    this.categoryService = categoryService;
    this.spinner = spinner;
    this.toastr = toastr;
    this.categories = [];
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.faTrash = _common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.iconTrash;
    this.faEdit = _common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.iconEdit;
    this.faEye = _common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.iconEye;
    this.faBan = _common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.iconBan;
    this.errorDto = new _model_error_error_dto__WEBPACK_IMPORTED_MODULE_1__.ErrorDto();
  }
  ngOnInit() {
    this.getCategories();
  }
  getCategories() {
    this.spinner.show().then(r => r);
    this.categoryService.getCategories(this.errorDto).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroy$)).subscribe({
      next: categoriesResponse => {
        this.spinner.hide().then(r => r);
        this.categories = categoriesResponse.data;
      },
      error: () => {
        this.spinner.hide().then(() => this.toastr.error(this.errorDto.httpStatus + ' load categories failed', 'Category'));
      }
    });
  }
  removeCategory(category) {
    if (!confirm('Are you sure to delete category' + category.name + '?')) {
      return;
    }
    this.spinner.show().then(r => r);
    this.categoryService.deleteCategory(category, this.errorDto).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroy$)).subscribe({
      next: () => {
        this.spinner.hide().then(() => {
          this.toastr.info('Category ' + category.url + ' deleted', 'Category');
          this.categories = this.categories.filter(data => data.url !== category.url);
        });
      },
      error: () => {
        this.spinner.hide().then(() => this.toastr.error(this.errorDto.httpStatus + ' delete failed', 'Category'));
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  static #_ = this.ɵfac = function CategoryListComponent_Factory(t) {
    return new (t || CategoryListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_category_service__WEBPACK_IMPORTED_MODULE_2__.CategoryService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_7__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: CategoryListComponent,
    selectors: [["app-category-list"]],
    decls: 26,
    vars: 4,
    consts: [[1, "box"], [1, "row", "justify-content-center"], [1, "col-lg-6", "col-md-8", "col-sm-10", "align-self-center"], [1, "box-part", "text-center"], [1, "row", "text-center"], [1, "input-group", "d-none", "d-sm-inline-flex"], [1, "col-12", "col-sm-3"], [1, "text-darkorange"], [1, "col-12", "col-sm-4"], [1, "col-12", "col-sm-1"], [1, "text-darkorange", 3, "icon"], ["bdColor", "rgba(51,51,51,0.8)", "size", "medium", "color", "#fff", "type", "ball-spin-clockwise"], ["class", "row link text-center text-md-start", 4, "ngFor", "ngForOf"], [3, "errorDto"], ["routerLinkActive", "active", "routerLink", "/categories/upsert", 1, "btn", "btn-primary", "mt-4", "text-center"], [1, "row", "link", "text-center", "text-md-start"], [1, "input-group", "border-bottom", "py-2"], ["data-label", "Name", 1, "d-inline-block", "m-2", "text-orange", "d-sm-none"], ["routerLinkActive", "active", 1, "d-inline-block", "m-2", "text-white", "pointer", 3, "routerLink"], [1, "mx-2", 3, "icon"], [1, "col-12", "col-sm-3", "text-white"], ["data-label", "Url", 1, "d-inline-block", "m-2", "text-orange", "d-sm-none"], [1, "d-inline-block", "m-2", "text-white"], ["data-label", "Description", 1, "d-inline-block", "m-2", "text-orange", "d-sm-none"], [1, "d-inline-block", "m-2", "text-white", "overflow"], [1, "col-12", "col-sm-1", "my-auto"], ["routerLinkActive", "active", 1, "btn", "btn-info", "mt-1", 3, "routerLink", "queryParams"], [3, "icon"], [1, "col-12", "col-sm-1", "my-auto", "text-center"], [1, "btn", "btn-danger", "mt-1", 3, "click"]],
    template: function CategoryListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 6)(12, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Url");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 8)(15, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "fa-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "fa-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "ngx-spinner", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, CategoryListComponent_div_22_Template, 21, 14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "app-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Add category ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx.faEdit);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx.faTrash);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("errorDto", ctx.errorDto);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__.FaIconComponent, _shared_error_component__WEBPACK_IMPORTED_MODULE_3__.ErrorComponent, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink, ngx_spinner__WEBPACK_IMPORTED_MODULE_7__.NgxSpinnerComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 3749:
/*!***********************************************************************!*\
  !*** ./src/app/category/category-upsert/category-upsert.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoryUpsertComponent: () => (/* binding */ CategoryUpsertComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 274);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var _model_category_category__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../model/category/category */ 4257);
/* harmony import */ var _common_app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/app-constants */ 9827);
/* harmony import */ var _model_error_error_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/error/error-dto */ 3990);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _service_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/category.service */ 4206);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ 8375);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ 7548);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 683);
/* harmony import */ var _shared_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/error.component */ 6333);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 8849);














function CategoryUpsertComponent_div_13_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CategoryUpsertComponent_div_13_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Name must be at least 4 characters long.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CategoryUpsertComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CategoryUpsertComponent_div_13_div_1_Template, 2, 0, "div", 24)(2, CategoryUpsertComponent_div_13_div_2_Template, 2, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r1.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r1.errors.minlength);
  }
}
function CategoryUpsertComponent_div_20_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Url is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CategoryUpsertComponent_div_20_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Url must be valid");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CategoryUpsertComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CategoryUpsertComponent_div_20_div_1_Template, 2, 0, "div", 24)(2, CategoryUpsertComponent_div_20_div_2_Template, 2, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r3.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r3.errors.isInvalidUrl && !_r3.errors.required);
  }
}
function CategoryUpsertComponent_div_26_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Description must be at least 12 characters long. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CategoryUpsertComponent_div_26_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Description must be maximum least 60 characters long. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CategoryUpsertComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CategoryUpsertComponent_div_26_div_1_Template, 2, 0, "div", 24)(2, CategoryUpsertComponent_div_26_div_2_Template, 2, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r5.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r5.errors.minlength);
  }
}
class CategoryUpsertComponent {
  constructor(categoryService, route, actRoute, spinner, toastr) {
    this.categoryService = categoryService;
    this.route = route;
    this.actRoute = actRoute;
    this.spinner = spinner;
    this.toastr = toastr;
    this.selectedCategory = new _model_category_category__WEBPACK_IMPORTED_MODULE_0__.Category();
    this.faArrowLeft = _common_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.iconArrowLeft;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    this.errorDto = new _model_error_error_dto__WEBPACK_IMPORTED_MODULE_2__.ErrorDto();
    this.operation = "Create";
  }
  ngOnInit() {
    this.actRoute.queryParamMap.subscribe(params => {
      this.selectedOriginalCategoryUrl = params.get('categoryUrl');
      if (!this.selectedOriginalCategoryUrl) {
        this.operation = "Create";
      } else {
        this.operation = "Update";
      }
      this.loadCategory();
    });
  }
  loadCategory() {
    if (this.operation == "Update") {
      this.getCategory();
    }
  }
  getCategory() {
    this.spinner.show().then(r => r);
    this.categoryService.getCategory(this.selectedOriginalCategoryUrl, this.errorDto).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$)).subscribe({
      next: categories => {
        this.spinner.hide().then(r => r);
        this.selectedCategory = categories.data;
        this.operation = "Update";
      },
      error: () => {
        this.spinner.hide().then(r => {
          this.operation = "Create";
          this.toastr.error(this.errorDto.httpStatus + ' load categories failed', 'Category');
        });
      }
    });
  }
  upsertCategory() {
    if (this.operation == "Create") {
      this.createCategory();
    } else {
      this.updateCategory();
    }
  }
  updateCategory() {
    this.spinner.show().then(r => r);
    this.categoryService.updateCategory(this.selectedCategory, this.selectedOriginalCategoryUrl, this.errorDto).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$)).subscribe({
      next: () => {
        this.spinner.hide().then(() => {
          this.toastr.success(' Category updated', 'Account');
          setTimeout(() => {
            this.route.navigate(['/categories/view/', this.selectedCategory.url]).then(r => r);
          }, _common_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.toastSuccessDelay);
        });
      },
      error: () => {
        this.spinner.hide().then(() => this.toastr.error(this.errorDto.httpStatus + ' update failed', 'Category'));
      }
    });
  }
  createCategory() {
    this.spinner.show().then(r => r);
    this.categoryService.createCategory(this.selectedCategory, this.errorDto).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$)).subscribe({
      next: () => {
        this.spinner.hide().then(() => {
          this.toastr.success('Category ' + this.selectedCategory.url + ' inserted', 'Category');
          setTimeout(() => {
            this.route.navigate(['/categories/view/', this.selectedCategory.url]).then(r => r);
          }, _common_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.toastSuccessDelay);
        });
      },
      error: () => {
        this.spinner.hide().then(() => this.toastr.error(this.errorDto.httpStatus + ' Category failed!', 'Category'));
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  static #_ = this.ɵfac = function CategoryUpsertComponent_Factory(t) {
    return new (t || CategoryUpsertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_service_category_service__WEBPACK_IMPORTED_MODULE_3__.CategoryService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_9__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_10__.ToastrService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: CategoryUpsertComponent,
    selectors: [["app-category-edited"]],
    decls: 34,
    vars: 10,
    consts: [[1, "box"], [1, "row", "justify-content-center"], [1, "col-lg-4", "col-sm-8", "align-self-center"], [1, "box-part", "text-center"], ["novalidate", "", 3, "ngSubmit"], ["upsertCategoryForm", "ngForm"], [1, "mb-3"], ["for", "category-edit-name", 1, "form-label"], ["id", "category-edit-name", "name", "catName", "type", "text", "placeholder", "required", "required", "", "minlength", "4", 1, "form-control", 3, "ngModel", "ngModelChange"], ["catName", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], ["bdColor", "rgba(51,51,51,0.8)", "size", "medium", "color", "#fff", "type", "ball-spin-clockwise"], ["for", "category-edit-url", 1, "form-label"], ["id", "category-edit-url", "name", "url", "type", "text", "placeholder", "required", "required", "", "appUrlValidator", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["url", "ngModel"], ["for", "category-edit-description", 1, "form-label"], ["id", "category-edit-description", "name", "description", "maxlength", "60", "minlength", "12", 1, "form-control", 3, "ngModel", "ngModelChange"], ["description", "ngModel"], [3, "errorDto"], [1, "col-auto", "mb-3"], ["type", "submit", 1, "btn", "btn-primary", "mx-3", "mx-sm-5"], ["type", "button", "appBackButton", "", 1, "btn", "btn-danger", "mx-3", "mx-sm-5"], [3, "icon"], [1, "alert", "alert-danger"], [4, "ngIf"]],
    template: function CategoryUpsertComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "form", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function CategoryUpsertComponent_Template_form_ngSubmit_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](5);
          return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](_r0.valid && ctx.upsertCategory());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 6)(9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function CategoryUpsertComponent_Template_input_ngModelChange_11_listener($event) {
          return ctx.selectedCategory.name = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, CategoryUpsertComponent_div_13_Template, 3, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "ngx-spinner", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 6)(16, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Url");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "input", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function CategoryUpsertComponent_Template_input_ngModelChange_18_listener($event) {
          return ctx.selectedCategory.url = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, CategoryUpsertComponent_div_20_Template, 3, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 6)(22, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "textarea", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function CategoryUpsertComponent_Template_textarea_ngModelChange_24_listener($event) {
          return ctx.selectedCategory.description = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, CategoryUpsertComponent_div_26_Template, 3, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "app-error", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 19)(29, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](32, "fa-icon", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "\u00A0Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](5);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](12);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](19);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx.operation, " category");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.selectedCategory.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r0.submitted && _r1.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.selectedCategory.url);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r0.submitted && _r3.invalid && (_r3.dirty || _r3.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.selectedCategory.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r0.submitted && _r5.invalid && (_r5.dirty || _r5.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("errorDto", ctx.errorDto);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.operation);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", ctx.faArrowLeft);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__.FaIconComponent, _shared_error_component__WEBPACK_IMPORTED_MODULE_4__.ErrorComponent, ngx_spinner__WEBPACK_IMPORTED_MODULE_9__.NgxSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgForm],
    encapsulation: 2
  });
}

/***/ }),

/***/ 6130:
/*!*******************************************************************!*\
  !*** ./src/app/category/category-view/category-view.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoryViewComponent: () => (/* binding */ CategoryViewComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 274);
/* harmony import */ var _model_category_category__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../model/category/category */ 4257);
/* harmony import */ var _common_app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/app-constants */ 9827);
/* harmony import */ var _model_error_error_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/error/error-dto */ 3990);
/* harmony import */ var _model_audit_audit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/audit/audit */ 5201);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _service_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/category.service */ 4206);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ 8375);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ 7548);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 683);
/* harmony import */ var _shared_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/error.component */ 6333);
/* harmony import */ var _shared_audit_audit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/audit/audit.component */ 887);















function CategoryViewComponent_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "fa-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "\u00A0\u00A0\u00A0Empty description!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", ctx_r0.faThrash);
  }
}
function CategoryViewComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 17)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.selectedCategory.description);
  }
}
const _c0 = () => ["/categories/upsert"];
const _c1 = a0 => ({
  categoryUrl: a0
});
class CategoryViewComponent {
  constructor(categoryService, route, actRoute, spinner, toastr) {
    this.categoryService = categoryService;
    this.route = route;
    this.actRoute = actRoute;
    this.spinner = spinner;
    this.toastr = toastr;
    this.selectedCategory = new _model_category_category__WEBPACK_IMPORTED_MODULE_0__.Category();
    this.auditCategory = new _model_audit_audit__WEBPACK_IMPORTED_MODULE_3__.Audit();
    this.faEdit = _common_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.iconEdit;
    this.faThrash = _common_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.iconTrash;
    this.faCalendar = _common_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.iconCalendar;
    this.faUser = _common_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.iconUser;
    this.faEye = _common_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.iconEye;
    this.faArrowLeft = _common_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.iconArrowLeft;
    this.errorDto = new _model_error_error_dto__WEBPACK_IMPORTED_MODULE_2__.ErrorDto();
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
  }
  ngOnInit() {
    this.spinner.show().then(r => r);
    this.actRoute.paramMap.subscribe(params => {
      this.selectedOriginalCategoryUrl = params.get('categoryUrl');
    });
    this.categoryService.getCategory(this.selectedOriginalCategoryUrl, this.errorDto).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe({
      next: categoryResponse => {
        this.spinner.hide().then(() => this.toastr.info('Category ' + this.selectedOriginalCategoryUrl + ' loaded', 'Category'));
        this.selectedCategory = categoryResponse.data;
        this.auditCategory = categoryResponse.audit;
      },
      error: () => {
        this.spinner.hide().then(() => this.toastr.error(this.errorDto + ' failed', 'Category'));
        this.selectedCategory = new _model_category_category__WEBPACK_IMPORTED_MODULE_0__.Category();
        this.auditCategory = new _model_audit_audit__WEBPACK_IMPORTED_MODULE_3__.Audit();
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  static #_ = this.ɵfac = function CategoryViewComponent_Factory(t) {
    return new (t || CategoryViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_service_category_service__WEBPACK_IMPORTED_MODULE_4__.CategoryService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_11__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_12__.ToastrService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: CategoryViewComponent,
    selectors: [["app-category-view"]],
    decls: 24,
    vars: 13,
    consts: [[1, "box"], [1, "row", "justify-content-center"], [1, "col-lg-4", "col-sm-8", "align-self-center"], [1, "box-part", "text-center", "text-white"], [1, "mb-3"], [1, "pointer", 3, "routerLink", "queryParams"], [1, "url", 3, "icon"], ["bdColor", "rgba(51,51,51,0.8)", "size", "medium", "color", "#fff", "type", "ball-spin-clockwise"], [1, "mb-3", "mx-3"], ["class", "trash", 4, "ngIf"], [1, "text-center"], ["class", "content", 4, "ngIf"], [3, "audit"], [3, "errorDto"], ["type", "button", "appBackButton", "", 1, "btn", "btn-danger"], [3, "icon"], [1, "trash"], [1, "content"]],
    template: function CategoryViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Category Detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 4)(10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "ngx-spinner", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, CategoryViewComponent_span_15_Template, 3, 1, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, " Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, CategoryViewComponent_div_18_Template, 3, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](19, "app-audit", 12)(20, "app-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](22, "fa-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "\u00A0Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("name: ", ctx.selectedCategory.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](10, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](11, _c1, ctx.selectedOriginalCategoryUrl));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", ctx.faEdit);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\u00A0", ctx.selectedOriginalCategoryUrl, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.selectedCategory.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.selectedCategory.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("audit", ctx.auditCategory);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("errorDto", ctx.errorDto);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", ctx.faArrowLeft);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__.FaIconComponent, _shared_error_component__WEBPACK_IMPORTED_MODULE_5__.ErrorComponent, _shared_audit_audit_component__WEBPACK_IMPORTED_MODULE_6__.AuditComponent, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink, ngx_spinner__WEBPACK_IMPORTED_MODULE_11__.NgxSpinnerComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 3370:
/*!*********************************************!*\
  !*** ./src/app/category/category.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoryModule: () => (/* binding */ CategoryModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _category_view_category_view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category-view/category-view.component */ 6130);
/* harmony import */ var _category_upsert_category_upsert_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category-upsert/category-upsert.component */ 3749);
/* harmony import */ var _category_list_category_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category-list/category-list.component */ 7480);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 683);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ 6208);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ 8375);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);










class CategoryModule {
  static #_ = this.ɵfac = function CategoryModule_Factory(t) {
    return new (t || CategoryModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: CategoryModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FaIconComponent, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_7__.NgxSpinnerModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CategoryModule, {
    declarations: [_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_2__.CategoryListComponent, _category_upsert_category_upsert_component__WEBPACK_IMPORTED_MODULE_1__.CategoryUpsertComponent, _category_view_category_view_component__WEBPACK_IMPORTED_MODULE_0__.CategoryViewComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FaIconComponent, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, ngx_spinner__WEBPACK_IMPORTED_MODULE_7__.NgxSpinnerModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule]
  });
})();

/***/ }),

/***/ 4107:
/*!*********************************************************!*\
  !*** ./src/app/common/abstract/base-image-component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseImageComponent: () => (/* binding */ BaseImageComponent)
/* harmony export */ });
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app-constants */ 9827);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 274);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var _model_error_error_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/error/error-dto */ 3990);
/* harmony import */ var _model_generic_config_generic_config_key_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/generic-config/generic-config-key-dto */ 975);





var ModuleEnum = _model_generic_config_generic_config_key_dto__WEBPACK_IMPORTED_MODULE_2__.GenericConfigKeyDto.ModuleEnum;
class BaseImageComponent {
  constructor(spinner, toastr, router, productService, genericConfigService, call) {
    this.spinner = spinner;
    this.toastr = toastr;
    this.router = router;
    this.productService = productService;
    this.genericConfigService = genericConfigService;
    this.call = call;
    this.imgErrorDto = new _model_error_error_dto__WEBPACK_IMPORTED_MODULE_1__.ErrorDto();
    this.maxSize = 0;
    this.maxDimension = 0;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    if (call) {
      this.getConfiguration();
    }
  }
  upsertProductImage(productUrl, errorDto) {
    if (this.selectedFile == null || productUrl == null) {
      this.toastr.success('Product updated');
      return;
    }
    this.spinner.show().then(r => r);
    this.productService.updateProductImage(this.selectedFile, productUrl, errorDto).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$)).subscribe({
      next: () => {
        this.spinner.hide().then(() => {
          this.selectedFile = null;
          this.toastr.success(productUrl + 'Product with image updated', 'Product');
          setTimeout(() => {
            this.router.navigate(['/products']).then(r => r);
          }, _app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.toastSuccessDelay);
        });
      },
      error: () => {
        this.spinner.hide().then(() => {
          this.toastr.error(errorDto.httpStatus + 'image upsert failed', 'Product');
        });
      }
    });
  }
  getConfiguration() {
    this.genericConfigService.getGenericConfigs(ModuleEnum.FRONTEND_ADMIN, this.imgErrorDto).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$)).subscribe({
      next: configurationDto => {
        console.log('Configuration GET called successful', this.maxSize, this.maxDimension);
        this.maxSize = Number(configurationDto.data.filter(data => data.key.name == "IMG_SIZE")[0].value);
        this.maxDimension = Number(configurationDto.data.filter(data => data.key.name == "IMG_DIMENSION")[0].value);
        this.imgErrorDto = new _model_error_error_dto__WEBPACK_IMPORTED_MODULE_1__.ErrorDto();
        this.toastr.info(this.maxSize + ' x ' + this.maxDimension + '  maxSize x Dimension set', 'Product');
      },
      error: () => {
        this.toastr.error('Get configuration for image failed', 'Product');
      }
    });
  }
}

/***/ }),

/***/ 3094:
/*!*************************************************!*\
  !*** ./src/app/common/abstract/base-service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseService: () => (/* binding */ BaseService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 3252);

const friendlyHttpStatus = {
  0: 'Server side unavailable',
  200: 'OK',
  201: 'Created',
  202: 'Accepted',
  203: 'Non-Authoritative Information',
  204: 'No Content',
  205: 'Reset Content',
  206: 'Partial Content',
  300: 'Multiple Choices',
  301: 'Moved Permanently',
  302: 'Found',
  303: 'See Other',
  304: 'Not Modified',
  305: 'Use Proxy',
  306: 'Unused',
  307: 'Temporary Redirect',
  400: 'Bad Request',
  401: 'Unauthorized',
  402: 'Payment Required',
  403: 'Forbidden',
  404: 'Not Found',
  405: 'Method Not Allowed',
  406: 'Not Acceptable',
  407: 'Proxy Authentication Required',
  408: 'Request Timeout',
  409: 'Conflict',
  410: 'Gone',
  411: 'Length Required',
  412: 'Precondition Required',
  413: 'Request Entry Too Large',
  414: 'Request-URI Too Long',
  415: 'Unsupported Media Type',
  416: 'Requested Range Not Satisfiable',
  417: 'Expectation Failed',
  500: 'Internal Server Error',
  501: 'Not Implemented',
  502: 'Bad Gateway',
  503: 'Service Unavailable',
  504: 'Gateway Timeout',
  505: 'HTTP Version Not Supported'
};
class BaseService {
  constructor() {}
  handleError(error, errorDto) {
    errorDto.httpStatus = error.status == 0 ? 500 : error.status;
    errorDto.httpStatusMessage = friendlyHttpStatus[errorDto.httpStatus];
    errorDto.errorMessage = error.status == 0 ? 'Server site unavailable' : error.error.message;
    console.error(error);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.throwError)(() => error);
  }
  addParamIntoUrl(url, parameter) {
    return url + '/' + parameter;
  }
}

/***/ }),

/***/ 9827:
/*!*****************************************!*\
  !*** ./src/app/common/app-constants.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppConstants: () => (/* binding */ AppConstants)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9985);


class AppConstants {
  static #_ = this.iconUser = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faUser;
  static #_2 = this.iconInfo = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faInfoCircle;
  static #_3 = this.iconLock = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faLock;
  static #_4 = this.iconArrowLeft = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faArrowLeft;
  static #_5 = this.iconArrowDown = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faArrowDown;
  static #_6 = this.iconArrowUp = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faArrowUp;
  static #_7 = this.iconUpload = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faUpload;
  static #_8 = this.iconTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faTrash;
  static #_9 = this.iconEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faEdit;
  static #_10 = this.iconEye = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faEye;
  static #_11 = this.iconCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faCircle;
  static #_12 = this.iconBan = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faBan;
  static #_13 = this.iconPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faPlus;
  static #_14 = this.iconBars = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faBars;
  static #_15 = this.iconAddressCard = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faAddressCard;
  static #_16 = this.iconClock = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faClock;
  static #_17 = this.iconMoney = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faMoneyCheckDollar;
  static #_18 = this.iconBook = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faBook;
  static #_19 = this.iconCalendar = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faCalendar;
  static #_20 = this.iconEmail = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faEnvelope;
  static #_21 = this.iconGear = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faGear;
  static #_22 = this.iconDelete = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faDeleteLeft;
  static #_23 = this.iconYes = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faCheck;
  static #_24 = this.iconNo = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faXmark;
  static #_25 = this.toastSuccessDelay = 2100;
  static #_26 = this.iconInfof = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faInfo;
  static get baseUrl() {
    return 'https://waldashop.herokuapp.com';
    //return 'http://localhost:8080';
  }

  static get acceptJson() {
    return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Accept', 'application/json');
  }
  static get contentTypeAndAcceptJson() {
    return this.acceptJson.set('Content-Type', 'application/json');
  }
  static get emptyDefaultImage() {
    return '/assets/images/empty-product.png';
  }
}

/***/ }),

/***/ 3903:
/*!**************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForgotPasswordComponent: () => (/* binding */ ForgotPasswordComponent)
/* harmony export */ });
/* harmony import */ var _model_error_error_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/error/error-dto */ 3990);
/* harmony import */ var _common_app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/app-constants */ 9827);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _service_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/account.service */ 1522);
/* harmony import */ var _service_shared_img_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/shared-img.service */ 7903);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ 8375);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ 7548);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 8849);













function ForgotPasswordComponent_div_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Email is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ForgotPasswordComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ForgotPasswordComponent_div_14_div_1_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r1.errors.required);
  }
}
function ForgotPasswordComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r3.errorDto.httpStatusMessage, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r3.errorDto.errorMessage, " ");
  }
}
class ForgotPasswordComponent {
  constructor(accountService, sharedImgService, route, spinner, toastr) {
    this.accountService = accountService;
    this.sharedImgService = sharedImgService;
    this.route = route;
    this.spinner = spinner;
    this.toastr = toastr;
    this.errorDto = new _model_error_error_dto__WEBPACK_IMPORTED_MODULE_0__.ErrorDto();
    this.faUser = _common_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.iconUser;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
  }
  ngOnInit() {
    this.sharedImgService.currentImgPath.subscribe(data => this.currentImgPath = data);
  }
  forgotPassword() {
    this.spinner.show('refreshPasswordSpinner').then(r => r);
    this.accountService.passwordRecovery(this.email, this.errorDto).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroy$)).subscribe({
      next: () => {
        this.spinner.hide('accountSpinner').then(() => {
          this.toastr.success('Email send', 'Activation');
          this.route.navigate(['/login']).then(r => r);
        });
      },
      error: () => {
        this.toastr.error(this.errorDto.httpStatus + ' sending email failed', 'Login');
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  static #_ = this.ɵfac = function ForgotPasswordComponent_Factory(t) {
    return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_account_service__WEBPACK_IMPORTED_MODULE_2__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_shared_img_service__WEBPACK_IMPORTED_MODULE_3__.SharedImgService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: ForgotPasswordComponent,
    selectors: [["app-forgot-password"]],
    decls: 22,
    vars: 5,
    consts: [[1, "box"], [1, "row", "justify-content-center"], [1, "col-lg-4", "col-md-6", "col-sm-8", "align-self-center"], [1, "box-part", "text-center"], ["name", "form", "novalidate", "", 3, "ngSubmit"], ["forgotPswdForm", "ngForm"], ["alt", "user", "width", "120", "height", "120", "id", "profile-img", 1, "profile-img-card", "mb-4", 3, "src"], [1, "input-group", "input-group-lg", "mb-4"], [1, "input-group-text"], [3, "icon"], ["placeholder", "email", "type", "*email", "name", "email", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["catEmail", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], ["bdColor", "rgba(51,51,51,0.8)", "size", "medium", "color", "#fff", "type", "ball-spin-clockwise"], [1, "row"], [1, "col"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", "mb-3"], [1, "mb-3"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], [1, "alert", "alert-danger"], [4, "ngIf"], ["role", "alert", 1, "alert", "alert-danger"]],
    template: function ForgotPasswordComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Forgotten password");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "form", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function ForgotPasswordComponent_Template_form_ngSubmit_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](7);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r0.form.valid && ctx.forgotPassword());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 7)(10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "fa-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ForgotPasswordComponent_Template_input_ngModelChange_12_listener($event) {
          return ctx.email = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, ForgotPasswordComponent_div_14_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "ngx-spinner", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 14)(17, "div", 15)(18, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Send link");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, ForgotPasswordComponent_div_21_Template, 4, 2, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](7);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", ctx.currentImgPath, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx.faUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r0.submitted && _r1.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.errorDto == null ? null : ctx.errorDto.httpStatus);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerComponent, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__.FaIconComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgForm],
    encapsulation: 2
  });
}

/***/ }),

/***/ 2281:
/*!**********************************************************************************!*\
  !*** ./src/app/genericconfig/advertisement-view/advertisement-view.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdvertisementViewComponent: () => (/* binding */ AdvertisementViewComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 274);
/* harmony import */ var _model_generic_config_generic_config_key_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../model/generic-config/generic-config-key-dto */ 975);
/* harmony import */ var _common_app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/app-constants */ 9827);
/* harmony import */ var _model_configuration_advertisement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/configuration/advertisement */ 4234);
/* harmony import */ var _model_error_error_dto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/error/error-dto */ 3990);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _service_generic_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/generic-config.service */ 8642);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ 8375);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ 7548);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _shared_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/error.component */ 6333);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 683);


var ModuleEnum = _model_generic_config_generic_config_key_dto__WEBPACK_IMPORTED_MODULE_0__.GenericConfigKeyDto.ModuleEnum;











function AdvertisementViewComponent_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "fa-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "\u00A0\u00A0\u00A0Empty!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", ctx_r0.faTrash);
  }
}
function AdvertisementViewComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.advertisement.eshopEmail, " ");
  }
}
function AdvertisementViewComponent_span_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "fa-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "\u00A0\u00A0\u00A0Empty!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", ctx_r2.faTrash);
  }
}
function AdvertisementViewComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r3.advertisement.emailWho, " ");
  }
}
function AdvertisementViewComponent_span_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "fa-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "\u00A0\u00A0\u00A0Empty!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", ctx_r4.faTrash);
  }
}
function AdvertisementViewComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r5.advertisement.webEshopAddress, " ");
  }
}
function AdvertisementViewComponent_span_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "fa-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "\u00A0\u00A0\u00A0Empty!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", ctx_r6.faTrash);
  }
}
function AdvertisementViewComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r7.advertisement.sortiment, " ");
  }
}
function AdvertisementViewComponent_span_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "fa-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "\u00A0\u00A0\u00A0Empty!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", ctx_r8.faTrash);
  }
}
function AdvertisementViewComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r9.advertisement.eshopName, " ");
  }
}
function AdvertisementViewComponent_span_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "fa-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "\u00A0\u00A0\u00A0Empty!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", ctx_r10.faTrash);
  }
}
function AdvertisementViewComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r11.advertisement.address, " ");
  }
}
function AdvertisementViewComponent_span_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "fa-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "\u00A0\u00A0\u00A0Empty!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", ctx_r12.faTrash);
  }
}
function AdvertisementViewComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r13.advertisement.ico, " ");
  }
}
function AdvertisementViewComponent_span_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "fa-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "\u00A0\u00A0\u00A0Empty phone!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", ctx_r14.faTrash);
  }
}
function AdvertisementViewComponent_span_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "fa-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "\u00A0\u00A0\u00A0Empty email!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", ctx_r15.faTrash);
  }
}
function AdvertisementViewComponent_div_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 16)(1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r16.advertisement.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r16.advertisement.emailWho, "");
  }
}
function AdvertisementViewComponent_span_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "fa-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "\u00A0\u00A0\u00A0Empty!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", ctx_r17.faTrash);
  }
}
function AdvertisementViewComponent_div_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r18.advertisement.limitFreeShippingPrice, " ");
  }
}
function AdvertisementViewComponent_span_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "fa-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "\u00A0\u00A0\u00A0Empty!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", ctx_r19.faTrash);
  }
}
function AdvertisementViewComponent_div_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r20.advertisement.dueDate, " ");
  }
}
function AdvertisementViewComponent_span_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "fa-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "\u00A0\u00A0\u00A0Empty!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", ctx_r21.faTrash);
  }
}
function AdvertisementViewComponent_div_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r22.advertisement.who, " ");
  }
}
function AdvertisementViewComponent_span_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "fa-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "\u00A0\u00A0\u00A0Empty!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", ctx_r23.faTrash);
  }
}
function AdvertisementViewComponent_div_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r24.advertisement.consumer, " ");
  }
}
function AdvertisementViewComponent_span_81_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "fa-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "\u00A0\u00A0\u00A0Empty!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", ctx_r25.faTrash);
  }
}
function AdvertisementViewComponent_div_82_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r26.advertisement == null ? null : ctx_r26.advertisement.complaintDays, " ");
  }
}
function AdvertisementViewComponent_span_86_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "fa-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "\u00A0\u00A0\u00A0Empty!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", ctx_r27.faTrash);
  }
}
function AdvertisementViewComponent_div_87_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r28.advertisement == null ? null : ctx_r28.advertisement.complaintDaysDelay, " ");
  }
}
class AdvertisementViewComponent {
  constructor(genericConfigService, spinner, toastr) {
    this.genericConfigService = genericConfigService;
    this.spinner = spinner;
    this.toastr = toastr;
    this.faTrash = _common_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.iconTrash;
    this.faEdit = _common_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.iconEdit;
    this.faArrowLeft = _common_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.iconArrowLeft;
    this.advertisement = new _model_configuration_advertisement__WEBPACK_IMPORTED_MODULE_2__.Advertisement();
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    this.errorDto = new _model_error_error_dto__WEBPACK_IMPORTED_MODULE_3__.ErrorDto();
  }
  ngOnInit() {
    this.loadConfigs();
  }
  loadConfigs() {
    this.spinner.show('accountSpinner').then(r => r);
    this.genericConfigService.getGenericConfigs(ModuleEnum.FRONTEND_ADMIN, this.errorDto).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$)).subscribe({
      next: genericConfigResponse => {
        this.spinner.hide('accountSpinner').then(() => {
          this.advertisement = _model_configuration_advertisement__WEBPACK_IMPORTED_MODULE_2__.Advertisement.mapFrom(genericConfigResponse.data);
          this.errorDto = new _model_error_error_dto__WEBPACK_IMPORTED_MODULE_3__.ErrorDto();
        });
      },
      error: () => {
        this.spinner.hide('accountSpinner').then(() => {
          this.toastr.error(this.errorDto.httpStatus + ' config reloaded failed', 'Config');
        });
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  static #_ = this.ɵfac = function AdvertisementViewComponent_Factory(t) {
    return new (t || AdvertisementViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_service_generic_config_service__WEBPACK_IMPORTED_MODULE_4__.GenericConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_9__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_10__.ToastrService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: AdvertisementViewComponent,
    selectors: [["app-advertisement-view"]],
    decls: 92,
    vars: 33,
    consts: [[1, "box"], [1, "row", "justify-content-center"], [1, "col-lg-6", "col-sm-8", "align-self-center"], [1, "box-part", "text-center", "text-white"], [1, "text-white"], ["bdColor", "rgba(51,51,51,0.8)", "size", "medium", "color", "#fff", "type", "ball-spin-clockwise"], [1, "row"], [1, "col", "pt-4"], [1, "text-darkorange", "d-block"], ["class", "fw-bold", 4, "ngIf"], [1, "col-12", "col-sm-6", "pt-4"], ["class", "trash fw-bold", 4, "ngIf"], ["class", "info fw-bold", 4, "ngIf"], [3, "errorDto"], ["type", "button", "aria-hidden", "true", "appBackButton", "", 1, "btn", "btn-danger", "m-5"], [3, "icon"], [1, "fw-bold"], [1, "d-block"], [1, "trash", "fw-bold"], [1, "info", "fw-bold"]],
    template: function AdvertisementViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Advertisement Configuration");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "ngx-spinner", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 6)(11, "div", 7)(12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Email eshopu pro reklamaci:");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, AdvertisementViewComponent_span_14_Template, 3, 1, "span", 9)(15, AdvertisementViewComponent_div_15_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 7)(17, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Email na majitele eshopu:");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, AdvertisementViewComponent_span_19_Template, 3, 1, "span", 9)(20, AdvertisementViewComponent_div_20_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 6)(22, "div", 10)(23, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "Internetov\u00FD obchod, kter\u00FD je provozov\u00E1n na webov\u00E9 adrese:");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, AdvertisementViewComponent_span_25_Template, 3, 1, "span", 9)(26, AdvertisementViewComponent_div_26_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 10)(28, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "Mezi kupuj\u00EDc\u00EDm a prod\u00E1vaj\u00EDc\u00EDm v oblasti prodeje:");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, AdvertisementViewComponent_span_30_Template, 3, 1, "span", 9)(31, AdvertisementViewComponent_div_31_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div", 6)(33, "div", 10)(34, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, " Souvisej\u00EDc\u00EDho zbo\u017E\u00ED mezi spole\u010Dnost\u00ED :");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](36, AdvertisementViewComponent_span_36_Template, 3, 1, "span", 9)(37, AdvertisementViewComponent_div_37_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "div", 10)(39, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](41, AdvertisementViewComponent_span_41_Template, 3, 1, "span", 9)(42, AdvertisementViewComponent_div_42_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "div", 6)(44, "div", 10)(45, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46, "I\u010CO:");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](47, AdvertisementViewComponent_span_47_Template, 3, 1, "span", 9)(48, AdvertisementViewComponent_div_48_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "div", 10)(50, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](51, " Kontaktn\u00ED \u00FAdaje na prod\u00E1vaj\u00EDc\u00EDho jsou:");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](52, AdvertisementViewComponent_span_52_Template, 3, 1, "span", 9)(53, AdvertisementViewComponent_span_53_Template, 3, 1, "span", 9)(54, AdvertisementViewComponent_div_54_Template, 5, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "div", 6)(56, "div", 10)(57, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](58, " P\u0159i n\u00E1kupu zbo\u017E\u00ED nad:");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](59, AdvertisementViewComponent_span_59_Template, 3, 1, "span", 11)(60, AdvertisementViewComponent_div_60_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "div", 10)(62, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](63, " Mezi Prod\u00E1vaj\u00EDc\u00EDm a Kupuj\u00EDc\u00EDm s platnost\u00ED od:");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](64, AdvertisementViewComponent_span_64_Template, 3, 1, "span", 11)(65, AdvertisementViewComponent_div_65_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "div", 6)(67, "div", 10)(68, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](69, "Tento reklama\u010Dn\u00ED \u0159\u00E1d se vztahuje na prodej zbo\u017E\u00ED:");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](70, AdvertisementViewComponent_span_70_Template, 3, 1, "span", 11)(71, AdvertisementViewComponent_div_71_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](72, "div", 10)(73, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](74, "Z\u00E1ru\u010Dn\u00ED lh\u016Fta pro:");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](75, AdvertisementViewComponent_span_75_Template, 3, 1, "span", 9)(76, AdvertisementViewComponent_div_76_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](77, "div", 6)(78, "div", 10)(79, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](80, "Prod\u00E1vaj\u00EDc\u00ED je povinen o reklamaci rozhodnout ihned, ve slo\u017Eit\u011Bj\u0161\u00EDch p\u0159\u00EDpadech do:");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](81, AdvertisementViewComponent_span_81_Template, 3, 1, "span", 9)(82, AdvertisementViewComponent_div_82_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](83, "div", 10)(84, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](85, "Nejpozd\u011Bji do:");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](86, AdvertisementViewComponent_span_86_Template, 3, 1, "span", 11)(87, AdvertisementViewComponent_div_87_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](88, "app-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](89, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](90, "fa-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](91, "\u00A0Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.advertisement == null ? null : ctx.advertisement.eshopName);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.advertisement.eshopEmail);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.advertisement.eshopEmail);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.advertisement.emailWho);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.advertisement.emailWho);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.advertisement.webEshopAddress);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.advertisement.webEshopAddress);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.advertisement.sortiment);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.advertisement.sortiment);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.advertisement.eshopName);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.advertisement.eshopName);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" Prod\u00E1vaj\u00EDc\u00EDm je spole\u010Dnost ", ctx.advertisement.eshopName, " , se s\u00EDdlem :");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.advertisement.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.advertisement.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.advertisement.ico);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.advertisement.ico);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.advertisement.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.advertisement.emailWho);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.advertisement.phone || (ctx.advertisement == null ? null : ctx.advertisement.emailWho));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.advertisement.limitFreeShippingPrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.advertisement.limitFreeShippingPrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.advertisement.dueDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.advertisement.dueDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.advertisement.who);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.advertisement.who);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.advertisement.consumer);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.advertisement.consumer);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.advertisement.complaintDays);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.advertisement.complaintDays);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.advertisement.complaintDaysDelay);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.advertisement.complaintDaysDelay);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("errorDto", ctx.errorDto);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", ctx.faArrowLeft);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _shared_error_component__WEBPACK_IMPORTED_MODULE_5__.ErrorComponent, ngx_spinner__WEBPACK_IMPORTED_MODULE_9__.NgxSpinnerComponent, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__.FaIconComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 8088:
/*!**********************************************************************************!*\
  !*** ./src/app/genericconfig/bank-configuration/bank-configuration.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BankConfigurationComponent: () => (/* binding */ BankConfigurationComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 274);
/* harmony import */ var _model_generic_config_generic_config_key_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../model/generic-config/generic-config-key-dto */ 975);
/* harmony import */ var _common_app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/app-constants */ 9827);
/* harmony import */ var _model_configuration_bank_configuration_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/configuration/bank-configuration-dto */ 9952);
/* harmony import */ var _model_error_error_dto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/error/error-dto */ 3990);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _service_generic_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/generic-config.service */ 8642);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ 8375);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ 7548);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _shared_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/error.component */ 6333);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 8849);


var ModuleEnum = _model_generic_config_generic_config_key_dto__WEBPACK_IMPORTED_MODULE_0__.GenericConfigKeyDto.ModuleEnum;












function BankConfigurationComponent_div_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Iban is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function BankConfigurationComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, BankConfigurationComponent_div_15_div_1_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _r1.errors.required);
  }
}
class BankConfigurationComponent {
  constructor(genericConfigService, route, actRoute, spinner, toastr) {
    this.genericConfigService = genericConfigService;
    this.route = route;
    this.actRoute = actRoute;
    this.spinner = spinner;
    this.toastr = toastr;
    this.ESHOP_BANK_IBAN = "BANK_IBAN";
    this.faArrowLeft = _common_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.iconArrowLeft;
    this.faUser = _common_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.iconUser;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    this.bankConfigurationDto = new _model_configuration_bank_configuration_dto__WEBPACK_IMPORTED_MODULE_2__.BankConfigurationDto(null);
    this.errorDto = new _model_error_error_dto__WEBPACK_IMPORTED_MODULE_3__.ErrorDto();
  }
  ngOnInit() {
    // Bootstrap tooltip initialization
    [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    this.spinner.show().then(r => r);
    this.genericConfigService.getGenericConfigBy(ModuleEnum.FRONTEND_ADMIN, this.ESHOP_BANK_IBAN, this.errorDto).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$)).subscribe({
      next: bankConfig => {
        this.spinner.hide().then(() => {
          this.genericData = bankConfig.data;
          this.bankConfigurationDto = new _model_configuration_bank_configuration_dto__WEBPACK_IMPORTED_MODULE_2__.BankConfigurationDto(this.genericData.value);
          this.errorDto = new _model_error_error_dto__WEBPACK_IMPORTED_MODULE_3__.ErrorDto();
        });
      },
      error: () => {
        this.spinner.hide().then(() => this.toastr.error(this.errorDto.httpStatus + ' load failed', 'Bank Config'));
      }
    });
  }
  upsertIban() {
    this.spinner.show().then(r => r);
    this.genericData.value = this.bankConfigurationDto.iban;
    this.genericConfigService.putGenericConfig(ModuleEnum.FRONTEND_ADMIN, this.ESHOP_BANK_IBAN, this.genericData.value, this.errorDto).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$)).subscribe({
      next: bankConfig => {
        this.spinner.hide().then(() => {
          this.toastr.success('Bank config updated', 'Bank Config');
          this.bankConfigurationDto = new _model_configuration_bank_configuration_dto__WEBPACK_IMPORTED_MODULE_2__.BankConfigurationDto(bankConfig.data.value);
          this.errorDto = new _model_error_error_dto__WEBPACK_IMPORTED_MODULE_3__.ErrorDto();
        });
      },
      error: () => {
        this.spinner.hide().then(() => this.toastr.error(this.errorDto.httpStatus + ' update failed', 'Bank Config'));
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  static #_ = this.ɵfac = function BankConfigurationComponent_Factory(t) {
    return new (t || BankConfigurationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_service_generic_config_service__WEBPACK_IMPORTED_MODULE_4__.GenericConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_10__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_11__.ToastrService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: BankConfigurationComponent,
    selectors: [["app-bank-configuration"]],
    decls: 18,
    vars: 3,
    consts: [[1, "box"], [1, "row", "justify-content-center"], [1, "col-lg-5", "col-sm-7", "align-self-center"], [1, "box-part", "text-center"], ["novalidate", "", 3, "ngSubmit"], ["editBankForm", "ngForm"], [1, "pb-3"], [1, "input-group", "mb-3"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "data-bs-title", "CZ bank IBAN", "data-bs-customClass", "custom-tooltip", 1, "input-group-text"], ["name", "ibanName", "type", "text", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["ibanName", "ngModel"], ["type", "submit", 1, "btn", "btn-primary"], ["class", "alert alert-danger", 4, "ngIf"], ["bdColor", "rgba(51,51,51,0.8)", "size", "medium", "color", "#fff", "type", "ball-spin-clockwise"], [3, "errorDto"], [1, "alert", "alert-danger"], [4, "ngIf"]],
    template: function BankConfigurationComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "form", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function BankConfigurationComponent_Template_form_ngSubmit_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](5);
          return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](_r0.valid && ctx.upsertIban());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Bank configuration");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 7)(9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Iban");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function BankConfigurationComponent_Template_input_ngModelChange_11_listener($event) {
          return ctx.bankConfigurationDto.iban = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, BankConfigurationComponent_div_15_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "ngx-spinner", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "app-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](5);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.bankConfigurationDto.iban);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _r0.submitted && _r1.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("errorDto", ctx.errorDto);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _shared_error_component__WEBPACK_IMPORTED_MODULE_5__.ErrorComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgForm, ngx_spinner__WEBPACK_IMPORTED_MODULE_10__.NgxSpinnerComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 7834:
/*!****************************************************************************************!*\
  !*** ./src/app/genericconfig/generic-config-create/generic-config-create.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GenericConfigCreateComponent: () => (/* binding */ GenericConfigCreateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _generic_config_edit_detail_generic_config_edit_detail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../generic-config-edit-detail/generic-config-edit-detail.component */ 4173);


class GenericConfigCreateComponent {
  static #_ = this.ɵfac = function GenericConfigCreateComponent_Factory(t) {
    return new (t || GenericConfigCreateComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: GenericConfigCreateComponent,
    selectors: [["app-generic-config-create"]],
    decls: 1,
    vars: 1,
    consts: [[3, "isCreate"]],
    template: function GenericConfigCreateComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-generic-config-edit-detail", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isCreate", true);
      }
    },
    dependencies: [_generic_config_edit_detail_generic_config_edit_detail_component__WEBPACK_IMPORTED_MODULE_0__.GenericConfigEditDetailComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 4173:
/*!**************************************************************************************************!*\
  !*** ./src/app/genericconfig/generic-config-edit-detail/generic-config-edit-detail.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GenericConfigEditDetailComponent: () => (/* binding */ GenericConfigEditDetailComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 274);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var _model_generic_config_generic_config_key_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../model/generic-config/generic-config-key-dto */ 975);
/* harmony import */ var _model_generic_config_generic_config_data_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/generic-config/generic-config-data-dto */ 5420);
/* harmony import */ var _model_error_error_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/error/error-dto */ 3990);
/* harmony import */ var _common_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/app-constants */ 9827);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _service_generic_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/generic-config.service */ 8642);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ 8375);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ 7548);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _shared_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/error.component */ 6333);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 8849);


var ModuleEnum = _model_generic_config_generic_config_key_dto__WEBPACK_IMPORTED_MODULE_0__.GenericConfigKeyDto.ModuleEnum;
var ConfigTypeEnum = _model_generic_config_generic_config_data_dto__WEBPACK_IMPORTED_MODULE_1__.GenericConfigDataDto.ConfigTypeEnum;












function GenericConfigEditDetailComponent_option_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const module_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", module_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", module_r11, " ");
  }
}
function GenericConfigEditDetailComponent_div_16_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Key is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function GenericConfigEditDetailComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, GenericConfigEditDetailComponent_div_16_div_1_Template, 2, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _r1.errors.required);
  }
}
function GenericConfigEditDetailComponent_div_22_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Key is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function GenericConfigEditDetailComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, GenericConfigEditDetailComponent_div_22_div_1_Template, 2, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _r4.errors.required);
  }
}
function GenericConfigEditDetailComponent_option_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const type_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", type_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", type_r14, " ");
  }
}
function GenericConfigEditDetailComponent_div_29_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Config Type is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function GenericConfigEditDetailComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, GenericConfigEditDetailComponent_div_29_div_1_Template, 2, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _r6.errors.required);
  }
}
function GenericConfigEditDetailComponent_div_35_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Value is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function GenericConfigEditDetailComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, GenericConfigEditDetailComponent_div_35_div_1_Template, 2, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _r9.errors.required);
  }
}
class GenericConfigEditDetailComponent {
  initGenericConfigDefault() {
    return {
      key: {
        name: "PREDEFINNED_KEY",
        module: ModuleEnum.FRONTEND_ADMIN
      },
      type: ConfigTypeEnum.SHORTSTRING,
      value: "..."
    };
  }
  constructor(genericConfigService, spinner, toastr, route, actRoute) {
    this.genericConfigService = genericConfigService;
    this.spinner = spinner;
    this.toastr = toastr;
    this.route = route;
    this.actRoute = actRoute;
    this.isCreate = false;
    this.module = null;
    this.key = null;
    this.availableModules = Object.values(ModuleEnum);
    this.availableConfigTypes = Object.values(ConfigTypeEnum);
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    this.errorDto = new _model_error_error_dto__WEBPACK_IMPORTED_MODULE_2__.ErrorDto();
    this.genericConfigRequest = this.initGenericConfigDefault();
  }
  ngOnInit() {
    if (this.isCreate) {
      return;
    } else {
      this.actRoute.paramMap.subscribe(params => {
        this.genericConfigRequest.key.name = params.get('key');
        this.genericConfigRequest.key.module = ModuleEnum[params.get('module')];
      });
    }
    this.loadConfigBy();
  }
  loadConfigBy() {
    this.spinner.show().then(r => r);
    this.genericConfigService.getGenericConfigBy(this.genericConfigRequest.key.module, this.genericConfigRequest.key.name, this.errorDto).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$)).subscribe({
      next: genericConfigResponse => {
        this.spinner.hide().then(() => this.toastr.info(genericConfigResponse.data.key + ' generic configs reloaded', 'Generic config'));
        this.genericConfigRequest = genericConfigResponse.data;
      },
      error: () => {
        this.spinner.hide().then(() => this.toastr.error('Load failed' + this.errorDto.httpStatus, 'Generic config'));
      }
    });
  }
  genericConfigSaveOperation() {
    if (this.isCreate) {
      this.createGenericConfig();
    } else {
      this.updateGenericConfig();
    }
  }
  updateGenericConfig() {
    this.genericConfigService.putGenericConfig(this.genericConfigRequest.key.module, this.genericConfigRequest.key.name, this.genericConfigRequest.value, this.errorDto).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$)).subscribe({
      next: () => {
        this.spinner.hide().then(() => {
          this.toastr.success('Config updated', 'Generic config');
          this.errorDto = new _model_error_error_dto__WEBPACK_IMPORTED_MODULE_2__.ErrorDto();
          setTimeout(() => {
            this.route.navigate(['/generic-configs']);
          }, _common_app_constants__WEBPACK_IMPORTED_MODULE_3__.AppConstants.toastSuccessDelay);
        });
      },
      error: () => {
        this.spinner.hide().then(() => this.toastr.error(this.errorDto.httpStatus + ' update failed', 'Generic config'));
      }
    });
  }
  createGenericConfig() {
    this.genericConfigService.postGenericConfig(this.genericConfigRequest, this.errorDto).subscribe({
      next: genericConfigResponse => {
        this.errorDto = new _model_error_error_dto__WEBPACK_IMPORTED_MODULE_2__.ErrorDto();
        this.spinner.hide().then(() => this.toastr.info(genericConfigResponse.data.value + ' created', 'Generic config'));
        setTimeout(() => {
          this.route.navigate(['/generic-configs']);
        }, _common_app_constants__WEBPACK_IMPORTED_MODULE_3__.AppConstants.toastSuccessDelay);
      },
      error: () => {
        this.spinner.hide().then(() => this.toastr.error(' Generic config post failed' + this.errorDto.httpStatus, 'Generic config'));
      }
    });
  }
  getAction() {
    return this.isCreate ? "CREATE" : "UPDATE";
  }
  static #_ = this.ɵfac = function GenericConfigEditDetailComponent_Factory(t) {
    return new (t || GenericConfigEditDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_service_generic_config_service__WEBPACK_IMPORTED_MODULE_4__.GenericConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_9__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_10__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: GenericConfigEditDetailComponent,
    selectors: [["app-generic-config-edit-detail"]],
    inputs: {
      isCreate: "isCreate",
      module: "module",
      key: "key"
    },
    decls: 40,
    vars: 13,
    consts: [[1, "box"], [1, "row", "justify-content-center"], [1, "col-lg-4", "col-sm-10", "align-self-center"], [1, "box-part", "text-center"], ["novalidate", "", 3, "ngSubmit"], ["createGenericForm", "ngForm"], [1, "detail"], ["bdColor", "rgba(51,51,51,0.8)", "size", "medium", "color", "#fff", "type", "ball-spin-clockwise"], [1, "mb-3"], ["for", "module-input"], ["id", "module-input", "name", "configModule", "required", "", 1, "form-select", "form-select-md", 3, "ngModel", "ngModelChange"], ["configModule", "ngModel"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["class", "alert alert-danger", 4, "ngIf"], ["for", "config-key"], ["id", "config-key", "name", "configKey", "type", "text", "placeholder", "required SOME_KEY", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["configKey", "ngModel"], ["for", "configType-input"], ["id", "configType-input", "name", "configType", "required", "", 1, "form-select", "form-select-md", 3, "ngModel", "ngModelChange"], ["configType", "ngModel"], ["for", "config-value"], ["id", "config-value", "name", "configValue", "type", "text", "placeholder", "required lorem ipsum", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["configValue", "ngModel"], [3, "errorDto"], ["type", "submit", 1, "btn", "btn-primary"], [3, "ngValue"], [1, "alert", "alert-danger"], [4, "ngIf"]],
    template: function GenericConfigEditDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "form", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function GenericConfigEditDetailComponent_Template_form_ngSubmit_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r17);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](5);
          return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](_r0.form.valid && ctx.genericConfigSaveOperation());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "ngx-spinner", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 8)(11, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Module");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "select", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function GenericConfigEditDetailComponent_Template_select_ngModelChange_13_listener($event) {
          return ctx.genericConfigRequest.key.module = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, GenericConfigEditDetailComponent_option_15_Template, 2, 2, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, GenericConfigEditDetailComponent_div_16_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 8)(18, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Key");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "input", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function GenericConfigEditDetailComponent_Template_input_ngModelChange_20_listener($event) {
          return ctx.genericConfigRequest.key.name = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, GenericConfigEditDetailComponent_div_22_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 8)(24, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "Config type");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "select", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function GenericConfigEditDetailComponent_Template_select_ngModelChange_26_listener($event) {
          return ctx.genericConfigRequest.type = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, GenericConfigEditDetailComponent_option_28_Template, 2, 2, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, GenericConfigEditDetailComponent_div_29_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 8)(31, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, "Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "input", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function GenericConfigEditDetailComponent_Template_input_ngModelChange_33_listener($event) {
          return ctx.genericConfigRequest.value = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](35, GenericConfigEditDetailComponent_div_35_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](36, "app-error", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 8)(38, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](5);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](14);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](21);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](27);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx.getAction(), " generic config");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.genericConfigRequest.key.module);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.availableModules);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _r0.submitted && _r1.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.genericConfigRequest.key.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _r0.submitted && _r4.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.genericConfigRequest.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.availableConfigTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _r0.submitted && _r6.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.genericConfigRequest.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _r0.submitted && _r9.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("errorDto", ctx.errorDto);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.getAction());
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _shared_error_component__WEBPACK_IMPORTED_MODULE_5__.ErrorComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgForm, ngx_spinner__WEBPACK_IMPORTED_MODULE_9__.NgxSpinnerComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 3086:
/*!************************************************************************************!*\
  !*** ./src/app/genericconfig/generic-config-edit/generic-config-edit.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GenericConfigEditComponent: () => (/* binding */ GenericConfigEditComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _generic_config_edit_detail_generic_config_edit_detail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../generic-config-edit-detail/generic-config-edit-detail.component */ 4173);


class GenericConfigEditComponent {
  static #_ = this.ɵfac = function GenericConfigEditComponent_Factory(t) {
    return new (t || GenericConfigEditComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: GenericConfigEditComponent,
    selectors: [["app-generic-config-edit"]],
    decls: 1,
    vars: 1,
    consts: [[3, "isCreate"]],
    template: function GenericConfigEditComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-generic-config-edit-detail", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isCreate", false);
      }
    },
    dependencies: [_generic_config_edit_detail_generic_config_edit_detail_component__WEBPACK_IMPORTED_MODULE_0__.GenericConfigEditDetailComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 2688:
/*!**************************************************************************************************!*\
  !*** ./src/app/genericconfig/generic-config-list-filter/generic-config-list-filter.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GenericConfigListFilterComponent: () => (/* binding */ GenericConfigListFilterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _model_generic_config_generic_config_key_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../model/generic-config/generic-config-key-dto */ 975);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);

var ModuleEnum = _model_generic_config_generic_config_key_dto__WEBPACK_IMPORTED_MODULE_0__.GenericConfigKeyDto.ModuleEnum;




function GenericConfigListFilterComponent_option_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const module_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", module_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", module_r1, " ");
  }
}
class GenericConfigListFilterComponent {
  constructor() {
    this.selectedModule = null;
    this.availableModules = Object.values(ModuleEnum);
    this.selectedModuleEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  fireSelectChangedEvent() {
    console.log("Fired event" + this.selectedModule);
    this.selectedModuleEvent.emit(this.selectedModule);
  }
  static #_ = this.ɵfac = function GenericConfigListFilterComponent_Factory(t) {
    return new (t || GenericConfigListFilterComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: GenericConfigListFilterComponent,
    selectors: [["app-generic-config-list-filter"]],
    inputs: {
      selectedModule: "selectedModule"
    },
    outputs: {
      selectedModuleEvent: "selectedModuleEvent"
    },
    decls: 5,
    vars: 2,
    consts: [[1, "input-group", "mt-3", "mb-3", "w-50", "text-center"], ["for", "module-input"], ["id", "module-input", 1, "form-select", "form-select-md", 3, "ngModel", "ngModelChange"], [3, "ngValue", 4, "ngFor", "ngForOf"], [3, "ngValue"]],
    template: function GenericConfigListFilterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Module");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function GenericConfigListFilterComponent_Template_select_ngModelChange_3_listener($event) {
          return ctx.selectedModule = $event;
        })("ngModelChange", function GenericConfigListFilterComponent_Template_select_ngModelChange_3_listener() {
          return ctx.fireSelectChangedEvent();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, GenericConfigListFilterComponent_option_4_Template, 2, 2, "option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selectedModule);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.availableModules);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel],
    encapsulation: 2
  });
}

/***/ }),

/***/ 147:
/*!************************************************************************************!*\
  !*** ./src/app/genericconfig/generic-config-list/generic-config-list.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GenericConfigListComponent: () => (/* binding */ GenericConfigListComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 274);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var _model_generic_config_generic_config_key_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../model/generic-config/generic-config-key-dto */ 975);
/* harmony import */ var _model_error_error_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/error/error-dto */ 3990);
/* harmony import */ var _common_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/app-constants */ 9827);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _service_generic_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/generic-config.service */ 8642);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ 8375);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ 7548);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _shared_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/error.component */ 6333);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 7947);


var ModuleEnum = _model_generic_config_generic_config_key_dto__WEBPACK_IMPORTED_MODULE_0__.GenericConfigKeyDto.ModuleEnum;











const _c0 = (a1, a2) => ["/generic-configs/edit/", a1, a2];
function GenericConfigListComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 16)(1, "div", 17)(2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 11)(19, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "fa-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 11)(22, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "fa-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const config_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](config_r1.key.module);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](config_r1.key.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](config_r1.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](config_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](7, _c0, config_r1.key.module, config_r1.key.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", ctx_r0.faEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", ctx_r0.faDelete);
  }
}
class GenericConfigListComponent {
  constructor(genericConfigService, spinner, toastr) {
    this.genericConfigService = genericConfigService;
    this.spinner = spinner;
    this.toastr = toastr;
    this.defaultModule = ModuleEnum.FRONTEND_ADMIN;
    this.genericConfigs = [];
    this.errorDto = new _model_error_error_dto__WEBPACK_IMPORTED_MODULE_1__.ErrorDto();
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    this.faEdit = _common_app_constants__WEBPACK_IMPORTED_MODULE_2__.AppConstants.iconEdit;
    this.faDelete = _common_app_constants__WEBPACK_IMPORTED_MODULE_2__.AppConstants.iconDelete;
  }
  ngOnInit() {
    this.loadConfigsFromServer(this.defaultModule);
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  loadConfigsFromServer(module) {
    this.spinner.show().then(r => r);
    this.genericConfigService.getGenericConfigs(module, this.errorDto).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$)).subscribe({
      next: genericConfigResponse => {
        this.spinner.hide().then(() => {
          this.genericConfigs = genericConfigResponse.data;
          this.errorDto = new _model_error_error_dto__WEBPACK_IMPORTED_MODULE_1__.ErrorDto();
        });
      },
      error: () => {
        this.spinner.hide().then(() => this.toastr.error(this.errorDto.httpStatus + ' failed', 'Generic config'));
      }
    });
  }
  filterChanged($event) {
    this.loadConfigsFromServer($event);
  }
  deleteGenericConfig(config) {
    this.spinner.show().then(r => r);
    if (!confirm('Are you sure to delete product (' + config.key.module + config.key.name + ') ?')) {
      this.spinner.hide().then(r => r);
      return;
    }
  }
  static #_ = this.ɵfac = function GenericConfigListComponent_Factory(t) {
    return new (t || GenericConfigListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_service_generic_config_service__WEBPACK_IMPORTED_MODULE_3__.GenericConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: GenericConfigListComponent,
    selectors: [["app-generic-config-list"]],
    decls: 29,
    vars: 2,
    consts: [[1, "box"], [1, "row", "justify-content-center"], [1, "col-lg-9", "col-md-12", "align-self-center"], [1, "box-part", "text-center"], [1, "text-orange", "mb-3"], [1, "row"], [1, "input-group", "d-none", "d-sm-inline-flex"], [1, "col-12", "col-sm-2"], [1, "text-darkorange", "text-center"], [1, "col-12", "col-sm-4"], [1, "text-darkorange"], [1, "col-12", "col-sm-1"], ["bdColor", "rgba(51,51,51,0.8)", "size", "medium", "color", "#fff", "type", "ball-spin-clockwise"], ["class", "row border-bottom link text-center text-md-start", 4, "ngFor", "ngForOf"], [3, "errorDto"], ["routerLinkActive", "active", "routerLink", "/generic-configs/create", 1, "btn", "btn-primary"], [1, "row", "border-bottom", "link", "text-center", "text-md-start"], [1, "input-group"], ["data-label", "Module", 1, "d-inline-block", "m-2", "text-darkorange", "d-sm-none"], [1, "d-inline-block", "m-2", "text-white", "text-break"], ["data-label", "Name", 1, "d-inline-block", "m-2", "text-darkorange", "d-sm-none"], ["data-label", "Type", 1, "d-inline-block", "m-2", "text-darkorange", "d-sm-none"], [1, "d-inline-block", "m-2", "text-white"], ["data-label", "Value", 1, "d-inline-block", "m-2", "text-darkorange", "d-sm-none"], ["routerLinkActive", "active", 1, "btn", "btn-primary", "btn-sm", "m-2", 3, "routerLink"], [3, "icon"], [1, "btn", "btn-primary", "btn-sm", "m-2"]],
    template: function GenericConfigListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Generic config admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Module");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 9)(12, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 7)(15, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 7)(18, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "ngx-spinner", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, GenericConfigListComponent_div_25_Template, 24, 10, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](26, "app-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Create config ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.genericConfigs);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("errorDto", ctx.errorDto);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _shared_error_component__WEBPACK_IMPORTED_MODULE_4__.ErrorComponent, ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerComponent, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__.FaIconComponent, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLink],
    encapsulation: 2
  });
}

/***/ }),

/***/ 3577:
/*!********************************************************!*\
  !*** ./src/app/genericconfig/generic-config.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GenericConfigModule: () => (/* binding */ GenericConfigModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _generic_config_edit_generic_config_edit_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generic-config-edit/generic-config-edit.component */ 3086);
/* harmony import */ var _generic_config_create_generic_config_create_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generic-config-create/generic-config-create.component */ 7834);
/* harmony import */ var _generic_config_edit_detail_generic_config_edit_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generic-config-edit-detail/generic-config-edit-detail.component */ 4173);
/* harmony import */ var _generic_config_list_filter_generic_config_list_filter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generic-config-list-filter/generic-config-list-filter.component */ 2688);
/* harmony import */ var _generic_config_list_generic_config_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./generic-config-list/generic-config-list.component */ 147);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ 6208);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-spinner */ 8375);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _img_configuration_img_configuration_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img-configuration/img-configuration.component */ 6020);
/* harmony import */ var _bank_configuration_bank_configuration_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bank-configuration/bank-configuration.component */ 8088);
/* harmony import */ var _advertisement_view_advertisement_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./advertisement-view/advertisement-view.component */ 2281);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 1699);















class GenericConfigModule {
  static #_ = this.ɵfac = function GenericConfigModule_Factory(t) {
    return new (t || GenericConfigModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
    type: GenericConfigModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_12__.NgxSpinnerModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__.FaIconComponent]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](GenericConfigModule, {
    declarations: [_generic_config_list_generic_config_list_component__WEBPACK_IMPORTED_MODULE_4__.GenericConfigListComponent, _generic_config_list_filter_generic_config_list_filter_component__WEBPACK_IMPORTED_MODULE_3__.GenericConfigListFilterComponent, _generic_config_edit_detail_generic_config_edit_detail_component__WEBPACK_IMPORTED_MODULE_2__.GenericConfigEditDetailComponent, _generic_config_create_generic_config_create_component__WEBPACK_IMPORTED_MODULE_1__.GenericConfigCreateComponent, _generic_config_edit_generic_config_edit_component__WEBPACK_IMPORTED_MODULE_0__.GenericConfigEditComponent, _img_configuration_img_configuration_component__WEBPACK_IMPORTED_MODULE_6__.ImgConfigurationComponent, _advertisement_view_advertisement_view_component__WEBPACK_IMPORTED_MODULE_8__.AdvertisementViewComponent, _bank_configuration_bank_configuration_component__WEBPACK_IMPORTED_MODULE_7__.BankConfigurationComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_12__.NgxSpinnerModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__.FaIconComponent, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterLink]
  });
})();

/***/ }),

/***/ 6020:
/*!********************************************************************************!*\
  !*** ./src/app/genericconfig/img-configuration/img-configuration.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImgConfigurationComponent: () => (/* binding */ ImgConfigurationComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var _model_generic_config_generic_config_key_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../model/generic-config/generic-config-key-dto */ 975);
/* harmony import */ var _common_app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/app-constants */ 9827);
/* harmony import */ var _model_error_error_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/error/error-dto */ 3990);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _service_generic_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/generic-config.service */ 8642);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ 8375);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ 7548);
/* harmony import */ var _shared_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/error.component */ 6333);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 683);





var ModuleEnum = _model_generic_config_generic_config_key_dto__WEBPACK_IMPORTED_MODULE_0__.GenericConfigKeyDto.ModuleEnum;







class ImgConfigurationComponent {
  constructor(genericConfigService, spinner, toastr) {
    this.genericConfigService = genericConfigService;
    this.spinner = spinner;
    this.toastr = toastr;
    this.faArrowLeft = _common_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.iconArrowLeft;
    this.faUser = _common_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.iconUser;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.errorDto = new _model_error_error_dto__WEBPACK_IMPORTED_MODULE_2__.ErrorDto();
    this.ESHOP_IMG_SIZE = "IMG_SIZE";
    this.ESHOP_IMG_DIMENSION = "IMG_DIMENSION";
  }
  ngOnInit() {
    // Bootstrap tooltip initialization
    [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    this.getValueFileSize();
    this.getDimensionSize();
  }
  getValueFileSize() {
    this.spinner.show().then(r => r);
    this.genericConfigService.getGenericConfigBy(ModuleEnum.FRONTEND_ADMIN, this.ESHOP_IMG_SIZE, this.errorDto).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroy$)).subscribe({
      next: config => {
        this.spinner.hide().then(() => {
          this.errorDto = new _model_error_error_dto__WEBPACK_IMPORTED_MODULE_2__.ErrorDto();
          this.maxFileSize = config.data.value;
        });
      },
      error: () => {
        this.spinner.hide().then(() => this.toastr.error(this.errorDto.httpStatus + ' file size load failed', 'Img Config'));
      }
    });
  }
  getDimensionSize() {
    this.spinner.show().then(r => r);
    this.genericConfigService.getGenericConfigBy(ModuleEnum.FRONTEND_ADMIN, this.ESHOP_IMG_DIMENSION, this.errorDto).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroy$)).subscribe({
      next: config => {
        this.spinner.hide().then(() => {
          this.errorDto = new _model_error_error_dto__WEBPACK_IMPORTED_MODULE_2__.ErrorDto();
          this.maxDimensionSize = config.data.value;
        });
      },
      error: () => {
        this.spinner.hide().then(() => this.toastr.error(this.errorDto.httpStatus + ' dimension size load failed', 'Img Config'));
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  static #_ = this.ɵfac = function ImgConfigurationComponent_Factory(t) {
    return new (t || ImgConfigurationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_service_generic_config_service__WEBPACK_IMPORTED_MODULE_3__.GenericConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: ImgConfigurationComponent,
    selectors: [["app-img-configuration"]],
    decls: 19,
    vars: 4,
    consts: [[1, "box"], [1, "row", "justify-content-center"], [1, "col-lg-4", "col-sm-8", "align-self-center"], [1, "box-part", "text-center"], [1, "pb-3"], [1, "input-group", "mb-3"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "data-bs-title", "Maximum size in Kb for products in eshop", "data-bs-customClass", "custom-tooltip", 1, "input-group-text", "col-12", "col-sm-5", "text-wrap"], ["readonly", "", "name", "fileSize", "type", "text", 1, "form-control", 3, "ngModel"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "data-bs-title", "Maximum height and width for product", "data-bs-customClass", "custom-tooltip", 1, "input-group-text", "col-12", "col-sm-5", "text-wrap"], ["readonly", "", "name", "fileDimension", "type", "text", 1, "form-control", 3, "ngModel"], ["bdColor", "rgba(51,51,51,0.8)", "size", "medium", "color", "#fff", "type", "ball-spin-clockwise"], [3, "errorDto"], ["type", "button", "aria-hidden", "true", "appBackButton", "", 1, "btn", "btn-danger", "mt-2"], [3, "icon"]],
    template: function ImgConfigurationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Image configuration");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 5)(7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "File size [kb]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 5)(11, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Dimension [px]");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "ngx-spinner", 10)(15, "app-error", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "fa-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "\u00A0Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.maxFileSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.maxDimensionSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("errorDto", ctx.errorDto);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", ctx.faArrowLeft);
      }
    },
    dependencies: [_shared_error_component__WEBPACK_IMPORTED_MODULE_4__.ErrorComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerComponent, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__.FaIconComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 6889:
/*!****************************************************!*\
  !*** ./src/app/graph-home/graph-home.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GraphHomeComponent: () => (/* binding */ GraphHomeComponent),
/* harmony export */   MultiVo: () => (/* binding */ MultiVo)
/* harmony export */ });
/* harmony import */ var _model_error_error_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/error/error-dto */ 3990);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 274);
/* harmony import */ var _model_stats_graph_pie_vo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/stats/graph-pie-vo */ 6383);
/* harmony import */ var _model_stats_graph_line_vo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/stats/graph-line-vo */ 3446);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _service_statistics_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/statistics.service */ 8475);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ 8375);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ 7548);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swimlane/ngx-charts */ 8278);










const _c0 = () => [1000, 400];
class GraphHomeComponent {
  constructor(statisticsService, spinner, toastr) {
    this.statisticsService = statisticsService;
    this.spinner = spinner;
    this.toastr = toastr;
    this.errorDto = new _model_error_error_dto__WEBPACK_IMPORTED_MODULE_0__.ErrorDto();
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.view = [700, 300];
    this.colorScheme = {
      domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
    };
    /**
     * This class serves as demo angular charts
     * TODO: Eshop overview
     */
    this.orderStatuses = [];
    this.categoryToProductCount = [];
    this.orderPriceTotalPerDay = [];
    this.single = [{
      "name": "Users",
      "value": 50
    }, {
      "name": "Orders",
      "value": 37000
    }, {
      "name": "Categories",
      "value": 72
    }, {
      "name": "Products",
      "value": 5000
    }, {
      "name": "Messages",
      "value": 15
    }, {
      "name": "Total revenue",
      "value": 100000
    }];
  }
  ngOnInit() {
    this.loadGraphs();
  }
  loadGraphs() {
    this.spinner.show().then(r => r);
    this.statisticsService.getOrderPieStatus(this.errorDto).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe({
      next: orderPieResponse => {
        this.spinner.hide().then(r => r);
        this.orderStatuses = orderPieResponse.map(responseItem => new _model_stats_graph_pie_vo__WEBPACK_IMPORTED_MODULE_1__.GraphPieVo(responseItem.status, responseItem.total));
      },
      error: () => {
        this.spinner.hide().then(() => this.toastr.error(this.errorDto.httpStatus + ' load categories failed', 'Stats'));
      }
    });
    this.statisticsService.getCategoryToProductCount(this.errorDto).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe({
      next: categoryProductCountResponse => {
        this.spinner.hide().then(r => r);
        this.categoryToProductCount = categoryProductCountResponse.map(responseItem => new _model_stats_graph_pie_vo__WEBPACK_IMPORTED_MODULE_1__.GraphPieVo(responseItem.name, responseItem.total));
      },
      error: () => {
        this.spinner.hide().then(() => this.toastr.error(this.errorDto.httpStatus + ' load categories failed', 'Stats'));
      }
    });
    this.statisticsService.getOrderTotalPerDay(this.errorDto).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe({
      next: orderTotalPerDayResponse => {
        this.spinner.hide().then(r => r);
        let orderPriceTotalPerDay = orderTotalPerDayResponse.map(responseItem => new _model_stats_graph_line_vo__WEBPACK_IMPORTED_MODULE_2__.GraphLineVo(responseItem.status, responseItem.totalPrice));
        this.orderPriceTotalPerDay = [new MultiVo(orderPriceTotalPerDay)];
      },
      error: () => {
        this.spinner.hide().then(() => this.toastr.error(this.errorDto.httpStatus + ' load categories failed', 'Stats'));
      }
    });
  }
  onSelect(event) {
    console.log(event);
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  static #_ = this.ɵfac = function GraphHomeComponent_Factory(t) {
    return new (t || GraphHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_service_statistics_service__WEBPACK_IMPORTED_MODULE_3__.StatisticsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_7__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: GraphHomeComponent,
    selectors: [["app-graph-home"]],
    decls: 24,
    vars: 29,
    consts: [["id", "accordionForGraphs", 1, "accordion"], [1, "accordion-item"], ["id", "headingOne", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseOne", "aria-expanded", "true", "aria-controls", "collapseOne", 1, "accordion-button"], ["id", "collapseOne", "aria-labelledby", "headingOne", "data-bs-parent", "#accordionExample", 1, "accordion-collapse", "collapse", "show"], [1, "accordion-body"], [3, "view", "results", "xAxisLabel", "legendTitle", "yAxisLabel", "legend", "showXAxisLabel", "showYAxisLabel", "xAxis", "yAxis", "gradient"], ["id", "headingTwo", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseTwo", "aria-expanded", "false", "aria-controls", "collapseTwo", 1, "accordion-button", "collapsed"], ["id", "collapseTwo", "aria-labelledby", "headingTwo", "data-bs-parent", "#accordionExample", 1, "accordion-collapse", "collapse"], [3, "view", "results", "cardColor", "select"], ["id", "headingThree", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseThree", "aria-expanded", "false", "aria-controls", "collapseThree", 1, "accordion-button", "collapsed"], ["id", "collapseThree", "aria-labelledby", "headingThree", "data-bs-parent", "#accordionExample", 1, "accordion-collapse", "collapse"], [1, "row"], [1, "col", 3, "view", "results", "gradient"], [1, "col", 3, "view", "legend", "legendTitle", "showXAxisLabel", "showYAxisLabel", "xAxis", "yAxis", "xAxisLabel", "yAxisLabel", "timeline", "results"]],
    template: function GraphHomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2", 2)(3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " Categories ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 4)(6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "ngx-charts-bar-vertical", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 1)(9, "h2", 7)(10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, " Eshop overview ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 9)(13, "div", 5)(14, "ngx-charts-number-card", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("select", function GraphHomeComponent_Template_ngx_charts_number_card_select_14_listener($event) {
          return ctx.onSelect($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 1)(16, "h2", 11)(17, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, " Orders ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 13)(20, "div", 5)(21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](22, "ngx-charts-advanced-pie-chart", 15)(23, "ngx-charts-line-chart", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("view", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](28, _c0))("results", ctx.categoryToProductCount)("xAxisLabel", "Categories")("legendTitle", "Categories")("yAxisLabel", "Products count")("legend", true)("showXAxisLabel", true)("showYAxisLabel", true)("xAxis", true)("yAxis", true)("gradient", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("view", ctx.view)("results", ctx.single)("cardColor", "#232837");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("view", ctx.view)("results", ctx.orderStatuses)("gradient", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("view", ctx.view)("legend", true)("legendTitle", "Order price(day)")("showXAxisLabel", true)("showYAxisLabel", true)("xAxis", true)("yAxis", true)("xAxisLabel", "Date")("yAxisLabel", "Price total")("timeline", true)("results", ctx.orderPriceTotalPerDay);
      }
    },
    dependencies: [_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_9__.BarVerticalComponent, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_9__.LineChartComponent, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_9__.NumberCardComponent, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_9__.AdvancedPieChartComponent],
    encapsulation: 2
  });
}
/*
multi = [
  {
    "name": "Germany",
    "series": [
      {
        "name": "30.1.2022",
        "value": 70000
      },
      {
        "name": "1.2.2022",
        "value": 10000
      },
      {
        "name": "2.2.2022",
        "value": 18000
      }
    ]
  },
];*/
class MultiVo {
  constructor(series) {
    this.name = "Default";
    this.series = series;
  }
}

/***/ }),

/***/ 6459:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 4300);
/* harmony import */ var _model_error_error_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/error/error-dto */ 3990);
/* harmony import */ var _common_app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/app-constants */ 9827);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _service_qr_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/qr.service */ 8986);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-spinner */ 8375);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-toastr */ 7548);
/* harmony import */ var _service_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/category.service */ 4206);
/* harmony import */ var _service_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/account.service */ 1522);
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/product.service */ 2200);
/* harmony import */ var _service_write_us_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/write-us.service */ 6287);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 683);
/* harmony import */ var _shared_error_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/error.component */ 6333);















const _c0 = () => ["/accounts"];
const _c1 = () => ["/email/write-us"];
const _c2 = () => ["/categories"];
const _c3 = () => ["/products"];
class HomeComponent {
  constructor(qrService, spinner, toastr, categoryService, accountService, productService, writeUsService) {
    this.qrService = qrService;
    this.spinner = spinner;
    this.toastr = toastr;
    this.categoryService = categoryService;
    this.accountService = accountService;
    this.productService = productService;
    this.writeUsService = writeUsService;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    this.errorDto = new _model_error_error_dto__WEBPACK_IMPORTED_MODULE_0__.ErrorDto();
    this.accountsIcon = _common_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.iconUser;
    this.emailIcon = _common_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.iconEmail;
    this.infoIcon = _common_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.iconInfo;
    this.gearIcon = _common_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.iconGear;
    this.categories = new Array();
    this.products = new Array();
    this.adminList = new Array();
    this.emailsInactive = new Array();
    this.emailsAll = new Array();
    this.errorCategory = new _model_error_error_dto__WEBPACK_IMPORTED_MODULE_0__.ErrorDto();
    this.errorAdmin = new _model_error_error_dto__WEBPACK_IMPORTED_MODULE_0__.ErrorDto();
    this.errorProducts = new _model_error_error_dto__WEBPACK_IMPORTED_MODULE_0__.ErrorDto();
    this.errorConfig = new _model_error_error_dto__WEBPACK_IMPORTED_MODULE_0__.ErrorDto();
    this.errorEmails = new _model_error_error_dto__WEBPACK_IMPORTED_MODULE_0__.ErrorDto();
    this.info = _common_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.iconInfo;
    this.emailPercentage = 0;
  }
  ngOnInit() {
    this.spinner.show().then(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.forkJoin)([this.loadCategories(), this.loadAccounts(), this.loadProducts(), this.loadEmails(0, false)])).then(() => this.spinner.hide());
  }
  loadProducts() {
    return this.productService.listProducts(0, this.errorProducts).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe({
      next: response => {
        this.products = response.data;
      }
    });
  }
  loadEmails(pageNumber, replied) {
    return this.writeUsService.loadEmailsWriteUs(this.errorEmails, pageNumber, 20, null, replied).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe({
      next: response => {
        this.emailsAll = response.data;
        this.emailsInactive = response.data.filter(res => res.replied == false);
      }
    });
  }
  loadCategories() {
    return this.categoryService.getCategories(this.errorCategory).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe({
      next: response => {
        this.categories = response.data;
      }
    });
  }
  loadAccounts() {
    return this.accountService.getAccounts(this.errorAdmin).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe({
      next: response => {
        this.adminList = response.data;
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  static #_ = this.ɵfac = function HomeComponent_Factory(t) {
    return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_service_qr_service__WEBPACK_IMPORTED_MODULE_2__.QrService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_12__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_13__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_service_category_service__WEBPACK_IMPORTED_MODULE_3__.CategoryService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_service_account_service__WEBPACK_IMPORTED_MODULE_4__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_service_product_service__WEBPACK_IMPORTED_MODULE_5__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_service_write_us_service__WEBPACK_IMPORTED_MODULE_6__.WriteUsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
    type: HomeComponent,
    selectors: [["app-home"]],
    decls: 66,
    vars: 25,
    consts: [[1, "row", "m-3", "pt-3"], ["bdColor", "rgba(51,51,51,0.8)", "size", "medium", "color", "#fff", "type", "ball-spin-clockwise"], [1, "col-12", "col-sm-6", "col-md-4", "col-lg-3"], [1, "card", "card-stats", "m-2"], [1, "card-body"], [1, "row"], [1, "col"], [1, "card-title"], [3, "errorDto"], [1, "mt-2", "text-white"], [1, "col-auto", "my-auto"], [1, "h1", "pointer", 3, "icon"], [1, "small-box-footer"], ["href", "#", 1, "text-darkorange", 3, "routerLink"], [1, "ms-1", 3, "icon"]],
    template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "ngx-spinner", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, " \u00DA\u010Dty ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](9, "app-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](13, "fa-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "div", 12)(15, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16, "V\u00EDce informac\u00ED ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](17, "fa-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "div", 2)(19, "div", 3)(20, "div", 4)(21, "div", 5)(22, "div", 6)(23, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](24, " Emaily ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](25, "app-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](26, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](28, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](29, "fa-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](30, "div", 12)(31, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](32, "V\u00EDce informac\u00ED ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](33, "fa-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](34, "div", 2)(35, "div", 3)(36, "div", 4)(37, "div", 5)(38, "div", 6)(39, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](40, " Kategorie ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](41, "app-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](42, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](44, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](45, "fa-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](46, "div", 12)(47, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](48, "V\u00EDce informac\u00ED ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](49, "fa-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](50, "div", 2)(51, "div", 3)(52, "div", 4)(53, "div", 5)(54, "div", 6)(55, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](56, " Produkty ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](57, "app-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](58, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](60, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](61, "fa-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](62, "div", 12)(63, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](64, "V\u00EDce informac\u00ED ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](65, "fa-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("errorDto", ctx.errorAdmin);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx.adminList.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("icon", ctx.accountsIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](21, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("icon", ctx.infoIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("errorDto", ctx.errorEmails);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"]("", ctx.emailsInactive == null ? null : ctx.emailsInactive.length, " / ", ctx.emailsAll == null ? null : ctx.emailsAll.length, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("icon", ctx.emailIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](22, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("icon", ctx.infoIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("errorDto", ctx.errorCategory);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx.categories.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("icon", ctx.gearIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](23, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("icon", ctx.infoIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("errorDto", ctx.errorProducts);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx.products.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("icon", ctx.gearIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](24, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("icon", ctx.infoIcon);
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterLink, ngx_spinner__WEBPACK_IMPORTED_MODULE_12__.NgxSpinnerComponent, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__.FaIconComponent, _shared_error_component__WEBPACK_IMPORTED_MODULE_7__.ErrorComponent],
    styles: [".small-box-footer[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.04) !important;\n  color: rgba(255, 255, 255, .8);\n  display: block;\n  padding: 3px 0;\n  position: relative;\n  text-align: center;\n  text-decoration: none;\n  z-index: 10;\n  border-bottom-left-radius: calc(0.375rem - 1px);\n  border-bottom-right-radius: calc(0.375rem - 1px);\n}\n\n.small-box-footer[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.08) !important;\n  color: rgba(255, 255, 255, .8);\n  display: block;\n  padding: 3px 0;\n  position: relative;\n  text-align: center;\n  text-decoration: none;\n  z-index: 10;\n  border-bottom-left-radius: calc(0.375rem - 1px);\n  border-bottom-right-radius: calc(0.375rem - 1px);\n}\n\n.small-box-footer[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnREFBZ0Q7RUFDaEQsOEJBQThCO0VBQzlCLGNBQWM7RUFDZCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLCtDQUErQztFQUMvQyxnREFBZ0Q7QUFDbEQ7O0FBRUE7RUFDRSxnREFBZ0Q7RUFDaEQsOEJBQThCO0VBQzlCLGNBQWM7RUFDZCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLCtDQUErQztFQUMvQyxnREFBZ0Q7QUFDbEQ7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0IiLCJzb3VyY2VzQ29udGVudCI6WyIuc21hbGwtYm94LWZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNCkgIWltcG9ydGFudDtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjgpO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogM3B4IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHotaW5kZXg6IDEwO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiBjYWxjKDAuMzc1cmVtIC0gMXB4KTtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IGNhbGMoMC4zNzVyZW0gLSAxcHgpO1xufVxuXG4uc21hbGwtYm94LWZvb3Rlcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wOCkgIWltcG9ydGFudDtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjgpO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogM3B4IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHotaW5kZXg6IDEwO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiBjYWxjKDAuMzc1cmVtIC0gMXB4KTtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IGNhbGMoMC4zNzVyZW0gLSAxcHgpO1xufVxuXG4uc21hbGwtYm94LWZvb3RlciA+IGEge1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 3061:
/*!*************************************************!*\
  !*** ./src/app/interceptor/auth.interceptor.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthInterceptor: () => (/* binding */ AuthInterceptor),
/* harmony export */   authInterceptorProviders: () => (/* binding */ authInterceptorProviders)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _service_token_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/token-storage.service */ 2981);



const TOKEN_HEADER_KEY = 'Authorization';
class AuthInterceptor {
  constructor(storageService) {
    this.storageService = storageService;
  }
  intercept(req, next) {
    let authReq = req;
    const token = this.storageService.getAdmin()?.token;
    console.log(token);
    if (token != null) {
      authReq = req.clone({
        headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token)
      });
    }
    return next.handle(authReq);
  }
  static #_ = this.ɵfac = function AuthInterceptor_Factory(t) {
    return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_service_token_storage_service__WEBPACK_IMPORTED_MODULE_0__.TokenStorageService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: AuthInterceptor,
    factory: AuthInterceptor.ɵfac
  });
}
const authInterceptorProviders = [{
  provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
}];

/***/ }),

/***/ 5096:
/*!**************************************************!*\
  !*** ./src/app/interceptor/error.interceptor.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorInterceptor: () => (/* binding */ ErrorInterceptor),
/* harmony export */   errorInterceptorProviders: () => (/* binding */ errorInterceptorProviders)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 3252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 2389);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/auth.service */ 9692);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);






class ErrorInterceptor {
  constructor(authService, route) {
    this.authService = authService;
    this.route = route;
  }
  intercept(request, next) {
    return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(err => {
      if (err.status === 401) {
        this.authService.logout();
        this.route.navigate(['/login']);
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(err);
    }));
  }
  static #_ = this.ɵfac = function ErrorInterceptor_Factory(t) {
    return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: ErrorInterceptor,
    factory: ErrorInterceptor.ɵfac
  });
}
const errorInterceptorProviders = [{
  provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HTTP_INTERCEPTORS,
  useClass: ErrorInterceptor,
  multi: true
}];

/***/ }),

/***/ 2014:
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _common_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/app-constants */ 9827);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 274);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var _model_error_error_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/error/error-dto */ 3990);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _service_shared_img_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/shared-img.service */ 7903);
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/auth.service */ 9692);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ 8375);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ 7548);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _shared_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/error.component */ 6333);














function LoginComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Username is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function LoginComponent_div_21_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function LoginComponent_div_21_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Password must be at least 4 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function LoginComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, LoginComponent_div_21_div_1_Template, 2, 0, "div", 22)(2, LoginComponent_div_21_div_2_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r3.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r3.errors.minlength);
  }
}
const _c0 = () => ["/forgot-password"];
class LoginComponent {
  constructor(sharedService, authService, route, spinner, toastr) {
    this.sharedService = sharedService;
    this.authService = authService;
    this.route = route;
    this.spinner = spinner;
    this.toastr = toastr;
    this.form = {};
    this.errorDto = new _model_error_error_dto__WEBPACK_IMPORTED_MODULE_1__.ErrorDto();
    this.faUser = _common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.iconUser;
    this.faLock = _common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.iconLock;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    /*
        if (this.authService.currentAdminValue) {
          this.route.navigate(['/home']);
        }*/
  }

  ngOnInit() {
    this.sharedService.currentImgPath.subscribe(data => this.imgLoginPath = data);
  }
  login() {
    this.spinner.show().then(r => r);
    this.authService.login(this.form, this.errorDto).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$)).subscribe({
      next: () => {
        this.spinner.hide().then(() => {
          this.route.navigate(['/home']).then(() => this.toastr.success('200 Welcome', 'Logged in'));
        });
      },
      error: () => {
        this.spinner.hide().then(() => this.toastr.error(this.errorDto.httpStatus + ' login failed', 'Login'));
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  static #_ = this.ɵfac = function LoginComponent_Factory(t) {
    return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_service_shared_img_service__WEBPACK_IMPORTED_MODULE_2__.SharedImgService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_9__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_10__.ToastrService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: LoginComponent,
    selectors: [["app-login"]],
    decls: 30,
    vars: 10,
    consts: [[1, "box"], [1, "row", "justify-content-center"], [1, "col-lg-3", "col-md-6", "col-sm-8", "align-self-center"], [1, "box-part", "text-center"], ["name", "form", "novalidate", "", 3, "ngSubmit"], ["f", "ngForm"], ["alt", "user", "width", "120", "height", "120", "id", "profile-img", 1, "profile-img-card", "mb-4", 3, "src"], [1, "input-group", "input-group-lg", "mb-4"], [1, "input-group-text"], [1, "login-icon", 3, "icon"], ["placeholder", "username", "type", "text", "name", "username", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["username", "ngModel"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], ["bdColor", "rgba(51,51,51,0.8)", "size", "large", "color", "#fff", "type", "ball-spin-clockwise"], ["placeholder", "password", "type", "password", "name", "password", "required", "", "minlength", "4", 1, "form-control", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], [1, "col-12"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", "w-100"], [1, "row"], ["routerLinkActive", "active", 1, "mt-3", 3, "routerLink"], [3, "errorDto"], ["role", "alert", 1, "alert", "alert-danger"], [4, "ngIf"]],
    template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "ADMIN LOGIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "form", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](7);
          return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](_r0.form.valid && ctx.login());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 7)(10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "fa-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_12_listener($event) {
          return ctx.form.username = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, LoginComponent_div_14_Template, 2, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "ngx-spinner", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 7)(17, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "fa-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_19_listener($event) {
          return ctx.form.password = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, LoginComponent_div_21_Template, 3, 2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 1)(23, "div", 16)(24, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 18)(27, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Forgotten\u00A0password");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](29, "app-error", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](7);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](13);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", ctx.imgLoginPath, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", ctx.faUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.form.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r0.submitted && _r1.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", ctx.faLock);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.form.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r0.submitted && _r3.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](9, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("errorDto", ctx.errorDto);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkActive, ngx_spinner__WEBPACK_IMPORTED_MODULE_9__.NgxSpinnerComponent, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__.FaIconComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgForm, _shared_error_component__WEBPACK_IMPORTED_MODULE_4__.ErrorComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 74:
/*!***********************************************!*\
  !*** ./src/app/model/admin/admin-response.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminResponse: () => (/* binding */ AdminResponse)
/* harmony export */ });
class AdminResponse {}

/***/ }),

/***/ 9714:
/*!**************************************!*\
  !*** ./src/app/model/admin/admin.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Admin: () => (/* binding */ Admin)
/* harmony export */ });
class Admin {}

/***/ }),

/***/ 6613:
/*!*************************************!*\
  !*** ./src/app/model/admin/role.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Role: () => (/* binding */ Role)
/* harmony export */ });
var Role;
(function (Role) {
  Role[Role["OWNER"] = 0] = "OWNER";
  Role[Role["ADMIN"] = 1] = "ADMIN";
  Role[Role["EMPLOYEE"] = 2] = "EMPLOYEE";
  Role[Role["USER"] = 3] = "USER";
})(Role || (Role = {}));

/***/ }),

/***/ 5201:
/*!**************************************!*\
  !*** ./src/app/model/audit/audit.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Audit: () => (/* binding */ Audit)
/* harmony export */ });
class Audit {}

/***/ }),

/***/ 7229:
/*!****************************************************!*\
  !*** ./src/app/model/category/category-request.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoryRequest: () => (/* binding */ CategoryRequest)
/* harmony export */ });
class CategoryRequest {
  constructor(category) {
    this.data = category;
  }
}

/***/ }),

/***/ 4257:
/*!********************************************!*\
  !*** ./src/app/model/category/category.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Category: () => (/* binding */ Category)
/* harmony export */ });
class Category {}

/***/ }),

/***/ 4234:
/*!******************************************************!*\
  !*** ./src/app/model/configuration/advertisement.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Advertisement: () => (/* binding */ Advertisement)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ 7104);

class Advertisement extends _config__WEBPACK_IMPORTED_MODULE_0__.Config {
  static #_ = this.ADVERTISEMENT_ADDRESS = "ADVERTISEMENT_ADDRESS";
  static #_2 = this.ADVERTISEMENT_ICO = "ADVERTISEMENT_ICO";
  static #_3 = this.ADVERTISEMENT_PHONE = "ADVERTISEMENT_PHONE";
  static #_4 = this.ADVERTISEMENT_WHO = "ADVERTISEMENT_WHO";
  static #_5 = this.ADVERTISEMENT_COMPLAINT_DAYS = "ADVERTISEMENT_COMPLAINT_DAYS";
  static #_6 = this.ADVERTISEMENT_COMPLAINT_DAYS_DELAY = "ADVERTISEMENT_COMPLAINT_DAYS_DELAY";
  static #_7 = this.ADVERTISEMENT_DUE_DATE = "ADVERTISEMENT_DUE_DATE";
  static #_8 = this.ADVERTISEMENT_CONSUMER = "ADVERTISEMENT_CONSUMER";
  static #_9 = this.ADVERTISEMENT_NAME = "ADVERTISEMENT_NAME";
  static #_10 = this.ADVERTISEMENT_SORTIMENT = "ADVERTISEMENT_SORTIMENT";
  static #_11 = this.ADVERTISEMENT_EMAIL = "ADVERTISEMENT_EMAIL";
  static #_12 = this.ADVERTISEMENT_EMAIL_WHO = "ADVERTISEMENT_EMAIL_WHO";
  static #_13 = this.ADVERTISEMENT_WEB_ADDRESS = "ADVERTISEMENT_WEB_ADDRESS";
  static #_14 = this.ADVERTISEMENT_FREE_SHIPPING_CZ = "ADVERTISEMENT_FREE_SHIPPING_CZK";
  static mapFrom(data) {
    let advertisement = new Advertisement();
    advertisement.who = super.findValueByKey(this.ADVERTISEMENT_WHO, data);
    advertisement.address = super.findValueByKey(this.ADVERTISEMENT_ADDRESS, data);
    advertisement.complaintDays = super.findValueByKey(this.ADVERTISEMENT_COMPLAINT_DAYS, data);
    advertisement.consumer = super.findValueByKey(this.ADVERTISEMENT_CONSUMER, data);
    advertisement.complaintDaysDelay = super.findValueByKey(this.ADVERTISEMENT_COMPLAINT_DAYS_DELAY, data);
    advertisement.dueDate = super.findValueByKey(this.ADVERTISEMENT_DUE_DATE, data);
    advertisement.ico = super.findValueByKey(this.ADVERTISEMENT_ICO, data);
    advertisement.phone = super.findValueByKey(this.ADVERTISEMENT_PHONE, data);
    advertisement.emailWho = super.findValueByKey(this.ADVERTISEMENT_EMAIL, data);
    advertisement.eshopEmail = super.findValueByKey(this.ADVERTISEMENT_EMAIL_WHO, data);
    advertisement.webEshopAddress = super.findValueByKey(this.ADVERTISEMENT_WEB_ADDRESS, data);
    advertisement.sortiment = super.findValueByKey(this.ADVERTISEMENT_SORTIMENT, data);
    advertisement.eshopName = super.findValueByKey(this.ADVERTISEMENT_NAME, data);
    advertisement.limitFreeShippingPrice = super.findValueByKey(this.ADVERTISEMENT_FREE_SHIPPING_CZ, data);
    return advertisement;
  }
}

/***/ }),

/***/ 9952:
/*!***************************************************************!*\
  !*** ./src/app/model/configuration/bank-configuration-dto.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BankConfigurationDto: () => (/* binding */ BankConfigurationDto)
/* harmony export */ });
class BankConfigurationDto {
  constructor(iban) {
    this.iban = iban;
  }
}

/***/ }),

/***/ 7104:
/*!***********************************************!*\
  !*** ./src/app/model/configuration/config.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Config: () => (/* binding */ Config)
/* harmony export */ });
class Config {
  static findValueByKey(name, data) {
    if (data == null) {
      return null;
    }
    return Config.findConfigByKey(name, data)?.value;
  }
  static findConfigByKey(name, data) {
    if (data == null) {
      return null;
    }
    return data.find(key => key.key.name == name);
  }
}

/***/ }),

/***/ 7198:
/*!**********************************************!*\
  !*** ./src/app/model/email/email-request.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmailRequest: () => (/* binding */ EmailRequest)
/* harmony export */ });
class EmailRequest {
  constructor(data) {
    this.data = data;
  }
}

/***/ }),

/***/ 7390:
/*!**************************************!*\
  !*** ./src/app/model/email/email.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Email: () => (/* binding */ Email)
/* harmony export */ });
class Email {
  constructor(body, recepient) {
    this.body = body;
    this.recepient = recepient;
  }
}

/***/ }),

/***/ 3990:
/*!******************************************!*\
  !*** ./src/app/model/error/error-dto.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorDto: () => (/* binding */ ErrorDto)
/* harmony export */ });
class ErrorDto {}

/***/ }),

/***/ 6994:
/*!*******************************************************************!*\
  !*** ./src/app/model/generic-config/generic-config-create-dto.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GenericConfigCreateDto: () => (/* binding */ GenericConfigCreateDto)
/* harmony export */ });
class GenericConfigCreateDto {
  constructor(data) {
    this.data = data;
  }
}

/***/ }),

/***/ 5420:
/*!*****************************************************************!*\
  !*** ./src/app/model/generic-config/generic-config-data-dto.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GenericConfigDataDto: () => (/* binding */ GenericConfigDataDto)
/* harmony export */ });
var GenericConfigDataDto;
(function (GenericConfigDataDto) {
  GenericConfigDataDto.ConfigTypeEnum = {
    SHORTSTRING: 'SHORT_STRING',
    LONGTEXT: 'LONG_TEXT',
    NUMBER: 'NUMBER'
  };
})(GenericConfigDataDto || (GenericConfigDataDto = {}));

/***/ }),

/***/ 975:
/*!****************************************************************!*\
  !*** ./src/app/model/generic-config/generic-config-key-dto.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GenericConfigKeyDto: () => (/* binding */ GenericConfigKeyDto)
/* harmony export */ });
/**
 * Eshop platform core
 * Walderkova a Dejvova servica
 *
 * OpenAPI spec version: 1.0.1-SNAPSHOT
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var GenericConfigKeyDto;
(function (GenericConfigKeyDto) {
  GenericConfigKeyDto.ModuleEnum = {
    FRONTEND_ADMIN: 'FRONTEND_ADMIN',
    FRONTEND_CUSTOMER: 'FRONTEND_CUSTOMER',
    TEXT_CONTENT: 'TEXT_CONTENT',
    CUSTOM: 'CUSTOM'
  };
})(GenericConfigKeyDto || (GenericConfigKeyDto = {}));

/***/ }),

/***/ 4761:
/*!*******************************************************************!*\
  !*** ./src/app/model/generic-config/generic-config-update-dto.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GenericConfigUpdateDto: () => (/* binding */ GenericConfigUpdateDto)
/* harmony export */ });
/**
 * Eshop platform core
 * Walderkova a Dejvova servica
 *
 * OpenAPI spec version: 1.0.1-SNAPSHOT
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
class GenericConfigUpdateDto {
  constructor(data) {
    this.data = data;
  }
}

/***/ }),

/***/ 8508:
/*!********************************************************!*\
  !*** ./src/app/model/order/address-detail-base-dto.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddressDetailBaseDto: () => (/* binding */ AddressDetailBaseDto)
/* harmony export */ });
class AddressDetailBaseDto {}

/***/ }),

/***/ 8848:
/*!********************************************************!*\
  !*** ./src/app/model/order/order-detail-output-dto.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CurrencyType: () => (/* binding */ CurrencyType),
/* harmony export */   OrderDetailOutputDto: () => (/* binding */ OrderDetailOutputDto)
/* harmony export */ });
class OrderDetailOutputDto {}
var CurrencyType;
(function (CurrencyType) {
  CurrencyType[CurrencyType["CZK"] = 0] = "CZK";
  CurrencyType[CurrencyType["EUR"] = 1] = "EUR";
})(CurrencyType || (CurrencyType = {}));
var OrderStatusType;
(function (OrderStatusType) {
  OrderStatusType[OrderStatusType["CREATED"] = 0] = "CREATED";
  OrderStatusType[OrderStatusType["PROCESSING"] = 1] = "PROCESSING";
  OrderStatusType[OrderStatusType["SHIPPED"] = 2] = "SHIPPED";
  OrderStatusType[OrderStatusType["FINISHED"] = 3] = "FINISHED";
})(OrderStatusType || (OrderStatusType = {}));
var PaymentType;
(function (PaymentType) {
  PaymentType[PaymentType["BANK_TRANSFER"] = 0] = "BANK_TRANSFER";
  PaymentType[PaymentType["CASH"] = 1] = "CASH";
  PaymentType[PaymentType["CREDIT_CARD"] = 2] = "CREDIT_CARD";
  PaymentType[PaymentType["CASH_ON_DELIVERY"] = 3] = "CASH_ON_DELIVERY";
})(PaymentType || (PaymentType = {}));

/***/ }),

/***/ 4139:
/*!**********************************************************!*\
  !*** ./src/app/model/product-sku/product-sku-request.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductSkuRequest: () => (/* binding */ ProductSkuRequest)
/* harmony export */ });
class ProductSkuRequest {
  constructor(data) {
    this.data = data;
  }
}

/***/ }),

/***/ 8332:
/*!**********************************************************!*\
  !*** ./src/app/model/product-sku/product-sku-variant.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductSkuVariant: () => (/* binding */ ProductSkuVariant)
/* harmony export */ });
class ProductSkuVariant {
  constructor(variantName, variantCatalog) {
    this.variantName = variantName;
    this.variantCatalog = variantCatalog;
  }
}

/***/ }),

/***/ 2547:
/*!**************************************************!*\
  !*** ./src/app/model/product-sku/product-sku.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductSku: () => (/* binding */ ProductSku)
/* harmony export */ });
class ProductSku {}

/***/ }),

/***/ 743:
/*!**************************************************!*\
  !*** ./src/app/model/product/product-request.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductRequest: () => (/* binding */ ProductRequest)
/* harmony export */ });
class ProductRequest {
  constructor(product) {
    this.data = product;
  }
}

/***/ }),

/***/ 2488:
/*!******************************************!*\
  !*** ./src/app/model/product/product.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Product: () => (/* binding */ Product)
/* harmony export */ });
class Product {}

/***/ }),

/***/ 6617:
/*!*******************************************!*\
  !*** ./src/app/model/qr/QrDataRequest.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QrDataRequest: () => (/* binding */ QrDataRequest)
/* harmony export */ });
class QrDataRequest {
  constructor(data) {
    this.data = data;
  }
}

/***/ }),

/***/ 7985:
/*!***************************************!*\
  !*** ./src/app/model/qr/QrRequest.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QrRequest: () => (/* binding */ QrRequest)
/* harmony export */ });
class QrRequest {}

/***/ }),

/***/ 7790:
/*!****************************************!*\
  !*** ./src/app/model/qr/QrResponse.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QrResponse: () => (/* binding */ QrResponse)
/* harmony export */ });
class QrResponse {}

/***/ }),

/***/ 3446:
/*!**********************************************!*\
  !*** ./src/app/model/stats/graph-line-vo.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GraphLineVo: () => (/* binding */ GraphLineVo)
/* harmony export */ });
class GraphLineVo {
  constructor(name, value) {
    this.name = name;
    this.value = value;
  }
}

/***/ }),

/***/ 6383:
/*!*********************************************!*\
  !*** ./src/app/model/stats/graph-pie-vo.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GraphPieVo: () => (/* binding */ GraphPieVo)
/* harmony export */ });
class GraphPieVo {
  constructor(name, value) {
    this.name = name;
    this.value = value;
  }
}

/***/ }),

/***/ 4302:
/*!***********************************************************!*\
  !*** ./src/app/model/variant-category/variant-catalog.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VariantCatalog: () => (/* binding */ VariantCatalog)
/* harmony export */ });
class VariantCatalog {}

/***/ }),

/***/ 6837:
/*!********************************************************************!*\
  !*** ./src/app/model/variant-category/variant-category-wrapper.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VariantCategoryWrapper: () => (/* binding */ VariantCategoryWrapper)
/* harmony export */ });
class VariantCategoryWrapper {
  constructor(data) {
    this.data = data;
  }
}

/***/ }),

/***/ 5832:
/*!**********************************************************!*\
  !*** ./src/app/model/variant-category/variant-detail.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VariantDetail: () => (/* binding */ VariantDetail)
/* harmony export */ });
class VariantDetail {
  constructor(name, arrangement) {
    this.name = name;
    this.arrangement = arrangement;
  }
}

/***/ }),

/***/ 5278:
/*!************************************************************!*\
  !*** ./src/app/model/variant-category/variants-request.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VariantsRequest: () => (/* binding */ VariantsRequest)
/* harmony export */ });
class VariantsRequest {
  constructor(data) {
    this.data = data;
  }
}

/***/ }),

/***/ 934:
/*!*****************************************************!*\
  !*** ./src/app/navigation/back-button.directive.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BackButtonDirective: () => (/* binding */ BackButtonDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _navigation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation.service */ 3930);


class BackButtonDirective {
  constructor(navigation) {
    this.navigation = navigation;
  }
  onClick() {
    this.navigation.back();
  }
  static #_ = this.ɵfac = function BackButtonDirective_Factory(t) {
    return new (t || BackButtonDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_navigation_service__WEBPACK_IMPORTED_MODULE_0__.NavigationService));
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
    type: BackButtonDirective,
    selectors: [["", "appBackButton", ""]],
    hostBindings: function BackButtonDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BackButtonDirective_click_HostBindingHandler() {
          return ctx.onClick();
        });
      }
    }
  });
}

/***/ }),

/***/ 3930:
/*!**************************************************!*\
  !*** ./src/app/navigation/navigation.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavigationService: () => (/* binding */ NavigationService)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);




class NavigationService {
  constructor(router, location) {
    this.router = router;
    this.location = location;
    this.history = [];
    this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__.NavigationEnd) {
        this.history.push(event.urlAfterRedirects);
      }
    });
  }
  back() {
    this.history.pop();
    if (this.history.length > 0) {
      this.location.back();
    } else {
      this.router.navigateByUrl('/');
    }
  }
  static #_ = this.ɵfac = function NavigationService_Factory(t) {
    return new (t || NavigationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.Location));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: NavigationService,
    factory: NavigationService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 2683:
/*!**************************************************************!*\
  !*** ./src/app/order/address-view/address-view.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddressViewComponent: () => (/* binding */ AddressViewComponent)
/* harmony export */ });
/* harmony import */ var _model_order_address_detail_base_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../model/order/address-detail-base-dto */ 8508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);


class AddressViewComponent {
  constructor() {
    this.address = new _model_order_address_detail_base_dto__WEBPACK_IMPORTED_MODULE_0__.AddressDetailBaseDto();
    this.type = 'Fakturacni';
  }
  static #_ = this.ɵfac = function AddressViewComponent_Factory(t) {
    return new (t || AddressViewComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AddressViewComponent,
    selectors: [["app-address-view"]],
    inputs: {
      address: "address",
      type: "type"
    },
    decls: 33,
    vars: 10,
    consts: [[1, "order-address", "col-4", "content", "text-start"], [1, "row"], [1, "col-3"]],
    template: function AddressViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1)(4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 1)(9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Street");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 1)(14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 1)(19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 1)(24, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Note:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 1)(29, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Phone:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.type, " address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.address.firstName, " ", ctx.address.lastName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.address.street, " ", ctx.address.streetNumber, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.address.zipCode, " ", ctx.address.city, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.address.country);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.address.note);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.address.phone);
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 1415:
/*!**********************************************************!*\
  !*** ./src/app/order/order-list/order-list.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderListComponent: () => (/* binding */ OrderListComponent)
/* harmony export */ });
/* harmony import */ var _model_error_error_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../model/error/error-dto */ 3990);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9985);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 274);
/* harmony import */ var _common_app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/app-constants */ 9827);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _service_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/order.service */ 1175);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ 8375);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ 7548);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _shared_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/error.component */ 6333);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 7947);













const _c0 = a1 => ["/orders/view/", a1];
function OrderListComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 14)(1, "div", 15)(2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "fa-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 24)(16, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OrderListComponent_div_21_Template_button_click_16_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const order_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.removeOrder(order_r1.orderId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "fa-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const order_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](7, _c0, order_r1.orderId));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx_r0.faEye);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", order_r1.orderId, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", order_r1.priceAmount, " ", order_r1.priceCurrency, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](order_r1.orderItems.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx_r0.faTrash);
  }
}
class OrderListComponent {
  constructor(orderService, spinner, toastr) {
    this.orderService = orderService;
    this.spinner = spinner;
    this.toastr = toastr;
    this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faTrash;
    this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faEdit;
    this.faEye = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faEye;
    this.errorDto = new _model_error_error_dto__WEBPACK_IMPORTED_MODULE_0__.ErrorDto();
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
  }
  ngOnInit() {
    this.loadOrders();
  }
  loadOrders() {
    this.spinner.show('orderListSpinner').then(r => r);
    this.orderService.listOrders(0, this.errorDto).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$)).subscribe({
      next: response => {
        this.spinner.hide('orderListSpinner').then(() => this.toastr.info(response.data.length + ' orders reloaded', 'OrderList'));
        this.orders = response.data;
      },
      error: () => {
        this.spinner.hide('orderListSpinner').then(() => {
          this.toastr.error(this.errorDto.httpStatus + ' load orders failed', 'OrderList');
          this.orders = new Array();
        });
      }
    });
  }
  removeOrder(orderId) {
    if (!confirm('Are you sure to delete account?' + orderId + '?')) {
      return;
    }
    this.spinner.show().then(r => r);
    this.orderService.deleteOrder(orderId.toString(), this.errorDto).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$)).subscribe({
      next: () => {
        this.spinner.hide().then(() => {
          this.info = 'Order id ' + orderId + ' deleted';
          this.errorDto = new _model_error_error_dto__WEBPACK_IMPORTED_MODULE_0__.ErrorDto();
          this.toastr.success(' 204 account ' + orderId + ' deleted', 'Account');
          setTimeout(() => {
            this.info = null;
          }, _common_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.toastSuccessDelay);
          this.loadOrders();
        });
      },
      error: () => {
        this.spinner.hide().then(() => this.toastr.error(+this.errorDto.httpStatus + ' delete failed', 'Account'));
      }
    });
  }
  static #_ = this.ɵfac = function OrderListComponent_Factory(t) {
    return new (t || OrderListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_order_service__WEBPACK_IMPORTED_MODULE_2__.OrderService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: OrderListComponent,
    selectors: [["app-order-list"]],
    decls: 22,
    vars: 3,
    consts: [[1, "box"], [1, "row", "justify-content-center"], [1, "col-lg-6", "col-md-8", "col-sm-10", "align-self-center"], [1, "box-part", "text-center"], [1, "row", "text-center"], [1, "input-group", "d-none", "d-sm-inline-flex"], [1, "col-12", "col-sm-3"], [1, "text-darkorange"], [1, "col-12", "col-sm-4"], [1, "col-12", "col-sm-1"], [1, "text-darkorange", 3, "icon"], ["bdColor", "rgba(51,51,51,0.8)", "size", "medium", "color", "#fff", "type", "ball-spin-clockwise"], [3, "errorDto"], ["class", "row link text-center text-md-start", 4, "ngFor", "ngForOf"], [1, "row", "link", "text-center", "text-md-start"], [1, "input-group", "border-bottom", "py-2"], ["data-label", "orderId", 1, "d-inline-block", "m-2", "text-orange", "d-sm-none"], ["routerLinkActive", "active", 1, "d-inline-block", "m-2", "text-white", "pointer", 3, "routerLink"], [1, "mx-2", 3, "icon"], [1, "col-12", "col-sm-3", "text-white"], ["data-label", "priceTotal", 1, "d-inline-block", "m-2", "text-orange", "d-sm-none"], [1, "d-inline-block", "m-2", "text-white"], ["data-label", "itemsCount", 1, "d-inline-block", "m-2", "text-orange", "d-sm-none"], [1, "d-inline-block", "m-2", "text-white", "overflow"], [1, "col-12", "col-sm-1", "my-auto", "text-center"], [1, "btn", "btn-danger", "mt-1", 3, "click"], [3, "icon"]],
    template: function OrderListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Order id");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 6)(12, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Price total");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 8)(15, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Count of items");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "fa-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "ngx-spinner", 11)(20, "app-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, OrderListComponent_div_21_Template, 18, 9, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx.faTrash);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("errorDto", ctx.errorDto);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.orders);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _shared_error_component__WEBPACK_IMPORTED_MODULE_3__.ErrorComponent, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__.FaIconComponent, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLink, ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 178:
/*!**********************************************************!*\
  !*** ./src/app/order/order-view/order-view.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderViewComponent: () => (/* binding */ OrderViewComponent)
/* harmony export */ });
/* harmony import */ var _model_error_error_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../model/error/error-dto */ 3990);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 274);
/* harmony import */ var _model_order_order_detail_output_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/order/order-detail-output-dto */ 8848);
/* harmony import */ var _common_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/app-constants */ 9827);
/* harmony import */ var _model_audit_audit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/audit/audit */ 5201);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9985);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _service_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/order.service */ 1175);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-spinner */ 8375);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-toastr */ 7548);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _shared_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/error.component */ 6333);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 683);
/* harmony import */ var _address_view_address_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../address-view/address-view.component */ 2683);
/* harmony import */ var _shared_price_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/price.pipe */ 8971);

















const _c0 = a1 => ["/products/view/", a1];
function OrderViewComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 14)(1, "div", 7)(2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "fa-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "pricePipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const orderItem_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](7, _c0, orderItem_r1.productUrl));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", ctx_r0.faView);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", orderItem_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", orderItem_r1.count, " ks");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](9, 5, orderItem_r1.price));
  }
}
class OrderViewComponent {
  constructor(orderService, spinner, actRoute, toastr) {
    this.orderService = orderService;
    this.spinner = spinner;
    this.actRoute = actRoute;
    this.toastr = toastr;
    this.errorDto = new _model_error_error_dto__WEBPACK_IMPORTED_MODULE_0__.ErrorDto();
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
    this.faView = _common_app_constants__WEBPACK_IMPORTED_MODULE_2__.AppConstants.iconEye;
    this.actualOrder = new _model_order_order_detail_output_dto__WEBPACK_IMPORTED_MODULE_1__.OrderDetailOutputDto();
    this.actualAudit = new _model_audit_audit__WEBPACK_IMPORTED_MODULE_3__.Audit();
    this.faArrowLeft = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__.faArrowLeft;
  }
  ngOnInit() {
    this.spinner.show().then(r => r);
    this.actRoute.paramMap.subscribe(params => {
      this.selectedOrderId = params.get('orderId');
    });
    this.orderService.getOrderDetail(this.selectedOrderId, this.errorDto).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$)).subscribe({
      next: orderResponse => {
        this.spinner.hide().then(() => this.toastr.info('OrderId ' + this.selectedOrderId + ' loaded', 'Order'));
        this.actualOrder = orderResponse.data;
        this.actualAudit = orderResponse.audit;
      },
      error: () => {
        this.spinner.hide().then(() => this.toastr.error(this.errorDto + ' failed', 'Order'));
        this.actualOrder = new _model_order_order_detail_output_dto__WEBPACK_IMPORTED_MODULE_1__.OrderDetailOutputDto();
        this.actualAudit = new _model_audit_audit__WEBPACK_IMPORTED_MODULE_3__.Audit();
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  static #_ = this.ɵfac = function OrderViewComponent_Factory(t) {
    return new (t || OrderViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_service_order_service__WEBPACK_IMPORTED_MODULE_4__.OrderService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_12__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_14__.ToastrService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: OrderViewComponent,
    selectors: [["app-order-view"]],
    decls: 50,
    vars: 11,
    consts: [["bdColor", "rgba(51,51,51,0.8)", "size", "medium", "color", "#fff", "type", "ball-spin-clockwise"], [1, "box"], [1, "row"], [1, "col-10"], [1, "box-part"], [1, "content", "col-6", "text-start"], [1, "col-3"], [1, "col-4"], ["class", "text-start row", 4, "ngFor", "ngForOf"], ["type", "Billing", 3, "address"], ["type", "Shipping", 3, "address"], [3, "errorDto"], ["type", "button", "appBackButton", "", 1, "btn", "btn-danger"], [3, "icon"], [1, "text-start", "row"], ["routerLinkActive", "active", 1, "pointer", "d-inline-block", "text-white", "text-break", 3, "routerLink"], [1, "me-2", 3, "icon"]],
    template: function OrderViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ngx-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 5)(8, "div", 2)(9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "Total price");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 2)(14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "div", 2)(19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, "Payment type");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "div", 2)(24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, "Note");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "div", 2)(29, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30, "Owner");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "div", 5)(34, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](35, "Order Items");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "div", 2)(37, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](38, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](40, "Count");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](42, "Price Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](43, OrderViewComponent_div_43_Template, 10, 9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](44, "app-address-view", 9)(45, "app-address-view", 10)(46, "app-error", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](48, "fa-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](49, "\u00A0Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Order detail (id = ", ctx.actualOrder.orderId, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.actualOrder.priceAmount + " " + ctx.actualOrder.priceCurrency);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.actualOrder.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.actualOrder.paymentType);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.actualOrder.note);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.actualOrder.owner);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.actualOrder.orderItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("address", ctx.actualOrder.billingAddress);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("address", ctx.actualOrder.shippingAddress);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("errorDto", ctx.errorDto);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", ctx.faArrowLeft);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _shared_error_component__WEBPACK_IMPORTED_MODULE_5__.ErrorComponent, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__.FaIconComponent, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLink, ngx_spinner__WEBPACK_IMPORTED_MODULE_12__.NgxSpinnerComponent, _address_view_address_view_component__WEBPACK_IMPORTED_MODULE_6__.AddressViewComponent, _shared_price_pipe__WEBPACK_IMPORTED_MODULE_7__.PricePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 2208:
/*!***************************************!*\
  !*** ./src/app/order/order.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderModule: () => (/* binding */ OrderModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _order_list_order_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-list/order-list.component */ 1415);
/* harmony import */ var _order_view_order_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-view/order-view.component */ 178);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 6208);
/* harmony import */ var _address_view_address_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./address-view/address-view.component */ 2683);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ 8375);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);









class OrderModule {
  static #_ = this.ɵfac = function OrderModule_Factory(t) {
    return new (t || OrderModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: OrderModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FaIconComponent, ngx_spinner__WEBPACK_IMPORTED_MODULE_7__.NgxSpinnerModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](OrderModule, {
    declarations: [_order_list_order_list_component__WEBPACK_IMPORTED_MODULE_0__.OrderListComponent, _order_view_order_view_component__WEBPACK_IMPORTED_MODULE_1__.OrderViewComponent, _address_view_address_view_component__WEBPACK_IMPORTED_MODULE_3__.AddressViewComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FaIconComponent, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, ngx_spinner__WEBPACK_IMPORTED_MODULE_7__.NgxSpinnerModule]
  });
})();

/***/ }),

/***/ 1933:
/*!**************************************************************!*\
  !*** ./src/app/password-change/password-change.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PasswordChangeComponent: () => (/* binding */ PasswordChangeComponent)
/* harmony export */ });
/* harmony import */ var _model_error_error_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/error/error-dto */ 3990);
/* harmony import */ var _common_app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/app-constants */ 9827);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _service_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/account.service */ 1522);
/* harmony import */ var _service_shared_img_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/shared-img.service */ 7903);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ 8375);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ 7548);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _shared_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/error.component */ 6333);
/* harmony import */ var _validator_password_matcher_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../validator/password-matcher.directive */ 159);
/* harmony import */ var _validator_password_pattern_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../validator/password-pattern.directive */ 5380);
















function PasswordChangeComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Password should have minimum 8 characters, at least 1 uppercase letter, 1 lowercase letter and 1 number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function PasswordChangeComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Confirm Password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function PasswordChangeComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Passwords does not match ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
const _c0 = () => ["password", "confirmPassword"];
class PasswordChangeComponent {
  constructor(accountService, sharedImgService, route, activatedRoute, spinner, toastr) {
    this.accountService = accountService;
    this.sharedImgService = sharedImgService;
    this.route = route;
    this.activatedRoute = activatedRoute;
    this.spinner = spinner;
    this.toastr = toastr;
    this.form = {};
    this.errorDto = new _model_error_error_dto__WEBPACK_IMPORTED_MODULE_0__.ErrorDto();
    this.faUser = _common_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.iconUser;
    this.faLock = _common_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.iconLock;
    this.token = '';
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    this.header = 'Create password';
  }
  ngOnInit() {
    this.sharedImgService.currentImgPath.subscribe(data => this.imgPath = data);
    this.activatedRoute.queryParamMap.subscribe(params => {
      this.token = params.get('token') || '';
    });
  }
  passwordChange() {
    this.spinner.show('refreshPasswordSpinner').then(r => r);
    this.accountService.passwordChange(this.form, this.token, this.errorDto).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe({
      next: () => {
        this.spinner.hide('accountSpinner').then(() => {
          this.toastr.success('Account activated', 'Activation');
          this.route.navigate(['/login']).then(r => r);
        });
      },
      error: () => {
        this.toastr.error(this.errorDto.httpStatus + ' password change failed', 'Login');
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  static #_ = this.ɵfac = function PasswordChangeComponent_Factory(t) {
    return new (t || PasswordChangeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_service_account_service__WEBPACK_IMPORTED_MODULE_2__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_service_shared_img_service__WEBPACK_IMPORTED_MODULE_3__.SharedImgService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_11__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_12__.ToastrService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: PasswordChangeComponent,
    selectors: [["app-forgot-password"]],
    decls: 28,
    vars: 12,
    consts: [[1, "box"], [1, "row", "justify-content-center"], [1, "col-lg-4", "col-md-6", "col-sm-8", "align-self-center"], [1, "box-part", "text-center"], ["name", "form", "novalidate", "", 3, "appMatchPassword", "ngSubmit"], ["registeredForm", "ngForm"], ["alt", "user", "width", "120", "height", "120", "id", "profile-img", 1, "profile-img-card", "mb-4", 3, "src"], [1, "input-group", "input-group-lg", "mb-4"], [1, "input-group-text"], [3, "icon"], ["placeholder", "password", "type", "password", "name", "password", "appPasswordPattern", "", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], ["bdColor", "rgba(51,51,51,0.8)", "size", "medium", "color", "#fff", "type", "ball-spin-clockwise"], ["placeholder", "confirmPassword", "type", "password", "name", "confirmPassword", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["confirmPassword", "ngModel"], [1, "row"], [1, "col"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", "mb-3"], [3, "errorDto"], ["role", "alert", 1, "alert", "alert-danger"]],
    template: function PasswordChangeComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "form", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function PasswordChangeComponent_Template_form_ngSubmit_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](7);
          return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](_r0.form.valid && ctx.passwordChange());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 7)(10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "fa-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function PasswordChangeComponent_Template_input_ngModelChange_12_listener($event) {
          return ctx.form.password = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, PasswordChangeComponent_div_14_Template, 2, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "ngx-spinner", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 7)(17, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](18, "fa-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function PasswordChangeComponent_Template_input_ngModelChange_19_listener($event) {
          return ctx.form.confirmPassword = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, PasswordChangeComponent_div_21_Template, 2, 0, "div", 12)(22, PasswordChangeComponent_div_22_Template, 2, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 16)(24, "div", 17)(25, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](27, "app-error", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](7);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](13);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.header);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("appMatchPassword", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](11, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("src", ctx.imgPath, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", ctx.faLock);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.form.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _r0.submitted && (_r1.errors == null ? null : _r1.errors.invalidPassword));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", ctx.faLock);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.form.confirmPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _r3.errors == null ? null : _r3.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _r3.errors == null ? null : _r3.errors.matching);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("errorDto", ctx.errorDto);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, ngx_spinner__WEBPACK_IMPORTED_MODULE_11__.NgxSpinnerComponent, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__.FaIconComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgForm, _shared_error_component__WEBPACK_IMPORTED_MODULE_4__.ErrorComponent, _validator_password_matcher_directive__WEBPACK_IMPORTED_MODULE_5__.PasswordMatcherDirective, _validator_password_pattern_directive__WEBPACK_IMPORTED_MODULE_6__.PasswordPatternDirective],
    encapsulation: 2
  });
}

/***/ }),

/***/ 1834:
/*!*****************************************************!*\
  !*** ./src/app/product/img/img-update.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImgUpdateComponent: () => (/* binding */ ImgUpdateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _common_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/app-constants */ 9827);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 683);





function ImgUpdateComponent_img_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 13);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", ctx_r0.existingImageName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r0.existingImage, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function ImgUpdateComponent_img_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 14);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r1.emptyDefaultImage, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function ImgUpdateComponent_img_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 14);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r2.selectedImage, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function ImgUpdateComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.invalidImage, " ");
  }
}
function ImgUpdateComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " To be updated image");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r4.selectedImage, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function ImgUpdateComponent_div_21_details_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "details")(1, "summary", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "height x width");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r6.height, " x ", ctx_r6.width, "");
  }
}
function ImgUpdateComponent_div_21_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20)(1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ImgUpdateComponent_div_21_div_8_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r8.revert());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u00A0Revert");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function ImgUpdateComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ImgUpdateComponent_div_21_details_7_Template, 5, 2, "details", 9)(8, ImgUpdateComponent_div_21_div_8_Template, 3, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r5.selectedFile.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r5.selectedFile.size / 1000, " kb");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.height);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.revertImage);
  }
}
class ImgUpdateComponent {
  constructor() {
    this.regex = new RegExp('\\w*.(gif|jpe?g|tiff?|png|webp|bmp)$');
    this.reader = new FileReader();
    this.emptyDefaultImage = _common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.emptyDefaultImage;
    this.faUpload = _common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.iconUpload;
    this.selectedImage = null;
    this.revertImage = false;
    this.selectedImageEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  revert() {
    this.revertImage = false;
    this.selectedImage = null;
    this.selectedFile = null;
    this.invalidImage = null;
  }
  selectFile(event) {
    console.log('Select file call');
    const element = event.currentTarget;
    const fileList = element.files;
    console.log(fileList);
    if (!fileList) {
      console.log('No file selected');
      this.selectedFile = null;
      this.selectedImage = null;
      this.selectedImageEmitter.emit(null);
      return;
    }
    this.selectedFile = fileList.item(0);
    if (this.regex.test(this.selectedFile.name.toLowerCase())) {
      this.invalidImage = null;
    } else {
      this.invalidImage = 'Only image should be added';
      this.selectedFile = null;
      this.selectedImage = null;
      this.selectedImageEmitter.emit(this.selectedFile);
      return;
    }
    const selectedFileSize = this.selectedFile.size / 1000;
    if (selectedFileSize > this.maxSize) {
      this.invalidImage = 'Size image too large! Maximum: ' + this.maxSize;
      console.error(this.invalidImage, selectedFileSize);
      this.selectedImageEmitter.emit(null);
      return;
    }
    this.reader.readAsDataURL(this.selectedFile);
    this.reader.onload = event => {
      this.selectedImage = event.target.result;
      this.selectedImageEmitter.emit(this.selectedFile);
      this.revertImage = true;
      const img = new Image();
      img.src = this.selectedImage;
      img.onload = () => {
        this.width = img.width;
        this.height = img.height;
        this.overlapScale('width', this.width);
        this.overlapScale('height', this.height);
      };
      img.onerror = () => {
        console.error('Img could not be read: ', event.target.error.code);
        this.selectedImageEmitter.emit(null);
      };
    };
    this.reader.onerror = event => {
      this.revertImage = false;
      console.error('File could not be read: ', event.target.error.code);
    };
  }
  overlapScale(fieldName, scale) {
    if (scale > this.maxDimension) {
      console.error('Maximum image ' + fieldName + '!', this.maxDimension, scale);
      this.invalidImage = 'Image ' + fieldName + ' oversize! Maximum: ' + this.maxDimension;
      this.selectedFile = null;
      this.selectedImage = null;
      this.revertImage = false;
      this.selectedImageEmitter.emit(null);
    }
  }
  static #_ = this.ɵfac = function ImgUpdateComponent_Factory(t) {
    return new (t || ImgUpdateComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ImgUpdateComponent,
    selectors: [["app-img-insert"]],
    inputs: {
      existingImage: "existingImage",
      existingImageName: "existingImageName",
      headerName: "headerName",
      maxSize: "maxSize",
      maxDimension: "maxDimension"
    },
    outputs: {
      selectedImageEmitter: "selectedImageEmitter"
    },
    decls: 22,
    vars: 8,
    consts: [[1, "content", "text-center", "mx-2"], [1, "row"], [1, "col"], ["class", "img-fluid", 3, "src", "alt", 4, "ngIf"], ["class", "img-fluid", "alt", "empty image", 3, "src", 4, "ngIf"], ["for", "file-upload", 1, "file-uploader"], [3, "icon"], ["id", "file-upload", "type", "file", "accept", "image/*", 3, "change"], ["class", "alert alert-danger", 4, "ngIf"], [4, "ngIf"], [1, "row", "justify-content-center"], [1, "col-12", "col-md-6"], ["class", "content", 4, "ngIf"], [1, "img-fluid", 3, "src", "alt"], ["alt", "empty image", 1, "img-fluid", 3, "src"], [1, "alert", "alert-danger"], ["alt", "added new image", 1, "img-responsive", 3, "src"], [1, "content"], ["class", "col p-3", 4, "ngIf"], [1, "p-2"], [1, "col", "p-3"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]],
    template: function ImgUpdateComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1)(4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ImgUpdateComponent_img_5_Template, 1, 2, "img", 3)(6, ImgUpdateComponent_img_6_Template, 1, 1, "img", 4)(7, ImgUpdateComponent_img_7_Template, 1, 1, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 1)(9, "div", 2)(10, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " \u00A0\u00A0\u00A0\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\u00A0\u00A0\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ImgUpdateComponent_Template_input_change_14_listener($event) {
          return ctx.selectFile($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ImgUpdateComponent_div_15_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 1)(17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, ImgUpdateComponent_div_18_Template, 4, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 10)(20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, ImgUpdateComponent_div_21_Template, 9, 4, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.headerName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.existingImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.existingImage && !ctx.selectedImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectedImage && !ctx.existingImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faUpload);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.invalidImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.existingImage && ctx.revertImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectedFile);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FaIconComponent],
    styles: ["input[type=\"file\"][_ngcontent-%COMP%] {\n  display: none;\n}\n\n.img-responsive[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n}\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvZHVjdC9pbWcvaW1nLXVwZGF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0FBQ2QiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlucHV0W3R5cGU9XCJmaWxlXCJdIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmltZy1yZXNwb25zaXZlIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 3550:
/*!***************************************************!*\
  !*** ./src/app/product/img/img-view.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImgViewComponent: () => (/* binding */ ImgViewComponent)
/* harmony export */ });
/* harmony import */ var _common_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/app-constants */ 9827);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);



function ImgViewComponent_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 6);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", ctx_r0.imgName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r0.existingImage.getValue(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function ImgViewComponent_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 7);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r1.emptyDefaultImage, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function ImgViewComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.imgContentType);
  }
}
function ImgViewComponent_details_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "details")(1, "summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "height x width");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r3.height, " x ", ctx_r3.width, "");
  }
}
class ImgViewComponent {
  constructor() {
    this.emptyDefaultImage = _common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.emptyDefaultImage;
  }
  ngOnInit() {
    this.existingImage.subscribe(data => {
      const img = new Image();
      img.src = data;
      img.onload = () => {
        this.width = img.width;
        this.height = img.height;
      };
    });
  }
  static #_ = this.ɵfac = function ImgViewComponent_Factory(t) {
    return new (t || ImgViewComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ImgViewComponent,
    selectors: [["app-img-view"]],
    inputs: {
      existingImage: "existingImage",
      imgName: "imgName",
      imgContentType: "imgContentType"
    },
    decls: 8,
    vars: 4,
    consts: [[1, "row", "justify-content-center", "content"], [1, "col-xs-12", "col-md-8"], ["class", "img-fluid mb-2", 3, "src", "alt", 4, "ngIf"], ["class", "img-fluid show-image mb-2", "alt", "empty image", 3, "src", 4, "ngIf"], [1, "info"], [4, "ngIf"], [1, "img-fluid", "mb-2", 3, "src", "alt"], ["alt", "empty image", 1, "img-fluid", "show-image", "mb-2", 3, "src"]],
    template: function ImgViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ImgViewComponent_img_2_Template, 1, 2, "img", 2)(3, ImgViewComponent_img_3_Template, 1, 1, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ImgViewComponent_span_5_Template, 2, 1, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ImgViewComponent_details_7_Template, 5, 2, "details", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.existingImage.getValue());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.existingImage.getValue());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.imgContentType);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.height);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
    styles: ["input[type=\"file\"][_ngcontent-%COMP%] {\n  display: none;\n}\n\n.img-responsive[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n}\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvZHVjdC9pbWcvaW1nLXVwZGF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0FBQ2QiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlucHV0W3R5cGU9XCJmaWxlXCJdIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmltZy1yZXNwb25zaXZlIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 936:
/*!****************************************************************!*\
  !*** ./src/app/product/product-list/product-list.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductListComponent: () => (/* binding */ ProductListComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 655);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 274);
/* harmony import */ var _model_category_category__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../model/category/category */ 4257);
/* harmony import */ var _common_app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/app-constants */ 9827);
/* harmony import */ var _model_error_error_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/error/error-dto */ 3990);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _service_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/category.service */ 4206);
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/product.service */ 2200);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ 8375);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ 7548);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _shared_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/error.component */ 6333);
/* harmony import */ var _shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/pagination/pagination.component */ 6084);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 7947);
















function ProductListComponent_select_10_option_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const category_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngValue", category_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", category_r3.url, " ");
  }
}
function ProductListComponent_select_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "select", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ProductListComponent_select_10_Template_select_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r4.selectCategory($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ProductListComponent_select_10_option_1_Template, 2, 2, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r0.selectedCategory);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r0.categories);
  }
}
const _c0 = a1 => ["/products/view/", a1];
const _c1 = () => ["/products/upsert"];
const _c2 = a0 => ({
  productUrl: a0
});
function ProductListComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 9)(1, "div", 26)(2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "fa-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](20, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](24, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div", 36)(28, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](29, "fa-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 36)(31, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ProductListComponent_div_39_Template_button_click_31_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8);
      const product_r6 = restoredCtx.$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r7.removeProduct(product_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](32, "fa-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const product_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](12, _c0, product_r6.url));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", ctx_r1.faView);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](product_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](product_r6.isbn);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](product_r6.priceAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](product_r6.priceCurrency);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](product_r6.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](product_r6.categoryUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](14, _c1))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](15, _c2, product_r6.url));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", ctx_r1.faEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", ctx_r1.faTrash);
  }
}
class ProductListComponent {
  constructor(categoryService, productService, spinner, toastr) {
    this.categoryService = categoryService;
    this.productService = productService;
    this.spinner = spinner;
    this.toastr = toastr;
    this.pages = new Array(0);
    this.page = 0;
    this.selectedCategory = null;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    this.faTrash = _common_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.iconTrash;
    this.faEdit = _common_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.iconEdit;
    this.faEye = _common_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.iconEye;
    this.faBan = _common_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.iconBan;
    this.faView = _common_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.iconEye;
    this.errorDto = new _model_error_error_dto__WEBPACK_IMPORTED_MODULE_2__.ErrorDto();
  }
  ngOnInit() {
    this.filterProducts(null);
    this.getCategories();
  }
  filterProducts(name) {
    this.spinner.show('productsSpinner').then(r => r);
    this.productService.listProducts(this.page, this.errorDto, name, this.selectedCategory).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.debounceTime)(400), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe({
      next: productFilterResponseDto => {
        this.spinner.hide('productsSpinner').then(() => {
          this.products = productFilterResponseDto.data;
          this.pages = new Array(productFilterResponseDto.meta.totalPages);
          setTimeout(() => {
            this.errorDto = new _model_error_error_dto__WEBPACK_IMPORTED_MODULE_2__.ErrorDto();
          }, _common_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.toastSuccessDelay);
        });
      },
      error: () => {
        this.spinner.hide('productsSpinner').then(() => this.toastr.error(this.errorDto.httpStatus + ' failed', 'Product'));
      }
    });
  }
  removeProduct(product) {
    this.spinner.show('productsSpinner').then(r => r);
    if (!confirm('Are you sure to delete product' + product.name + '?')) {
      this.spinner.hide('productsSpinner').then(r => r);
      return;
    }
    this.productService.deleteProduct(product, this.errorDto).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe({
      next: () => {
        this.spinner.hide('productsSpinner').then(() => {
          this.toastr.success(product.name + ' deleted', 'Product');
          this.products = this.products.filter(data => data.url !== product.url);
        });
      },
      error: () => {
        this.spinner.hide('productsSpinner').then(() => this.toastr.error(this.errorDto.httpStatus + ' delete failed!', 'Product'));
      }
    });
  }
  getCategories() {
    this.spinner.show('categoriesSpinner').then(r => r);
    this.categoryService.getCategories(this.errorDto).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe({
      next: categoriesResponse => {
        this.spinner.hide('categoriesSpinner').then(() => {
          this.categories = categoriesResponse.data;
          this.categories.push(new _model_category_category__WEBPACK_IMPORTED_MODULE_0__.Category());
          setTimeout(() => {
            this.errorDto = new _model_error_error_dto__WEBPACK_IMPORTED_MODULE_2__.ErrorDto();
          }, _common_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.toastSuccessDelay);
        });
      },
      error: () => {
        this.spinner.hide('categoriesSpinner').then(() => this.toastr.error(this.errorDto.httpStatus + ' categories failed!', 'Category'));
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  selectCategory(event) {
    !event.url ? this.selectedCategory = new _model_category_category__WEBPACK_IMPORTED_MODULE_0__.Category() : this.selectedCategory = event;
    this.filterProducts();
  }
  setPage($event) {
    this.page = $event;
    this.filterProducts();
  }
  static #_ = this.ɵfac = function ProductListComponent_Factory(t) {
    return new (t || ProductListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_service_category_service__WEBPACK_IMPORTED_MODULE_3__.CategoryService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_service_product_service__WEBPACK_IMPORTED_MODULE_4__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_11__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_12__.ToastrService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: ProductListComponent,
    selectors: [["app-product-list"]],
    decls: 44,
    vars: 7,
    consts: [[1, "box"], [1, "row", "justify-content-center"], [1, "col-lg-8", "col-md-10", "col-sm-12", "align-self-center"], [1, "box-part", "text-center"], [1, "text-orange", "mb-3"], [1, "input-group", "my-3"], ["name", "q", "type", "text", "placeholder", "Search by name", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "input-group-btn"], ["class", "form-control", 3, "ngModel", "ngModelChange", 4, "ngIf"], [1, "row", "link", "text-center", "text-md-start"], [1, "input-group", "d-none", "d-sm-inline-flex"], [1, "col-12", "col-sm-2"], [1, "text-darkorange", "text-center"], [1, "text-darkorange"], [1, "col-12", "col-sm-1"], [1, "col-12", "col-sm-1", "text-center"], [1, "text-darkorange", 3, "icon"], ["name", "categoriesSpinner", "bdColor", "rgba(51,51,51,0.8)", "size", "medium", "color", "#fff", "type", "ball-spin-clockwise"], ["name", "productsSpinner", "bdColor", "rgba(51,51,51,0.8)", "size", "medium", "color", "#fff", "type", "ball-spin-clockwise"], ["class", "row link text-center text-md-start", 4, "ngFor", "ngForOf"], [3, "errorDto"], [3, "pages", "pageChangeEmitter"], ["routerLinkActive", "active", "routerLink", "/products/upsert", 1, "btn", "btn-primary"], [1, "form-control", 3, "ngModel", "ngModelChange"], [3, "ngValue", 4, "ngFor", "ngForOf"], [3, "ngValue"], [1, "input-group", "border-bottom", "py-2"], ["data-label", "Name", 1, "d-inline-block", "m-2", "text-darkorange", "d-sm-none"], ["routerLinkActive", "active", 1, "pointer", "d-inline-block", "m-2", "text-white", "text-break", 3, "routerLink"], [1, "me-2", 3, "icon"], ["data-label", "Isbn", 1, "d-inline-block", "m-2", "text-darkorange", "d-sm-none"], [1, "d-inline-block", "m-2", "text-white"], ["data-label", "Price", 1, "d-inline-block", "m-2", "text-darkorange", "d-sm-none"], ["data-label", "Currency", 1, "d-inline-block", "m-2", "text-darkorange", "d-sm-none"], ["data-label", "Url", 1, "d-inline-block", "m-2", "text-darkorange", "d-sm-none"], ["data-label", "Category url", 1, "d-inline-block", "m-2", "text-darkorange", "d-sm-none"], [1, "col-12", "col-sm-1", "text-center", "my-auto"], ["routerLinkActive", "active", 1, "btn", "btn-primary", 3, "routerLink", "queryParams"], [3, "icon"], ["routerLinkActive", "active", 1, "btn", "btn-danger", 3, "click"]],
    template: function ProductListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div")(7, "div", 5)(8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ProductListComponent_Template_input_ngModelChange_8_listener($event) {
          return ctx.filterProducts($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, ProductListComponent_select_10_Template, 2, 2, "select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 9)(12, "div", 10)(13, "div", 11)(14, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 11)(17, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "Isbn");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 14)(20, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 14)(23, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "Currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 11)(26, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "Url");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 11)(29, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, "Category url");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "div", 15)(32, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](33, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "div", 15)(35, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](36, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](37, "ngx-spinner", 17)(38, "ngx-spinner", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](39, ProductListComponent_div_39_Template, 33, 17, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](40, "app-error", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "app-pagination", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("pageChangeEmitter", function ProductListComponent_Template_app_pagination_pageChangeEmitter_41_listener($event) {
          return ctx.setPage($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](43, "Create product ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", ctx.faEdit);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", ctx.faTrash);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("errorDto", ctx.errorDto);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pages", ctx.pages);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _shared_error_component__WEBPACK_IMPORTED_MODULE_5__.ErrorComponent, _shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_6__.PaginationComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, ngx_spinner__WEBPACK_IMPORTED_MODULE_11__.NgxSpinnerComponent, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__.FaIconComponent, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterLink],
    encapsulation: 2
  });
}

/***/ }),

/***/ 6370:
/*!**************************************************************!*\
  !*** ./src/app/product/product-sku/product-sku.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductSkuComponent: () => (/* binding */ ProductSkuComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var _common_abstract_base_image_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/abstract/base-image-component */ 4107);
/* harmony import */ var _model_product_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/product/product */ 2488);
/* harmony import */ var _model_product_sku_product_sku__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/product-sku/product-sku */ 2547);
/* harmony import */ var _common_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/app-constants */ 9827);
/* harmony import */ var _model_error_error_dto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/error/error-dto */ 3990);
/* harmony import */ var _model_product_sku_product_sku_variant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../model/product-sku/product-sku-variant */ 8332);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/product.service */ 2200);
/* harmony import */ var _service_generic_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/generic-config.service */ 8642);
/* harmony import */ var _service_product_sku_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../service/product-sku.service */ 3376);
/* harmony import */ var _service_variant_catalog_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../service/variant-catalog.service */ 5629);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-spinner */ 8375);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-toastr */ 7548);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _shared_error_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/error.component */ 6333);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 8849);



















function ProductSkuComponent_div_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ProductSkuComponent_div_12_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Name must be at least 4 characters long.");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ProductSkuComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, ProductSkuComponent_div_12_div_1_Template, 2, 0, "div", 15)(2, ProductSkuComponent_div_12_div_2_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r1.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r1.errors.minlength);
  }
}
function ProductSkuComponent_div_18_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Sku name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ProductSkuComponent_div_18_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Sku name must be at least 4 characters long.");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ProductSkuComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, ProductSkuComponent_div_18_div_1_Template, 2, 0, "div", 15)(2, ProductSkuComponent_div_18_div_2_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r1.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r1.errors.minlength);
  }
}
function ProductSkuComponent_div_24_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Price is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ProductSkuComponent_div_24_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Price must be valid ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ProductSkuComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, ProductSkuComponent_div_24_div_1_Template, 2, 0, "div", 15)(2, ProductSkuComponent_div_24_div_2_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r5.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r5.errors.isInvalidPrice && !_r5.errors.required);
  }
}
function ProductSkuComponent_option_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const catalog_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngValue", catalog_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", catalog_r16.paramName, " ");
  }
}
function ProductSkuComponent_div_30_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 24)(1, "div", 25)(2, "div", 26)(3, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 28)(6, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProductSkuComponent_div_30_div_3_Template_button_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r21);
      const variant_r19 = restoredCtx.$implicit;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r20.addVariant(variant_r19, ctx_r20.selectedCatalog));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7, "+ ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const variant_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](variant_r19.name);
  }
}
function ProductSkuComponent_div_30_div_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 24)(1, "div", 25)(2, "div", 26)(3, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 28)(6, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProductSkuComponent_div_30_div_4_div_3_Template_button_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r26);
      const i_r24 = restoredCtx.index;
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r25.removeVariant(i_r24));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7, "- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const variant_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"]("", variant_r23.variantName, " ", variant_r23.variantCatalog, "");
  }
}
function ProductSkuComponent_div_30_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "h5", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Variants added");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, ProductSkuComponent_div_30_div_4_div_3_Template, 8, 2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r18.addedVariants);
  }
}
function ProductSkuComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Variants ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, ProductSkuComponent_div_30_div_3_Template, 8, 1, "div", 23)(4, ProductSkuComponent_div_30_div_4_Template, 4, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r8.selectedCatalog == null ? null : ctx_r8.selectedCatalog.variants);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r8.addedVariants.length > 0);
  }
}
function ProductSkuComponent_div_37_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 24)(1, "div", 25)(2, "div", 26)(3, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 28)(6, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProductSkuComponent_div_37_div_3_Template_button_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r32);
      const i_r30 = restoredCtx.index;
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r31.removeSku(i_r30));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7, "- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const productSku_r29 = ctx.$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r27.resolveVariants(productSku_r29));
  }
}
function ProductSkuComponent_div_37_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 33)(1, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProductSkuComponent_div_37_div_4_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r34);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r33.saveProductVariants());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}
function ProductSkuComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Product skus ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, ProductSkuComponent_div_37_div_3_Template, 8, 1, "div", 23)(4, ProductSkuComponent_div_37_div_4_Template, 3, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r9.productSkus);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", (ctx_r9.productSkus == null ? null : ctx_r9.productSkus.length) > 0);
  }
}
const _c0 = () => ({
  standalone: true
});
class ProductSkuComponent extends _common_abstract_base_image_component__WEBPACK_IMPORTED_MODULE_0__.BaseImageComponent {
  constructor(productService, genericConfig, productSkuService, variantCatalog, route, actRoute, spinner, toastr) {
    super(spinner, toastr, route, productService, genericConfig, true);
    this.productService = productService;
    this.genericConfig = genericConfig;
    this.productSkuService = productSkuService;
    this.variantCatalog = variantCatalog;
    this.route = route;
    this.actRoute = actRoute;
    this.spinner = spinner;
    this.toastr = toastr;
    this.rootProduct = new _model_product_product__WEBPACK_IMPORTED_MODULE_1__.Product();
    this.productSku = new _model_product_sku_product_sku__WEBPACK_IMPORTED_MODULE_2__.ProductSku();
    this.faArrowLeft = _common_app_constants__WEBPACK_IMPORTED_MODULE_3__.AppConstants.iconArrowLeft;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_12__.Subject();
    this.errorDto = new _model_error_error_dto__WEBPACK_IMPORTED_MODULE_4__.ErrorDto();
    this.addedVariants = [];
    this.productSkus = [];
  }
  ngOnChanges(changes) {
    this.rootProduct = changes.rootProduct.currentValue;
    this.productSku.priceAmount = this.rootProduct.priceAmount;
    this.productSku.name = this.rootProduct.name;
    this.productSku.sku = this.rootProduct.url;
    this.getCatalogs();
  }
  getCatalogs() {
    this.spinner.show('catalogSpinner').then(r => r);
    return this.variantCatalog.listAll(this.errorDto).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroy$)).subscribe({
      next: response => {
        this.spinner.hide('catalogSpinner').then(() => {
          this.variantCatalogs = response.data;
          this.selectedCatalog = this.variantCatalogs[0];
          this.errorDto = new _model_error_error_dto__WEBPACK_IMPORTED_MODULE_4__.ErrorDto();
        });
      },
      error: () => {
        this.spinner.hide('catalogSpinner').then(() => {
          this.toastr.error(this.errorDto.httpStatus + ' load catalog failed!', 'Product');
        });
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  selectCatalog($event) {
    this.selectedCatalog = $event;
  }
  addVariant(variant, catalogName) {
    const val = new _model_product_sku_product_sku_variant__WEBPACK_IMPORTED_MODULE_5__.ProductSkuVariant(variant?.name, catalogName?.paramName);
    const filtered = this.addedVariants.filter(data => data.variantCatalog === catalogName.paramName);
    if (filtered.length == 0) {
      this.addedVariants.push(val);
    }
  }
  removeVariant(index) {
    this.addedVariants = this.addedVariants.filter((ele, ind) => ind !== index);
  }
  insertSku() {
    this.productSku.variants = this.addedVariants;
    this.productSku.priceCurrency = "CZK";
    this.productSkus.push(Object.assign({}, this.productSku));
    this.addedVariants = [];
  }
  removeSku(index) {
    this.productSkus = this.productSkus.filter((ele, int) => int !== index);
  }
  resolveVariants(productSku) {
    const val = productSku.variants?.length > 0 ? " [ " + productSku.variants.map(data => data.variantName).join(", ") + " ] " : "";
    return productSku.sku.concat(val);
  }
  saveProductVariants() {
    this.productSkus.forEach(data => this.createProductSku(data));
    setTimeout(() => {
      if (this.productSkus.length == 0) {
        this.route.navigate(['/products/view/', this.selectedProductRootUrl]).then(r => r);
      }
    }, _common_app_constants__WEBPACK_IMPORTED_MODULE_3__.AppConstants.toastSuccessDelay);
  }
  createProductSku(productSku) {
    this.spinner.show('productSkuSpinner').then(r => r);
    this.productSkuService.createProductSku(this.selectedProductRootUrl, productSku, this.errorDto).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroy$)).subscribe({
      next: () => {
        this.spinner.hide('productSkuSpinner').then(() => {
          this.productSkus = this.productSkus.filter(ele => ele !== ele);
          this.toastr.success('Sku' + productSku + ' added ', 'Product');
        });
      },
      error: () => {
        this.spinner.hide('productSkuSpinner').then(() => {
          this.toastr.error(this.errorDto.httpStatus + ' add sku failed!', 'Product');
        });
      }
    });
  }
  static #_ = this.ɵfac = function ProductSkuComponent_Factory(t) {
    return new (t || ProductSkuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_service_product_service__WEBPACK_IMPORTED_MODULE_6__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_service_generic_config_service__WEBPACK_IMPORTED_MODULE_7__.GenericConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_service_product_sku_service__WEBPACK_IMPORTED_MODULE_8__.ProductSkuService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_service_variant_catalog_service__WEBPACK_IMPORTED_MODULE_9__.VariantCatalogService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_15__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_16__.ToastrService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
    type: ProductSkuComponent,
    selectors: [["app-product-sku"]],
    inputs: {
      selectedProductRootUrl: "selectedProductRootUrl",
      rootProduct: "rootProduct"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵNgOnChangesFeature"]],
    decls: 38,
    vars: 14,
    consts: [["novalidate", "", 3, "ngSubmit"], ["upsertProductSkuForm", "ngForm"], [1, "mb-3"], ["for", "product-sku-name", 1, "form-label"], ["id", "product-sku-name", "name", "prodSkuName", "type", "text", "placeholder", "required", "required", "", "minlength", "4", 1, "form-control", 3, "ngModel", "ngModelChange"], ["prodSkuName", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], ["for", "product-sku-sku", 1, "form-label"], ["id", "product-sku-sku", "name", "prodSkuSku", "type", "text", "placeholder", "required", "required", "", "minlength", "4", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "product-price", 1, "form-label"], ["id", "product-price", "name", "product-price", "type", "text", "placeholder", "required", "appPriceValidator", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["price", "ngModel"], [1, "mb-3", "box-part"], ["minlength", "3", 1, "form-select", "mb-3", 3, "ngModel", "ngModelOptions", "ngModelChange"], [3, "ngValue", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["name", "catalogSpinner", "bdColor", "rgba(51,51,51,0.8)", "size", "medium", "color", "#fff", "type", "ball-spin-clockwise"], ["name", "productSkuSpinner", "bdColor", "rgba(51,51,51,0.8)", "size", "medium", "color", "#fff", "type", "ball-spin-clockwise"], [3, "errorDto"], [1, "col-auto", "mb-3"], ["type", "submit", 1, "btn", "btn-primary", "mx-3", "mx-sm-5"], [1, "alert", "alert-danger"], [3, "ngValue"], ["class", "row text-center", 4, "ngFor", "ngForOf"], [1, "row", "text-center"], [1, "input-group", "link", "border-bottom", "mt-1"], [1, "col-12", "col-sm-11"], [1, "d-inline-block", "text-white", "text-break"], [1, "col-12", "col-sm-1"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", "mb-1", 3, "click"], [1, "mt-2"], ["type", "button", 1, "btn", "btn-danger", "btn-sm", "mb-1", 3, "click"], ["class", "col-auto mt-3", 4, "ngIf"], [1, "col-auto", "mt-3"], ["type", "submit", 1, "btn", "btn-primary", "mx-3", "mx-sm-5", 3, "click"]],
    template: function ProductSkuComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngSubmit", function ProductSkuComponent_Template_form_ngSubmit_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r35);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](_r0.valid && ctx.insertSku());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "Add product sku");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "div", 2)(8, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function ProductSkuComponent_Template_input_ngModelChange_10_listener($event) {
          return ctx.productSku.name = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](12, ProductSkuComponent_div_12_Template, 3, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "div", 2)(14, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](15, "Sku");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "input", 8, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function ProductSkuComponent_Template_input_ngModelChange_16_listener($event) {
          return ctx.productSku.sku = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](18, ProductSkuComponent_div_18_Template, 3, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "div", 2)(20, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](21, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](22, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function ProductSkuComponent_Template_input_ngModelChange_22_listener($event) {
          return ctx.productSku.priceAmount = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](24, ProductSkuComponent_div_24_Template, 3, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](25, "div", 12)(26, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](27, "Product sku detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](28, "select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function ProductSkuComponent_Template_select_ngModelChange_28_listener($event) {
          return ctx.selectedCatalog = $event;
        })("ngModelChange", function ProductSkuComponent_Template_select_ngModelChange_28_listener($event) {
          return ctx.selectCatalog($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](29, ProductSkuComponent_option_29_Template, 2, 2, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](30, ProductSkuComponent_div_30_Template, 5, 2, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](31, "ngx-spinner", 16)(32, "ngx-spinner", 17)(33, "app-error", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](34, "div", 19)(35, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](36, "Add sku");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](37, ProductSkuComponent_div_37_Template, 5, 2, "div", 15);
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](1);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](11);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx.rootProduct.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.productSku.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r0.submitted && _r1.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.productSku.sku);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r0.submitted && _r1.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.productSku.priceAmount);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r0.submitted && _r5.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.selectedCatalog)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](13, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx.variantCatalogs);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.selectedCatalog);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("errorDto", ctx.errorDto);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", (ctx.productSkus == null ? null : ctx.productSkus.length) > 0);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _shared_error_component__WEBPACK_IMPORTED_MODULE_10__.ErrorComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgForm, ngx_spinner__WEBPACK_IMPORTED_MODULE_15__.NgxSpinnerComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 1110:
/*!********************************************************************!*\
  !*** ./src/app/product/product-upsert/product-upsert.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductUpsertComponent: () => (/* binding */ ProductUpsertComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 274);
/* harmony import */ var _common_abstract_base_image_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/abstract/base-image-component */ 4107);
/* harmony import */ var _model_product_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/product/product */ 2488);
/* harmony import */ var _model_category_category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/category/category */ 4257);
/* harmony import */ var _common_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/app-constants */ 9827);
/* harmony import */ var _model_error_error_dto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/error/error-dto */ 3990);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _service_category_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/category.service */ 4206);
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/product.service */ 2200);
/* harmony import */ var _service_generic_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/generic-config.service */ 8642);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-spinner */ 8375);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-toastr */ 7548);
/* harmony import */ var _service_variant_catalog_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../service/variant-catalog.service */ 5629);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _shared_error_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/error.component */ 6333);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 683);
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @kolkov/angular-editor */ 6070);
/* harmony import */ var _product_sku_product_sku_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../product-sku/product-sku.component */ 6370);
/* harmony import */ var _img_img_update_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../img/img-update.component */ 1834);






















function ProductUpsertComponent_option_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const category_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngValue", category_r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", category_r21.url, " ");
  }
}
function ProductUpsertComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Category must be selected.");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function ProductUpsertComponent_div_23_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Category must be selected. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function ProductUpsertComponent_div_23_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Category must be at least 3 characters long. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function ProductUpsertComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, ProductUpsertComponent_div_23_div_1_Template, 2, 0, "div", 20)(2, ProductUpsertComponent_div_23_div_2_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", _r1.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", _r1.errors.minlength);
  }
}
function ProductUpsertComponent_li_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "fa-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "\u00A0\u00A0\u00A0Empty description!! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("icon", ctx_r5.faThrash);
  }
}
function ProductUpsertComponent_li_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "fa-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("icon", ctx_r6.faBars);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("\u00A0\u00A0\u00A0", ctx_r6.selectedCategory.description, "");
  }
}
function ProductUpsertComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 53)(1, "div", 54)(2, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 58)(7, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ProductUpsertComponent_div_37_Template_button_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r26);
      const url_r24 = restoredCtx.$implicit;
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r25.removeCategories(url_r24));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](8, "fa-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const url_r24 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](url_r24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("icon", ctx_r7.faThrash);
  }
}
function ProductUpsertComponent_div_47_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Name is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function ProductUpsertComponent_div_47_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Name must be at least 4 characters long. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function ProductUpsertComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, ProductUpsertComponent_div_47_div_1_Template, 2, 0, "div", 20)(2, ProductUpsertComponent_div_47_div_2_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", _r8.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", _r8.errors.minlength);
  }
}
function ProductUpsertComponent_div_53_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Url is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function ProductUpsertComponent_div_53_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Url must be valid");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function ProductUpsertComponent_div_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, ProductUpsertComponent_div_53_div_1_Template, 2, 0, "div", 20)(2, ProductUpsertComponent_div_53_div_2_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", _r10.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", _r10.errors.isInvalidUrl && !_r10.errors.required);
  }
}
function ProductUpsertComponent_div_59_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " ISBN is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function ProductUpsertComponent_div_59_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " ISBN must be valid");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function ProductUpsertComponent_div_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, ProductUpsertComponent_div_59_div_1_Template, 2, 0, "div", 20)(2, ProductUpsertComponent_div_59_div_2_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", _r12.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", _r12.errors.isInvalidIsbn && !_r12.errors.required);
  }
}
function ProductUpsertComponent_div_65_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Price is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function ProductUpsertComponent_div_65_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Price must be valid ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function ProductUpsertComponent_div_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, ProductUpsertComponent_div_65_div_1_Template, 2, 0, "div", 20)(2, ProductUpsertComponent_div_65_div_2_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](64);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", _r14.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", _r14.errors.isInvalidPrice && !_r14.errors.required);
  }
}
function ProductUpsertComponent_option_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const currency_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngValue", currency_r35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", currency_r35, " ");
  }
}
function ProductUpsertComponent_div_72_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Currency is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function ProductUpsertComponent_div_72_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Currency must be at least 3 characters long. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function ProductUpsertComponent_div_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, ProductUpsertComponent_div_72_div_1_Template, 2, 0, "div", 20)(2, ProductUpsertComponent_div_72_div_2_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](70);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", _r16.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", _r16.errors.minlength);
  }
}
function ProductUpsertComponent_div_85_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 60)(1, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ProductUpsertComponent_div_85_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r39);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r38.show());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "fa-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, " Add\u00A0sku ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("icon", ctx_r19.faPlus);
  }
}
function ProductUpsertComponent_div_87_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "app-product-sku", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("selectedProductRootUrl", ctx_r20.selectedProductOriginalUrl)("rootProduct", ctx_r20.selectedProduct);
  }
}
const _c0 = () => ({
  standalone: true
});
const _c1 = a1 => ["/categories/view/", a1];
class ProductUpsertComponent extends _common_abstract_base_image_component__WEBPACK_IMPORTED_MODULE_0__.BaseImageComponent {
  constructor(categoryService, productService, genericConfigService, route, actRoute, spinner, toastr, catalogService) {
    super(spinner, toastr, route, productService, genericConfigService, true);
    this.categoryService = categoryService;
    this.productService = productService;
    this.genericConfigService = genericConfigService;
    this.route = route;
    this.actRoute = actRoute;
    this.spinner = spinner;
    this.toastr = toastr;
    this.catalogService = catalogService;
    this.selectedProduct = new _model_product_product__WEBPACK_IMPORTED_MODULE_1__.Product();
    this.selectedCategory = new _model_category_category__WEBPACK_IMPORTED_MODULE_2__.Category();
    this.addedCategories = [];
    this.currencies = ['CZK', 'EUR'];
    this.existingImage = null;
    this.htmlContent = '';
    this.faArrowLeft = _common_app_constants__WEBPACK_IMPORTED_MODULE_3__.AppConstants.iconArrowLeft;
    this.faPlus = _common_app_constants__WEBPACK_IMPORTED_MODULE_3__.AppConstants.iconPlus;
    this.faThrash = _common_app_constants__WEBPACK_IMPORTED_MODULE_3__.AppConstants.iconTrash;
    this.faBars = _common_app_constants__WEBPACK_IMPORTED_MODULE_3__.AppConstants.iconBars;
    this.faEye = _common_app_constants__WEBPACK_IMPORTED_MODULE_3__.AppConstants.iconEye;
    this.faAddressCard = _common_app_constants__WEBPACK_IMPORTED_MODULE_3__.AppConstants.iconAddressCard;
    this.errorDto = new _model_error_error_dto__WEBPACK_IMPORTED_MODULE_4__.ErrorDto();
    this.operation = "Create";
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_13__.Subject();
    this.catalogErrorDto = new _model_error_error_dto__WEBPACK_IMPORTED_MODULE_4__.ErrorDto();
    this.editorConfig = {
      editable: true,
      spellcheck: true,
      height: '15rem',
      minHeight: '5rem',
      placeholder: 'Enter text here...',
      translate: 'no',
      defaultParagraphSeparator: 'p',
      defaultFontName: '',
      toolbarHiddenButtons: [['undo', 'redo', 'indent', 'subscript', 'superscript', 'strikeThrough'], ['link', 'unlink', 'insertImage', 'insertVideo', 'insertHorizontalRule']]
    };
    this.headerName = "Product image";
    this.shown = false;
  }
  ngOnInit() {
    this.actRoute.queryParamMap.subscribe(params => {
      this.selectedProductOriginalUrl = params.get('productUrl');
      if (!this.selectedProductOriginalUrl) {
        this.operation = "Create";
      } else {
        this.operation = "Update";
      }
      this.resolveLoading();
    });
  }
  resolveLoading() {
    this.getCategories();
    this.getCatalogs();
    if (this.operation == "Create") {
      return;
    }
    this.getProduct();
    this.getImage();
  }
  upsertProduct() {
    if (this.operation == "Create") {
      this.createProduct();
    } else {
      this.updateProduct();
    }
  }
  getProduct() {
    this.spinner.show('productSpinnerEdited').then(r => r);
    return this.productService.getProduct(this.selectedProductOriginalUrl, this.errorDto).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this.destroy$)).subscribe({
      next: productResponse => {
        this.spinner.hide('productSpinnerEdited').then(() => {
          this.selectedProduct = productResponse.data;
          this.addedCategories = this.selectedProduct.categoryUrls;
          this.htmlContent = this.selectedProduct.description;
          this.errorDto = new _model_error_error_dto__WEBPACK_IMPORTED_MODULE_4__.ErrorDto();
        });
      },
      error: () => {
        this.spinner.hide('productSpinnerEdited').then(() => {
          this.toastr.error(this.errorDto.httpStatus + ' load product failed!', 'Product');
          this.categories = [];
          this.selectedCategory = new _model_category_category__WEBPACK_IMPORTED_MODULE_2__.Category();
        });
      }
    });
  }
  getCatalogs() {
    this.spinner.show('catalogSpinner').then(r => r);
    this.catalogService.listAll(this.catalogErrorDto).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this.destroy$)).subscribe({
      next: catalogResponse => {
        this.spinner.hide('catalogSpinner').then(() => {
          this.catalogs = catalogResponse.data;
          this.selectedCatalog = this.catalogs[0];
        });
      },
      error: () => {
        this.spinner.hide('catalogSpinner').then(() => this.toastr.error(this.errorDto.httpStatus + ' load catalog failed!', 'Catalog'));
      }
    });
  }
  getCategories() {
    this.spinner.show('categoriesSpinnerEdited').then(r => r);
    this.categoryService.getCategories(this.errorDto).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this.destroy$)).subscribe({
      next: categoriesResponse => {
        this.spinner.hide('categoriesSpinnerEdited').then(() => {
          this.categories = categoriesResponse.data;
          this.selectedCategory = this.categories[0];
        });
      },
      error: () => {
        this.spinner.hide('categoriesSpinnerEdited').then(() => this.toastr.error(this.errorDto.httpStatus + ' load category failed!', 'Category'));
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  getImage() {
    this.spinner.show('productImageSpinnerEdited').then(r => r);
    this.productService.getProductImage(this.selectedProductOriginalUrl, this.errorDto).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this.destroy$)).subscribe({
      next: productImageData => {
        this.spinner.hide('productImageSpinnerEdited').then(() => {
          if (productImageData.data.bytes == null) {
            this.existingImage = null;
            this.imgContentType = null;
          } else {
            this.existingImage = 'data:image/jpeg;base64,' + productImageData.data.bytes;
            this.imgContentType = productImageData.data.type;
          }
        });
      },
      error: () => {
        this.spinner.hide('productImageSpinnerEdited').then(() => this.toastr.error(this.errorDto.httpStatus + ' load image failed!', 'Product'));
      }
    });
  }
  selectImage(event) {
    this.selectedFile = event;
  }
  updateProduct() {
    this.spinner.show('productImageSpinnerEdited').then(r => r);
    this.selectedProduct.categoryUrls = this.addedCategories;
    this.selectedProduct.description = this.htmlContent;
    if (this.selectedProduct?.description?.length < 12 && this.selectedProduct?.description?.length > 0) {
      this.errorDto.httpStatus = 400;
      this.errorDto.httpStatusMessage = 'Bad Request';
      this.errorDto.httpStatusMessage = 'Description length < 12';
      this.spinner.hide('productImageSpinnerEdited').then(r => r);
      return;
    }
    if (this.selectedProduct?.description?.length > 600 && this.selectedProduct.description?.length > 0) {
      this.errorDto.httpStatus = 400;
      this.errorDto.httpStatusMessage = 'Bad Request';
      this.errorDto.httpStatusMessage = 'Description length < 12';
      this.spinner.hide('productImageSpinnerEdited').then(r => r);
      return;
    }
    this.productService.updateProduct(this.selectedProduct, this.selectedProductOriginalUrl, this.errorDto).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this.destroy$)).subscribe({
      next: productResponse => {
        this.spinner.hide('productImageSpinnerEdited').then(() => {
          this.htmlContent = '';
          this.selectedProduct = productResponse.data;
          this.selectedProductOriginalUrl = productResponse.data.url;
          this.upsertProductImage(this.selectedProductOriginalUrl, this.errorDto);
        });
      },
      error: () => {
        this.spinner.hide('productImageSpinnerEdited').then(() => this.toastr.error(this.selectedProductOriginalUrl + ' product update failed', 'Product'));
      }
    });
  }
  createProduct() {
    this.selectedProduct.categoryUrls = this.addedCategories;
    this.selectedProduct.description = this.htmlContent;
    if (this.selectedProduct?.description?.length < 12 && this.selectedProduct?.description?.length > 0) {
      this.errorDto.httpStatus = 400;
      this.errorDto.httpStatusMessage = 'Bad Request';
      this.errorDto.httpStatusMessage = 'Description length < 12';
      this.spinner.hide('productImageSpinnerEdited').then(r => r);
      return;
    }
    if (this.selectedProduct?.description?.length > 600 && this.selectedProduct.description?.length > 0) {
      this.errorDto.httpStatus = 400;
      this.errorDto.httpStatusMessage = 'Bad Request';
      this.errorDto.httpStatusMessage = 'Description length < 12';
      this.spinner.hide('productImageSpinnerEdited').then(r => r);
      return;
    }
    this.spinner.show().then(r => r);
    this.productService.createProduct(this.selectedProduct, this.errorDto).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this.destroy$)).subscribe({
      next: productResponse => {
        this.spinner.hide().then(() => this.toastr.success(productResponse.data.name, 'Product'));
        this.selectedProduct = productResponse.data;
        this.upsertProductImage(this.selectedProduct.url, this.errorDto);
      },
      error: err => {
        this.spinner.hide().then(() => this.toastr.error(this.selectedProduct.name + ' create failed', 'Product'));
      }
    });
  }
  selectCurrency(event) {
    this.selectedProduct.priceCurrency = event;
  }
  selectCategory(event) {
    this.selectedCategory = event;
  }
  addCategory() {
    const category = this.addedCategories.find(url => url === this.selectedCategory.url);
    if (!category && this.selectedCategory?.url) {
      this.addedCategories.push(this.selectedCategory.url);
    }
  }
  removeCategories(catUrl) {
    this.addedCategories = this.addedCategories.filter(url => url !== catUrl);
  }
  show() {
    this.shown = !this.shown;
  }
  static #_ = this.ɵfac = function ProductUpsertComponent_Factory(t) {
    return new (t || ProductUpsertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_service_category_service__WEBPACK_IMPORTED_MODULE_5__.CategoryService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_service_product_service__WEBPACK_IMPORTED_MODULE_6__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_service_generic_config_service__WEBPACK_IMPORTED_MODULE_7__.GenericConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_16__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_17__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_service_variant_catalog_service__WEBPACK_IMPORTED_MODULE_8__.VariantCatalogService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
    type: ProductUpsertComponent,
    selectors: [["app-product-edited"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵInheritDefinitionFeature"]],
    decls: 88,
    vars: 43,
    consts: [[1, "box"], [1, "row", "justify-content-center", "box-part"], [1, "col-lg-5", "col-sm-12"], [1, "text-center"], [1, "text-orange", "mb-3"], ["novalidate", "", 3, "ngSubmit"], ["editProductForm", "ngForm"], ["name", "categoriesSpinnerEdited", "bdColor", "rgba(51,51,51,0.8)", "size", "medium", "color", "#fff", "type", "ball-spin-clockwise"], ["name", "productImageSpinnerEdited", "bdColor", "rgba(51,51,51,0.8)", "size", "medium", "color", "#fff", "type", "ball-spin-clockwise"], ["name", "productSpinnerEdited", "bdColor", "rgba(51,51,51,0.8)", "size", "medium", "color", "#fff", "type", "ball-spin-clockwise"], ["name", "catalogSpinner", "bdColor", "rgba(51,51,51,0.8)", "size", "medium", "color", "#fff", "type", "ball-spin-clockwise"], [1, "content"], [1, "m-2"], ["minlength", "3", 1, "form-select", "mb-3", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["select", "ngModel"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["class", "alert alert-danger", 4, "ngIf"], [1, "list-unstyled", "text-start", "m-2"], ["aria-hidden", "true", "routerLinkActive", "active", 1, "pointer", "m-2", 3, "routerLink"], [1, "text-darkorange", 3, "icon"], [4, "ngIf"], ["class", "m-2", 4, "ngIf"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["class", "row link text-center", 4, "ngFor", "ngForOf"], [3, "headerName", "maxDimension", "maxSize", "existingImage", "existingImageName", "selectedImageEmitter"], [1, "mt-3"], ["for", "product-name", 1, "form-label"], ["id", "product-name", "name", "name", "type", "text", "placeholder", "required", "minlength", "4", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], ["for", "product-url", 1, "form-label"], ["id", "product-url", "name", "url", "type", "text", "placeholder", "required", "appUrlValidator", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["url", "ngModel"], ["for", "product-isbn", 1, "form-label"], ["id", "product-isbn", "name", "isbn", "type", "text", "placeholder", "required (9971502100)", "appIsbnValidator", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["isbn", "ngModel"], ["for", "product-price", 1, "form-label"], ["id", "product-price", "name", "product-price", "type", "text", "placeholder", "required", "appPriceValidator", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["price", "ngModel"], ["for", "product-currency", 1, "form-label"], ["id", "product-currency", "minlength", "3", 1, "form-select", "mb-3", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["currency", "ngModel"], ["for", "product-edited-description", 1, "form-label"], ["id", "product-edited-description", "name", "description", 1, "form-control", 3, "placeholder", "ngModel", "config", "ngModelChange"], [3, "errorDto"], [1, "col-auto"], ["type", "submit", 1, "btn", "btn-primary"], ["type", "button", "appBackButton", "", 1, "ms-5", "btn", "btn-danger"], [3, "icon"], ["class", "col-auto mt-3", 4, "ngIf"], [1, "col-lg-1", "col-sm-12"], ["class", "col-lg-5 col-sm-12 text-center justify-content-end", 4, "ngIf"], [3, "ngValue"], [1, "alert", "alert-danger"], [1, "row", "link", "text-center"], [1, "input-group", "border-bottom", "py-2"], [1, "col-12", "col-sm-10"], ["data-label", "Name", 1, "d-inline-block", "m-2", "text-darkorange", "d-sm-none"], [1, "pointer", "d-inline-block", "m-2", "text-white", "text-break"], [1, "col-12", "col-sm-1", "text-center", "my-auto"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], [1, "col-auto", "mt-3"], ["type", "button", "routerLinkActive", "active", 1, "btn", "btn-primary", "ms-2", 3, "click"], [1, "col-lg-5", "col-sm-12", "text-center", "justify-content-end"], [3, "selectedProductRootUrl", "rootProduct"]],
    template: function ProductUpsertComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "Update product");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "form", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngSubmit", function ProductUpsertComponent_Template_form_ngSubmit_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r40);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](7);
          return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](_r0.form.valid && ctx.upsertProduct());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](8, "ngx-spinner", 7)(9, "ngx-spinner", 8)(10, "ngx-spinner", 9)(11, "ngx-spinner", 10)(12, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "div", 11)(16, "div", 12)(17, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](18, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "select", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function ProductUpsertComponent_Template_select_ngModelChange_19_listener($event) {
          return ctx.selectedCategory = $event;
        })("ngModelChange", function ProductUpsertComponent_Template_select_ngModelChange_19_listener($event) {
          return ctx.selectCategory($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](21, ProductUpsertComponent_option_21_Template, 2, 2, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](22, ProductUpsertComponent_div_22_Template, 2, 0, "div", 16)(23, ProductUpsertComponent_div_23_Template, 3, 2, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](24, "ul", 17)(25, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](26, "fa-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](28, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](29, "fa-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](31, ProductUpsertComponent_li_31_Template, 3, 1, "li", 20)(32, ProductUpsertComponent_li_32_Template, 3, 2, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](33, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ProductUpsertComponent_Template_button_click_33_listener() {
          return ctx.addCategory();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](34, "\u00A0Add category");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](35, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](36, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](37, ProductUpsertComponent_div_37_Template, 9, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](38, "app-img-insert", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("selectedImageEmitter", function ProductUpsertComponent_Template_app_img_insert_selectedImageEmitter_38_listener($event) {
          return ctx.selectImage($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](39, "div", 11)(40, "h4", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](41, "Product detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](42, "div", 12)(43, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](44, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](45, "input", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function ProductUpsertComponent_Template_input_ngModelChange_45_listener($event) {
          return ctx.selectedProduct.name = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](47, ProductUpsertComponent_div_47_Template, 3, 2, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](48, "div", 12)(49, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](50, "Url");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](51, "input", 30, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function ProductUpsertComponent_Template_input_ngModelChange_51_listener($event) {
          return ctx.selectedProduct.url = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](53, ProductUpsertComponent_div_53_Template, 3, 2, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](54, "div", 12)(55, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](56, "ISBN");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](57, "input", 33, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function ProductUpsertComponent_Template_input_ngModelChange_57_listener($event) {
          return ctx.selectedProduct.isbn = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](59, ProductUpsertComponent_div_59_Template, 3, 2, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](60, "div", 12)(61, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](62, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](63, "input", 36, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function ProductUpsertComponent_Template_input_ngModelChange_63_listener($event) {
          return ctx.selectedProduct.priceAmount = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](65, ProductUpsertComponent_div_65_Template, 3, 2, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](66, "div", 12)(67, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](68, "Currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](69, "select", 39, 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function ProductUpsertComponent_Template_select_ngModelChange_69_listener($event) {
          return ctx.selectedProduct.priceCurrency = $event;
        })("ngModelChange", function ProductUpsertComponent_Template_select_ngModelChange_69_listener($event) {
          return ctx.selectCurrency($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](71, ProductUpsertComponent_option_71_Template, 2, 2, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](72, ProductUpsertComponent_div_72_Template, 3, 2, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](73, "div", 12)(74, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](75, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](76, "angular-editor", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function ProductUpsertComponent_Template_angular_editor_ngModelChange_76_listener($event) {
          return ctx.htmlContent = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](77, "app-error", 43)(78, "app-error", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](79, "div", 44)(80, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](81, "\u00A0Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](82, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](83, "fa-icon", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](84, "\u00A0Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](85, ProductUpsertComponent_div_85_Template, 4, 1, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](86, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](87, ProductUpsertComponent_div_87_Template, 2, 2, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](7);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](20);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](46);
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](52);
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](58);
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](64);
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx.selectedProduct.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx.selectedCategory)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](39, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx.selectedCategory.url);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", _r0.submitted && _r1.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](40, _c1, ctx.selectedCategory.url));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("icon", ctx.faEye);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("\u00A0\u00A0 ", ctx.selectedCategory.url, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("icon", ctx.faAddressCard);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("\u00A0\u00A0", ctx.selectedCategory.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx.selectedCategory.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.selectedCategory.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx.addedCategories);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("headerName", ctx.headerName)("maxDimension", ctx.maxDimension)("maxSize", ctx.maxSize)("existingImage", ctx.existingImage)("existingImageName", ctx.selectedProduct.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx.selectedProduct.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", _r0.submitted && _r8.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx.selectedProduct.url);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", _r0.submitted && _r10.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx.selectedProduct.isbn);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", _r0.submitted && _r12.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx.selectedProduct.priceAmount);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", _r0.submitted && _r14.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx.selectedProduct.priceCurrency)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](42, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx.currencies);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", _r0.submitted && _r16.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("placeholder", "Enter text here...")("ngModel", ctx.htmlContent)("config", ctx.editorConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("errorDto", ctx.imgErrorDto);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("errorDto", ctx.errorDto);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("icon", ctx.faArrowLeft);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.selectedProduct == null ? null : ctx.selectedProduct.url);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.shown);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _shared_error_component__WEBPACK_IMPORTED_MODULE_9__.ErrorComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgForm, ngx_spinner__WEBPACK_IMPORTED_MODULE_16__.NgxSpinnerComponent, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_20__.FaIconComponent, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterLink, _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_21__.AngularEditorComponent, _product_sku_product_sku_component__WEBPACK_IMPORTED_MODULE_10__.ProductSkuComponent, _img_img_update_component__WEBPACK_IMPORTED_MODULE_11__.ImgUpdateComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 9524:
/*!****************************************************************!*\
  !*** ./src/app/product/product-view/product-view.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductViewComponent: () => (/* binding */ ProductViewComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 274);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var _model_product_product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../model/product/product */ 2488);
/* harmony import */ var _model_audit_audit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/audit/audit */ 5201);
/* harmony import */ var _common_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/app-constants */ 9827);
/* harmony import */ var _model_error_error_dto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/error/error-dto */ 3990);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/product.service */ 2200);
/* harmony import */ var _service_product_sku_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/product-sku.service */ 3376);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-spinner */ 8375);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-toastr */ 7548);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _shared_error_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/error.component */ 6333);
/* harmony import */ var _shared_audit_audit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/audit/audit.component */ 887);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 683);
/* harmony import */ var _img_img_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/img-view.component */ 3550);

















const _c0 = a1 => ["/categories/view/", a1];
function ProductViewComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 21)(1, "div", 22)(2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "fa-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const cat_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](3, _c0, cat_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("icon", ctx_r0.faEye);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("\u00A0", cat_r4, " ");
  }
}
function ProductViewComponent_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "fa-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "\u00A0\u00A0Empty description!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("icon", ctx_r1.faThrash);
  }
}
function ProductViewComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("innerHTML", ctx_r2.selectedProduct.description, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeHtml"]);
  }
}
const _c1 = a1 => ["/products/sku/view/", a1];
function ProductViewComponent_div_23_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 26)(1, "div", 35)(2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 41)(15, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](16, "fa-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "div", 41)(18, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProductViewComponent_div_23_div_18_Template_button_click_18_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r8);
      const productSku_r6 = restoredCtx.$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r7.removeProductSku(productSku_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](19, "fa-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const productSku_r6 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](productSku_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](productSku_r6.sku);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](productSku_r6.priceAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](6, _c1, productSku_r6.sku));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("icon", ctx_r5.faEye);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("icon", ctx_r5.faTrash);
  }
}
function ProductViewComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div")(1, "div", 26)(2, "div", 27)(3, "div", 28)(4, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 30)(7, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "Sku");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 30)(10, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 32)(13, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](14, "fa-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "div", 32)(16, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](17, "fa-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](18, ProductViewComponent_div_23_div_18_Template, 20, 8, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("icon", ctx_r3.faEye);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("icon", ctx_r3.faTrash);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r3.productSkus);
  }
}
const _c2 = a1 => ["/products/sku/", a1];
class ProductViewComponent {
  constructor(productService, productSkuService, route, actRoute, spinner, toastr) {
    this.productService = productService;
    this.productSkuService = productSkuService;
    this.route = route;
    this.actRoute = actRoute;
    this.spinner = spinner;
    this.toastr = toastr;
    this.selectedProduct = new _model_product_product__WEBPACK_IMPORTED_MODULE_0__.Product();
    this.selectedAudit = new _model_audit_audit__WEBPACK_IMPORTED_MODULE_1__.Audit();
    this.faEdit = _common_app_constants__WEBPACK_IMPORTED_MODULE_2__.AppConstants.iconEdit;
    this.faArrowLeft = _common_app_constants__WEBPACK_IMPORTED_MODULE_2__.AppConstants.iconArrowLeft;
    this.faPlus = _common_app_constants__WEBPACK_IMPORTED_MODULE_2__.AppConstants.iconPlus;
    this.faThrash = _common_app_constants__WEBPACK_IMPORTED_MODULE_2__.AppConstants.iconTrash;
    this.faUser = _common_app_constants__WEBPACK_IMPORTED_MODULE_2__.AppConstants.iconUser;
    this.faEye = _common_app_constants__WEBPACK_IMPORTED_MODULE_2__.AppConstants.iconEye;
    this.faTrash = _common_app_constants__WEBPACK_IMPORTED_MODULE_2__.AppConstants.iconTrash;
    this.existingImage = new rxjs__WEBPACK_IMPORTED_MODULE_10__.BehaviorSubject('');
    this.errorDto = new _model_error_error_dto__WEBPACK_IMPORTED_MODULE_3__.ErrorDto();
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subject();
    this.errorProductSkuDto = new _model_error_error_dto__WEBPACK_IMPORTED_MODULE_3__.ErrorDto();
  }
  ngOnInit() {
    this.actRoute.paramMap.subscribe(params => {
      this.selectedProductOriginalUrl = params.get('productUrl');
      this.getProduct();
      this.getImage();
      this.loadSkus();
    });
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  loadSkus() {
    this.spinner.show('productSkuSpinner').then(r => r);
    return this.productSkuService.skuList(this.selectedProductOriginalUrl, this.errorProductSkuDto).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this.destroy$)).subscribe({
      next: skuResponse => {
        this.spinner.hide('productSkuSpinner').then(() => {
          this.productSkus = skuResponse.data;
          this.errorProductSkuDto = new _model_error_error_dto__WEBPACK_IMPORTED_MODULE_3__.ErrorDto();
        });
      },
      error: () => {
        this.spinner.hide('productSkuSpinner').then(() => this.toastr.error(this.errorProductSkuDto.httpStatus + ' product skus failed', 'Product'));
      }
    });
  }
  getProduct() {
    this.spinner.show('productSpinner').then(r => r);
    return this.productService.getProduct(this.selectedProductOriginalUrl, this.errorDto).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this.destroy$)).subscribe({
      next: productResponse => {
        this.spinner.hide('productSpinner').then(() => {
          this.selectedProduct = productResponse.data;
          this.selectedAudit = productResponse.audit;
          this.selectedCategoryUrl = this.selectedProduct.categoryUrls[0];
        });
      },
      error: () => {
        this.spinner.hide('productSpinner').then(() => this.toastr.error(this.errorDto.httpStatus + ' product reload failed', 'Product'));
      }
    });
  }
  getImage() {
    this.spinner.show('productImageSpinner').then(r => r);
    this.productService.getProductImage(this.selectedProductOriginalUrl, this.errorDto).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this.destroy$)).subscribe({
      next: productImageData => {
        this.spinner.hide('productImageSpinner').then(() => {
          if (productImageData.data.bytes == null) {
            this.imgContentType = null;
            this.toastr.warning(this.selectedProductOriginalUrl + ' has empty image', 'Product');
          } else {
            this.existingImage.next('data:image/jpeg;base64,' + productImageData.data.bytes);
            this.imgContentType = productImageData.data.type;
            this.toastr.info(this.selectedProductOriginalUrl + ' image reloaded', 'Product');
          }
        });
      },
      error: () => {
        this.spinner.hide('productImageSpinner').then(() => this.toastr.error(this.errorDto.httpStatus + ' image reloaded fail', 'Product'));
      }
    });
  }
  removeProductSku(productSku) {
    if (!confirm('Are you sure to delete sku?' + productSku.sku + '?')) {
      return;
    }
    this.spinner.show('productSkuSpinner').then(r => r);
    return this.productSkuService.deleteProductSku(productSku.sku, this.errorProductSkuDto).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this.destroy$)).subscribe({
      next: () => {
        this.spinner.hide('productSkuSpinner').then(() => {
          this.errorProductSkuDto = new _model_error_error_dto__WEBPACK_IMPORTED_MODULE_3__.ErrorDto();
          this.loadSkus();
        });
      },
      error: () => {
        this.spinner.hide('productSkuSpinner').then(() => this.toastr.error(this.errorProductSkuDto.httpStatus + ' product skus failed', 'Product'));
      }
    });
  }
  static #_ = this.ɵfac = function ProductViewComponent_Factory(t) {
    return new (t || ProductViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_service_product_service__WEBPACK_IMPORTED_MODULE_4__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_service_product_sku_service__WEBPACK_IMPORTED_MODULE_5__.ProductSkuService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_14__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_15__.ToastrService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: ProductViewComponent,
    selectors: [["app-product-view"]],
    decls: 31,
    vars: 16,
    consts: [[1, "box"], [1, "row", "justify-content-center"], [1, "col-lg-6", "col-sm-10", "align-self-center"], [1, "box-part", "text-center"], ["name", "productImageSpinner", "bdColor", "rgba(51,51,51,0.8)", "size", "medium", "color", "#fff", "type", "ball-spin-clockwise"], ["name", "productSpinner", "bdColor", "rgba(51,51,51,0.8)", "size", "medium", "color", "#fff", "type", "ball-spin-clockwise"], ["name", "productSkuSpinner", "bdColor", "rgba(51,51,51,0.8)", "size", "medium", "color", "#fff", "type", "ball-spin-clockwise"], [1, "border-bottom", "pb-2"], [1, "m-3"], [3, "audit"], [1, "content", "mt-1"], ["class", "row text-white mb-3", 4, "ngFor", "ngForOf"], [1, "row", "justify-content-center", "content"], [1, "col-xs-12", "col-md-8"], [4, "ngIf"], [3, "imgName", "existingImage", "imgContentType"], [3, "errorDto"], [1, "col-auto", "mt-3"], ["type", "button", "aria-hidden", "true", "appBackButton", "", 1, "btn", "btn-danger", "me-2"], [3, "icon"], ["type", "button", "routerLinkActive", "active", 1, "btn", "btn-primary", "ms-2", 3, "routerLink"], [1, "row", "text-white", "mb-3"], [1, "col"], [1, "pointer", 3, "routerLink"], [1, "url", 3, "icon"], [3, "innerHTML"], [1, "row", "link", "text-center", "text-md-start"], [1, "input-group", "d-none", "d-sm-inline-flex"], [1, "col-12", "col-sm-4"], [1, "text-darkorange", "text-center"], [1, "col-12", "col-sm-3"], [1, "text-darkorange"], [1, "col-12", "col-sm-1", "text-center"], [1, "text-darkorange", 3, "icon"], ["class", "row link text-center text-md-start", 4, "ngFor", "ngForOf"], [1, "input-group", "border-bottom", "py-2"], ["data-label", "Name", 1, "d-inline-block", "m-2", "text-darkorange", "d-sm-none"], [1, "pointer", "d-inline-block", "m-2", "text-white", "text-break"], ["data-label", "Sku", 1, "d-inline-block", "m-2", "text-darkorange", "d-sm-none"], [1, "d-inline-block", "m-2", "text-white"], ["data-label", "Price", 1, "d-inline-block", "m-2", "text-darkorange", "d-sm-none"], [1, "col-12", "col-sm-1", "text-center", "my-auto"], ["routerLinkActive", "active", 1, "btn", "btn-primary", 3, "routerLink"], ["routerLinkActive", "active", 1, "btn", "btn-danger", 3, "click"]],
    template: function ProductViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "ngx-spinner", 4)(5, "ngx-spinner", 5)(6, "ngx-spinner", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "Product\u00A0detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "app-audit", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](15, ProductViewComponent_div_15_Template, 5, 5, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "div", 12)(17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](18, ProductViewComponent_span_18_Template, 3, 1, "span", 14)(19, ProductViewComponent_div_19_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](20, "app-img-view", 15)(21, "app-error", 16)(22, "app-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](23, ProductViewComponent_div_23_Template, 19, 3, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "div", 17)(25, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](26, "fa-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27, "\u00A0Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](29, "fa-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](30, " Add\u00A0sku ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.selectedProduct.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("audit", ctx.selectedAudit);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.selectedProduct.categoryUrls);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.selectedProduct.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.selectedProduct.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("imgName", ctx.selectedProduct == null ? null : ctx.selectedProduct.name)("existingImage", ctx.existingImage)("imgContentType", ctx.imgContentType);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("errorDto", ctx.errorDto);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("errorDto", ctx.errorProductSkuDto);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (ctx.productSkus == null ? null : ctx.productSkus.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("icon", ctx.faArrowLeft);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](14, _c2, ctx.selectedProductOriginalUrl));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("icon", ctx.faPlus);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _shared_error_component__WEBPACK_IMPORTED_MODULE_6__.ErrorComponent, _shared_audit_audit_component__WEBPACK_IMPORTED_MODULE_7__.AuditComponent, ngx_spinner__WEBPACK_IMPORTED_MODULE_14__.NgxSpinnerComponent, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__.FaIconComponent, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLink, _img_img_view_component__WEBPACK_IMPORTED_MODULE_8__.ImgViewComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 6848:
/*!*******************************************!*\
  !*** ./src/app/product/product.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductModule: () => (/* binding */ ProductModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 6208);
/* harmony import */ var _product_sku_product_sku_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-sku/product-sku.component */ 6370);
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-list/product-list.component */ 936);
/* harmony import */ var _product_upsert_product_upsert_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-upsert/product-upsert.component */ 1110);
/* harmony import */ var _product_view_product_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-view/product-view.component */ 9524);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ 8375);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @kolkov/angular-editor */ 6070);
/* harmony import */ var _img_img_update_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/img-update.component */ 1834);
/* harmony import */ var _img_img_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/img-view.component */ 3550);
/* harmony import */ var _sku_view_product_sku_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sku-view/product-sku-view.component */ 344);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1699);















class ProductModule {
  static #_ = this.ɵfac = function ProductModule_Factory(t) {
    return new (t || ProductModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
    type: ProductModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_11__.NgxSpinnerModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__.FaIconComponent, _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_13__.AngularEditorModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](ProductModule, {
    declarations: [_product_view_product_view_component__WEBPACK_IMPORTED_MODULE_4__.ProductViewComponent, _product_upsert_product_upsert_component__WEBPACK_IMPORTED_MODULE_3__.ProductUpsertComponent, _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_2__.ProductListComponent, _product_sku_product_sku_component__WEBPACK_IMPORTED_MODULE_1__.ProductSkuComponent, _sku_view_product_sku_view_component__WEBPACK_IMPORTED_MODULE_7__.ProductSkuViewComponent, _img_img_update_component__WEBPACK_IMPORTED_MODULE_5__.ImgUpdateComponent, _img_img_view_component__WEBPACK_IMPORTED_MODULE_6__.ImgViewComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_11__.NgxSpinnerModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__.FaIconComponent, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterLink, _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_13__.AngularEditorModule]
  });
})();

/***/ }),

/***/ 344:
/*!****************************************************************!*\
  !*** ./src/app/product/sku-view/product-sku-view.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductSkuViewComponent: () => (/* binding */ ProductSkuViewComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 274);
/* harmony import */ var _model_product_sku_product_sku__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../model/product-sku/product-sku */ 2547);
/* harmony import */ var _model_audit_audit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/audit/audit */ 5201);
/* harmony import */ var _common_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/app-constants */ 9827);
/* harmony import */ var _model_error_error_dto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/error/error-dto */ 3990);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _service_product_sku_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/product-sku.service */ 3376);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-spinner */ 8375);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-toastr */ 7548);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _shared_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/error.component */ 6333);
/* harmony import */ var _shared_audit_audit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/audit/audit.component */ 887);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 683);
/* harmony import */ var _img_img_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/img-view.component */ 3550);
















function ProductSkuViewComponent_div_17_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 13)(1, "div", 14)(2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const variant_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", variant_r2.variantName, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](variant_r2.variantCatalog);
  }
}
function ProductSkuViewComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Variant names - catalog");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, ProductSkuViewComponent_div_17_div_3_Template, 8, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.productSku.variants);
  }
}
class ProductSkuViewComponent {
  constructor(productSkuService, route, actRoute, spinner, toastr) {
    this.productSkuService = productSkuService;
    this.route = route;
    this.actRoute = actRoute;
    this.spinner = spinner;
    this.toastr = toastr;
    this.productSku = new _model_product_sku_product_sku__WEBPACK_IMPORTED_MODULE_0__.ProductSku();
    this.audit = new _model_audit_audit__WEBPACK_IMPORTED_MODULE_1__.Audit();
    this.faEdit = _common_app_constants__WEBPACK_IMPORTED_MODULE_2__.AppConstants.iconEdit;
    this.errorDto = new _model_error_error_dto__WEBPACK_IMPORTED_MODULE_3__.ErrorDto();
    this.faArrowLeft = _common_app_constants__WEBPACK_IMPORTED_MODULE_2__.AppConstants.iconArrowLeft;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
    this.existingImage = new rxjs__WEBPACK_IMPORTED_MODULE_10__.BehaviorSubject('');
  }
  ngOnInit() {
    this.actRoute.paramMap.subscribe(params => {
      this.productSku.sku = params.get('sku');
      this.loadSku();
    });
  }
  loadSku() {
    this.spinner.show('productSkuSpinner').then(r => r);
    console.log("");
    return this.productSkuService.getProductSku(this.productSku.sku, this.errorDto).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$)).subscribe({
      next: skuResponse => {
        this.spinner.hide('productSkuSpinner').then(() => {
          this.productSku = skuResponse.data;
          this.audit = skuResponse.audit;
          this.imgContentType = skuResponse.data.file.type;
          this.existingImage.next('data:image/jpeg;base64,' + skuResponse.data.file.bytes);
          this.errorDto = new _model_error_error_dto__WEBPACK_IMPORTED_MODULE_3__.ErrorDto();
        });
      },
      error: () => {
        this.spinner.hide('productSkuSpinner').then(() => this.toastr.error(this.errorDto.httpStatus + ' product skus failed', 'Product'));
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  static #_ = this.ɵfac = function ProductSkuViewComponent_Factory(t) {
    return new (t || ProductSkuViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_service_product_sku_service__WEBPACK_IMPORTED_MODULE_4__.ProductSkuService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_13__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_14__.ToastrService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: ProductSkuViewComponent,
    selectors: [["app-sku-view"]],
    decls: 21,
    vars: 10,
    consts: [[1, "box"], [1, "row", "justify-content-center"], [1, "col-lg-6", "col-sm-8", "align-self-center"], [1, "box-part", "text-center", "text-white"], [1, "d-block"], [3, "imgName", "existingImage", "imgContentType"], ["name", "productSkuSpinner", "bdColor", "rgba(51,51,51,0.8)", "size", "medium", "color", "#fff", "type", "ball-spin-clockwise"], [3, "audit"], [3, "errorDto"], [4, "ngIf"], ["type", "button", "appBackButton", "", 1, "btn", "btn-danger", "mt-3"], [3, "icon"], ["class", "row text-center text-sm-center", 4, "ngFor", "ngForOf"], [1, "row", "text-center", "text-sm-center"], [1, "input-group", "link", "border-bottom"], [1, "col-sm-10", "col"], ["data-label", "Name", 1, "d-inline-block", "m-2", "text-darkorange", "d-sm-none"], [1, "d-inline-block", "m-2", "text-white"]],
    template: function ProductSkuViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Sku Detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](13, "app-img-view", 5)(14, "ngx-spinner", 6)(15, "app-audit", 7)(16, "app-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](17, ProductSkuViewComponent_div_17_Template, 4, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](19, "fa-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, "\u00A0Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("name: ", ctx.productSku.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("sku: ", ctx.productSku.sku, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("price: ", ctx.productSku.priceAmount, " K\u010D");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("imgName", ctx.productSku.name)("existingImage", ctx.existingImage)("imgContentType", ctx.imgContentType);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("audit", ctx.audit);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("errorDto", ctx.errorDto);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx.productSku.variants == null ? null : ctx.productSku.variants.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", ctx.faArrowLeft);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _shared_error_component__WEBPACK_IMPORTED_MODULE_5__.ErrorComponent, _shared_audit_audit_component__WEBPACK_IMPORTED_MODULE_6__.AuditComponent, ngx_spinner__WEBPACK_IMPORTED_MODULE_13__.NgxSpinnerComponent, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__.FaIconComponent, _img_img_view_component__WEBPACK_IMPORTED_MODULE_7__.ImgViewComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 7155:
/*!************************************!*\
  !*** ./src/app/qr/qr.component.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QrComponent: () => (/* binding */ QrComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var _model_error_error_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/error/error-dto */ 3990);
/* harmony import */ var _model_qr_QrRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/qr/QrRequest */ 7985);
/* harmony import */ var _model_qr_QrResponse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/qr/QrResponse */ 7790);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 274);
/* harmony import */ var _common_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/app-constants */ 9827);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _service_qr_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/qr.service */ 8986);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ 8375);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ 7548);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _shared_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/error.component */ 6333);
/* harmony import */ var _shared_app_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/app-info.component */ 3425);
/* harmony import */ var _navigation_back_button_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../navigation/back-button.directive */ 934);
















function QrComponent_img_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "img", 22);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx_r3.existingImage, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
  }
}
class QrComponent {
  constructor(qrService, spinner, toastr) {
    this.qrService = qrService;
    this.spinner = spinner;
    this.toastr = toastr;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
    this.existingImage = null;
    this.errorDto = new _model_error_error_dto__WEBPACK_IMPORTED_MODULE_0__.ErrorDto();
    this.qrCodeRequest = new _model_qr_QrRequest__WEBPACK_IMPORTED_MODULE_1__.QrRequest();
    this.qrCodeResponse = new _model_qr_QrResponse__WEBPACK_IMPORTED_MODULE_2__.QrResponse();
    this.info = '';
    this.faArrowLeft = _common_app_constants__WEBPACK_IMPORTED_MODULE_3__.AppConstants.iconArrowLeft;
  }
  ngOnInit() {
    this.qrCodeRequest.currency = 'CZK';
    this.qrCodeRequest.amount = 500;
    this.qrCodeRequest.iban = 'CZ1203000000000217963916';
    this.qrCodeRequest.variableSymbol = 444;
    this.qrCodeRequest.message = 'olala message';
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  loadQr() {
    this.spinner.show().then(r => r);
    this.qrService.loadQr(this.qrCodeRequest, this.errorDto).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe({
      next: qrResponseData => {
        this.spinner.hide().then(() => {
          this.info = 'Oscanujte v mobilní aplikaci a ověřte, že QR code pro bankovní platby funguje.';
          this.qrCodeResponse = qrResponseData.data;
          this.existingImage = 'data:image/png;base64,' + this.qrCodeResponse.image;
          setTimeout(() => {
            this.info = '';
          }, 6000);
        });
      },
      error: () => {
        this.spinner.hide().then(() => {
          this.toastr.error(this.errorDto.httpStatus + ' loading failed', 'QrCode');
        });
      }
    });
  }
  static #_ = this.ɵfac = function QrComponent_Factory(t) {
    return new (t || QrComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_service_qr_service__WEBPACK_IMPORTED_MODULE_4__.QrService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_11__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_12__.ToastrService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: QrComponent,
    selectors: [["app-qr"]],
    decls: 26,
    vars: 6,
    consts: [[1, "box"], [1, "row", "justify-content-center"], [1, "col-lg-5", "col-sm-10", "align-self-center"], [1, "box-part", "text-center"], ["novalidate", "", 1, "row", "px-3", 3, "ngSubmit"], ["createQrForm", "ngForm"], [1, "mb-4"], [1, "col-8"], ["type", "text", "id", "variableSymbol", "name", "iban", 1, "form-control", 3, "ngModel", "ngModelChange"], ["iban", "ngModel"], [1, "col-4"], ["type", "text", "id", "account", "placeholder", "VS", "name", "variableSymbol", 1, "form-control", 3, "ngModel", "ngModelChange"], ["variableSymbol", "ngModel"], ["bdColor", "rgba(51,51,51,0.8)", "size", "large", "color", "#fff", "type", "ball-spin-clockwise"], [1, "row"], [1, "col", "mb-3"], ["type", "submit", "aria-hidden", "true", 1, "btn", "btn-primary", "ms-2"], ["type", "button", "appBackButton", "", 1, "btn", "btn-danger", "ms-4"], [3, "icon"], [3, "errorDto"], ["readonly", "true", "class", "img-responsive show-image p-3", "alt", "Qr code result", 3, "src", 4, "ngIf"], [3, "info"], ["readonly", "true", "alt", "Qr code result", 1, "img-responsive", "show-image", "p-3", 3, "src"]],
    template: function QrComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "form", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function QrComponent_Template_form_ngSubmit_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r4);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](5);
          return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](_r0.form.valid && ctx.loadQr());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Generate qr code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 7)(9, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function QrComponent_Template_input_ngModelChange_9_listener($event) {
          return ctx.qrCodeRequest.iban = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 10)(12, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function QrComponent_Template_input_ngModelChange_12_listener($event) {
          return ctx.qrCodeRequest.variableSymbol = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "ngx-spinner", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 14)(16, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "Generate QR");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](21, "fa-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, "\u00A0Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](23, "app-error", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](24, QrComponent_img_24_Template, 1, 1, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](25, "app-info", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.qrCodeRequest.iban);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.qrCodeRequest.variableSymbol);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", ctx.faArrowLeft);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("errorDto", ctx.errorDto);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.existingImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("info", ctx.info);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, ngx_spinner__WEBPACK_IMPORTED_MODULE_11__.NgxSpinnerComponent, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__.FaIconComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgForm, _shared_error_component__WEBPACK_IMPORTED_MODULE_5__.ErrorComponent, _shared_app_info_component__WEBPACK_IMPORTED_MODULE_6__.InfoComponent, _navigation_back_button_directive__WEBPACK_IMPORTED_MODULE_7__.BackButtonDirective],
    encapsulation: 2
  });
}

/***/ }),

/***/ 1522:
/*!********************************************!*\
  !*** ./src/app/service/account.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountService: () => (/* binding */ AccountService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 2389);
/* harmony import */ var _common_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/app-constants */ 9827);
/* harmony import */ var _common_abstract_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/abstract/base-service */ 3094);
/* harmony import */ var _model_admin_admin_response__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/admin/admin-response */ 74);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);







class AccountService extends _common_abstract_base_service__WEBPACK_IMPORTED_MODULE_1__.BaseService {
  constructor(httpClient) {
    super();
    this.httpClient = httpClient;
    this.accountEndpoint = _common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.baseUrl + '/api/accounts';
  }
  getAccounts(errorDto) {
    return this.httpClient.get(this.accountEndpoint, {
      headers: _common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.acceptJson
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => this.handleError(err, errorDto)));
  }
  getAccount(username, errorDto) {
    const accountUrl = this.addParamIntoUrl(this.accountEndpoint, username);
    return this.httpClient.get(accountUrl, {
      headers: _common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.acceptJson
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => this.handleError(err, errorDto)));
  }
  editAccount(admin, username, errorDto) {
    const adminResponse = new _model_admin_admin_response__WEBPACK_IMPORTED_MODULE_2__.AdminResponse();
    adminResponse.data = admin;
    const body = JSON.stringify(adminResponse);
    const accountEndpoint = this.addParamIntoUrl(this.accountEndpoint, username);
    return this.httpClient.put(accountEndpoint, body, {
      headers: _common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.contentTypeAndAcceptJson
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => this.handleError(err, errorDto)));
  }
  createAccount(admin, errorDto) {
    const adminResponse = new _model_admin_admin_response__WEBPACK_IMPORTED_MODULE_2__.AdminResponse();
    adminResponse.data = admin;
    const body = JSON.stringify(adminResponse);
    return this.httpClient.post(this.accountEndpoint, body, {
      headers: _common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.contentTypeAndAcceptJson
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => this.handleError(err, errorDto)));
  }
  passwordRecovery(email, errorDto) {
    return this.httpClient.post(this.accountEndpoint.concat('/password-recovery'), email, {
      headers: _common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.contentTypeAndAcceptJson
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => this.handleError(err, errorDto)));
  }
  passwordChange(credentials, token, errorDto) {
    return this.httpClient.post(this.accountEndpoint.concat('/password-change'), credentials.password, {
      headers: _common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.contentTypeAndAcceptJson,
      params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams().append('token', token)
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => this.handleError(err, errorDto)));
  }
  deleteAccount(username, errorDto) {
    const accountUrl = this.addParamIntoUrl(this.accountEndpoint, username);
    return this.httpClient.delete(accountUrl, {
      headers: _common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.acceptJson
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => this.handleError(err, errorDto)));
  }
  static #_ = this.ɵfac = function AccountService_Factory(t) {
    return new (t || AccountService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: AccountService,
    factory: AccountService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 9692:
/*!*****************************************!*\
  !*** ./src/app/service/auth.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var _common_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/app-constants */ 9827);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 9736);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 2389);
/* harmony import */ var _common_abstract_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/abstract/base-service */ 3094);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token-storage.service */ 2981);







class AuthService extends _common_abstract_base_service__WEBPACK_IMPORTED_MODULE_1__.BaseService {
  constructor(http, tokenStorage) {
    super();
    this.http = http;
    this.tokenStorage = tokenStorage;
    const admin = tokenStorage.isExpired() ? null : tokenStorage.getAdmin();
    this.currentAdminSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(admin);
    this.currentAdmin = this.currentAdminSubject.asObservable();
    if (!admin) {
      this.logout();
    }
  }
  get currentAdminValue() {
    return this.currentAdminSubject.value;
  }
  login(credentials, errorDto) {
    return this.http.post(_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.baseUrl + '/authenticate', {
      username: credentials.username,
      password: credentials.password
    }, {
      headers: _common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.contentTypeAndAcceptJson
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(resp => {
      console.log(resp);
      this.tokenStorage.saveAdmin(resp);
      this.currentAdminSubject.next(resp);
      return resp;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(err => this.handleError(err, errorDto)));
  }
  logout() {
    this.tokenStorage.signOut();
    this.currentAdminSubject.next(null);
  }
  static #_ = this.ɵfac = function AuthService_Factory(t) {
    return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_token_storage_service__WEBPACK_IMPORTED_MODULE_2__.TokenStorageService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
    token: AuthService,
    factory: AuthService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 4206:
/*!*********************************************!*\
  !*** ./src/app/service/category.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoryService: () => (/* binding */ CategoryService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6360);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 2389);
/* harmony import */ var _common_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/app-constants */ 9827);
/* harmony import */ var _common_abstract_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/abstract/base-service */ 3094);
/* harmony import */ var _model_category_category_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/category/category-request */ 7229);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 4860);






class CategoryService extends _common_abstract_base_service__WEBPACK_IMPORTED_MODULE_1__.BaseService {
  constructor(httpClient) {
    super();
    this.httpClient = httpClient;
    this.categoryEndpoint = _common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.baseUrl + '/api/categories';
  }
  getCategories(errorDto) {
    return this.httpClient.get(this.categoryEndpoint, {
      headers: _common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.acceptJson
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.retry)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => this.handleError(err, errorDto)));
  }
  getCategory(categoryUrl, errorDto) {
    const categoryEndpointUrl = this.addParamIntoUrl(this.categoryEndpoint, categoryUrl);
    return this.httpClient.get(categoryEndpointUrl, {
      headers: _common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.acceptJson
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => this.handleError(err, errorDto)));
  }
  createCategory(category, errorDto) {
    const body = JSON.stringify(new _model_category_category_request__WEBPACK_IMPORTED_MODULE_2__.CategoryRequest(category));
    return this.httpClient.post(this.categoryEndpoint, body, {
      headers: _common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.contentTypeAndAcceptJson
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => this.handleError(err, errorDto)));
  }
  updateCategory(category, originalUrl, errorDto) {
    const body = JSON.stringify(new _model_category_category_request__WEBPACK_IMPORTED_MODULE_2__.CategoryRequest(category));
    const categoryUrl = this.addParamIntoUrl(this.categoryEndpoint, originalUrl);
    return this.httpClient.put(categoryUrl, body, {
      headers: _common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.contentTypeAndAcceptJson
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => this.handleError(err, errorDto)));
  }
  deleteCategory(category, errorDto) {
    const categoryUrl = this.addParamIntoUrl(this.categoryEndpoint, category.url);
    return this.httpClient.delete(categoryUrl, {
      headers: _common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.acceptJson
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => this.handleError(err, errorDto)));
  }
  static #_ = this.ɵfac = function CategoryService_Factory(t) {
    return new (t || CategoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: CategoryService,
    factory: CategoryService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 8642:
/*!***************************************************!*\
  !*** ./src/app/service/generic-config.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GenericConfigService: () => (/* binding */ GenericConfigService)
/* harmony export */ });
/* harmony import */ var _common_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/app-constants */ 9827);
/* harmony import */ var _common_abstract_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/abstract/base-service */ 3094);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 2389);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 6360);
/* harmony import */ var _model_generic_config_generic_config_create_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/generic-config/generic-config-create-dto */ 6994);
/* harmony import */ var _model_generic_config_generic_config_update_dto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/generic-config/generic-config-update-dto */ 4761);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 4860);







class GenericConfigService extends _common_abstract_base_service__WEBPACK_IMPORTED_MODULE_1__.BaseService {
  constructor(httpClient) {
    super();
    this.httpClient = httpClient;
  }
  getGenericConfigs(module, errorDto) {
    let genericConfigEndpoint = _common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.baseUrl + "/api/generic-config/" + module.toString() + "/by-module";
    return this.httpClient.get(genericConfigEndpoint, {
      headers: _common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.acceptJson
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => this.handleError(err, errorDto)));
  }
  getGenericConfigBy(module, key, errorDto) {
    let genericConfigEndpoint = _common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.baseUrl + "/api/generic-config/" + module + "/" + key;
    return this.httpClient.get(genericConfigEndpoint, {
      headers: _common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.acceptJson
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.retry)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => this.handleError(err, errorDto)));
  }
  postGenericConfig(createDto, errorDto) {
    let postEndpoint = _common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.baseUrl + "/api/generic-config";
    const body = JSON.stringify(new _model_generic_config_generic_config_create_dto__WEBPACK_IMPORTED_MODULE_2__.GenericConfigCreateDto(createDto));
    return this.httpClient.post(postEndpoint, body, {
      headers: _common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.contentTypeAndAcceptJson
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => this.handleError(err, errorDto)));
  }
  putGenericConfig(module, key, data, errorDto) {
    let genericConfigEndpoint = _common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.baseUrl + "/api/generic-config/" + module + "/" + key;
    const body = JSON.stringify(new _model_generic_config_generic_config_update_dto__WEBPACK_IMPORTED_MODULE_3__.GenericConfigUpdateDto(data));
    return this.httpClient.put(genericConfigEndpoint, body, {
      headers: _common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.contentTypeAndAcceptJson
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => this.handleError(err, errorDto)));
  }
  deleteGenericConfig(module, key, errorDto) {
    let genericConfigEndpoint = _common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.baseUrl + "/api/generic-config/" + module + "/" + key;
    return this.httpClient.delete(genericConfigEndpoint, {
      headers: _common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.acceptJson
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => this.handleError(err, errorDto)));
  }
  static #_ = this.ɵfac = function GenericConfigService_Factory(t) {
    return new (t || GenericConfigService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
    token: GenericConfigService,
    factory: GenericConfigService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 1175:
/*!******************************************!*\
  !*** ./src/app/service/order.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderService: () => (/* binding */ OrderService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _common_abstract_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/abstract/base-service */ 3094);
/* harmony import */ var _common_app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/app-constants */ 9827);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 2389);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);






class OrderService extends _common_abstract_base_service__WEBPACK_IMPORTED_MODULE_0__.BaseService {
  constructor(httpClient) {
    super();
    this.httpClient = httpClient;
    this.orderEndpoint = _common_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.baseUrl + '/api/orders';
    this.orderFilterEndpoint = this.orderEndpoint + '/filter';
  }
  deleteOrder(orderId, errorDto) {
    const accountUrl = this.addParamIntoUrl(this.orderEndpoint, orderId);
    return this.httpClient.delete(accountUrl, {
      headers: _common_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.acceptJson
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(err => this.handleError(err, errorDto)));
  }
  getOrderDetail(orderId, errorDto) {
    const orderResponseUrl = this.addParamIntoUrl(this.orderEndpoint, orderId);
    return this.httpClient.get(orderResponseUrl, {
      headers: _common_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.acceptJson
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(err => this.handleError(err, errorDto)));
  }
  listOrders(page, errorDto) {
    let paramsData = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams().set('pageNumber', String(page)).set('pageSize', '10').set('sortBy', 'STATUS');
    // if (name != null) {
    //   paramsData = paramsData.set('name', name);
    // }
    // if (category != null && category.url != null) {
    //   paramsData = paramsData.set('category', category.url);
    // }
    if (page != null) {
      paramsData = paramsData.set('pageNumber', page);
    }
    return this.httpClient.get(this.orderFilterEndpoint, {
      headers: _common_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.acceptJson,
      params: paramsData
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(err => this.handleError(err, errorDto)));
  }
  static #_ = this.ɵfac = function OrderService_Factory(t) {
    return new (t || OrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: OrderService,
    factory: OrderService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 3376:
/*!************************************************!*\
  !*** ./src/app/service/product-sku.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductSkuService: () => (/* binding */ ProductSkuService)
/* harmony export */ });
/* harmony import */ var _common_abstract_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/abstract/base-service */ 3094);
/* harmony import */ var _common_app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/app-constants */ 9827);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 2389);
/* harmony import */ var _model_product_sku_product_sku_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/product-sku/product-sku-request */ 4139);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 4860);






class ProductSkuService extends _common_abstract_base_service__WEBPACK_IMPORTED_MODULE_0__.BaseService {
  constructor(httpClient) {
    super();
    this.httpClient = httpClient;
    this.productSkuRootUrl = _common_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.baseUrl + '/api/products/skus/';
    this.productImageEndpoint = this.productSkuRootUrl + 'img-upload/';
  }
  upsertProductSkuImage(file, productSkuUrl, errorDto) {
    const formData = new FormData();
    formData.append('file', file);
    return this.httpClient.put(this.productImageEndpoint + productSkuUrl, formData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => this.handleError(err, errorDto)));
  }
  createProductSku(rootUrl, productSkuu, errorDto) {
    const body = JSON.stringify(new _model_product_sku_product_sku_request__WEBPACK_IMPORTED_MODULE_2__.ProductSkuRequest(productSkuu));
    return this.httpClient.post(this.productSkuRootUrl + rootUrl, body, {
      headers: _common_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.contentTypeAndAcceptJson
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => this.handleError(err, errorDto)));
  }
  getProductSku(sku, errorDto) {
    return this.httpClient.get(this.productSkuRootUrl + sku, {
      headers: _common_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.acceptJson
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => this.handleError(err, errorDto)));
  }
  deleteProductSku(sku, errorDto) {
    return this.httpClient.delete(this.productSkuRootUrl + sku, {
      headers: _common_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.acceptJson
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => this.handleError(err, errorDto)));
  }
  skuList(rootUrl, errorDto) {
    return this.httpClient.get(this.productSkuRootUrl + rootUrl.concat("/by-parent-product"), {
      headers: _common_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.acceptJson
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => this.handleError(err, errorDto)));
  }
  static #_ = this.ɵfac = function ProductSkuService_Factory(t) {
    return new (t || ProductSkuService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: ProductSkuService,
    factory: ProductSkuService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 2200:
/*!********************************************!*\
  !*** ./src/app/service/product.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductService: () => (/* binding */ ProductService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 2389);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _common_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/app-constants */ 9827);
/* harmony import */ var _common_abstract_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/abstract/base-service */ 3094);
/* harmony import */ var _model_product_product_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/product/product-request */ 743);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);







class ProductService extends _common_abstract_base_service__WEBPACK_IMPORTED_MODULE_1__.BaseService {
  constructor(httpClient) {
    super();
    this.httpClient = httpClient;
    this.productEndpoint = _common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.baseUrl + '/api/products';
    this.productsFilterEndpoint = this.productEndpoint + '/filter';
    this.productImageEndpoint = this.productEndpoint + '/img-upload/';
  }
  listProducts(page, errorDto, name, category) {
    let paramsData = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams().set('pageNumber', String(page)).set('pageSize', '3').set('sortBy', 'NAME');
    if (name != null) {
      paramsData = paramsData.set('name', name);
    }
    if (category != null && category.url != null) {
      paramsData = paramsData.set('category', category.url);
    }
    if (page != null) {
      paramsData = paramsData.set('pageNumber', page);
    }
    return this.httpClient.get(this.productsFilterEndpoint, {
      headers: _common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.acceptJson,
      params: paramsData
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => this.handleError(err, errorDto)));
  }
  createProduct(product, errorDto) {
    const body = JSON.stringify(new _model_product_product_request__WEBPACK_IMPORTED_MODULE_2__.ProductRequest(product));
    return this.httpClient.post(this.productEndpoint, body, {
      headers: _common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.contentTypeAndAcceptJson
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => this.handleError(err, errorDto)));
  }
  deleteProduct(product, errorDto) {
    const productUrl = this.addParamIntoUrl(this.productEndpoint, product.url);
    return this.httpClient.delete(productUrl, {
      headers: _common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.acceptJson
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => this.handleError(err, errorDto)));
  }
  updateProduct(product, productOriginalUrl, errorDto) {
    const body = JSON.stringify(new _model_product_product_request__WEBPACK_IMPORTED_MODULE_2__.ProductRequest(product));
    const productUrl = this.addParamIntoUrl(this.productEndpoint, productOriginalUrl);
    return this.httpClient.put(productUrl, body, {
      headers: _common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.contentTypeAndAcceptJson
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => this.handleError(err, errorDto)));
  }
  getProduct(productUrl, errorDto) {
    const productUrlEndpoint = this.addParamIntoUrl(this.productEndpoint, productUrl);
    return this.httpClient.get(productUrlEndpoint, {
      headers: _common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.acceptJson
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => this.handleError(err, errorDto)));
  }
  getProductImage(productUrl, errorDto) {
    return this.httpClient.get(this.productImageEndpoint + productUrl, {
      headers: _common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.acceptJson
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => this.handleError(err, errorDto)));
  }
  updateProductImage(file, productUrl, errorDto) {
    const formData = new FormData();
    formData.append('file', file);
    return this.httpClient.post(this.productImageEndpoint + productUrl, formData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => this.handleError(err, errorDto)));
  }
  static #_ = this.ɵfac = function ProductService_Factory(t) {
    return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: ProductService,
    factory: ProductService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 8986:
/*!***************************************!*\
  !*** ./src/app/service/qr.service.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QrService: () => (/* binding */ QrService)
/* harmony export */ });
/* harmony import */ var _common_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/app-constants */ 9827);
/* harmony import */ var _common_abstract_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/abstract/base-service */ 3094);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 2389);
/* harmony import */ var _model_qr_QrDataRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/qr/QrDataRequest */ 6617);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 4860);






class QrService extends _common_abstract_base_service__WEBPACK_IMPORTED_MODULE_1__.BaseService {
  constructor(httpClient) {
    super();
    this.httpClient = httpClient;
    this.qrResponse = _common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.baseUrl + '/api/payment/qr-code';
  }
  loadQr(qrRequest, errorDto) {
    const body = JSON.stringify(new _model_qr_QrDataRequest__WEBPACK_IMPORTED_MODULE_2__.QrDataRequest(qrRequest));
    return this.httpClient.post(this.qrResponse, body, {
      headers: _common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.contentTypeAndAcceptJson
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => this.handleError(err, errorDto)));
  }
  static #_ = this.ɵfac = function QrService_Factory(t) {
    return new (t || QrService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: QrService,
    factory: QrService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 7903:
/*!***********************************************!*\
  !*** ./src/app/service/shared-img.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedImgService: () => (/* binding */ SharedImgService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);


class SharedImgService {
  addLoginImgPath(path) {
    this.subjectLoginImgStream.next(path);
  }
  constructor() {
    this.subjectLoginImgStream = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('/assets/images/user-white.png');
    this.currentImgPath = this.subjectLoginImgStream.asObservable();
  }
  static #_ = this.ɵfac = function SharedImgService_Factory(t) {
    return new (t || SharedImgService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: SharedImgService,
    factory: SharedImgService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 8475:
/*!***********************************************!*\
  !*** ./src/app/service/statistics.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StatisticsService: () => (/* binding */ StatisticsService)
/* harmony export */ });
/* harmony import */ var _common_abstract_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/abstract/base-service */ 3094);
/* harmony import */ var _common_app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/app-constants */ 9827);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 6360);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 2389);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 4860);





class StatisticsService extends _common_abstract_base_service__WEBPACK_IMPORTED_MODULE_0__.BaseService {
  constructor(httpClient) {
    super();
    this.httpClient = httpClient;
    this.orderPieEndpoint = _common_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.baseUrl + '/api/statistics/orders/pie/status';
    this.categoryLineEndpoint = _common_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.baseUrl + '/api/statistics/category/line/count';
    this.orderTotalPerDayEndpoint = _common_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.baseUrl + '/api/statistics/orders/line/sold';
  }
  getOrderPieStatus(errorDto) {
    return this.httpClient.get(this.orderPieEndpoint, {
      headers: _common_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.acceptJson
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.retry)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => this.handleError(err, errorDto)));
  }
  getCategoryToProductCount(errorDto) {
    return this.httpClient.get(this.categoryLineEndpoint, {
      headers: _common_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.acceptJson
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.retry)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => this.handleError(err, errorDto)));
  }
  getOrderTotalPerDay(errorDto) {
    return this.httpClient.get(this.orderTotalPerDayEndpoint, {
      headers: _common_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.acceptJson
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.retry)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => this.handleError(err, errorDto)));
  }
  static #_ = this.ɵfac = function StatisticsService_Factory(t) {
    return new (t || StatisticsService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: StatisticsService,
    factory: StatisticsService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 4984:
/*!*******************************************!*\
  !*** ./src/app/service/themes.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemeService: () => (/* binding */ ThemeService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class ThemeService {
  get current() {
    return localStorage.getItem('theme') ?? 'dark';
  }
  set current(value) {
    localStorage.setItem('theme', value);
    this.style.href = `/assets/themes/${value}.css`;
  }
  constructor() {
    this.style = document.createElement('link');
    this.style.rel = 'stylesheet';
    document.head.appendChild(this.style);
    if (localStorage.getItem('theme') !== undefined) {
      this.style.href = 'dark.css';
    }
  }
  static #_ = this.ɵfac = function ThemeService_Factory(t) {
    return new (t || ThemeService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: ThemeService,
    factory: ThemeService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 2981:
/*!**************************************************!*\
  !*** ./src/app/service/token-storage.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TokenStorageService: () => (/* binding */ TokenStorageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

const ADMIN_KEY = 'auth-admin';
class TokenStorageService {
  constructor() {}
  signOut() {
    window.sessionStorage.clear();
  }
  saveAdmin(admin) {
    window.sessionStorage.removeItem(ADMIN_KEY);
    window.sessionStorage.setItem(ADMIN_KEY, JSON.stringify(admin));
  }
  getAdmin() {
    try {
      return JSON.parse(sessionStorage.getItem(ADMIN_KEY));
    } catch (e) {
      console.error('Unable to parse user');
      window.sessionStorage.removeItem(ADMIN_KEY);
      return null;
    }
  }
  isExpired() {
    const expiration = this.getExpiration();
    return new Date(expiration) < new Date();
  }
  getExpiration() {
    try {
      return this.getAdmin().expiration;
    } catch (exp) {
      return 0;
    }
  }
  static #_ = this.ɵfac = function TokenStorageService_Factory(t) {
    return new (t || TokenStorageService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: TokenStorageService,
    factory: TokenStorageService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 5629:
/*!****************************************************!*\
  !*** ./src/app/service/variant-catalog.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VariantCatalogService: () => (/* binding */ VariantCatalogService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 2389);
/* harmony import */ var _common_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/app-constants */ 9827);
/* harmony import */ var _common_abstract_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/abstract/base-service */ 3094);
/* harmony import */ var _model_variant_category_variant_category_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/variant-category/variant-category-wrapper */ 6837);
/* harmony import */ var _model_variant_category_variants_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/variant-category/variants-request */ 5278);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 4860);







class VariantCatalogService extends _common_abstract_base_service__WEBPACK_IMPORTED_MODULE_1__.BaseService {
  constructor(httpClient) {
    super();
    this.httpClient = httpClient;
    this.variantCategoryUri = _common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.baseUrl + '/api/variant-catalog';
  }
  listAll(errorDto) {
    return this.httpClient.get(this.variantCategoryUri.concat("/all"), {
      headers: _common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.acceptJson
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => this.handleError(err, errorDto)));
  }
  deleteVariantCatalog(variantCategory, errorDto) {
    const deleteVariantUrl = this.addParamIntoUrl(this.variantCategoryUri, variantCategory.paramName);
    return this.httpClient.delete(deleteVariantUrl, {
      headers: _common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.acceptJson
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => this.handleError(err, errorDto)));
  }
  deleteVariant(variantName, errorDto) {
    const deleteVariantUrl = this.addParamIntoUrl(this.variantCategoryUri.concat("/variant"), variantName.name);
    return this.httpClient.delete(deleteVariantUrl, {
      headers: _common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.acceptJson
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => this.handleError(err, errorDto)));
  }
  getVariantCatalog(pathParamName, errorDto) {
    const getVariantUrl = this.addParamIntoUrl(this.variantCategoryUri, pathParamName);
    return this.httpClient.get(getVariantUrl, {
      headers: _common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.acceptJson
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => this.handleError(err, errorDto)));
  }
  createVariantCatalog(variantCategory, errorDto) {
    const body = JSON.stringify(new _model_variant_category_variant_category_wrapper__WEBPACK_IMPORTED_MODULE_2__.VariantCategoryWrapper(variantCategory));
    return this.httpClient.post(this.variantCategoryUri, body, {
      headers: _common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.contentTypeAndAcceptJson
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => this.handleError(err, errorDto)));
  }
  putVariantCatalog(originalPathParam, variantCategory, errorDto) {
    const putVariantUrl = this.addParamIntoUrl(this.variantCategoryUri, originalPathParam);
    const body = JSON.stringify(new _model_variant_category_variant_category_wrapper__WEBPACK_IMPORTED_MODULE_2__.VariantCategoryWrapper(variantCategory));
    return this.httpClient.put(putVariantUrl, body, {
      headers: _common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.contentTypeAndAcceptJson
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => this.handleError(err, errorDto)));
  }
  addVariants(categoryVariantParamName, variantCategory, errorDto) {
    const putVariantsUrl = this.addParamIntoUrl(this.variantCategoryUri.concat("/add-variants"), categoryVariantParamName);
    const body = JSON.stringify(variantCategory);
    return this.httpClient.post(putVariantsUrl, body, {
      headers: _common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.contentTypeAndAcceptJson
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => this.handleError(err, errorDto)));
  }
  updateVariantsArrangement(categoryVariantParamName, variantCategory, errorDto) {
    const putVariantsUrl = this.addParamIntoUrl(this.variantCategoryUri.concat("/upsert-variants-arrangement"), categoryVariantParamName);
    const body = JSON.stringify(new _model_variant_category_variants_request__WEBPACK_IMPORTED_MODULE_3__.VariantsRequest(variantCategory.variants));
    return this.httpClient.post(putVariantsUrl, body, {
      headers: _common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.contentTypeAndAcceptJson
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => this.handleError(err, errorDto)));
  }
  static #_ = this.ɵfac = function VariantCatalogService_Factory(t) {
    return new (t || VariantCatalogService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: VariantCatalogService,
    factory: VariantCatalogService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 6287:
/*!*********************************************!*\
  !*** ./src/app/service/write-us.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WriteUsService: () => (/* binding */ WriteUsService)
/* harmony export */ });
/* harmony import */ var _common_abstract_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/abstract/base-service */ 3094);
/* harmony import */ var _common_app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/app-constants */ 9827);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 2389);
/* harmony import */ var _model_email_email_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/email/email-request */ 7198);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);







class WriteUsService extends _common_abstract_base_service__WEBPACK_IMPORTED_MODULE_0__.BaseService {
  constructor(httpClient) {
    super();
    this.httpClient = httpClient;
    this.writeUsEndpoint = _common_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.baseUrl + '/api/email';
    this.answerEndpoint = _common_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.baseUrl + '/api/email/respond';
  }
  responseToEmail(errorDto, email) {
    return this.httpClient.post(this.answerEndpoint, JSON.stringify(new _model_email_email_request__WEBPACK_IMPORTED_MODULE_2__.EmailRequest(email)), {
      headers: _common_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.contentTypeAndAcceptJson
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => this.handleError(err, errorDto)));
  }
  loadEmailsWriteUs(errorDto, pageNumber, pageSize, email, replied) {
    let paramsData = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams();
    if (pageNumber != null) {
      paramsData = paramsData.set('pageNumber', pageNumber);
    }
    if (pageSize != null) {
      paramsData = paramsData.set('pageSize', pageSize);
    }
    if (email != null) {
      paramsData = paramsData.set('email', email);
    }
    if (replied != null) {
      paramsData = paramsData.set('replied', replied);
    }
    return this.httpClient.get(this.writeUsEndpoint, {
      headers: _common_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.acceptJson,
      params: paramsData
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => this.handleError(err, errorDto)));
  }
  static #_ = this.ɵfac = function WriteUsService_Factory(t) {
    return new (t || WriteUsService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: WriteUsService,
    factory: WriteUsService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 3425:
/*!**********************************************!*\
  !*** ./src/app/shared/app-info.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InfoComponent: () => (/* binding */ InfoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);


function InfoComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.info, " ");
  }
}
class InfoComponent {
  static #_ = this.ɵfac = function InfoComponent_Factory(t) {
    return new (t || InfoComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: InfoComponent,
    selectors: [["app-info"]],
    inputs: {
      info: "info"
    },
    decls: 2,
    vars: 1,
    consts: [[1, "mb-3"], ["class", "alert alert-success", "role", "alert", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-success"]],
    template: function InfoComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InfoComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.info);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
    encapsulation: 2
  });
}

/***/ }),

/***/ 887:
/*!*************************************************!*\
  !*** ./src/app/shared/audit/audit.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuditComponent: () => (/* binding */ AuditComponent)
/* harmony export */ });
/* harmony import */ var _common_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/app-constants */ 9827);
/* harmony import */ var _model_audit_audit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/audit/audit */ 5201);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 683);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);





class AuditComponent {
  constructor() {
    this.faCalendar = _common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.iconCalendar;
    this.faUser = _common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.iconUser;
    this.audit = new _model_audit_audit__WEBPACK_IMPORTED_MODULE_1__.Audit();
  }
  static #_ = this.ɵfac = function AuditComponent_Factory(t) {
    return new (t || AuditComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AuditComponent,
    selectors: [["app-audit"]],
    inputs: {
      audit: "audit"
    },
    decls: 37,
    vars: 14,
    consts: [[1, "container"], [1, "row", "text-center", "text-sm-start"], [1, "col"], [1, "d-block", "d-sm-inline-flex", "badge"], ["data-suffix", ":", 1, "customize-short"], [1, "pointer-base", "me-2", 3, "icon"], [1, "mx-auto", "ms-sm-2", "d-block", "d-sm-inline-flex", "customize-long", "p-2", "p-sm-0"]],
    template: function AuditComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Audit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1)(4, "div", 2)(5, "span", 3)(6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "fa-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Created\u00A0at");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 1)(13, "div", 2)(14, "span", 3)(15, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "fa-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Created\u00A0by");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 1)(21, "div", 2)(22, "span", 3)(23, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "fa-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Modified\u00A0at");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](28, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 1)(30, "div", 2)(31, "span", 3)(32, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "fa-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Modified\u00A0by");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faCalendar);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](11, 8, ctx.audit == null ? null : ctx.audit.createdAt, "dd-MM-yyyy hh:mm:ss"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.audit == null ? null : ctx.audit.createdBy);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faCalendar);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](28, 11, ctx.audit == null ? null : ctx.audit.modifiedAt, "dd-MM-yyyy hh:mm:ss"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.audit == null ? null : ctx.audit.modifiedBy);
      }
    },
    dependencies: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FaIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe],
    styles: [".container[_ngcontent-%COMP%]{\n  max-width: 280px;\n  color: #e5e5e5;\n  border-style: solid;\n  border-width: thin;\n  box-shadow: 0 1px 3px 1px #d3740042;\n  border-color: #343a40;\n  border-radius: 20px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n.customize-short[_ngcontent-%COMP%]{\n  color: var(--color-text);\n  width:95px;\n}\n.customize-long[_ngcontent-%COMP%]{\n  color: var(--color-text);\n  width:190px;\n}\n\n.badge[_ngcontent-%COMP%]{\n font-size: 0.85em;\n  font-weight: 500;\n}\n\n@media screen and (min-width: 487px) {\n  span[_ngcontent-%COMP%]:after {\n    content: attr(data-suffix);\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2F1ZGl0L2F1ZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsbUNBQW1DO0VBQ25DLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLFVBQVU7QUFDWjtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLFdBQVc7QUFDYjs7QUFFQTtDQUNDLGlCQUFpQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRTtJQUNFLDBCQUEwQjtFQUM1QjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcbiAgbWF4LXdpZHRoOiAyODBweDtcbiAgY29sb3I6ICNlNWU1ZTU7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogdGhpbjtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IDFweCAjZDM3NDAwNDI7XG4gIGJvcmRlci1jb2xvcjogIzM0M2E0MDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuLmN1c3RvbWl6ZS1zaG9ydHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQpO1xuICB3aWR0aDo5NXB4O1xufVxuLmN1c3RvbWl6ZS1sb25ne1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dCk7XG4gIHdpZHRoOjE5MHB4O1xufVxuXG4uYmFkZ2V7XG4gZm9udC1zaXplOiAwLjg1ZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4N3B4KSB7XG4gIHNwYW46YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1zdWZmaXgpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 6333:
/*!*******************************************!*\
  !*** ./src/app/shared/error.component.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorComponent: () => (/* binding */ ErrorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);


function ErrorComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.errorDto.httpStatusMessage, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.errorDto.errorMessage, " ");
  }
}
class ErrorComponent {
  static #_ = this.ɵfac = function ErrorComponent_Factory(t) {
    return new (t || ErrorComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ErrorComponent,
    selectors: [["app-error"]],
    inputs: {
      errorDto: "errorDto"
    },
    decls: 2,
    vars: 1,
    consts: [[1, "mb-3"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-danger"]],
    template: function ErrorComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ErrorComponent_div_1_Template, 4, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorDto.httpStatus);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
    encapsulation: 2
  });
}

/***/ }),

/***/ 6084:
/*!***********************************************************!*\
  !*** ./src/app/shared/pagination/pagination.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaginationComponent: () => (/* binding */ PaginationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);



const _c0 = a0 => ({
  "active": a0
});
function PaginationComponent_li_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 1)(1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_li_4_Template_a_click_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const i_r2 = restoredCtx.index;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.setPage(i_r2, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, i_r2 === ctx_r0.page));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r2);
  }
}
const _c1 = a0 => ({
  "disabled": a0
});
class PaginationComponent {
  constructor() {
    this.page = 0;
    this.pageChangeEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  setPage(i, event) {
    event.preventDefault();
    this.page = i;
    this.pageChangeEmitter.emit(this.page);
  }
  setPageBack(event) {
    event.preventDefault();
    if (this.page - 1 >= 0) {
      this.page = this.page - 1;
      this.pageChangeEmitter.emit(this.page);
    }
  }
  setPageForward(event) {
    event.preventDefault();
    if (this.page + 1 < this.pages.length) {
      this.page = this.page + 1;
      this.pageChangeEmitter.emit(this.page);
    }
  }
  static #_ = this.ɵfac = function PaginationComponent_Factory(t) {
    return new (t || PaginationComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: PaginationComponent,
    selectors: [["app-pagination"]],
    inputs: {
      pages: "pages"
    },
    outputs: {
      pageChangeEmitter: "pageChangeEmitter"
    },
    decls: 8,
    vars: 7,
    consts: [[1, "pagination"], [1, "page-item", 3, "ngClass"], [1, "page-link", 3, "click"], ["class", "page-item", 3, "ngClass", 4, "ngFor", "ngForOf"]],
    template: function PaginationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0)(1, "li", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_Template_a_click_2_listener($event) {
          return ctx.setPageBack($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PaginationComponent_li_4_Template, 3, 4, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 1)(6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_Template_a_click_6_listener($event) {
          return ctx.setPageForward($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, ctx.page === 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, ctx.page === ctx.pages.length - 1));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
    encapsulation: 2
  });
}

/***/ }),

/***/ 8971:
/*!**************************************!*\
  !*** ./src/app/shared/price.pipe.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PricePipe: () => (/* binding */ PricePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class PricePipe {
  transform(money, ...args) {
    return money.price + ' ' + money.currencyCode;
  }
  static #_ = this.ɵfac = function PricePipe_Factory(t) {
    return new (t || PricePipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "pricePipe",
    type: PricePipe,
    pure: true
  });
}

/***/ }),

/***/ 6208:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedModule: () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _price_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./price.pipe */ 8971);
/* harmony import */ var _error_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error.component */ 6333);
/* harmony import */ var _app_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-info.component */ 3425);
/* harmony import */ var _audit_audit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./audit/audit.component */ 887);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 683);
/* harmony import */ var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pagination/pagination.component */ 6084);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);








class SharedModule {
  static #_ = this.ɵfac = function SharedModule_Factory(t) {
    return new (t || SharedModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: SharedModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FaIconComponent]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_price_pipe__WEBPACK_IMPORTED_MODULE_0__.PricePipe, _error_component__WEBPACK_IMPORTED_MODULE_1__.ErrorComponent, _app_info_component__WEBPACK_IMPORTED_MODULE_2__.InfoComponent, _audit_audit_component__WEBPACK_IMPORTED_MODULE_3__.AuditComponent, _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_4__.PaginationComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FaIconComponent],
    exports: [_price_pipe__WEBPACK_IMPORTED_MODULE_0__.PricePipe, _error_component__WEBPACK_IMPORTED_MODULE_1__.ErrorComponent, _app_info_component__WEBPACK_IMPORTED_MODULE_2__.InfoComponent, _audit_audit_component__WEBPACK_IMPORTED_MODULE_3__.AuditComponent, _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_4__.PaginationComponent]
  });
})();

/***/ }),

/***/ 2690:
/*!****************************************************************************!*\
  !*** ./src/app/upsert-variant-catalog/upsert-variant-catalog.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UpsertVariantCatalogComponent: () => (/* binding */ UpsertVariantCatalogComponent)
/* harmony export */ });
/* harmony import */ var _common_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/app-constants */ 9827);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var _model_error_error_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/error/error-dto */ 3990);
/* harmony import */ var _model_variant_category_variant_catalog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/variant-category/variant-catalog */ 4302);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _model_variant_category_variant_detail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/variant-category/variant-detail */ 5832);
/* harmony import */ var _model_variant_category_variants_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/variant-category/variants-request */ 5278);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _service_variant_catalog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/variant-catalog.service */ 5629);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-spinner */ 8375);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-toastr */ 7548);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 683);
/* harmony import */ var _shared_error_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/error.component */ 6333);
/* harmony import */ var _navigation_back_button_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../navigation/back-button.directive */ 934);


















function UpsertVariantCatalogComponent_div_13_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function UpsertVariantCatalogComponent_div_13_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Name must be at least 4 characters long.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function UpsertVariantCatalogComponent_div_13_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Name must be at maximum 100 characters long.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function UpsertVariantCatalogComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, UpsertVariantCatalogComponent_div_13_div_1_Template, 2, 0, "div", 25)(2, UpsertVariantCatalogComponent_div_13_div_2_Template, 2, 0, "div", 25)(3, UpsertVariantCatalogComponent_div_13_div_3_Template, 2, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _r1.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _r1.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _r1.errors.maxlength);
  }
}
function UpsertVariantCatalogComponent_div_20_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Param Name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function UpsertVariantCatalogComponent_div_20_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Param Name must be at least 4 characters long.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function UpsertVariantCatalogComponent_div_20_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Param Name must be at maximum 24 characters long.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function UpsertVariantCatalogComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, UpsertVariantCatalogComponent_div_20_div_1_Template, 2, 0, "div", 25)(2, UpsertVariantCatalogComponent_div_20_div_2_Template, 2, 0, "div", 25)(3, UpsertVariantCatalogComponent_div_20_div_3_Template, 2, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _r3.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _r3.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _r3.errors.maxlength);
  }
}
function UpsertVariantCatalogComponent_div_28_div_3_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UpsertVariantCatalogComponent_div_28_div_3_button_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      const variant_r16 = ctx_r23.$implicit;
      const i_r17 = ctx_r23.index;
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r22.up(variant_r16, i_r17));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "fa-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", ctx_r18.faArrowUp);
  }
}
function UpsertVariantCatalogComponent_div_28_div_3_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UpsertVariantCatalogComponent_div_28_div_3_button_7_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      const variant_r16 = ctx_r26.$implicit;
      const i_r17 = ctx_r26.index;
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r25.down(variant_r16, i_r17));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "fa-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", ctx_r19.faArrowDown);
  }
}
function UpsertVariantCatalogComponent_div_28_div_3_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UpsertVariantCatalogComponent_div_28_div_3_button_11_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      const variant_r16 = ctx_r29.$implicit;
      const i_r17 = ctx_r29.index;
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r28.up(variant_r16, i_r17));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "fa-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", ctx_r20.faArrowUp);
  }
}
function UpsertVariantCatalogComponent_div_28_div_3_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UpsertVariantCatalogComponent_div_28_div_3_button_12_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r33);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      const variant_r16 = ctx_r32.$implicit;
      const i_r17 = ctx_r32.index;
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r31.down(variant_r16, i_r17));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "fa-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", ctx_r21.faArrowDown);
  }
}
function UpsertVariantCatalogComponent_div_28_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 29)(1, "div", 30)(2, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, UpsertVariantCatalogComponent_div_28_div_3_button_6_Template, 2, 1, "button", 34)(7, UpsertVariantCatalogComponent_div_28_div_3_button_7_Template, 2, 1, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UpsertVariantCatalogComponent_div_28_div_3_Template_button_click_8_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r35);
      const variant_r16 = restoredCtx.$implicit;
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r34.deleteVariant(variant_r16));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "fa-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, UpsertVariantCatalogComponent_div_28_div_3_button_11_Template, 2, 1, "button", 37)(12, UpsertVariantCatalogComponent_div_28_div_3_button_12_Template, 2, 1, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 38)(14, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UpsertVariantCatalogComponent_div_28_div_3_Template_button_click_14_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r35);
      const variant_r16 = restoredCtx.$implicit;
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r36.deleteVariant(variant_r16));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](15, "fa-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const variant_r16 = ctx.$implicit;
    const i_r17 = ctx.index;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](variant_r16.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", i_r17 > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", i_r17 + 1 < (ctx_r14.variantCatalog == null ? null : ctx_r14.variantCatalog.variants.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", ctx_r14.faDelete);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", i_r17 > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", i_r17 + 1 < (ctx_r14.variantCatalog == null ? null : ctx_r14.variantCatalog.variants.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", ctx_r14.faDelete);
  }
}
function UpsertVariantCatalogComponent_div_28_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UpsertVariantCatalogComponent_div_28_button_4_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r38);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r37.upsertArrangement());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Update ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function UpsertVariantCatalogComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 26)(1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Variant param names");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, UpsertVariantCatalogComponent_div_28_div_3_Template, 16, 7, "div", 27)(4, UpsertVariantCatalogComponent_div_28_button_4_Template, 2, 0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r5.variantCatalog.variants);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r5.visible);
  }
}
function UpsertVariantCatalogComponent_button_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UpsertVariantCatalogComponent_button_29_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r40);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r39.addVariant());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "fa-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", ctx_r6.faPlus);
  }
}
function UpsertVariantCatalogComponent_form_30_div_3_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Variant is invalid (1-24 length) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function UpsertVariantCatalogComponent_form_30_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 49)(1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UpsertVariantCatalogComponent_form_30_div_3_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r48);
      const i_r45 = restoredCtx.index;
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r47.removeAddedVariant(i_r45));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "fa-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, UpsertVariantCatalogComponent_form_30_div_3_div_5_Template, 2, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const variantGroups_r44 = ctx.$implicit;
    const i_r45 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](1);
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroupName", i_r45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", ctx_r42.faDelete);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _r41.submitted && variantGroups_r44.invalid);
  }
}
function UpsertVariantCatalogComponent_form_30_button_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Add variant ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function UpsertVariantCatalogComponent_form_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "form", 44, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function UpsertVariantCatalogComponent_form_30_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r50);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r49.form.valid && ctx_r49.addVariants());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, UpsertVariantCatalogComponent_form_30_div_3_Template, 6, 3, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, UpsertVariantCatalogComponent_form_30_button_4_Template, 2, 0, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r7.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r7.variant == null ? null : ctx_r7.variant.controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx_r7.variant == null ? null : ctx_r7.variant.controls == null ? null : ctx_r7.variant.controls.length) > 0);
  }
}
class UpsertVariantCatalogComponent {
  constructor(variantCatalogService, route, actRoute, spinner, toastr) {
    this.variantCatalogService = variantCatalogService;
    this.route = route;
    this.actRoute = actRoute;
    this.spinner = spinner;
    this.toastr = toastr;
    this.variantCatalog = new _model_variant_category_variant_catalog__WEBPACK_IMPORTED_MODULE_2__.VariantCatalog();
    this.faArrowLeft = _common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.iconArrowLeft;
    this.faPlus = _common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.iconPlus;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
    this.errorDto = new _model_error_error_dto__WEBPACK_IMPORTED_MODULE_1__.ErrorDto();
    this.faDelete = _common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.iconDelete;
    this.faArrowUp = _common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.iconArrowUp;
    this.faArrowDown = _common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.iconArrowDown;
    this.visible = false;
  }
  ngOnInit() {
    this.actRoute.paramMap.subscribe(params => {
      this.originalPathParamName = params.get('paramName');
      this.findByParamName();
    });
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroup({
      variant: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormArray([])
    });
  }
  get variant() {
    return this.form.get('variant');
  }
  findByParamName() {
    if (!this.originalPathParamName) {
      this.operation = "Create";
      this.variantCatalog = new _model_variant_category_variant_catalog__WEBPACK_IMPORTED_MODULE_2__.VariantCatalog();
      return;
    }
    this.operation = "Update";
    this.spinner.show('Variant Catalog').then(r => r);
    this.variantCatalogService.getVariantCatalog(this.originalPathParamName, this.errorDto).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$)).subscribe({
      next: response => {
        this.spinner.hide('Variant Catalog').then(() => {
          this.variantCatalog = response.data;
          this.variantCatalog.variants = this.variantCatalog.variants.sort((a, b) => a.arrangement - b.arrangement);
        });
      },
      error: () => {
        this.spinner.hide('Variant Catalog').then(() => {
          this.toastr.error('Loading variant catalog failed ' + this.errorDto.httpStatus, 'Variant Catalog');
        });
      }
    });
  }
  deleteVariant(variant) {
    if (!confirm('Are you sure to delete variant?' + variant.name + '?')) {
      return;
    }
    this.spinner.show('Variant Catalog').then(r => r);
    this.variantCatalogService.deleteVariant(variant, this.errorDto).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$)).subscribe({
      next: () => {
        this.spinner.hide('Variant Catalog').then(() => {
          this.toastr.success(variant.name + " deleted");
          this.findByParamName();
        });
      },
      error: () => {
        this.spinner.hide('Variant Catalog').then(() => {
          this.toastr.error('Delete variant failed ' + this.errorDto.httpStatus, 'Variant Catalog');
        });
      }
    });
  }
  upsertCatalogVariant() {
    if (this.operation == "Create") {
      this.createCatalogVariant();
    }
    if (this.operation == "Update") {
      this.updateCatalogVariant();
    }
  }
  updateCatalogVariant() {
    this.variantCatalogService.putVariantCatalog(this.originalPathParamName, this.variantCatalog, this.errorDto).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$)).subscribe({
      next: response => {
        this.spinner.hide('Variant Catalog').then(() => {
          this.variantCatalog = response.data;
          setTimeout(() => {
            this.route.navigate(['/variant-catalogs']);
          }, _common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.toastSuccessDelay);
        });
      },
      error: () => {
        this.spinner.hide('Variant Catalog').then(() => {
          this.toastr.error('Create catalog failed ' + this.errorDto.httpStatus, 'Variant Catalog');
        });
      }
    });
  }
  createCatalogVariant() {
    this.variantCatalogService.createVariantCatalog(this.variantCatalog, this.errorDto).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$)).subscribe({
      next: response => {
        this.spinner.hide('Variant Catalog').then(() => {
          this.variantCatalog = response.data;
          setTimeout(() => {
            this.route.navigate(['/variant-catalogs']);
          }, _common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.toastSuccessDelay);
        });
      },
      error: () => {
        this.spinner.hide('Variant Catalog').then(() => {
          this.toastr.error('Create catalog failed ' + this.errorDto.httpStatus, 'Variant Catalog');
        });
      }
    });
  }
  addVariant() {
    this.variant.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
    this.variant.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroup({
      name: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(''),
      index: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(this.variant.length + 1)
    }));
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  removeAddedVariant(index) {
    this.variant.removeAt(index);
  }
  addVariants() {
    const variantDetail = [];
    const variantsRequests = new _model_variant_category_variants_request__WEBPACK_IMPORTED_MODULE_4__.VariantsRequest(variantDetail);
    this.variant.getRawValue().forEach(data => variantDetail.push(new _model_variant_category_variant_detail__WEBPACK_IMPORTED_MODULE_3__.VariantDetail(data.name, data.index)));
    this.variantCatalogService.addVariants(this.originalPathParamName, variantsRequests, this.errorDto).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$)).subscribe({
      next: response => {
        this.spinner.hide('Variant Catalog').then(() => {
          this.variantCatalog = response.data;
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroup({
            variant: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormArray([])
          });
          this.findByParamName();
        });
      },
      error: () => {
        this.spinner.hide('Variant Catalog').then(() => {
          this.toastr.error('Addind variant to catalog failed ' + this.errorDto.httpStatus, 'Variant Catalog');
        });
      }
    });
  }
  down(variant, i) {
    this.visible = true;
    const val = this.variantCatalog.variants[i + 1];
    this.variantCatalog.variants[i + 1] = this.variantCatalog.variants[i];
    this.variantCatalog.variants[i] = val;
    this.reArrangement();
  }
  up(variant, i) {
    this.visible = true;
    const val = this.variantCatalog.variants[i - 1];
    this.variantCatalog.variants[i - 1] = this.variantCatalog.variants[i];
    this.variantCatalog.variants[i] = val;
    this.reArrangement();
  }
  reArrangement() {
    this.variantCatalog.variants.forEach((val, index) => {
      val.arrangement = index;
    });
  }
  upsertArrangement() {
    this.spinner.show('variant').then(r => r);
    this.variantCatalogService.updateVariantsArrangement(this.originalPathParamName, this.variantCatalog, this.errorDto).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$)).subscribe({
      next: response => {
        this.visible = false;
        this.spinner.hide('variant').then(() => {
          this.variantCatalog = response.data;
          this.variantCatalog.variants = this.variantCatalog.variants.sort((a, b) => a.arrangement - b.arrangement);
        });
      },
      error: () => {
        this.visible = false;
        this.spinner.hide('variant').then(() => {
          this.toastr.error('Upsert variants arrangement failed ' + this.errorDto.httpStatus, 'Variant Catalog');
        });
      }
    });
  }
  static #_ = this.ɵfac = function UpsertVariantCatalogComponent_Factory(t) {
    return new (t || UpsertVariantCatalogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_service_variant_catalog_service__WEBPACK_IMPORTED_MODULE_5__.VariantCatalogService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_13__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_14__.ToastrService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: UpsertVariantCatalogComponent,
    selectors: [["app-upsert-variant-catalog"]],
    decls: 31,
    vars: 11,
    consts: [[1, "box"], [1, "row", "justify-content-center"], [1, "col-lg-4", "col-sm-8", "align-self-center"], [1, "box-part", "text-center"], ["novalidate", "", 3, "ngSubmit"], ["upsertCatalogVariantForm", "ngForm"], [1, "mb-3"], ["for", "category-name", 1, "form-label"], ["id", "category-name", "name", "catName", "type", "text", "placeholder", "required", "required", "", "minlength", "4", "maxlength", "100", 1, "form-control", 3, "ngModel", "ngModelChange"], ["catName", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], ["bdColor", "rgba(51,51,51,0.8)", "size", "medium", "color", "#fff", "type", "ball-spin-clockwise"], [1, "mb-4"], ["for", "category-param-name", 1, "form-label"], ["id", "category-param-name", "name", "paramName", "type", "text", "placeholder", "required", "required", "", "minlength", "4", "maxlength", "24", 1, "form-control", 3, "ngModel", "ngModelChange"], ["paramName", "ngModel"], [3, "errorDto"], [1, "col-auto", "mb-4"], ["type", "submit", 1, "btn", "btn-primary", "mx-3", "mx-sm-5"], ["type", "button", "appBackButton", "", 1, "btn", "btn-danger", "mx-3", "mx-sm-5"], [3, "icon"], ["class", "box-part section m-auto", 4, "ngIf"], ["type", "button", "class", "btn btn-primary mx-3 mx-sm-5 mt-4 mb-3", 3, "click", 4, "ngIf"], ["class", "mt-1 section m-auto", 3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "alert", "alert-danger"], [4, "ngIf"], [1, "box-part", "section", "m-auto"], ["class", "row text-center text-sm-center", 4, "ngFor", "ngForOf"], ["class", "btn btn-primary mt-2 mx-3 mx-sm-5", 3, "click", 4, "ngIf"], [1, "row", "text-center", "text-sm-center"], [1, "input-group", "link", "border-bottom"], [1, "col-sm-10", "col"], ["data-label", "Name", 1, "d-inline-block", "m-2", "text-darkorange", "d-sm-none"], [1, "d-inline-block", "m-2", "text-white"], ["class", "btn btn-primary btn-sm m-2 d-sm-none", 3, "click", 4, "ngIf"], [1, "btn", "btn-danger", "btn-sm", "m-2", "d-sm-none", 3, "click"], [1, "btn-group-vertical", "d-sm-inline-flex", "d-none", "float-end", "m-2"], ["class", "btn btn-primary btn btn-danger btn-sm", 3, "click", 4, "ngIf"], [1, "col-sm-2", "d-sm-inline-flex", "d-none"], [1, "btn", "btn-danger", "btn-sm", "m-2", 3, "click"], [1, "btn", "btn-primary", "btn-sm", "m-2", "d-sm-none", 3, "click"], [1, "btn", "btn-primary", "btn", "btn-danger", "btn-sm", 3, "click"], [1, "btn", "btn-primary", "mt-2", "mx-3", "mx-sm-5", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "mx-3", "mx-sm-5", "mt-4", "mb-3", 3, "click"], [1, "mt-1", "section", "m-auto", 3, "formGroup", "ngSubmit"], ["ngForm", "ngForm"], ["formArrayName", "variant"], [3, "formGroupName", 4, "ngFor", "ngForOf"], ["class", "btn btn-primary mx-3 mx-sm-5 mt-4 mb-3", 4, "ngIf"], [3, "formGroupName"], [1, "input-group", "mb-2"], ["type", "text", "formControlName", "name", "placeholder", "variant name", "maxlength", "24", "required", "", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-primary", "mx-3", "mx-sm-5", "mt-4", "mb-3"]],
    template: function UpsertVariantCatalogComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "form", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function UpsertVariantCatalogComponent_Template_form_ngSubmit_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r51);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](5);
          return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](_r0.valid && _r0.dirty && ctx.upsertCatalogVariant());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 6)(9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function UpsertVariantCatalogComponent_Template_input_ngModelChange_11_listener($event) {
          return ctx.variantCatalog.name = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, UpsertVariantCatalogComponent_div_13_Template, 4, 3, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "ngx-spinner", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 12)(16, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "Param Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function UpsertVariantCatalogComponent_Template_input_ngModelChange_18_listener($event) {
          return ctx.variantCatalog.paramName = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](20, UpsertVariantCatalogComponent_div_20_Template, 4, 3, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](21, "app-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "div", 17)(23, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](26, "fa-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27, "\u00A0Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](28, UpsertVariantCatalogComponent_div_28_Template, 5, 2, "div", 21)(29, UpsertVariantCatalogComponent_button_29_Template, 2, 1, "button", 22)(30, UpsertVariantCatalogComponent_form_30_Template, 5, 3, "form", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](5);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](12);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", ctx.operation, " category variant");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.variantCatalog.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _r0.submitted && _r1.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.variantCatalog.paramName);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _r0.submitted && _r3.invalid && (_r3.dirty || _r3.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("errorDto", ctx.errorDto);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.operation);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", ctx.faArrowLeft);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx.variantCatalog == null ? null : ctx.variantCatalog.variants == null ? null : ctx.variantCatalog.variants.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.route.url !== "/variant-catalogs/create");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.route.url !== "/variant-catalogs/create");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, ngx_spinner__WEBPACK_IMPORTED_MODULE_13__.NgxSpinnerComponent, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__.FaIconComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormArrayName, _shared_error_component__WEBPACK_IMPORTED_MODULE_6__.ErrorComponent, _navigation_back_button_directive__WEBPACK_IMPORTED_MODULE_7__.BackButtonDirective],
    styles: [".section[_ngcontent-%COMP%] {\n  max-width: 400px;\n  width: auto;\n}\n\n\n\n@media screen and (max-width: 576px) {\n  section[_ngcontent-%COMP%] {\n    max-width: 300px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdXBzZXJ0LXZhcmlhbnQtY2F0YWxvZy91cHNlcnQtdmFyaWFudC1jYXRhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBLDBCQUEwQjtBQUMxQjtFQUNFO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbiB7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIHdpZHRoOiBhdXRvO1xufVxuXG4vKiogIEJ1dHRvbnMgZm9yIG1vYmlsZSAqKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIHNlY3Rpb24ge1xuICAgIG1heC13aWR0aDogMzAwcHg7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 8901:
/*!*******************************************************!*\
  !*** ./src/app/validator/isbn-validator.directive.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IsbnValidatorDirective: () => (/* binding */ IsbnValidatorDirective)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);


class IsbnValidatorDirective {
  constructor() {
    // Checks for ISBN-10 or ISBN-13 format
    this.regex = new RegExp('^(?:ISBN(?:-1[03])?:? )?(?=[0-9X]{10}$|(?=(?:[0-9]+[- ]){3})[- 0-9X]{13}$|97[89][0-9]{10}$|(?=(?:[0-9]+[- ]){4})[- 0-9]{17}$)(?:97[89][- ]?)?[0-9]{1,5}[- ]?[0-9]+[- ]?[0-9]+[- ]?[0-9X]$');
  }
  validate(control) {
    return this.regex.test(control.value) ? null : {
      isInvalidIsbn: true
    };
  }
  static #_ = this.ɵfac = function IsbnValidatorDirective_Factory(t) {
    return new (t || IsbnValidatorDirective)();
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: IsbnValidatorDirective,
    selectors: [["", "appIsbnValidator", ""]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALIDATORS,
      useExisting: IsbnValidatorDirective,
      multi: true
    }])]
  });
}

/***/ }),

/***/ 159:
/*!*********************************************************!*\
  !*** ./src/app/validator/password-matcher.directive.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PasswordMatcherDirective: () => (/* binding */ PasswordMatcherDirective)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);


class PasswordMatcherDirective {
  constructor() {
    this.matchPassword = [];
  }
  validate(formGroup) {
    return this.match(this.matchPassword[0], this.matchPassword[1])(formGroup);
  }
  match(controlName, checkControlName) {
    return formGroup => {
      const control = formGroup.controls[controlName];
      const checkControl = formGroup.controls[checkControlName];
      if (control?.value == null && checkControl?.value == null) {
        checkControl?.setErrors(null);
        return null;
      }
      if (checkControl?.errors && !checkControl.errors['matching']) {
        return null;
      }
      if (control?.value !== checkControl?.value) {
        checkControl?.setErrors({
          matching: true
        });
        console.log('errors set tu true');
        return {
          matching: true
        };
      } else {
        console.log('errors set tu false');
        checkControl?.setErrors(null);
        return null;
      }
    };
  }
  static #_ = this.ɵfac = function PasswordMatcherDirective_Factory(t) {
    return new (t || PasswordMatcherDirective)();
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: PasswordMatcherDirective,
    selectors: [["", "appMatchPassword", ""]],
    inputs: {
      matchPassword: ["appMatchPassword", "matchPassword"]
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALIDATORS,
      useExisting: PasswordMatcherDirective,
      multi: true
    }])]
  });
}

/***/ }),

/***/ 5380:
/*!*********************************************************!*\
  !*** ./src/app/validator/password-pattern.directive.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PasswordPatternDirective: () => (/* binding */ PasswordPatternDirective)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);


class PasswordPatternDirective {
  constructor() {
    // Checks for ISBN-10 or ISBN-13 format
    this.regex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$');
  }
  validate(control) {
    return this.patternValidator()(control);
  }
  patternValidator() {
    return control => {
      if (!control.value) {
        return null;
      }
      const regex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$');
      const valid = regex.test(control.value);
      return valid ? null : {
        invalidPassword: true
      };
    };
  }
  static #_ = this.ɵfac = function PasswordPatternDirective_Factory(t) {
    return new (t || PasswordPatternDirective)();
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: PasswordPatternDirective,
    selectors: [["", "appPasswordPattern", ""]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALIDATORS,
      useExisting: PasswordPatternDirective,
      multi: true
    }])]
  });
}

/***/ }),

/***/ 8173:
/*!********************************************************!*\
  !*** ./src/app/validator/price-validator.directive.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PriceValidatorDirective: () => (/* binding */ PriceValidatorDirective)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);


class PriceValidatorDirective {
  constructor() {
    this.regex = new RegExp('^(?:0|[1-9]\\d{0,7})(?:\\.\\d+)?$');
  }
  validate(control) {
    return this.regex.test(control.value) ? null : {
      isInvalidPrice: true
    };
  }
  static #_ = this.ɵfac = function PriceValidatorDirective_Factory(t) {
    return new (t || PriceValidatorDirective)();
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: PriceValidatorDirective,
    selectors: [["", "appPriceValidator", ""]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALIDATORS,
      useExisting: PriceValidatorDirective,
      multi: true
    }])]
  });
}

/***/ }),

/***/ 7438:
/*!******************************************************!*\
  !*** ./src/app/validator/url-validator.directive.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UrlValidatorDirective: () => (/* binding */ UrlValidatorDirective)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);


class UrlValidatorDirective {
  constructor() {
    this.regex = new RegExp('^[a-zA-Z0-9]{3,13}[-]{0,1}[a-zA-Z0-9]{0,13}$');
  }
  validate(control) {
    return this.regex.test(control.value) ? null : {
      isInvalidUrl: true
    };
  }
  static #_ = this.ɵfac = function UrlValidatorDirective_Factory(t) {
    return new (t || UrlValidatorDirective)();
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: UrlValidatorDirective,
    selectors: [["", "appUrlValidator", ""]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALIDATORS,
      useExisting: UrlValidatorDirective,
      multi: true
    }])]
  });
}

/***/ }),

/***/ 9931:
/*!************************************************************************!*\
  !*** ./src/app/variant-catalog-list/variant-catalog-list.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VariantCatalogListComponent: () => (/* binding */ VariantCatalogListComponent)
/* harmony export */ });
/* harmony import */ var _common_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/app-constants */ 9827);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var _model_error_error_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/error/error-dto */ 3990);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _service_variant_catalog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/variant-catalog.service */ 5629);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ 8375);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ 7548);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 683);
/* harmony import */ var _shared_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/error.component */ 6333);












const _c0 = a1 => ["/variant-catalogs/", a1];
function VariantCatalogListComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 16)(1, "div", 17)(2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 25)(15, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "fa-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 25)(18, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function VariantCatalogListComponent_div_24_Template_button_click_18_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const variantCategory_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.deleteVariantCatalog(variantCategory_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "fa-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const variantCategory_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](variantCategory_r1.paramName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](variantCategory_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](variantCategory_r1.variants == null ? null : variantCategory_r1.variants.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](6, _c0, variantCategory_r1.paramName));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx_r0.faEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx_r0.faDelete);
  }
}
const _c1 = () => ["/variant-catalogs/create"];
class VariantCatalogListComponent {
  constructor(variantCatalogService, spinner, toastr) {
    this.variantCatalogService = variantCatalogService;
    this.spinner = spinner;
    this.toastr = toastr;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.faEdit = _common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.iconEdit;
    this.faDelete = _common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.iconDelete;
    this.errorDto = new _model_error_error_dto__WEBPACK_IMPORTED_MODULE_1__.ErrorDto();
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  ngOnInit() {
    this.loadVariantCatalog();
  }
  loadVariantCatalog() {
    this.spinner.show('Variant Catalog').then(r => r);
    this.variantCatalogService.listAll(this.errorDto).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroy$)).subscribe({
      next: catalogVariants => {
        this.spinner.hide('Variant Catalog').then(() => this.toastr.info(catalogVariants.data?.length + 'reloaded', 'VariantCatalogSpinner'));
        this.variantCategories = catalogVariants.data;
      },
      error: () => {
        this.spinner.hide('Variant Catalog').then(() => {
          this.toastr.error(this.errorDto?.httpStatus + ' category variants failed', 'VariantCatalogSpinner');
          this.variantCategories = [];
        });
      }
    });
  }
  deleteVariantCatalog(variantCategory) {
    if (!confirm('Are you sure to delete catalog?' + variantCategory.paramName + '?')) {
      return;
    }
    this.spinner.show('Variant Catalog').then(r => r);
    this.variantCatalogService.deleteVariantCatalog(variantCategory, this.errorDto).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroy$)).subscribe({
      next: () => {
        this.spinner.hide('Variant Catalog').then(() => {
          this.loadVariantCatalog();
          this.toastr.info(variantCategory.paramName + ' deleted', 'VariantCatalogSpinner');
        });
      },
      error: () => {
        this.spinner.hide('Variant Catalog').then(() => {
          this.toastr.error(this.errorDto?.httpStatus + ' delete failed', 'VariantCatalogSpinner');
        });
      }
    });
  }
  static #_ = this.ɵfac = function VariantCatalogListComponent_Factory(t) {
    return new (t || VariantCatalogListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_variant_catalog_service__WEBPACK_IMPORTED_MODULE_2__.VariantCatalogService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_7__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: VariantCatalogListComponent,
    selectors: [["app-variant-catalog-list"]],
    decls: 28,
    vars: 6,
    consts: [[1, "box"], [1, "row", "justify-content-center"], [1, "col-lg-6", "col-md-8", "col-12", "align-self-center"], [1, "box-part", "text-center"], [1, "text-orange", "mb-3"], [1, "row"], [1, "input-group", "d-none", "d-sm-inline-flex", "text-center"], [1, "col-12", "col-sm-4"], [1, "text-darkorange"], [1, "col-12", "col-sm-2"], [1, "col-12", "col-sm-1"], [1, "text-darkorange", 3, "icon"], ["bdColor", "rgba(51,51,51,0.8)", "size", "medium", "color", "#fff", "type", "ball-spin-clockwise"], ["class", "row text-center text-sm-center", 4, "ngFor", "ngForOf"], [3, "errorDto"], ["routerLinkActive", "active", 1, "btn", "btn-primary", 3, "routerLink"], [1, "row", "text-center", "text-sm-center"], [1, "input-group", "link"], [1, "col-12", "col-sm-4", "border-bottom"], ["data-label", "Param Name", 1, "d-inline-block", "m-2", "text-darkorange", "d-sm-none"], [1, "d-inline-block", "m-2", "text-white"], [1, "col-12", "col-sm-4", "text-white", "border-bottom"], ["data-label", "Name", 1, "d-inline-block", "m-2", "text-darkorange", "d-sm-none"], [1, "col-12", "col-sm-2", "border-bottom"], ["data-label", "Variants", 1, "d-inline-block", "m-2", "text-darkorange", "d-sm-none"], [1, "col-12", "col-sm-1", "border-bottom", "text-center"], ["routerLinkActive", "active", 1, "btn", "btn-primary", "btn-sm", "m-2", 3, "routerLink"], [3, "icon"], ["routerLinkActive", "active", 1, "btn", "btn-danger", "btn-sm", "m-2", 3, "click"]],
    template: function VariantCatalogListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Variant catalog");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Param Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 7)(12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 9)(15, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Varianty [ks]");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 10)(18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "fa-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 10)(21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "fa-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "ngx-spinner", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, VariantCatalogListComponent_div_24_Template, 20, 8, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "app-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Create catalog ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx.faEdit);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx.faDelete);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.variantCategories);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("errorDto", ctx.errorDto);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](5, _c1));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkActive, ngx_spinner__WEBPACK_IMPORTED_MODULE_7__.NgxSpinnerComponent, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__.FaIconComponent, _shared_error_component__WEBPACK_IMPORTED_MODULE_3__.ErrorComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 1801:
/*!*******************************************************************!*\
  !*** ./src/app/write-us/write-us-list/write-us-list.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WriteUsListComponent: () => (/* binding */ WriteUsListComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var _common_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/app-constants */ 9827);
/* harmony import */ var _model_error_error_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/error/error-dto */ 3990);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _service_write_us_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/write-us.service */ 6287);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ 8375);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ 7548);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 683);
/* harmony import */ var _shared_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/error.component */ 6333);












function WriteUsListComponent_div_33_fa_icon_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "fa-icon", 31);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx_r2.faNo);
  }
}
const _c0 = a1 => ["/email/write-us/", a1];
function WriteUsListComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 20)(1, "div", 21)(2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, WriteUsListComponent_div_33_fa_icon_14_Template, 1, 1, "fa-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "fa-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 32)(21, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "fa-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 32)(24, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "fa-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const email_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](email_r1.emailFrom);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](10, 8, email_r1.audit.modifiedAt, "dd.MM.yyy HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !email_r1.phoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", email_r1.phoneNumber, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx_r0.resolveIconBasedOnReplied(email_r1.replied));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](11, _c0, email_r1.emailFrom));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx_r0.faEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx_r0.faDelete);
  }
}
class WriteUsListComponent {
  constructor(writeUs, router, spinner, toastr) {
    this.writeUs = writeUs;
    this.router = router;
    this.spinner = spinner;
    this.toastr = toastr;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.emailList = new Array();
    this.emailListFiltered = new Array();
    this.faEdit = _common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.iconEdit;
    this.faDelete = _common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.iconDelete;
    this.faYes = _common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.iconYes;
    this.faNo = _common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.iconNo;
    this.errorDto = new _model_error_error_dto__WEBPACK_IMPORTED_MODULE_1__.ErrorDto();
    this.replied = false;
  }
  ngOnInit() {
    this.getEmails();
  }
  getEmails() {
    this.spinner.show().then(r => r);
    this.writeUs.loadEmailsWriteUs(this.errorDto, 0, 20, null, null).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroy$)).subscribe({
      next: response => {
        this.spinner.hide().then(() => this.toastr.info(response.data.length + ' emails reloaded', 'Emails'));
        this.emailList = response.data;
        this.emailListFiltered = this.emailList.filter(data => data.replied == false);
      },
      error: () => {
        this.spinner.hide().then(() => {
          this.toastr.error(this.errorDto.httpStatus + ' emails reload failed', 'Emails');
        });
      }
    });
  }
  resolveIconBasedOnReplied(replied) {
    return replied ? this.faYes : this.faNo;
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  filter() {
    this.replied = !this.replied;
    if (this.replied == false) {
      this.emailListFiltered = this.emailList.filter(data => data.replied == false);
    } else {
      this.emailListFiltered = this.emailList;
    }
  }
  static #_ = this.ɵfac = function WriteUsListComponent_Factory(t) {
    return new (t || WriteUsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_write_us_service__WEBPACK_IMPORTED_MODULE_2__.WriteUsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: WriteUsListComponent,
    selectors: [["app-write-us-list"]],
    decls: 35,
    vars: 5,
    consts: [[1, "box"], [1, "row", "justify-content-center"], [1, "col-lg-8", "col-12", "align-self-center"], [1, "box-part", "text-center"], [1, "text-orange", "mb-2"], [1, "row", "mb-3", "justify-content-end"], [1, "col-12", "col-sm-5", "col-md-4"], [1, "input-group"], ["type", "checkbox", "id", "repliedId", 3, "checked", "click"], ["aria-describedby", "repliedId", "id", "lblrepliedId", "for", "repliedId", 1, "checkbox-inline", "ms-2"], [1, "row"], [1, "input-group", "d-none", "d-sm-inline-flex", "text-center"], [1, "col-12", "col-sm-4"], [1, "text-darkorange"], [1, "col-12", "col-sm-2"], [1, "col-12", "col-sm-1"], [1, "text-darkorange", 3, "icon"], ["bdColor", "rgba(51,51,51,0.8)", "size", "medium", "color", "#fff", "type", "ball-spin-clockwise"], ["class", "row text-center", 4, "ngFor", "ngForOf"], [3, "errorDto"], [1, "row", "text-center"], [1, "input-group", "link"], [1, "col-12", "col-sm-4", "border-bottom"], ["data-label", "Email", 1, "d-inline-block", "m-2", "text-darkorange", "d-sm-none"], [1, "d-inline-block", "m-2", "text-white"], [1, "col-12", "col-sm-2", "text-white", "border-bottom"], ["data-label", "P\u0159ijato", 1, "d-inline-block", "m-2", "text-darkorange", "d-sm-none"], ["data-label", "Telefon", 1, "d-inline-block", "m-2", "text-darkorange", "d-sm-none"], [3, "icon", 4, "ngIf"], [1, "col-12", "col-sm-2", "border-bottom"], ["data-label", "Odpov\u011Bzeno", 1, "d-inline-block", "m-2", "text-darkorange", "d-sm-none"], [3, "icon"], [1, "col-12", "col-sm-1", "border-bottom", "text-center"], ["routerLinkActive", "active", 1, "btn", "btn-primary", "btn-sm", "m-2", 3, "routerLink"], [1, "btn", "btn-primary", "btn-sm", "m-2"]],
    template: function WriteUsListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Emaily");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WriteUsListComponent_Template_input_click_9_listener() {
          return ctx.filter();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Pouze nezodpov\u011Bzen\u00E9 emaily");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 10)(13, "div", 11)(14, "div", 12)(15, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 14)(18, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "P\u0159ijato");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 14)(21, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Telefon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 14)(24, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Odpov\u011Bzeno");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 15)(27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 15)(30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](32, "ngx-spinner", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, WriteUsListComponent_div_33_Template, 26, 13, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](34, "app-error", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx.replied === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx.faEdit);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx.faDelete);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.emailListFiltered);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("errorDto", ctx.errorDto);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkActive, ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerComponent, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__.FaIconComponent, _shared_error_component__WEBPACK_IMPORTED_MODULE_3__.ErrorComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe],
    styles: ["input[_ngcontent-%COMP%]{\n  box-shadow: none !important;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvd3JpdGUtdXMvd3JpdGUtdXMtbGlzdC93cml0ZS11cy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBMkI7QUFDN0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dHtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3237:
/*!*********************************************************!*\
  !*** ./src/app/write-us/write-us/write-us.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WriteUsComponent: () => (/* binding */ WriteUsComponent)
/* harmony export */ });
/* harmony import */ var _common_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/app-constants */ 9827);
/* harmony import */ var _model_error_error_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/error/error-dto */ 3990);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var _common_abstract_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/abstract/base-service */ 3094);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 274);
/* harmony import */ var _model_email_email__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/email/email */ 7390);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _service_shared_img_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/shared-img.service */ 7903);
/* harmony import */ var _service_write_us_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/write-us.service */ 6287);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-spinner */ 8375);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-toastr */ 7548);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @kolkov/angular-editor */ 6070);
/* harmony import */ var _shared_error_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/error.component */ 6333);
/* harmony import */ var _shared_app_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/app-info.component */ 3425);
/* harmony import */ var _navigation_back_button_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../navigation/back-button.directive */ 934);



















function WriteUsComponent_div_11_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 27)(1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const email_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("src", ctx_r6.imgLoginPath, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](5, 3, email_r5.answer.audit.createdAt, "dd.MM.yyyy hh:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("innerHTML", email_r5.answer.body, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeHtml"]);
  }
}
function WriteUsComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 12)(1, "div", 20)(2, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 24)(8, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](10, WriteUsComponent_div_11_div_10_Template, 8, 6, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const email_r5 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("src", ctx_r0.imgLoginPath, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](6, 4, email_r5.audit.createdAt, "dd.MM.yyyy hh:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](email_r5.body);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", email_r5.answer);
  }
}
function WriteUsComponent_div_15_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Nen\u00ED vypln\u011Bno.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function WriteUsComponent_div_15_div_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Odpove\u010F mus\u00ED m\u00EDt alespo\u0148 20 znak\u016F.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function WriteUsComponent_div_15_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, WriteUsComponent_div_15_div_3_div_1_Template, 2, 0, "div", 36)(2, WriteUsComponent_div_15_div_3_div_2_Template, 2, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _r9.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _r9.errors.minlength);
  }
}
function WriteUsComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 30)(1, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Odpov\u011B\u010F");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, WriteUsComponent_div_15_div_3_Template, 3, 2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "angular-editor", 33, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function WriteUsComponent_div_15_Template_angular_editor_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r12.htmlContent = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](5);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _r1.submitted && _r9.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("placeholder", "Enter text here...")("ngModel", ctx_r2.htmlContent)("config", ctx_r2.editorConfig);
  }
}
function WriteUsComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "div", 37);
  }
}
function WriteUsComponent_button_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Odeslat ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
class WriteUsComponent extends _common_abstract_base_service__WEBPACK_IMPORTED_MODULE_2__.BaseService {
  constructor(actRoute, sharedService, writeUsService, spinner, toastr) {
    super();
    this.actRoute = actRoute;
    this.sharedService = sharedService;
    this.writeUsService = writeUsService;
    this.spinner = spinner;
    this.toastr = toastr;
    this.emailAddress = '';
    this.info = '';
    this.imgLoginPath = '';
    this.emails = new Array();
    this.htmlContent = '';
    this.faArrowLeft = _common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.iconArrowLeft;
    this.faThrash = _common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.iconTrash;
    this.faEye = _common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.iconEye;
    this.errorDto = new _model_error_error_dto__WEBPACK_IMPORTED_MODULE_1__.ErrorDto();
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subject();
    this.editorConfig = {
      editable: true,
      spellcheck: true,
      height: '15rem',
      minHeight: '5rem',
      placeholder: 'Enter text here...',
      translate: 'no',
      defaultParagraphSeparator: 'p',
      defaultFontName: '',
      toolbarHiddenButtons: [['undo', 'redo', 'indent', 'subscript', 'superscript', 'strikeThrough'], ['link', 'unlink', 'insertImage', 'insertVideo', 'insertHorizontalRule']]
    };
  }
  ngOnInit() {
    this.actRoute.paramMap.subscribe(params => {
      this.emailAddress = params.get('email');
    });
    this.sharedService.currentImgPath.subscribe(data => this.imgLoginPath = data);
    this.getEmails();
  }
  getEmails() {
    this.spinner.show().then(r => r);
    this.writeUsService.loadEmailsWriteUs(this.errorDto, 0, 20, this.emailAddress, null).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$)).subscribe({
      next: response => {
        setTimeout(() => {
          this.info = null;
        }, _common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.toastSuccessDelay);
        this.spinner.hide().then(() => this.emails = response.data);
      },
      error: () => {
        this.spinner.hide().then(() => {
          this.toastr.error(this.errorDto.httpStatus + ' emails reload failed', 'Emails');
        });
      }
    });
  }
  hideAnswer() {
    return this.emails.filter(data => data.replied == true).length == this.emails.length;
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  response(form) {
    this.spinner.show().then(r => r);
    this.writeUsService.responseToEmail(this.errorDto, new _model_email_email__WEBPACK_IMPORTED_MODULE_3__.Email(this.htmlContent, this.emailAddress)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$)).subscribe({
      next: () => {
        this.spinner.hide().then(() => {
          form.resetForm();
          this.toastr.success('Odesláno', 'Emails');
          this.info = 'Email odeslán';
          setTimeout(() => {
            this.getEmails();
          }, _common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.toastSuccessDelay);
        });
      },
      error: () => {
        this.spinner.hide().then(() => {
          this.toastr.error(this.errorDto.httpStatus + ' emails send failed', 'Emails');
        });
      }
    });
  }
  static #_ = this.ɵfac = function WriteUsComponent_Factory(t) {
    return new (t || WriteUsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_service_shared_img_service__WEBPACK_IMPORTED_MODULE_4__.SharedImgService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_service_write_us_service__WEBPACK_IMPORTED_MODULE_5__.WriteUsService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_13__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_14__.ToastrService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: WriteUsComponent,
    selectors: [["app-write-us"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]],
    decls: 26,
    vars: 8,
    consts: [[1, "box"], [1, "row", "justify-content-center"], [1, "col-lg-6", "col-sm-8", "align-self-center"], [1, "box-part", "text-center", "text-white"], [1, "d-block"], ["bdColor", "rgba(51,51,51,0.8)", "size", "medium", "color", "#fff", "type", "ball-spin-clockwise"], [1, "card"], ["class", "card-body", 4, "ngFor", "ngForOf"], [1, "mb-3"], ["novalidate", "", 3, "ngSubmit"], ["writeUsForm", "ngForm"], ["class", "m-2", 4, "ngIf"], [1, "card-body"], [3, "info"], [3, "errorDto"], ["class", "mt-4", 4, "ngIf"], [1, "col-auto"], ["type", "submit", "class", "ms-3 ms-sm-5 btn btn-primary", 4, "ngIf"], ["type", "button", "appBackButton", "", 1, "ms-3", "ms-sm-5", "btn", "btn-danger"], [1, "me-2", 3, "icon"], [1, "d-block", "d-sm-flex", "flex-row", "justify-content-start", "mb-1", "mb-sm-3", "ms-0", "ms-sm-2", "pt-0", "pt-sm-2", "text-black"], [1, "d-inline-block", "d-sm-inline", "mb-auto"], ["alt", "john doe", 1, "img-customizer", "d-none", "d-sm-flex", 3, "src"], [1, "text-start", "customize-short", "mt-auto"], [1, "p-2", "p-sm-3", "ms-1", "ms-sm-3", "card-body-chat", "h-auto", "d-block", "d-sm-flex"], [1, "small", "mb-0"], ["class", "d-block d-sm-flex flex-row justify-content-start ms-0 ms-sm-4 pt-0 pt-sm-2 text-black", 4, "ngIf"], [1, "d-block", "d-sm-flex", "flex-row", "justify-content-start", "ms-0", "ms-sm-4", "pt-0", "pt-sm-2", "text-black"], [1, "p-2", "p-sm-3", "ms-1", "ms-sm-3", "card-body-chat-answer", "h-auto", "d-block", "d-sm-flex"], [1, "small", "mb-0", 3, "innerHTML"], [1, "m-2"], ["for", "product-edited-description", 1, "form-label", "pb-1", "pt-3"], ["class", "alert alert-danger", 4, "ngIf"], ["id", "product-edited-description", "name", "description", "minlength", "20", "required", "", 1, "form-control", 3, "placeholder", "ngModel", "config", "ngModelChange"], ["description", "ngModel"], [1, "alert", "alert-danger"], [4, "ngIf"], [1, "mt-4"], ["type", "submit", 1, "ms-3", "ms-sm-5", "btn", "btn-primary"]],
    template: function WriteUsComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "Email Detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](8, "hr")(9, "ngx-spinner", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](11, WriteUsComponent_div_11_Template, 11, 7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "form", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngSubmit", function WriteUsComponent_Template_form_ngSubmit_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r14);
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](14);
          return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](_r1.valid && ctx.response(_r1));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](15, WriteUsComponent_div_15_Template, 6, 4, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](17, "app-info", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](19, "app-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](20, WriteUsComponent_div_20_Template, 1, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](22, WriteUsComponent_button_22_Template, 2, 0, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](24, "fa-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25, " Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.emailAddress);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.emails);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.emailAddress && !ctx.hideAnswer());
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("info", ctx.info);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("errorDto", ctx.errorDto);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.hideAnswer());
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.hideAnswer());
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("icon", ctx.faArrowLeft);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, ngx_spinner__WEBPACK_IMPORTED_MODULE_13__.NgxSpinnerComponent, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__.FaIconComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgForm, _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_18__.AngularEditorComponent, _shared_error_component__WEBPACK_IMPORTED_MODULE_6__.ErrorComponent, _shared_app_info_component__WEBPACK_IMPORTED_MODULE_7__.InfoComponent, _navigation_back_button_directive__WEBPACK_IMPORTED_MODULE_8__.BackButtonDirective, _angular_common__WEBPACK_IMPORTED_MODULE_15__.DatePipe],
    styles: [".customize-short[_ngcontent-%COMP%] {\n  color: var(--color-text);\n  font-size: 10px;\n}\n\n.img-customizer[_ngcontent-%COMP%] {\n  width: 65px;\n  height: 65px;\n}\n\n@media only screen and (max-width: 600px) {\n  .card-body[_ngcontent-%COMP%] {\n    padding-top: 0 !important;\n    padding-bottom:0 !important;\n  }\n}\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvd3JpdGUtdXMvd3JpdGUtdXMvd3JpdGUtdXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUF3QjtFQUN4QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFO0lBQ0UseUJBQXlCO0lBQ3pCLDJCQUEyQjtFQUM3QjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbWl6ZS1zaG9ydCB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0KTtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4uaW1nLWN1c3RvbWl6ZXIge1xuICB3aWR0aDogNjVweDtcbiAgaGVpZ2h0OiA2NXB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jYXJkLWJvZHkge1xuICAgIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1ib3R0b206MCAhaW1wb3J0YW50O1xuICB9XG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 553);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map