import styles from './Hero.module.css'
import { AiOutlineSearch } from 'react-icons/ai'

const Hero = () => {
    return (
        <div className={styles.hero}>
            <form className={styles.form}>
                <div className={styles.text}>
                    <label className={styles.label}>Where</label>
                    <input className={[styles.input, styles.textInput].join(' ')} type="text" placeholder='Search Location' />
                </div>
                <div className={styles.from}>
                    <span className={styles.border}></span>
                    <label className={styles.label}>From</label>
                    <input className={styles.input} type="date" />
                </div>
                <div className={styles.until}>
                    <span className={styles.border}></span>
                    <label className={styles.label}>Until</label>
                    <input className={styles.input} type="date" />
                </div>
                <div className={styles.searchBtn}>
                    <AiOutlineSearch className={styles.icon} />
                    <button className={styles.button}>Search for cars</button>
                </div>
            </form>
        </div>
    )
}

export default Hero