export interface IState {
  app: IAppState,
}

export interface IAppState {
  form: ISignupForm;
  isSubmitting: boolean;
  isValid: boolean;
}

export interface ISignupForm {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
