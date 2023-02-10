import { Button, Card, CardActions, CardContent, Grid } from '@mui/material'
import './ProductListItem.scss'

type Props = {}

const ProductListItem = (props: Props) => {
    return (
        <Card className="product-list">
            <CardContent>
                <div className="product">
                    <div className="title">Кроссовки</div>
                    <div className="price">Цена: 600 гривен</div>
                </div>
            </CardContent>
            <CardActions>
                <Grid
                    container
                    direction="row-reverse"
                    justifyContent="space-between"
                    alignItems="flex-end"
                >
                    <Grid item>
                        <Button variant="outlined" className="add-to-cart">
                            Добавить в корзину
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" className="look-to-product">
                            Просмотреть товар
                        </Button>
                    </Grid>
                </Grid>
            </CardActions>
        </Card>
    )
}

export default ProductListItem
