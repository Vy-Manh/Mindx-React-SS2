import React from "react"
import PhoneShowed from "./pageMini/phoneShowup";
import './showItems.css'
import { phoneAPI,computerAPI,ipadAPI,accessoryAPI,watchAPI } from "./pageMini/product"
import WatchShowed from "./pageMini/watchShowup";
import ComputerShowed from "./pageMini/computerShowup";
import IpadShowed from "./pageMini/ipadShowup";
import AccessoryShowed from "./pageMini/accessoryShowup";
import {UncontrolledCarousel} from 'reactstrap'

var phoneItems = JSON.parse(phoneAPI);
var computerItems = JSON.parse(computerAPI);
var ipadItems = JSON.parse(ipadAPI);
var accessoryItems = JSON.parse(accessoryAPI);
var watchItems = JSON.parse(watchAPI);
// console.log(phoneItems,computerItems,ipadItems,accessoryItems,watchItems);

const ShowItems = () => {
    return(
        <>
        <UncontrolledCarousel
  items={[
    {
      altText: 'Iphone',
      key: 1,
      src: 'https://bom.so/BaPyLz'
    },
    {
      altText: 'Macbook',
      key: 2,
      src: 'https://bom.so/kzgh33'
    },
    {
      altText: 'Apple Watch',
      key: 3,
      src: 'https://bom.so/ZAWzTK'
    }
  ]}
 />
        <h1 className="h1Text">Điện thoại</h1>
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