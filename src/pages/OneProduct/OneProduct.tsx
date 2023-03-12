import { Button } from '@mui/material'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { getProductsObject, ProductProps } from 'utils/productsArray'
import { toggleLike } from 'redux/likeReducer'
import { addProductToCart } from 'redux/cartReducer'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import Quantity from 'components/Quantity/Quantity'
import './OneProduct.scss'

type ProductsObject = {
    [id: number]: ProductProps
}

const OneProduct = () => {
    const { id } = useParams()
    const productsArray = useAppSelector((state) => state.products)
    const productsObject: ProductsObject = getProductsObject(productsArray)
    const product = productsObject[parseInt(id!)]
    const [count, setCount] = useState<number>(1)
    const onDecrement = () => {
        setCount((prevState: number) => prevState - 1)
    }
    const onIncrement = () => {
        setCount((prevState: number) => prevState + 1)
    }

    const isLiked = useAppSelector((state) => state.likeProducts[parseInt(id!)])
    const dispatch = useAppDispatch()

    return (
        <div className="product">
            <div className="product-info">
                <div className="product-info-top">
                    <div className="prIn-top-top">
                        <div className="title">{product.title}</div>
                        <Button
                            className="bttn-like"
                            onClick={() => dispatch(toggleLike(id))}
                        >
                            {isLiked ? (
                                <FavoriteIcon
                                    fontSize="large"
                                    className="heart"
                                />
                            ) : (
                                <FavoriteBorderIcon
                                    fontSize="large"
                                    className="heart"
                                />
                            )}
                        </Button>
                    </div>
                    <div className="price">
                        <span>Цена:</span> <span>{product.price} </span>
                        гривен
                    </div>
                    <div className="color">: {product.color}</div>
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
                            onClick={() =>
                                dispatch(addProductToCart({ id, count }))
                            }
                        >
                            Добавить в корзину
                        </Button>
                    </div>
                </div>
            </div>
            <div className="product-image">
                <img src={product.image} alt={product.title}></img>
            </div>
        </div>
    )
}

export default OneProduct
