import { Grid, Typography } from '@mui/material'
import OneProductCartExtended from 'components/CartDetail/ProductsInCart/OneProductCartExtended'
import ProductsInCart from 'components/CartDetail/ProductsInCart/ProductsInCart'
import TotalPrice from 'components/CartDetail/TotalPrice/TotalPrice'

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
                    whatProductsInCart={whatProductsInCart}
                    CartItem={OneProductCartExtended}
                />
            </Grid>
            <TotalPrice whatProductsInCart={whatProductsInCart} />
        </div>
    )
}

export default Cart
