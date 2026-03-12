import FieldValidator from '../core/FieldValidator.js';

export default class EmailValidator extends FieldValidator {
    validate() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(this.field.value)) {
            this.setError("Veuillez entrer une adresse e-mail valide.");
            return false;
        }

        this.clearError();
        return true;
    }
}
