import { Typography } from '@mui/material'
import ProductsList from 'components/Products/ProductsList'

type Props = {}

const Home = (props: Props) => {
    return (
        <>
            <Typography
                variant="h4"
                component="h1"
                align="center"
                sx={{
                    paddingBottom: '40px',
                    fontWeight: '700',
                }}
            >
                Список товаров
            </Typography>
            <ProductsList />
        </>
    )
}

export default Home
