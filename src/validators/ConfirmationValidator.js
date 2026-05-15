import FieldValidator from '../core/FieldValidator.js';

export default class ConfirmationValidator extends FieldValidator {
    validate() {
        const selector = this.field.getAttribute('data-match');
        const fieldToMatch = selector ? document.querySelector(selector) : null;

        if (!fieldToMatch) {
            this.setError(this.getMessage('confirmationMissing'));
            return false;
        }

        if (this.field.value !== fieldToMatch.value) {
            this.setError(this.getMessage('confirmationMismatch'));
            return false;
        }

        this.clearError();
        return true;
    }
}
