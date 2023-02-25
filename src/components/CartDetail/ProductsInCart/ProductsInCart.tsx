import productsArray, {
    getProductsObject,
    ProductProps,
} from 'utils/productsArray'

type Props = {
    whatProductsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: ProductProps
    }
}

const ProductsInCart = ({
    whatProductsInCart,
    productsObject = getProductsObject(productsArray),
}: Props) => {
    return (
        <div>
            {Object.keys(whatProductsInCart).map((productId) => (
                <div key={productId}>
                    {productsObject[parseInt(productId)].title} :{' '}
                    {whatProductsInCart[parseInt(productId)]}
                </div>
            ))}
        </div>
    )
}

export default ProductsInCart
