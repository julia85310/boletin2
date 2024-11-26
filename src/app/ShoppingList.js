/*
Crea un componente ShoppingList que permita agregar elementos a una lista de compras,
eliminar elementos específicos y editar el nombre de un elemento existente.
Objetivos: useState, manipulación de arrays y edición.
*/
import {useState} from 'react';
export default function ShoppingList(){
    const [elementos, setElementos] = useState([]);
    const [textInput, setTextInput] = useState('');
    const [textInputEdit, setTextInputEdit] = useState('');
    const [editIndex, setEditIndex] = useState(null);

    function handleDeleteElement(indexEliminar){
        setElementos(elementos.filter((_, index) => index !== indexEliminar));
    }

    function handleNewElement(){
        setElementos([
            ...elementos, 
            textInput
        ]);
        setTextInput('');
    }

    function handleEditElement(indexModificar){
        setElementos(
            elementos.map((elemento, index) => {
                let elementoDevolver;
                if(index != indexModificar){
                    elementoDevolver = elemento;
                }else{
                    elementoDevolver = textInputEdit;
                    setTextInputEdit('');
                    setEditIndex(null);
                }
                return elementoDevolver;
            })
        );
    }

    return <div>
        {elementos.length > 0 &&
        <ul>
            {elementos.map((elemento, index) => 
                <li key={index}>
                    {elemento}
                    {editIndex == index ? 
                    <span>
                        <input type='text' placeholder='Nuevo nombre' value={textInputEdit} onChange={(e) => setTextInputEdit(e.target.value)} ></input>
                        <button onClick={() => handleEditElement(index)}>Actualizar</button>
                    </span>:
                    <button onClick={() => setEditIndex(index)}>Editar</button>}
                    <button onClick={() => handleDeleteElement(index)}>Eliminar</button>
                </li>
            )}
        </ul>}
        <input type="text" placeholder="Nuevo elemento" value={textInput} onChange={(e) => setTextInput(e.target.value)}></input>
        <button onClick={handleNewElement}>Agregar</button>
    </div>
}