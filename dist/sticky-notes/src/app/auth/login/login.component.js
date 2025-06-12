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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginComponent = void 0;
const core_1 = require("@angular/core");
const user_service_1 = require("./../../../service/user-service");
const forms_1 = require("@angular/forms");
const router_1 = require("@angular/router");
let LoginComponent = class LoginComponent {
    user;
    userData;
    constructor(user) {
        this.user = user;
    }
    ngOnInit() {
        this.user.currentUserData.subscribe(userData => (this.userData = userData));
    }
    changeData(event) {
        var msg = event.target.value;
        this.user.changeData(msg);
    }
    login(data) {
        this.user.changeData(data);
    }
};
exports.LoginComponent = LoginComponent;
exports.LoginComponent = LoginComponent = __decorate([
    (0, core_1.Component)({
        selector: "app-login",
        templateUrl: "./login.component.html",
        styleUrls: ["./login.component.css"],
        imports: [forms_1.FormsModule, router_1.RouterLink],
        providers: [user_service_1.UserService]
    }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], LoginComponent);
//# sourceMappingURL=login.component.js.map