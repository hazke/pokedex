import React from "react";

import './style.css'  //css imported here
import Main from './Main';

export function Home() { // contains the Main.jsx for the pokedex and pokemon details
    return (
        <div>
            <Main />
        </div>
    );
}
export default Home;