import { Container } from '@mui/material'
// import Home from 'pages/Home/Home'
import ProductFirst from 'pages/Products/ProductFirst'

type Props = {
    addProductToCart: (count: number, price: number) => void
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
            {/* <Home /> */}
            <ProductFirst addProductToCart={addProductToCart} />
        </Container>
    )
}

export default Main
