/*
Crea un componente LiveValidationForm que tenga campos para nombre, email y
contraseña. Muestra un mensaje debajo de cada campo indicando si el valor ingresado
cumple con las reglas de validación (por ejemplo, longitud mínima).
Objetivos: useState, validación en tiempo real.
*/
import {useImmer} from 'use-immer'
export default function LiveValidationForm(){
  const[inputNombre, updateInputNombre] = useImmer('');  
  const[inputEmail, updateInputEmail] = useImmer('');
  const[inputPassword, updateInputPassword] = useImmer('');
  const[mensajeEmail, updateMensajeEmail] = useImmer('');
  const[mensajeNombre, updateMensajeNombre] = useImmer('');
  const[mensajePassword, updateMensajePassword] = useImmer('');

  function validacionNombre(e){
    updateInputNombre(e.target.value);
    if(inputNombre.length < 2){
      updateMensajeNombre('Minima longitud de 3');
    }else{
      updateMensajeNombre('');
    }
  }

  function validacionEmail(e){
    updateInputEmail(e.target.value);
    if(inputEmail.length < 5){
      updateMensajeEmail('Minima longitud de 6');
    }else{
      updateMensajeEmail('');
    }
  }

  function validacionPassword(e){
    updateInputPassword(e.target.value);
    if(inputPassword.length < 5){
      updateMensajePassword('Minima longitud de 6');
    }else{
      updateMensajePassword('');
    }
  }

  function comprobarFormulario(e){
    e.preventDefault;
    if (mensajeNombre == '' && mensajeEmail == '' && mensajePassword == ''){
      alert('Exito');
      updateInputEmail('');
      updateInputNombre('');
      updateInputPassword('');
    }else{
      alert('Revisa los campos');
    }
  }

  return (
    <div>
      <form onSubmit={comprobarFormulario}>
        <label>Nombre: <input type='text' value={inputNombre} onChange={validacionNombre} /></label><br></br>
        {mensajeNombre}<br></br>
        <label>Email: <input type='email' value={inputEmail} onChange={validacionEmail} /></label><br></br>
        {mensajeEmail}<br></br>
        <label>Contraseña: <input type='password' value={inputPassword} onChange={validacionPassword} /></label><br></br>
        {mensajePassword}<br></br>
        <input type='submit' value='Enviar'/>
      </form>
    </div>
  );

}