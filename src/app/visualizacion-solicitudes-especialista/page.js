'use client';
import React, { useState, useEffect } from 'react';
import Sidebar from '../components/sidebarEspecialista.js';
import './visualizacion-solicitudes-especialista.css';

const historialServicios = [
  {
    nombreCliente: "Juan Pérez",
    servicio: "Mascotas",
    descripcion: "Servicio de bañado a poddle (raza mediana)",
    direccion: "Av. Arequipa #520",
    fecha: "2023-02-14", 
    estado: "EFECTIVO"
  },
  {
    nombreCliente: "Ana García",
    servicio: "Mascotas",
    descripcion: "Servicio de bañado a Rottweiler (raza grande)",
    direccion: "Av. Arequipa #520",
    fecha: "2024-03-24", 
    estado: "VAPE"
  },
  {
    nombreCliente: "Carlos Ruiz",
    servicio: "Limpieza",
    descripcion: "Servicio limpieza a local",
    direccion: "Av. Arequipa #520",
    fecha: "2024-02-03", 
    estado: "EFECTIVO"
  },
  {
    nombreCliente: "María López",
    servicio: "Reparación",
    descripcion: "Servicio de reparación de tuberia",
    direccion: "Av. Arequipa #520",
    fecha: "2024-06-13", 
    estado: "EFECTIVO"
  },
  {
    nombreCliente: "Juan Pérez",
    servicio: "Mascotas",
    descripcion: "Servicio de bañado a poddle (raza mediana)",
    direccion: "Av. Arequipa #520",
    fecha: "2024-05-05", 
    estado: "EFECTIVO"
  }
];

const Page = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDate, setFilterDate] = useState('');
  const [filteredServicios, setFilteredServicios] = useState(historialServicios);

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    filterServices(term, filterDate);
  };

  const handleDateFilter = (event) => {
    const date = event.target.value;
    setFilterDate(date);
    filterServices(searchTerm, date);
  };

  const filterServices = (term, date) => {
    const filtered = historialServicios.filter(service =>
      service.servicio.toLowerCase().includes(term) &&
      service.fecha.includes(date)
    );
    setFilteredServicios(filtered);
  };

  return (
    <>
      <Sidebar />
      <div className="content">
        <h3 className="text-center">Historial de Servicios</h3>
        <div className="filters">
          <input
            type="text"
            placeholder="Buscar servicio..."
            value={searchTerm}
            onChange={handleSearch}
            className="form-control"
          />
          <input
            type="date"
            value={filterDate}
            onChange={handleDateFilter}
            className="form-control"
          />
        </div>
        <div className="historial-list">
          <a href='/visualizacion-solicitud-proceso-especialista'>
          {filteredServicios.map((servicio, index) => (
            <div key={index} className="historial-item">
              <h4>{servicio.servicio}</h4>
              <p>Nombre de cliente: {servicio.nombreCliente}</p>
              <p>Descripción: {servicio.descripcion}</p>
              <p>Dirección: {servicio.direccion}</p>
              <p>Fecha: {servicio.fecha}</p>
              <p>Estado: {servicio.estado}</p>
            </div>
          ))}
          </a>
        </div>
      </div>
    </>
  );
};

export default Page;
