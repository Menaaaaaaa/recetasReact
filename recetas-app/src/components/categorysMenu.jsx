import React from "react";
import { Link } from "react-router-dom";
import "../assets/categorysMenu.css";

export default function CategoryMenu() {
  return (
    <div className="category-menu">
      <Link
        className="category-btn"
        to="/Category/3"
        style={{ backgroundImage: "url('https://termosyeti.com/wp-content/uploads/2023/10/bebidas-alcoholicas.jpg')" }}
      >
        <span>Bebidas</span>
      </Link>
      <Link
        className="category-btn"
        to="/Category/2"
        style={{ backgroundImage: "url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/68/31/fa/que-delicia-una-john.jpg?w=600&h=400&s=1')" }}
      >
        <span>Comidas Rápidas</span>
      </Link>
      <Link
        className="category-btn"
        to="/Category/4"
        style={{ backgroundImage: "url('https://aprende.com/wp-content/uploads/2022/05/tomates-rellenos.jpg')" }}
      >
        <span>Entradas</span>
      </Link>
      <Link
        className="category-btn"
        to="/Category/5"
        style={{ backgroundImage: "url('https://lh5.googleusercontent.com/proxy/pUktEPOPAVX1I7_OQD-A3Bxq8GgopETbGWU0biIv7BPF1WAhEm7Jee3nfcAMfOa16FT0aDwxJhx0Unodk2aw7g2_MO5LJVfTP5_99NnmO4kpKLj-SFJeWGWt5QfwzgjptAs9A27N')" }}
      >
        <span>Platos Principales</span>
      </Link>
      <Link
        className="category-btn"
        to="/Category/1"
        style={{ backgroundImage: "url('https://hips.hearstapps.com/hmg-prod/images/fruit-tart-index-65ef54d972bb1.jpg?crop=0.505xw:1.00xh;0.495xw,0&resize=640:*')" }}
      >
        <span>Postres</span>
      </Link>
    </div>
  );
}
