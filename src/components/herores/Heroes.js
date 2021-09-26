import React, { useMemo } from 'react'
import { useParams, Redirect } from 'react-router-dom'
import { getHeroeById } from '../../helpers/getHeroeById';

export const Heroes = ({ history }) => {

    const { heroId } = useParams();
    
    const hero = useMemo(()=> getHeroeById( heroId ), [heroId])


    if(!hero){

        // si el path no se encuentra
        return <Redirect to='/' />
    }
    
    const {
        
        id,
        superhero,
        alter_ego,
        first_appearance,
        characters,
        publisher

    } = hero;

    const handleClick = () =>{

        // validar cuando se entra a una sola ruta
        if( history.length <= 2 ){

            history.push('/');

        }else{

            // regresar a la pagina anterior
            history.goBack();
            
        }


    }

    
    return (
        <div className="mt-5 p-3">

            <div className="row">

                <div className="col-md-4 animate__animated animate__fadeInLeft">
                    <img 
                        src={ `../assets/heroes/${ id }.jpg` } 
                        alt={ superhero }
                        className="img-thumbnail" 
                    />
                </div>

                <div className="col-md-8 animate__animated animate__fadeIn">

                    <h3>{ superhero }</h3>

                    <ul className="list-group list-group-flush">
                        <li className="list-group"> <b>Alter ego</b>: { alter_ego }</li>
                        <li className="list-group"> <b>Publisher</b>: { publisher }</li>
                        <li className="list-group"> <b>First appearance</b>: { first_appearance }</li>
                    </ul>

                    <h5>Characters</h5>
                    <p>{ characters }</p>

                    <button 
                        className="btn btn-outline-info"
                        onClick={ handleClick }
                    >
                        Return
                    </button>
                </div>

            </div>

        </div>
    )
}
