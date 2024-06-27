'use client';
import React, { useState,useEffect} from 'react';
import Sidebar from '../../components/sidebar';
import '../DetalleSolicitud.css';
import { DOMAIN_FRONT,DOMAIN_BACK } from '../../../../env';


const DetalleSolicitud = ({params}) => {

    const id_solicitud = params.id_solicitud;

  const [solicitud, setSolicitud] = useState({
    categoria: '',
    estado: '',
    precio: '',
    descripcion: '',
    fechaHora: '',
    numeroSolicitud: '',
    direccion: ''
  });


  // TRAER LAS SOLICITUD 

 
  useEffect(() => {
    // Fetch categories from the backend
    fetch(DOMAIN_BACK+'?controller=solicitudes&action=traer_solicitud&idSolicitud='+id_solicitud)
      .then(response => response.json())
      .then(data => {
        setSolicitud({
            idSolicitud: data.idSolicitud,
            categoria: data.nombreServicio,
            estado: data.estado,
            precio: data.precio,
            descripcion: data.descripcion,
            fechaHora: data.fechaHoraSolicitud,
            numeroSolicitud:data.idSolicitud,
            direccion: data.ubicacion
          });
      })
      .catch(error => console.error('Error al traer solicitud:', error));

  }, []);


  console.log(id_solicitud);
  console.log(solicitud);




  return (
    <>
      <Sidebar />
      <section className="profile-section"style={{marginTop:'2rem'}}>
        <div className="container" style={{marginTop:'1rem', marginBottom:'4rem'}}>
        <div className="row justify-content-center">
            <div className="col-md-7 col-lg-5">
              <div className="wrap">
                <div className="profile-wrap p-4 p-md-5">
                  <div className="col-md-12 text-center mb-5">
                    <h3 className="form-title">Detalles de la solicitud</h3>
                  </div>
                  <div className="detalle-solicitud">
                    <div className="estado-solicitud">
                      <div className="estado-header">
                        <h5>{solicitud.categoria}</h5>
                        <span className="estado-badge">{solicitud.estado}</span>
                      </div>
                      <button className="estado-button">Pasos a seguir</button>
                    </div>
                    <div className="detalle-precio">
                      <span className="precio">S/. {solicitud.precio}</span>
                      <span className="metodo-pago">Efectivo</span>
                    </div>
                    <div className="detalle-info">
                      <h6>Descripción</h6>
                      <p>{solicitud.descripcion}</p>
                    </div>
                    <div className="detalle-info">
                      <h6>Fecha y hora</h6>
                      <p>{solicitud.fechaHora}</p>
                    </div>
                    <div className="detalle-info">
                      <h6>Número de solicitud</h6>
                      <p>#000{solicitud.numeroSolicitud}</p>
                    </div>
                    <div className="detalle-info">
                      <h6>Dirección</h6>
                      <p>{solicitud.direccion}</p>
                    </div>
                    <a href={'/modificar-solicitud-cliente/'+solicitud.idSolicitud}><button className="btn btn-primary form-control">Cambiar la solicitud</button></a>
                    <a href='/valoracion-cliente'><button className="btn btn-primary form-control">Finalizar Solicitud</button></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetalleSolicitud;
