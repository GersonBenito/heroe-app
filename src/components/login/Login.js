import React from 'react';

/**
 * @param {*} history recibiendo history como parametro al venir desde la prop de react-router-dom 
 */

export const Login = ({ history }) => {

    const handleLogin = () =>{

        // history.push('/'); al usar el push deja regresar a las paginas anteriores
        history.replace('/'); //cuando se usa el replace no deja regresar a las paginas anteriores
    }

    return (
        <div className='p-3' >
            <h1>login</h1>
            <button 
                className="btn btn-outline-info"
                onClick={ handleLogin }
            >
                Login
            </button>
        </div>
    )
}
