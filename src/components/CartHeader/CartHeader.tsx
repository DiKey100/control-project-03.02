import ProductsInCart from 'components/CartDetail/ProductsInCart/ProductsInCart'
import TotalPrice from 'components/CartDetail/TotalPrice/TotalPrice'
import { useState } from 'react'
import './CartHeader.scss'

type Props = {
    whatProductsInCart: {
        [id: number]: number
    }
}

const CartHeader = ({ whatProductsInCart }: Props) => {
    const [isShortCartShow, setIsShortCartShow] = useState<boolean>(false)
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
                        <ProductsInCart
                            whatProductsInCart={whatProductsInCart}
                        />
                        <TotalPrice whatProductsInCart={whatProductsInCart} />
                    </div>
                </div>
            )}
        </div>
    )
}

export default CartHeader
