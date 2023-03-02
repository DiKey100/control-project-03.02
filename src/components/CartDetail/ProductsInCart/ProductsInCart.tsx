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
    deleteProducts?: (id: number) => void
}

const ProductsInCart = ({
    whatProductsInCart,
    productsObject = getProductsObject(productsArray),
    CartItem = OneProductCart,
    deleteProducts,
}: Props) => {
    return (
        <>
            {Object.keys(whatProductsInCart).map((productId) => (
                <CartItem
                    key={productId}
                    product={productsObject[parseInt(productId)]}
                    productCount={whatProductsInCart[parseInt(productId)]}
                    deleteProducts={deleteProducts}
                />
            ))}
        </>
    )
}

export default ProductsInCart
