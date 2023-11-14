import styles from "./NavBar.module.css"

interface NavProps {
    animeText: number,
    handleClick: Function
}

export function NavBar({animeText, handleClick}: NavProps){
  
    return(
        <div className={styles.container}>
            <div className={styles.aboutme}>
                <p onClick={() => handleClick(1)}>About me</p>
                {animeText === 1 && <span className={styles.line}/>}
            </div>
            <div className={styles.projects}>
                <p onClick={() => handleClick(2)}>Projects</p>
                {animeText === 2 && <span className={styles.line}/>}
            </div>
        </div>
    )
}