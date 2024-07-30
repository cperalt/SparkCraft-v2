import styles from "./footer.module.css";
import hal from "../../assets/android.png";

function Footer() {
    return (
        <footer className={`${styles.footer} bg-white`}>
            <section className={styles.footerContact}>
                <h2 className="text-red-500">Lets talk</h2>
                <h3>hi@sparkcraft.net</h3>
                <p>Contact us</p>
            </section>
            <section className={styles.footerContent}>
                <a>
                    <ul>
                    <li className={styles.footerContentHeader}>What we do</li>
                    <li>Technology</li>
                    <li>Design</li>
                    <li>Infrastructure</li>
                    <li>Games</li>
                    </ul>
                </a>
                <a>
                    <ul>
                        <li className={styles.footerContentHeader}><a>Social</a></li>
                        <a><li>Discord</li></a>
                        <a href="https://twitter.com/figure_robot?lang=en"><li>Twitter</li></a>
                        <a href="https://www.youtube.com/watch?v=-9EM5_VFlt8"><li>Youtube</li></a>
                        <a href="https://github.com/cperalt"><li>Github</li></a>
                    </ul>
                </a>
                <a>
                    <ul>
                    <li className={styles.footerContentHeader}>Company</li>
                    <li>About</li>
                    <li>Career</li>
                    <li>Robots</li>
                    <li>Status</li>
                    </ul>
                </a>
            </section>
            <section className={styles.footerLegal}>
                <p>©  2024 SparkCraft Inc.</p>
                <ul className={styles.footerLegalContainer}>
                    <a><li>Privacy</li></a>
                    <a><li>Imprint</li></a>
                    <a><li>Terms of Service</li></a>
                    <a><li>Language</li></a>
                    <li><img src={hal} className={styles.droidImg} alt="hal"/></li>
                </ul>
            </section>
        </footer>
    )
}

export default Footer
