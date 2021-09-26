import React from 'react'
import { Navbar } from '../container/Navbar'

export const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
                { children }
        </>
    )
}
