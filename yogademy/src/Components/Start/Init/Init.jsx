import React from 'react';
import Link from 'react-router-dom/Link';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Start from '../Start'
import './Init.css'
const Init = () => (

      <div className = "recuadro">
        <Link to ="/login" >
          <Button className="boton1" type="button" onClick="">Login</Button>
        </Link>
        <Link to ="/clases" >
        <Button className="boton2" type="button" onClick="">Registro</Button>
        </Link>
      </div>
);


export default Init;
