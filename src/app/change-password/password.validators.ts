import { AbstractControl } from '@angular/forms';

export class PasswordValidators {
  static validOldPassword(control: AbstractControl) {
    return new Promise((resolve) => {
      if (control.value !== '1234')
        resolve({ invalidOldPassword: true });
      else
        resolve(null);
    });
  }

  static passwordShouldMatch(control: AbstractControl) {
    const newPassword = control.get('newPassword').value;
    const confirmPassword = control.get('confirmPassword').value;
    if (confirmPassword !== newPassword)
      return { passwordNotMatch: true };

    return null;
  }
}
