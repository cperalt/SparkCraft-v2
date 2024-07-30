import robot from "../../assets/robotBye.webp"
import styles from "./contact.module.css";

function Contact() {
    return (
        <main>
            <section className={styles.sectionMain}>
                <img src={robot} alt="Boston Dynamics atlas" className={styles.atlasFarewell}/>
                <div>
                    <form>
                        <section className={styles.sectionSquare2}>
                            <div className={styles.fullName}>
                                <label htmlFor="first-name" id="full-name-label" className={styles.fullNameLabel}>Full Name: </label>
                                <input type="text" id="first-name" className={styles.firstName} name="first-name" placeholder="First Name" required/>
                                <input type="text" id="last-name" className={styles.lastName} name="last-name" placeholder="Last Name" required/>
                            </div>
                            <div>
                                <label htmlFor="email" className={styles.contactLabel}>Email:</label>
                                <input type="email" id="email" name="email" className={styles.sectionSquare2Inputs} placeholder="myname@example.com" required/>
                            </div>
                            <div>
                                <label htmlFor="phone" className={styles.contactLabel}>Phone:</label>
                                <input type="tel" id="phone" name="phone" placeholder="(000) 000-0000" className={`${styles.sectionSquare2Inputs} ${styles.numField}`} required/>
                            </div>
                            <div>
                                <label htmlFor="message" className={styles.contactLabel}>Message:</label>
                                <input type="text" id="message" name="phone" placeholder="Message Here" className={styles.sectionSquare2Inputs} required/>
                            </div>
                            <hr/>
                            <button type="submit" id="second_next" className={styles.buttonNext}>Submit</button>
                        </section>
                    </form>
                </div>
            </section>
        </main>
    )
}

export default Contact
