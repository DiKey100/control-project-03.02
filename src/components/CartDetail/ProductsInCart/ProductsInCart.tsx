import productsArray, {
    getProductsObject,
    ProductProps,
} from 'utils/productsArray'
import OneProductCart from './OneProductCart'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: ProductProps
    }
    CartItem?: any
}

const ProductsInCart = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
    CartItem = OneProductCart,
}: Props) => {
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
