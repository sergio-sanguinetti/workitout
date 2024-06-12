'use client';
import React, { useState } from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './registroEspecialista.module.css';

export default function RegisterSpecialist() {
  const [formData, setFormData] = useState({
    nombres: '',
    apellidos: '',
    fechaNacimiento: '',
    correo: '',
    dni: '',
    fotoIdentificacion: null,
    fotoDniFrente: null,
    fotoDniAtras: null,
    confirmacionIdentidad: null,
    antecedentesNoPenales: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar los datos al backend
    console.log(formData);
    toast.success("Solicitud de registro enviada. Será evaluada en 1 a 3 días hábiles.", {
      position: "top-right"
    });
  };

  const validateText = (value) => /^[a-zA-Z\s]*$/.test(value);
  const validateEmail = (value) => /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(value);
  const validateDni = (value) => /^\d{8}$/.test(value);

  return (
    <>
      <ToastContainer />
      <div className="container mt-5">
        <h2>Solicitud de Registro Especialista</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Nombres:</label>
            <input
              type="text"
              className="form-control"
              name="nombres"
              value={formData.nombres}
              onChange={handleChange}
              required
              pattern="[A-Za-z\s]+"
              title="Solo se permiten letras y espacios"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Apellidos:</label>
            <input
              type="text"
              className="form-control"
              name="apellidos"
              value={formData.apellidos}
              onChange={handleChange}
              required
              pattern="[A-Za-z\s]+"
              title="Solo se permiten letras y espacios"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Fecha de Nacimiento:</label>
            <input
              type="date"
              className="form-control"
              name="fechaNacimiento"
              value={formData.fechaNacimiento}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Correo Electrónico:</label>
            <input
              type="email"
              className="form-control"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              required
              pattern="^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$"
              title="Ingrese un correo válido"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">N° de Documento de Identidad:</label>
            <input
              type="text"
              className="form-control"
              name="dni"
              value={formData.dni}
              onChange={handleChange}
              required
              pattern="\d{8}"
              title="El DNI debe contener 8 dígitos"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Foto de Identificación:</label>
            <input
              type="file"
              className="form-control"
              name="fotoIdentificacion"
              onChange={handleFileChange}
              required
              accept="image/*"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Foto de DNI (Frente):</label>
            <input
              type="file"
              className="form-control"
              name="fotoDniFrente"
              onChange={handleFileChange}
              required
              accept="image/*"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Foto de DNI (Parte Trasera):</label>
            <input
              type="file"
              className="form-control"
              name="fotoDniAtras"
              onChange={handleFileChange}
              required
              accept="image/*"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Confirmación de Identidad (Foto con DNI):</label>
            <input
              type="file"
              className="form-control"
              name="confirmacionIdentidad"
              onChange={handleFileChange}
              required
              accept="image/*"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Imagen de Antecedentes no Penales:</label>
            <input
              type="file"
              className="form-control"
              name="antecedentesNoPenales"
              onChange={handleFileChange}
              required
              accept="image/*,application/pdf"
            />
          </div>
          <button type="submit" className="btn btn-primary">Siguiente</button>
        </form>
      </div>
    </>
  );
}
