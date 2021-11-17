import { FormGroup, ValidationErrors, AbstractControl } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class FormService {
    static clearInput(id: string) {
        //это конечно полная жесть, но без обнуления инпута при добавлении одного и того же файла два раза подряд
        //событие onchange не сработает
        var input: any = document.getElementById(id).children[0].children[0];
        input.value = null;
    }

    static getInvalidControls(form: FormGroup) {
        var result = [];
        Object.keys(form.controls).forEach(key => {
            var control = form.get(key);
            if (control.invalid)
                result.push({ key, control });
        });
        return result;
    }

    static getFormData(form: FormGroup | any): FormData {
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

    static numberValidator(control: AbstractControl): ValidationErrors | null {
        let value = control.value.toString().trim();
        if (!value || isNaN(Number(value))) {
            return {
                number: 'Нужно ввести число'
            };
        } else
            return undefined;
    };

    static customValidator<T>(sender: T,
        callback: (sender: T, control: AbstractControl) => ValidationErrors | null
    ): (control: AbstractControl) => ValidationErrors | null {
        return (control) => callback(sender, control);
    }

    constructor() {
    }

    showFormErrors(msg: MessageService, form?: FormGroup) {
        msg.add({ severity: 'error', summary: 'Ошибка', detail: 'Форма заполнена неверно' });
        if (form) {
            console.warn(FormService.getInvalidControls(form));
        }
    }

    showServerErrors(msg: MessageService, error: any) {
        console.log(error);

        if (error.error && error.error.forEach) {
            error.error.forEach(element => {
                msg.add({ severity: 'error', summary: 'Ошибка', detail: element.description });
            });
        } else {
            var detail = error.error && error.error.description || 'Сервер вернул ошибку';
            msg.add({ severity: 'error', summary: 'Ошибка', detail });
        }
    }
}