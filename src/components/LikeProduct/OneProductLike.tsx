import { Button, Card, CardContent, Grid } from '@mui/material'
import { Link } from 'react-router-dom'
import { useAppDispatch } from 'redux/hooks'
import { deleteLike } from 'redux/likeReducer'
import { ProductProps } from 'utils/productsArray'
import './OneProductLike.scss'

type Props = {
    product: ProductProps
}

const OneProductLike = ({ product }: Props) => {
    const dispatch = useAppDispatch()

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
                                    Цена товара:{' '}
                                    <span>{product.price} гривен</span>
                                </div>
                                <div className="like-color">
                                    <span>{product.color}</span>
                                </div>
                            </div>
                        </div>
                        <div className="like-bttns">
                            <Button
                                variant="outlined"
                                className="like-look-to-product"
                            >
                                <Link
                                    className="like-ltp-link"
                                    to={`/products/${product.id}`}
                                >
                                    Просмотреть товар
                                </Link>
                            </Button>
                            <Button
                                variant="outlined"
                                className="like-delete"
                                onClick={() => dispatch(deleteLike(product.id))}
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
