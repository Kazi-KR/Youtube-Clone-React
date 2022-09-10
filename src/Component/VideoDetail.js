import React from "react";

const VideoDetail=({video})=>{
    if(!video){
        return <div></div>
    }
    const videoSrc=`https://youtube.com/embed/${video.id.videoId}` 
    return(
        <div className="ui segment">
            <div className="ui embed">
                <iframe title='videoPlayer' src={videoSrc}/>
            </div>
            <div className="ui header">
                {video.snippet.title}
            </div>
            <div className="ui description">
                {video.snippet.description}
            </div>
        </div>
    )
}

export default VideoDetail;