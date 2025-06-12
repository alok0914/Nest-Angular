import { OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Alert } from '@app/_models';
import { AlertService } from '@app/_services';
export declare class AlertComponent implements OnInit, OnDestroy {
    private router;
    private alertService;
    id: string;
    fade: boolean;
    alerts: Alert[];
    alertSubscription: Subscription;
    routeSubscription: Subscription;
    constructor(router: Router, alertService: AlertService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    removeAlert(alert: Alert): void;
    cssClass(alert: Alert): string;
}
