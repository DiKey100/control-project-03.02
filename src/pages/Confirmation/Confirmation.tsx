import { Button, Typography } from '@mui/material'
import { useAppSelector } from 'redux/hooks'
import { getProductsObject, ProductProps } from 'utils/productsArray'
import { useState } from 'react'
import './Confirmation.scss'

type ProductsObject = {
    [id: number]: ProductProps
}
type Order = {
    name: string
    address: string
    email: string
}

const Confirmation = () => {
    const productsArray = useAppSelector((state) => state.products)
    const productsObject: ProductsObject = getProductsObject(productsArray)
    const productsInCart = useAppSelector((state) => state.productsInCart)

    const [orderData, setOrderData] = useState<Order>({
        name: '',
        address: '',
        email: '',
    })

    const renderForm = () => {
        return (
            <form>
                <div className="form-text">
                    Пожалуйста, подтвердите свой заказ на{' '}
                    {Object.keys(productsInCart).reduce(
                        (total, productId) =>
                            total +
                            productsInCart[parseInt(productId)] *
                                productsObject[parseInt(productId)].price,
                        0
                    )}{' '}
                    гривен. В строках ниже введите свои фамилию, имя, адрес
                    своего местоположения и свою электронную почту:
                </div>
                <div>
                    <input
                        type="text"
                        value=""
                        placeholder="Введите, пожалуйста, свои фамилию и имя"
                        className="form-name"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        value=""
                        placeholder="Введите, пожалуйста, свой адрес"
                        className="form-address"
                    />
                </div>
                <div>
                    <input
                        type="email"
                        value=""
                        placeholder="Введите, пожалуйста, свой e-mail"
                        className="form-email"
                    />
                </div>
                <Button variant="outlined" className="bttn-ordering">
                    Оформить заказ
                </Button>
            </form>
        )
    }
    const renderMassage = () => {
        return (
            <div>
                <div>
                    {orderData.name}, большое спасибо за выбор нашего магазина
                    обуви. В скором времени ожидайте свою посылку на адрес:{' '}
                    {orderData.address}
                </div>
                <div>
                    Более детальный отчёт выслан на Вашу электронную почту:{' '}
                    {orderData.email}
                </div>
            </div>
        )
    }

    return (
        <>
            <Typography
                variant="h4"
                component="h1"
                align="center"
                sx={{
                    marginBottom: '30px',
                    fontWeight: '600',
                }}
            >
                Подтверждение заказа
            </Typography>
        </>
    )
}

export default Confirmation
