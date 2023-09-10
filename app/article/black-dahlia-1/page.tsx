/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { Categories, PRIMARY_RED } from '@/app/utils/globals'
import Nav from '../../components/nav/Nav'
import styles from './article.module.css'
import { syne } from '@/app/fonts'
import Header from './Header'
import Section_1 from './Section_1'
import Section_2 from './Section_2'
import Link from 'next/link'

export default function BlackDahliaPage1() {
    return (
        <>
            <Nav
                category={Categories.memento_mori}
                primaryColor={PRIMARY_RED}
            />
            <img
                src="/dahlia-hero-image.webp"
                alt="image of the Hollywood sign with dahlia flowers"
            />
            <main className={`${styles.wrapper}`}>
                <h1 className={`${syne.className}`}>
                    The Black Dahlia killing – An ‘adventuress’ who ‘prowled
                    Hollywood Boulevard’ <br /> 1/2
                </h1>

                <Header />

                <img
                    src="/dahlia/dahliaimages06.webp"
                    alt="  1 - the suburban character of Leimert Park, Los Angeles. 2 -
                    media coverage of the crime scene. 3 - crime scene photo."
                    style={{ paddingTop: '2rem' }}
                />
                <p className={styles.caption}>
                    1 - the suburban character of Leimert Park, Los Angeles. 2 -
                    media coverage of the crime scene. 3 - crime scene photo.
                </p>

                <Section_1 />

                <img
                    src="/dahlia/dahliaimages07.webp"
                    alt="a collage of images of the victim"
                    style={{ paddingTop: '2rem' }}
                />
                <p className={styles.caption}>
                    items sent to the press by the killer
                </p>

                <Section_2 />

                <p className={styles.references}>
                    Geberth, V. J. (2010). Crime scene staging: An exploratory
                    study of the frequency and characteristics of sexual posing
                    in homicides. Investigative Sciences Journal, 2(2), 1-19.
                </p>
                <div>
                    <h3 className={styles.part__link}>
                        Read part 2 of the story{' '}
                        <Link
                            href="/article/black-dahlia-2"
                            style={{ color: PRIMARY_RED }}
                        >
                            here
                        </Link>
                    </h3>
                </div>
            </main>
            <img
                src="/dahlia/dahliaimages05.webp"
                alt="three detectives stand over the crime scene"
            />
        </>
    )
}
