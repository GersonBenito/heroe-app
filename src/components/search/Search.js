import React, { useMemo } from 'react';
import { useForm } from '../../hooks/useForm';
import { HeroeCard } from '../herores/HeroeCard';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { getHeroeByName } from '../../helpers/getHeroeByName';

export const Search = ({ history }) => {

    const location = useLocation();
    const { q = '' } = queryString.parse( location.search );

    const [ { heroe }, handleChange ] = useForm({
        heroe: q,
    });
    
    const handleSearch = (event) =>{
        
        event.preventDefault();

        history.push(`?q=${ heroe }`);


    }

    const filterHero = useMemo(()=> getHeroeByName( q ), [q]);


    return (
        <div className="p-3">

            <h1>Buscador de heroes</h1>
            <div className="row">

                <div className="col-5">
                    <h4>Buscar heroe</h4>
                    <form onSubmit={ handleSearch } >

                        <input 
                            type="text"
                            name="heroe" 
                            className="form-control"
                            placeholder="Ingresa el nombre del heroe"
                            autoComplete="off"
                            onChange={ handleChange }
                            value={ heroe }
                        />
                        <button 
                            type="submit"
                            className="btn btn-outline-success mt-1"
                        >
                            Buscar
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Resultado</h4>

                    {
                        (q === '') && (

                            <div className="alert alert-info">
                               Buscar un heroe 
                            </div>

                        )
                    }

                    {
                        (q !== '' && filterHero.length === 0) && (

                            <div className="alert alert-warning">
                                No se encontro ningun heroe con el nombre { q }
                            </div>

                        )
                    }

                    {
                        filterHero && filterHero.map(heroe =>(
                            <HeroeCard 
                                key={heroe.id}
                                {...heroe}
                            />
                        ))
                    }

                </div>

            </div>
        </div>
    )
}
