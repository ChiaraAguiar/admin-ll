import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Forms from '../components/Forms';

const Menus = () => {
  const [ msj, setMsj ] = useState("espera estoy cargandome")
  useEffect(()=>{
    axios.get("http://localhost:8000/api")
        .then(res=>setMsj(res.data.msj))       
  }, []);
  return (
    <div>
      <Forms />
    </div>
  )
}

export default Menus;