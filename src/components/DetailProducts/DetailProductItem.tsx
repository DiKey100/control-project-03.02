import { Button, TextField } from '@mui/material'
import Quantity from 'components/Quantity/Quantity'
import { useState } from 'react'
import './DetailProductItem.scss'

type Props = {
    id: number
    title: string
    price: number
    color: string
    image: string
    addProductToCart: (id: number, count: number) => void
}

const DetailProductItem = ({
    id,
    title,
    price,
    color,
    image,
    addProductToCart,
}: Props) => {
    const [count, setCount] = useState<number>(1)
    const onDecrement = () => {
        setCount((prevState: number) => prevState - 1)
    }
    const onIncrement = () => {
        setCount((prevState: number) => prevState + 1)
    }

    return (
        <div className="product">
            <div className="product-info">
                <div className="product-info-top">
                    <div className="title">{title}</div>
                    <div className="price">
                        <span>Цена:</span> <span>{price} </span>
                        гривен
                    </div>
                    <div className="color">: {color}</div>
                </div>
                <div className="product-info-middle">
                    <Quantity
                        count={count}
                        onDecrement={onDecrement}
                        onIncrement={onIncrement}
                    />
                    <div className="product-button">
                        <Button
                            variant="outlined"
                            className="add-to-cart"
                            onClick={() => addProductToCart(id, count)}
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
    )
}

export default DetailProductItem
