import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoListEntry from './VideoListEntry.js';
import VideoPlayer from './VideoPlayer.js';

const { useState } = React;

var stan = 'hi';


var App = () => {

  const [videoList, setVideoList] = useState(exampleVideoData); //in the video list
  const [currentVideo, setCurrentVideo] = useState(exampleVideoData[0]);
  //console.log('Current: ', currentVideo); //current video in player
  //pass down states as props to child component
  //use keys
  //when click title of video in videoList, setCurrentVideo = true, old video set to false


  ///////////////////////////////////////////////////////
  //create function in app that calls for setCurrentVideo
  //give it argument of selected video (onClick setCurrentVideo(props.video))



  console.log('VideoList', videoList);
  console.log('HELLOOO', currentVideo);


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
          <VideoList videos={exampleVideoData} currentVideo={currentVideo} onClick={setCurrentVideo} />
        </div>
      </div>
    </div>
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined

//With that said, we will have to use export Default the name of var
//So that someone can 'import' this var into their JS file.
export default App;
