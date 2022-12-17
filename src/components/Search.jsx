var Search = (props) => {
  var click = function() {


    console.log('hi this is working');

    var button = document.querySelector('.btn');
    var query = $('.form-control').val();
    console.log(query);

    // props.searchYouTube(query, (data) => {
    //   console.log('this is data: ', data);
    //   props.setVideoList(data);
    //   props.setCurrentVideo(data[0]);

    // this lags out the app on the page when search name is too long
    // var time = 5;
    // var timer = setInterval(function() {
    //   if (time > 0) {
    //     time--;
    //     button.disabled = true;
    //     // console.log(time);
    //   }
    //   if (time === 0) {
    //     button.disabled = false;
    //     clearInterval(timer);
    //   }
    // }, 5000);


    setTimeout(() => { props.searchYouTube(query, (data) => { props.setVideoList(data); }); }, 5000);

    // });
  };

  return (
    <div className="search-bar form-inline">
      <input className="form-control" onChange={() => { click(); }} type="text" />
      <button className="btn hidden-sm-down" onClick={() => { click(); }}>
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;

//
