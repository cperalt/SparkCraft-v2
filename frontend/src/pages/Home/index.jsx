import hero from "../../assets/hero_vid.mp4"
import styles from './home.module.css';

function Home() {
    return (
        <div>
            <div className={styles.headerBackground}>
                <video playsInline autoPlay muted loop>
                    <source src={hero} type="video/mp4"/>
                </video>
                <div className={styles.headerBrand}>
                    <p className={styles.headerText}>crafting the robots of tommorow</p>
                </div>
            </div>
        </div>
    )
}

export default Home
