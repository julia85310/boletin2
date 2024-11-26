/*
Crea un componente GuessTheNumber donde el usuario intente adivinar un número entre 1
y 100. Muestra si el número ingresado es demasiado alto o bajo, y cuántos intentos lleva.
Objetivos: useState, validación, lógica condicional.
*/
import {useState} from 'react';
export default function GuessTheNumber(){
  const [theNumber, setTheNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [inputValue, setInputValue] = useState('');
  const [mensajeEstadoIntento, setMensajeEstadoIntento] = useState('');
  const [numIntentos, setNumIntentos] = useState(0);

  function tryNumber(){
    if(inputValue == theNumber){
      setMensajeEstadoIntento('Has acertado el número');
    }else if (inputValue > theNumber){
      setMensajeEstadoIntento('El número que buscas es menor');
    }else{
      setMensajeEstadoIntento('El número que buscas es mayor');
    }
    setNumIntentos(numIntentos + 1);
    setInputValue('');
  }

  return <div>
    <p>Adivina el número de 1 a 100</p>
    <input type='number' placeholder='Prueba un número' value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
    <button onClick={tryNumber}>Intentar</button><br></br>
    <button onClick={() => {setTheNumber(Math.floor(Math.random() * 100) + 1); setMensajeEstadoIntento('');}}>Cambiar número</button>
    <p>{mensajeEstadoIntento}</p>
  </div>
}