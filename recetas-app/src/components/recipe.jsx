export default function Recipe({ info }) {
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
  