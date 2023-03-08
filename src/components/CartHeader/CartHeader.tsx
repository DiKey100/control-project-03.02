import ProductsInCart from 'components/CartDetail/ProductsInCart/ProductsInCart'
import TotalPrice from 'components/CartDetail/TotalPrice/TotalPrice'
import { useState } from 'react'
import { useAppSelector } from 'redux/hooks'
import './CartHeader.scss'

const CartHeader = () => {
    const [isShortCartShow, setIsShortCartShow] = useState<boolean>(false)
    const productsInCart = useAppSelector((state) => state.productsInCart)

    return (
        <div>
            <button
                onClick={() => setIsShortCartShow(true)}
                className="open-sh-cart"
            ></button>
            {isShortCartShow && (
                <div className="sh-cart">
                    <div
                        onClick={() => setIsShortCartShow(false)}
                        className="close-sh-cart"
                    >
                        X
                    </div>
                    <div className="sh-cart-info">
                        <ProductsInCart productsInCart={productsInCart} />
                        <TotalPrice productsInCart={productsInCart} />
                    </div>
                </div>
            )}
        </div>
    )
}

export default CartHeader
