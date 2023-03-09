import MenuItem from './MenuItem'

const Menu = () => {
    return (
        <>
            <MenuItem to="/">Главная</MenuItem>
            <MenuItem to="/saved">Избранное</MenuItem>
            <MenuItem to="/cart">Корзина</MenuItem>
        </>
    )
}

export default Menu
