import { Grid } from '@mui/material'
import productsArray from 'utils/productsArray'
import ProductListItem from './ProductListItem'

type ProductProps = {
    id: number
    title: string
    price: number
    image: string
}
type Props = {
    likeState: {
        [id: number]: boolean
    }
    toggleLike: (id: number) => void
}

const ProductsList = ({ likeState, toggleLike }: Props) => {
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
                                isLiked={likeState[id]}
                                toggleLike={toggleLike}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}

export default ProductsList
