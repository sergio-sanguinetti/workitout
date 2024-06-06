'use client';
import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { DOMAIN_BACK,DOMAIN_FRONT } from '../../env';


export default function Login() {

  const [correo, setCorreo] = useState('')
  const [contraseña, setContraseña] = useState('')

  /**@async funcion para logear a la plataforma */
  
   const Logearse = () => {
       console.log(correo);
       console.log(contraseña);
       
       const regexCorreo = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
      //  const regexContrasena = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

         if (regexCorreo.test(correo) && contraseña.length > 0) {
          if (correo === "utp@utp.edu.pe" && contraseña === "Contraseña1!") {
            toast.success("Redirigiendo a la plataforma!", {
              position: "top-right"
            });
             setTimeout(() => {
                 window.location.href = DOMAIN_FRONT+'plataforma';
             }, 2000);
          } else {
            toast.error("Correo o Contraseña Incorrectos!", {
              position: "top-center"
            });
          }
        } else {
          toast.error("Ingrese los datos correctamente!", {
            position: "top-center"
          });
        }
        
     
   
   }


  return (
    <>
    <ToastContainer />
    <section class="ftco-section">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-6 text-center mb-5">
				
				</div>
			</div>
			<div class="row justify-content-center">
				<div class="col-md-7 col-lg-5">
					<div class="wrap">
						
            <div className="img" style={{ backgroundImage: 'url("/login/bg-1.jpg")' }}></div>
						<div class="login-wrap p-4 p-md-5">
			      	<div class="">
			      		<div class="text-center">
                   <center>
			      		   	<h3 class="mb-4">LOGIN WORKITOUT</h3>
                  </center>
			      		</div>
								<div class="w-100">
									<p class="social-media d-flex justify-content-end">
										<a href="#" class="social-icon d-flex align-items-center justify-content-center"><span class="fa fa-facebook"></span></a>
										<a href="#" class="social-icon d-flex align-items-center justify-content-center"><span class="fa fa-twitter"></span></a>
									</p>
								</div>
			      	</div>
							<form action="#" class="signin-form">
			      		<div class="form-group mt-3">
			      			<input type="mail" class="form-control" value={correo} onChange={(e)=>setCorreo(e.target.value)} required/>
			      			<label class="form-control-placeholder" for="username">Correo Electrónico</label>
			      		</div>
		            <div class="form-group mt-5">
		              <input id="password-field" type="password" class="form-control"  value={contraseña} onChange={(e)=>setContraseña(e.target.value)} required/>
		              <label class="form-control-placeholder" for="password">Contraseña</label>
		              <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password"></span>
		            </div>
		            <div class="form-group">
		            	<button type="button" class="form-control btn btn-primary rounded submit px-3" onClick={Logearse}>INGRESAR</button>
		            </div>
		            <div class="form-group d-md-flex">
									<div class="w-50 text-md-left">
										<a href="#" style={{color:'#01d28e'}}>Te olvidaste la contraseña?</a>
									</div>
		            </div>
		          </form>
		          <p class="text-center">Aún no te registras? <a data-toggle="tab" href="#signup">REGISTRARSE</a></p>
		        </div>
		      </div>
				</div>
			</div>
		</div>
	</section>
  </>
  )
}
