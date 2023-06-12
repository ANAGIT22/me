import logo from './logo.svg';
import './App.css';
import React from 'react';
import Componente from './components/Componente';
import Propiedades from './components/Propiedades';
import Estado from './components/Estado';
import RenderizadoCondicional from './components/RenderizadoCondicional';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        </section>
        

        <section>
        <Componente msg="Hola soy un componente funcional  expresado desde una props"/>
        <hr/>
        <Propiedades cadena = " Esto es una cadena de texto"
         numero ={19} 
         booleano={true}
         arreglo={[1,2,3]}
         objeto={{nombre:"Jon",correo:"correo"}}
         elementoReact= {<i> esto es un elemento React</i>}
         funcion= {(num) => num*num}
         ComponenteReact={<Componente msg="soy un componente pasado como props"/>}
         />
         <hr/>
       <Estado/>
       <hr/>
       <RenderizadoCondicional/>

      </section>
      </header>
     
    </div>
  );
}

export default App;
