import { Container } from '@mui/material'
import Cart from 'pages/Cart/Cart'
import Products from 'pages/Products/Products'
import Saved from 'pages/Saved/Saved'
import { Route, Routes } from 'react-router-dom'
import Home from 'pages/Home/Home'
import SportProduct from 'pages/SportProduct/SportProduct'
import StreetProduct from 'pages/StreetProduct/StreetProduct'
import BootsProduct from 'pages/BootsProduct/BootsProduct'

type Props = {
    addProductToCart: (id: number, count: number) => void
    whatProductsInCart: {
        [id: number]: number
    }
    deleteProducts: (id: number) => void
    changeCountProduct: (id: number, count: number) => void
    likeState: {
        [id: number]: boolean
    }
    toggleLike: (id: number) => void
    deleteLike: (id: number) => void
}

const Main = ({
    addProductToCart,
    whatProductsInCart,
    deleteProducts,
    changeCountProduct,
    likeState,
    toggleLike,
    deleteLike,
}: Props) => {
    return (
        <Container
            maxWidth="lg"
            sx={{
                padding: '50px 0',
            }}
            component="main"
        >
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home likeState={likeState} toggleLike={toggleLike} />
                    }
                />
                <Route
                    path="sport"
                    element={
                        <SportProduct
                            likeState={likeState}
                            toggleLike={toggleLike}
                        />
                    }
                />
                <Route
                    path="street"
                    element={
                        <StreetProduct
                            likeState={likeState}
                            toggleLike={toggleLike}
                        />
                    }
                />
                <Route
                    path="boots"
                    element={
                        <BootsProduct
                            likeState={likeState}
                            toggleLike={toggleLike}
                        />
                    }
                />
                <Route
                    path="products-list"
                    element={
                        <Products
                            addProductToCart={addProductToCart}
                            likeState={likeState}
                            toggleLike={toggleLike}
                        />
                    }
                />
                <Route
                    path="saved"
                    element={
                        <Saved
                            likeState={likeState}
                            deleteLike={deleteLike}
                            toggleLike={toggleLike}
                        />
                    }
                />
                <Route
                    path="cart"
                    element={
                        <Cart
                            whatProductsInCart={whatProductsInCart}
                            deleteProducts={deleteProducts}
                            changeCountProduct={changeCountProduct}
                        />
                    }
                />
            </Routes>
        </Container>
    )
}

export default Main
