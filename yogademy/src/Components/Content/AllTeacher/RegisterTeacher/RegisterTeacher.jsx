import React from 'react';

class Register extends React.Component {
  constructor(props){
    super(props);
    this.state={
      nombreusuario:'',
      contrasena:'',
      nombre:'',
      correo: '',
      nacimiento:'',
      estilo:'',
      foto:'',
      }
  }

  actualizaNombreusuario(event){

    let nombreusuarioNuevo = event.target.value;
    let nombreusuarioAnterior ={...this.state};
    nombreusuarioAnterior.nombreusuario = nombreusuarioNuevo;
    this.setState(nombreusuarioAnterior)

  }

  actualizaContrasena(event){

    let ContrasenaNuevo = event.target.value;
    let ContrasenaAnterior ={...this.state};
    ContrasenaAnterior.contrasena = ContrasenaNuevo;
    this.setState(ContrasenaAnterior)

  }

  actualizaNombre(event){

    let nombreNuevo = event.target.value;
    let nombreAnterior ={...this.state};
    nombreAnterior.nombre = nombreNuevo;
    this.setState(nombreAnterior)

  }

  actualizaCorreo(event){

    let correoNuevo = event.target.value;
    let correoAnterior ={...this.state};
    correoAnterior.correo = correoNuevo;
    this.setState(correoAnterior)

  }

  actualizaNacimiento(event){

    let nacimientoNuevo = event.target.value;
    let nacimientoAnterior ={...this.state};
    nacimientoAnterior.nacimiento = nacimientoNuevo;
    this.setState(nacimientoAnterior)

  }

  actualizaEstilo(event){

    let estiloNuevo = event.target.value;
    let estiloAnterior ={...this.state};
    estiloAnterior.estilo = estiloNuevo;
    this.setState(estiloAnterior)

  }

  actualizaFoto(event){

    let fotoNuevo = event.target.value;
    let fotoAnterior ={...this.state};
    fotoAnterior.foto = fotoNuevo;
    this.setState(fotoAnterior)

  }

  enviar(event){
    alert('usuario registrado');
  }

  render() {
    return(
      <div>
      <div>
        Nombre de usuario
          <input
          value = {this.state.nombreusuario}
          onChange = {(event) => this.actualizaNombreusuario(event)}>
          </input>
      </div>
      <div>
        Contraseña
          <input
          value = {this.state.contrasena}
          onChange = {(event) => this.actualizaContrasena(event)}>
          </input>
      </div>
        <div>
          Nombre
            <input
            value = {this.state.nombre}
            onChange = {(event) => this.actualizaNombre(event)}>
            </input>
        </div>
        <div>
          Correo
            <input
            value = {this.state.correo}
            onChange = {(event) => this.actualizaCorreo(event)}>
            </input>
        </div>
        <div>
          Año de nacimiento
            <input
            value = {this.state.nacimiento}
            onChange = {(event) => this.actualizaNacimiento(event)}>
            </input>
        </div>
        <div>
          Estilo de Yoga elegido
            <input
            value = {this.state.estilo}
            onChange = {(event) => this.actualizaEstilo(event)}>
            </input>
        </div>
        <div>
          Sube tu foto
            <input
            value = {this.state.foto}
            onChange = {(event) => this.actualizaFoto(event)}>
            </input>
        </div>
        <div>
        <button onClick
        >Enviar
        </button>
        </div>
      </div>
    );
  }
}
export default Register;
