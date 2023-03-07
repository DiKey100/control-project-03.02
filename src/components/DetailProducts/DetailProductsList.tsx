import productsArray from 'utils/productsArray'
import DetailProductItem from './DetailProductItem'

type ProductProps = {
    id: number
    title: string
    price: number
    color: string
    image: string
    category?: string
}

type Props = {
    addProductToCart: (id: number, count: number) => void
}

const DetailProductsList = ({ addProductToCart }: Props) => {
    return (
        <>
            {productsArray.map(
                ({ id, title, price, color, image }: ProductProps) => (
                    <DetailProductItem
                        id={id}
                        title={title}
                        price={price}
                        color={color}
                        image={image}
                        addProductToCart={addProductToCart}
                    />
                )
            )}
        </>
    )
}

export default DetailProductsList
