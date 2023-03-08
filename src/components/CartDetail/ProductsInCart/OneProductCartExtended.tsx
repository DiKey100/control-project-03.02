import { Card, CardContent, Grid } from '@mui/material'
import Quantity from 'components/Quantity/Quantity'
import { useState } from 'react'
import { changeCount, deleteProduct } from 'redux/cartReducer'
import { useAppDispatch } from 'redux/hooks'
import { ProductProps } from 'utils/productsArray'
import './OneProductCartExtended.scss'

type Props = {
    productCount: number
    product: ProductProps
}

const OneProductCartExtended = ({ product, productCount }: Props) => {
    const [isChangeCountShow, setIsChangeCountShow] = useState<boolean>(false)
    const dispatch = useAppDispatch()

    return (
        <Grid item xs={12}>
            <Card
                sx={{
                    borderRadius: '20px',
                }}
            >
                <CardContent className="cart">
                    <div className="cart-information">
                        <div className="cart-title">{product.title}</div>
                        <div className="cart-info">
                            <div className="cart-info-numb">
                                <div className="cart-price">
                                    Цена товара:{' '}
                                    <span>{product.price} гривен</span>
                                </div>
                                <div className="cart-count">
                                    Количество товара:{' '}
                                    <span>{productCount}</span>
                                </div>
                            </div>
                            {isChangeCountShow && (
                                <div className="ch-count">
                                    <div
                                        className="close-ch-count"
                                        onClick={() =>
                                            setIsChangeCountShow(false)
                                        }
                                    >
                                        X
                                    </div>
                                    <Quantity
                                        count={productCount}
                                        onDecrement={() =>
                                            dispatch(
                                                changeCount({
                                                    id: product.id,
                                                    count: productCount - 1,
                                                })
                                            )
                                        }
                                        onIncrement={() =>
                                            dispatch(
                                                changeCount({
                                                    id: product.id,
                                                    count: productCount + 1,
                                                })
                                            )
                                        }
                                    />
                                </div>
                            )}
                            <div className="cart-info-func">
                                <div
                                    onClick={() => setIsChangeCountShow(true)}
                                    className="open-change-count"
                                >
                                    Изменить кол-во
                                </div>

                                <div
                                    className="delete-product"
                                    onClick={() =>
                                        dispatch(deleteProduct(product.id))
                                    }
                                >
                                    Удалить товар
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cart-image">
                        <img src={product.image} alt="" />
                    </div>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default OneProductCartExtended
