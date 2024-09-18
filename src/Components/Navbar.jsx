import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar  text-bold pt-6">
  <div className="container mx-auto flex justify-between items-center">
    <h1 className="text-2xl font-bold">SINARES <span className='text-blue-700'> SARL</span></h1>
    <ul className="flex space-x-4">
      <li className='inline-block border-b-2 border-transparent hover:border-blue-500'><Link to='/'>Home</Link></li>
      <li className='inline-block border-b-2 border-transparent hover:border-blue-500'><Link to= "/services">Services</Link></li>
      <li className='inline-block border-b-2 border-transparent hover:border-blue-500'><Link to="/contacts">Contacts</Link></li>
    </ul>
  </div>
</nav>
  )
}

export default Navbar
