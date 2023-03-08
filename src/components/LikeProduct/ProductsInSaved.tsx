import productsArray, {
    getProductsObject,
    ProductProps,
} from 'utils/productsArray'
import OneProductLike from './OneProductLike'

type Props = {
    likeInCart: {
        [id: number]: boolean
    }
    productsObject?: {
        [id: number]: ProductProps
    }
    CartItem?: any
}

const ProductsInSaved = ({
    likeInCart,
    productsObject = getProductsObject(productsArray),
    CartItem = OneProductLike,
}: Props) => {
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
