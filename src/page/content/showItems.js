import React from "react"
import PhoneShowed from "./pageMini/phoneShowup";
import './showItems.css'
import { phoneAPI,computerAPI,ipadAPI,accessoryAPI,watchAPI } from "./pageMini/product"
import WatchShowed from "./pageMini/watchShowup";
import ComputerShowed from "./pageMini/computerShowup";
import IpadShowed from "./pageMini/ipadShowup";
import AccessoryShowed from "./pageMini/accessoryShowup";



var phoneItems = JSON.parse(phoneAPI);
var computerItems = JSON.parse(computerAPI);
var ipadItems = JSON.parse(ipadAPI);
var accessoryItems = JSON.parse(accessoryAPI);
var watchItems = JSON.parse(watchAPI);
// console.log(phoneItems,computerItems,ipadItems,accessoryItems,watchItems);

const ShowItems = () => {
    return(
        <>
        <h1>Điện thoại</h1>  
        <div className="box-items">
        <PhoneShowed/>
        </div>
        <h1>Máy tính</h1>  
        <div className="box-items">
        <ComputerShowed/>
        </div>
        <h1>Đồng hồ thông minh</h1>  
        <div className="box-items">
        <WatchShowed/>
        </div>
        <h1>Máy tính bảng</h1>  
        <div className="box-items">
        <IpadShowed/>
        </div>
        <h1>Phụ kiện</h1>  
        <div className="box-items">
        <AccessoryShowed/>
        </div>
        
        </>
        
    )
}

export default ShowItems