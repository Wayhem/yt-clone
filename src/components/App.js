import React, {Component} from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoShow from './VideoShow';
import youtube from '../api/Youtube';

class App extends Component {

    state = { 
        videos: [],
        selectedVideo: null 
    }


    componentDidMount() {
        this.onQuerySubmit('surf');
    }

    onQuerySubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        
        this.setState({ 
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    }

    onVideoSelect = (video) => {
        this.setState({selectedVideo: video});
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onQuerySubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="ten wide column">
                            <VideoShow video={this.state.selectedVideo} />
                        </div>
                        <div className="six wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;