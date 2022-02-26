import React from "react";
import Tracklist from "../Tracklist/Tracklist.js";
import './Playlist.css';

export default class Playlist extends React.Component {
    render() {
        return (
            <div className="Playlist">
                <input defaultValue={"New Playlist"}/>
                <Tracklist tracks={this.props.playlistTracks} isRemoval={true} onRemove={this.props.onRemove} />
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        )
    }
}