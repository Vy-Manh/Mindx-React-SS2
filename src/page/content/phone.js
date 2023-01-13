import React from "react";
import "../content/phone.css"

const Phone = () => {
    return (
        <>
            <a className="phone-top-side">
                <div className="phone-top-side__content">
                    <p>New</p>
                    <h1>iPhone 14</h1>
                    <h3>Lớn và Lớn hơn.</h3>
                    <p>Chỉ với 2 triệu / tháng trong vòng 18 tháng hoặc 32 triệu cho 1 sản phẩm</p>
                    <div className="phone-top-side__Link">
                        <div className="phone-top-side__Link-item">
                            <a>Tìm hiểu thêm</a>
                            <i class="fa-solid fa-chevron-right"></i>
                        </div>
                        <div className="phone-top-side__Link-item">
                            <a>Mua</a>
                            <i class="fa-solid fa-chevron-right"></i>
                        </div>
                    </div>
                </div>
            </a>
            <a className="phone-second-side">
                <div className="phone-second-side__content">
                    <p>New</p>
                    <h1>iPhone 14 Pro</h1>
                    <h3>Vượt ngoài mong đợi</h3>
                    <p>Chỉ với 2,4 triệu / tháng trong vòng 18 tháng hoặc 40 triệu cho 1 sản phẩm</p>
                    <div className="phone-second-side__Link">
                        <div className="phone-second-side__Link-item">
                            <a>Tìm hiểu thêm</a>
                            <i class="fa-solid fa-chevron-right"></i>
                        </div>
                        <div className="phone-second-side__Link-item">
                            <a>Mua</a>
                            <i class="fa-solid fa-chevron-right"></i>
                        </div>
                    </div>
                </div>
            </a>
            <a className="phone-third-side">
                <div className="phone-third-side__content">

                    <h1>iPhone SE</h1>
                    <h3>Pin lâu vượt trội</h3>
                    <h3>Nâng tầm trải nghiệm</h3>
                    <p>Chỉ với 1 triệu / tháng trong vòng 18 tháng hoặc 20 triệu cho 1 sản phẩm</p>
                    <div className="phone-third-side__Link">
                        <div className="phone-third-side__Link-item">
                            <a>Tìm hiểu thêm</a>
                            <i class="fa-solid fa-chevron-right"></i>
                        </div>
                        <div className="phone-third-side__Link-item">
                            <a>Mua</a>
                            <i class="fa-solid fa-chevron-right"></i>
                        </div>
                    </div>
                </div>
            </a>
            <h1 className="title--phone-list">Smart Phone nào phù hợp với bạn?</h1>
            <div className="phone__list-items">
                <div className="phone__list-item">
                    <div className="phone__list-item--img">
                        <img src="https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/325815861.jpeg"></img>
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
                            <a>Mua</a>
                        </div>
                        <div className="phone__list-item--cart-leanr">
                            <a>Tìm hiểu thêm</a>
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
                        <img src="data:image/jpeg;base64,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"></img>
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
                            <a>Mua</a>
                        </div>
                        <div className="phone__list-item--cart-leanr">
                            <a>Tìm hiểu thêm</a>
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
                        <img src="data:image/jpeg;base64,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"></img>
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
                            <a>Mua</a>
                        </div>
                        <div className="phone__list-item--cart-leanr">
                            <a>Tìm hiểu thêm</a>
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
                        <img src="data:image/jpeg;base64,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"></img>
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
                            <a>Mua</a>
                        </div>
                        <div className="phone__list-item--cart-leanr">
                            <a>Tìm hiểu thêm</a>
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