/* eslint-disable @next/next/no-img-element */
import styles from './page.module.css'
import Nav from './components/nav/Nav'
import { oswald, syne } from './fonts'
import { Categories } from './utils/globals'
import Link from 'next/link'
import ArticleCard from './components/articleCard'
import { black_dahlia_1 } from './data/articles'

export default function Home() {
    return (
        <>
            <Nav
                category={Categories.latest}
                primaryColor={'hsl(10, 79%, 65%)'}
                showSocialMediaLinks
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
                        <h3 className={`${styles.date} `}>September 15th 23</h3>
                        <Link href="/article/black-dahlia-2">
                            <h1 className={styles.title}>
                                The Black Dahlia killing – An ‘adventuress’ who
                                ‘prowled Hollywood Boulevard’
                                <br /> 2/2
                            </h1>
                        </Link>
                        <h3
                            className={`${oswald.className} ${styles.subtitle}`}
                        >
                            in Memento Mori & The Male Gaze
                        </h3>
                    </div>
                    <div
                        style={{
                            position: 'absolute',
                            top: '0',
                            height: '99%',
                            width: '100%',
                            backgroundColor: 'rgba(0,0,0,0.3)',
                        }}
                    ></div>
                </div>
                <section className={styles.more__container}>
                    <ArticleCard article={black_dahlia_1} />
                </section>
            </main>
        </>
    )
}
