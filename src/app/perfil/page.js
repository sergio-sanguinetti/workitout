'use client';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { DOMAIN_BACK, DOMAIN_FRONT } from '../../../env';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Sidebar from '../components/sidebar';
import './profile.css';

{/* <img src="" alt="logo" class="img-fluid" style={{maxWidth:'50%',height:'auto'}}  /> */}

export default function ProfilePage() {
  const [user, setUser] = useState({
    name: 'Nombre Usuario',
    surname: 'Apellido Usuario',
    email: 'usuario@correo.com',
    profilePicture: '/profile.png',
    rating: 4.8,
  });
  const [editMode, setEditMode] = useState(false);

  const handleSave = () => {
    setEditMode(false);
    toast.success('Tus datos han sido actualizados correctamente.');
  };

  return (
    <>
      <ToastContainer />
      <Sidebar userName={user.name} userRating={user.rating} />
      <section className="profile-section" style={{marginTop:'10rem', marginBottom:'4rem'}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5">
              <h3>Configuración de tu Perfil</h3>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-7 col-lg-5">
              <div className="wrap">
                <div className="profile-img" style={{ backgroundImage: `url(${user.profilePicture})` }}></div>
                <div className="profile-wrap p-4 p-md-5">
                  <form>
                    <div className="form-group mt-3">
                      <label style={{ color: '#000' }}>Nombre</label>
                      <input
                        type="text"
                        className="form-control p-2"
                        value={user.name}
                        onChange={(e) => setUser({ ...user, name: e.target.value })}
                        disabled={!editMode}
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label style={{ color: '#000' }}>Apellido</label>
                      <input
                        type="text"
                        className="form-control p-2"
                        value={user.surname}
                        onChange={(e) => setUser({ ...user, surname: e.target.value })}
                        disabled={!editMode}
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label style={{ color: '#000' }}>Correo</label>
                      <input type="email" className="form-control p-2" value={user.email} disabled />
                    </div>
                    {editMode ? (
                      <button type="button" className="form-control btn btn-primary rounded submit px-3" onClick={handleSave}>Guardar</button>
                    ) : (
                      <button type="button" className="form-control btn btn-secondary rounded submit px-3" onClick={() => setEditMode(true)}>Editar</button>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
