import productsArray, {
    getProductsObject,
    ProductProps,
} from 'utils/productsArray'

type Props = {
    whatProductsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: ProductProps
    }
}

const TotalPrice = ({
    whatProductsInCart,
    productsObject = getProductsObject(productsArray),
}: Props) => {
    return (
        <div>
            Общая сумма:{' '}
            {Object.keys(whatProductsInCart).reduce(
                (total, productId) =>
                    total +
                    whatProductsInCart[parseInt(productId)] *
                        productsObject[parseInt(productId)].price,
                0
            )}{' '}
            гривен
        </div>
    )
}

export default TotalPrice
