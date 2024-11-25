/*
Crea un componente LimitedCounter que permita al usuario establecer un valor máximo. El
contador solo puede incrementarse hasta ese valor máximo. Agrega un botón para reiniciar
el contador a 0.
Objetivos: useState, lógica condicional, validación de datos.
*/
import {useState} from 'react';
export default function LimitedCounter(){
    const [contador, setContador] = useState(0);
    const [valorMax, setValorMax] = useState(0);
    const [inputValue, setInputValue] = useState('');
    return <div>
        {valorMax !== 0 ?
            (<span>
                <p> 
                    Contador: {contador}
                    {valorMax > contador &&
                    <button onClick={() => setContador(contador + 1)}>+</button>}
                    <button onClick={() => setContador(0)}>Reiniciar</button>
                </p>
                <p>Valor maximo actual: {valorMax}</p>
            </span>) : <p>Debes introducir un valor maximo mayor que 0</p>
            
        }
        <input type='number' value={inputValue} placeholder='Inserte su valor maximo' onChange={(e) => setInputValue(e.target.value)}></input>
        <button onClick={() => {setValorMax(inputValue); setInputValue('');}}>{valorMax > 0? 'Actualizar' : 'Establecer'}</button>
    </div>
}