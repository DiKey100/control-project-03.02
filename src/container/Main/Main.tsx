import { Container } from '@mui/material'
import Cart from 'pages/Cart/Cart'
import Products from 'pages/Products/Products'
import { Route, Routes } from 'react-router-dom'
// import Home from 'pages/Home/Home'

type Props = {
    addProductToCart: (id: number, count: number) => void
}

const Main = ({ addProductToCart }: Props) => {
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
                <Route path="cart" element={<Cart />} />
            </Routes>
            {/* <Home /> */}
        </Container>
    )
}

export default Main
