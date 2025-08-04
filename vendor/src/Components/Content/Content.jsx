import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
// import Registration from '../../Pages/Authentication/Registration';

const Content = () => {
  return (
    <div className='border w-100 min-vh-100 p-2'>
      <h1>Content page</h1>
      <button className=''> <Link to={'/Register'}>Register</Link></button>
      {/* <Registration /> */}
    </div>
  )
}

export default Content;
