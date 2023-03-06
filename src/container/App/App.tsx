import { StyledEngineProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Header from 'container/Header/Header'
import Main from 'container/Main/Main'
import { useState } from 'react'
import { omit } from 'lodash'

type WhatProductsInCart = {
    [id: number]: number
}
type LikeState = {
    [id: number]: boolean
}

const App = () => {
    const [whatProductsInCart, setWhatProductsInCart] =
        useState<WhatProductsInCart>({
            1: 5,
        })

    const [likeState, setLikeState] = useState<LikeState>({
        1: true,
        2: true,
    })

    const addProductToCart = (id: number, count: number) => {
        setWhatProductsInCart((prevState: WhatProductsInCart) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
        }))
    }
    const deleteProducts = (id: number) =>
        setWhatProductsInCart((prevState: WhatProductsInCart) =>
            omit(prevState, [id])
        )

    const changeCountProduct = (id: number, count: number) => {
        setWhatProductsInCart((prevState: WhatProductsInCart) => ({
            ...prevState,
            [id]: count,
        }))
    }

    const toggleLike = (id: number) => {
        setLikeState((prevState: LikeState) => ({
            ...prevState,
            [id]: !prevState[id],
        }))
    }
    const deleteLike = (id: number) =>
        setLikeState((prevState: LikeState) => omit(prevState, [id]))

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header whatProductsInCart={whatProductsInCart} />
            <Main
                addProductToCart={addProductToCart}
                whatProductsInCart={whatProductsInCart}
                deleteProducts={deleteProducts}
                changeCountProduct={changeCountProduct}
                likeState={likeState}
                toggleLike={toggleLike}
                deleteLike={deleteLike}
            />
        </StyledEngineProvider>
    )
}

export default App
