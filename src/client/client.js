import * as contentful from 'contentful'
import credentials from '../credentials'

export const articles = contentful.createClient({
    space: credentials.contentful.space,
    accessToken: credentials.contentful.accessToken
})

export const courses = contentful.createClient({
    space: credentials.contentful.space,
    accessToken: credentials.contentful.accessToken
})