import FieldValidator from '../core/FieldValidator.js';

export default class ConfirmationValidator extends FieldValidator {
    validate() {
        const selector = this.field.getAttribute('data-match');
        const fieldToMatch = selector ? document.querySelector(selector) : null;

        if (!fieldToMatch) {
            this.setError("Le champ à confirmer est introuvable.");
            return false;
        }

        if (this.field.value !== fieldToMatch.value) {
            this.setError("Les valeurs ne correspondent pas.");
            return false;
        }

        this.clearError();
        return true;
    }
}
