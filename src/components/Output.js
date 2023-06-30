import React from "react";
import { useSelector } from "react-redux";

export default function Output(){
    const biscuits=useSelector(state=>state)
    return(
        <h3>The number of biscuits = {biscuits}</h3>
    )
}