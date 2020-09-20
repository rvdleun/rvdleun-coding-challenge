import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {IState} from "../app.interface";
import {setIsSubmitting, submitData} from "../app.actions";

@Component({
  selector: 'app-submit-button',
  styleUrls: ['./submit-button.component.scss'],
  template: '<button class="btn btn-primary btn-block" [disabled]="(isSubmitting | async) || !(isValid | async)" (click)="onClick()">Create user</button>'
})
export class SubmitButtonComponent {
  public isSubmitting = this.store.select(state => state.app.isSubmitting);
  public isValid = this.store.select(state => state.app.isValid);

  constructor(
    private store: Store<IState>,
  ) { }

  public onClick() {
    this.store.dispatch(submitData());
  }
}
