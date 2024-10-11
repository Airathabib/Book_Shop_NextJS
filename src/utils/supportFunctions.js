
export const validate = (email, password) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailRegex.test(email)) {
        return { error: "Invalid email format", type: "email"};
    }

    if (password.length < 6) {
        return { error: "Password must be at least 6 characters long", type: "password"};
    }

    return { message: "Both email and password are valid" };
}