import { Container } from '@mui/material'
import Cart from 'pages/Cart/Cart'
import Saved from 'pages/Saved/Saved'
import { Route, Routes } from 'react-router-dom'
import Home from 'pages/Home/Home'
import SportProduct from 'pages/SportProduct/SportProduct'
import StreetProduct from 'pages/StreetProduct/StreetProduct'
import BootsProduct from 'pages/BootsProduct/BootsProduct'
import OneProduct from 'pages/OneProduct/OneProduct'
import Confirmation from 'pages/Confirmation/Confirmation'

const Main = () => {
    return (
        <Container
            maxWidth="lg"
            sx={{
                marginTop: '100px',
                padding: '50px 0',
            }}
            component="main"
        >
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="sport" element={<SportProduct />} />
                <Route path="street" element={<StreetProduct />} />
                <Route path="boots" element={<BootsProduct />} />
                <Route path="saved" element={<Saved />} />
                <Route path="cart" element={<Cart />} />
                <Route path="products/:id" element={<OneProduct />} />
                <Route path="confirmation" element={<Confirmation />} />
            </Routes>
        </Container>
    )
}

export default Main
