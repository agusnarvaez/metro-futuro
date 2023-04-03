import {createClient} from 'contentful'
import credentials from '../credentials'

export const articles = createClient({
    space: credentials.contentful.space,
    accessToken: credentials.contentful.accessToken
})

export const courses = createClient({
    space: credentials.contentful.space,
    accessToken: credentials.contentful.accessToken
})