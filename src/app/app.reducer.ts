import {createReducer, on} from '@ngrx/store';
import {IAppState} from "./app.interface";
import {setIsSubmitting, updateForm} from "./app.actions";

export const initialState: IAppState = {
  form: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  },
  isSubmitting: false,
  isValid: false,
};

const reducer = createReducer(
  initialState,
  on(setIsSubmitting, (state, { isSubmitting }) => ({ ...state, isSubmitting })),
  on(updateForm, (state, { form, isValid }) => ({
    ...state,
    form,
    isValid,
  })),
);

export function appReducer(state, action) {
  return reducer(state, action);
}
