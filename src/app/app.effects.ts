import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {clearForm, setIsSubmitting, setSubmitResult, submitData} from "./app.actions";
import {catchError, concatMapTo, map, mapTo, mergeMap, mergeMapTo, withLatestFrom} from "rxjs/operators";
import {AppService} from "./app.service";
import {Store} from "@ngrx/store";
import {IState, SubmitResultEnum} from "./app.interface";
import {of} from "rxjs";

@Injectable()
export class AppEffects {
  @Effect()
  public submitForm$ = this.actions$.pipe(
    ofType(submitData),
    withLatestFrom(this.store.select(state => {
      return state.app.form;
    })),
    mergeMap(([action, form]) => this.appService.submitForm(form).pipe(
      mergeMapTo([
        clearForm(),
        setSubmitResult({ submitResult: SubmitResultEnum.SUCCESS }),
      ]),
      catchError(() => of(setSubmitResult({ submitResult: SubmitResultEnum.ERROR }))),
    ))
  );

  @Effect()
  public setIsSubmitting$ = this.actions$.pipe(
    ofType(submitData),
    mapTo(setIsSubmitting({ isSubmitting: true }))
  );

  constructor(
    private actions$: Actions,
    private appService: AppService,
    private store: Store<IState>,
  ) { }
}
