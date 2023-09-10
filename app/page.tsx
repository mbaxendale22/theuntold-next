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
                    <img
                        src="/dahlia-hero-image.webp"
                        alt="image of the Hollywood sign with dahlia flowers"
                    />

                    <div
                        className={`${syne.className} ${styles.headingContainer}`}
                    >
                        <h3 className={`${styles.date} `}>September 1st 23</h3>
                        <Link href="/article/black-dahlia-1">
                            <h1 className={styles.title}>
                                The Black Dahlia killing – An ‘adventuress’ who
                                ‘prowled Hollywood Boulevard’
                                <br /> 1/2
                            </h1>
                        </Link>
                        <h3
                            className={`${oswald.className} ${styles.subtitle}`}
                        >
                            in Memento Mori
                        </h3>
                    </div>
                    <div
                        style={{
                            position: 'absolute',
                            top: '0',
                            height: '99%',
                            width: '100%',
                            backgroundColor: 'rgba(0,0,0,0.3)',
                            // zIndex: '-1',
                        }}
                    ></div>
                </div>
            </main>
        </>
    )
}
