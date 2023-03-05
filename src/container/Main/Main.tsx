import { Container } from '@mui/material'
import Cart from 'pages/Cart/Cart'
// import Products from 'pages/Products/Products'
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
}

const Main = ({
    addProductToCart,
    whatProductsInCart,
    deleteProducts,
    changeCountProduct,
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
                <Route path="/" element={<Home />} />
                <Route
                    path="sport"
                    element={
                        <SportProduct addProductToCart={addProductToCart} />
                    }
                />
                <Route
                    path="street"
                    element={
                        <StreetProduct addProductToCart={addProductToCart} />
                    }
                />
                <Route
                    path="boots"
                    element={
                        <BootsProduct addProductToCart={addProductToCart} />
                    }
                />
                <Route path="saved" element={<Saved />} />
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
            {/* <Products addProductToCart={addProductToCart} /> */}
        </Container>
    )
}

export default Main
