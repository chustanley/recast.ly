
import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';
// import App from '../components/App.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});





var searchYouTube = (query, callback) => {

  // TODO
  //https://app-hrsei-api.herokuapp.com/api/recastly/videos



  $.ajax({
    url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos',
    type: 'GET', //send it through get method
    data: {
      ytAPI: YOUTUBE_API_KEY,
      q: query
    },
    success: (data) => {
      callback(data);

    },

    error: (status) => {
      console.error('recast.ly: could not search');
    }
  });

};


// var Connection = () => (
//   <App Passer={searchYouTube} />
// );



export default searchYouTube;
