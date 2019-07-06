
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom/';
import * as Yup from 'yup';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';

import { getDataWithQuery } from '../../../utils/api';
import storage from '../../../utils/storage';
import './LoginTeacher.css'




class LoginTeacher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      loginError: false,
      loggedIn: false,
      usernameValid:true,
      passwordValid:true,
    }

    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.checkUser = this.checkUser.bind(this);
    this.logIn = this.logIn.bind(this);
  }

  updateUsername({target}) {
    this.setState({username: target.value, loginError: false});
  }

  updatePassword({target}) {
    this.setState({password: target.value, loginError: false});
  }

  checkUser(userData) {
    if (userData && userData.length) {
      storage.store('user', userData[0]);
      this.setState({loggedIn: true});
      // console.log(storage.retreive('user'));
    } else {
      this.setState({loginError: true});
    }
  }

  logIn() {
  const usernameValidation = Yup.string().required().isValid(this.state.username);
  const passwordValidation = Yup.string().required().isValid(this.state.password);
  Promise.all([usernameValidation, passwordValidation])
    .then(([usernameValid, passwordValid]) => {
      this.setState({usernameValid, passwordValid});
      if (usernameValid && passwordValid) {
        getDataWithQuery('users', {...this.state}).then(this.checkUser);
      }
  });
}

  render() {
    let alert = null;
    if (this.state.loggedIn) {
      return (<Redirect to="teach/mainTeacher" />);
    }
    if (this.state.loginError) {
      alert = (<Alert variant="danger">Check password or username!</Alert>);
    }
    return (
      <Modal.Dialog>

        <Modal.Body className="recuadro">
          <h2> Login </h2>
          <Form.Group controlId="formUsername">
            <Form.Label className="etiq1">Username</Form.Label>
            <Form.Control
              className="formulario"
              type="text"
              placeholder="Username"
              value={this.state.username}
              onChange={this.updateUsername}
              isInvalid={!this.state.usernameValid}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label className="etiq1">Password</Form.Label>
            <Form.Control
              className="formulario"
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.updatePassword}
              isInvalid={!this.state.passwordValid}

            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button className="botonlo" type="button" onClick={this.logIn}>Enviar</Button>
        </Modal.Footer>
        {alert}
      </Modal.Dialog>
    );
  }
}

export default LoginTeacher;
