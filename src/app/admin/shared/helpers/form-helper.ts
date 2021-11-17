import { FormGroup, AbstractControl, ValidationErrors } from '@angular/forms';

export class FormHelper {
    public static formHasError(form: FormGroup, controlName: string, validationType: string): boolean {
        const control = form.controls[controlName];
        const isInvalid = control && validationType ? control.hasError(validationType) : control.invalid;
        const result = isInvalid && (control.dirty || control.touched);
        return result;
    }

    public static controlHasError(control: AbstractControl, validationType: string): boolean {
        const isInvalid = control && validationType ? control.hasError(validationType) : control.invalid;
        const result = isInvalid && (control.dirty || control.touched);
        return result;
    }

    public static markAllAsTouched(form: FormGroup) {
        Object.keys(form.controls).forEach(controlName =>
            form.controls[controlName].markAsTouched()
        );
    }

    public static getFormData(form: FormGroup | any): FormData {
        const formData = new FormData();

        if (form instanceof FormGroup) {
            Object.keys(form.value).forEach(element => {
                const value = form.get(element).value;
                if (value != null) {
                    formData.append(element, toString(value));
                }
            });
        } else {
            Object.keys(form).map(key => {
                const value = form[key];
                if (value != null) {
                    formData.append(key, toString(value));
                }
            });
        }
        return formData;

        function toString(value: any) {
            if (!value)
                return '';
            if (value instanceof Date)
                return value.toISOString();
            else
                return value.toString();
        }
    }

    static customValidator<T>(
        sender: T,
        callback: (sender: T, control: AbstractControl) => ValidationErrors | null
    ): (control: AbstractControl) => ValidationErrors | null {
        return (control: AbstractControl) => callback(sender, control);
    }
}
