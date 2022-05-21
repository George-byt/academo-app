import { useState } from 'react';
import { Button, Form, Container, Col } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { registerAsync } from '../redux/actions/authActions';
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const lowercaseRegex = /(?=.*[a-z])/;
  const uppercaseRegex = /(?=.*[A-Z])/;
  const [usuarioValido, setUsuarioValido] = useState(false);


  const formik = useFormik({
    initialValues: {
      nombre: "",
      correo: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: yup.object({
      nombre:
        yup.string().required("El Nombre es requerido").min(2, "Muy Corto"),
      correo:
        yup.string().required("El Correo es requerido").email("Debe ser un correo valido Ej: blockMaster@gmail.com").lowercase("El Correo debe estar en letras minusculas"),
      password:
        yup.string().required("El Password es requerido").matches(lowercaseRegex, "Como minimo una Letra en minuscula").matches(uppercaseRegex, "Como minimo una Letra en Mayuscula").min(6, "Minimo 6 Caracteres").max(10, "Maximo 10 Caracteres"),
      confirmPassword:
        yup.string().oneOf([yup.ref("password")], "las contraseñas no son iguales").required("Se debe ingresar el password"),
    }),

    onSubmit: (formData) => {
      setUsuarioValido(true)
      console.log(formData);
      dispatch(registerAsync(formData.correo, formData.password));
    }
  })

  return (
    <>
      <main style={{
        'height': '100vh',
        'display': 'flex',
        'justifyContent': 'center',
        'alignItems': 'center'
      }}>
        <div className='w-100' style={{}}>
          <div className='container'>
            <h1 className='text-danger text-uppercase text-center' style={{ 'fontSize': '44px', 'fontWeight': '700' }}>
              Academo
            </h1>
            {!usuarioValido && <Form noValidate onSubmit={formik.handleSubmit} className='mt-5'  >
              <Container className="mb-2 d-flex flex-column align-items-center">
                <Form.Group
                  as={Col}
                  md="6"
                  controlId="validationFormik101"
                  className="position-relative">
                  <Form.Label>Nombre *</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nombre"
                    name="nombre"
                    onChange={formik.handleChange}
                    value={formik.values.nombre}
                    isValid={formik.touched.nombre && !formik.errors.nombre}
                    isInvalid={!!formik.errors.nombre}
                  />
                  <Form.Control.Feedback type="invalid" tooltip>{formik.errors.nombre}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  as={Col}
                  md="6"
                  controlId="validationFormik103"
                  className="position-relative">
                  <Form.Label>Correo *</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="correo"
                    name="correo"
                    onChange={formik.handleChange}
                    value={formik.values.correo}
                    isValid={formik.touched.correo && !formik.errors.correo}
                    isInvalid={!!formik.errors.correo}
                  />
                  <Form.Control.Feedback type="invalid" tooltip>{formik.errors.correo}</Form.Control.Feedback>
                </Form.Group>
              </Container>

              <Container className="mb-2 d-flex flex-column align-items-center">
                <Form.Group
                  as={Col}
                  md="6"
                  className="position-relative">
                  <Form.Label htmlFor="inputPassword5">Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    aria-describedby="passwordHelpBlock"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    isValid={formik.touched.password && !formik.errors.password}
                    isInvalid={!!formik.errors.password}
                    autoComplete="off"
                  />
                  <Form.Control.Feedback type="invalid" tooltip>{formik.errors.password}</Form.Control.Feedback>
                  <Form.Text id="passwordHelpBlock" muted>
                  *Entre 6-10 characteres
                  *1 Minuscula
                  *1 Mayuscula,
                  *1 Numero,
                  *Sin espacios.
                </Form.Text>
                </Form.Group>
                <Form.Group
                as={Col}
                md="6"
                className="position-relative">
                <Form.Label htmlFor="inputPassword6">Confirmar Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  name="confirmPassword"
                  aria-describedby="passwordHelpBlock"
                  onChange={formik.handleChange}
                  value={formik.values.confirmPassword}
                  isValid={formik.touched.confirmPassword && !formik.errors.confirmPassword}
                  isInvalid={!!formik.errors.confirmPassword}
                  autoComplete="off"

                />
                <Form.Control.Feedback type="invalid" tooltip>{formik.errors.confirmPassword}</Form.Control.Feedback>
                <Form.Text id="passwordHelpBlock" muted>
                  Debe Coincidir con la Contraseña
                </Form.Text>
              </Form.Group>
              </Container>
              <div className='container d-flex flex-column align-items-center p-0 mt-5'>
                <Button variant='dark' type="submit" className='w-50 mb-3' >Sing up</Button>
                <Button type="submit" onClick={formik.handleReset} className='w-50 mb-3'>Limpiar</Button>
                <Button onClick={() => navigate(-1)} className='w-50 mb-3'>Regresar</Button>
              </div>
            </Form>}
          </div>
        </div>
      </main>
    </>
  )
}

export default Register;

