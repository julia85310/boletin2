/*
Crea un componente ShoppingList que permita agregar elementos a una lista de compras,
eliminar elementos específicos y editar el nombre de un elemento existente.
Objetivos: useState, manipulación de arrays y edición.
*/
import {useState} from 'react';
export default function ShoppingList(){
    const [elementos, setElementos] = useState([]);
    const [textInput, setTextInput] = useState('');
    function handleDeleteElement(indexEliminar){
        setElementos(elementos.filter((_, index) => index !== indexEliminar));
    }

    function handleNewElement(){
        //me he quedado por aqui
    }

    return <div>
        {elementos.lenght > 0 &&
        <ul>
            {elementos.map((elemento, index) => 
                <li key={index}>
                    {elemento}
                    <button onClick={() => handleDeleteElement(index)}></button>
                </li>
            )}
        </ul>}
        <input type="text" placeholder="Nuevo elemento" value={textInput} onChange={() => e.target.value}></input>
        <button onClick={handleNewElement}>Agregar</button>
    </div>
}