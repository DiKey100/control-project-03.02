import { Button, Card, CardContent } from '@mui/material'
import ActiveLike from './Like/ActiveLike'
import DefaultLike from './Like/DefaultLike'
import './ProductListItem.scss'

type Props = {
    id: number
    title: string
    price: number
    image: string
    isLiked?: boolean
    toggleLike: (id: number) => void
}

const ProductListItem = ({
    id,
    title,
    price,
    image,
    isLiked = false,
    toggleLike,
}: Props) => {
    return (
        <Card className="sm-product-list">
            <CardContent>
                <div className="sm-product">
                    <div className="sm-product-info">
                        <div className="sm-title">{title}</div>
                        <div className="sm-price">Цена: {price} гривен</div>
                        <div className="sm-like" onClick={() => toggleLike(id)}>
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
