import React from 'react'; //go get React from install modules and give access to this file
import ReactDOM from 'react-dom'; //used to render to DOM
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyA6JMEFrrmADZjzIN5K-CYNgBR9xizGDS0';

YTSearch({key: API_KEY, term: 'surfboards'}, function(data){
    console.log(data);
});

const App = () => {
    return (
    <div>
        <SearchBar/>
    </div>
    );
}

ReactDOM.render(<App />, document.querySelector('.container'));
