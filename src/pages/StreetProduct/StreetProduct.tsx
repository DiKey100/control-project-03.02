import { Grid } from '@mui/material'
import ProductListItem from 'components/Products/ProductListItem'
import Toolbar from '@mui/material/Toolbar'
import { NavLink } from 'react-router-dom'
import '../../css/FilterProduct.scss'
import { useAppSelector } from 'redux/hooks'

type ProductProps = {
    id: number
    title: string
    price: number
    color: string
    image: string
    category: string
}

const StreetProduct = () => {
    const productsArray = useAppSelector((state) => state.products)

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
                        ({ category }: ProductProps) => category === 'street'
                    )
                    .map(({ id, title, price, image }: ProductProps) => (
                        <Grid item xs={6} key={id}>
                            <ProductListItem
                                id={id}
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

export default StreetProduct
