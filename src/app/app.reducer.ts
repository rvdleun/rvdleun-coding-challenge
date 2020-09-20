import {createReducer, on} from '@ngrx/store';
import {IAppState} from "./app.interface";
import {updateForm} from "./app.actions";

export const initialState: IAppState = {
  form: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  },
  isValid: false,
};

const reducer = createReducer(
  initialState,
  on(updateForm, (state, { form, isValid }) => ({
    ...state,
    form,
    isValid,
  }))
);

export function appReducer(state, action) {
  return reducer(state, action);
}
