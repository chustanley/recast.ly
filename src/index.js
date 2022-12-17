// TODO: Render the `App` component to the DOM

//Import allows you to grab a function component from another from file
import App from './components/App.js';
// import searchYouTube from './lib/searchYouTube.js';

// () => searchYouTube();

ReactDOM.render(<App />, document.getElementById('app'));
