import FieldValidator from '../core/FieldValidator.js';

export default class TextValidator extends FieldValidator {
    validate() {
        const minLength = parseInt(this.field.getAttribute('data-min-length'), 10) || 0;

        if (this.field.value.length < minLength) {
            this.setError(`Ce champ doit contenir au moins ${minLength} caractères.`);
            return false;
        }

        this.clearError();
        return true;
    }
}
