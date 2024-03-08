import React, { useState } from 'react';
import CreateCopy from './CreateCopy';
import CreateInputContainer from './CreateInputContainer';
import CreateLoginContainer from './CreateLoginContainer';
import ComboBox from "./ComboBox";
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080';

const CreateForm = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Prepare the data in the format the backend expects
    const userData = {
      firstname: nombre,
      lastname: apellido,
      email: email,
      password: contraseña,
      role: role, // The role is converted to uppercase
    };

    try {
      // Send the POST request to the register endpoint
      const response = await axios.post(`${API_BASE_URL}/api/auth/register`, userData, {
        headers: {
          'Content-Type': 'application/json',
          // Include any additional headers like the Authorization header here
        },
      });

      console.log('Success:', response.data);
      
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CreateCopy id="welcome" />
        <CreateInputContainer label="Nombre" type="text" name="fname" id="fname" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        <CreateInputContainer label="Apellido" type="text" name="lname" id="lname" value={apellido} onChange={(e) => setApellido(e.target.value)} />
        <CreateInputContainer label="E-mail" type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <CreateInputContainer label="Contraseña" type="password" name="password" id="password" value={contraseña} onChange={(e) => setContraseña(e.target.value)} />

        <ComboBox
          label="Role"
          options={[
            { label: 'Admin', value: 'ADMIN' }, // Ensure options are in uppercase
            { label: 'User', value: 'USER' },
          ]}
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
        <CreateLoginContainer onSubmit={handleSubmit}/>
      </form>
    </>
  );
};

export default CreateForm;