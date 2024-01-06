import { useState } from "react";
import "../styles/formulario.css";
import "../styles/inputStyle.css";
import "../styles/boton.css";
import "../styles/errorMessage.css";

export const RegistroUsuario = () => {
  // Estados para los valores del formulario y mensajes de error
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación básica
    const errors = {};

    if (!nombre.trim()) {
      errors.nombre = "El nombre es obligatorio";
    }

    if (!email.trim()) {
      errors.email = "El correo electrónico es obligatorio";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Ingresa un correo electrónico válido";
    }

    if (!password.trim()) {
      errors.password = "La contraseña es obligatoria";
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = "Las contraseñas no coinciden";
    }

    // Actualizar los mensajes de error
    setErrorMessages(errors);

    if (Object.keys(errors).length === 0) {
      console.log("Formulario enviado correctamente");
      setearForm();
    }
  };

  const setearForm = () => {
    setNombre("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <>
      <h1>Registrate</h1>

      <p>Ingresa tus datos para crearte una cuenta</p>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            placeholder="Ingrese su nombre"
            name="nombre"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <p className="error-message">{errorMessages.nombre}</p>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Ingrese su email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="error-message">{errorMessages.email}</p>
        </div>
        <div>
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            placeholder="Ingrese su contraseña"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="error-message">{errorMessages.password}</p>
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirmar Contraseña</label>
          <input
            type="password"
            placeholder="Confirme su contraseña"
            name="confirmPassword"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <p className="error-message">{errorMessages.confirmPassword}</p>
        </div>

        <button type="submit">Registrar</button>
      </form>
    </>
  );
};
