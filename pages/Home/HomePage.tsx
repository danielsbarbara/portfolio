import { Title } from "@/components/Title/Title"
import styles from "./HomePage.module.css"

export default function HomePage(){
    const newDate: number = new Date().getHours()
    function getGreeting(){
        if(newDate >= 0 && newDate <= 7){
            return 'Boa Madrugada'
        } else if (newDate > 7 && newDate <= 13){
            return 'Bom Dia'
        } else if( newDate > 13 && newDate < 20){
            return 'Boa Tarde'
        } else if(newDate >= 20 && newDate <= 24){
            return 'Boa Noite'
        }
    }

    return(
        <div className={styles.container}>
            <header className={styles.headerMorning}>
                <Title
                greeting={getGreeting()}
                title="Full Stack Developer"
                name="Daniel Bárbara"
                />
            </header>
        </div>
    )
}