import React from 'react'
import '../boostrap.css';
import Sidebar from '../components/sidebar';
import '../estilos/globales.css'

export default function Inicio() {
  return (
    <>
       <Sidebar />
      <div className="row" style={{minWidth:'80%'}}>
         <div className='col-md-12'>
            <center>
             <h3 className='color-primary mt-5'><b>Empieza a solicitar tus servicios</b></h3>
               <video src="/inicio/video.mp4" autoPlay width={'100%'} height={'600px'} loop={true} ></video>
             </center>
        </div>
      </div>
    </>
  )
}
