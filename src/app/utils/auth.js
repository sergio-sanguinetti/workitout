'use '
import { useState, useEffect } from 'react';

function useToken() {
  const [Token, setToken] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token_WORK');

    console.log(token);

    if (token) {
      setToken(token);
    }
    
  }, []); // El array de dependencias está vacío para que useEffect solo se ejecute una vez al montar el componente

  return { Token };
}

export default useToken;

