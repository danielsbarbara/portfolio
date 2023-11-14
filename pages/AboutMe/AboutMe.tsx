import { TimeLine } from "@/components/TimeLine/TimeLine"
import styles from "./AboutMe.module.css"

export function AboutMe(){
    return (
        <div className={styles.container}>
            <TimeLine/>
        </div>
    )
}