export type ProductProps = {
    id: number
    title: string
    price: number
    color: string
    image: string
    category: string
}

export const getProductsObject = (array:ProductProps[]) => array.reduce((object,product) => ({
    ...object,
    [product.id]:product
}),{})