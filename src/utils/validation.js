export const validateRequired = (value, fieldName) => {
    return value ? "" : `${fieldName} is required`;
}
export const validateEmail = (email) => {
    if (!email) return "Email is required";

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(email)) {
        return "Invalid email address";
    }

    return "";
};
export const validateName = (name) => {
    if (!name) return "Name is required";
    if (name.length < 2) return "Name must be at least 2 characters";
    return "";
};
export const validateMessage = (message) => {
    if (!message) return "Testimonial is required";
    if (message.length < 10 && message.length <= 500) return "Testimonial must be at least 10 characters";
    if (message.length > 500) return "Testimonial must be less than 500 characters";

    return "";
}