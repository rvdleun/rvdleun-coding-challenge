import { Component } from '@angular/core';
import { IState, SubmitResultEnum} from "../app.interface";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-submit-result',
  templateUrl: './submit-result.component.html',
  styleUrls: ['./submit-result.component.scss']
})
export class SubmitResultComponent {
  public submitResult = this.store.select(state => state.app.submitResult);
  public SubmitResultEnum = SubmitResultEnum;

  constructor(
    private store: Store<IState>,
  ) { }

}
