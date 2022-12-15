var VideoPlayer = (props) => {
  var url = 'https://www.youtube.com/embed/' + props.args[1].id.videoId;


  return (
    <div className="video-player">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} allowFullScreen></iframe>
      </div>
      <div className="video-player-details">
        <h3>{props.args[1].snippet.title}</h3>
        <div>{props.args[1].snippet.description}</div>
      </div>
    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  video: PropTypes.object,
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoPlayer;
