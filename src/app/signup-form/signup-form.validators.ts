import {FormGroup} from "@angular/forms";

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
