import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  form = new FormGroup({
    // username: new FormControl('', [
    //   Validators.required,
    //   Validators.minLength(3),
    //   UsernameValidators.cannotContainSpace
    //   ]),
    account: new FormGroup({
      username: new FormControl('', Validators.required, UsernameValidators.shouldBeUnique),
      password: new FormControl(),
    })
  });
  // UsernameValidators.shouldBeUnique, is Async func


  constructor() { }

  ngOnInit() {
  }

  get username() {
    return this.form.get('account.username');
  }



  login() {
    this.form.setErrors({
      invalidLogin: true
    });
  }

}
