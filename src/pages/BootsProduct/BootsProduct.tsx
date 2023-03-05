import DetailProductItem from 'components/DetailProducts/DetailProductItem'
import productsArray from 'utils/productsArray'

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

const BootsProduct = ({ addProductToCart }: Props) => {
    return (
        <>
            {productsArray
                .filter(({ category }: ProductProps) => category === 'boots')
                .map(({ id, title, price, color, image }: ProductProps) => (
                    <DetailProductItem
                        id={id}
                        title={title}
                        price={price}
                        color={color}
                        image={image}
                        addProductToCart={addProductToCart}
                    />
                ))}
        </>
    )
}

export default BootsProduct
