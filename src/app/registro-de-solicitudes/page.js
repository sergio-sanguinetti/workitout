'use client';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from '../components/sidebar';
import './RegistroSolicitud.css';

const RegistroSolicitud = () => {
  const [user] = useState({
    name: 'Nombre Usuario',
    rating: 4.8,
  });
  const [formData, setFormData] = useState({
    nombreSolicitud: '',
    categoriaServicio: '',
    descripcionServicio: '',
    direccion: '',
    fechaHora: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { nombreSolicitud, categoriaServicio, descripcionServicio, direccion, fechaHora } = formData;
    if (!nombreSolicitud || !categoriaServicio || !descripcionServicio || !direccion || !fechaHora) {
      toast.error('Todos los campos son obligatorios');
      return false;
    }
    if (new Date(fechaHora) <= new Date()) {
      toast.error('La fecha y hora deben ser futuras');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      toast.success('Solicitud registrada correctamente');
    }
  };

  return (
    <>
      <ToastContainer />
      <Sidebar userName={user.name} userRating={user.rating} />
      <section className="profile-section">
        <div className="container">
          <div className="row justify-content-center">
            
          </div>
          <div className="row justify-content-center">
            <div className="col-md-7 col-lg-5">
              <div className="wrap">
                <div className="profile-wrap p-4 p-md-5">
                <div className="col-md-6 text-center mb-5">
                  <h3 className="form-title">Registro de Solicitud</h3>
                </div>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group mt-3">
                      <label style={{ color: '#000' }}>Seleccione la categoria de servicio</label>
                      <input
                        type="text"
                        className="form-control p-2"
                        name="nombreSolicitud"
                        value={formData.nombreSolicitud}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label style={{ color: '#000' }}>Seleccione el servicio</label>
                      <input
                        type="text"
                        className="form-control p-2"
                        name="categoriaServicio"
                        value={formData.categoriaServicio}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label style={{ color: '#000' }}>Descripción servicio</label>
                      <textarea
                        className="form-control p-2"
                        name="descripcionServicio"
                        value={formData.descripcionServicio}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label style={{ color: '#000' }}>Dirección</label>
                      <input
                        type="text"
                        className="form-control p-2"
                        name="direccion"
                        value={formData.direccion}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group mt-3">
                      <button type="button" className="btn btn-primary form-control">
                        Marcar Ubicación
                      </button>
                    </div>
                    <div className="form-group mt-3">
                      <label style={{ color: '#000' }}>Fecha y Hora</label>
                      <input
                        type="datetime-local"
                        className="form-control p-2"
                        name="fechaHora"
                        value={formData.fechaHora}
                        onChange={handleChange}
                      />
                    </div>
                    <button type="submit" className="form-control btn btn-primary rounded submit px-3">
                      Registrar Solicitud
                    </button>
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

export default RegistroSolicitud;


