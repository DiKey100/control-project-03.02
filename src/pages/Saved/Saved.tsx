import { Grid, Typography } from '@mui/material'
import ProductsInSaved from 'components/LikeProduct/ProductsInSaved'
import { useAppSelector } from 'redux/hooks'
import './Saved.scss'

const Saved = () => {
    const likeInCart = useAppSelector((state) => state.likeProducts)

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
                <ProductsInSaved likeInCart={likeInCart} />
            </Grid>
        </>
    )
}

export default Saved
