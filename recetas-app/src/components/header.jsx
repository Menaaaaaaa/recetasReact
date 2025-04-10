import React from 'react';
import '../assets/header.css';

export default function Header() {
  return (
    <header>
      <div className="header-top">
        <h2>Recetas sencillas para alegrarte la vida</h2>
      </div>

      <nav className="main-nav">
        <ul className="nav-menu">
          <li className="active">INICIO</li>
          <li>CATEGORÍAS <span>v</span></li>
          <li>RECETAS PARA FREIDORA DE AIRE</li>
          <li>BLOG <span>v</span></li>
          <li>VÍDEO RECETAS</li>
          <li>RECETAS DE TEMPORADA <span>v</span></li>
        </ul>
        <div className="search-icon">
          🔍
        </div>
      </nav>
    </header>
  );
}

