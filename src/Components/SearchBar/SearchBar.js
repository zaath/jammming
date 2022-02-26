import './SearchBar.css';
import React from 'react';

export default class SearchBar extends React.Component {
    component(props) {
        super(props);
        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
    }
    search() {
        this.props.onSearch(this.state.term);
    }
    handleTermChange(event) {
        this.setState({term: event.target.value});
    }

    render() {
        return(
            <div className="SearchBar">
                <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange}/>
                <button className="SearchButton">SEARCH</button>
            </div>
        )
    };
}