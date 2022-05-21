import React from 'react';
import { useDispatch } from "react-redux";
import { logoutAsync } from "../redux/actions/authActions";
import { Link } from 'react-router-dom'

const Header = () => {
  const dispatch = useDispatch();
  return (
    <header className='header p-3'>
      <div className='container d-flex justify-content-between align-items-center'>
        <div>
          <h1 className='text-white'>Academo</h1>
        </div>
        <ul className='nav'>
          <li className='nav-item'>
            <Link to='/' className='nav-link text-white fs-4'>Home</Link>
          </li>
          <li className='nav-item'>
            <button type='button' className='btn text-warning fs-4 fw-bold' onClick={() => dispatch(logoutAsync())}>Salir</button>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header;
