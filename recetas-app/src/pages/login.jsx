import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../assets/login.css'; // Asegúrate que esta ruta es correcta

export default function Login({ onLogin }) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmited = async (data) => {
    try {
      const respuesta = await axios.post("http://localhost/loginApi/login", data);
      alert("Bienvenido: " + respuesta.data.nombre);
      onLogin(respuesta.data.nombre);
      navigate("/home");
    } catch (error) {
      console.log(error);
      alert("El usuario y/o contraseña es incorrecto o no existe");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">DIVINA COCINA</h1>
        <p className="login-subtitle">Recetas sencillas para alegrarte la vida</p>

        <form onSubmit={handleSubmit(onSubmited)}>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              {...register("correo", { required: true })}
            />
            {errors.correo && <p className="error-text">Ingresa una dirección de correo válida</p>}
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              {...register("contrasena", { required: true })}
            />
            {errors.contrasena && <p className="error-text">Debes escribir una contraseña</p>}
          </div>

          <button type="submit" className="login-button">Ingresar</button>
          <a type="button" className="register"onClick={() => navigate("/register")}><p>¿No tienes cuenta?</p>Registrate
          </a>
        </form>
      </div>
    </div>
  );
}
