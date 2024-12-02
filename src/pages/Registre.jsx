import { useState } from 'react';
import '../Styles/Registre.css'; // Import the styles
import img from '../shared/images/img.png';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

// Import Material UI icons
import MailIcon from '@mui/icons-material/Mail';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';

const Register = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [registerForm, setRegisterForm] = useState({ username: '', email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState(''); // New state for error messages

  const toggleForm = () => {
    setIsActive(!isActive);
  };

  const handleLoginChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
    setErrorMessage(''); // Clear the error message on input change
  };

  const handleRegisterChange = (e) => {
    setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', loginForm);
      console.log(response.data); // Log the token or data returned
      localStorage.setItem('token', response.data.token); // Store token if needed
      navigate('/pages'); // Navigate to the next page upon success
    } catch (err) {
      setErrorMessage(err.response?.data?.message || 'Login failed!'); // Set error message
      console.error(err.response.data); // Handle errors
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password } = registerForm;
    console.log({ name: username, email, password }); // Check data structure
    try {
      const response = await axios.post('http://localhost:3000/api/auth/signup', {
        name: username, // Match backend field names
        email,
        password
      });
      console.log(response.data); // Success feedback
    } catch (err) {
      console.error(err.response?.data); // Error feedback
    }
  };

  return (
    <>
      <div className="global">
        <div className={`wrapper ${isActive ? 'active' : ''}`}>
          <img src={img} alt="Welcome" />
          <h3 className="text-right">{isActive ? "Join Us!" : "Welcome back"}</h3>

          <div className="form-wrapper login">
            <form onSubmit={handleLoginSubmit}>
              <h2 className='titleAuth'>Login</h2>
              <div className="input-box">
                <span className="icon">
                  <MailIcon />
                </span>
                <input
                  type="email"
                  name="email"
                  value={loginForm.email}
                  onChange={handleLoginChange}
                  placeholder="Email"
                  required
                />
              </div>
              <div className="input-box">
                <span className="icon">
                  <LockIcon />
                </span>
                <input
                  type="password"
                  name="password"
                  value={loginForm.password}
                  onChange={handleLoginChange}
                  placeholder="Password"
                  required
                />
              </div>
              {errorMessage && <div className="error-message">{errorMessage}</div>} {/* Display error message */}
              <div className="forgot-pass">
                <Link to='/forgotPage'><a href="#">Forgot Password?</a></Link>
              </div>
              <div className="forgot-pass">
                <Link to='/reset-password'><a href="#">Reset your Password?</a></Link>
              </div>
              <button className="custom-btn" type="submit">Login</button> {/* No Link around button */}
              <div className="sign-link">
                <p>
                  Dont have an account? <a href="#" onClick={toggleForm}>Register</a>
                </p>
              </div>
            </form>
          </div>

          <div className="form-wrapper register">
            <form onSubmit={handleRegisterSubmit}>
              <h2 className='titleAuth'>Registration</h2>
              <div className="input-box">
                <span className="icon">
                  <PersonIcon />
                </span>
                <input
                  type="text"
                  name="username"
                  value={registerForm.username}
                  onChange={handleRegisterChange}
                  placeholder="Full Name"
                  required
                />
              </div>
              <div className="input-box">
                <span className="icon">
                  <MailIcon />
                </span>
                <input
                  type="email"
                  name="email"
                  value={registerForm.email}
                  onChange={handleRegisterChange}
                  placeholder="Email"
                  required
                />
              </div>
              <div className="input-box">
                <span className="icon">
                  <LockIcon />
                </span>
                <input
                  type="password"
                  name="password"
                  value={registerForm.password}
                  onChange={handleRegisterChange}
                  placeholder="Password"
                  required
                />
              </div>
              <button className="custom-btn" type="submit">Register</button>
              <div className="sign-link">
                <p>
                  Already have an account? <a href="./pages" onClick={toggleForm}>Login</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
