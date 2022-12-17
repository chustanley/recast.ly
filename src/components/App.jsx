import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoListEntry from './VideoListEntry.js';
import VideoPlayer from './VideoPlayer.js';
import searchYouTube from '../lib/searchYouTube.js';


const { useState } = React;
const { useEffect } = React;



var App = (props) => {



  const [videoList, setVideoList] = useState(exampleVideoData); //in the video list
  const [currentVideo, setCurrentVideo] = useState(exampleVideoData[0]);


  useEffect(() => {

    // searchYouTube.get().then((data) => setVideoList(data));
    // var firstVideo
    searchYouTube('', (data) => {
      console.log('this is data: ', data);
      setVideoList(data);
      setCurrentVideo(data[0]);

    });
  }, []);

  // console.log(videoList);

  // console.log('VideoList', videoList);
  // console.log('HELLOOO', currentVideo);


  if (videoList.length !== 0) {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={currentVideo} />
          </div>
          <div className="col-md-5">
            <VideoList videos={videoList} currentVideo={currentVideo} onClick={setCurrentVideo} />
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }

};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined

//With that said, we will have to use export Default the name of var
//So that someone can 'import' this var into their JS file.
export default App;
