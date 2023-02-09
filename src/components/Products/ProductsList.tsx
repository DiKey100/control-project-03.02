import { Grid } from '@mui/material'
import ProductListItem from './ProductListItem'

type Props = {}

const ProductsList = (props: Props) => {
    return (
        <>
            <Grid
                container
                spacing={4}
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
            >
                <Grid item xs={6}>
                    <ProductListItem />
                </Grid>
                <Grid item xs={6}>
                    <ProductListItem />
                </Grid>
                <Grid item xs={6}>
                    <ProductListItem />
                </Grid>
            </Grid>
        </>
    )
}

export default ProductsList
