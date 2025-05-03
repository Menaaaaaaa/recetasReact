/* export default function Recipe({ info }) {
    if (!info) return null;
  
    return (
      <div className="recipe-card">
        <img src={info.image} alt={info.name} />
        <div className="recipe-card-content">
          <h4>{info.name}</h4>
          <div className="stars">⭐️⭐️⭐️⭐️⭐️</div>
          <p>Basado en {info.reviews} opiniones.</p>
        </div>
      </div>
    );
  }
   */
  import React from "react";

  export default function Recipe({ info }) {
    if (!info) return null;
  
    return (
      <div className="recipe-card">
        <img src={info.image || "https://via.placeholder.com/300"} alt={info.name} style={{ width: "100%", height: "300px" }} />
        <div className="recipe-card-content">
          <h4>{info.name}</h4>
          <div className="stars">⭐️⭐️⭐️⭐️⭐️</div>
          <p><strong>Descripción:</strong> {info.descripcion}</p>
          {info.tiempo && <p><strong>Tiempo:</strong> {info.tiempo} min</p>}
          {info.dificultad && <p><strong>Dificultad:</strong> {info.dificultad}</p>}
          {info.fecha && <p><strong>Fecha:</strong> {new Date(info.fecha).toLocaleDateString()}</p>}
          <p>Basado en {info.reviews} opiniones.</p>
        </div>
      </div>
    );
  }
  
  