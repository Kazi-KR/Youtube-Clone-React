import React from "react";
import './VideoItem.css';

const VideoItem=({video,onVideoSelect})=>{
    return(
        <div className="ui relaxed divided list segment" style={{padding:11}}>
            <div onClick={()=>onVideoSelect(video)}
            className="video-item item">
            <img className="ui image" 
            alt={video.snippet.title} 
            src={video.snippet.thumbnails.medium.url}/>
            <div className="content">
                <div className="header">
                    {video.snippet.title}
                </div>   
            </div>
            </div>
        </div>
    );
};



export default VideoItem;