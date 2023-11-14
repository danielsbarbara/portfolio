import styles from "./TimeLine.module.css"

export function TimeLine(){
    return(
        <div className={styles.container}>
            <h2 className={styles.h1}>My Time line</h2>
            <div className={styles.year2014}>
                <h2>2014</h2>
                <p>I started out in the job market as a mechanic at Mercedes-Benz. There I acquired soft skills such as: proactivity, resilience, teamwork, communication and time management.</p>
            </div>
            <div className={styles.year2019}>
                <h2>2019</h2>
                <p>Moved to BMW. I developed my hardskills a lot, and polished my softskills, with a very experienced team, I was able to absorb the knowledge they passed on to me.
With a new brand, I had to adapt, with constant product training.</p>
            </div>
            <div className={styles.year2023}>
                <h2>2023</h2>
                <p>At the age of 29, and with a passion for technology since I was a kid, I decided to take a chance and attend a programming BootCamp (web development). I proved to myself that with dedication and determination, I can achieve my goals! I'm just starting out in this new career, and I'm ready to take on new challenges!</p>
            </div>
        </div>
    )
}