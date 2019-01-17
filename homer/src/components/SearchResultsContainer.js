import React, { Component } from 'react';
import axios from 'axios';
import SearchItem from './SearchItem';


const PICURL = "https://pixabay.com/api/?key=11292145-329b7f2b3c7df7ca1ca24508a&per_page=20&image_type=photo"
const apiKey="11292145-329b7f2b3c7df7ca1ca24508a"


class SearchResultsContainer extends Component{
    constructor(props){
        super(props)
        
        this.state={
            gotPics: [],
            filteredPics:null ,
            loading:'loading',
            favImages:[]
        }
        this.getPics = this.getPics.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
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
        // this.setState({ favImages:<img src={clickedImg}/>})
        this.state.favImages.push(<img src={clickedImg}/>)
        this.forceUpdate()
        console.log(this.state.favImages)

       
        console.log(clickedImg)
        // return(this.state.favImages)
    }

   
     changeHandler(event){
        const searchTerm = event.target.value
        const imagesToDisplay= this.state.gotPics.filter((photo)=>{
            return photo.tags.includes(searchTerm)
        })

        this.setState({filteredPics:imagesToDisplay})
    }      


    render(){
        return(
            <div>  
                <div>{this.state.favImages}</div>
                <form>
                    <input onChange ={this.changeHandler} type="text"></input>
                    <input type="submit"></input>
                </form>
                 <SearchItem passClick={this.clickHandler} fetchedPictures={this.state.filteredPics || this.state.gotPics }/>
            </div>
        )
    }
}

export default SearchResultsContainer