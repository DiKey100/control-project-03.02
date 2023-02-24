import Button from '@mui/material/Button'
import { NavLink } from 'react-router-dom'
import './MenuItem.scss'

type Props = {
    to: string
    children: React.ReactNode
}

const MenuItem = ({ to, children }: Props) => {
    return (
        <Button color="inherit">
            <NavLink
                className={({ isActive }) =>
                    isActive ? 'link-active' : 'link-ignore'
                }
                to={to}
            >
                {children}
            </NavLink>
        </Button>
    )
}

export default MenuItem
