import { Title } from "@/components/Title/Title"
import styles from "./HomePage.module.css"


export default function HomePage() {
    const newDate: number = new Date().getHours()

    function getGreeting() {
        if (newDate >= 0 && newDate < 7) {
            return 'Good Night'
        } else if (newDate < 13) {
            return 'Good Morning'
        } else if (newDate < 20) {
            return 'Good Afternoon'
        } else if (newDate <= 24) {
            return 'Good Evening'
        }
    }
    console.log(newDate)
    return (
        <div className={styles.container}>
            <header className={newDate >= 0 && newDate < 7 ? styles.headerNight : newDate < 13 ? styles.headerMorning : newDate < 20 ? styles.headerAfternoon : styles.headerEvening}>
                <Title
                    greeting={getGreeting()}
                    title="Full Stack Developer"
                    name="Daniel Bárbara"
                />
            </header>
            <body className={styles.body}>
                <div className={styles.greeting}>
                    
                </div>
            </body>
        </div>
    )
}