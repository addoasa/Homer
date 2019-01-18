import React, { Component } from 'react';


function SearchItem(props) {

    const photos = props.fetchedPictures.map((photo, key)=>{
        console.log(photo)
        return(
        <img className="all-search-results" onClick = {props.passClick} key={key} src={photo.largeImageURL}></img>
        )
    })


    
        return(
            <div className ="search-results-wrapper">
                <div>{ photos||"loading" }</div>
            </div>
        )
    
}

export default SearchItem


