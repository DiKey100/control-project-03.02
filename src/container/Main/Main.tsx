import { Container } from '@mui/material'
import Home from 'pages/Home/Home'
// import ProductFirst from 'pages/Products/ProductFirst'

type Props = {}

const Main = (props: Props) => {
    return (
        <Container
            maxWidth="lg"
            sx={{
                padding: '50px 0',
            }}
            component="main"
        >
            <Home />
            {/* <ProductFirst /> */}
        </Container>
    )
}

export default Main
