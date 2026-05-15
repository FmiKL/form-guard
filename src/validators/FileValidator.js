import FieldValidator from '../core/FieldValidator.js';

export default class FileValidator extends FieldValidator {
    validate() {
        const files = Array.from(this.field.files || []);
        const maxSize = this.getMaxSize();
        const allowedExtensions = this.getAllowedValues('data-accept');
        const allowedTypes = this.getAllowedValues('data-accept-types');

        if (files.length === 0) {
            this.setError(this.getMessage('fileRequired'));
            return false;
        }

        const invalidFile = files.find(
            (file) =>
                !this.isAllowedFile(file, allowedExtensions, allowedTypes),
        );
        if (invalidFile) {
            this.setError(this.getMessage('fileType'));
            return false;
        }

        const oversizedFile = files.find(
            (file) => maxSize !== null && file.size > maxSize,
        );
        if (oversizedFile) {
            this.setError(
                this.getMessage('fileSize', {
                    maxSize: this.field.getAttribute('data-max-size'),
                }),
            );
            return false;
        }

        this.clearError();
        return true;
    }

    getMaxSize() {
        const maxSize = this.field.getAttribute('data-max-size');

        if (!maxSize) {
            return null;
        }

        const match = maxSize.match(/^(\d+)(kb|mb)?$/i);

        if (!match) {
            return null;
        }

        const value = parseInt(match[1], 10);
        const unit = (match[2] || 'b').toLowerCase();

        if (unit === 'kb') {
            return value * 1024;
        }

        if (unit === 'mb') {
            return value * 1024 * 1024;
        }

        return value;
    }

    getAllowedValues(attribute) {
        const value = this.field.getAttribute(attribute);

        if (!value) {
            return [];
        }

        return value
            .split(',')
            .map((item) => item.trim().toLowerCase())
            .filter(Boolean);
    }

    isAllowedFile(file, allowedExtensions, allowedTypes) {
        const hasExtensionRules = allowedExtensions.length > 0;
        const hasTypeRules = allowedTypes.length > 0;

        if (!hasExtensionRules && !hasTypeRules) {
            return true;
        }

        return (
            this.matchesExtension(file, allowedExtensions) ||
            this.matchesType(file, allowedTypes)
        );
    }

    matchesExtension(file, allowedExtensions) {
        const extension = `.${file.name.split('.').pop().toLowerCase()}`;

        return allowedExtensions.includes(extension);
    }

    matchesType(file, allowedTypes) {
        return allowedTypes.some((type) => {
            if (type.endsWith('/*')) {
                return file.type.startsWith(type.replace('*', ''));
            }

            return file.type === type;
        });
    }
}
