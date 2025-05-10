import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../assets/categoryRecipes.css";
import MenuNav from "../components/menuNav";
import Menu from "../components/menu";
import Header from "../components/header";
import Footer from "../components/footer";
import axios from "axios";

export default function CategoryRecipe({onLogout}) {
  const { id } = useParams();
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/recetas/categoria/${id}`);
        const data = response.data;
        setRecipes(data);

        if (data.length > 0) {
          setCategoryName(data[0].categoria);
        }
      } catch (err) {
        setError(err.message || "Error al obtener recetas");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [id]);

  if (loading) return <p className="status-msg">Cargando recetas...</p>;
  if (error) return <p className="status-msg">Error: {error}</p>;
  if (recipes.length === 0) return <p className="status-msg">No hay recetas para esta categoría.</p>;

  return (
    <>
      <MenuNav onLogout={onLogout}/>
      <Header />
      <Menu />
      <div className="category-recipe-container">
        <h2 className="category-title">Recetas de {categoryName}</h2>
        <div className="recipe-list">
          {recipes.map((receta) => (
            <div key={receta.receta_id} className="recipe-card">
              <div className="recipe-img-wrapper">
                <Link to={`/receta/${receta.receta_id}`}>
                  <img src={receta.imagen} alt={receta.receta_nombre} className="recipe-img" />
                </Link>
              </div>
              <div className="recipe-info">
                <h3>{receta.receta_nombre}</h3>
                <p><strong>Autor:</strong> {receta.autor}</p>
                <p><strong>Categoría:</strong> {receta.categoria}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}