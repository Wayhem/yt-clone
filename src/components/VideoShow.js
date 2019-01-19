import React from 'react';

const VideoShow = ({video}) => {
    if (!video) {
        return <div>Hello</div>
    }
    return (
        <div>
            <div className="ui embed">
                <iframe 
                    src={`https://youtube.com/embed/${video.id.videoId}`}
                    title="video player" 
                />
            </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );
}

export default VideoShow;