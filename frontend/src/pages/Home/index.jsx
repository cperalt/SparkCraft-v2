import hero from "../../assets/hero_vid.mp4"
import styles from './home.module.css';
import Carousel from "./carousel";

function Home() {
    return (
        <>
            <div>
                <div className={styles.headerBackground}>
                    <video playsInline autoPlay muted loop>
                        <source src={hero} type="video/mp4"/>
                    </video>
                    <div className={styles.headerBrand}>
                        <p className={`${styles.headerText}`}>crafting the robots of tommorow</p>
                    </div>
                </div>
            </div>
            <main className={`${styles.mainSection}`}>
                <section className={styles.firstSection}>
                    <div className={styles.firstSectionPara}>
                        <p className={styles.sectionStatement}><span className={styles.sectionStatementWord}>Future-oriented</span> and <span className={styles.sectionStatementWord}>creative solutions</span> to empower and assist you in today's fast-paced world.</p>
                    </div>
                    <Carousel/>
                </section>
            </main>
        </>
    )
}

export default Home
