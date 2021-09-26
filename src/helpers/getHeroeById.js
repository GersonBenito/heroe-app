import { heroes } from "../data/herores"

export const getHeroeById = (id) =>{

    return heroes.find( heroe => heroe.id === id );

}