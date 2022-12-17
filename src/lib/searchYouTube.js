import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback) => {
  // TODO
  //https://app-hrsei-api.herokuapp.com/api/recastly/videos

  // $.ajax({
  //   url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos',
  //   type: 'GET', //send it through get method
  //   data: {
  //     q: query
  //   },
  //   success: callback,
  //   error: function(xhr) {
  //     console.log('recast.ly: could not search');
  //   }
  // });

  $.get('https://app-hrsei-api.herokuapp.com/api/recastly/videos', {q: query}, callback);



};

export default searchYouTube;
