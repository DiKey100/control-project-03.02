import { Button, Card, CardContent } from '@mui/material'
import './ProductListItem.scss'

type Props = {
    title: string
    price: number
    image: string
}

const ProductListItem = ({ title, price, image }: Props) => {
    return (
        <Card className="sm-product-list">
            <CardContent>
                <div className="sm-product">
                    <div className="sm-product-info">
                        <div className="sm-title">{title}</div>
                        <div className="sm-price">Цена: {price} гривен</div>
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
