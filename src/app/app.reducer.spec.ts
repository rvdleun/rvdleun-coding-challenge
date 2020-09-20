import {IAppState, ISignupForm} from "./app.interface";
import {appReducer} from "./app.reducer";
import {updateForm} from "./app.actions";

describe('app > app.reducer.ts', () => {
  describe('When updating the form', () => {
    const state: IAppState = {
      form: {
        firstName: 'firstname',
        lastName: 'lastname',
        email: '',
        password: '12345'
      },
      isValid: false,
    };

    const form: ISignupForm = {
      firstName: 'First',
      lastName: 'Name',
      email: 'blaat@test.nl',
      password: 'AcDF3291'
    };
    const isValid = true;
    const action = updateForm({ form, isValid} );

    it('should update the state accordingly', () => {
      expect(appReducer(state, action)).toEqual({ form, isValid });
    });
  });
});
