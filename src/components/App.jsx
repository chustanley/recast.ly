import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoListEntry from './VideoListEntry.js';
import VideoPlayer from './VideoPlayer.js';
import searchYouTube from '../lib/searchYouTube.js';
import Search from './Search.js';

const { useState } = React;
const { useEffect } = React;



var App = (props) => {


  console.log(Window.fakeVideoData);
  const [videoList, setVideoList] = useState(fakeVideoData); //in the video list
  const [currentVideo, setCurrentVideo] = useState(fakeVideoData[0]);
  // fake video data actaully makes the test fail lol - recastly doesnt load.
  //we could make a fake object that has all the keys, but so when it checks for the keys, they are technically there
  //BRUH WE JUST GOTTA USE ONCHANGE IN SEARCH FOR THE FORM, LIKE ONCLICK BUT ON CHANGE INSTEAD
 // LEMME SAVE IT LOL



  useEffect(() => {

    // searchYouTube.get().then((data) => setVideoList(data));
    // var firstVideo
    searchYouTube('Cute cat video', (data) => {
      console.log('this is data: ', data);
      setVideoList(data);
      setCurrentVideo(data[0]);

    });
  }, []);

  // its throwing an error
  // yeah so its saying that when theirs a change in form control class, then it will re render this func
  //and therefore it would always be setting current video to data[0]

  //it should be detecting changes in the value text that form control has and running everything in use effect when it sees changes
  if (videoList.length !== 0) {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search setVideoList={setVideoList} setCurrentVideo={setCurrentVideo} searchYouTube={searchYouTube} />
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
