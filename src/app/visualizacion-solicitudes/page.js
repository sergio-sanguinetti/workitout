'use client';
import React, { useState } from 'react';
import '../boostrap.css';
import Sidebar from '../components/sidebar';
import '../estilos/globales.css';
//import './visualizacion-solicitudes.css';

const services = [
  {
    name: "Remodelación y construcción",
    price: "S/1000.00",
    description: "Renovación de departamentos y casas",
    location: "Av. Mariano melgar #304",
    date: "Hoy",
    state: "En proceso"
  },
  {
    name: "Limpieza",
    price: "S/80.00",
    description: "Lavado de carro",
    location: "Jose Galves #520",
    date: "Hoy",
    state: "Cancelado"
  },
  {
    name: "Asistencia doméstica",
    price: "1500.00",
    description: "Servicio de niñera",
    location: "Av. 12 de octubre #601 alto Selva Alegre",
    date: "Mañana",
    state: "Aceptada"
  }
  // Agrega más servicios según sea necesario
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
      <Sidebar isOpen={isSidebarOpen} toggleDrawer={toggleDrawer} />
      <div className="content" style={{marginTop:'10rem', marginLeft:'2rem', marginRight:'2rem', marginBottom:'4rem'}}>
        <h3 className='color-primary text-center'><b>Busca tus Solicitudes</b></h3>
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
        <div className="card-container" >
          {filteredServices.map(service => (
            <div key={service.name} className="card" onClick={() => handleClick(service.name)} style={{marginTop:"1rem"}}>
              <a href='/visualizacion-solicitud-proceso-cliente'>
              <div className="card-header">
                <h5 className="card-title">{service.name}</h5>
                <p className="card-price">{service.price}</p>
                <p className="card-body">{service.description}</p>
                <p className="card-footer">{service.location}</p>
                <p className="card-footer">{service.date}</p>
                <p className="card-footer">{service.state}</p>
              </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
