import Link from "next/link"
import styles from "./SocialMedia.module.css"

interface navbarObj {
    url: string,
    description: string,
    link: string
}

const urlImages: Array<navbarObj> = [
    {
        url: "icons/logo-github.jpg",
        description: "GitHub",
        link: "https://github.com/danielsbarbara"
    }, {
        url: "icons/linkedin.png",
        description: "Linkedin",
        link: "https://www.linkedin.com/in/danielsbarbara/"
    }]

export function SocialMedia() {
    function handleClick(){
        
    }
    return (
        <div className={styles.container}>
            {urlImages.map(item =>
            <div className={styles.content}> 
                <Link href={item.link} className={styles.link} target="blank">
                    <div className={styles.imgDiv} onClick={handleClick}>
                        <img src={item.url} height="50px"/>
                    </div>
                    <div className={styles.descriptionDiv}>
                        <p>{item.description}</p>
                    </div>
                </Link>
            </div>      
            )}
        </div>
    )
}