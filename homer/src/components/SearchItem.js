import React, { Component } from 'react';


function SearchItem(props) {

    const photos = props.fetchedPictures.map((photo, key)=>{
        console.log(photo)
        return(
        <img key={key} src={photo.largeImageURL}></img>
        )
    })

    
        return(
            <div>
                <div>{photos}</div>
            </div>
        )
    
}

export default SearchItem