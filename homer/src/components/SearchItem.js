import React, { Component } from 'react';


function SearchItem(props) {

    const photos = props.fetchedPictures.map((photo, key)=>{
        console.log(photo)
        return(
        <img onClick = {props.passClick} key={key} src={photo.largeImageURL}></img>
        )
    })


    
        return(
            <div>
                <div>{ photos||"loading" }</div>
            </div>
        )
    
}

export default SearchItem


