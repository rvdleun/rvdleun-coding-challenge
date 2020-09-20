import {FormControl, FormGroup} from "@angular/forms";
import {PasswordDoesNotContainFirstOrLastName} from "./signup-form.validators";
import {ISignupForm} from "../app.interface";

describe('app > signup-form > signup-form.validators.ts', () => {
  describe('When validating if a string does not contain the first or last name in the form', () => {
    const form: ISignupForm = {
      firstName: 'Test',
      lastName: 'Person',
      email: 'test@per.son',
      password: '',
    };

    let result;
    beforeEach(() => {
      result = false;
    });

    function validate() {
      const formGroup = new FormGroup({
        firstName: new FormControl(form.firstName),
        lastName: new FormControl(form.lastName),
        email: new FormControl(form.email),
        password: new FormControl(form.password),
      })

      return PasswordDoesNotContainFirstOrLastName(formGroup);
    }

    it('should return the right object if the password does contain the first name', () => {
      form.password = '2345test789';
      expect(validate()).toEqual({ passwordDoesNotContainFirstOrLastName: { value: '2345test789' } });
    })

    it('should return the right object if the password does contain the last name', () => {
      form.password = '892#@±perSoN322';
      expect(validate()).toEqual({ passwordDoesNotContainFirstOrLastName: { value: '892#@±perSoN322' } });
    })

    it('should return the right object if the password does contain the first and last name', () => {
      form.password = '2jhakpersoN32damteST';
      expect(validate()).toEqual({ passwordDoesNotContainFirstOrLastName: { value: '2jhakpersoN32damteST' } });
    })

    it('should return null if the password does not contain the first and last name', () => {
      form.password = 'thispassworddoesnothavetheirnames';
      expect(validate()).toEqual(null);
    })
  });
});
