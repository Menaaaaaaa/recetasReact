import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MenuNav from "../components/menuNav";
import Header from "../components/header";
import Footer from "../components/footer";
import Menu from "../components/menu";
import "../assets/recipeDetails.css";
import axios from "axios";

export default function RecipeDetail({onLogout}) {
  const { id } = useParams();
  const [receta, setReceta] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/recetas");
        const data = response.data;
        const selected = data.find((r) => r.receta_id === parseInt(id));
        if (!selected) throw new Error("Receta no encontrada");
        setReceta(selected);
      } catch (err) {
        setError(err.message || "Error al obtener la receta");
      }
    };

    getRecipes();
  }, [id]);

  if (error) return <p>Error: {error}</p>;
  if (!receta) return <p>Cargando receta...</p>;

  return (
    <>
      <MenuNav onLogout={onLogout}/>
      <Header />
      <Menu />
      <h2 className="recipe-title">{receta.receta_nombre}</h2>
      <div className="recipe-details-container">
        <img
          src={receta.imagen}
          alt={receta.receta_nombre}
          className="detail-img"
        />
        <p><strong>Autor:</strong> {receta.autor}</p>
        <p><strong>Categoría:</strong> {receta.categoria}</p>
        <p><strong>Preparación:</strong> Detrás de cada receta que encuentras en esta aplicación hay una historia, una tradición y un inmenso cariño por compartir. Hemos creado este espacio con el firme compromiso de aportar valor a nuestra comunidad, llevando hasta tu hogar sabores que reconfortan, inspiran y unen.

        Cada ingrediente ha sido seleccionado con cuidado, cada paso explicado con detalle, porque creemos que la cocina es un acto de amor. No solo alimentamos el cuerpo, sino que tejemos lazos, recordamos nuestras raíces y construimos momentos inolvidables alrededor de una mesa.

        Gracias por ser parte de este proyecto hecho con pasión, respeto y entrega. Esperamos que disfrutes tanto de estas recetas como nosotros disfrutamos al compartirlas contigo.</p>
      </div>
      <Footer />
    </>
  );
}