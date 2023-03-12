import { Grid } from '@mui/material'
import { useAppSelector } from 'redux/hooks'
import ProductListItem from './ProductListItem'

type ProductProps = {
    id: number
    title: string
    price: number
    image: string
}

const ProductsList = () => {
    const productsArray = useAppSelector((state) => state.products)

    return (
        <>
            <Grid
                container
                spacing={5}
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
            >
                {productsArray.map(
                    ({ id, title, price, image }: ProductProps) => (
                        <Grid item xs={6} key={id}>
                            <ProductListItem
                                id={id}
                                title={title}
                                price={price}
                                image={image}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}

export default ProductsList
