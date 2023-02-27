import productsArray, {
    getProductsObject,
    ProductProps,
} from 'utils/productsArray'
import OneProductCart from './OneProductCart'

type Props = {
    whatProductsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: ProductProps
    }
    CartItem?: any
}

const ProductsInCart = ({
    whatProductsInCart,
    productsObject = getProductsObject(productsArray),
    CartItem = OneProductCart,
}: Props) => {
    return (
        <>
            {Object.keys(whatProductsInCart).map((productId) => (
                <CartItem
                    key={productId}
                    product={productsObject[parseInt(productId)]}
                    productCount={whatProductsInCart[parseInt(productId)]}
                />
            ))}
        </>
    )
}

export default ProductsInCart
