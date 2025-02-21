import commonClasses from '../Common.module.css'
import videoPreviewClasses from './VideoPreview.module.css'

function VideoPreview(props) {

    return (
        <div className={videoPreviewClasses.videoContainer}>
            <div className={videoPreviewClasses.videoPlayerPreview}></div>
            <p className={videoPreviewClasses.videoTitle}>{props.title}</p>
            <p className={videoPreviewClasses.videoAuthor}>Video Author</p>
        </div>
    )
}

export default VideoPreview;