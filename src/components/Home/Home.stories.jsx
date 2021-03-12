import React from "react";
import Home from "./index";
import {user} from "../../utils/storiesConstants";

export default {
    title: "System/App/Home",
    component: Home
}

export const HomeExample = () => (<section>

    <Home user={user}/></section>)