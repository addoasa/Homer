import React, { Component } from 'react';
import './App.css';
import SearchResultsContainer from './components/SearchResultsContainer';


class App extends Component {
  constructor(props){
    super(props)
    this.scrollHandler = this.scrollHandler.bind(this);

  }
  
scrollHandler(){
  this.pageTop.scrollIntoView()
}


  render() {
  
    return (
      <React.Fragment>
        <header ref={header => {
            this.pageTop = header;
          }}>
        </header>
        <main className="main-content">
            <div className="sidebar">
                <img onClick={this.scrollHandler} className="scroll-up" src="Up.png"></img>
            </div>
            <div className="App">
                <SearchResultsContainer />
            </div>
        </main>
        <footer className="basement"></footer>
      </React.Fragment>
    );
  }
}

export default App;
