import productsArray, {
    getProductsObject,
    ProductProps,
} from 'utils/productsArray'
import OneProductLike from './OneProductLike'

type Props = {
    likeState: {
        [id: number]: boolean
    }
    productsObject?: {
        [id: number]: ProductProps
    }
    CartItem?: any
    deleteLike: (id: number) => void
}

const ProductsInSaved = ({
    likeState,
    productsObject = getProductsObject(productsArray),
    CartItem = OneProductLike,
    deleteLike,
}: Props) => {
    return (
        <>
            {Object.keys(likeState).map((productId) => (
                <CartItem
                    key={productId}
                    product={productsObject[parseInt(productId)]}
                    deleteLike={deleteLike}
                />
            ))}
        </>
    )
}

export default ProductsInSaved
