'use client';
import React, { useState, useEffect } from 'react';
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
    categoriaServicio: '',
    Servicio: '',
    descripcionServicio: '',
    direccion: '',
    fechaHora: '',
    precio: ''
  });

  const [categorias, setCategorias] = useState([]);
  const [servicios, setServicios] = useState([]);

  useEffect(() => {
    // Obtener categorías al cargar el componente
    fetch(`http://localhost:8080/api_workitout/obtenerCategorias.php?tabla=obtener_categorias`)
      .then(response => response.json())
      .then(data => setCategorias(data))
      .catch(error => console.error('Error al obtener categorías:', error));
  }, []);

 
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    // Si el campo cambiado es la categoría de servicio, obtener los servicios correspondientes
    if (e.target.name === 'categoriaServicio') {
      fetch(`http://localhost:8080/api_workitout/obtenerServicios.php?tabla=obtener_servicios&idCategoria=${e.target.value}`)
        .then(response => response.json())
        .then(data => setServicios(data))
        .catch(error => console.error('Error al obtener servicios:', error));
    }
  };

  const validateForm = () => {
    const { categoriaServicio, Servicio, descripcionServicio, direccion, fechaHora, precio } = formData;
    if (!categoriaServicio || !Servicio || !descripcionServicio || !direccion || !fechaHora || !precio) {
      toast.error('Todos los campos son obligatorios');
      return false;
    }
    if (new Date(fechaHora) <= new Date()) {
      toast.error('La fecha y hora deben ser futuras');
      return false;
    }
    if (!/^\d+(\.\d{1,2})?$/.test(precio)) {
      toast.error('El precio debe ser un valor monetario válido');
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
                      <label style={{ color: '#000' }}>Seleccione la categoría de servicio</label>
                      <select
                        className="form-control p-2"
                        name="categoriaServicio"
                        value={formData.categoriaServicio}
                        onChange={handleChange}
                      >
                        <option value="">Seleccione una categoría</option>
                        {categorias.map(categoria => (
                          <option key={categoria.idCategoria} value={categoria.idCategoria}>{categoria.nombreCategoria}</option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group mt-3">
                    <label style={{ color: '#000' }}>Seleccione el servicio</label>
                      <select
                        className="form-control p-2"
                        name="Servicio"
                        value={formData.Servicio}
                        onChange={handleChange}
                      >
                        <option value="">Seleccione un servicio</option>
                        {servicios.map(servicio => (
                          <option key={servicio.idServicio} value={servicio.idServicio}>{servicio.nombreServicio}</option>
                        ))}
                      </select>
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
                    <div className="form-group mt-3">
                      <label style={{ color: '#000' }}>Precio</label>
                      <input
                        type="text"
                        className="form-control p-2"
                        name="precio"
                        value={formData.precio}
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


