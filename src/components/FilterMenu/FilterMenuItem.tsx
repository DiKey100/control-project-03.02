import { NavLink } from 'react-router-dom'
import './FilterMenuItem.scss'

type Props = {
    to: string
    children: React.ReactNode
}

const FilterMenuItem = ({ to, children }: Props) => {
    return (
        <div>
            <NavLink className="filter-ignore" to={to}>
                {children}
            </NavLink>
        </div>
    )
}

export default FilterMenuItem
