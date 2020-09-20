export interface IState {
  app: IAppState,
}

export interface IAppState {
  form: ISignupForm;
  isValid: boolean;
}

export interface ISignupForm {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
