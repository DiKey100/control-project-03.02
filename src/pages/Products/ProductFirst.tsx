import { Button, TextField } from '@mui/material'
import productsArray from 'utils/productsArray'
import './ProductFirst.scss'

type ProductProps = {
    title: string
    price: number
    image: string
}

type Props = {}

const ProductFirst = (props: Props) => {
    return (
        <>
            {productsArray.map(({ title, price, image }: ProductProps) => (
                <div className="product">
                    <div className="product-info">
                        <div className="product-info-top">
                            <div className="title">{title}</div>
                            <div className="price">
                                <span>Цена:</span> <span>{price} </span>
                                гривен
                            </div>
                            <div className="color">: Чёрный, белый</div>
                        </div>
                        <div className="product-info-middle">
                            <div className="product-quantity">
                                <Button
                                    variant="outlined"
                                    className="bttn-minus"
                                >
                                    —
                                </Button>
                                <TextField
                                    value="1"
                                    size="medium"
                                    className="quantity-number"
                                    sx={{
                                        height: '60px',
                                    }}
                                />
                                <Button
                                    variant="outlined"
                                    className="bttn-plus"
                                >
                                    +
                                </Button>
                            </div>
                            <div className="product-button">
                                <Button
                                    variant="outlined"
                                    className="add-to-cart"
                                >
                                    Добавить в корзину
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="product-image">
                        <img src={image} alt={title}></img>
                    </div>
                </div>
            ))}
        </>
    )
}

export default ProductFirst
