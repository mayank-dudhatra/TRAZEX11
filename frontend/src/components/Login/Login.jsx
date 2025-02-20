import { useState } from 'react';
import axios from 'axios';
import './Login.css'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(e.target)
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/users/login', formData);
      localStorage.setItem('token', res.data.token);
      alert('Login successful!');
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  return (
    // <div className="p-5 bg-white shadow rounded">
    //   <h2 className="mb-3 text-lg font-bold">Login</h2>
    //   <form onSubmit={handleSubmit} className="flex flex-col">
    //     <input type="email" name="email" placeholder="Email" className="mb-2 p-2 border" onChange={handleChange} required />
    //     <input type="password" name="password" placeholder="Password" className="mb-2 p-2 border" onChange={handleChange} required />
    //     <button type="submit" className="bg-green-100 text-white p-2 rounded">Login</button>
    //   </form>
    // </div>


    <div className="login-container">
    {/* Left side illustration */}
    <div className="login-illustration">
      <img 
        src="https://res-console.cloudinary.com/dbrb9ptmn/media_explorer_thumbnails/39f4821eaf276362d0697de76607c4ce/detailed" 
        alt="Login illustration" 
        className="illustration-image"
      />
    </div>

    {/* Right side login form */}
    <div className="login-form-container">
      <div className="login-card">
        {/* Logo and title */}
        <div className="logo-container">
          <img src="https://res.cloudinary.com/dbrb9ptmn/image/upload/v1738654508/oj7qqwdo1uimyam74bvh.png" alt="Trazex Logo" />
        </div>

        <h2 className="welcome-text">Welcome back!</h2>

        {/* Login form */}
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-inputs">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input-field"
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input-field"
              onChange={handleChange}
              required
            />
          </div>
           
           <div className="button-container">
          <button type="submit" className="login-button2">
            Log-In
          </button>
          </div>

          <div className="forgot-password">
            <a href="#">Forgot Password?</a>
          </div>
        </form>
      </div>
    </div>

  </div>
    
  );
}

export default Login;
