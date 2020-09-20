import {createReducer, on} from '@ngrx/store';
import {IAppState} from './app.interface';
import {clearForm, setIsSubmitting, setSubmitResult, updateForm} from './app.actions';

export const initialState: IAppState = {
  form: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  },
  submitResult: null,
  isSubmitting: false,
  isValid: true,
};

const reducer = createReducer(
  initialState,
  on(clearForm, (state => ({
    ...state,
    form: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    }
  }))),
  on(setIsSubmitting, (state, { isSubmitting }) => ({ ...state, isSubmitting })),
  on(setSubmitResult, (state, { submitResult }) => ({ ...state, isSubmitting: false, submitResult })),
  on(updateForm, (state, { form, isValid }) => ({
    ...state,
    form,
    isValid,
    submitResult: null,
  })),
);

export function appReducer(state, action): IAppState {
  return reducer(state, action);
}
