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
import styles from './sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsOpen(open);
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['Inicio', 'Registro de Solicitud', 'Registro Quejas', 'Historial', 'Contacto'].map((text, index) => (
          <Link href={`/${text.toLowerCase()}`} key={text}>
            <ListItem button>
              <ListItemIcon>
                {index === 0 && <FaHome />}
                {index === 1 && <FaInfoCircle />}
                {index === 2 && <FaBriefcase />}
                {index === 3 && <FaQuestionCircle />}
                {index === 4 && <FaEnvelope />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        {['Perfil', 'Configuraciones'].map((text, index) => (
          <Link href={`/${text.toLowerCase()}`} key={text}>
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <BuildIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer anchor={'left'} open={isOpen} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
      <nav className={styles.navbar}>
        <div className="logo">
          <img src="/logo_work.png" alt="logo" className={styles.logo} />
        </div>
        <Button className={styles.clientButton}>
          <span className={styles.clientText}>Cliente</span>
          <FaChevronDown className={styles.downArrow} />
        </Button>
        <ul>
          <li>
            <Button onClick={toggleDrawer(true)} className={styles.toggleButton}>
              {isOpen ? <FaTimes /> : <FaBars />}
            </Button>
          </li>
        </ul>
      </nav>
      <footer className="footer">
        <button className="footerButton">Servicios</button>
        <button className="footerButton">Mis solicitudes</button>
      </footer>
    </div>
  );
};

export default Sidebar;
