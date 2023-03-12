import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import Menu from 'components/Menu/Menu'
import Logo from 'components/Logo/Logo'
import './Header.scss'
import CartHeader from 'components/CartHeader/CartHeader'

const Header = () => {
    return (
        <>
            <AppBar position="fixed" className="app-bar">
                <Container maxWidth="lg">
                    <Toolbar>
                        <Logo />
                        <Menu />
                        <CartHeader />
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}

export default Header
