//* ### LINK DEGRADADO A PÁGINA EXTERIOR ###
import { lazy, Suspense } from 'react'
const ReactPlayer = lazy(() => import('react-player/lazy'))


export default function LazyReactPlayer({url,borderRadius}) {

    return (
        <Suspense fallback={<div>Loading...</div>}>
                <ReactPlayer
                        className="youTubeVideo_Player"
                        config={{ youtube: { playerVars: { origin: 'https://www.youtube.com' } },YTConfig: {'host': 'https://www.youtube.com'} }}
                        url={url}
                        controls
                        
                        border-radius={borderRadius}
                        border="none"
                    />
            </Suspense>

        )
}