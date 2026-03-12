# Form Guard

A lightweight and modular JavaScript library for form validation using data attributes.

## Installation

Include the compiled JavaScript file in the HTML:

```html
<script src="path/to/formguard.min.js"></script>
```

## Usage

Initialize Form Guard in JavaScript:

```html
<script>
    document.addEventListener('DOMContentLoaded', function() {
        FormGuard.init();
    });
</script>
```

## Validators

- **EmailValidator**: Validates email fields.
- **PasswordValidator**: Validates password fields with custom rules.
- **PhoneValidator**: Validates phone number fields.
- **TextValidator**: Validates text fields with minimum length.
