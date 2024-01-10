import styles from './Find.module.css'

const Card = ({ image, brand }) => {
    return (
        <div className={styles.card}>
            <img src={image} alt={brand} />
            <p>{brand}</p>
        </div>
    )
}

export default Card