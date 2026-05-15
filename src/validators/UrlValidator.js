import FieldValidator from '../core/FieldValidator.js';

export default class UrlValidator extends FieldValidator {
    validate() {
        try {
            const url = new URL(this.field.value);

            if (url.protocol !== 'http:' && url.protocol !== 'https:') {
                this.setError(this.getMessage('url'));
                return false;
            }
        } catch {
            this.setError(this.getMessage('url'));
            return false;
        }

        this.clearError();
        return true;
    }
}
