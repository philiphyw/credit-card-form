import { FormControl } from '@angular/forms';

export class DateFromControl extends FormControl {
  // override the default setValue method in the FormControl class
  override setValue(value: string, options: any): void {
    // Haul the value update if it's not a number or /
    // this.value is sotred in the FormControl object by default
    if (!value.match(/^\d|\/|\d$/gi)) {
      super.setValue(this.value, { ...options, emitModelToViewChange: true });
      return;
    }
    // Haul the update if the value lenght is greater than 5
    if (value.length > 5) {
      super.setValue(this.value, { ...options, emitModelToViewChange: true });
      return;
    }

    // Remove the '/' when user delete the value.length to 3
    if (this.value.length === 3 && value.length === 2) {
      super.setValue(value, { ...options, emitModelToViewChange: true });
      return;
    }

    // Insert a '/' after the secord input
    if (value.length === 2) {
      super.setValue(value + '/', { ...options, emitModelToViewChange: true });
      return;
    }
  }
}
