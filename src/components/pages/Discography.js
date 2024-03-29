import React from 'react';


const discography = [
    {
        title: "Apocalypse: Save Us",
        image: require(`../../assets/apocalypse_albm.jpg`),
        country: "Korea",
        album_type: "Album",
        tracklist: ["Intro: Save Us", "Locked Inside a Door", "MAISON", "Starlight", "Together", "Always", "Skit: The Seven Doors", "Cherry (Real Miracle) (JiU Solo)", "No Dot (SuA solo)", "Entrancing (Siyeon Solo)", "Winter (Handong solo)", "For (Yoohyeon solo)", "Beauty Full (Dami solo)", "Playground (Gahyeon solo)"]
    },
    {
        title: "Dystopia: The Tree of Language",
        image: require(`../../assets/dystopia_albm.jpg`),
        country: "Korea",
        album_type: "Album",
        tracklist: ["Intro", "Scream", "Tension", "Red Sun", "Black or White", "Jazz Bar", "SAHARA", "In the Frozen", "Daybreak", "Full Moon", "Over the Sky", "Outro", "Scream (Instrumental)", "Paradise"]
    },
    {
        title: "The Beginning of the End",
        image: require(`../../assets/begn_albm.jpg`),
        country: "Japan",
        album_type: "Album",
        tracklist: ["Intro", "Breaking Out", "My Way", "Chase Me (Jpn ver)", "Good Night (Jpn ver)", "Wonderland (Jpn ver.)", "Piri (Jpn ver)", "What (Jpn ver)", "I Miss You", "And There Was No One Left (Jpn ver)", "You and I (Jpn ver)", "Outro"]
    },
    {
        title: "Summer Holiday",
        image: require(`../../assets/summerhol_mini.jpg`),
        country: "Korea",
        album_type: "Mini Album",
        tracklist: ["Intro", "BEcause", "Airplane", "Whistle", "Alldaylong", "A Heart of Sunflower"]
    },
    {
        title: "Nightmare",
        image: require(`../../assets/nightmare_single.jpg`),
        country: "Korea",
        album_type: "Single",
        tracklist: ["Welcome to Dream", "Chase Me", "Emotion", "Chase Me (Instrumental)"]
    },
    {
        title: "Fall Asleep in the Mirror",
        image: require(`../../assets/fallAsleep_single.jpg`),
        country: "Korea",
        album_type: "Single",
        tracklist: ["My Toys", "Good Night", "Lullaby", "Good Night (Instrumental)"]
    },
    {
        title: "Dystopia: Lose Myself",
        image: require(`../../assets/losemyself_mini.jpg`),
        country: "Korea",
        album_type: "Mini Album",
        tracklist: ["Intro", "BOCA", "Break the Wall", "Can't Get You Out of My Mind", "Dear", "BOCA (Instrumental)"]
    },
    {
        title: "Dystopia: Road to Utopia",
        image: require(`../../assets/roadtoUtopia_mini.png`),
        country: "Korea",
        album_type: "Mini Album",
        tracklist: ["Intro", "Odd Eye", "Wind Blows", "Poison Love", "4 Memory", "New Days", "Odd Eye (instrumental)"]
    },
    {
        title: "Prequel",
        image: require(`../../assets/prequel_mini.jpg`),
        country: "Korea",
        album_type: "Mini Album",
        tracklist: ["Before and After", "Fly High", "Wake Up", "Sleep Walking", "Trust Me", "Fly High (Instrumental)"]
    },
    {
        title: "Alone in the City",
        image: require(`../../assets/aloneInTheCity_mini.png`),
        country: "Korea",
        album_type: "Mini Album",
        tracklist: ["Intro", "What", "Wonderland", "Trap", "July 7th", "What (Instrumental)"]
    },
    {
        title: "The End of Nightmare",
        image: require(`../../assets/endOfNightmare_mini.png`),
        country: "Korea",
        album_type: "Mini Album",
        tracklist: ["Intro", "Piri", "Diamond", "And There Was No One Left", "Daydream", "Piri (Instrumental)"]
    },
    {
        title: "Nightmare - Escape the ERA",
        image: require(`../../assets/escapeTheEra_mini.jpg`),
        country: "Korea",
        album_type: "Mini Album",
        tracklist: ["Inside-Outside", "You and I", "Mayday", "Which a Start", "Scar", "You and I (Instrumental)"]
    },
    {
        title: "No More",
        image: require(`../../assets/noMore_single.jpg`),
        country: "Japan",
        album_type: "Single",
        tracklist: ["No More", "No More (Instrumental)"]
    },
    {
        title: "Eclipse",
        image: require(`../../assets/eclipse_single.jpg`),
        country: "Japan",
        album_type: "Single",
        tracklist: ["Eclipse", "No More", "Don't Light My Fire", "Eclipse (Instrumental)", "No More (Instrumental)", "Don't Light My Fire (Instrumental)"]
    },
    {
        title: "Endless Night",
        image: require(`../../assets/endlessNight_single.jpg`),
        country: "Japan",
        album_type: "Single",
        tracklist: ["Enless Night", "Over the SKy (Japanese ver.)", "Silent Night (Japanese ver.)"]
    },
    {
        title: "What",
        image: require(`../../assets/what_single.jpg`),
        country: "Japan",
        album_type: "Single",
        tracklist: ["What (Japanese ver.)", "Chase Me (Japanese ver.)", "I Miss You"]
    },
    {
        title: "You and I",
        image: require(`../../assets/piri_single.jpg`),
        country: "Japan",
        album_type: "Single",
        tracklist: ["You and I (Japanese ver.)", "You and I (Instrumental)"]
    },
    {
        title: "Piri ~Fue wo Fuke~",
        image: require(`../../assets/piri_single.jpg`),
        country: "Japan",
        album_type: "Single",
        tracklist: ["Piri (Japanese ver.)", "Good Night (Japanese ver.)", "Wonderland (Japanese ver.)"]
    },

]

const Discography = () => {
    return (
        <div>
            {discography.map(({title, image, country, album_type, tracklist}) => (
                <div>
                    <img src={image} alt={title}/>
                    <h3 className="text-white text-2xl">{title}</h3>
                    <p>{country}</p>
                    <p>Type: {album_type}</p>
                    <ul>
                        {tracklist.map((track, index) => {
                            return (
                                <li>{index + 1}. {track}</li>
                            );
                        })}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Discography;