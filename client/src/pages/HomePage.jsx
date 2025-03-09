import React from 'react'
import { useSelector } from 'react-redux';
import { useState } from 'react';

const Home = () => {
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
          toast.message('Signout successful!');
          navigate('/login');
        }
      } catch (error) {
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

      <div className="relative bg-white/10 p-8 rounded-3xl backdrop-filter backdrop-blur-md border border-white/20 shadow-2xl w-full max-w-md z-10 text-white">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-100">Welcome!</h2>
          <h3 className="text-gray-300 mt-2">{user}</h3>
        </div>
        <div>
            <button
              type="submit"
              onSubmit={handleSubmit}
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
