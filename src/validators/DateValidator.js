import FieldValidator from '../core/FieldValidator.js';

export default class DateValidator extends FieldValidator {
    validate() {
        const value = this.getDateValue(this.field.value);
        const minDate = this.getDateValue(
            this.field.getAttribute('data-min-date'),
        );
        const maxDate = this.getDateValue(
            this.field.getAttribute('data-max-date'),
        );

        if (!value) {
            this.setError(this.getMessage('date'));
            return false;
        }

        if (minDate && value < minDate) {
            this.setError(
                this.getMessage('dateMin', {
                    minDate: this.field.getAttribute('data-min-date'),
                }),
            );
            return false;
        }

        if (maxDate && value > maxDate) {
            this.setError(
                this.getMessage('dateMax', {
                    maxDate: this.field.getAttribute('data-max-date'),
                }),
            );
            return false;
        }

        this.clearError();
        return true;
    }

    getDateValue(value) {
        if (!value) {
            return null;
        }

        const date = new Date(`${value}T00:00:00`);

        return Number.isNaN(date.getTime()) ? null : date;
    }
}
