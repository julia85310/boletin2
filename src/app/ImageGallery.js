/*
Crea un componente ImageGallery que reciba un array de URLs de imágenes por props y
las muestre como una galería. Agrega botones para navegar hacia adelante y hacia atrás
entre las imágenes.
Objetivos: useState, props, manejo de índices.
*/
import {useState} from 'react';
export default function ImageGallery({imagenes}){
    const [indiceImagen, setIndiceImagen] = useState(0);

    function handleNextImagen(){
      if(indiceImagen == (imagenes.length - 1)){
        setIndiceImagen(0);
      }else{
        setIndiceImagen(indiceImagen + 1);
      }
    }

    function handlePreviousImagen(){
      if(indiceImagen == 0){
        setIndiceImagen(imagenes.length - 1);
      }else{
        setIndiceImagen(indiceImagen - 1);
      }
    }

    return <div>
      {imagenes.map((imagen, index) =>
        {
          if(indiceImagen == index){
            return <img
              key={index}
              src={imagen}
              height={200}
            ></img>
          }else{
            return null;
          }
        }
      )}<br/>
      <button onClick={handlePreviousImagen}>Anterior</button>
      <button onClick={handleNextImagen}>Siguiente</button>
    </div>
}