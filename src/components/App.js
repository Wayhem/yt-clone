import React, {Component} from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/Youtube';

class App extends Component {

    state = { videos: [] }

    onQuerySubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        
        this.setState({ videos: response.data.items });
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onQuerySubmit} />
                I have {this.state.videos.length} videos.
            </div>
        );
    }
}

export default App;