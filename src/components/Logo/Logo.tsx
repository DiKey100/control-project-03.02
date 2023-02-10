import Typography from '@mui/material/Typography'
import logo from 'assets/logo.jpg'
import './Logo.scss'

type Props = {}

const Logo = (props: Props) => {
    return (
        <Typography component="div" sx={{ flexGrow: 1 }}>
            <img
                src={logo}
                alt="Логотип магазина: Bear Size"
                className="logo-shop"
            />
        </Typography>
    )
}

export default Logo
