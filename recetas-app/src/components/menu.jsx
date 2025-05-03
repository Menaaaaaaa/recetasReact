import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/header.css';

export default function Menu() {
  return (
    <nav className="main-nav">
      <ul className="nav-menu">
        <li className="active">
          <Link to="/" className="nav-link">INICIO</Link>
        </li>
        <li>
          <Link to="/Category" className="nav-link">CATEGORÍAS </Link>
        </li>
        <li>RECETAS PARA FREIDORA DE AIRE</li>
        <li>BLOG <span>v</span></li>
        <li>VÍDEO RECETAS</li>
        <li>RECETAS DE TEMPORADA </li>
      </ul>
      <div className="search-icon">🔍</div>
    </nav>
  );
}
