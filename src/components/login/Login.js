import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

/**
 * @param {*} history recibiendo history como parametro al venir desde la prop de react-router-dom 
 */

export const Login = ({ history }) => {

    const { dispatch } = useContext( AuthContext );

    const handleLogin = () =>{

        const lastPath = localStorage.getItem('lastPath') || '/'; //leer la ultima ruta que accedio y si no existe redireccionarlo

        dispatch({
            type: types.LOGIN,
            payload: {
                name: 'Gerson Benito',
            }
        })

        // history.push('/'); al usar el push deja regresar a las paginas anteriores
        history.replace( lastPath ); //cuando se usa el replace no deja regresar a las paginas anteriores

    
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
