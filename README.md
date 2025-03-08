# SecureConnect

Welcome to **SecureConnect**, a secure and user-friendly authentication system! In a world where security is key, SecureConnect ensures a robust signup and login system with proper validation, error handling, and user-friendly feedback.

## Features

### Signup Page

- Users can create an account with a unique username and strong password.
- Three input fields: **Username, Password, Confirm Password**.
- Real-time validation with error messages displayed under each input field.
- Validation rules:
  - Username must be at least **8 characters long** and unique.
  - Password must contain:
    - At least one lowercase letter
    - At least one uppercase letter
    - At least one special character
  - Confirm Password must match Password.
- Authentication-related errors are displayed above the CTA button.
- Password strength indicator updates dynamically based on complexity.
- Upon successful signup, a confirmation dialog appears and redirects to the login page after **2 seconds**.

### Login Page

- Users can log in using their registered **Username** and **Password**.
- Real-time validation with error messages under each field.
- Validation rules similar to the signup page.
- Prevents login if the username doesn’t exist or the password is incorrect.
- Upon successful login, users are greeted with a personalized message: **"Hello, ****!"**.
- Basic session management keeps users logged in until they click the **Logout** button.
- Clicking **Logout** redirects users to the login page.

## Project Structure

```bash
SecureConnect/
│── src/
│   ├── components/
│   │   ├── Signup.js
│   │   ├── Login.js
│   │   ├── Dashboard.js
│   │   ├── PasswordStrengthIndicator.js
│   │   ├── ErrorMessage.js
│   │   └── LogoutButton.js
│   ├── styles/
│   │   ├── styles.css
│   ├── utils/
│   │   ├── validation.js
│   │   ├── auth.js
│   ├── App.js
│   ├── index.js
│── public/
│── README.md
│── package.json
│── .gitignore
```

## Getting Started

### Installation

```sh
git clone https://github.com/your-username/SecureConnect.git
cd SecureConnect
npm install
```

### Running the Application

```sh
npm run dev
```

### Usage

1. Open **localhost:3000** in your browser.
2. Sign up with a valid username and strong password.
3. Log in with your registered credentials.
4. Enjoy a seamless and secure authentication experience!

## Technologies Used

- **React.js** - Frontend framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **JavaScript** - Core functionality



