import React from 'react';
import Thumbnail from './VideoThumbnail';

const VideoList = ({videos}) => {
    console.log(videos);
    const videoArray = videos.map((video) => {
        return <Thumbnail key={video.id.videoId} video={video} />
    });

    return <div>{videoArray}</div>
}

export default VideoList;