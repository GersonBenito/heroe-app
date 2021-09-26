import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../helpers/getHeroesByPublisher'
import { HeroeCard } from './HeroeCard';

export const HeroeList = ({ publisher }) => {

    const heroes = useMemo(()=> getHeroesByPublisher( publisher ), [publisher])

    return (
        <div className="card-columns animate__animated animate__fadeIn" >
            {
                heroes && heroes.map(heroe => (
                    <HeroeCard
                        key={heroe.id}
                        {...heroe}
                    />
                ))
            }
        </div>
    )
}
