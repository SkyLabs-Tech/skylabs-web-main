import React, { useState } from "react";
import "./Features.css";
import { FaPlane, FaDatabase, FaCog, FaCode } from "react-icons/fa";

const Features = () => {
  // Estado para alternar entre icono y texto en cada botón
  const [toggledButtons, setToggledButtons] = useState([false, false, false, false]);

  // Lista de iconos, colores y textos para cada botón
  const featuresData = [
    { icon: FaPlane, color: "purple", text: "Tailored Customer Solutions" },
    { icon: FaDatabase, color: "blue", text: "Design & Agile Development Planning" },
    { icon: FaCog, color: "purple", text: "Innovating Development Processes" },
    { icon: FaCode, color: "blue", text: "Available Apps Information" },
  ];

  // Función para alternar entre icono y texto
  const handleClick = (index) => {
    const updatedState = [...toggledButtons];
    updatedState[index] = !updatedState[index]; // Invierte el estado del botón clickeado
    setToggledButtons(updatedState);
  };

  return (
    <div className="icons-container">
      {featuresData.map((feature, index) => {
        const IconComponent = feature.icon;
        return (
          <div
            key={index}
            className={`icon-circle ${toggledButtons[index] ? feature.color : ""}`}
            onClick={() => handleClick(index)}
          >
            {toggledButtons[index] ? (
              <p className="button-text">{feature.text}</p> // Muestra el texto si está activado
            ) : (
              <IconComponent className={`icon ${feature.color}`} /> // Muestra el icono si está desactivado
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Features;
