import {IAppState, ISignupForm} from "./app.interface";
import {appReducer} from "./app.reducer";
import {setIsSubmitting, updateForm} from "./app.actions";

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
      isSubmitting: false,
      isValid: false,
    };
  });

  describe('When the isSubmitting is updated', () => {
    const action = setIsSubmitting({ isSubmitting: true });

    it('should update the state accordingly', () => {
      expect(appReducer(state, action)).toEqual({ ...state, isSubmitting: true });
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
});
