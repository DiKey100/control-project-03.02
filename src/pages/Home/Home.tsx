import { Typography } from '@mui/material'
import FilterMenu from 'components/FilterMenu/FilterMenu'
import ProductsList from 'components/Products/ProductsList'
import Toolbar from '@mui/material/Toolbar'

type Props = {}

const Home = (props: Props) => {
    return (
        <>
            <Typography
                variant="h4"
                component="h1"
                align="center"
                sx={{
                    marginBottom: '40px',
                    fontWeight: '700',
                }}
            >
                Список товаров
            </Typography>
            <Toolbar>
                <FilterMenu />
            </Toolbar>
            <ProductsList />
        </>
    )
}

export default Home
