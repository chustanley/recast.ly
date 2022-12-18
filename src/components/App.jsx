import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoListEntry from './VideoListEntry.js';
import VideoPlayer from './VideoPlayer.js';
import searchYouTube from '../lib/searchYouTube.js';
import Search from './Search.js';
import fakeVideoData from '../../spec/data/fakeVideoData.js';


var { useState } = React;

var App = (props) => {

  // console.log(props.searchYouTube);
  const [videoList, setVideoList] = useState([]); //in the video list
  const [currentVideo, setCurrentVideo] = useState(exampleVideoData[0]);

  const [count, setCount] = useState(0);

  var timeout = null;
  var query = '';


  React.useEffect(() => {
    // searchYouTube('', (data) => {
    //   console.log('this is data: ', data);
    //   setVideoList(data);
    // });
  }, [videoList, currentVideo]);



  return (
    <div>
      <div> { count } </div>
      <nav className="navbar" onClick={() => setCount(count + 1)}>
        <div className="col-md-6 offset-md-3">
          <Search setVideoList={setVideoList} searchYouTube={searchYouTube} />
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">``
          <VideoPlayer video={currentVideo} />
        </div>
        <div className="col-md-5">
          <VideoList videos={videoList} setSelectedVideo={(v) => setCurrentVideo(v)} />
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
