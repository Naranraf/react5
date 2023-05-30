import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeName } from '../store/slices/userName.slice';

const Login = () => {
    const username = useSelector(state => state.username);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Hola {username}!</h1>
            <img src="/public/Ash_Ketchum_Journeys.png" alt="" />
            <form action="">
                <input
                    type="text"
                    name="login"
                    placeholder="nombre de usuario"
                />
                <button>
                    <Link
                        onClick={() => dispatch(changeName())}
                        to="/pokemons">
                        Ir a pokemons
                    </Link>
                </button>

            </form>
        </div>
    );
};

export default Login;
