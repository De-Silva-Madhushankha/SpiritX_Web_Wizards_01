import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ScrollToTop from './components/ScrollToTop';
import PrivateRoute from './components/PrivateRoute';

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL
axios.defaults.withCredentials = true;

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/*" element={<NotFound />} />

        {/* Private Routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<HomePage />} />
        </Route>
        
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </>
  );
}
