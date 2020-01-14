import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidators {
  static cannotContainSpace(control: AbstractControl): ValidationErrors {
    if ((control.value as string).indexOf(' ') >= 0) {
      return { cannotContainSpace: true };
    }
    return null;
  }

  static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      // static
      setTimeout(() => {
        if (control.value === 'Pirun')
          resolve({ shouldBeUnique: true });
        else
          resolve(null);
      }, 2000);

      // in real life we may want to do sth like the following
      // userService.getUserInDb("Pirun").subsribe(
      //   response => {
      //     // if have result, means name is not uniq, so return
      //     resolve({ shouldBeUnique: true });
      //   }
      // );
    });
  }
}
