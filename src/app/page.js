'use client';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { DOMAIN_BACK, DOMAIN_FRONT } from '../../env';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export default function Login() {
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  /**@async funcion para logear a la plataforma */
  const Logearse = async () => {
    const regexCorreo = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;

    if (regexCorreo.test(correo) && contraseña.length > 0) {
      const formulario = new FormData();
      formulario.append('email', correo);
      formulario.append('password', contraseña);

      try {
        const response = await fetch(`${DOMAIN_BACK}?tabla=acceder_sistemaWORK`, {
          method: 'POST',
          body: formulario,
        });
     
        const data = await response.json();

        console.log(data);

        if (data.estado === 1) {
          toast.success(data.mensaje, {
            position: "top-right"
          });

          setTimeout(() => {
            window.location.href = DOMAIN_FRONT + 'plataforma';
          }, 2000);

        } else {
          toast.error(data.mensaje, {
            position: "top-right"
          });
        }
      } catch (error) {
        toast.error('Error al logearse: ' + error.message, {
          position: "top-right"
        });
      }
    
    } else {
      toast.error("Correo o Contraseña Incorrectos!", {
        position: "top-center"
      });
    }
  }

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <ToastContainer />
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5"></div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-7 col-lg-5">
              <div className="wrap">
                <div className="img" style={{ backgroundImage: 'url("/login/bg-1.jpg")' }}></div>
                <div className="login-wrap p-4 p-md-5">
                  <div className="">
                    <div className="text-center">
                      <center>
                        <h3 className="mb-4">WorkItOut</h3>
                      </center>
                    </div>
                  </div>
                  <form action="#" className="">
                    <div className="form-group mt-3">
                      <label style={{ color: '#000' }} htmlFor="username">Correo Electrónico</label>
                      <input type="mail" className="form-control p-2" value={correo} onChange={(e) => setCorreo(e.target.value)} required />
                    </div>
                    <div className="form-group mt-3">
                      <label style={{ color: '#000' }} className="" htmlFor="password">Contraseña</label>
                      <div className="input-group">
                        <input id="password-field" type={showPassword ? "text" : "password"} className="form-control p-2" value={contraseña} onChange={(e) => setContraseña(e.target.value)} required />
                        <div className="input-group-append">
                          <button type="button" className="btn btn-outline-secondary" onClick={toggleShowPassword}>
                            {showPassword ? <VisibilityOffIcon /> : <RemoveRedEyeIcon />}
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <button type="button" className="form-control btn btn-primary rounded submit px-3" onClick={Logearse}>INGRESAR</button>
                    </div>
                    <div className="form-group d-md-flex">
                      <div className="w-50 text-md-left">
                        <a href="#" style={{ color: '#01d28e' }}>Te olvidaste la contraseña?</a>
                      </div>
                    </div>
                  </form>
                  <p className="text-center">Aún no te registras? <a data-toggle="tab" href={DOMAIN_FRONT+'registro'}>REGISTRARSE</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
