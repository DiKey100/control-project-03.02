import DetailProductsList from 'components/DetailProducts/DetailProductsList'

type Props = {
    addProductToCart: (count: number, price: number) => void
}

const Products = ({ addProductToCart }: Props) => {
    return (
        <>
            <DetailProductsList addProductToCart={addProductToCart} />
        </>
    )
}

export default Products
