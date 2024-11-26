/*
Crea un componente SurveySimulator que tenga tres botones (Sí, No, Tal vez). Cada vez
que se haga clic en un botón, incrementa un contador asociado a esa respuesta y muestra
el total de votos por cada opción.
Objetivos: useState, manejo de varios estados.

Amplía el ejercicio 4 para que también calcule y muestre el porcentaje de votos para cada
opción en función del total de votos.
Objetivos: useState, cálculos derivados del estado.
*/
import {useState} from 'react';
export default function SurveySimulator(){
    const [votosSi, setVotosSi] = useState(0);
    const [votosNo, setVotosNo] = useState(0);
    const [votosTalVez, setVotosTalVez] = useState(0);
    let suma = votosSi + votosNo + votosTalVez;

  return <div>
    <p>Votos para Sí: {votosSi}{(suma > 0) && `, ${(votosSi * 100 / suma).toFixed(2)}%`}</p>
    <p>Votos para No: {votosNo}{(suma > 0) && `, ${(votosNo * 100 / suma).toFixed(2)}%`}</p>
    <p>Votos para Tal Vez: {votosTalVez}{(suma > 0) && `, ${(votosTalVez * 100 / suma).toFixed(2)}%`}</p>
    <div>
        <button onClick={() => setVotosSi(votosSi + 1)}>Sí</button>
        <button onClick={() => setVotosNo(votosNo + 1)}>No</button>
        <button onClick={() => setVotosTalVez(votosTalVez + 1)}>Tal Vez</button>
    </div>
  </div>  
}