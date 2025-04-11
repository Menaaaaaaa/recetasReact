import React from 'react';
import '../assets/content.css';

export default function Content() {
  const categorias = [
    {
      titulo: "Cocina Casera y Familiar",
      items: [
        "🍽️Recetas de la abuela", "🍽️Patatas", "🍽️Pollo y aves", "🍽️Desayunos", "🍽️Niños",
        "🍽️Platos de cuchara", "🍽️Guisos marineros", "🍽️Guisos de carne", "🍽️Cocina regional",
        "🍽️Recetas andaluzas", "🍽️Pescado frito", "🍽️Con queso"
      ]
    },
    {
      titulo: "Postres y Repostería",
      items: [
        "🧁Postres con chocolate", "🧁Postres con fruta", "🧁Recetas de repostería", "🧁Postres light",
        "🧁Postres sin gluten", "🧁Postres sin horno", "🧁Postres tradicionales", "🧁Postres", "🧁Galletas", "🧁Vasitos dulces"
      ]
    },
    {
      titulo: "Cocina Fácil y Rápida",
      items: [
        "🥐Cenas rápidas", "🥐Recetas rápidas", "🥐Cocina para llevar", "🥐Microondas",
        "🥐Platos fríos", "🥐Patés y cremas para untar", "🥐Cocina sin humos", "🥐Thermomix",
        "🥐Olla GM", "🥐Sándwiches y bocadillos"
      ]
    },
    {
      titulo: "Recetas Light y Cocina Sana",
      items: [
        "🥗Platos light", "🥗Cenas light", "🥗Cocina sana", "🥗Vegetariana", "🥗Vegana",
        "🥗Sin lactosa", "🥗Sin gluten", "🥗Ensaladas de legumbres", "🥗Recetas para freidora de aire | Airfryer"
      ]
    },
    {
      titulo: "Recetas para Invitados",
      items: [
        "🍡Bocaditos para fiestas", "🍡Buffet frío de fiesta", "🍡 y pinchos", "🍡Platos para compartir",
        "🍡Brunch", "🍡Finger food", "🍡Salados", "🍡Ensaladillas"
      ]
    },
    {
      titulo: "Recetas del Mundo",
      items: [
        "🌍Árabe", "🌍Cocina asiática", "🌍Cocina mediterránea", "🌍Cocina europea",
        "🌍Platos del mundo", "🌍Americana"
      ]
    }
  ];

  return (
    <div className="categorias-container">
      {categorias.map((categoria, idx) => (
        <div key={idx} className="categoria-bloque">
          <div className="categoria-titulo">{categoria.titulo}</div>
          <div className="categoria-items">
            {categoria.items.map((item, i) => (
              <button key={i} className="categoria-tag">{item}</button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
