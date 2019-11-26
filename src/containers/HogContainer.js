import React, { PureComponent } from 'react'
import Hog from '../components/Hog'
import hogs from '../porkers_data';

class HogContainer extends PureComponent {

  state = {
    showGreased: false,
    sortBy: ""
  }

  handleGreasedPigs = () => {
    this.setState((prevState) => {
      return {showGreased: !prevState.showGreased}
    })
  }

  handleSortBy = (event) => {
    this.setState({
      sortBy: event.target.value
    })
  }

  handleSort = () => {
    let allHogs = hogs;
    if (this.state.showGreased) {
      allHogs = hogs.filter(hog => hog.greased)
    }

    if (this.state.sortBy === 'name') {
      allHogs.sort((a, b) => {
        return a.name.localeCompare(b.name);
      })
    } else if (this.state.sortBy === 'weight') {
      allHogs.sort((a, b) => {
        return a.weight - b.weight;
      }
      )
    }
    return allHogs;
  } 

  render() {
    
    let buttonText = this.state.showGreased ? "All Pigs" : "Show Greased Pigs"

    return (
    <div>
      <div> 
        <select onChange={this.handleSortBy}>
          <option value="">Sort Options</option>
          <option value="weight">Weight</option>
          <option value="name">Name</option>
        </select>
        <button onClick={this.handleGreasedPigs}>{buttonText}</button>
      </div>
        <div className="ui grid container pigContainer">
        {this.handleSort().map(hog => 
          <Hog hog={hog} key={hog.name} />
        )}
      </div>
      </div>
    )
  }
}

export default HogContainer;