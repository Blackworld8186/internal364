import React from 'react';
import Sidebar from '../../Components/Nav/Sidebar';

const register = () => {
  return (
    <div className='border border-primary w-100 min-vh-100 '>
      <div className='w-50 m-auto min-vh-100'>
        <form class="border m-auto p-4 min-vh-100">
          <h1 className='text-center'>Register</h1>
  <div className="col-md-6 m-4">
    <label htmlFor="validationDefault03" className="form-label">Full Name</label>
    <input type="text" className="form-control" id="validationDefault03" required />
  </div>

  <div className="col-md-4 m-4">
    <label htmlFor="validationDefaultUsername" className="form-label">Username</label>
    <div className="input-group">
      <span className="input-group-text" id="inputGroupPrepend2">@</span>
      <input type="text" class="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required />
    </div>
  </div>
  <div className="col-md-6 m-4">
    <label htmlFor="validationDefault03" className="form-label">City</label>
    <input type="text" className="form-control" id="validationDefault03" required />
  </div>
  <div className="col-md-3 m-4">
    <label htmlFor="validationDefault04" class="form-label">State</label>
    <select className="form-select" id="validationDefault04" required>
      <option selected disabled value="">Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div className="col-md-3 m-4">
    <label htmlFor="validationDefault05" className="form-label">Zip</label>
    <input type="number" className="form-control" id="validationDefault05" required />
  </div>
  <div className="col-12 m-4">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
      <label className="form-check-label" for="invalidCheck2">
        Agree to terms and conditions
      </label>
    </div>
  </div>
  <div className="col-12">
    <button className="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>
      </div>       
    </div>
  )
}

export default register;
