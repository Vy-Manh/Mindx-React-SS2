import React from "react";
import { Link } from "react-router-dom";
import "../content/home.css"

const Home = () => {
    return (
        <>
            <Link className="home-top-side">
                <div className="home-top-side__content">
                    <h1>iPhone 14</h1>
                    <h3>Lớn và Lớn hơn.</h3>
                    <div className="home-top-side__Link">
                        <div className="home-top-side__Link-item">
                            <Link>Tìm hiểu thêm</Link>
                            <i class="fa-solid fa-chevron-right"></i>
                        </div>
                        <div className="home-top-side__Link-item">
                            <Link>Mua</Link>
                            <i class="fa-solid fa-chevron-right"></i>
                        </div>
                    </div>
                </div>
            </Link>
            <Link className="home-second-side">
                <div className="home-second__content">
                    <h1>Bây giờ hoặc không bao giờ.</h1>
                    <h3>Món quà ý nghĩa vào dịp giáng sinh</h3>
                    <div className="home-second__Link">
                        <div className="home-second__Link-item">
                            <Link>Cửa hàng nhân dịp lễ lớn</Link>
                            <i class="fa-solid fa-chevron-right"></i>
                        </div>
                    </div>
                </div>
            </Link>
            <Link className="home-third-side">
                <div className="home-third-side__content">
                    <h1><i class=" fa-brands fa-apple"></i> Đặt sớm</h1>
                    <h3>Giảm ngay 5% với mỗi sản phẩm đặt trước 25 tháng 12 này.</h3>
                    <h4>Chỉ có trên "Tên cửa hàng"</h4>
                    <div className="home-third-side__Link">
                        <div className="home-third-side__Link-item">
                            <Link>Tìm hiểu thêm</Link>
                            <i class="fa-solid fa-chevron-right"></i>
                        </div>
                        <div className="home-third-side__Link-item">
                            <Link>Đặt ngay</Link>
                            <i class="fa-solid fa-chevron-right"></i>
                        </div>
                    </div>
                </div>
            </Link>
            <div className="list-items">
                <Link className="box-item box-item1">
                    <div className="box-item__content ">
                        <h1>iPhone 14 Pro</h1>
                        <h3>Vượt ngoài mong đợi</h3>
                        <div className="box-item__Link">
                            <div className="box-item__Link-item">
                                <Link>Tìm hiểu thêm</Link>
                                <i class="fa-solid fa-chevron-right"></i>
                            </div>
                            <div className="box-item__Link-item">
                                <Link>Mua</Link>
                                <i class="fa-solid fa-chevron-right"></i>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link className="box-item box-item2">
                    <div className="box-item__content ">
                        <h1>iPad</h1>
                        <h3>Phong cách. Chuyên biệt. Sáng tạo.</h3>
                        <div className="box-item__Link">
                            <div className="box-item__Link-item">
                                <Link>Tìm hiểu thêm</Link>
                                <i class="fa-solid fa-chevron-right"></i>
                            </div>
                            <div className="box-item__Link-item">
                                <Link>Mua</Link>
                                <i class="fa-solid fa-chevron-right"></i>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link className="box-item box-item3">
                    <div className="box-item__content ">
                        <h1>AirPods</h1>
                        <h3>Tận hưởng giai điệu</h3>
                        <div className="box-item__Link">
                            <div className="box-item__Link-item">
                                <Link>Cửa Hàng</Link>
                                <i class="fa-solid fa-chevron-right"></i>
                            </div>
                        
                        </div>
                    </div>
                </Link>
                <Link className="box-item box-item4">
                    <div className="box-item__content ">
                        <h1><i class=" fa-brands fa-apple"></i>WATCH</h1>
                        <p style={{color : 'red'}}>SERIES 8</p>
                        <h3>Sức khỏe và đời sống</h3>
                        <div className="box-item__Link">
                            <div className="box-item__Link-item">
                                <Link>Tìm hiểu thêm</Link>
                                <i class="fa-solid fa-chevron-right"></i>
                            </div>
                            <div className="box-item__Link-item">
                                <Link>Mua</Link>
                                <i class="fa-solid fa-chevron-right"></i>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link className="box-item box-item5">
                    <div className="box-item__content ">
                        <h1><i class=" fa-brands fa-apple"></i>WATCH</h1>
                        <p style={{color : 'orange'}}>ULTRA</p>
                        <h3>Hành trình khám phá</h3>
                        <div className="box-item__Link">
                            <div className="box-item__Link-item">
                                <Link>Tìm hiểu thêm</Link>
                                <i class="fa-solid fa-chevron-right"></i>
                            </div>
                            <div className="box-item__Link-item">
                                <Link>Mua</Link>
                                <i class="fa-solid fa-chevron-right"></i>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link className="box-item box-item6">
                    <div className="box-item__content ">
                        <h1>HomePod mini</h1>
                
                        <div className="box-item__Link">
                            <div className="box-item__Link-item">
                                <Link>Tìm hiểu thêm</Link>
                                <i class="fa-solid fa-chevron-right"></i>
                            </div>
                            <div className="box-item__Link-item">
                                <Link>Mua</Link>
                                <i class="fa-solid fa-chevron-right"></i>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </>

    )
}

export default Home