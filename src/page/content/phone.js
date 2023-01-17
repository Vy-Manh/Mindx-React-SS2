import React from "react";
import { Link } from "react-router-dom";
import "../content/phone.css"

const Phone = () => {
    return (
        <>
            <Link className="phone-top-side">
                <div className="phone-top-side__content">
                    <p>New</p>
                    <h1>iPhone 14</h1>
                    <h3>Lớn và Lớn hơn.</h3>
                    <p>Chỉ với 2 triệu / tháng trong vòng 18 tháng hoặc 32 triệu cho 1 sản phẩm</p>
                    <div className="phone-top-side__Link">
                        <div className="phone-top-side__Link-item">
                            <Link>Tìm hiểu thêm</Link>
                            <i class="fa-solid fa-chevron-right"></i>
                        </div>
                        <div className="phone-top-side__Link-item">
                            <Link>Mua</Link>
                            <i class="fa-solid fa-chevron-right"></i>
                        </div>
                    </div>
                </div>
            </Link>
            <Link className="phone-second-side">
                <div className="phone-second-side__content">
                    <p>New</p>
                    <h1>iPhone 14 Pro</h1>
                    <h3>Vượt ngoài mong đợi</h3>
                    <p>Chỉ với 2,4 triệu / tháng trong vòng 18 tháng hoặc 40 triệu cho 1 sản phẩm</p>
                    <div className="phone-second-side__Link">
                        <div className="phone-second-side__Link-item">
                            <Link>Tìm hiểu thêm</Link>
                            <i class="fa-solid fa-chevron-right"></i>
                        </div>
                        <div className="phone-second-side__Link-item">
                            <Link>Mua</Link>
                            <i class="fa-solid fa-chevron-right"></i>
                        </div>
                    </div>
                </div>
            </Link>
            <Link className="phone-third-side">
                <div className="phone-third-side__content">

                    <h1>iPhone SE</h1>
                    <h3>Pin lâu vượt trội</h3>
                    <h3>Nâng tầm trải nghiệm</h3>
                    <p>Chỉ với 1 triệu / tháng trong vòng 18 tháng hoặc 20 triệu cho 1 sản phẩm</p>
                    <div className="phone-third-side__Link">
                        <div className="phone-third-side__Link-item">
                            <Link>Tìm hiểu thêm</Link>
                            <i class="fa-solid fa-chevron-right"></i>
                        </div>
                        <div className="phone-third-side__Link-item">
                            <Link>Mua</Link>
                            <i class="fa-solid fa-chevron-right"></i>
                        </div>
                    </div>
                </div>
            </Link>
            <h1 className="title--phone-list">Smart Phone nào phù hợp với bạn?</h1>
            <div className="phone__list-items">
                <div className="phone__list-item">
                    <div className="phone__list-item--img">
                        <img src="https://bom.so/53nZlO"></img>
                    </div>
                    <div className="phone__list-item--content">
                        <p style={{ color: 'red' }}>Mới</p>
                        <h3>iPhone 14 pro</h3>
                        <h4>Công nghệ dẫn đầu.</h4>
                    </div>
                    <div className="phone__list-item--cart">
                        <p>
                            40 triệu vnđ
                        </p>
                        <div className="phone__list-item--cart-buy">
                            <Link>Mua</Link>
                        </div>
                        <div className="phone__list-item--cart-leanr">
                            <Link>Tìm hiểu thêm</Link>
                            <i class="fa-solid fa-chevron-right"></i>
                        </div>
                    </div>
                    <div className="phone__list-items--information">
                        <div className="phone__list-item--information information1">
                            <h3>6.7″ or 6.1″</h3>
                            <p>Super Retina XDR</p>
                            <p>Công nghệ ProMotion</p>
                            <p>Luôn hiển thị</p>
                        </div>
                        <div className="phone__list-item--information information2">
                            <p>Dynamic Island</p>
                            <p>Tương tác với iPhone</p>
                            <p>theo cách mới</p>
                        </div>
                        <div className="phone__list-item--information information3">
                            <p>tín hiệu SOS vệ tinh</p>
                            <p>Phát hiện sự cố</p>
                        </div>
                        <div className="phone__list-item--information information4">
                            <p>Camere 48MP</p>
                            <p>Chụp góc rộng</p>
                            <p>Chi tiết và màu sắc đỉnh cao</p>
                            <p>Tự động lấy nét TrueDepth</p>
                        </div>
                        <div className="phone__list-item--information information5">
                            <p>Chế độ quay thể thao</p>
                            <p>Chống rung mạnh mẽ</p>
                        </div>
                        <div className="phone__list-item--information information5">
                            <p>phát video</p>
                            <p>lên đến 29 giờ</p>
                        </div>
                        <div className="phone__list-item--information information5">
                            <p>Chip A16 đột phá </p>
                        </div>
                        <div className="phone__list-item--information information5">
                            <p>Bảo mật Face ID</p>
                        </div>
                    </div>

                </div>
                <div className="phone__list-item">
                    <div className="phone__list-item--img">
                        <img src="https://bom.so/HpVV60"></img>
                    </div>
                    <div className="phone__list-item--content">
                        <p style={{ color: 'red' }}>Mới</p>
                        <h3>iPhone 14</h3>
                        <h4>Nâng cấp tổng thể.</h4>
                    </div>
                    <div className="phone__list-item--cart">
                        <p>
                            32 triệu vnđ
                        </p>
                        <div className="phone__list-item--cart-buy">
                            <Link>Mua</Link>
                        </div>
                        <div className="phone__list-item--cart-leanr">
                            <Link>Tìm hiểu thêm</Link>
                            <i class="fa-solid fa-chevron-right"></i>
                        </div>
                    </div>
                    <div className="phone__list-items--information">
                        <div className="phone__list-item--information information1">
                            <h3>6.7″ or 6.1″</h3>
                            <p>Super Retina XDR</p>
                            <p>-</p>
                            <p>-</p>
                        </div>
                        <div className="phone__list-item--information information2">
                            <p>-</p>

                        </div>
                        <div className="phone__list-item--information information3">
                            <p>tín hiệu SOS vệ tinh</p>
                            <p>Phát hiện sự cố</p>
                        </div>
                        <div className="phone__list-item--information information4">
                            <p>Camere 12MP</p>
                            <p>Chụp góc rộng</p>
                            <p>Chi tiết và màu sắc đỉnh cao</p>
                            <p>Tự động lấy nét TrueDepth</p>
                        </div>
                        <div className="phone__list-item--information information5">
                            <p>Chế độ quay thể thao</p>
                            <p>Chống rung mạnh mẽ</p>
                        </div>
                        <div className="phone__list-item--information information5">
                            <p>phát video</p>
                            <p>lên đến 26 giờ</p>
                        </div>
                        <div className="phone__list-item--information information5">
                            <p>Chip A15 </p>
                        </div>
                        <div className="phone__list-item--information information5">
                            <p>Bảo mật Face ID</p>
                        </div>
                    </div>

                </div>
                <div className="phone__list-item">
                    <div className="phone__list-item--img">
                        <img src="https://bom.so/P31sIR"></img>
                    </div>
                    <div className="phone__list-item--content">
                        <p style={{ color: 'red' }}>Mới</p>
                        <h3>iPhone 13</h3>
                        <h4>Tuyệt vời bất ngờ.</h4>
                    </div>
                    <div className="phone__list-item--cart">
                        <p>
                            28 triệu vnđ
                        </p>
                        <div className="phone__list-item--cart-buy">
                            <Link>Mua</Link>
                        </div>
                        <div className="phone__list-item--cart-leanr">
                            <Link>Tìm hiểu thêm</Link>
                            <i class="fa-solid fa-chevron-right"></i>
                        </div>
                    </div>
                    <div className="phone__list-items--information">
                        <div className="phone__list-item--information information1">
                            <h3>6.1″ or 5.4″</h3>
                            <p>Super Retina XDR</p>
                            <p>-</p>
                            <p>-</p>
                        </div>
                        <div className="phone__list-item--information information2">
                            <p>-</p>

                        </div>
                        <div className="phone__list-item--information information3">
                            <p>-</p>
                            <p>Phát hiện sự cố</p>
                        </div>
                        <div className="phone__list-item--information information4">
                            <p>Camere 12MP</p>
                            <p>Chụp góc rộng</p>
                            <p>-</p>
                            <p>Tự động lấy nét TrueDepth</p>
                        </div>
                        <div className="phone__list-item--information information5">
                            <p>-</p>
                            <p>-</p>
                        </div>
                        <div className="phone__list-item--information information5">
                            <p>phát video</p>
                            <p>lên đến 19 giờ</p>
                        </div>
                        <div className="phone__list-item--information information5">
                            <p>Chip A15 </p>
                        </div>
                        <div className="phone__list-item--information information5">
                            <p>Bảo mật Face ID</p>
                        </div>
                    </div>

                </div>
                <div className="phone__list-item">
                    <div className="phone__list-item--img">
                        <img src="https://bom.so/3iGxkA"></img>
                    </div>
                    <div className="phone__list-item--content">
                        <p style={{ color: 'red' }}>Mới</p>
                        <h3>iPhone SE</h3>
                        <h4>Sức mạnh và giá trị.</h4>
                    </div>
                    <div className="phone__list-item--cart">
                        <p>
                            20 triệu vnđ
                        </p>
                        <div className="phone__list-item--cart-buy">
                            <Link>Mua</Link>
                        </div>
                        <div className="phone__list-item--cart-leanr">
                            <Link>Tìm hiểu thêm</Link>
                            <i class="fa-solid fa-chevron-right"></i>
                        </div>
                    </div>
                    <div className="phone__list-items--information">
                        <div className="phone__list-item--information information1">
                            <h3>4.7″</h3>
                            <p>Super Retina XDR</p>
                            <p>-</p>
                            <p>-</p>
                        </div>
                        <div className="phone__list-item--information information2">

                            <p>-</p>
                        </div>
                        <div className="phone__list-item--information information3">
                            <p>-</p>
                            <p>Phát hiện sự cố</p>
                        </div>
                        <div className="phone__list-item--information information4">
                            <p>Camere 12MP</p>
                            <p>-</p>
                            <p>-</p>
                            <p>Tự động lấy nét</p>
                        </div>
                        <div className="phone__list-item--information information5">
                            <p>-</p>
                            <p>-</p>
                        </div>
                        <div className="phone__list-item--information information5">
                            <p>phát video</p>
                            <p>lên đến 15 giờ</p>
                        </div>
                        <div className="phone__list-item--information information5">
                            <p>Chip A15 </p>
                        </div>
                        <div className="phone__list-item--information information5">
                            <p>Bảo mật Touch ID</p>
                        </div>
                    </div>
                </div>
            </div>
            

        </>

    )
}

export default Phone