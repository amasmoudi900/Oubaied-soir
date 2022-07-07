import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any = {};
  loginForm: FormGroup;
  errorMsg: string;
  constructor(
    private userService: UserService,
    private router: Router) { }

  ngOnInit() {
  }

  login() {
    console.log('Here user information', this.user);
    // Call user service
    this.userService.login(this.user).subscribe(
      (data) => {
        console.log("Here data after login", data);
        if (data.message == "0") {
          this.errorMsg = "Please check email/pwd";
        } else {
          localStorage.setItem('user', JSON.stringify(data.result));
          this.router.navigate(["profile"]);
        }
      }
    );
  }

}
