import styles from './Driver.module.css'
import driverImage from '../../images/drive.png'

const Driver = () => {
    return (
        <div className={styles.driver}>
            <div className={styles.left}>
                <img src={driverImage} alt="Driver" />
            </div>
            <div className={styles.right}>
                <h2>Find the perfect car <span>to try before you buy</span></h2>
                <p>Make sure your future wheels work well with your lifestyle by taking your time in the driver's seat.</p>
                <button>Browse Cars</button>
            </div>
        </div>
    )
}

export default Driver
