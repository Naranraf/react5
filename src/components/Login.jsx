import React from 'react';

const Login = () => {
    return (
        <div>
            <h1>Hola entrenador!</h1>
            <img src="/public/Ash_Ketchum_Journeys.png" alt="" />

            <form action="">

                <input type="text" name='login' placeholder='nombre de usuario' />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Login;