import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';

import SearchItem from './SearchItem';


const PICURL = "https://pixabay.com/api/?key=11292145-329b7f2b3c7df7ca1ca24508a&page=1&per_page=200&image_type=photo"
const PICURL2 = "https://pixabay.com/api/?key=11292145-329b7f2b3c7df7ca1ca24508a&page=2&per_page=200&image_type=photo"
const PICURL3 = "https://pixabay.com/api/?key=11292145-329b7f2b3c7df7ca1ca24508a&page=3&per_page=200&image_type=photo"
const apiKey="11292145-329b7f2b3c7df7ca1ca24508a"


class SearchResultsContainer extends Component{
    constructor(props){
        super(props)
        
        this.state={
            gotPics: [],
            filteredPics:null ,
            favImages:[]
        }
        this.getPics = this.getPics.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
        this.clearBoard = this.clearBoard.bind(this);
    }

    async getPics(){
        const gotPics=  await axios(PICURL)
        const cheese = gotPics.data.hits
        this.setState({
            gotPics: cheese
        })
    }
    
    componentDidMount(){
          this.getPics()
    }

    
    clickHandler(event){
        const clickedImg = event.target.src
        const clickedImgKey = event.target.key
        this.state.favImages.push(<img key ={clickedImgKey} src={clickedImg}/>)
        this.forceUpdate()
        console.log(this.state.favImages)
        console.log(clickedImg)
    }

   
     changeHandler(event){
        const searchTerm = event.target.value
        const imagesToDisplay= this.state.gotPics.filter((photo)=>{
            return photo.tags.includes(searchTerm)
        })

        this.setState({filteredPics:imagesToDisplay})
    }      

      clearBoard(){
          this.setState({favImages:[]})
      }

      

    render(){
        return(
            <div> 
                <div className="moodboard-Wrapper">
                    <div ref={this.mood}
                        className="moodboard-images">{this.state.favImages}</div>
                </div>
                    <div className="searchBox">
                        <input className="input-field" onChange ={this.changeHandler} placeholder="...Search images..."type="text"></input>
                    </div>
                        <button   className="clear" onClick={this.clearBoard}>Clear</button>
                    
                 <SearchItem passClick={this.clickHandler} fetchedPictures={this.state.filteredPics || this.state.gotPics }/>
            </div>
        )
    }
}

export default SearchResultsContainer