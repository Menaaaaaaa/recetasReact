import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../assets/header.css';

export default function Menu() {
  const [search, setSearch] = useState('');
  const [resultados, setResultados] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const delay = setTimeout(() => {
      if (search.trim()) {
        buscarRecetas(search);
      } else {
        setResultados([]);
      }
    }, 400); // debounce
    return () => clearTimeout(delay);
  }, [search]);

  const buscarRecetas = async (nombre) => {
    try {
      const res = await axios.get(`http://localhost:3001/api/recetas?nombre=${encodeURIComponent(nombre)}`);
      setResultados(res.data);
    } catch (err) {
      console.error('Error al buscar:', err);
    }
  };

  const irADetalle = (id) => {
    setSearch('');
    setResultados([]);
    navigate(`/receta/${id}`);
  };

  return (
    <nav className="main-nav">
      <ul className="nav-menu">
        <li className="active"><Link to="/" className="nav-link">INICIO</Link></li>
        <li><Link to="/Category" className="nav-link">CATEGORÍAS</Link></li>
        <li>RECETAS PARA FREIDORA DE AIRE</li>
        <li>BLOG <span>v</span></li>
        <li>VÍDEO RECETAS</li>
        <li>RECETAS DE TEMPORADA</li>
      </ul>

      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar recetas...🍽️"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
        {resultados.length > 0 && (
          <ul className="resultados-rapidos">
            {resultados.map((r) => (
              <li key={r.receta_id} onClick={() => irADetalle(r.receta_id)} style={{ cursor: 'pointer' }}>
                {r.receta_nombre}
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}
