import styles from './Luxury.module.css'
import { luxuryCars } from '../../utils/constants'

const Luxury = () => {
    return (
        <div className={styles.luxury}>
            <div className={styles.heading}>
                <h2>Luxury Selection</h2>
                <div className={styles.text_bg}>
                    <p>
                        <span>Select from the top luxury vehicles to roll in style</span>
                    </p>
                </div>
            </div>
            <div className={styles.container}>
                {luxuryCars.map(car => (
                    <div className={styles.card} key={car.brand}>
                        <img src={car.image} alt={car.brand} />
                        <div className={styles.content}>
                            <h3>{car.brand}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Luxury