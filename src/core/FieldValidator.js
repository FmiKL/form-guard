import messages from '../i18n/messages.js';

export default class FieldValidator {
    constructor(field, options = {}) {
        this.field = field;
        this.locale = options.locale || 'en';
    }

    setError(message) {
        this.field.setCustomValidity(message);
    }

    clearError() {
        this.field.setCustomValidity('');
    }

    validate() {
        return true;
    }

    getMessage(key, params = {}) {
        const localeMessages = messages[this.locale] || messages.en;
        const message = localeMessages[key] || messages.en[key] || key;

        return typeof message === 'function' ? message(params) : message;
    }
}
