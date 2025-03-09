# SecureConnect

Welcome to **SecureConnect**, a secure and user-friendly authentication system! In a world where security is key, SecureConnect ensures a robust signup and login system with proper validation, error handling, and user-friendly feedback.

## Features

### Signup Page

- Users can sign up with a **Username**, **Email**, and **Password**.
- Real-time validation with error messages under each field.
- Passwords are hashed before being stored in the database.
- Prevents signup if the username or email already exists.

### Signin Page

- Users can log in using their registered **Username** and **Password**.
- Real-time validation with error messages under each field.
- Validation rules similar to the signup page.
- Prevents login if the username doesn’t exist or the password is incorrect.
- Upon successful login, users are greeted with a personalized message: **"Welcome, [Username]!"**.
- Basic session management keeps users logged in until they click the **Signout** button.
- Clicking **Signout** redirects users to the login page.

### OTP for Password Reset

- Users can request an OTP to reset their password.
- OTP is sent to the registered email and is valid for 5 minutes.
- Users can reset their password using the OTP.

### Error Handling

- Comprehensive error handling for all routes and operations.
- User-friendly error messages are displayed for validation errors, server errors, and more.

## Project Structure

```bash
SecureConnect/
│── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── PrivateRoute.jsx
│   │   │   ├── ScrollToTop.jsx
│   │   ├── pages/
│   │   │   ├── HomePage.jsx
│   │   │   ├── NotFound.jsx
│   │   │   ├── SignIn.jsx
│   │   │   ├── SignUp.jsx
│   │   │   ├── ForgotPassword.jsx
│   │   ├── features/
│   │   │   ├── auth/
│   │   │   │   ├── authActions.js
│   │   │   │   ├── authSlice.js
│   │   ├── store/
│   │   │   ├── store.js
│   │   ├── App.jsx
│   │   ├── index.js
│── server/
│   ├── controllers/
│   │   ├── authController.js
│   ├── routes/
│   │   ├── authRoutes.js
│   ├── utils/
│   │   ├── errorHandler.js
│   │   ├── jwtUtils.js
│   │   ├── sendEmail.js
│   ├── models/
│   │   ├── userModel.js
│   │   ├── otpModel.js
│   ├── server.js
│   ├── .env
│── README.md
│── package.json
│── .gitignore
```

## Installation

### Prerequisites

- Node.js
- MongoDB

### Steps

1. Clone the repository:
    ```bash
    git clone https://github.com/De-Silva-Madhushankha/SpiritX_Web_Wizards_01.git
    cd SecureConnect
    ```

2. Install dependencies for both client and server:
    ```bash
    cd client
    npm install
    cd ../server
    npm install
    ```

3. Create a `.env` file in the `server` directory and add the following:
    ```properties
    MONGO_URI="your_mongodb_connection_string"
    PORT=5000
    JWT_SECRET="your_jwt_secret"
    NODE_ENV="development"
    SMTP_HOST="smtp.gmail.com"
    SMTP_PORT=587
    SMTP_USER="your_email@gmail.com"
    SMTP_PASSWORD="your_email_password"
    ```
4. Create a `.env` file in the `client` directory and add the following:
    ```properties
    VITE_BASE_URL="http://localhost:5000/api"
    ```
5. Start the server:
    ```bash
    cd server
    npm start
    ```
    
6. Start the client:
    ```bash
    cd client
    npm start
    ```
## Usage

- Open your browser and navigate to `http://localhost:3000` to access the application.
- Sign up for a new account or log in with existing credentials.
- Use the forgot password feature to reset your password using OTP.
- **Note** - Your Ports Might Change from ours; configure depending on your settings.

## Technologies Used

- **React.js** - Frontend framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **JavaScript** - Core functionality




