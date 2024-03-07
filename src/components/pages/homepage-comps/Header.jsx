// Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from "../../../../public/images/multiservicios.png";

const Header = () => {
  return (
    <header className="text-gray-100 p-4 flex items-center justify-evenly h-full">
      <div className="flex items-center space-x-4">
        <Link to="/">
          <img
            src={logoImage}
            alt="Logo"
            className="h-15 max-h-16 max-w-32"
            style={{ filter: 'invert(100%)' }}
          />
        </Link>
        <nav className="flex space-x-4">
          <Link to="/registrate">Regístrate</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

