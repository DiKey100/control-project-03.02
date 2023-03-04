import { Button, TextField } from '@mui/material'

type Props = {
    count: number
    onDecrement: () => void
    onIncrement: () => void
}

const Quantity = ({ count, onDecrement, onIncrement }: Props) => {
    return (
        <div className="product-quantity">
            <Button
                className="bttn-minus"
                onClick={() => onDecrement()}
                disabled={count <= 1}
            >
                —
            </Button>
            <TextField
                value={count}
                size="medium"
                className="quantity-number"
                sx={{
                    height: '60px',
                }}
            />
            <Button className="bttn-plus" onClick={() => onIncrement()}>
                +
            </Button>
        </div>
    )
}

export default Quantity
