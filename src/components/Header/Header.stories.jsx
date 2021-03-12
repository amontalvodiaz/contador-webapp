import React from "react";
import Header from "./index";
import {BrowserRouter, Route} from "react-router-dom";
import {user} from "../../utils/storiesConstants";
import 'bootstrap/dist/css/bootstrap.min.css';


export default {
    title: "System/App/Header",
    component: Header
}

export const HeaderExample = () =>
   (<BrowserRouter><Route><Header user={user} logout={() =>{}}/></Route></BrowserRouter>)
