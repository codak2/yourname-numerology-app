const validateName = (name) =>{

     // Trim whitespace from both ends
    const trimmedName = name.trim();

    // Check if empty
    if (trimmedName.length === 0) {
        return { valid: false, error: "Name cannot be empty." };
    }

    // Check reasonable length
    if (trimmedName.length < 3 || trimmedName.length > 100) {
        return { valid: false, error: "Name must be between 3 and 100 characters." };
    }

    // Check for valid characters (letters, space, apostrophes, hyphens)
    const nameRegex = /^[a-zA-Z]+([ '-][a-zA-Z]+)*$/;
    if (!nameRegex.test(trimmedName)) {
        return { valid: false, error: "Your name contains invalid characters. Please check your response." };
    }

    // Check for at least two words
    const parts = trimmedName.split(/\s+/);
    if (parts.length < 2) {
        return { valid: false, error: "Please enter your full name." };
    }

    return { valid: true, error: null };

}

export default validateName;