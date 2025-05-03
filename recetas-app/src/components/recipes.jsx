/* import React from "react";
import Recipe from "./recipe"; 
import "../assets/recipe.css";

const recipesOptions = [
  {
    name: "Todo sobre la gilda y 7 recetas de gildas caseras",
    rating: 5,
    reviews: 1,
    image: "https://www.divinacocina.es/wp-content/uploads/2025/03/gildas-caseras-de-anchoas-ccc.jpg"
  },
  {
    name: "Salmón a la naranja (o mandarina)",
    rating: 5,
    reviews: 2,
    image: "https://www.divinacocina.es/wp-content/uploads/2025/03/salmon-a-la-naranja-o-mandarina-v.jpg"
  }, 
  {
    name: "Ensalada de sepia al estilo de Huelva",
    rating: 5,
    reviews: 1,
    image: "https://www.divinacocina.es/wp-content/uploads/2025/04/ensalada-de-sepia-vv-1.jpg"
  },
  {
    name: "Sopa pastina italiana",
    rating: 5,
    reviews: 1,
    image: "https://www.divinacocina.es/wp-content/uploads/2025/04/sopa-pastina-italiana-c.jpg"
  },
  {
    name: "Pudin de mandarina con chía",
    rating: 5,
    reviews: 2,
    image: "https://www.divinacocina.es/wp-content/uploads/2025/03/pudin-de-mandarina-y-chia-c.jpg"
  },
  {
    name: "Guiso de carcamusas de Toledo",
    rating: 5,
    reviews: 1,
    image: "https://www.divinacocina.es/wp-content/uploads/2025/03/carcamusas-toledanas-v.jpg"
  },{
    name: "Natillas de mandarina y jengibre",
    rating: 5,
    reviews: 2,
    image: "https://www.divinacocina.es/wp-content/uploads/2025/03/natillas-de-mandarina-y-jengibre-cc.jpg"
  },
  {
    name: "Panna Cotta de yogur con salsa de naranja",
    rating: 5,
    reviews: 1,
    image: "https://www.divinacocina.es/wp-content/uploads/2025/03/panna-cotta-de-yogur-cc.jpg"
  },{
    name: "Carpaccio de remolacha con burrata",
    rating: 5,
    reviews: 2,
    image: "https://www.divinacocina.es/wp-content/uploads/2017/06/carpaccio-de-remolacha-con-burrata.jpg"
  },
  {
    name: "Shawarma de pollo con salsa de yogur",
    rating: 5,
    reviews: 2,
    image: "https://www.divinacocina.es/wp-content/uploads/2025/02/shawarma-de-pollo-con-salas-de-yogur-vv.jpg"
  },
];

export default function Recipes() {
  return (
    <div className="recipe-container">
      <div className="recipe-grid">
        {recipesOptions.map((r, i) => (
          <Recipe key={i} info={r} />
        ))}
      </div>
    </div>
  );
}

 */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Recipe from "./recipe";
import Pagination from "./pagination";
import "../assets/recipe.css";

function useQuery() {
  const { search } = useLocation();
  return new URLSearchParams(search);
}

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  const recipesPerPage = 6;
  const query = useQuery();
  const navigate = useNavigate();

  const currentPage = parseInt(query.get("page")) || 1;

  useEffect(() => {
    axios.get("http://localhost:3001/api/recetas")
      .then((response) => {
        setRecipes(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener recetas:", error);
        setLoading(false);
      });
  }, []);

  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);
  const totalPages = Math.ceil(recipes.length / recipesPerPage);

  // ✅ Redirige a la primera página si el parámetro es inválido
  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      navigate("?page=1");
    }
  }, [currentPage, totalPages, navigate]);

  if (loading) return <p>Cargando recetas...</p>;

  return (
    <div className="recipe-container">
      <div className="recipe-grid">
        {currentRecipes.map((r) => (
          <Recipe
            key={r.receta_id}
            info={{
              id: r.receta_id,
              name: r.receta_nombre,
              descripcion: r.ingredientes,
              image: r.imagen,
              reviews: 10
            }}
          />
        ))}
      </div>
      <div className="pagination-wrapper">
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
      />
      </div>
    </div>
  );
}

