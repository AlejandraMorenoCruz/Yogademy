import React from 'react';
import './MainStudent.css'
import Link from 'react-router-dom/Link';


const MainStudent = () => (
  <div className = "barraLateral">
  <tr>
    <lu>
      <Link to ="/study/mainStudent/teachers" className="links">
        <div>Maestros</div>  
      </Link>
    </lu>
    <lu>
      <Link to ="/study/mainStudent/mylessons" className="links" >
        <div>Mis lecciones</div>  
      </Link>
    </lu>
    <lu>
      <Link to ="/study/mainStudent/profile" className="links">
        <div>perfil</div>  
      </Link>
    </lu>
    <lu>
      <Link to ="/study" className="links">
        <div>Cerrar sesión</div>  
      </Link>
    </lu>     
  </tr>
    
  </div>

);
export default MainStudent;
