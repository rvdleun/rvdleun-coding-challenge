import {FormControl, FormGroup} from '@angular/forms';
import {IsNotAllLowerCaps, IsNotAllUpperCaps, PasswordDoesNotContainFirstOrLastName} from './signup-form.validators';
import {ISignupForm} from '../app.interface';

describe('app > signup-form > signup-form.validators.ts', () => {
  describe('When validating if the input does not consist of all lower caps', () => {
    const input = new FormControl('input');
    const validator = IsNotAllLowerCaps();

    it('should return the right object if the input does contain only lower caps', () => {
      input.setValue('abcdefg');
      expect(validator(input)).toEqual({isNotAllLowerCaps: {value: input.value} });
    });

    it('should return null if the input does contain only upper caps', () => {
      input.setValue('ABCDEFG');
      expect(validator(input)).toEqual(null);
    });

    it('should return null if the input does contain only lower and upper caps', () => {
      input.setValue('abcDeFG');
      expect(validator(input)).toEqual(null);
    });

    it('should return null if the input is empty', () => {
      input.setValue('');
      expect(validator(input)).toEqual(null);
    });
  });

  describe('When validating if the input does not consist of all upper caps', () => {
    const input = new FormControl('input');
    const validator = IsNotAllUpperCaps();

    it('should return the right object if the input does contain only upper caps', () => {
      input.setValue('ABCDEFG');
      expect(validator(input)).toEqual({isNotAllUpperCaps: {value: input.value} });
    });

    it('should return null if the input does contain only lower caps', () => {
      input.setValue('abcdefg');
      expect(validator(input)).toEqual(null);
    });

    it('should return null if the input does contain only lower and upper caps', () => {
      input.setValue('abcDeFG');
      expect(validator(input)).toEqual(null);
    });

    it('should return null if the input is empty', () => {
      input.setValue('');
      expect(validator(input)).toEqual(null);
    });
  });

  describe('When validating if the password does not contain the first or last name in the form', () => {
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

    function validate(): {[key: string]: any} | null {
      const formGroup = new FormGroup({
        firstName: new FormControl(form.firstName),
        lastName: new FormControl(form.lastName),
        email: new FormControl(form.email),
        password: new FormControl(form.password),
      });

      return PasswordDoesNotContainFirstOrLastName(formGroup);
    }

    it('should return the right object if the password does contain the first name', () => {
      form.password = '2345test789';
      expect(validate()).toEqual({ passwordDoesNotContainFirstOrLastName: { value: '2345test789' } });
    });

    it('should return the right object if the password does contain the last name', () => {
      form.password = '892#@±perSoN322';
      expect(validate()).toEqual({ passwordDoesNotContainFirstOrLastName: { value: '892#@±perSoN322' } });
    });

    it('should return the right object if the password does contain the first and last name', () => {
      form.password = '2jhakpersoN32damteST';
      expect(validate()).toEqual({ passwordDoesNotContainFirstOrLastName: { value: '2jhakpersoN32damteST' } });
    });

    it('should return null if the password does not contain the first and last name', () => {
      form.password = 'thispassworddoesnothavetheirnames';
      expect(validate()).toEqual(null);
    });
  });
});
