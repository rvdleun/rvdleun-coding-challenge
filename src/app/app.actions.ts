import {createAction, props} from "@ngrx/store";
import {ISignupForm} from "./app.interface";

export const updateForm = createAction(
  '[Sign-up Form] Update form',
  props<{ form: ISignupForm, isValid: boolean }>(),
);

