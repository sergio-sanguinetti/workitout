'use client';

import React, { useState, useEffect } from 'react';
import '../boostrap.css';
import SidebarEspecialista from '../components/sidebarEspecialista';
import '../estilos/globales.css';

export default function PlataformaEspecialista() {
  const [searchTerm, setSearchTerm] = useState('');
  const [services, setServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState(services);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    // Commented out backend fetch since it's not implemented yet
    // fetch('http://localhost:8080/api_workitout/obtenerServiciosEspecialista.php?tabla=obtener_servicios')
    //   .then(response => response.json())
    //   .then(data => {
    //     setServices(data);
    //     setFilteredServices(data);
    //   })
    //   .catch(error => console.error('Error fetching services:', error));
  }, []);

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = services.filter(service =>
      service.nombreServicio.toLowerCase().includes(term)
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
      <SidebarEspecialista isOpen={isSidebarOpen} toggleDrawer={toggleDrawer} />
      <div className="content">
        <h3 className='color-primary text-center'><b>Empieza a ver tus solicitudes</b></h3>
        <div className="row justify-content-center mb-4">
          <div className="col-md-6">
            <input
              type="text"
              placeholder="¿Qué solicitud estás buscando?"
              value={searchTerm}
              onChange={handleSearch}
              className="form-control"
            />
          </div>
        </div>
        <div className="row">
          {filteredServices.map(service => (
            <div key={service.idServicio} className="col-md-4 mb-3">
              <div className="card" onClick={() => handleClick(service.nombreServicio)}>
                <div className="card-body">
                  <h5 className="card-title">{service.nombreServicio}</h5>
                  <p className="card-text">{service.count} solicitudes disponibles</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
