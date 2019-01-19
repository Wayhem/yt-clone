import axios from 'axios';

const KEY = 'AIzaSyD83rwlBHz6AKpThguyLbe4r4HLL5gbrsI';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});