import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import Menu from 'components/Menu/Menu'
import Logo from 'container/Logo/Logo'
import classes from './Header.module.css'

type Props = {}

const Header = (props: Props) => {
    return (
        <>
            <AppBar position="static" className={`${classes['app-bar']}`}>
                <Container maxWidth="lg">
                    <Toolbar>
                        <Logo />
                        <Menu />
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}

export default Header
