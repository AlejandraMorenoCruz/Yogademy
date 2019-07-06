import React from 'react';
import Link from 'react-router-dom/Link';
import Button from 'react-bootstrap/Button';
import './Init.css'
const Init = () => (

      <div className = "recuadro">
        <Link to ="/teach" >
          <Button className="boton1" type="button" onClick="">Maestros</Button>
        </Link>
        <Link to ="/study" >
        <Button className="boton2" type="button" onClick="">Alumnos</Button>
        </Link>
      </div>
);


export default Init;
