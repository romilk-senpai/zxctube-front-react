import Header from "../components/Header";
import homePageClasses from "./HomePage.module.css"
import VideoPreview from "../components/VideoPreview";
import {useEffect, useState} from "react";

function HomePage() {
    const [videos, setVideos] = useState([]);

    let userDataString = window.localStorage.getItem('userData');

    let userData = null;

    if (userDataString != null) {
        userData = JSON.parse(userDataString);

        console.log(userData.token);
    }

    useEffect(() => {
        if (userData !== null) {
            // Make the API call here and update the state with the fetched videos
            fetch("http://localhost:8080/api/v1/video/page?page=0&size=8&sort=", {
                method: "POST",
                headers: {
                    "token": userData.token
                }
            })
                .then((response) => response.json())
                .then((data) => setVideos(data.content))
                .catch((error) => {
                    console.error("Error fetching data: ", error);
                    if (error.status === 401) {
                        window.localStorage.removeItem('userData');
                        window.location.reload();
                    }
                });
        }
    }, []);

    return (
        <div>
            <Header showLogin={true}/>
            <div className={homePageClasses.videoContainer}>
                {videos?.map((video, i) => (
                    <VideoPreview key={i} title={video.videoTitle}/>))
                }
            </div>
        </div>
    )
}

export default HomePage;