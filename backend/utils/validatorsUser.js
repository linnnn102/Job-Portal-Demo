// Email validation: Valid email format
const isValidEmail = (email) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
};

// Full name validation: Only alphabets and spaces allowed
const isValidFullName = (fullName) => {
    const nameRegex = /^[A-Za-z\s]+$/;
    return nameRegex.test(fullName);
};

// Password validation:
// - Minimum 8 characters
// - At least 1 uppercase letter
// - At least 1 lowercase letter
// - At least 1 digit
// - At least 1 special character
const isValidPassword = (password) => {
    const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
};

module.exports = {
    isValidEmail,
    isValidFullName,
    isValidPassword,
};