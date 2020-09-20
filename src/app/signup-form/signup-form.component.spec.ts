import { TestBed } from '@angular/core/testing';

import { SignupFormComponent } from './signup-form.component';
import {ISignupForm, IState} from '../app.interface';
import {provideMockStore} from '@ngrx/store/testing';

describe('app > signup-form > signup-form.component.ts', () => {
  let component: SignupFormComponent;
  let form: ISignupForm;

  beforeEach(async () => {
    form = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    };
    const initialState: IState = {
      app: {
        form,
        submitResult: null,
        isSubmitting: false,
        isValid: false,
      }
    };

    await TestBed.configureTestingModule({
      declarations: [ SignupFormComponent ],
      providers: [
        provideMockStore({ initialState }),
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    component = TestBed.createComponent(SignupFormComponent).componentInstance;
  });

  it('should be defined', () => {
    expect(component).toBeDefined();
  });

  describe('When filling in the first name', () => {
    describe('And not filling in the input', () => {
      beforeEach(() => {
        form.firstName = '';
        component.ngOnInit();
      });

      it('should have marked the field as invalid', () => {
        expect(component.formGroup.controls.firstName.valid).toBe(false);
      });
    });

    describe('And filling in the input', () => {
      beforeEach(() => {
        form.firstName = 'Test';
        component.ngOnInit();
      });

      it('should have marked the field as valid', () => {
        expect(component.formGroup.controls.firstName.valid).toBe(true);
      });
    });
  });

  describe('When filling in the last name', () => {
    describe('And not filling in the input', () => {
      beforeEach(() => {
        form.lastName = '';
        component.ngOnInit();
      });

      it('should have marked the field as invalid', () => {
        expect(component.formGroup.controls.lastName.valid).toBe(false);
      });
    });

    describe('And filling in the input', () => {
      beforeEach(() => {
        form.lastName = 'Person #1';
        component.ngOnInit();
      });

      it('should have marked the field as valid', () => {
        expect(component.formGroup.controls.lastName.valid).toBe(true);
      });
    });
  });

  describe('When filling in the e-mail address', () => {
    describe('And not filling in the input', () => {
      beforeEach(() => {
        form.email = '';
        component.ngOnInit();
      });

      it('should have marked the field as invalid', () => {
        expect(component.formGroup.controls.email.valid).toBe(false);
      });
    });

    describe('And filling in the input with an invalid email address', () => {
      beforeEach(() => {
        form.email = 'Test';
        component.ngOnInit();
      });

      it('should have marked the field as valid', () => {
        expect(component.formGroup.controls.email.valid).toBe(false);
      });
    });

    describe('And filling in the input with a valid email address', () => {
      beforeEach(() => {
        form.email = 'test-person@test.com';
        component.ngOnInit();
      });

      it('should have marked the field as valid', () => {
        expect(component.formGroup.controls.email.valid).toBe(true);
      });
    });
  });

  describe('When filling in the password', () => {
    describe('And not filling in the input', () => {
      beforeEach(() => {
        form.password = '';
        component.ngOnInit();
      });

      it('should have marked the field as invalid', () => {
        expect(component.formGroup.controls.password.valid).toBe(false);
      });
    });

    describe('and it contains fewer than eight characters', () => {
      beforeEach(() => {
        form.password = '123456';
        component.ngOnInit();
      });

      it('should have marked the field as invalid', () => {
        expect(component.formGroup.controls.password.valid).toBe(false);
      });
    });

    describe('and it is only in lower cases', () => {
      beforeEach(() => {
        form.password = 'abcdefghijklmnop';
        component.ngOnInit();
      });

      it('should have marked the field as invalid', () => {
        expect(component.formGroup.controls.password.valid).toBe(false);
      });
    });

    describe('and it is only in upper cases', () => {
      beforeEach(() => {
        form.password = 'ABCDEFGHIJKLMNOP';
        component.ngOnInit();
      });

      it('should have marked the field as invalid', () => {
        expect(component.formGroup.controls.password.valid).toBe(false);
      });
    });

    describe('and it only contains numbers', () => {
      beforeEach(() => {
        form.password = '1234567890';
        component.ngOnInit();
      });

      it('should have marked the field as invalid', () => {
        expect(component.formGroup.controls.password.valid).toBe(false);
      });
    });

    describe('and it consists of eight characters, lower and upper case letters', () => {
      beforeEach(() => {
        form.password = 'aBcD56GhiJK';
        component.ngOnInit();
      });

      it('should have marked the field as valid', () => {
        expect(component.formGroup.controls.password.valid).toBe(true);
      });
    });
  });

  describe('When validating the entire form', () => {
    describe('and the whole form has been filled in properly', () => {
      beforeEach(() => {
        form.firstName = 'Rob';
        form.lastName = 'Pasta';
        form.email = 'rob.pasta@money.it';
        form.password = '23910XMMnal134';
        component.ngOnInit();
      });

      it('should have marked the form as valid', () => {
        expect(component.formGroup.valid).toBe(true);
      });
    });

    describe('and the password contains the first name', () => {
      beforeEach(() => {
        form.firstName = 'Test';
        form.password = '1234test678';
        component.ngOnInit();
      });

      it('should have marked the form as invalid', () => {
        expect(component.formGroup.valid).toBe(false);
      });
    });

    describe('and the password contains the last name', () => {
      beforeEach(() => {
        form.lastName = 'Person';
        form.password = '12peRsON678';
        component.ngOnInit();
      });

      it('should have marked the form as invalid', () => {
        expect(component.formGroup.valid).toBe(false);
      });
    });

    describe('and the password contains the first and last name', () => {
      beforeEach(() => {
        form.firstName = 'Person';
        form.lastName = 'Person';
        form.password = '1test2peRsON678';
        component.ngOnInit();
      });

      it('should have marked the form as invalid', () => {
        expect(component.formGroup.valid).toBe(false);
      });
    });
  });
});
