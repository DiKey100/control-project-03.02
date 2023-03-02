import { Container } from '@mui/material'
import Cart from 'pages/Cart/Cart'
import Contacts from 'pages/Contacts/Contacts'
import Products from 'pages/Products/Products'
import Saved from 'pages/Saved/Saved'
import { Route, Routes } from 'react-router-dom'
// import Home from 'pages/Home/Home'

type Props = {
    addProductToCart: (id: number, count: number) => void
    whatProductsInCart: {
        [id: number]: number
    }
    deleteProducts: (id: number) => void
}

const Main = ({
    addProductToCart,
    whatProductsInCart,
    deleteProducts,
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
                    element={<Products addProductToCart={addProductToCart} />}
                />
                <Route path="contacts" element={<Contacts />} />
                <Route path="saved" element={<Saved />} />
                <Route
                    path="cart"
                    element={
                        <Cart
                            whatProductsInCart={whatProductsInCart}
                            deleteProducts={deleteProducts}
                        />
                    }
                />
            </Routes>
            {/* <Home /> */}
        </Container>
    )
}

export default Main
