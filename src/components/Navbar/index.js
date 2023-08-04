import styles from './Navbar.module.css'
import searchIcon from '../../assets/search-icon.svg'
import emojiIcon from '../../assets/emoji-icon.svg'

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <img
                src={emojiIcon} 
                style={{marginRight: 8}} 
                className={styles.navIcon}
                alt="emoji icon"
            />
            <img
                src={searchIcon} 
                style={{marginTop: 3}} 
                className={styles.navIcon}
                alt="search icon"
            />
            <span className={styles.navTitle}>Search Emoji</span>
        </nav>
    )
}

export default Navbar