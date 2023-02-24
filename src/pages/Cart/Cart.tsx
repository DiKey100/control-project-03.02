import { Typography } from '@mui/material'
import productsArray, {
    getProductsObject,
    ProductProps,
} from 'utils/productsArray'

type Props = {
    whatProductsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: ProductProps
    }
}

const Cart = ({
    whatProductsInCart,
    productsObject = getProductsObject(productsArray),
}: Props) => {
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
            <div>
                {Object.keys(whatProductsInCart).map((productId) => (
                    <div key={productId}>
                        {productsObject[parseInt(productId)].title} :{' '}
                        {whatProductsInCart[parseInt(productId)]}
                    </div>
                ))}
            </div>
            <div>
                Общая сумма:{' '}
                {Object.keys(whatProductsInCart).reduce(
                    (total, productId) =>
                        total +
                        whatProductsInCart[parseInt(productId)] *
                            productsObject[parseInt(productId)].price,
                    0
                )}{' '}
                гривен
            </div>
        </div>
    )
}

export default Cart
