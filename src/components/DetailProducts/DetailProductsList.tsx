import { useAppSelector } from 'redux/hooks'
import DetailProductItem from './DetailProductItem'

type ProductProps = {
    id: number
    title: string
    price: number
    color: string
    image: string
    category: string
}

const DetailProductsList = () => {
    const productsArray = useAppSelector((state) => state.products)

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
