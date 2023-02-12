import { Button, TextField } from '@mui/material'
import { useState } from 'react'
import productsArray from 'utils/productsArray'
import './ProductFirst.scss'

type ProductProps = {
    title: string
    price: number
    image: string
}

type Props = {}

const ProductFirst = (props: Props) => {
    const [count, setCount] = useState<number>(1)

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
                                <button
                                    className="bttn-minus"
                                    onClick={() => setCount(count - 1)}
                                >
                                    —
                                </button>
                                <TextField
                                    value={count}
                                    size="medium"
                                    className="quantity-number"
                                    sx={{
                                        height: '60px',
                                    }}
                                />
                                <button
                                    className="bttn-plus"
                                    onClick={() => setCount(count + 1)}
                                >
                                    +
                                </button>
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
