import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

const PICURL = "https://pixabay.com/api/?key=11292145-329b7f2b3c7df7ca1ca24508a&per_page=30&image_type=photo"
const apiKey="11292145-329b7f2b3c7df7ca1ca24508a"

class App extends Component {
  constructor(){
    super()
  }
  componentDidMount(){}

  async getPics(){
    const gotPics=  await axios(PICURL)
    return console.log(gotPics.data)
  }

  render() {
    
    return (
      <div className="App">
          <button onClick={this.getPics}>Get</button>

      </div>
    );
  }
}

export default App;
