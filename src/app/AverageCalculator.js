/*
Crea un componente AverageCalculator que tome un número indefinido de calificaciones
(ingresadas por el usuario) y calcule el promedio. Muestra las calificaciones ingresadas y el
promedio calculado.
Objetivos: useState, manejo de arrays.
*/
import {useState} from 'react';
export default function AverageCalculator(){
    const [calificaciones, setCalificaciones] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [suma, setSuma] = useState(0);

    function handleNewCalificacion(){
        setCalificaciones([
            ...calificaciones,
            inputValue
        ]);
        setSuma(parseInt(suma) + parseInt(inputValue));
        setInputValue('');
    }
    
    
    return <div>
        {calificaciones.length > 0 &&
        <span>
            <h2>Calificaciones introducidas:</h2>
            <ul>
            {calificaciones.map((calificacion, index) => 
                <li key={index}>
                    {calificacion}
                </li>
            )}
            </ul>
            <p>Media actual: {suma/calificaciones.length}</p>
        </span>}
        <input type='number' placeholder='Nueva calificacion' value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
        <button onClick={handleNewCalificacion}>Agregar</button>
    </div>
}