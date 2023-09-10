import { Categories } from '../utils/globals'
import { black_dahlia_1, black_dahlia_2 } from './articles'

const fervor = {
    category: Categories.fervor,
    articles: [],
}
const hunger = {
    category: Categories.hunger,
    articles: [],
}
const memento_mori = {
    category: Categories.memento_mori,
    articles: [black_dahlia_1],
}
const nulliparous = {
    category: Categories.nulliparous,
    articles: [],
}

const the_male_gaze = {
    category: Categories.the_male_gaze,
    articles: [black_dahlia_1],
}
const latest = {
    category: Categories.latest,
    articles: [black_dahlia_1],
}

export const articleData = [
    fervor,
    hunger,
    memento_mori,
    nulliparous,
    the_male_gaze,
    latest,
]
