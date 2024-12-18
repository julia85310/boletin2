'use client';

import Ejercicio1 from './StudentList';
import Ejercicio2 from './LimitedCounter';
import Ejercicio3 from './AverageCalculator';
import Ejercicio4 from './SurveySimulator';
import Ejercicio5 from './ShoppingList';
import Ejercicio6 from './LoginForm';
import Ejercicio7 from './ImageGallery';
import Ejercicio8 from './MultiCounter';
import Ejercicio9 from './UserTable';
import Ejercicio10 from './GuessTheNumber';
import Ejercicio11 from './TimeCounter';
import Ejercicio12 from './ThemeSelector';
import Ejercicio13 from './LiveValidationForm';
import Ejercicio15 from './TextCarousel';

const imagenes = [
  'https://i.imgur.com/qY9uDfZ.jpeg',
  'https://i.imgur.com/s8x9tyZ.jpeg',
  'https://i.imgur.com/1Ioqd6l.jpeg',
  'https://i.imgur.com/UvlTCNs.jpeg',
  'https://i.imgur.com/yS7f4sG.jpeg'
];

const frases = [
  'Hola mi amor',
  'Tengo que hablar contigo',
  'Estoy cansaadoOoO',
  'Estoy hecho un lio'
];


export default function Home() {
  return (
    <div>
      <h1>Ejercicio 1</h1>
      <Ejercicio1/>
      <Separacion/> 
      <h1>Ejercicio 2</h1>
      <Ejercicio2/>
      <Separacion/> 
      <h1>Ejercicio 3</h1>
      <Ejercicio3/>
      <Separacion/> 
      <h1>Ejercicio 4</h1>
      <Ejercicio4/>
      <Separacion/> 
      <h1>Ejercicio 5</h1>
      <Ejercicio5/>
      <Separacion/> 
      <h1>Ejercicio 6</h1>
      <Ejercicio6/>
      <Separacion/> 
      <h1>Ejercicio 7</h1>
      <Ejercicio7 imagenes={imagenes}/>
      <Separacion/> 
      <h1>Ejercicio 8</h1>
      <Ejercicio8/>
      <Separacion/> 
      <h1>Ejercicio 9</h1>
      <Ejercicio9/>
      <Separacion/> 
      <h1>Ejercicio 10</h1>
      <Ejercicio10/>
      <Separacion/> 
      <h1>Ejercicio 11</h1>
      <Ejercicio11/>
      <Separacion/> 
      <h1>Ejercicio 12</h1>
      <Ejercicio12/>
      <Separacion/> 
      <h1>Ejercicio 13</h1>
      <Ejercicio13/>
      <Separacion/> 
      <h1>Ejercicio 15</h1>
      <Ejercicio15 frases={frases}/>
    </div>
  );
}

function Separacion(){
  return <img
    src = 'https://colorate.azurewebsites.net/SwatchColor/FFFFFF'
    height = {100}
  >
  </img>
}
