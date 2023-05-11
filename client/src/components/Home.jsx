import React from "react";
import { Outlet ,Link} from "react-router-dom";

export const Home=()=>{
return(
    <div id="home">
        <h1>בית</h1>
    <Link to="login">להתחברות</Link>
    <Outlet/>
    </div>
    )

    
}

