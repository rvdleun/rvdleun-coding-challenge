export interface IState {
  app: IAppState;
}

export interface IAppState {
  form: ISignupForm;
  submitResult: SubmitResultEnum;
  isSubmitting: boolean;
  isValid: boolean;
}

export interface ISignupForm {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export enum SubmitResultEnum {
  SUCCESS = 'success',
  ERROR = 'error',
}
