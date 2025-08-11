import React, { useState } from 'react';
import axios from 'axios'; // You need to import axios

const Register = () => { // Component names should start with uppercase
  const [userData, setUserData] = useState({
    fullname: '',
    phone: '',
    city: '',
    address: '',
    zip: '',
    state: '' // Added state to userData
  });

  function handleInput(e) {
    let value = e.target.value;
    let field = e.target.name; // Fixed typo: filed -> field
    setUserData(prev => ({
      ...prev,
      [field]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault(); // Prevent default form submission
    axios.post('https://localhost:3000/register', userData) // Added userData and fixed syntax
      .then(response => console.log(response))
      .catch(err => console.log(err));
  }

  return (
    <div className='container-fluid min-vh-100 d-flex'>
      <div className='row w-100'>
        <div className='col-lg-8 col-md-10 col-sm-12 mx-auto my-4'>
          <form className="border p-4 w-100 rounded" onSubmit={handleSubmit}>
            <h1 className='text-center mb-4'>Register</h1>
            
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="fullname" className="form-label">Full Name</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="fullname" 
                  name='fullname' 
                  value={userData.fullname}
                  onChange={handleInput}
                  required 
                />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="phone" className="form-label">Phone</label>
                <div className="input-group">
                  <span className="input-group-text" id="phonePrefix">+91</span>
                  <input 
                    type="tel" // Changed from number to tel for better mobile support
                    className="form-control" 
                    id="phone" 
                    aria-describedby="phonePrefix" 
                    name='phone' 
                    value={userData.phone}
                    onChange={handleInput}
                    required 
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="city" className="form-label">City</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="city" 
                  name='city' 
                  value={userData.city}
                  onChange={handleInput}
                  required 
                />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="address" className='form-label'>Address</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="address" 
                  placeholder="Apartment, studio, or floor" 
                  name='address' 
                  value={userData.address}
                  onChange={handleInput}
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="state" className="form-label">State</label>
                <select 
                  className="form-select" 
                  id="state" 
                  name="state"
                  value={userData.state}
                  onChange={handleInput}
                  required
                >
                  <option value="" disabled>Choose...</option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Telangana">Telangana</option>
                </select>
              </div>
              
              <div className="col-md-6 mb-3">
                <label htmlFor="zip" className="form-label">Zip</label>
                <input 
                  type="text" // Changed from number to text to avoid spinner in some browsers
                  className="form-control" 
                  id="zip" 
                  name='zip' 
                  value={userData.zip}
                  onChange={handleInput}
                  required 
                />
              </div>
            </div>

            <div className="mb-3">
              <div className="form-check">
                <input 
                  className="form-check-input" 
                  type="checkbox" 
                  id="termsCheck" 
                  required 
                />
                <label className="form-check-label" htmlFor="termsCheck">
                  Agree to terms and conditions
                </label>
              </div>
            </div>
            
            <div className="d-grid gap-2">
              <button className="btn btn-primary" type="submit">Submit form</button>
            </div>
          </form>
        </div>       
      </div>
    </div>
  );
}

export default Register;