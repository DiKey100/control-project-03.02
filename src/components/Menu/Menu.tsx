import MenuItem from './MenuItem'

type Props = {}

const Menu = (props: Props) => {
    return (
        <>
            <MenuItem to="/">Главная</MenuItem>
            <MenuItem to="/contacts">Контакты</MenuItem>
            <MenuItem to="/saved">Избранное</MenuItem>
            <MenuItem to="/cart">Корзина</MenuItem>
        </>
    )
}

export default Menu
