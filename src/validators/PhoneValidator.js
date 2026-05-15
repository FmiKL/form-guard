import FieldValidator from '../core/FieldValidator.js';

export default class PhoneValidator extends FieldValidator {
    validate() {
        const phonePattern = /^\d{10}$/;

        if (!phonePattern.test(this.field.value)) {
            this.setError(this.getMessage('phone'));
            return false;
        }

        this.clearError();
        return true;
    }
}
