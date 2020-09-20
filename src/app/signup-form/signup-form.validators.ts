import {AbstractControl, FormGroup, ValidatorFn} from "@angular/forms";

export function IsNotAllLowerCaps(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const value = control.value.trim();
    if (!!value === false) {
      return null;
    }

    const isValid = value.toLowerCase() !== value;
    return isValid ? null : {isNotAllLowerCaps: {value: control.value}};
  };
}

export function IsNotAllUpperCaps(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const value = control.value.trim();

    if (!!value === false) {
      return null;
    }

    const isValid = value.toUpperCase() !== value;
    return isValid ? null : {isNotAllUpperCaps: {value: control.value}};
  };
}

export function PasswordDoesNotContainFirstOrLastName(formGroup: FormGroup): {[key: string]: any} | null {
  const password = formGroup.get('password').value;
  if (!!password.trim() === false) {
    return null;
  }

  let isValid = true;
  [
    formGroup.get('firstName').value,
    formGroup.get('lastName').value
  ].forEach(name => {
    if (
      !!name.trim() === false
    ) {
      return null;
    }

    if(password.toLowerCase().includes(name.toLowerCase())) {
      isValid = false;
    }
  });

  return isValid ? null : {passwordDoesNotContainFirstOrLastName: {value: password}};
}
