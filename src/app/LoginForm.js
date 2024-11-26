/*
Crea un componente LoginForm con campos para el nombre de usuario y contraseña.
Muestra un mensaje que indique si las credenciales ingresadas son correctas o incorrectas.
Usa un array de objetos con usuarios y contraseñas como datos simulados.
Objetivos: useState, validación de formularios.
*/
import {useState} from 'react';

const usuarios = [{
  usuario: 'Pepe',
  password: '123'
},{
  usuario: 'Julia',
  password: '456'
},{
  usuario: 'Antonio',
  password: '123'
}];

export default function LoginForm(){

  const [inputUser, setInputUser] = useState('');
  const [inputPassword, setInputPasswod] = useState('');
  const [dataCorrecta, setDataCorrecta] = useState(null);

  function handleCheckData(){
    usuarios.map((usuario) => 
      {if(usuario.usuario == inputUser){
        if(usuario.password == inputPassword){
          setDataCorrecta(true);
        }
      }}
    );
    if(dataCorrecta == null){setDataCorrecta(false);}
    /*
    Siento que queda mejor sin quitar la informacion
    setInputPasswod('');
    setInputUser('');
    */
  }

  return <div>
    <input type="text" value={inputUser} placeholder='Usuario' onChange={(e) => setInputUser(e.target.value)}></input><br></br>
    <input type="password" value={inputPassword} placeholder='Contraseña' onChange={(e) => setInputPasswod(e.target.value)}></input><br></br>
    <button onClick={handleCheckData}>Revisar credenciales</button><br></br>
    {dataCorrecta !== null && (dataCorrecta ? 'Credenciales correctas' : 'Credenciales incorrectas')}
  </div> 
}