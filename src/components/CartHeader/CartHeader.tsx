import productsArray from 'utils/productsArray'

type Props = {
    whatProductsInCart: {
        [id: number]: number
    }
}

const CartHeader = ({ whatProductsInCart }: Props) => {
    return (
        <div>
            {Object.keys(whatProductsInCart).map((productId) => (
                <div key={productId}>
                    {productsArray[parseInt(productId) - 1].title} :{' '}
                    {whatProductsInCart[parseInt(productId)]}
                </div>
            ))}
        </div>
    )
}

export default CartHeader
