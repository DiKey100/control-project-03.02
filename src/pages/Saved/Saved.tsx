import { Grid, Typography } from '@mui/material'
import ProductsInSaved from 'components/LikeProduct/ProductsInSaved'
import './Saved.scss'

type Props = {
    likeState: {
        [id: number]: boolean
    }
    deleteLike: (id: number) => void
    toggleLike: (id: number) => void
}

const Saved = ({ likeState, deleteLike, toggleLike }: Props) => {
    return (
        <>
            <Typography
                variant="h4"
                component="h1"
                align="center"
                sx={{
                    marginBottom: '30px',
                    fontWeight: '500',
                }}
            >
                Избранное
            </Typography>
            <Grid
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="center"
                spacing={3}
            >
                <ProductsInSaved
                    likeState={likeState}
                    deleteLike={deleteLike}
                />
            </Grid>
        </>
    )
}

export default Saved
