import Link from "next/link"
import styles from "./cards.module.css"

interface projectDescripitons {
    url: string,
    title: string,
    technologies: string,
    link: string
}

const projectImg: Array<projectDescripitons> = [
    {
        url: "/images/guess-the-number.jpg",
        title: "Guess The Number",
        technologies: "MongoDB, TypeScript, React, Next.js",
        link: "https://guess-the-number-dusky.vercel.app/"
    }
]

export function Cards() {
    return (
        <div className={styles.container}>
            {projectImg.map(project =>
                <div className={styles.content}>
                    <Link href={project.link} target="blank" className={styles.link}>
                        <img src={project.url} width="270px" />
                        <p className={styles.title}>{project.title}</p>
                        <p className={styles.technologies}>Technologies: {project.technologies}</p>
                    </Link>
                </div>
            )}
        </div>
    )
}