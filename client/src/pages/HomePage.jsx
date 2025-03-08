import React from 'react'
import { useSelector } from 'react-redux';

const Home = () => {
  const user = useSelector(state => state.auth.user.username);
  console.log(user);

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
      </div>
    </div>
  )
}

export default Home
