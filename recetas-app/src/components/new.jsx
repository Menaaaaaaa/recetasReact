import React from "react";

export default function New({ image, category, title }) {
  return (
    <div className="news-card">
      <img src={image} alt={title} />
      <div className="news-overlay">
        <div className="news-category">{category}</div>
        <div className="news-title">{title}</div>
      </div>
    </div>
  );
}
