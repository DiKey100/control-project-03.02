import { Button, Card, CardContent } from '@mui/material'
import './ProductListItem.scss'

type Props = {
    title: string
    price: number
    image: string
}

const ProductListItem = ({ title, price, image }: Props) => {
    return (
        <Card className="product-list">
            <CardContent>
                <div className="product">
                    <div className="product-info">
                        <div className="title">{title}</div>
                        <div className="price">Цена: {price} гривен</div>
                        <Button variant="outlined" className="look-to-product">
                            Просмотреть товар
                        </Button>
                    </div>
                    <div className="product-img">
                        <img src={image} alt={title}></img>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default ProductListItem
