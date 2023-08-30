/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { Categories, PRIMARY_RED } from '@/app/utils/globals'
import Nav from '../../components/nav/Nav'
import styles from './article.module.css'
import { syne } from '@/app/fonts'
import Header from './Header'
import Section_1 from './Section_1'
import Section_2 from './Section_2'
import Section_3 from './Section_3'
import Section_4 from './Section_4'
import Section_5 from './Section_5'

export default function BlackDahliaPage() {
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
                    Hollywood Boulevard’
                </h1>

                <Header />

                <Section_1 />

                <Section_2 />

                <Section_3 />

                <Section_4 />

                <Section_5 />
            </main>
        </>
    )
}
