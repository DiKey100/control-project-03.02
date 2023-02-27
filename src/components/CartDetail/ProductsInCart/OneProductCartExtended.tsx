import { Card, CardContent, Grid } from '@mui/material'
import { ProductProps } from 'utils/productsArray'
import './OneProductCartExtended.scss'

type Props = {
    productCount: number
    product: ProductProps
}

const OneProductCartExtended = ({ product, productCount }: Props) => {
    return (
        <Grid item xs={12}>
            <Card>
                <CardContent>
                    <div>
                        <div className="cart-title">{product.title}</div>
                        <div className="cart-price">
                            Цена товара: {product.price}
                        </div>
                        <div className="cart-count">{productCount}</div>
                    </div>
                    <div>
                        <img src={product.image} alt="" />
                    </div>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default OneProductCartExtended
