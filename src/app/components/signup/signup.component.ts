import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router:Router) { }

  // Une méthode qui s'exécute automatiquement 
  // lors l'appel du component
  ngOnInit() {
    // alert("Here into signup");
    this.signupForm = this.formBuilder.group({
      firstName: ['', [Validators.minLength(3), Validators.required]],
      lastName: ['', [Validators.minLength(5), Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      pwd: ['', [Validators.minLength(6), Validators.maxLength(12), Validators.required]]
    })
  }

  signup() {
    // alert('signup btn is clicked');
    console.log("Here my user", this.signupForm.value);
    this.userService.signup(this.signupForm.value).subscribe(
      (data)=> {
        console.log("Here data from BE after signup", data.message);
        this.router.navigate([""]);
      }
    );
  }

}
