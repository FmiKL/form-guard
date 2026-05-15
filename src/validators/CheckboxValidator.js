import FieldValidator from '../core/FieldValidator.js';

export default class CheckboxValidator extends FieldValidator {
    validate() {
        const checkedFields = this.getGroupFields().filter(
            (field) => field.checked,
        );
        const minChecked =
            parseInt(this.field.getAttribute('data-min-checked'), 10) || 1;
        const maxChecked =
            parseInt(this.field.getAttribute('data-max-checked'), 10) || null;

        if (checkedFields.length < minChecked) {
            this.setError(this.getMessage('checkboxMin', { minChecked }));
            return false;
        }

        if (maxChecked !== null && checkedFields.length > maxChecked) {
            this.setError(this.getMessage('checkboxMax', { maxChecked }));
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

        return Array.from(
            context.querySelectorAll('input[type="checkbox"]'),
        ).filter((field) => field.name === this.field.name);
    }
}
