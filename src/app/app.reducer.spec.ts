import {IAppState, ISignupForm, SubmitResultEnum} from "./app.interface";
import {appReducer} from "./app.reducer";
import {clearForm, setIsSubmitting, setSubmitResult, updateForm} from "./app.actions";

describe('app > app.reducer.ts', () => {
  let state: IAppState;

  beforeEach(() => {
    state = {
      form: {
        firstName: 'Voornaam',
        lastName: 'Acterhnaam',
        email: 'email@email.com',
        password: 'drowssap',
      },
      submitResult: null,
      isSubmitting: false,
      isValid: false,
    };
  });

  describe('When clearing the form', () => {
    const action = clearForm();

    it('should have cleared all fields in the form', () => {
      expect(appReducer(state, action)).toEqual({
        ...state,
        form: {
          firstName: '',
          lastName: '',
          email: '',
          password: '',
        }
      });
    });
  });

  describe('When updating the form', () => {
    const form: ISignupForm = {
      firstName: 'First',
      lastName: 'Name',
      email: 'blaat@test.nl',
      password: 'AcDF3291'
    };
    const isValid = true;
    const action = updateForm({ form, isValid} );

    it('should update the state accordingly', () => {
      expect(appReducer(state, action)).toEqual({ ...state, form, isValid });
    });
  });

  describe('When the submitResult value is updated', () => {
    const action = setSubmitResult({ submitResult: SubmitResultEnum.ERROR });

    it('should update store the result and set isSubmitting to false', () => {
      expect(appReducer(state, action)).toEqual({ ...state, isSubmitting: false, submitResult: SubmitResultEnum.ERROR });
    });
  });

  describe('When the isSubmitting value is updated', () => {
    const action = setIsSubmitting({ isSubmitting: true });

    it('should update the state accordingly', () => {
      expect(appReducer(state, action)).toEqual({ ...state, isSubmitting: true });
    });
  });
});
