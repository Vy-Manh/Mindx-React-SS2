import { useEffect, useState } from "react"
import { phoneAPI, computerAPI, ipadAPI, accessoryAPI, watchAPI } from "./product"
import './phoneShowup.css'
import { Button } from "reactstrap";
var phoneProduct = JSON.parse(phoneAPI);
var computerProduct = JSON.parse(computerAPI);
var ipadProduct = JSON.parse(ipadAPI);
var accessoryProduct = JSON.parse(accessoryAPI);
var watchProduct = JSON.parse(watchAPI);

const PhoneShowed = (props) => {
    const [phoneItems, setPhoneItems] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            setPhoneItems(phoneProduct)
        }
        fetchData()
    }, [])


    return (<>

        {phoneItems.map((item, index) => {
            return (
                <div className="items-box">
                    <div key={index} className="item-name">{item.name}</div>
                    <img src={item.img} alt={item.name} className='image' />
                    <div className="product-infomation">{item.information}</div>
                    <div className="product-price">{item.price} <p className="Dv">VNĐ</p></div>
                    <div>
                        <Button color="primary">
                            Xem chi tiết
                        </Button>
                        {' '}
                        <Button color="danger">
                                Mua
                        </Button>
                    </div>
                </div>
            )
        })}
    </>
    )
}

export default PhoneShowed