import { getAuth, deleteUser, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, signInWithPopup } from 'firebase/auth';
import { google } from '../../firebase/firebaseConfig';
import { authTypes } from '../types/types';

export const loginAsync = (email, password) => {
  return (dispatch) => {
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, password)
    .then(({ user }) =>{
      dispatch(loginAsync(user.email, user.password))
      console.log('Usuario Autorizado')
    })
    .catch(error => {
      console.warn(error, 'Usuario no autorizado');
    })
  }
}

export const loginSync = (user, password) => {
  return {
    type: authTypes.LOGIN,
    payload: { user, password }
  }
}

// Login con Google (Firebase)
export const loginGoogle = () => {
  return (dispatch) => {
    const auth = getAuth()
    signInWithPopup(auth, google)
    .then(({ user }) => {
      console.log(user, 'Usuario autorizado');
    })
    .catch(error => {
      console.warn(error, 'Usuario no autorizado');
    })
  }
}

export const registerAsync = (email, pass, nombre) => {
  return (dispatch) => {
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email, pass)
      .then(async ({ user }) => {
        console.log(user)
        await updateProfile(auth.currentUser, { displayName: nombre })
        dispatch(registerSync(email, pass, nombre))
        console.log('Usuario Registrado de manera exitosa')
      })
      .catch(error => {
        console.warn(error, 'No autorizado')
      })
  }

}

export const registerSync = (email, pass, name) => {
  return {
    type: authTypes.REGISTER,
    payload: {
      email, pass, name
    }
  }
}

export const logoutAsync = () => {
  return (dispatch) => {
    const auth = getAuth()

    const userBorrar = auth.currentUser;
    console.log(userBorrar)

    deleteUser(userBorrar)
      .then(() => {
        console.log("usuario eliminado")
      })
      .catch(error => {
        console.warn("No se pudo eliminar", error)
      
      })
    signOut(auth)
      .then((user) => {
        dispatch(logout())

      })
      .catch(error => {
        console.warn(error)
      })
  }
}

export const logout = () => {
  return {
    type: authTypes.LOGOUT
  }
}
