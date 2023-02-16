import DetailProductsList from 'components/DetailProducts/DetailProductsList'

type Props = {
    addProductToCart: (id: number, count: number) => void
}

const Products = ({ addProductToCart }: Props) => {
    return (
        <>
            <DetailProductsList addProductToCart={addProductToCart} />
        </>
    )
}

export default Products
