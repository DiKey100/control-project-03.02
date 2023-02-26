import { ProductProps } from 'utils/productsArray'

type Props = {
    productCount: number
    product: ProductProps
}

const OneProductCart = ({ product, productCount }: Props) => {
    return (
        <div>
            {product.title} : {productCount}
        </div>
    )
}

export default OneProductCart
