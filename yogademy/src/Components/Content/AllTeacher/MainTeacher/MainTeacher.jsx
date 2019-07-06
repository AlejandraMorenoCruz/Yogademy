import React from 'react'

import './MainTeacher.css'
import Link from 'react-router-dom/Link';
import Button from 'react-bootstrap/Button';
import Student from '../Students/Students'


const MainTeacher = (props) => (
  
  <div className = "barraLateral">
      <tr>
        <lu>
          <Link to ="/teach/mainTeacher/Students" className="links">
            <div>Mis alumnos</div>  
          </Link>
        </lu>
        <lu>
          <Link to ="/teach/mainTeacher/lessons" className="links" >
            <div>Lecciones</div>  
          </Link>
        </lu>
        <lu>
          <Link to ="/teach/mainTeacher/Activity" className="links">
            <div>Actividad registrada</div>  
          </Link>
        </lu>
        <lu>
          <Link to ="/teach/mainTeacher/Profile" className="links">
            <div>Perfil</div>  
          </Link>
        </lu>
        <lu>
          <Link to ="/teach" className="links">
            <div>Cerrar sesión</div>  
          </Link>
        </lu>     
      </tr>
        
      </div>
    
);

export default MainTeacher;

