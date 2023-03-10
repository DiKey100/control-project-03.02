import { Typography } from '@mui/material'
import axios from 'axios'
import { useState } from 'react'

type Order = {
    name: string
    email: string
}

const Payment = () => {
    const [isOrderSend, setIsOrderSend] = useState<boolean>(false)
    const [orderData, setOrderData] = useState<Order>({
        name: '',
        email: '',
    })

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrderData((prevState: Order) => ({
            ...prevState,
            name: e.target.value,
        }))
    }
    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrderData((prevState: Order) => ({
            ...prevState,
            email: e.target.value,
        }))
    }
    const onSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        axios
            .post('https://my-json-server.typicode.com/DiKey100/server/db', {
                name: orderData.name,
                email: orderData.email,
            })
            .then((res) => res.data)
            .then(({ name, email }) => {
                setIsOrderSend(true)
                setOrderData({
                    name,
                    email,
                })
            })
    }

    const renderForm = () => {
        return (
            <form onSubmit={onSend}>
                <div>
                    <input
                        type="text"
                        value={orderData.name}
                        placeholder="Введите своё имя"
                        onChange={handleName}
                    />
                </div>
                <div>
                    <input
                        type="email"
                        value={orderData.email}
                        placeholder="Введите свою электронную почту"
                        onChange={handleEmail}
                    />
                </div>
                <button type="submit">Отправить</button>
            </form>
        )
    }
    const renderMessage = () => {
        return (
            <div>
                <div>
                    {orderData.name}, благодарим Вас за подтверждение заказа.
                </div>
                <div>
                    Полная информация выслана на электронную почту по этому
                    адресу: {orderData.email}
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
                    fontWeight: '500',
                }}
            >
                Подтверждение заказа
            </Typography>
            {isOrderSend ? renderMessage() : renderForm()}
        </>
    )
}

export default Payment
