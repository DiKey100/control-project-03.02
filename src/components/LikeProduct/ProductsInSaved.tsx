import { useAppSelector } from 'redux/hooks'
import { getProductsObject, ProductProps } from 'utils/productsArray'
import OneProductLike from './OneProductLike'

type Props = {
    CartItem?: any
}
type ProductsObject = {
    [id: number]: ProductProps
}

const ProductsInSaved = ({ CartItem = OneProductLike }: Props) => {
    const productsArray = useAppSelector((state) => state.products)
    const productsObject: ProductsObject = getProductsObject(productsArray)
    const likeInCart = useAppSelector((state) => state.likeProducts)

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
