import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import Menu from 'components/Menu/Menu'
import Logo from 'components/Logo/Logo'
import './Header.scss'
import CartHeader from 'components/CartHeader/CartHeader'

type Props = {
    whatProductsInCart: {
        [id: number]: number
    }
}

const Header = ({ whatProductsInCart }: Props) => {
    return (
        <>
            <AppBar position="static" className="app-bar">
                <Container maxWidth="lg">
                    <Toolbar>
                        <Logo />
                        <Menu />
                        <CartHeader whatProductsInCart={whatProductsInCart} />
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}

export default Header
