import React from 'react';
import Thumbnail from './VideoThumbnail';

const VideoList = ({videos, onVideoSelect}) => {
    const videoArray = videos.map((video) => {
        return <Thumbnail 
            key={video.id.videoId || video.id.channelId} 
            video={video}
            onVideoSelect={onVideoSelect} 
        />
    });

    return <div className="ui relaxed divided list">{videoArray}</div>
}

export default VideoList;