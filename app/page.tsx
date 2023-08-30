/* eslint-disable @next/next/no-img-element */
import styles from './page.module.css'
import Nav from './components/nav/Nav'
import { oswald, syne } from './fonts'
import { Categories } from './utils/globals'
import Link from 'next/link'

export default function Home() {
    return (
        <>
            <Nav
                category={Categories.latest}
                primaryColor={'hsl(10, 79%, 65%)'}
            />
            <main className={`${styles.main} ${styles.wrapper} `}>
                <div className={styles.heroImageContainer}>
                    <Link href="/article/black-dahlia">
                        <img
                            src="/dahlia-hero-image.webp"
                            alt="image of the Hollywood sign with dahlia flowers"
                        />
                    </Link>
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
