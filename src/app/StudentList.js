/*
Crea un componente StudentList que permita al usuario agregar nombres de estudiantes a
una lista. Agrega un botón al lado de cada nombre para eliminar estudiantes específicos de
la lista.
Objetivos: useState, manipulación de arrays.
*/

import {useState} from 'react';

export default function StudentList(){

    const [estudiantes, setEstudiantes] = useState([]);
    const [textoTextArea, setTextoTextArea] = useState('');

    function handleWriteTextArea(e){
        setTextoTextArea(e.target.value);
    }

    function handleInsertStudent(){
        if (textoTextArea !== ''){
            setEstudiantes(
                [
                    ...estudiantes,
                    textoTextArea
                ]
            );
            setTextoTextArea('');
        }
    }

    function handleDeleteStudent(indexStudent){
        setEstudiantes(
            estudiantes.filter((_, index) => index !== indexStudent)
        );
    }

    return(
        <>
            <input type='text' value={textoTextArea} placeholder='Nombre del estudiante' onChange={handleWriteTextArea}></input>
            <button onClick = {handleInsertStudent}>Insertar</button>
            <ul>
                {
                estudiantes.length > 0 &&
                estudiantes.map((estudiante, index) => 
                    <li key={index}>
                        {estudiante}
                        <button onClick={() => handleDeleteStudent(index)}>Eliminar</button>
                    </li>
                )}
            </ul>
        </>
    );
}