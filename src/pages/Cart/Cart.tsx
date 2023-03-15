import { Button, Grid, Typography } from '@mui/material'
import OneProductCartExtended from 'components/CartDetail/ProductsInCart/OneProductCartExtended'
import ProductsInCart from 'components/CartDetail/ProductsInCart/ProductsInCart'
import TotalPrice from 'components/CartDetail/TotalPrice/TotalPrice'
import { Link } from 'react-router-dom'
import './Cart.scss'

const Cart = () => {
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
                <ProductsInCart CartItem={OneProductCartExtended} />
            </Grid>
            <TotalPrice />
            <Button className="bttn-conf-order" variant="outlined">
                <Link to="/confirmation" className="confirmation-order">
                    Подтвердите, пожалуйста, заказ
                </Link>
            </Button>
        </div>
    )
}

export default Cart
