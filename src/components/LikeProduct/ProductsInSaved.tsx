import { likeSlice } from 'redux/likeReducer'
import productsArray, {
    getProductsObject,
    ProductProps,
} from 'utils/productsArray'
import OneProductLike from './OneProductLike'

type Props = {
    productsObject?: {
        [id: number]: ProductProps
    }
    CartItem?: any
}

const ProductsInSaved = ({
    productsObject = getProductsObject(productsArray),
    CartItem = OneProductLike,
}: Props) => {
    return (
        <>
            {Object.keys(likeSlice.reducer).map((productId) => (
                <CartItem
                    key={productId}
                    product={productsObject[parseInt(productId)]}
                />
            ))}
        </>
    )
}

export default ProductsInSaved
