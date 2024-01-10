import styles from './Find.module.css'
import Card from './Card'
import { cars } from '../../utils/constants'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'

const Find = () => {
    return (
        <div className={styles.find}>
            <div className={styles.heading}>
                <h1>Find your drive</h1>
                <div className={styles.text_bg}>
                    <p>
                        <span>Explore the world's largest car sharing marketplace</span>
                    </p>
                </div>
            </div>
            <div className={styles.slider_container}>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={10}
                    slidesPerView={5}
                    navigation
                    breakpoints={{
                        320: {
                            width: 200,
                            slidesPerView: 1,
                        },
                        768: {
                            width: 768,
                            slidesPerView: 4,
                        },
                        1040: {
                            width: 1040,
                            slidesPerView: 5,
                        },
                    }}
                >
                    {cars.map(car => (
                        <SwiperSlide key={car.brand}>
                            <Card
                                image={car.image}
                                brand={car.brand}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Find