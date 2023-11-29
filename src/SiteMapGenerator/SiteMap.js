const {createClient} = require('contentful')
const credentials = require('../credentials')

const articles = createClient({
    space: credentials.contentful.space,
    accessToken: credentials.contentful.accessToken
})

const getFullListForSiteMap = async () =>{
    try{
        const api = await articles.getEntries()

        return api.items

    }catch(err){
        console.log("Error en la petición")
        console.log(err)
    }
}
const filteredList = (list,path) => list.filter(article=>article.sys.contentType.sys.id===path)



function getCurrentDate() {
	const currentDate = new Date();
	const year = currentDate.getFullYear();
	const month = String(currentDate.getMonth() + 1).padStart(2, '0');
	const day = String(currentDate.getDate()).padStart(2, '0');

	return `${year}-${month}-${day}`;
}

function mountSchemaUrl( path,title ) {

	return `
	  <url>
		<loc>https://metro-futuro.com/${path}/${title}</loc>
		<lastmod>${getCurrentDate()}</lastmod>
		<changefreq>monthly</changefreq>
  		<priority>0.80</priority>
	  </url>`
}

async function Sitemap() {

  const routes = [
    { path: '/', changefreq: 'yearly', priority: 1.0 },
    { path: '/inicio', changefreq: 'yearly', priority: 0.9 },
    { path: '/aprende', changefreq: 'monthly', priority: 0.8 },
    { path: '/inmuebles', changefreq: 'monthly', priority: 0.8 },
    { path: '/blog', changefreq: 'monthly', priority: 0.8 },
    { path: '/contacto', changefreq: 'monthly', priority: 0.8 },
    { path: '/sobre-nosotros', changefreq: 'monthly', priority: 0.6 },
    { path: '/ayuda', changefreq: 'monthly', priority: 0.6 },
    { path: '/terminos-y-condiciones', changefreq: 'monthly', priority: 0.6 }
  ]

  const finalSiteMap = await generateSitemapUrl(routes)
  console.log(finalSiteMap)
  return (
    finalSiteMap
  )
}

async function  generateSitemapUrl(routes) {
  const baseUrl = 'https://metro-futuro.com';

  const list = await getFullListForSiteMap()
	const blogList = filteredList(list,'blog')
	const learnList = filteredList(list,'courses')
	const investments = filteredList(list,'property')

  const sitemapUrls = routes.map((route) => {
    const { path, changefreq, priority } = route
    const url = baseUrl + path

    return `
      <url>
        <loc>${url}</loc>
        <lastmod>${getCurrentDate()}</lastmod>
        <changefreq>${changefreq}</changefreq>
        <priority>${priority}</priority>
      </url>
    `
  })

  return `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    	${sitemapUrls.join('\n')}
      ${blogList.map((article) => mountSchemaUrl('blog',article.fields.url)).join('\n')}
		  ${learnList.map((article) => mountSchemaUrl('aprende',article.fields.url)).join('\n')}
		  ${investments.map((article) => mountSchemaUrl('inmuebles',article.fields.url)).join('\n')}
    </urlset>
  `
}

console.log(Sitemap())