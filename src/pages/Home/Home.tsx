import { Typography } from '@mui/material'
import FilterMenu from 'components/FilterMenu/FilterMenu'
import ProductsList from 'components/Products/ProductsList'
import Toolbar from '@mui/material/Toolbar'

const Home = () => {
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
            <Toolbar
                style={{
                    justifyContent: 'center',
                }}
            >
                <FilterMenu />
            </Toolbar>
            <ProductsList />
        </>
    )
}

export default Home
