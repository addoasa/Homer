import React, { Component } from 'react';
import './App.css';
import SearchResultsContainer from './components/SearchResultsContainer';


class App extends Component {
  constructor(props){
    super(props)
  }
  



  render() {
    
    return (
      <div className="App">
        
          <SearchResultsContainer />
      </div>
    );
  }
}

export default App;
