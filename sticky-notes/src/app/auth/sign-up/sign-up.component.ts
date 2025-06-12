import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserService } from "../../../service/user-service";
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
@Component({
    selector: 'app-sign-up',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss'],
    imports: [FormsModule, RouterLink],
    providers: [UserService],
})
export class SignUpComponent implements OnInit {
    userData: any;
    value = "";
    constructor(private user: UserService) { }

    ngOnInit() {
        this.user.currentUserData.subscribe((userData: any) => this.userData = userData)
    }
    signUp(data: any) {
        console.log('sdcsdc', data);
        //this.user.changeData(data);
    }

    onChange = (input: string) => {
        this.value = input;
        console.log("Input changed", input);
    };

}