import React from 'react'
import { HeroeList } from '../herores/HeroeList'

export const Marvel = () => {
    return (
        <div className='p-3' >
            <h1>Marvel</h1>
            <HeroeList publisher='Marvel Comics' />
        </div>
    )
}
