import React from "react"
import '../content/showItems.css'
import {ipadAPI } from "../content/pageMini/product"
import ComputerShowed from "../content/pageMini/computerShowup";
import IpadShowed from "../content/pageMini/ipadShowup";


var ipadItems = JSON.parse(ipadAPI);

// console.log(phoneItems,computerItems,ipadItems,accessoryItems,watchItems);

const ShowItems = () => {
    return(
        <>
        <h1 style={{marginTop:'5%'}}>Máy tính</h1>  
        <div className="box-items">
        <ComputerShowed/>
        </div>
        <h1>Máy tính bảng</h1>  
        <div className="box-items">
        <IpadShowed/>
        </div>
        
        </>
        
    )
}

export default ShowItems