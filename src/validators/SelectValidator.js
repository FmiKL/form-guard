import FieldValidator from '../core/FieldValidator.js';

export default class SelectValidator extends FieldValidator {
    validate() {
        const hasValue = this.field.multiple
            ? Array.from(this.field.selectedOptions).some(option => option.value !== '')
            : this.field.value !== '';

        if (!hasValue) {
            this.setError("Veuillez sélectionner une option.");
            return false;
        }

        this.clearError();
        return true;
    }
}
