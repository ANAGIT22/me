import React, {Component} from 'react';


export class EventosES6 extends Component{
constructor(props){
    super(props);
    this.state = {
        contador:0,
    };
    this.sumar=this.sumar.bind(this);
    this.restar=this.restar.bind(this);
}

sumar(e){
  
    console.log (this);
    this.setState({
        contador:this.state.contador +1,
    });
    
}

restar(e){
   
    console.log (this);
    this.setState({
        contador:this.state.contador -1,
    });
    
}


    render(){
    return(

        <div>
            <h2>Eventos en componentes de clase ES6</h2>
            <nav>
                <button onClick={this.sumar}>+</button>
                <button onClick={this.restar}>-</button>
                
            </nav>
            <h3>{this.state.contador}</h3>
            
           


          
        </div>
    );
    }
}
/*Property Initializers */
export class EventosES7 extends Component{
    
      
        state = {
            contador:0,
        };
        
     //Arrow functions  
    
    sumar = (e) => {
      console.log (this);
       this.setState({
            contador:this.state.contador +1,
        });
        
    }
    
    restar = (e) => {
       
        console.log (this);
        this.setState({
            contador:this.state.contador -1,
        });
        
    }
    
    
        render(){
        return(
    
            <div>
                <h2>Eventos en componentes de clase ES7</h2>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                    
                </nav>
                <h3>{this.state.contador}</h3>
                
            
              
            </div>
        );
        }
    }

       function Boton(props){
        return <button onClick={props.myOnClick}>Boton hecho componente </button>
       }
       


    export class MasSobreEventos extends Component{
       handleClick = (e , mensaje) => {
        console.log(e);
        console.log(e.nativeEvent);
        console.log(e.target);
        console.log(e.nativeEvent.target);
        console.log(mensaje);
       }

        render(){
            return (
                <div>
                    <h2>Mas sobre Eventos</h2>
                    <button 
                    onClick={(e) =>
                    this.handleClick(e ,"Pasando parametro desde un Evento")
                
                
                }
                    
                    >
                    Saludar
                    
                    </button>
                    {/*Evento personalizado
                     <Boton
                 onClick ={(e) =>
                    this.handleClick (e ,"Pasando parametro desde un Evento")

                 }
                 />
                    
                    */}
                 <Boton
                 myOnClick ={(e) =>
                    this.handleClick (e ,"Pasando parametro desde un Evento")

                 }
                 />
                </div>
            )
        }
    
    
    }

