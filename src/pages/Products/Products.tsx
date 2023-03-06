import DetailProductsList from 'components/DetailProducts/DetailProductsList'

type Props = {
    addProductToCart: (id: number, count: number) => void
    likeState: {
        [id: number]: boolean
    }
    toggleLike: (id: number) => void
}

const Products = ({ addProductToCart, likeState, toggleLike }: Props) => {
    return (
        <>
            <DetailProductsList
                addProductToCart={addProductToCart}
                likeState={likeState}
                toggleLike={toggleLike}
            />
        </>
    )
}

export default Products
