import React from "react";
import New from "./New";
import "../assets/news.css";

export default function News() {
  const secciones = [
    {
      titulo: "¿Qué tipo de recetas de cocina fáciles encontrarás?",
      descripcion: `Si eres de las personas que buscan recetas de cocina fáciles y rápidas de preparar en la cocina, 
      te presentaremos una variedad de recetas de cocina sencillas que podrás preparar sin complicaciones. 
      Encontrarás recetas para cualquier gusto y ocasión que te permitirán disfrutar de comidas caseras deliciosas en poco tiempo.`,
      recetas: [
        {
          image: "https://www.divinacocina.es/wp-content/uploads/2018/07/croquetas-de-espinacas-c.jpg",
          category: "ENTRANTES Y TAPAS",
          title: "CROQUETAS DE ESPINACAS, QUESO Y PIÑONES"
        },
        {
          image: "https://www.divinacocina.es/wp-content/uploads/2025/01/patatas-rellenas-de-huevo-v.jpg",
          category: "PAPAS RELLENAS",
          title: "PATATAS RELLENAS DE HUEVO"
        }
      ]
    },
    {
      titulo: "Las recetas que están de moda en Divina Cocina",
      descripcion: `En Divina Cocina te traemos las recetas más populares y en tendencia para que sorprendas en cada ocasión. Desde platos tradicionales reinventados hasta propuestas creativas y fáciles de preparar, nuestras recetas de moda te permitirán explorar nuevos sabores y técnicas en la cocina, siempre con ese toque especial que hace que tus platos sean irresistibles. ¡Descubre qué está marcando tendencia y anímate a probar algo nuevo!`,
      recetas: [
        {
          image: "https://www.divinacocina.es/wp-content/uploads/2019/06/BERENJENAS-RELLENAS-DIVINA-COCINA-FOTO.jpg",
          category: "RECETAS CON VERDURA Y CARNE",
          title: "CÓMO HACER BERENJENAS RELLENAS DE CARNE AL HORNO FÁCILES Y DELICIOSAS"
        },
        {
          image: "https://www.divinacocina.es/wp-content/uploads/panna-cotta-cobertura-chocolate.jpg",
          category: "POSTRES",
          title: "CÓMO HACER PANNA COTTA ITALIANA, LA RECETA ORIGINAL"
        }
      ]
    }
  ];

  return (
    <>
      {secciones.map((seccion, i) => (
        <section key={i} className="news-section">
          <h2 className="news-heading">{seccion.titulo}</h2>
          <p className="news-description">{seccion.descripcion}</p>
          <div className="news-grid">
            {seccion.recetas.map((receta, index) => (
              <New key={index} {...receta} />
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
