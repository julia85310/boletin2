/*
Crea un componente MultiCounter que permita al usuario agregar varios contadores a la
pantalla. Cada contador debe ser independiente y tener sus propios botones para
incrementar, decrementar y reiniciar.
Objetivos: useState, renderización de componentes múltiples.
*/
import {useState} from 'react';
export default function MultiCounter(){
    const[contadores, setContadores] = useState([]);

    function agregarContador(){
      setContadores([
        ...contadores,
        <Counter key={contadores.length}/>
      ]);
    }

    return <div>
      {contadores.map(contador => contador)}
      <button onClick={agregarContador}>Agregar contador</button>
    </div>
}

function Counter(){
  const [contador, setContador] = useState(0);

  function handleDecrementCounter(){
    setContador(contador - 1);
  }

  function handleIncrementCounter(){
    setContador(contador + 1);
  }

  function handleResetCounter(){
    setContador(0);
  }

  return <div>
      {contador}
      <button onClick={handleIncrementCounter}>Incrementar</button>
      <button onClick={handleDecrementCounter}>Decrementar</button>
      <button onClick={handleResetCounter}>Reiniciar</button>
  </div>
}