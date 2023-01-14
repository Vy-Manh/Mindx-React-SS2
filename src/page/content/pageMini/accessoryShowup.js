import { useEffect, useState } from "react"
import { phoneAPI, computerAPI, ipadAPI, accessoryAPI, watchAPI } from "./product"
import './phoneShowup.css'
var phoneProduct = JSON.parse(phoneAPI);
var computerProduct = JSON.parse(computerAPI);
var ipadProduct = JSON.parse(ipadAPI);
var accessoryProduct = JSON.parse(accessoryAPI);
var watchProduct = JSON.parse(watchAPI);

const AccessoryShowed = (props) => {
    const [accessoryItems, setAccessoryItems] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            setAccessoryItems(accessoryProduct)
        }
        fetchData()
    }, [])


    return (<>

        {accessoryItems.map((item, index) => {
            return (
                <div className="items-box">
                    <div key={index} className="item-name">{item.name}</div>
                    <img src={item.img} alt={item.name} className='image' />
                    <div className="product-infomation">{item.information}</div>
                    <div className="product-price">{item.price} <p>vnđ</p></div>
                </div>
            )
        })}
    </>
    )
}

export default AccessoryShowed