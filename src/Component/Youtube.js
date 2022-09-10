import axios from "axios";
const KEY='AIzaSyD2fnDtExKsaqqqe3o4gKBoaCjW18qRCbo';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:4,
        key:KEY
    }
})