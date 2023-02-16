import productsArray from 'utils/productsArray'
import DetailProductItem from './DetailProductItem'

type ProductProps = {
    id: number
    title: string
    price: number
    image: string
}

type Props = {
    addProductToCart: (id: number, count: number) => void
}

const DetailProductsList = ({ addProductToCart }: Props) => {
    return (
        <>
            {productsArray.map(({ id, title, price, image }: ProductProps) => (
                <DetailProductItem
                    id={id}
                    title={title}
                    price={price}
                    image={image}
                    addProductToCart={addProductToCart}
                />
            ))}
        </>
    )
}

export default DetailProductsList
