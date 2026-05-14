import FieldValidator from './FieldValidator.js';
import CheckboxValidator from '../validators/CheckboxValidator.js';
import ConfirmationValidator from '../validators/ConfirmationValidator.js';
import DateValidator from '../validators/DateValidator.js';
import EmailValidator from '../validators/EmailValidator.js';
import FileValidator from '../validators/FileValidator.js';
import NumberValidator from '../validators/NumberValidator.js';
import PasswordValidator from '../validators/PasswordValidator.js';
import PhoneValidator from '../validators/PhoneValidator.js';
import RadioValidator from '../validators/RadioValidator.js';
import RequiredValidator from '../validators/RequiredValidator.js';
import SelectValidator from '../validators/SelectValidator.js';
import TextValidator from '../validators/TextValidator.js';
import UrlValidator from '../validators/UrlValidator.js';

export default class FormGuard {
    static init() {
        document.addEventListener('DOMContentLoaded', () => {
            const forms = document.querySelectorAll('form');

            forms.forEach(form => {
                form.addEventListener('submit', event => {
                    let isValid = true;
                    const fields = form.querySelectorAll('[data-validate]');

                    fields.forEach(field => {
                        const type = field.getAttribute('data-validate');
                        let validator;

                        switch (type) {
                            case 'checkbox':
                                validator = new CheckboxValidator(field);
                                break;
                            case 'confirmation':
                                validator = new ConfirmationValidator(field);
                                break;
                            case 'date':
                                validator = new DateValidator(field);
                                break;
                            case 'email':
                                validator = new EmailValidator(field);
                                break;
                            case 'file':
                                validator = new FileValidator(field);
                                break;
                            case 'number':
                                validator = new NumberValidator(field);
                                break;
                            case 'password':
                                validator = new PasswordValidator(field);
                                break;
                            case 'phone':
                                validator = new PhoneValidator(field);
                                break;
                            case 'radio':
                                validator = new RadioValidator(field);
                                break;
                            case 'required':
                                validator = new RequiredValidator(field);
                                break;
                            case 'select':
                                validator = new SelectValidator(field);
                                break;
                            case 'text':
                                validator = new TextValidator(field);
                                break;
                            case 'url':
                                validator = new UrlValidator(field);
                                break;
                            default:
                                return;
                        }

                        if (!validator.validate()) {
                            isValid = false;
                        }
                    });

                    if (!isValid) {
                        event.preventDefault();
                        if (!form.reportValidity()) {
                            event.preventDefault();
                        }
                    }
                });

                form.querySelectorAll('[data-validate]').forEach(field => {
                    const clearFieldError = () => {
                        const validator = new FieldValidator(field);
                        validator.clearError();
                    };

                    field.addEventListener('input', clearFieldError);
                    field.addEventListener('change', clearFieldError);
                });
            });
        });
    }
}
