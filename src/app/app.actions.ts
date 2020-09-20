import {createAction, props} from "@ngrx/store";
import {ISignupForm, SubmitResultEnum} from "./app.interface";

export const clearForm = createAction('[Sign-up Form] Clear form');

export const setIsSubmitting = createAction(
  '[Sign-up Form] Update isSubmitting',
  props<{ isSubmitting: boolean }>(),
);

export const setSubmitResult = createAction(
  '[Sign-up Form] Update submitResult',
  props<{ submitResult: SubmitResultEnum }>(),
);

export const submitData = createAction('[Sign-up Form] Submit Data');

export const updateForm = createAction(
  '[Sign-up Form] Update form',
  props<{ form: ISignupForm, isValid: boolean }>(),
);
