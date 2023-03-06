import { Card, CardContent, Grid } from '@mui/material'
import Quantity from 'components/Quantity/Quantity'
import { useState } from 'react'
import { ProductProps } from 'utils/productsArray'
import './OneProductCartExtended.scss'

type Props = {
    productCount: number
    product: ProductProps
    deleteProducts: (id: number) => void
    changeCountProduct: (id: number, count: number) => void
}

const OneProductCartExtended = ({
    product,
    productCount,
    deleteProducts,
    changeCountProduct,
}: Props) => {
    const [isChangeCountShow, setIsChangeCountShow] = useState<boolean>(false)
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
                                            changeCountProduct(
                                                product.id,
                                                productCount - 1
                                            )
                                        }
                                        onIncrement={() =>
                                            changeCountProduct(
                                                product.id,
                                                productCount + 1
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
                                    onClick={() => deleteProducts(product.id)}
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
