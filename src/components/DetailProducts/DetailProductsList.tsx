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
    likeState: {
        [id: number]: boolean
    }
    toggleLike: (id: number) => void
}

const DetailProductsList = ({
    addProductToCart,
    likeState,
    toggleLike,
}: Props) => {
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
                        isLiked={likeState[id]}
                        toggleLike={toggleLike}
                    />
                )
            )}
        </>
    )
}

export default DetailProductsList
