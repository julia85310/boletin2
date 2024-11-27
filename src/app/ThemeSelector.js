/*
Crea un componente ThemeSelector que permita al usuario elegir entre tres temas de
colores diferentes (claro, oscuro y colorido). Cambia el color de fondo del componente en
función del tema seleccionado.
Objetivos: useState, renderizado condicional.
*/
import {useImmer} from 'use-immer';
export default function ThemeSelector(){
  const [theme, updateTheme] = useImmer("Claro");

  const themeStyles = {
    Claro: { backgroundColor: "#ffffff", color: "#000000" },
    Oscuro: { backgroundColor: "#333333", color: "#ffffff" },
    Colorido: { backgroundColor: "#ffcccb", color: "#333333" },
  };

  function handleThemeChange(event) {
    updateTheme(event.target.value);
  }

  return (
    <div style={themeStyles[theme]}>
      <select value={theme} onChange={handleThemeChange}>
        <option value='Claro'>Claro</option>
        <option value='Oscuro'>Oscuro</option>
        <option value='Colorido'>Colorido</option>
      </select>
    </div>
  );
    
}