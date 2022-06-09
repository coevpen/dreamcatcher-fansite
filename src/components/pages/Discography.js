import React from 'react';
import Disco from './disco';

const discography = [
    {
        title: "Dystopia: The Tree of Language",
        image: require(),
        country: "Korea",
        album_type: "Album",
        tracklist: []
    },
    {
        title: "Apocalypse: Save Us",
        image: require(),
        country: "Korea",
        album_type: "Album",
        tracklist: []
    },
    {
        title: "The Beginning of the End",
        image: require(),
        country: "Japan",
        album_type: "Album",
        tracklist: []
    },
    {
        title: "Nightmare",
        image: require(),
        country: "Korea",
        album_type: "Single",
        tracklist: []
    },
    {
        title: "Fall Asleep in the Mirror",
        image: require(),
        country: "Korea",
        album_type: "Single",
        tracklist: ["My Toys", "Good Night", "Lullaby", "Good Night (Instrumental)"]
    },
    {
        title: "Dystopia: Lose Myself",
        image: require(),
        country: "Korea",
        album_type: "Mini Album",
        tracklist: []
    },
    {
        title: "Dystopia: Road to Utopia",
        image: require(),
        country: "Korea",
        album_type: "Mini Album",
        tracklist: []
    },
    {
        title: "Prequel",
        image: require(),
        country: "Korea",
        album_type: "Mini Album",
        tracklist: []
    },
    {
        title: "Alone in the City",
        image: require(),
        country: "Korea",
        album_type: "Mini Album",
        tracklist: []
    },
    {
        title: "The End of Nightmare",
        image: require(),
        country: "Korea",
        album_type: "Mini Album",
        tracklist: []
    },
    {
        title: "Nightmare - Escape the ERA",
        image: require(),
        country: "Korea",
        album_type: "Mini Album",
        tracklist: []
    },
    {
        title: "No More",
        image: require(),
        country: "Japan",
        album_type: "Single",
        tracklist: []
    },
    {
        title: "Eclipse",
        image: require(),
        country: "Japan",
        album_type: "Single",
        tracklist: []
    },
    {
        title: "Endless Night",
        image: require(),
        country: "Japan",
        album_type: "Single",
        tracklist: []
    },
    {
        title: "What",
        image: require(),
        country: "Japan",
        album_type: "Single",
        tracklist: []
    },
    {
        title: "You and I",
        image: require(),
        country: "Japan",
        album_type: "Single",
        tracklist: []
    },
    {
        title: "Piri ~Fue wo Fuke~",
        image: require(),
        country: "Japan",
        album_type: "Single",
        tracklist: []
    },

]

const Discography = () => {

    return (
        <div>
            <Disco discography={discography}/>
        </div>
    );
};

export default Discography;