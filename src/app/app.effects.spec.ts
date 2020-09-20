import {Observable, of, throwError} from 'rxjs';
import {clearForm, setIsSubmitting, setSubmitResult, submitData} from './app.actions';
import {AppEffects} from './app.effects';
import {TestBed} from '@angular/core/testing';
import {Actions} from '@ngrx/effects';
import {provideMockActions} from '@ngrx/effects/testing';
import {AppService} from './app.service';
import createSpyObj = jasmine.createSpyObj;
import {provideMockStore} from '@ngrx/store/testing';
import {initialState} from './app.reducer';
import {skip, take} from 'rxjs/operators';
import {SubmitResultEnum} from './app.interface';

describe('app > app.effects.ts', () => {
  let actions$: Actions;
  let effects: AppEffects;

  let appServiceMock;

  beforeEach(() => {
    appServiceMock = createSpyObj('AppService', ['submitForm']);

    TestBed.configureTestingModule({
      providers: [
        AppEffects,
        { provide: AppService, useValue: appServiceMock },
        provideMockActions(() => actions$),
        provideMockStore({ initialState: {
          app: initialState,
        } }),
      ],
    });

    actions$ = TestBed.inject(Actions);
    effects = TestBed.inject(AppEffects);
  });

  describe('When a form is submitted', () => {
    beforeEach(() => {
      actions$ = of(submitData());
    });

    it('should set the isSubmitting value to true', () => {
      effects.setIsSubmitting$.subscribe(action => {
        expect(action).toEqual(setIsSubmitting({isSubmitting: true}));
      });
    });

    describe('and sends the data to the endpoint', () => {
      describe('and the result is successful', () => {
        beforeEach(() => {
          appServiceMock.submitForm.and.returnValue(of(null));
        });

        it('should clear the form and set the submit result as success', () => {
          effects
            .submitForm$
            .pipe(take(1))
            .subscribe(action => {
              expect(action).toEqual(clearForm());
            });

          effects
            .submitForm$
            .pipe(skip(1))
            .subscribe(action => {
              expect(action).toEqual(setSubmitResult({ submitResult: SubmitResultEnum.SUCCESS }));
            });
        });
      });

      describe('and the result is in error', () => {
        beforeEach(() => {
          appServiceMock.submitForm.and.returnValue(throwError({ }));
        });

        it('should set the submit result as error', () => {
          effects
            .submitForm$
            .subscribe(action => {
              expect(action).toEqual(setSubmitResult({ submitResult: SubmitResultEnum.ERROR }));
            });
        });
      });
    });
  });
});
