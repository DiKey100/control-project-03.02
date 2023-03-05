export type ProductProps = {
    id: number
    title: string
    price: number
    color: string
    image: string
    category: string
}

const productsArray:ProductProps[] = [
    {
        id: 1,
        title: "Классические кеды",
        price: 600,
        color: "Чёрный, белый",
        image: "/images/size-1.jpg",
        category: "street"
    },
    {
        id: 2,
        title: "Кроссовки FILA",
        price: 400,
        color: "Белый, серый, чёрный, красный",
        image: "/images/size-2.jpg",
        category: "sport"
    },
    {
        id: 3,
        title: "Кроссовки Fagaoge",
        price: 700,
        color: "Чёрный, белый, тёмно-зелёный",
        image: "/images/size-3.jpg",
        category: "sport"
    },
    {
        id: 4,
        title: "Кроссовки SD",
        price: 450,
        color: "Белый, чёрный, жёлтый, зелёный",
        image: "/images/size-4.jpg",
        category: "sport"
    },
    {
        id: 5,
        title: "Кроссовки Fashion",
        price: 600,
        color: "Чёрный, белый",
        image: "/images/size-5.jpg",
        category: "street"
    },
    {
        id: 6,
        title: "Кроссовки Nike Air",
        price: 800,
        color: "Крайола, молочный, синий, жёлтый",
        image: "/images/size-6.jpg",
        category: "sport"
    },
    {
        id: 7,
        title: "Кроссовки Fashion",
        price: 700,
        color: "Серый, белый, салатовый, чёрный",
        image: "/images/size-7.jpg",
        category: "sport"
    },
    {
        id: 8,
        title: "Кроссовки Bonote Sport",
        price: 80,
        color: "Белый, чёрный, красный",
        image: "/images/size-8.jpg",
        category: "sport"
    },
    {
        id: 9,
        title: "Кроссовки Denim ASR",
        price: 800,
        color: "Чёрный, белый, серый, зелёный",
        image: "/images/size-9.jpg",
        category: "sport"
    },
    {
        id: 10,
        title: "Ботинки высокие",
        price: 750,
        color: "Чёрный",
        image: "/images/size-10.jpg",
        category: "boots"
    },
    {
        id: 11,
        title: "Кроссовки My Team",
        price: 750,
        color: "Белый, чёрный, оранжевый",
        image: "/images/size-11.jpg",
        category: "sport"
    },
    {
        id: 12,
        title: "Кроссовки зимние с мехом",
        price: 650,
        color: "Белый, чёрный",
        image: "/images/size-12.jpg",
        category: "street"
    },
    {
        id: 13,
        title: "Кроссовки Dolche & Gabbana",
        price: 1300,
        color: "Белый, оранжевый, синий, чёрный",
        image: "/images/size-13.jpg",
        category: "sport"
    },
    {
        id: 14,
        title: "Кроссовки Superm",
        price: 850,
        color: "Белый, чёрный",
        image: "/images/size-14.jpg",
        category: "sport"
    },
    {
        id: 15,
        title: "Ботинки высокие",
        price: 800,
        color: "Терракот, чёрный",
        image: "/images/size-15.jpg",
        category: "boots"
    },
    {
        id: 16,
        title: "Ботинки короткие",
        price: 800,
        color: "Коричневый, чёрный",
        image: "/images/size-16.jpg",
        category: "boots"
    },
    {
        id: 17,
        title: "Кроссовки Air",
        price: 1300,
        color: "Чёрный, терракот",
        image: "/images/size-17.jpg",
        category: "street"
    },
    {
        id: 18,
        title: "Кроссовки My Team",
        price: 750,
        color: "Чёрный, белый, зелёный",
        image: "/images/size-18.jpg",
        category: "sport"
    },
    {
        id: 19,
        title: "Кроссовки Air",
        price: 1300,
        color: "Чёрный, белый",
        image: "/images/size-19.jpg",
        category: "street"
    },
    {
        id: 20,
        title: "Кроссовки Super",
        price: 900,
        color: "Чёрный",
        image: "/images/size-20.jpg",
        category: "sport"
    } 
]

export const getProductsObject = (array:ProductProps[]) => array.reduce((object,product) => ({
    ...object,
    [product.id]:product
}),{})

export default productsArray