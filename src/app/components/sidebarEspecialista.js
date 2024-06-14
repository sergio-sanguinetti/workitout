'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaHome, FaInfoCircle, FaBriefcase, FaQuestionCircle, FaEnvelope, FaChevronDown } from 'react-icons/fa';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import BuildIcon from '@mui/icons-material/Build';
import styles from './sidebar.module.css';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';


import './listaSidebar.css'
import '../estilos/globales.css'
import { DOMAIN_FRONT } from '../../../env';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsOpen(open);
  };
// style="max-width: 50%; height: auto;"
  const list = () => (
    <Box
      sx={{ width: 300 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
    <div class="row align-items-center text-center mt-3">
       <div class="col-md-5">
         <img src="/profile.png" alt="logo" class="img-fluid" style={{maxWidth:'50%',height:'auto'}}  />
         <h6>Nombre Apellido</h6>
       </div>
       <div class="col-md-7 marginLeft-rating">
         <Stack spacing={1} justifyContent="center" alignItems="center">
           <Rating name="size-medium" readOnly precision={0.5} defaultValue={5} />
  
         </Stack>
       </div>
     </div>

      <List>
       <Link href="/plataforma-especialista">
         <ListItem className="item-list">
           <ListItemIcon>
             <FaHome />
           </ListItemIcon>
           <ListItemText primary="Lista de Ofertas" />
         </ListItem>
       </Link>
       <Link href="/registro-de-especialista">
         <ListItem className="item-list">
           <ListItemIcon>
             <FaHome />
           </ListItemIcon>
           <ListItemText primary="Registro de Especialista" />
         </ListItem>
       </Link>
       <Link href="/registro-quejas">
         <ListItem className="item-list">
           <ListItemIcon>
             <FaBriefcase />
           </ListItemIcon>
           <ListItemText primary="Registro Quejas" />
         </ListItem>
       </Link>
       <Link href="#">
         <ListItem className="item-list">
           <ListItemIcon>
             <FaQuestionCircle />
           </ListItemIcon>
           <ListItemText primary="Historial" />
         </ListItem>
       </Link>
       <Link href="#">
         <ListItem className="item-list">
           <ListItemIcon>
             <FaEnvelope />
           </ListItemIcon>
           <ListItemText primary="Contacto" />
         </ListItem>
       </Link>
     </List>
      <Divider />
      <List>
       <Link href="/perfil">
         <ListItem className="item-list">
           <ListItemIcon>
           <InboxIcon />
           </ListItemIcon>
           <ListItemText primary="Perfil" />
         </ListItem>
       </Link>
       <Link href={DOMAIN_FRONT}>
         <ListItem className="item-list">
           <ListItemIcon>
             <BuildIcon />
           </ListItemIcon>
           <ListItemText primary="Cerrar Sesión" />
         </ListItem>
       </Link>
     </List>
    </Box>
  );

  return (
    <div>
      <Drawer anchor={'left'} open={isOpen} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
      <nav className={styles.navbar} style={{marginBottom:'4em'}}>
        <div className="logo">
          <img src="/logo_work.png" alt="logo" className={styles.logo}  width={'50%'}/>
        </div>
        <Button className={styles.clientButton}>
          <span style={{fontSize:'15px',backgroundColor:'#fff',color:'#000',borderRadius:'20px',padding:'10px 20px'}}  className={styles.clientText}>Especialista <FaChevronDown className={styles.downArrow} /></span>
          
        </Button>
        <ul style={{listStyle:'none'}}>
          <li style={{listStyle:'none'}}>
            <Button style={{fontSize:'25px',backgroundColor:'#fff',color:'#000'}} onClick={toggleDrawer(true)} className={styles.toggleButton}>
              {isOpen ? <FaTimes /> : <FaBars />}
            </Button>
          </li>
        </ul>
      </nav>
      <footer className={styles.footer}>
        <a href='/plataforma'><button  className={styles.footerButton}>Ofertas</button></a>
        <button className={styles.footerButton}>Mis solicitudes</button>
      </footer>
    </div>
  );
};

export default Sidebar;
