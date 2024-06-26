'use client';

import React, { useState } from 'react';
import '../boostrap.css';
import SidebarEspecialista from '../components/sidebarEspecialista';
import '../estilos/globales.css';
import './platform-especialista.css';

export default function PlataformaEspecialista() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const services = [
    {
      name: "Remodelación y construcción",
      price: "S/1000.00",
      description: "Renovación de departamentos y casas",
      location: "Av. Mariano melgar #304",
      date: "Hoy"
    },
    {
      name: "Limpieza",
      price: "S/80.00",
      description: "Lavado de carro",
      location: "Jose Galves #520",
      date: "Hoy"
    },
    {
      name: "Asistencia doméstica",
      price: "1500.00",
      description: "Servicio de niñera",
      location: "Av. 12 de octubre #601 alto Selva Alegre",
      date: "Mañana"
    }
    // Agrega más servicios según sea necesario
  ];

  const [filteredServices, setFilteredServices] = useState(services);

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = services.filter(service =>
      service.name.toLowerCase().includes(term)
    );
    setFilteredServices(filtered);
  };

  /*const handleClick = (serviceName) => {
    alert(`You clicked on ${serviceName}`);
  };*/

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsSidebarOpen(open);
  };

  return (
    <>
      <SidebarEspecialista isOpen={isSidebarOpen} toggleDrawer={toggleDrawer} />
      <div className="content" style={{ maxWidth: '700px', margin: '9rem auto' }}>
        <h3 className='color-primary text-center'><b>Empieza a ver las ofertas que hay para ti</b></h3>
        <div className="row justify-content-center mb-4">
          <div className="col-md-6">
            <input
              type="text"
              placeholder="¿Qué estás buscando?"
              value={searchTerm}
              onChange={handleSearch}
              className="form-control"
            />
          </div>
        </div>
        <div className="card-container" >
          {filteredServices.map(services => (
            <div key={services.name} className="card" onClick={() => handleClick(services.name)} style={{marginTop:"1rem"}}>
              <a href='/visualizacion-ofertas'>
              <div className="card-header">
                <h5 className="card-title">{services.name}</h5>
                <p className="card-price">{services.price}</p>
                <p className="card-body">{services.description}</p>
                <p className="card-footer">{services.location}</p>
                <p className="card-footer">{services.date}</p>
              </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
