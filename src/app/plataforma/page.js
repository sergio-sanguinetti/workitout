'use client';

import React, { useState, useEffect } from 'react';
import '../boostrap.css';
import Sidebar from '../components/sidebar';
import '../estilos/globales.css';


export default function Inicio() {
  const [searchTerm, setSearchTerm] = useState('');
  const [services, setServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState(services);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    // Fetch categories from the backend
    fetch('http://localhost:8080/api_workitout/obtenerCategorias.php?tabla=obtener_categorias')
      .then(response => response.json())
      .then(data => {
        setServices(data);
        setFilteredServices(data);
      })
      .catch(error => console.error('Error fetching services:', error));
  }, []);

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = services.filter(service =>
      service.nombreCategoria.toLowerCase().includes(term)
    );
    setFilteredServices(filtered);
  };

  const handleClick = (serviceName) => {
    alert(`You clicked on ${serviceName}`);
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsSidebarOpen(open);
  };

  return (
    <>
      <Sidebar isOpen={isSidebarOpen} toggleDrawer={toggleDrawer} />
      <div className="content">
          
        <h3 className='color-primary text-center'><b>Empieza a solicitar tus servicios</b></h3>
        <div className="row justify-content-center mb-4">
          <div className="col-md-6">
            <input
              type="text"
              placeholder="¿Qué servicio estás buscando?"
              value={searchTerm}
              onChange={handleSearch}
              className="form-control"
            />
          </div>
        </div>
        <div className="row">
          {filteredServices.map(service => (
            <div key={service.idCategoria} className="col-md-4 mb-3">
            <div className="card" onClick={() => handleClick(service.nombreCategoria)}>
              <div className="card-body">
                <h5 className="card-title">{service.nombreCategoria}</h5>
                <p className="card-text">{service.count} encuentra especialistas</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </>
  );
}

