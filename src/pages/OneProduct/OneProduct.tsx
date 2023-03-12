import { useParams } from 'react-router-dom'
import { useAppSelector } from 'redux/hooks'
import { getProductsObject, ProductProps } from 'utils/productsArray'

type Props = {}
type ProductsObject = {
    [id: number]: ProductProps
}

const OneProduct = (props: Props) => {
    const { id } = useParams()
    const productsArray = useAppSelector((state) => state.products)
    const productsObject: ProductsObject = getProductsObject(productsArray)

    return <div>OneProduct</div>
}

export default OneProduct
