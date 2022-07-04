import React from 'react';

//TODO: format CSS

function discography(discography){
    const { title, image, country, album_type, tracklist } = discography;
    return(
        <div>
            <h3>{title}</h3>
            <img src={image} alt=''/>
            <p>{country}</p>
            <p>{album_type}</p>
            <ul>
                <li>{tracklist}</li>
            </ul>
        </div>
    );
}

export default discography;