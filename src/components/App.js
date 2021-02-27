import React from 'react'; 
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';

class App extends React.Component {
    state = {
        images: []
    };

    onSearchSubimt = async (term) => {
        const res = await unsplash.get('/search/photos', {
            params: {
                query: term
            } 
        });
        this.setState({images: res.data.results});

    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubimt}/>
                Found: {this.state.images.length} images
            </div>
        ); 
    }
}

export default App