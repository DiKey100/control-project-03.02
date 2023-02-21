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
            >
                Показать корзину
            </button>
            {isShortCartShow && (
                <div className="sh-cart">
                    <div
                        onClick={() => setIsShortCartShow(false)}
                        className="close-sh-cart"
                    >
                        X
                    </div>
                    <div className="sh-cart-info">
                        <div>
                            {Object.keys(whatProductsInCart).map(
                                (productId) => (
                                    <div key={productId}>
                                        {
                                            productsObject[parseInt(productId)]
                                                .title
                                        }{' '}
                                        :{' '}
                                        {
                                            whatProductsInCart[
                                                parseInt(productId)
                                            ]
                                        }
                                    </div>
                                )
                            )}
                        </div>
                        <div>
                            Общая сумма:{' '}
                            {Object.keys(whatProductsInCart).reduce(
                                (total, productId) =>
                                    total +
                                    whatProductsInCart[parseInt(productId)] *
                                        productsObject[parseInt(productId)]
                                            .price,
                                0
                            )}{' '}
                            гривен
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default CartHeader
