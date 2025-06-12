import { OnInit } from "@angular/core";
import { UserService } from "./../../../service/user-service";
export declare class LoginComponent implements OnInit {
    private user;
    userData: any;
    constructor(user: UserService);
    ngOnInit(): void;
    changeData(event: {
        target: {
            value: any;
        };
    }): void;
    login(data: any): void;
}
