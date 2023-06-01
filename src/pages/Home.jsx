import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { changeName, changeNameValue } from '../store/slices/username.slice'
import { useState } from 'react'


const Home = () => {

    const username = useSelector( state => state.username )
    const dispatch = useDispatch()
    const [ nameValue, setNameValue ] = useState( "" )

    return (
        <div>
            <h1>Bienvenidos!</h1>
            <h2>{ username }</h2>
            <button 
            onClick={ () => dispatch( changeName() ) }
            >Cambiar nombre</button>
            <div className="searchbar">
                <label htmlFor="name">Nombre del usuario</label>
                <div className="input-wrapper">
                    <input 
                    type="text" 
                    id="name" 
                    value={ nameValue }
                    onChange={ e => setNameValue(e.target.value) }
                    />
                    <button
                    onClick={ () => dispatch( changeNameValue(nameValue) ) }
                    >Cambiar</button>
                </div>
            </div>
            <br />
            <Link to="/pokemons">Ir al listado de Pokemones</Link>
        </div>
    );
};

export default Home;