import Typography from '@mui/material/Typography'
import logo from 'assets/logo.jpg'
import { NavLink } from 'react-router-dom'
import './Logo.scss'

const Logo = () => {
    return (
        <Typography component="div" sx={{ flexGrow: 1 }}>
            <NavLink to="/">
                <img
                    src={logo}
                    alt="Логотип магазина: Bear Size"
                    className="logo-shop"
                />
            </NavLink>
        </Typography>
    )
}

export default Logo
