'use client';
import React, { useState,useEffect } from 'react';
import '../boostrap.css';
import Sidebar from '../components/sidebar';
import '../estilos/globales.css';
//import './visualizacion-solicitudes.css';

import { DOMAIN_FRONT,DOMAIN_BACK} from '../../../env';




export default function Inicio() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredServices, setFilteredServices] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


   // TRAER LAS SOLICITUDES
   const id_usuario = localStorage.getItem('id_usuarioWORK');
 
 useEffect(() => {
  // Fetch categories from the backend
  fetch(DOMAIN_BACK+'?controller=solicitudes&action=traer_solicitudes&idCliente='+id_usuario)
    .then(response => response.json())
    .then(data => {
      setFilteredServices(data)
    })
    .catch(error => console.error('Error al traer solicitud:', error));

}, []);



console.log(filteredServices);


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
            <div key={service.nombreServicio} className="card" onClick={() => handleClick(service.name)} style={{marginTop:"1rem"}}>
              <a href={'/visualizacion-solicitud-proceso-cliente/'+service.idSolicitud}>
              <div className="card-header">
                <h5 className="card-title">{service.nombreServicio}</h5>
                <p className="card-price">S/.{service.precio}</p>
                <p className="card-body">{service.descripcion}</p>
                <p className="card-footer">{service.ubicacion}</p>
                <p className="card-footer">{service.fechaHoraSolicitud}</p>
                <p className="card-footer">{service.estado}</p>
              </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
