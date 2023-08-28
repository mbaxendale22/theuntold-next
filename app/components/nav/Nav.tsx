'use client'

import Link from 'next/link'
import styles from './nav.module.css'
import { useState } from 'react'
import { oswald } from '@/app/fonts'
import { CATEGORIES, Categories } from '@/app/utils/globals'

interface Props {
    category: Categories
    primaryColor: string
}

export default function Nav(props: Props) {
    const { category, primaryColor } = props
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
                                    <Link href={`/category/${cat}`}>{cat}</Link>
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
                <button
                    className={styles.hamburger}
                    onClick={handleSidebarToggle}
                >
                    <span className={styles.line}></span>
                    <span className={styles.line}></span>
                    <span className={styles.line}></span>
                </button>
                <div>
                    <h3 className={`${oswald.className} ${styles.category}`}>
                        {category}
                    </h3>
                </div>
            </div>
        </>
    )
}
