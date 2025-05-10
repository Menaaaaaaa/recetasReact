import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../assets/register.css";

export default function Register() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const password = watch("contrasena");
  const navigate = useNavigate();

  const onSubmited = async (data) => {
    try {
      const respuesta = await axios.post("http://localhost/loginApi/register", {
        nombre: data.nombre,
        correo: data.correo,
        contrasena: data.contrasena,
      });
      alert(respuesta.data.message);
      navigate("/Login");
    } catch (error) {
      console.error("Error en el registro:", error);
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h1 className="register-title">Formulario de registro</h1>

        <form onSubmit={handleSubmit(onSubmited)} className="register-form">

          <div>
            <label>Nombre de usuario</label>
            <input
              type="text"
              {...register("nombre", { required: true })}
            />
            {errors.nombre && <p className="error-text">Ingrese su nombre completo</p>}
          </div>

          <div>
            <label>Correo electrónico</label>
            <input
              type="email"
              {...register("correo", { required: true })}
            />
            {errors.correo && <p className="error-text">Ingrese un correo válido</p>}
          </div>

          <div>
            <label>Contraseña</label>
            <input
              type="password"
              {...register("contrasena", { required: true })}
            />
            {errors.contrasena && <p className="error-text">Ingrese una contraseña</p>}
          </div>

          <div>
            <label>Confirmar contraseña</label>
            <input
              type="password"
              {...register("confirmar_contrasena", {
                required: "Por favor confirme su contraseña",
                validate: (value) => value === password || "La contraseña no coincide"
              })}
            />
            {errors.confirmar_contrasena && (
              <p className="error-text">{errors.confirmar_contrasena.message}</p>
            )}
          </div>

          <button type="submit" className="register-button">Registrar</button>
          <a type="button" className="register"onClick={() => navigate("/login")}><p>¿Ya tienes cuenta?</p>Inicia seseión
          </a>
        </form>
      </div>
    </div>
  );
}
