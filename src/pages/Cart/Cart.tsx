import { Typography } from '@mui/material'
import ProductsInCart from 'components/ProductsInCart/ProductsInCart'
import TotalPrice from 'components/TotalPrice/TotalPrice'

type Props = {
    whatProductsInCart: {
        [id: number]: number
    }
}

const Cart = ({ whatProductsInCart }: Props) => {
    return (
        <div>
            <Typography
                variant="h4"
                component="h1"
                sx={{
                    marginBottom: '30px',
                }}
            >
                Корзина
            </Typography>
            <ProductsInCart whatProductsInCart={whatProductsInCart} />
            <TotalPrice whatProductsInCart={whatProductsInCart} />
        </div>
    )
}

export default Cart
