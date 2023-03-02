import { Card, CardContent, Grid } from '@mui/material'
import { ProductProps } from 'utils/productsArray'
import './OneProductCartExtended.scss'

type Props = {
    productCount: number
    product: ProductProps
    deleteProducts: (id: number) => void
}

const OneProductCartExtended = ({
    product,
    productCount,
    deleteProducts,
}: Props) => {
    return (
        <Grid item xs={12}>
            <Card>
                <CardContent className="cart">
                    <div className="cart-information">
                        <div className="cart-title">{product.title}</div>
                        <div className="cart-info-numb">
                            <div className="cart-price">
                                Цена товара: <span>{product.price}</span>
                            </div>
                            <div className="cart-count">
                                Количество товара: <span>{productCount}</span>
                            </div>
                        </div>
                        <div
                            className="delete-product"
                            onClick={() => deleteProducts(product.id)}
                        >
                            Удалить товар
                        </div>
                    </div>
                    <div className="cart-image">
                        <img src={product.image} alt="" />
                    </div>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default OneProductCartExtended
