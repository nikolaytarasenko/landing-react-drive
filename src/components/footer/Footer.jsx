import styles from './Footer.module.css'
import logo from '../../images/logo_dark.png'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <a href="/" className={styles.logo}>
                    <img src={logo} alt="Logo" />
                </a>
                <button>Share a car</button>
            </div>
        </div>
    )
}

export default Footer