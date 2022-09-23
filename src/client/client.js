import * as contentful from 'contentful'
import credentials from '../credentials'
const client = contentful.createClient({
    space: credentials.contentful.space,
    accessToken: credentials.contentful.accessToken
})