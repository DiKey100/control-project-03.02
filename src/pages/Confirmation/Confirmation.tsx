import { Typography } from '@mui/material'
import { useAppSelector } from 'redux/hooks'
import { getProductsObject, ProductProps } from 'utils/productsArray'
import { useState } from 'react'
import './Confirmation.scss'
import axios from 'axios'

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
    const [isOrderSend, setIsOrderSend] = useState<boolean>(false)

    const onSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        axios
            .post(
                'https://my-json-server.typicode.com/kznkv-skillup/server/orders',
                {
                    name: orderData.name,
                    address: orderData.address,
                    email: orderData.email,
                }
            )
            .then((res) => res.data)
            .then(({ name, address, email }) => {
                setIsOrderSend(true)
                setOrderData({
                    name,
                    address,
                    email,
                })
            })
    }
    const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrderData((prevState: Order) => ({
            ...prevState,
            name: e.target.value,
        }))
    }
    const changeAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrderData((prevState: Order) => ({
            ...prevState,
            address: e.target.value,
        }))
    }
    const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrderData((prevState: Order) => ({
            ...prevState,
            email: e.target.value,
        }))
    }

    const renderForm = () => {
        return (
            <form className="form" onSubmit={onSend}>
                <div className="form-text">
                    Пожалуйста, подтвердите свой заказ на{' '}
                    <span>
                        {Object.keys(productsInCart).reduce(
                            (total, productId) =>
                                total +
                                productsInCart[parseInt(productId)] *
                                    productsObject[parseInt(productId)].price,
                            0
                        )}
                    </span>{' '}
                    гривен. В строках ниже введите свои фамилию, имя, адрес
                    своего местоположения и свою электронную почту:
                </div>
                <div>
                    <input
                        type="text"
                        value={orderData.name}
                        placeholder="Введите, пожалуйста, свои фамилию и имя"
                        className="form-name"
                        onChange={changeName}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        value={orderData.address}
                        placeholder="Введите, пожалуйста, свой адрес"
                        className="form-address"
                        onChange={changeAddress}
                    />
                </div>
                <div>
                    <input
                        type="email"
                        value={orderData.email}
                        placeholder="Введите, пожалуйста, свой e-mail"
                        className="form-email"
                        onChange={changeEmail}
                    />
                </div>
                <button type="submit" className="bttn-ordering">
                    Оформить заказ
                </button>
            </form>
        )
    }
    const renderMassage = () => {
        return (
            <div>
                <div className="form-text">
                    {orderData.name}, большое спасибо за выбор нашего магазина
                    обуви. В скором времени ожидайте свою посылку на адрес:
                    <br />
                    <span>{orderData.address}</span>
                </div>
                <div className="form-text">
                    Более детальный отчёт выслан на Вашу электронную почту:
                    <br />
                    <span>{orderData.email}</span>
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
            {isOrderSend ? renderMassage() : renderForm()}
        </>
    )
}

export default Confirmation
