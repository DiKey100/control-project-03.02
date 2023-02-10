import { Grid } from '@mui/material'
import productsArray from 'utils/productsArray'
import ProductListItem from './ProductListItem'

type ProductProps = {
    title: string
    price: number
}

type Props = {}

const ProductsList = (props: Props) => {
    return (
        <>
            <Grid
                container
                spacing={5}
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
            >
                {productsArray.map(({ title, price }: ProductProps) => (
                    <Grid item xs={6}>
                        <ProductListItem title={title} price={price} />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default ProductsList
