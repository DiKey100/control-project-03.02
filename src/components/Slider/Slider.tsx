import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const Slider = () => {
    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={20}
            slidesPerGroup={3}
            loop={true}
            autoplay={{
                delay: 10000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            className="mySwiper"
        >
            <SwiperSlide></SwiperSlide>
        </Swiper>
    )
}

export default Slider
