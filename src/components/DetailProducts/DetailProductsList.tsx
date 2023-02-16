import productsArray from 'utils/productsArray'
import DetailProductItem from './DetailProductItem'

type ProductProps = {
    title: string
    price: number
    image: string
}

type Props = {
    addProductToCart: (count: number, price: number) => void
}

const DetailProductsList = ({ addProductToCart }: Props) => {
    return (
        <>
            {productsArray.map(({ title, price, image }: ProductProps) => (
                <DetailProductItem
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
