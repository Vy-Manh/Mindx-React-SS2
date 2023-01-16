import { useEffect, useState } from "react"
import { phoneAPI, computerAPI, ipadAPI, accessoryAPI, watchAPI } from "./product"
import MuaSP from "../../MuaSP";
import { Button } from "reactstrap";
import './phoneShowup.css'
var phoneProduct = JSON.parse(phoneAPI);
var computerProduct = JSON.parse(computerAPI);
var ipadProduct = JSON.parse(ipadAPI);
var accessoryProduct = JSON.parse(accessoryAPI);
var watchProduct = JSON.parse(watchAPI);

const ComputerShowed = (props) => {
    const [computerItems, setComputerItems] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            setComputerItems(computerProduct)
        }
        fetchData()
    }, [])


    return (<>

        {computerItems.map((item, index) => {
            return (
                <div className="items-box">
                    <div key={index} className="item-name">{item.name}</div>
                    <img src={item.img} alt={item.name} className='image'/>
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

export default ComputerShowed