/*
Crea un componente TextCarousel que reciba un array de frases por props y muestre una
frase a la vez, con un botón para pasar a la siguiente frase y otro para volver a la anterior.
Objetivos: useState, props, manejo de índices.
*/
import {useImmer} from 'use-immer';
export default function TextCarousel({frases}){
    const [indice, updateIndice] = useImmer(0);

    function anteriorIndice(){
      if(indice == 0){
        updateIndice(frases.length - 1);
      }else{
        updateIndice(indice - 1);
      }
    }

    function siguienteIndice(){
      if(indice == frases.length - 1){
        updateIndice(0);
      }else{
        updateIndice(indice + 1);
      }
    }

    return(
      <div>
        {frases[indice]}<br></br>
        <button onClick={anteriorIndice}>Anterior</button>
        <button onClick={siguienteIndice}>Siguiente</button>
      </div>
    );
}