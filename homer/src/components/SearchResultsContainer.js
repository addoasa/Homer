import React, { Component } from 'react';
import axios from 'axios';
import SearchItem from './SearchItem';


const PICURL = "https://pixabay.com/api/?key=11292145-329b7f2b3c7df7ca1ca24508a&per_page=30&image_type=photo"
const apiKey="11292145-329b7f2b3c7df7ca1ca24508a"


class SearchResultsContainer extends Component{
    constructor(props){
        super(props)
        
        this.state={
            gotPics: []
        }
        this.getPics = this.getPics.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
    }

    async getPics(){
        const gotPics=  await axios(PICURL)
        const cheese = gotPics.data.hits
        this.setState({gotPics: cheese})
        }
    
      componentDidMount(){
          this.getPics()
      }

      changeHandler(){
          console.log(this.state.gotPics)
      }

    render(){
        return(
            <div>   
                <form>
                    <input onChange ={this.changeHandler} type="text"></input>
                    <input type="submit"></input>
                </form>
                 <SearchItem fetchedPictures={this.state.gotPics}/>
            </div>
        )
    }
}

export default SearchResultsContainer