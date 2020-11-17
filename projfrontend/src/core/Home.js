import React from 'react';
import "../styles.css"
import {API} from "../backend"
import Base from "./Base" 

export default function Home(){
    console.log("API is ", API)
    return(
        <Base title="Home page" description="Welcome to the tshirt store">
            <h1 className="text-white" >
                Heloo frontend 
                
            </h1>
        </Base>
    )
}