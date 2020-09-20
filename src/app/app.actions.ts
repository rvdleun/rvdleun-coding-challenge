import {createAction, props} from "@ngrx/store";
import {ISignupForm} from "./app.interface";

export const setIsSubmitting = createAction(
  '[Sign-up Form] Updates isSubmitting',
  props<{ isSubmitting: boolean }>(),
);

export const updateForm = createAction(
  '[Sign-up Form] Update form',
  props<{ form: ISignupForm, isValid: boolean }>(),
);

