import { types } from "../types/types";

export const authReducer = (state = {}, accion) =>{

    switch(accion.type){

        case types.LOGIN:

            return {
                ...accion.payload,
                logged: true
            }

        case types.LOGOUT:

            return{
                logged: false
            }
        default:
            return state
    }

}