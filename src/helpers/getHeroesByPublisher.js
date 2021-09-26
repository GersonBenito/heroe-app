import { heroes } from "../data/herores";

export const getHeroesByPublisher = ( publisher ) =>{

    const validatePublisher = ['DC Comics', 'Marvel Comics'];

    if(!validatePublisher.includes(publisher)){
        console.log(`El comics ${publisher} no es correcto`);
    }

    return heroes.filter( heroe => heroe.publisher === publisher );

}