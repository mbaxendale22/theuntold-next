import { articleData } from '@/app/data/articles'
import Nav from '@/app/components/nav/Nav'

interface Props {
    params: { slug: string }
}

export default function CategoryPage(props: Props) {
    const { params } = props

    const [data] = articleData.filter((data) => data.category === params.slug)

    console.log(data)
    return (
        <div>
            <p>Hello</p>

            {data.articles.map((article) => (
                <>
                    <h2>{article.title}</h2>
                    <h4>{article.subtitle}</h4>
                </>
            ))}
        </div>
    )
}
