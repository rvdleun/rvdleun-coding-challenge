import {Component, OnDestroy, OnInit} from '@angular/core';
import {ISignupForm, IState} from '../app.interface';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {IsNotAllLowerCaps, IsNotAllUpperCaps, PasswordDoesNotContainFirstOrLastName} from './signup-form.validators';
import {Store} from '@ngrx/store';
import {updateForm} from '../app.actions';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-signup-form',
  styleUrls: ['./signup-form.component.scss'],
  templateUrl: './signup-form.component.html'
})
export class SignupFormComponent implements OnDestroy, OnInit {
  public form: ISignupForm = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };
  public formGroup: FormGroup;
  public isSubmitting$ = this.store.select(state => state.app.isSubmitting);

  private onValueChangeSubscription: Subscription;
  private stateSubscription: Subscription;

  constructor(
    private store: Store<IState>,
  ) { }

  public ngOnInit(): void {
    this.stateSubscription = this
      .store
      .select(state => state.app.form)
      .subscribe(form => {
        this.form = form;
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
            IsNotAllLowerCaps(),
            IsNotAllUpperCaps(),
          ]),
        }, [
          PasswordDoesNotContainFirstOrLastName,
        ]);

        this.onValueChangeSubscription = this.formGroup.valueChanges.subscribe((newForm: ISignupForm) => this.onValueChanges(newForm));
      });
  }

  public ngOnDestroy(): void {
    if (this.onValueChangeSubscription) {
      this.onValueChangeSubscription.unsubscribe();
    }

    if (this.stateSubscription) {
      this.stateSubscription.unsubscribe();

    }
  }

  private onValueChanges(form: ISignupForm): void {
    this.store.dispatch(updateForm({ form, isValid: this.formGroup.valid }));
  }
}
