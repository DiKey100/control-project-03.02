import { Grid, Typography } from '@mui/material'
import OneProductCartExtended from 'components/CartDetail/ProductsInCart/OneProductCartExtended'
import ProductsInCart from 'components/CartDetail/ProductsInCart/ProductsInCart'
import TotalPrice from 'components/CartDetail/TotalPrice/TotalPrice'
import { useAppSelector } from 'redux/hooks'
import './Cart.scss'

const Cart = () => {
    const productsInCart = useAppSelector((state) => state.productsInCart)

    return (
        <div>
            <Typography
                variant="h4"
                component="h1"
                align="center"
                sx={{
                    marginBottom: '30px',
                    fontWeight: '500',
                }}
            >
                Корзина
            </Typography>
            <Grid
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="center"
                spacing={3}
            >
                <ProductsInCart
                    productsInCart={productsInCart}
                    CartItem={OneProductCartExtended}
                />
            </Grid>
            <TotalPrice productsInCart={productsInCart} />
        </div>
    )
}

export default Cart
