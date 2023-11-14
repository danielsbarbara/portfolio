import { Title } from "@/components/Title/Title"
import styles from "./HomePage.module.css"
import { SocialMedia } from "@/components/socialMedia/SocialMedia"
import { Cards } from "@/components/cards/cards"
import { NavBar } from "@/components/navbar/NavBar"
import {useState} from "react"

export default function HomePage() {
    const [animeText, setAnimeText] = useState(0)

    function handleClick(value: number){
        setAnimeText(value)
    }

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
                    title="Junior Full Stack Developer"
                    name="Daniel Bárbara"
                />
            </header>
            <nav className={styles.navbar}>
                <NavBar animeText={animeText} handleClick={handleClick}/>
            </nav>
            <div className={styles.body}>
                <div className={styles.socialmedia}>
                    <SocialMedia />
                </div>
                <div className={styles.cards}>
                    {animeText === 2 && <Cards />}
                </div>
            </div>
        </div>
    )
}