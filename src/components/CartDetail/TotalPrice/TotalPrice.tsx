import { useAppSelector } from 'redux/hooks'
import { getProductsObject, ProductProps } from 'utils/productsArray'

type ProductsObject = {
    [id: number]: ProductProps
}

const TotalPrice = () => {
    const productsArray = useAppSelector((state) => state.products)
    const productsObject: ProductsObject = getProductsObject(productsArray)
    const productsInCart = useAppSelector((state) => state.productsInCart)

    return (
        <div className="total-price">
            Общая сумма:{' '}
            <span>
                {Object.keys(productsInCart).reduce(
                    (total, productId) =>
                        total +
                        productsInCart[parseInt(productId)] *
                            productsObject[parseInt(productId)].price,
                    0
                )}{' '}
                гривен
            </span>
        </div>
    )
}

export default TotalPrice
