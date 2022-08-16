import '../stylesheet/lista.css';
import { useEffect, useState } from 'react';

function Lista (){
    const url = 'https://jsonplaceholder.typicode.com/users';
    const [todos, setTodos] = useState();

    useEffect( () => {
        fetchApi()
    },[]);
    
    const fetchApi = async () =>{
        const response = await fetch(url);
        const responseJSON = await response.json();
        setTodos(responseJSON);
        console.log(todos);
        
    };

    
    

    return (
        <div className="App">
            <header className="App-header">
                Lista de Clientes
            </header>

            <section>
        
                <div className='contenedor barra'>
                <p>Nombre</p>
                <p>Apodo</p>
                <p>Correo</p>
                <p>ID</p>
                <p>WEbsite</p>
                </div>
                {!todos ? 'cargando...':
                    todos.map((ids, index)=>{
                    return( <div className='contenedor'>
                            
                                <td> {ids.name} </td>
                                <td>  {ids.username}</td>
                                <td>  {ids.email}</td>
                                <td>  {ids.phone}</td>
                                <td>  {ids.website}</td>
                            
                            </div>
                    );
                    })
                }
                
            </section>
            <footer>
            <p>.</p>
            <p>.</p>
            </footer>
        </div>
    );
}

export default Lista;