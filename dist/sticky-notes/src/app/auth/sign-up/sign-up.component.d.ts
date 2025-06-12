import { OnInit } from '@angular/core';
import { UserService } from "../../../service/user-service";
export declare class SignUpComponent implements OnInit {
    private user;
    userData: any;
    value: string;
    constructor(user: UserService);
    ngOnInit(): void;
    signUp(data: any): void;
    onChange: (input: string) => void;
}
