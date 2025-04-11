import React from 'react';
import '../assets/header.css';

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-top">
        <div className="header-logo">
          <img
            src="https://www.divinacocina.es/wp-content/uploads/2020/07/divina-cocina.png"
            alt="Divina Cocina"
          />
        </div>
        <h2>Recetas sencillas para alegrarte la vida</h2>
      </div>
    </header>
  );
}
