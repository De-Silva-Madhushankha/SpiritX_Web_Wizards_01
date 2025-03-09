import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 bg-gray-100">
      <div className="max-w-md w-full">
        <h2 className="text-5xl font-bold text-red-600 mb-4">404</h2>
        <h3 className="text-3xl font-bold mb-4">Page Not Found</h3>
        <p className="text-gray-600 mb-6">We couldn't find the page you were looking for. It might have been removed, renamed, or did not exist in the first place.</p>
        <Link 
          to="/login" 
          className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
        >
          Return to Sign In
        </Link>
      </div>
    </div>
  );
}

export default NotFound;