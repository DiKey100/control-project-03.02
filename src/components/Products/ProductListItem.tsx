import { Button, Card, CardActions, CardContent } from '@mui/material'

type Props = {}

const ProductListItem = (props: Props) => {
    return (
        <Card className="product-list">
            <CardContent></CardContent>
            <CardActions>
                <Button>Добавить в коризну</Button>
            </CardActions>
        </Card>
    )
}

export default ProductListItem
