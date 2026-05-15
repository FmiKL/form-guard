import FieldValidator from '../core/FieldValidator.js';

export default class PasswordValidator extends FieldValidator {
    validate() {
        const minLength = parseInt(this.field.getAttribute('data-min-length'), 10) || 0;
        const requireLetter = this.field.getAttribute('data-require-letter') === 'true';
        const requireNumber = this.field.getAttribute('data-require-number') === 'true';

        let pattern = '^';
        if (requireLetter) {
            pattern += '(?=.*[A-Za-z])';
        }
        if (requireNumber) {
            pattern += '(?=.*\\d)';
        }
        pattern += `[A-Za-z\\d]{${minLength},}$`;

        const regex = new RegExp(pattern);

        if (!regex.test(this.field.value)) {
            this.setError(this.getMessage('password', { minLength, requireLetter, requireNumber }));
            return false;
        }

        this.clearError();
        return true;
    }
}
