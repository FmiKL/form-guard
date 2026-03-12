export default class FieldValidator {
    constructor(field) {
        this.field = field;
    }

    setError(message) {
        this.field.setCustomValidity(message);
    }

    clearError() {
        this.field.setCustomValidity("");
    }

    validate() {
        return true;
    }
}
