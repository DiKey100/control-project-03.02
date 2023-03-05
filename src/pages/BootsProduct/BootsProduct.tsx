import { Grid } from '@mui/material'
import ProductListItem from 'components/Products/ProductListItem'
import productsArray from 'utils/productsArray'
import Toolbar from '@mui/material/Toolbar'
import { NavLink } from 'react-router-dom'
import '../../css/FilterProduct.scss'

type ProductProps = {
    id: number
    title: string
    price: number
    color: string
    image: string
    category?: string
}

const BootsProduct = () => {
    return (
        <>
            <Toolbar>
                <NavLink to="/" className="back-to-home">
                    На главную...
                </NavLink>
            </Toolbar>
            <Grid
                container
                spacing={5}
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
            >
                {productsArray
                    .filter(
                        ({ category }: ProductProps) => category === 'boots'
                    )
                    .map(({ id, title, price, image }: ProductProps) => (
                        <Grid item xs={6} key={id}>
                            <ProductListItem
                                title={title}
                                price={price}
                                image={image}
                            />
                        </Grid>
                    ))}
            </Grid>
        </>
    )
}

export default BootsProduct
