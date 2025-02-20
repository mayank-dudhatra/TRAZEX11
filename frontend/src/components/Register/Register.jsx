import { useState } from 'react';
import axios from 'axios';

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/users', formData);
      alert('Registration successful!');
    } catch (error) {
      alert(error.response.data.error || 'Registration failed');
    }
  };

  return (
    // <div className="p-5 bg-white shadow rounded">
    //   <h2 className="mb-3 text-lg font-bold">Register</h2>
    //   <form onSubmit={handleSubmit} className="flex flex-col">
    //     <input type="text" name="username" placeholder="Username" className="mb-2 p-2 border" onChange={handleChange} required />
    //     <input type="text" name="name" placeholder="Name" className="mb-2 p-2 border" onChange={handleChange} required />
    //     <input type="email" name="email" placeholder="Email" className="mb-2 p-2 border" onChange={handleChange} required />
    //     <input type="password" name="password" placeholder="Password" className="mb-2 p-2 border" onChange={handleChange} required />
    //     <button type="submit" className="bg-blue-500 text-white p-2 rounded">Register</button>
    //   </form>
    // </div>


    <div className="login-container">
    {/* Left side illustration */}
    <div className="login-illustration">
      <img 
        src="https://res.cloudinary.com/dbrb9ptmn/image/upload/v1738758295/mgx4f6x4rqwtmt3kvgtt.png" 
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

        <h2 className="welcome-text" style={{marginTop: 10}}>Join TRAZEX11</h2>

        {/* Login form */}
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-inputs">
             <input type="text" name="username" placeholder="Username" style={{marginTop: -10}} className="input-field" onChange={handleChange} required />

             <input type="text" name="name" placeholder="Name" className="input-field" onChange={handleChange} required />

             <input type="email" name="email" placeholder="Email" className="input-field" onChange={handleChange} required />

             <input type="password" name="password" placeholder="Password" className="input-field" onChange={handleChange} required />

          </div>
           
           <div className="button-container">
          <button type="submit" style={{marginTop: 0}} className="login-button2">
            Sign-up
          </button>
          </div>

          <div className="forgot-password">
            <a href="#"><span style={{color: 'black'}}>You Don`t have an Account ? </span>Sign-In</a>
          </div>
        </form>
      </div>
    </div>

  </div>
  );
}

export default Register;
