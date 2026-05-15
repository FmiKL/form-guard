import FieldValidator from '../core/FieldValidator.js';

export default class RadioValidator extends FieldValidator {
    validate() {
        const isChecked = this.getGroupFields().some(field => field.checked);

        if (!isChecked) {
            this.setError(this.getMessage('radio'));
            return false;
        }

        this.clearError();
        return true;
    }

    getGroupFields() {
        if (!this.field.name) {
            return [this.field];
        }

        const context = this.field.form || document;

        return Array.from(context.querySelectorAll('input[type="radio"]'))
            .filter(field => field.name === this.field.name);
    }
}
