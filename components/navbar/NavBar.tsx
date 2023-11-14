import styles from "./NabBar.module.css"

interface navbarObj {
    url: string,
    description: string
}

const urlImages: Array<navbarObj> = [
    {
        url: "icons/logo-github.jpg",
        description: "GitHub"
    }, {
        url: "icons/linkedin.png",
        description: "Linkedin"
    }]

export function NavBar() {
    function handleClick(){
        
    }
    return (
        <div className={styles.container}>
            {urlImages.map(item =>
            <div className={styles.content}> 
                <div className={styles.imgDiv} onClick={handleClick}>
                    <img src={item.url} height="50px"/>
                </div>
                <div className={styles.descriptionDiv}>
                    <p>{item.description}</p>
                </div>
            </div>      
            )}
        </div>
    )
}