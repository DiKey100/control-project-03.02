import ProductsInCart from 'components/ProductsInCart/ProductsInCart'
import TotalPrice from 'components/TotalPrice/TotalPrice'
import { useState } from 'react'
import productsArray, {
    getProductsObject,
    ProductProps,
} from 'utils/productsArray'
import './CartHeader.scss'

type Props = {
    whatProductsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: ProductProps
    }
}

const CartHeader = ({
    whatProductsInCart,
    productsObject = getProductsObject(productsArray),
}: Props) => {
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
