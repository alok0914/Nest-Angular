import { Component, OnInit } from "@angular/core";
import { UserService } from "./../../../service/user-service";
import { FormsModule } from '@angular/forms';
import { RouterLink  } from '@angular/router';


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  imports: [FormsModule, RouterLink],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  userData: any;
  constructor(private user: UserService) { }

  ngOnInit() {
    this.user.currentUserData.subscribe(userData => (this.userData = userData));
  }

  changeData(event: { target: { value: any; }; }) {
    var msg = event.target.value;
    this.user.changeData(msg);
  }
  login(data: any) {
    this.user.changeData(data);
  }
}
