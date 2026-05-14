import FieldValidator from '../core/FieldValidator.js';

export default class NumberValidator extends FieldValidator {
    validate() {
        const value = Number(this.field.value);
        const min = this.field.hasAttribute('data-min') ? Number(this.field.getAttribute('data-min')) : null;
        const max = this.field.hasAttribute('data-max') ? Number(this.field.getAttribute('data-max')) : null;
        const step = this.field.hasAttribute('data-step') ? Number(this.field.getAttribute('data-step')) : null;

        if (this.field.value.trim() === '' || Number.isNaN(value)) {
            this.setError("Veuillez entrer un nombre valide.");
            return false;
        }

        if (min !== null && value < min) {
            this.setError(`La valeur doit être supérieure ou égale à ${min}.`);
            return false;
        }

        if (max !== null && value > max) {
            this.setError(`La valeur doit être inférieure ou égale à ${max}.`);
            return false;
        }

        if (step !== null && step > 0 && value % step !== 0) {
            this.setError(`La valeur doit respecter un pas de ${step}.`);
            return false;
        }

        this.clearError();
        return true;
    }
}
