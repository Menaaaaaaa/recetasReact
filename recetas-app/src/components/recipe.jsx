import React from "react";
import "../assets/recipes.css";

export default function Recipe() {
  return (
    <div className="aside">
      <div className="list">
        <div className="item">
          <div className="link">
            <div className="text-wrapper">ÁRABE</div>
          </div>
        </div>

        <div className="link-wrapper">
          <div className="div-wrapper">
            <div className="div">COCINA ASIÁTICA</div>
          </div>
        </div>

        <div className="item-2">
          <div className="link-2">
            <div className="text-wrapper-2">COCINA MEDITERRÁNEA</div>
          </div>
        </div>

        <div className="item-3">
          <div className="link-3">
            <div className="text-wrapper-3">COCINA EUROPEA</div>
          </div>
        </div>

        <div className="item-4">
          <div className="link-4">
            <div className="text-wrapper-4">PLATOS DEL MUNDO</div>
          </div>
        </div>

        <div className="item-5">
          <div className="link-5">
            <div className="text-wrapper-5">AMERICANA</div>
          </div>
        </div>
      </div>

      <div className="heading">
        <div className="text-wrapper-6">RECETAS DEL MUNDO</div>
      </div>
    </div>
  );
};
