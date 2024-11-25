/*
Crea un componente SurveySimulator que tenga tres botones (Sí, No, Tal vez). Cada vez
que se haga clic en un botón, incrementa un contador asociado a esa respuesta y muestra
el total de votos por cada opción.
Objetivos: useState, manejo de varios estados.
*/
import {useState} from 'react';
export default function SurveySimulator(){
    const [votosSi, setVotosSi] = useState(0);
    const [votosNo, setVotosNo] = useState(0);
    const [votosTalVez, setVotosTalVez] = useState(0);
  return <div>
    <p>Votos para Sí: {votosSi}</p>
    <p>Votos para No: {votosNo}</p>
    <p>Votos para Tal Vez: {votosTalVez}</p>
    <div>
        <button onClick={() => setVotosSi(votosSi + 1)}>Sí</button>
        <button onClick={() => setVotosNo(votosNo + 1)}>No</button>
        <button onClick={() => setVotosTalVez(votosTalVez + 1)}>Tal Vez</button>
    </div>
  </div>  
}