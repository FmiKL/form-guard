import FieldValidator from '../core/FieldValidator.js';

export default class EmailValidator extends FieldValidator {
    validate() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(this.field.value)) {
            this.setError(this.getMessage('email'));
            return false;
        }

        this.clearError();
        return true;
    }
}
