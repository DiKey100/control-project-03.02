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
    deleteProducts?: (id: number) => void
    changeCountProduct?: (id: number, count: number) => void
}

const ProductsInCart = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
    CartItem = OneProductCart,
    deleteProducts,
    changeCountProduct,
}: Props) => {
    return (
        <>
            {Object.keys(productsInCart).map((productId) => (
                <CartItem
                    key={productId}
                    product={productsObject[parseInt(productId)]}
                    productCount={productsInCart[parseInt(productId)]}
                    deleteProducts={deleteProducts}
                    changeCountProduct={changeCountProduct}
                />
            ))}
        </>
    )
}

export default ProductsInCart
