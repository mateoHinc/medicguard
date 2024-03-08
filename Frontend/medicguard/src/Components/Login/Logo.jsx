import React from 'react';
import logo from './Css/Logo.png';

const Logo = () => {
  return (
    <>
      <div className="logo">
        <img src={logo} alt="MedicGuard Logo" className="logoimg" />
      </div>
    </>
  );
};

export default Logo;
