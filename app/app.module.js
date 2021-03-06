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
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
// used to create fake backend
// import { BackendProvider } from './helpers/backend';
// import { MockBackend } from '@angular/http/testing';
// import { BaseRequestOptions } from '@angular/http';
var app_component_1 = require('./app.component');
var pagenotfound_component_1 = require('./components/error/pagenotfound.component');
var app_company_component_1 = require('./components/company/app.company.component');
var app_login_component_1 = require('./components/login/app.login.component');
var app_signup_component_1 = require('./components/signup/app.signup.component');
var app_logout_component_1 = require('./components/logout/app.logout.component');
var app_router_1 = require('./app.router');
// guards
var auth_guard_1 = require('./components/auth/auth.guard');
// services
var user_auth_service_1 = require('./services/user.auth.service');
var sectors_service_1 = require('./services/sectors.service');
var keys_pipe_1 = require('./pipes/keys.pipe');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                app_router_1.routes
            ],
            declarations: [
                // Compoenents
                app_component_1.AppComponent,
                app_company_component_1.CompanyComponent,
                app_login_component_1.LoginComponent,
                app_signup_component_1.SignUpComponent,
                app_logout_component_1.LogoutComponent,
                pagenotfound_component_1.PageNotFoundComponent,
                // Pipes
                keys_pipe_1.KeysPipe
            ],
            providers: [
                auth_guard_1.AuthGuard,
                user_auth_service_1.SignupService,
                user_auth_service_1.AuthenticationService,
                user_auth_service_1.UserService,
                sectors_service_1.SectorsService,
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map