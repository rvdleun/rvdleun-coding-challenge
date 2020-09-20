import { Component, OnInit } from '@angular/core';
import {ISignupForm} from "../app.interface";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PasswordDoesNotContainFirstOrLastName} from "./signup-form.validators";

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {
  public form: ISignupForm = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };
  public formGroup: FormGroup;

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      firstName: new FormControl(this.form.firstName, [
        Validators.required,
      ]),
      lastName: new FormControl(this.form.lastName, [
        Validators.required,
      ]),
      email: new FormControl(this.form.email, [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl(this.form.password, [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/[a-z]/g),
        Validators.pattern(/[A-Z]/g),
        Validators.pattern(/.*[A-z].*/i),
      ]),
    }, [
      PasswordDoesNotContainFirstOrLastName,
    ])
  }
}

