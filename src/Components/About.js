
import React from 'react';

import { Link } from 'react-router-dom'; // links back to Home page


function About() {  // displays About page contents
    return (
        <div>

            <p><font size="5" color="yellow">This is a Pokédex app built using React and the PokéAPI. It allows trainers to browse and learn more about different Pokémon.</font></p>

            <p>
                <Link to="/home"><font size="5" color="green">Go to the home page</font></Link>
            </p>
        </div>
    );
}

export default About;


