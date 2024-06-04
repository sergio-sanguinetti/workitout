import React from 'react'
import '../boostrap.css';
import Sidebar from '../components/sidebar';

export default function Inicio() {
  return (
    <>
      <div className="row" style={{width:'80%'}}>
        <div className='col-md-12'>
            <center>
             <h3><b>Empieza a solicitar tus servicios</b></h3>
             </center>
             <video src="/inicio/video.mp4" autoPlay width={'100%'} height={'600px'} loop={true} ></video>
        </div>
      </div>
    </>
  )
}
