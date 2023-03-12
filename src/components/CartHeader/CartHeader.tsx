import ProductsInCart from 'components/CartDetail/ProductsInCart/ProductsInCart'
import { useState } from 'react'
import { useAppSelector } from 'redux/hooks'
import { getProductsObject, ProductProps } from 'utils/productsArray'
import './CartHeader.scss'

type ProductsObject = {
    [id: number]: ProductProps
}

const CartHeader = () => {
    const [isShortCartShow, setIsShortCartShow] = useState<boolean>(false)
    const productsInCart = useAppSelector((state) => state.productsInCart)
    const productsArray = useAppSelector((state) => state.products)
    const productsObject: ProductsObject = getProductsObject(productsArray)

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
                        <div className="header-total-price">
                            Общая сумма:{' '}
                            <span>
                                {Object.keys(productsInCart).reduce(
                                    (total, productId) =>
                                        total +
                                        productsInCart[parseInt(productId)] *
                                            productsObject[parseInt(productId)]
                                                .price,
                                    0
                                )}{' '}
                                гривен
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default CartHeader
