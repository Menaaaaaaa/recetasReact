
import React from "react";
import '../assets/aside.css';

export default function Aside () {
  return (
    <div>
    <header className="recipe-header">Divina Cocina – Recetas Fáciles</header>
    <aside className="recipe-aside">
    <img
      src="https://www.divinacocina.es/wp-content/uploads/2025/04/sepia-salteada-con-guisantes-c.jpg"
      alt="Sepia salteada con guisantes y verduras"
      className="recipe-image"
    />
    <h3 className="recipe-title">Sepia salteada con guisantes y verduras</h3>
    <div className="rating">
      <span>⭐️⭐️⭐️⭐️⭐️</span>
      <p className="opinions">Basado en <strong>1</strong> opiniones.</p>
    </div>
    </aside>
    </div>
  );
};
