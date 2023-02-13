import { Button, TextField } from '@mui/material'
import { useState } from 'react'
import productsArray from 'utils/productsArray'
import './ProductFirst.scss'

type ProductProps = {
    title: string
    price: number
    image: string
}

type Props = {
    addProductToCart: (count: number, price: number) => void
}

const ProductFirst = ({ addProductToCart }: Props) => {
    const [count, setCount] = useState<number>(1)
    const onDecrement = () => {
        setCount((prevState: number) => prevState - 1)
    }
    const onIncrement = () => {
        setCount((prevState: number) => prevState + 1)
    }

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
                                    className="bttn-minus"
                                    onClick={onDecrement}
                                    disabled={count <= 1}
                                >
                                    —
                                </Button>
                                <TextField
                                    value={count}
                                    size="medium"
                                    className="quantity-number"
                                    sx={{
                                        height: '60px',
                                    }}
                                />
                                <Button
                                    className="bttn-plus"
                                    onClick={onIncrement}
                                >
                                    +
                                </Button>
                            </div>
                            <div className="product-button">
                                <Button
                                    variant="outlined"
                                    className="add-to-cart"
                                    onClick={addProductToCart}
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
