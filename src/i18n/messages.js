const messages = {
    en: {
        checkboxMin: ({ minChecked }) =>
            `Please select at least ${minChecked} option${minChecked > 1 ? 's' : ''}.`,
        checkboxMax: ({ maxChecked }) =>
            `Please select no more than ${maxChecked} option${maxChecked > 1 ? 's' : ''}.`,
        confirmationMissing: 'The field to confirm could not be found.',
        confirmationMismatch: 'The values do not match.',
        date: 'Please enter a valid date.',
        dateMin: ({ minDate }) => `The date must be on or after ${minDate}.`,
        dateMax: ({ maxDate }) => `The date must be on or before ${maxDate}.`,
        email: 'Please enter a valid email address.',
        fileRequired: 'Please select a file.',
        fileType: 'The selected file type is not allowed.',
        fileSize: ({ maxSize }) => `The file must not exceed ${maxSize}.`,
        number: 'Please enter a valid number.',
        numberMin: ({ min }) =>
            `The value must be greater than or equal to ${min}.`,
        numberMax: ({ max }) =>
            `The value must be less than or equal to ${max}.`,
        numberStep: ({ step }) => `The value must match a step of ${step}.`,
        password: ({ minLength, requireLetter, requireNumber }) => {
            const requirements = [];

            if (requireLetter) {
                requirements.push('letters');
            }

            if (requireNumber) {
                requirements.push('numbers');
            }

            return `The password must contain at least ${minLength} characters${requirements.length ? `, including ${requirements.join(' and ')}` : ''}.`;
        },
        phone: 'Please enter a valid phone number (10 digits).',
        radio: 'Please select an option.',
        required: 'This field is required.',
        select: 'Please select an option.',
        text: ({ minLength }) =>
            `This field must contain at least ${minLength} characters.`,
        url: 'Please enter a valid URL.',
    },
    fr: {
        checkboxMin: ({ minChecked }) =>
            `Veuillez sélectionner au moins ${minChecked} option${minChecked > 1 ? 's' : ''}.`,
        checkboxMax: ({ maxChecked }) =>
            `Veuillez sélectionner au maximum ${maxChecked} option${maxChecked > 1 ? 's' : ''}.`,
        confirmationMissing: 'Le champ à confirmer est introuvable.',
        confirmationMismatch: 'Les valeurs ne correspondent pas.',
        date: 'Veuillez entrer une date valide.',
        dateMin: ({ minDate }) =>
            `La date doit être postérieure ou égale au ${minDate}.`,
        dateMax: ({ maxDate }) =>
            `La date doit être antérieure ou égale au ${maxDate}.`,
        email: 'Veuillez entrer une adresse e-mail valide.',
        fileRequired: 'Veuillez sélectionner un fichier.',
        fileType: "Le type de fichier sélectionné n'est pas autorisé.",
        fileSize: ({ maxSize }) =>
            `Le fichier ne doit pas dépasser ${maxSize}.`,
        number: 'Veuillez entrer un nombre valide.',
        numberMin: ({ min }) =>
            `La valeur doit être supérieure ou égale à ${min}.`,
        numberMax: ({ max }) =>
            `La valeur doit être inférieure ou égale à ${max}.`,
        numberStep: ({ step }) => `La valeur doit respecter un pas de ${step}.`,
        password: ({ minLength, requireLetter, requireNumber }) =>
            `Le mot de passe doit contenir au moins ${minLength} caractères${requireLetter ? ', dont des lettres' : ''}${requireNumber ? ' et des chiffres' : ''}.`,
        phone: 'Veuillez entrer un numéro de téléphone valide (10 chiffres).',
        radio: 'Veuillez sélectionner une option.',
        required: 'Ce champ est obligatoire.',
        select: 'Veuillez sélectionner une option.',
        text: ({ minLength }) =>
            `Ce champ doit contenir au moins ${minLength} caractères.`,
        url: 'Veuillez entrer une URL valide.',
    },
};

export default messages;
