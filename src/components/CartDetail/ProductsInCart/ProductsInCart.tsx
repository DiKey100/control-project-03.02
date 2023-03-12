import { useAppSelector } from 'redux/hooks'
import { getProductsObject, ProductProps } from 'utils/productsArray'
import OneProductCart from './OneProductCart'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    CartItem?: any
}
type ProductsObject = {
    [id: number]: ProductProps
}

const ProductsInCart = ({
    productsInCart,
    CartItem = OneProductCart,
}: Props) => {
    const productsArray = useAppSelector((state) => state.products)
    const productsObject: ProductsObject = getProductsObject(productsArray)

    return (
        <>
            {Object.keys(productsInCart).map((productId) => (
                <CartItem
                    key={productId}
                    product={productsObject[parseInt(productId)]}
                    productCount={productsInCart[parseInt(productId)]}
                />
            ))}
        </>
    )
}

export default ProductsInCart
