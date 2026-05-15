# Form Guard

A simple and modular JavaScript library for form validation using data attributes.

## Installation

Include the compiled JavaScript file in the HTML:

```html
<script src="path/to/formguard.min.js"></script>
```

## Usage

Initialize Form Guard in JavaScript:

```html
<script>
    document.addEventListener('DOMContentLoaded', function () {
        FormGuard.init();
    });
</script>
```

## Validators

- **CheckboxValidator**: Validates checkbox fields and checkbox groups with optional minimum and maximum selections.
- **ConfirmationValidator**: Validates that a field matches another field using `data-match`.
- **DateValidator**: Validates date fields with optional minimum and maximum dates.
- **EmailValidator**: Validates email fields.
- **FileValidator**: Validates file fields with optional accepted extensions, MIME types, and maximum size.
- **NumberValidator**: Validates number fields with optional minimum, maximum, and step rules.
- **PasswordValidator**: Validates password fields with custom rules.
- **PhoneValidator**: Validates phone number fields.
- **RadioValidator**: Validates radio groups.
- **RequiredValidator**: Validates required fields.
- **SelectValidator**: Validates select fields.
- **TextValidator**: Validates text fields with minimum length.
- **UrlValidator**: Validates URL fields.

## License

[MIT](LICENSE)
