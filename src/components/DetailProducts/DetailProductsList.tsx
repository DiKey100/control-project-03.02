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

const DetailProductsList = () => {
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
                    />
                )
            )}
        </>
    )
}

export default DetailProductsList
