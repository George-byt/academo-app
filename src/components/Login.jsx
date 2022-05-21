import React from 'react';
import { loginAsync, loginGoogle } from '../redux/actions/authActions';
import { useDispatch } from 'react-redux';
import '../styles/Login.css';
import { BsGoogle } from 'react-icons/bs';
import useForm from '../hooks/useForm';
import { Link } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch()

  const [formValue, handleInputChange, rest] = useForm({
    user: '',
    pass: ''
  })

  const { user, pass } = formValue

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formValue)
    dispatch(loginAsync(user, pass))
    rest()
  }

  return (
    <section className='login-section'>
      <div className=''>
        <h1 className='text-center'>Login</h1>
        <form onSubmit={handleSubmit} className='p-5'>
          <div className='mb-3'>
            <label className='form-label' htmlFor='email'>Email</label>
            <input
              className='form-control'
              type='email'
              name='user'
              id='email'
              value={user}
              onChange={handleInputChange}
              autoComplete='off'
              placeholder='Ingrese su correo electrónico' />
          </div>
          <div className='mb-3'>
            <label className='form-label' htmlFor='password'>Password</label>
            <input
              className='form-control'
              type='password'
              name='pass'
              value={pass}
              onChange={handleInputChange}
              id='password'
              autoComplete='off'
              placeholder='Ingrese su contraseña' />
          </div>
        </form>
        <div className='d-flex justify-content-center'>
          <div className=''>
            <button type='' className='btn btn-danger form-control mb-3 d-block m-auto w-50 fs-5' onClick={() => dispatch(loginGoogle())}>
              <BsGoogle className='fs-2 me-2' />Login with Google
            </button>
            {/* <button type='' className='btn btn-primary form-control mb-3 d-block m-auto w-50'>
              <BsFacebook className='fs-2' />
            </button> */}
            <Link to='/register'>
              <h4 className='text-center'>Si no tienes una cuenta puedes registrarte</h4>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login;
