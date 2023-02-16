type Props = {
    whatProductsInCart: {
        [id: number]: number
    }
}

const CartHeader = ({ whatProductsInCart }: Props) => {
    return (
        <div>
            {Object.keys(whatProductsInCart).map((productId) => (
                <div>
                    {productId} : {whatProductsInCart[parseInt(productId)]}
                </div>
            ))}
        </div>
    )
}

export default CartHeader
