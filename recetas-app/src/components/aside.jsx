import React from "react";
import Recipes from "./recipes";
import Pagination from "./pagination";
import '../assets/aside.css';
import News from "./news";

export default function Aside() {
  const categorias = [
    "🍟 Freidora de Aire","🍞 Masas y panes","🥚 Huevos","🍲 Legumbres y cocidos","🍗 Pollo y aves","🍹 Bebidas","🥗 Ensaladas y Aliños","🍚 Arroces","🥣 Sopas y cremas","🦐 Pescados y mariscos","🧂 Salsas y guarniciones","🍳 Desayunos","🍢 Entrantes y tapas","🍝 Pastas","🥦 Verduras","🥩 Carne","🍰 Postres"
  ];
  

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
      <Recipes />
      <div className="categories-section">
        <h2 className="categories-title">Las mejores recetas de cocina caseras</h2>
          <p className="categories-description">
            Si estás buscando las mejores  <strong>recetas de cocina caseras</strong>,  has llegado al lugar adecuado. En Divina Cocina te mostraremos algunas de las recetas más populares y deliciosas que puedes hacer en la comodidad de tu hogar. Desde platos principales hasta postres, estas recetas son fáciles de seguir y seguramente impresionarán a tus amigos y familiares.
          </p>
        <div className="categories-list">
          {categorias.map((cat, index) => (
            <button key={index} className="category-button">
              {cat}
            </button>
          ))}
        </div>
      </div>
      <News/>
    </div>
  );
};
