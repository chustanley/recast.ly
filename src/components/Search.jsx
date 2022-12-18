var Search = (props) => {
  var click = _.debounce(() => {

    var query = $('.form-control').val();
    props.searchYouTube(query, (data) => {
      props.setVideoList(data);
    });
  }, 500);







  return (
    <div className="search-bar form-inline">
      <input className="form-control" onChange={() => { click(); }} type="text" />
      <button className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;

//
