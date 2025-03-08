import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../features/auth/authActions';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { toast } from 'react-toastify';

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [passwordStrength, setPasswordStrength] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserData({
      ...userData,
      [id]: value,
    });

    // Validate in real-time
    validateForm(id, value);
  };

  // Real-time validation logic
  const validateForm = (id, value) => {
    let tempErrors = { ...errors };

    // Username validation
    if (id === 'username') {
      if (value.length < 8) {
        tempErrors.username = 'Username must be at least 8 characters long';
      } else {
        delete tempErrors.username;
      }
    }

    // Email validation
    if (id === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        tempErrors.email = 'Please enter a valid email address';
      } else {
        delete tempErrors.email;
      }
    }

    // Password validation
    if (id === 'password') {
      if (value.length < 8) {
        tempErrors.password = 'Password must be at least 8 characters long';
      } else if (!/[a-z]/.test(value)) {
        tempErrors.password = 'Password must contain at least one lowercase letter';
      } else if (!/[A-Z]/.test(value)) {
        tempErrors.password = 'Password must contain at least one uppercase letter';
      } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
        tempErrors.password = 'Password must contain at least one special character';
      } else {
        delete tempErrors.password;
      }
      evaluatePasswordStrength(value);
    }

    // Confirm Password validation
    if (id === 'confirmPassword') {
      if (value !== userData.password) {
        tempErrors.confirmPassword = 'Passwords must match';
      } else {
        delete tempErrors.confirmPassword;
      }
    }
    setErrors(tempErrors);
  };

  const evaluatePasswordStrength = (password) => {
    let strength = '';

    if (!password) {
      setPasswordStrength('');
      return;
    }

    if (password.length > 8 && /[a-z]/.test(password) && /[A-Z]/.test(password) && /[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      strength = 'strong';
    } else if (password.length >= 6) {
      strength = 'medium';
    } else {
      strength = 'weak';
    }

    setPasswordStrength(strength);
  };

  const getStrengthColor = () => {
    switch (passwordStrength) {
      case 'strong': return 'bg-green-500';
      case 'medium': return 'bg-yellow-500';
      case 'weak': return 'bg-red-500';
      default: return 'bg-gray-200';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields before submission
    const tempErrors = {};
    if (!userData.username || userData.username.length < 8) {
      tempErrors.username = 'Username must be at least 8 characters long';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!userData.email || !emailRegex.test(userData.email)) {
      tempErrors.email = 'Please enter a valid email address';
    }

    if (!userData.password || !(/[a-z]/.test(userData.password) && /[A-Z]/.test(userData.password) && /[!@#$%^&*(),.?":{}|<>]/.test(userData.password))) {
      tempErrors.password = 'Password must meet all requirements';
    }

    if (userData.password !== userData.confirmPassword) {
      tempErrors.confirmPassword = 'Passwords must match';
    }

    setErrors(tempErrors);

    if (Object.keys(tempErrors).length === 0) {
      setIsSubmitting(true);
      try {
        await dispatch(registerUser(userData));
        setTimeout(() => {
          navigate('/login');
        }, 2000);
        toast.success('Account created successfully! Redirecting to login page...');
      } catch (err) {
        toast.error('An error occurred. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat" 
    style={{
      backgroundImage: "url('/assets/signup-bg.webp')",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm"></div>
      <div className="relative bg-white/10 p-8 rounded-3xl backdrop-filter backdrop-blur-md border border-white/20 shadow-2xl w-full max-w-md z-10 text-white">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800">Create Account</h2>
          <p className="text-gray-600 mt-2">Join our exclusive community</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-5">
            {/* Username Field */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">Username</label>
              <input
                id="username"
                type="text"
                value={userData.username}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${errors.username ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none`}
                placeholder="Enter your username"
              />
              {errors.username && <p className="mt-1 text-sm text-red-500">{errors.username}</p>}
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                id="email"
                type="email"
                value={userData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none`}
                placeholder="email@example.com"
              />
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative">
                <input
                  id="password"
                  type={passwordVisible ? "text" : "password"}
                  value={userData.password}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.password ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none pr-10`}
                  placeholder="Create a strong password"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700 transition-colors"
                >
                  {passwordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}

              {/* Password Strength Indicator */}
              {userData.password && (
                <div className="mt-2">
                  <div className="flex items-center">
                    <div className="w-full bg-gray-200 rounded-full h-2 mr-2">
                      <div
                        className={`h-2 rounded-full ${getStrengthColor()} transition-all duration-300 ease-in-out`}
                        style={{ width: passwordStrength === 'weak' ? '33%' : passwordStrength === 'medium' ? '66%' : passwordStrength === 'strong' ? '100%' : '0%' }}
                      ></div>
                    </div>
                    <span className="text-xs font-medium capitalize">
                      {passwordStrength && `${passwordStrength}`}
                    </span>
                  </div>
                </div>
              )}

              {/* Password Requirements */}
              <div className="mt-2 grid grid-cols-2 gap-1">
                <p className={`text-xs ${/[a-z]/.test(userData.password) ? 'text-green-600' : 'text-gray-500'}`}>• Add Lowercase letters</p>
                <p className={`text-xs ${/[A-Z]/.test(userData.password) ? 'text-green-600' : 'text-gray-500'}`}>• Add Uppercase letters</p>
                <p className={`text-xs ${/[!@#$%^&*(),.?":{}|<>]/.test(userData.password) ? 'text-green-600' : 'text-gray-500'}`}>• Add Special characters</p>
                <p className={`text-xs ${userData.password.length >= 8 ? 'text-green-600' : 'text-gray-500'}`}>• 8+ characters</p>
              </div>
            </div>

            {/* Confirm Password Field */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  type={confirmPasswordVisible ? "text" : "password"}
                  value={userData.confirmPassword}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none pr-10`}
                  placeholder="Confirm your password"
                />
                <button
                  type="button"
                  onClick={toggleConfirmPasswordVisibility}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700 transition-colors"
                >
                  {confirmPasswordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.confirmPassword && <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || Object.keys(errors).length > 0}
              className={`w-full py-3 rounded-lg font-medium text-white transition-all duration-300 ${isSubmitting || Object.keys(errors).length > 0
                ? 'bg-blue-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg'
                }`}
            >
              {isSubmitting ? 'Creating Account...' : 'Create Account'}
            </button>
          </div>
        </form>

        {/* Sign In Link */}
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Already have an account?{' '}
            <a href="/login" className="text-blue-600 hover:text-blue-800 font-medium">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;