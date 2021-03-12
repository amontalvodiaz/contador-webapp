import React from "react";
import Profile from "./index";
import {user} from "../../utils/storiesConstants";


export default {
    title: 'System/App/Profile',
    component: Profile
}

export const ProfileExample = () =>(<Profile user={user}/>)