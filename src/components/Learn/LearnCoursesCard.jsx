
import { useRef, useState, useEffect } from 'react'

export default function LearnCourses({item,url,id,setVideoUrl}) {
	const videoWrapperRef = useRef(null)
	const [showVideos, setShowVideos] = useState(true)
    const [cardWidth, setCardWidth] = useState(0)
    const cardRef = useRef(null)

    const scrollLeft = () => {
        if (videoWrapperRef.current) {
            videoWrapperRef.current.scrollBy({
                left: -cardWidth,
                behavior: 'smooth'
            })
        }
    }

    const scrollRight = () => {
        if (videoWrapperRef.current) {
            videoWrapperRef.current.scrollBy({
                left: cardWidth,
                behavior: 'smooth'
            })
        }
    }

	const toggleShowVideos = () => {
		setShowVideos(!showVideos)
	}


	useEffect(() => {
        if (cardRef.current) {
            setCardWidth(cardRef.current.offsetWidth) // Set the width of the card dynamically
        }
    }, [])
	return (

		<article id='learnCoursesCard'>
			<section className='main-info'>
				<img src={item.cover.fields?.file.url} alt="learnCoursesCard" title='learnCoursesCard' loading="lazy"/>

				{/* <LearnCoursesCardDifficulty  difficulty={item.difficulty}/> */}
				<section className='description'>
					<h3>{item.title}</h3>
					<p>{item.description}</p>
					<button onClick={toggleShowVideos} type='button' className="degraded-blue-button" >
						{showVideos?'VER MÁS':'OCULTAR VIDEOS'}
					</button>
				</section>

			</section>



			<section className={`videos-container ${showVideos?'':'videos-container_collapsed'}`}>
					<i className='fa fa-chevron-right' onClick={scrollRight}></i>
					<i className='fa fa-chevron-left' onClick={scrollLeft}></i>
				<div className='videos-wrapper' ref={videoWrapperRef}>
					{
						item.youTubeVideosTitles.map((title,i)=>{
							const extractVideoId = (url) => {
								const regExp = /^.*(youtu.be\/|v\/|\/u\/\w\/|embed\/|watch\?v=|\&v=|youtube\.com\/shorts\/)([^#\&\?]*).*/;
								const match = url.match(regExp)
								return (match && match[2].length === 11) ? match[2] : null
							}

							const videoId = extractVideoId(item.youTubeLinks[i])
							const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
							return (
								<article
									className='mini-video-container'
									key={i}
									ref={i === 0 ? cardRef : null}  // Reference the first card only

									>
									<div className='miniature-container' onClick={()=>setVideoUrl(item.youTubeLinks[i])}>
										<img src={thumbnailUrl} alt='miniatura video' />
									</div>
									<h3>{title}</h3>
									<h4>{item.videosDescriptions[i]}</h4>
								</article>
								)
						})
					}
				</div>
			</section>
		</article>

	)
}