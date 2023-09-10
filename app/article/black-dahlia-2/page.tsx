/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { Categories, PRIMARY_RED } from '@/app/utils/globals'
import Nav from '../../components/nav/Nav'
import styles from './article.module.css'
import { syne } from '@/app/fonts'

import Section_3 from './Section_3'
import Section_4 from './Section_4'
import Section_5 from './Section_5'

export default function BlackDahliaPage2() {
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
                    Hollywood Boulevard’ <br /> 2/2
                </h1>

                <blockquote>
                    <p>
                        {' '}
                        “This victim knew at least fifty men at the time of her
                        death and at least twenty-five men had been seen with
                        her in the sixty days preceding her death… She was known
                        as a teaser of men.” <cite>–– a police report</cite>
                    </p>
                </blockquote>

                <Section_3 />

                <Section_4 />

                <img
                    src="/dahlia/Dahliaimages04.webp"
                    alt="   Marcel Duchamp, Étant donnés (Given: 1. The Waterfall, 2.
                        The Illuminating Gas, French: Étant donnés: 1° la chute
                        d'eau / 2° le gaz d'éclairage), 1946–1966, mixed media."
                    style={{ paddingTop: '2rem' }}
                />
                <p className={styles.caption}>
                    Marcel Duchamp, Étant donnés (Given: 1. The Waterfall, 2.
                    The Illuminating Gas, French: Étant donnés: 1° la chute
                    d'eau / 2° le gaz d'éclairage), 1946–1966, mixed media.
                </p>

                <Section_5 />
            </main>
            <img
                src="/dahlia/Dahliaimages02.webp"
                alt="image of the Hollywood sign from on top of the hollywood hills "
            />
        </>
    )
}
