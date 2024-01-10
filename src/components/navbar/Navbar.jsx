import { useState } from 'react'
import styles from './Navbar.module.css'
import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch, AiOutlineUser } from 'react-icons/ai'
import logo from '../../images/logo.png'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    return (
        <header className={styles.navbar}>
            <img src={logo} alt="Logo" />
            <nav>
                <ul className={nav ? [styles.menu, styles.active].join(' ') : [styles.menu]}>
                    <li>
                        <a href="/">Learn More</a>
                    </li>
                    <li>
                        <a href="/">Login</a>
                    </li>
                    <li>
                        <a href="/">Sign Up</a>
                    </li>
                    <li>
                        <AiOutlineSearch style={{ marginTop: '8px' }} />
                    </li>
                    <li>
                        <AiOutlineUser style={{ marginTop: '7px' }} />
                    </li>
                </ul>
            </nav>
            <div onClick={() => setNav(!nav)} className={styles.mobile_btn}>
                {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
            </div>
        </header>
    )
}

export default Navbar
