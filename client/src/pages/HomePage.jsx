import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import {toast} from 'react-toastify';
import { logoutUser } from '../features/auth/authActions';
import { useNavigate } from 'react-router-dom'; 

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(state => state.auth.user.username);
    const [errors, setErrors] = useState({
    submit: '',
    });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
      e.preventDefault();
  
      setIsSubmitting(true);
      try {
        const result = await dispatch(logoutUser());
 
        if (result.payload.success) {
          toast.info('Signout successful!');
          navigate('/login', { replace: true });
        }
      } catch (error) {
        console.error(error);
        setErrors({ ...errors, submit: error.message });
        toast.error('Signout failed. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/assets/signup-bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}>

      <div className="relative bg-white/10 p-8 h-full rounded-3xl backdrop-filter backdrop-blur-md border border-white/20 shadow-2xl w-full max-w-xl z-10 text-white">
        <div className="mb-8 text-center">

          <h1 className="text-6xl font-bold text-gray-100">Welcome!</h1>
          <h1 className="text-gray-300 mt-2 text-4xl">{user}</h1>
          <h1 className="text-4xl font-bold text-gray-100">you are securely connected</h1>
          
        </div>
        <div>
            <button
              type="submit"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className={`w-full py-3 rounded-lg font-medium text-white transition-all duration-300 ${isSubmitting || Object.values(errors).some(err => err !== '')
                ? 'bg-orange-400 cursor-not-allowed'
                : 'bg-orange-400 hover:bg-orange-700 hover:shadow-lg'
                }`}
            >
              {isSubmitting ? 'Signing out...' : 'Sign Out'}
            </button>
          </div>
      </div>
    </div>
  )
}

export default Home
