import { Categories } from '../utils/globals'

const fervor = {
    category: Categories.fervor,
    articles: [
        {
            title: 'this is a title from the fervor category',
            subtitle: 'this is a subtitle',
            thumbnail: 'path/to/thumbnail',
        },
    ],
}
const hunger = {
    category: Categories.hunger,
    articles: [
        {
            title: 'this is a title from the hunger category',
            subtitle: 'this is a subtitle',
            thumbnail: 'path/to/thumbnail',
        },
    ],
}
const memento_mori = {
    category: Categories.memento_mori,
    articles: [
        {
            title: 'this is a title from the memento_mori category',
            subtitle: 'this is a subtitle',
            thumbnail: 'path/to/thumbnail',
        },
    ],
}
const nulliparous = {
    category: Categories.nulliparous,
    articles: [
        {
            title: 'this is a title from the nulliparous category',
            subtitle: 'this is a subtitle',
            thumbnail: 'path/to/thumbnail',
        },
    ],
}

export const articleData = [fervor, hunger, memento_mori, nulliparous]
