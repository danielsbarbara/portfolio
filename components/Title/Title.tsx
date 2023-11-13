import styles from "./Title.module.css"

interface Props {
    title: string,
    name: string,
    greeting: string | undefined,
}
export function Title({title, name, greeting}: Props){
    return(
        <div className={styles.container}>
            <h5>{greeting}</h5>
            <h1 className={styles.title}>{title}</h1>
            <h4 className={styles.name}>{name}</h4>
        </div>
    )
}