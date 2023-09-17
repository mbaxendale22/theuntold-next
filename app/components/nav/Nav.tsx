'use client'

import Link from 'next/link'
import styles from './nav.module.css'
import { useState } from 'react'
import { oswald } from '@/app/fonts'
import { CATEGORIES, Categories } from '@/app/utils/globals'
import SocialMediaLinks from '../socialMediaLinks'

interface Props {
    category: Categories
    primaryColor: string
    showSocialMediaLinks?: boolean
}

export default function Nav(props: Props) {
    const { category, primaryColor, showSocialMediaLinks } = props
    const [sideBarOpen, setSideBarOpen] = useState(false)
    const handleSidebarToggle = () => setSideBarOpen(!sideBarOpen)
    const sidebarStyle = sideBarOpen ? styles.sideBarOpen : styles.sideBarClosed

    return (
        <>
            <nav>
                <div
                    className={styles.container}
                    style={{ backgroundColor: primaryColor }}
                >
                    <div className={`${styles.menuContainer} ${sidebarStyle}`}>
                        <ul className={styles.menuList}>
                            {CATEGORIES.map((cat) => (
                                <li
                                    key={cat}
                                    className={`${oswald.className} ${styles.menuItem}`}
                                    style={
                                        cat === category
                                            ? { color: primaryColor }
                                            : {}
                                    }
                                >
                                    <Link href={`/category/${cat}`}>
                                        {cat.replaceAll('_', ' ')}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <h1 className={`${oswald.className} ${styles.heading}`}>
                        <a href="/">
                            the Untold<span>.</span>
                        </a>
                    </h1>
                </div>
            </nav>
            <div className={styles.hamburgerContainer}>
                <div style={{ display: 'flex', gap: '2rem' }}>
                    <button
                        className={styles.hamburger}
                        onClick={handleSidebarToggle}
                    >
                        <span className={styles.line}></span>
                        <span className={styles.line}></span>
                        <span className={styles.line}></span>
                    </button>
                    <div>
                        <h3
                            className={`${oswald.className} ${styles.category}`}
                        >
                            {category.replaceAll('_', ' ')}
                        </h3>
                    </div>
                </div>
                <div>{showSocialMediaLinks ? <SocialMediaLinks /> : null}</div>
            </div>
        </>
    )
}
