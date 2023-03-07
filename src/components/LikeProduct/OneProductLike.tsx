import { Button, Card, CardContent, Grid } from '@mui/material'
import { ProductProps } from 'utils/productsArray'
import './OneProductLike.scss'

type Props = {
    product: ProductProps
    deleteLike: (id: number) => void
}

const OneProductLike = ({ product, deleteLike }: Props) => {
    return (
        <Grid item xs={12}>
            <Card
                sx={{
                    borderRadius: '20px',
                }}
            >
                <CardContent className="like-product">
                    <div className="like-information">
                        <div className="like-info">
                            <div className="like-title">{product.title}</div>
                            <div className="like-info-middle">
                                <div className="like-price">
                                    Цена товара: {product.price} гривен
                                </div>
                                <div className="like-color">
                                    : {product.color}
                                </div>
                            </div>
                        </div>
                        <div className="like-bttns">
                            <Button
                                variant="outlined"
                                className="like-look-to-product"
                            >
                                Просмотреть товар
                            </Button>
                            <Button
                                variant="outlined"
                                className="like-delete"
                                onClick={() => deleteLike(product.id)}
                            >
                                Убрать из Избранного
                            </Button>
                        </div>
                    </div>
                    <div className="like-image">
                        <img src={product.image} alt={product.title} />
                    </div>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default OneProductLike
