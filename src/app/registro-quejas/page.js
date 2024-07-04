'use client';
import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { DOMAIN_FRONT,DOMAIN_BACK } from '../../../env';
import Sidebar from '../components/sidebar';
import SidebarEpecialista from '../components/sidebarEspecialista';
import '../estilos/globales.css';

const RegisterComplaint = () => {
  const [formData, setFormData] = useState({
    solicitud: '',
    motivo: '',
    descripcion: '',
    imagen: null,
  });
  const [solicitudes, setSolicitudes] = useState([]);

    
  const [id_usuario, setIdUsuario] = useState(0);
  const [especialista, setEspecialista] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const id_usuario = localStorage.getItem('id_usuarioWORK');
      const especialista = localStorage.getItem('especialista');

      setIdUsuario(id_usuario);
      setEspecialista(especialista);
    }
  }, [id_usuario]);


  useEffect(() => {
    if(id_usuario != 0){
      fetch(`${DOMAIN_BACK}?controller=solicitudes&action=traer_solicitudes_por_cliente&idCliente=${id_usuario}`)
        .then(response => response.json())
        .then(data => setSolicitudes(data))
        .catch(error => console.error('Error al obtener solicitudes:', error));
    }
  }, [id_usuario]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: files ? files[0] : value,
    }));
  };

  

  const handleSubmit = async (e) => {
    e.preventDefault();


    const formDataToSend = new FormData();
    formDataToSend.append('idCliente', id_usuario);
    formDataToSend.append('idSolicitud', formData.solicitud);
    formDataToSend.append('motivo', formData.motivo);
    formDataToSend.append('descripcion', formData.descripcion);
    formDataToSend.append('imagen', formData.imagen);


    try {
      const response = await fetch(`${DOMAIN_BACK}?controller=quejas&action=crear_queja`, {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json',
        },
        // body: JSON.stringify({
        //   idCliente: id_usuario,
        //   idSolicitud: formData.solicitud,
        //   motivo: formData.motivo,
        //   descripcion: formData.descripcion,
        //   imagen: formData.imagen,
        // })
      });

      const data = await response.json();

      console.log(response);
      console.log(data);
      if (data.estado === 1) {
        toast.success(data.mensaje);
        setTimeout(() => {
          window.location.href = DOMAIN_FRONT + 'plataforma';
        }, 2000);
      } else {
        toast.error(data.mensaje);
      }
    } catch (error) {
      console.error('Error al registrar la queja:', error);
      toast.error('Error al registrar la queja');
    }
  };



  return (
    <>
      <ToastContainer />
       {especialista == '0' ? (
         <Sidebar />
       ) : (
        <SidebarEpecialista/>
      )}

      <section className="ftco-section" style={{ marginTop: '5rem' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5">
              <h2 className="heading-section">Registro de Quejas</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-7 col-lg-5">
              <div className="wrap">
                <div className="login-wrap p-4 p-md-5">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-user-o"></span>
                  </div>
                  <h3 className="text-center mb-4">¡Bienvenido!</h3>
                  <form onSubmit={handleSubmit} className="register-complaint-form">
                    <div className="form-group">
                      <label htmlFor="solicitud">Seleccione su solicitud:</label>
                      <select
                        name="solicitud"
                        className="form-control"
                        value={formData.solicitud}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Nombre de Solicitud</option>
                        {solicitudes.map((solicitud) => (
                          <option key={solicitud.idSolicitud} value={solicitud.idSolicitud}>
                            {solicitud.descripcion}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="motivo">Motivo de queja:</label>
                      <select
                        name="motivo"
                        className="form-control"
                        value={formData.motivo}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Seleccione motivo</option>
                        <option value="Aplicativo">Aplicativo</option>
                        <option value="Especialista">Especialista</option>
                        <option value="Servicio">Servicio</option>
                        <option value="Otro">Otro</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="descripcion">Descripción de queja:</label>
                      <textarea
                        name="descripcion"
                        className="form-control"
                        rows="3"
                        value={formData.descripcion}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <label htmlFor="imagen">Cargar Imagen:</label>
                      <input
                        type="file"
                        name="imagen"
                        className="form-control-file"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn btn-primary form-control">Registrar Queja</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterComplaint;