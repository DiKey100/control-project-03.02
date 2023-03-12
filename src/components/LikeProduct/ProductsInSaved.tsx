import { useAppSelector } from 'redux/hooks'
import { getProductsObject, ProductProps } from 'utils/productsArray'
import OneProductLike from './OneProductLike'

type Props = {
    likeInCart: {
        [id: number]: boolean
    }
    CartItem?: any
}
type ProductsObject = {
    [id: number]: ProductProps
}

const ProductsInSaved = ({ likeInCart, CartItem = OneProductLike }: Props) => {
    const productsArray = useAppSelector((state) => state.products)
    const productsObject: ProductsObject = getProductsObject(productsArray)

    return (
        <>
            {Object.keys(likeInCart).map((productId) => (
                <CartItem
                    key={productId}
                    product={productsObject[parseInt(productId)]}
                />
            ))}
        </>
    )
}

export default ProductsInSaved
