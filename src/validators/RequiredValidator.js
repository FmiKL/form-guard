import FieldValidator from '../core/FieldValidator.js';

export default class RequiredValidator extends FieldValidator {
    validate() {
        const isCheckedField = this.field.type === 'checkbox' || this.field.type === 'radio';
        const isValid = isCheckedField ? this.field.checked : this.field.value.trim() !== '';

        if (!isValid) {
            this.setError(this.getMessage('required'));
            return false;
        }

        this.clearError();
        return true;
    }
}
