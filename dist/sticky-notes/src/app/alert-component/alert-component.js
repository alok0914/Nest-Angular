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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertComponent = void 0;
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const _models_1 = require("@app/_models");
const _services_1 = require("@app/_services");
let AlertComponent = class AlertComponent {
    router;
    alertService;
    id = 'default-alert';
    fade = true;
    alerts = [];
    alertSubscription;
    routeSubscription;
    constructor(router, alertService) {
        this.router = router;
        this.alertService = alertService;
    }
    ngOnInit() {
        this.alertSubscription = this.alertService.onAlert(this.id)
            .subscribe(alert => {
            if (!alert.message) {
                this.alerts = this.alerts.filter(x => x.keepAfterRouteChange);
                this.alerts.forEach(x => delete x.keepAfterRouteChange);
                return;
            }
            this.alerts.push(alert);
            if (alert.autoClose) {
                setTimeout(() => this.removeAlert(alert), 3000);
            }
        });
        this.routeSubscription = this.router.events.subscribe(event => {
            if (event instanceof router_1.NavigationStart) {
                this.alertService.clear(this.id);
            }
        });
    }
    ngOnDestroy() {
        this.alertSubscription.unsubscribe();
        this.routeSubscription.unsubscribe();
    }
    removeAlert(alert) {
        if (!this.alerts.includes(alert))
            return;
        if (this.fade) {
            alert.fade = true;
            setTimeout(() => {
                this.alerts = this.alerts.filter(x => x !== alert);
            }, 250);
        }
        else {
            this.alerts = this.alerts.filter(x => x !== alert);
        }
    }
    cssClass(alert) {
        if (!alert)
            return;
        const classes = ['alert', 'alert-dismissible', 'mt-4', 'container'];
        const alertTypeClass = {
            [_models_1.AlertType.Success]: 'alert-success',
            [_models_1.AlertType.Error]: 'alert-danger',
            [_models_1.AlertType.Info]: 'alert-info',
            [_models_1.AlertType.Warning]: 'alert-warning'
        };
        if (alert.type !== undefined) {
            classes.push(alertTypeClass[alert.type]);
        }
        if (alert.fade) {
            classes.push('fade');
        }
        return classes.join(' ');
    }
};
exports.AlertComponent = AlertComponent;
__decorate([
    (0, core_1.Input)(),
    __metadata("design:type", Object)
], AlertComponent.prototype, "id", void 0);
__decorate([
    (0, core_1.Input)(),
    __metadata("design:type", Object)
], AlertComponent.prototype, "fade", void 0);
exports.AlertComponent = AlertComponent = __decorate([
    (0, core_1.Component)({ selector: 'alert', templateUrl: 'alert.component.html' }),
    __metadata("design:paramtypes", [router_1.Router, typeof (_a = typeof _services_1.AlertService !== "undefined" && _services_1.AlertService) === "function" ? _a : Object])
], AlertComponent);
//# sourceMappingURL=alert-component.js.map