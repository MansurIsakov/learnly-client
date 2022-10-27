import { FormControl } from '@angular/forms';
import { environment } from 'src/environments/environment';

export function restrictedEmails(control: FormControl): {
  [key: string]: boolean;
} {
  if (environment.getRestrictedEmail() === control.value) {
    return { restrictedEmail: true };
  }
  return null;
}
