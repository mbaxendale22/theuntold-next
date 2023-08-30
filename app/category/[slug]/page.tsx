import { articleData } from '@/app/data/articles'
import Nav from '@/app/components/nav/Nav'
import { Categories, PRIMARY_RED } from '@/app/utils/globals'
import styles from './categoryPage.module.css'

interface Props {
    params: { slug: string }
}

export default function CategoryPage(props: Props) {
    const { params } = props

    const [data] = articleData.filter((data) => data.category === params.slug)

    return (
        <>
            <Nav category={data.category} primaryColor={PRIMARY_RED} />
            <main className={styles.wrapper}>
                <h1>There are currently no articles in this category!</h1>
                <h3>Check back soon...</h3>

                {/* {data.articles.map((article) => (
        <>
            <h2>{article.title}</h2>
            <h4>{article.subtitle}</h4>
        </>
    ))} */}
            </main>
        </>
    )
}
