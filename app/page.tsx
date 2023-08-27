import Image from 'next/image'
import styles from './page.module.css'
import Nav from './components/nav/Nav'
import { oswald, syne } from './fonts'

export default function Home() {
    return (
        <>
            <Nav category="Latest" primaryColor={'hsl(10, 79%, 65%)'} />
            <main className={styles.main}>
                <div
                    style={{
                        width: '1600px',
                        height: '400px',
                        border: '1px solid black',
                        position: 'relative',
                    }}
                >
                    <Image
                        src={'/dahlia-main.jpg'}
                        width={1600}
                        height={400}
                        alt="put the alt in later"
                        objectFit="contain"
                    />
                    <div
                        className={`${syne.className} ${styles.headingContainer}`}
                    >
                        <h3 className={`${styles.date}`}>September 1st 23</h3>
                        <h1 className={styles.title}>
                            This is the title of the piece
                        </h1>
                        <h3
                            className={`${oswald.className} ${styles.subtitle}`}
                        >
                            in Memento Mori
                        </h3>
                    </div>
                </div>
            </main>
        </>
    )
}
