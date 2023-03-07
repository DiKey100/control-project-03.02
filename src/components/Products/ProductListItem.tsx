import { Button, Card, CardContent } from '@mui/material'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { toggleLike } from 'redux/likeReducer'
import ActiveLike from './Like/ActiveLike'
import DefaultLike from './Like/DefaultLike'
import './ProductListItem.scss'

type Props = {
    id: number
    title: string
    price: number
    image: string
}

const ProductListItem = ({ id, title, price, image }: Props) => {
    const isLiked = useAppSelector((state) => state.likeProducts[id])
    const dispatch = useAppDispatch()

    return (
        <Card className="sm-product-list">
            <CardContent>
                <div className="sm-product">
                    <div className="sm-product-info">
                        <div className="sm-title">{title}</div>
                        <div className="sm-price">Цена: {price} гривен</div>
                        <div
                            className="sm-like"
                            onClick={() => dispatch(toggleLike(id))}
                        >
                            {isLiked ? <ActiveLike /> : <DefaultLike />}
                        </div>
                        <Button
                            variant="outlined"
                            className="sm-look-to-product"
                        >
                            Просмотреть товар
                        </Button>
                    </div>
                    <div className="sm-product-img">
                        <img src={image} alt={title}></img>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default ProductListItem
