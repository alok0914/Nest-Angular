"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutingModule = exports.routes = void 0;
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const login_component_1 = require("./auth/login/login.component");
const sign_up_component_1 = require("./auth/sign-up/sign-up.component");
const notes_component_1 = require("./notes-component/notes-component");
exports.routes = [
    { path: '', component: login_component_1.LoginComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'sign-up', component: sign_up_component_1.SignUpComponent },
    { path: 'notes', component: notes_component_1.NotesComponent },
];
let AppRoutingModule = class AppRoutingModule {
};
exports.AppRoutingModule = AppRoutingModule;
exports.AppRoutingModule = AppRoutingModule = __decorate([
    (0, core_1.NgModule)({
        imports: [
            router_1.RouterModule.forRoot(exports.routes)
        ],
        declarations: [],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
//# sourceMappingURL=app.routes.js.map