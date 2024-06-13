'use client';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { DOMAIN_BACK } from '../../../env';

const RegisterComplaint = () => {
  const [formData, setFormData] = useState({
    solicitud: '',
    motivo: '',
    descripcion: '',
    imagen: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the submission logic here (e.g., send data to the backend)
    toast.success('¡Excelente! Su queja ha sido registrada con éxito, un agente especializado se comunicará con usted a la brevedad mediante el correo electrónico registrado en la cuenta. Gracias por usar WorkItOut.');
  };

  return (
    <>
      <ToastContainer />
      <section className="ftco-section">
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
                        {/* Options for solicitudes should be populated here */}
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
