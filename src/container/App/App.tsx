import { StyledEngineProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Header from 'container/Header/Header'
import Main from 'container/Main/Main'
import { useState } from 'react'

type WhatProductsInCart = {
    [id: number]: number
}

const App = () => {
    const [whatProductsInCart, setWhatProductsInCart] =
        useState<WhatProductsInCart>({
            1: 5,
        })

    const addProductToCart = (id: number, count: number) => {
        setWhatProductsInCart((prevState: WhatProductsInCart) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
        }))
    }

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header whatProductsInCart={whatProductsInCart} />
            <Main
                addProductToCart={addProductToCart}
                whatProductsInCart={whatProductsInCart}
            />
        </StyledEngineProvider>
    )
}

export default App
