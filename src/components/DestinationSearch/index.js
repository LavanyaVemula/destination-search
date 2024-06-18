import { Component } from "react";
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component{
    state = {
        searchInput : ""
    }

    onChangeSearchInput = event => {
        this.setState({searchInput : event.target.value})
    }

    render(){
        const {destinationsList} = this.props
        const {searchInput} = this.state
        const searchResults = destinationsList.filter(each => 
            each.name.toLowerCase().includes(searchInput.toLocaleLowerCase())
        )

        return(
            <div className="app-container">
                <h1 className="heading">Destination Search</h1>
                <div className="search-container">
                <input type="search" className="search" value = {searchInput} 
                  onChange={this.onChangeSearchInput} placeholder="search"/>
                <img src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
                 className="search-icon"
                  alt="search"
                  />
                </div>
                <ul className="list-container">
                    {searchResults.map(each => (
                        <DestinationItem destinationDetails={each} key={each.id}/>
                    ))}
                </ul>
            </div>
            
        )
    }
}

export default DestinationSearch