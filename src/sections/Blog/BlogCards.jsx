
import BlogCard from '../../components/Blog/BlogCard'
function BlogCards({list,url,setVideoUrl}) {
	return (
		<section id='blogCards'>
			{list.map((item,key) => {
				return <BlogCard key={key} id={key} item={item.fields} url={url} />
			})}
		</section>
	)
}
export default BlogCards;