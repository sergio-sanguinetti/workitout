'use client';

import React, { useState } from 'react';
import '../boostrap.css';
import Sidebar from '../components/sidebar';
import '../estilos/globales.css';

const services = [
  { name: "Remodelación y construcción", count: 1199 },
  { name: "Limpieza", count: 569 },
  { name: "Asistencia doméstica", count: 838 },
  { name: "Reparación e instalación de equipos", count: 456 },
  { name: "Taller de carro, moto o cicla", count: 656 },
  { name: "Maquinaria especial", count: 11 },
  { name: "Servicios profesionales", count: 749 },
  { name: "Servicios de belleza", count: 332 }
];

export default function Inicio() {
 
 


  const [searchTerm, setSearchTerm] = useState('');
  const [filteredServices, setFilteredServices] = useState(services);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = services.filter(service =>
      service.name.toLowerCase().includes(term)
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
            <div key={service.name} className="col-md-4 mb-3">
              <div className="card" onClick={() => handleClick(service.name)}>
                <div className="card-body">
                  <h5 className="card-title">{service.name}</h5>
                  <p className="card-text">{service.count} especialistas</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </>
  );
}

