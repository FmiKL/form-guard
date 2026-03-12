import FieldValidator from './FieldValidator.js';
import EmailValidator from '../validators/EmailValidator.js';
import PasswordValidator from '../validators/PasswordValidator.js';
import PhoneValidator from '../validators/PhoneValidator.js';
import TextValidator from '../validators/TextValidator.js';

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
                            case 'email':
                                validator = new EmailValidator(field);
                                break;
                            case 'password':
                                validator = new PasswordValidator(field);
                                break;
                            case 'phone':
                                validator = new PhoneValidator(field);
                                break;
                            case 'text':
                                validator = new TextValidator(field);
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
                    field.addEventListener('input', () => {
                        const validator = new FieldValidator(field);
                        validator.clearError();
                    });
                });
            });
        });
    }
}
