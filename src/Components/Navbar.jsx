import '../index.css';
import React from 'react';

const Navbar = () => {
  return (
    <>
      <nav className="navbar flex justify-around p-9 items-center bg-slate-500  border-b-8 border-black">
        <div className='text-6xl'>LOGO</div>
        <div className='menu flex gap-10 text-3xl items-center'>
            <a href="" className="nav-items nav-item1">Home</a>
            <a href="" className="nav-items nav-item2">Contact</a>
            <a href="" className="nav-items nav-item3">About</a>
            <a href="" className="nav-items nav-item4">Services</a>
            <a href="" className="nav-items nav-item5">Products</a>
        </div>
      </nav>
    </>
  )
}

export default Navbar;
