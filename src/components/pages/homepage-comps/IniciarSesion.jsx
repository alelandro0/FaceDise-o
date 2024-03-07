import React, { useState } from 'react';
import Header from '../homepage-comps/Header';

 export const IniciarSesion = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('option1');

  const handleLogin = () => {
    // Aquí puedes agregar la lógica de inicio de sesión, como enviar los datos al servidor.
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('User Type:', userType);
  };

  return (
    <>
     <div className="">
        <Header/>  
    </div>
    <div className="flex items-center justify-center h-screen">  

      <div className="relative max-w-md w-full mx-auto p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">Iniciar Sesión</h2>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-purple-600"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-purple-600"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="userType" className="block text-gray-700 text-sm font-bold mb-2">
            Tipo de Usuario
          </label>
          <select
            id="userType"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-purple-600"
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
          >
            <option value="option1">Usuario</option>
            <option value="option2">Profesional</option>
          </select>
        </div>

        <button
          onClick={handleLogin}
          className="w-full bg-purple-600 text-white p-2 rounded hover:bg-purple-700 focus:outline-none"
        >
          Iniciar Sesión
        </button>
      </div>
    </div>
    </>
  );
};


