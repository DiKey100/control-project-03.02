import { Grid } from '@mui/material'
import productsArray from 'utils/productsArray'
import ProductListItem from './ProductListItem'

type ProductProps = {
    id: number
    title: string
    price: number
    image: string
}

const ProductsList = () => {
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
