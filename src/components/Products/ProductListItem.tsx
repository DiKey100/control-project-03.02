import { Button, Card, CardActions, CardContent, Grid } from '@mui/material'

type Props = {}

const ProductListItem = (props: Props) => {
    return (
        <Card className="product-list">
            <CardContent>
                <div className="product-title">Кроссовки</div>
                <div className="product-price">600 гривен</div>
            </CardContent>
            <CardActions>
                <Grid
                    container
                    direction="row-reverse"
                    justifyContent="space-between"
                    alignItems="flex-end"
                >
                    <Grid item>
                        <Button className="add-to-cart">
                            Добавить в корзину
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button className="look-to-product">
                            Просмотреть товар
                        </Button>
                    </Grid>
                </Grid>
            </CardActions>
        </Card>
    )
}

export default ProductListItem
