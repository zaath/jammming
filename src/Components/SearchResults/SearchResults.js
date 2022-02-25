import React from "react";
import Tracklist from '../Tracklist/Tracklist.js';
import './SearcResults.css';

export class SearchResults extends React.Component {
    render() {
        return(
            <div className="SearchResults">
                <h2>Results</h2>
                <Tracklist />
            </div>
        )
    }
}