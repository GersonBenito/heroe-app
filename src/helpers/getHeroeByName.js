import { heroes } from "../data/herores"

export const getHeroeByName = (search = '') =>{

    if( search === '' ){
        return [];
    }

    return heroes.filter(h =>
        h.superhero.toLowerCase().includes( search.toLowerCase() ) ||
        h.publisher.toLowerCase().includes( search.toLowerCase() ) ||
        h.characters.toLowerCase().includes( search.toLowerCase() )
    );

}