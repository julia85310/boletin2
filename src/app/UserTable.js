/*
Crea un componente UserTable que permita agregar usuarios a una tabla. Cada usuario
debe tener un nombre, un email y una edad. Agrega un botón para eliminar usuarios de la
tabla.
Objetivos: useState, manejo de objetos en arrays.
*/
import {useState} from 'react';
export default function UserTable(){

  const[usuarios, setUsuarios] = useState([]);
  const[agregandoUsuario, setAgregandoUsuario] = useState(false);
  const[inputName, setInputName] = useState('');
  const[inputEmail, setInputEmail] = useState('');
  const[inputEdad, setInputEdad] = useState('');

  function agregarUsuario(){
    setUsuarios([
      ...usuarios,
      {
        nombre: inputName,
        email: inputEmail,
        edad: inputEdad
      }
    ]);
    setInputEdad('');
    setInputEmail('');
    setInputName('');
    setAgregandoUsuario(false);
  }

  function handleDeleteUser(indexDelete){
    setUsuarios(usuarios.filter((_, index) => index != indexDelete));
  }


  return <div>
    <table border={1}>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Email</th>
          <th>Edad</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
          usuarios.map((usuario, index) =>
            <tr key={index}>
              <td>{usuario.nombre}</td>
              <td>{usuario.email}</td>
              <td>{usuario.edad}</td>
              <td><button onClick={() => handleDeleteUser(index)}>-</button></td>
            </tr>
          )
        }
      </tbody>
    </table>

    {agregandoUsuario ? 
      <div>
        <input type='text' value={inputName} placeholder='Nombre' onChange={(e) => setInputName(e.target.value)}></input>
        <input type='email' value={inputEmail} placeholder='Email' onChange={(e) => setInputEmail(e.target.value)}></input>
        <input type='number' value={inputEdad} placeholder='Edad' onChange={(e) => setInputEdad(e.target.value)} /*min={0} max={120}*/></input>
        <button onClick={agregarUsuario}>Confirmar</button>
      </div>
      :
      <button onClick={() => setAgregandoUsuario(true)}>Agregar Usuario</button>
    }

  </div>
}