import React from "react";
import priceImage from "../../image/priceImage.png";

const Price = () => {
  return (
    <div className="flex flex-col container gap-8 w-full items-center">
      <div className="title">
        <h1 className="font-bold  md:text-[32px] sm:text-[24px] text-xl">
          Bảng giá
        </h1>
      </div>
      <div className="container w-full flex flex-col gap-8 items-center">
        <div className="container w-full flex flex-col sm:flex-row gap-8 items-center">
          <div className="left-card w-full sm:w-1/2 xl:w-1/4">
            <img src={priceImage} alt="" />
          </div>
          <div className="right-card flex flex-col gap-6 w-full sm:w-1/2 xl:w-3/4 justify-center items-center">
            <ul className="flex flex-col gap-6 text-[12px] lg:text-[16px] xl:text-[18px] text-justify">
              <li>
                <span>Hình Xăm Nhỏ (Mini Tattoos)</span>: Hình xăm nhỏ, tinh tế,
                thường có kích thước từ 2 đến 5 cm. Phù hợp với những ai muốn
                thể hiện một thông điệp riêng tư hoặc kỷ niệm đặc biệt. Từ
                <span> 200.000</span> VND đến
                <span> 800.000 VND</span>.
              </li>
              <li>
                <span>Hình Xăm Trung Bình (Medium Tattoos)</span>: Hình xăm có
                kích thước từ 5 đến 10 cm, có thể bao gồm các hình ảnh phức tạp
                hơn hoặc kết hợp nhiều yếu tố nghệ thuật. Từ
                <span> 800.000 VND</span> đến
                <span> 2.000.000 VND</span>.
              </li>
              <li>
                <span>Hình Xăm Lớn (Large Tattoos)</span>: Hình xăm lớn, thường
                bao phủ một phần cơ thể như cánh tay, lưng, hoặc chân. Đây là
                các tác phẩm nghệ thuật phức tạp, yêu cầu kỹ năng cao và thời
                gian thực hiện lâu hơn. Từ <span> 2.000.000 VND</span> đến{" "}
                <span> 5.000.000 VND</span>.
              </li>
              <li>
                <span>Hình Xăm Tùy Chỉnh (Custom Tattoos)</span>: Hình xăm được
                thiết kế riêng dựa trên ý tưởng của khách hàng. Từ
                <span> 1.500.000 VND</span>
                trở lên
              </li>
              <li>
                <span>Xăm Chân Dung (Portrait Tattoos)</span>: Hình xăm chân
                dung đòi hỏi độ chính xác và chi tiết cao. Từ{" "}
                <span>3.000.000 VND</span> đến <span>8.000.000 VND</span>.
              </li>
            </ul>
          </div>
        </div>
        <div className="icon-container md:w-[70%] 2xl:w-[60%] flex flex-row gap-8 justify-center">
          <p className="text-[12px] lg:text-base text-[#FEAE3F] text-justify md:text-center">
            Mỗi người mang trong mình một phong cách và ý tưởng xăm độc đáo, do
            đó, mỗi hình xăm sẽ có giá khác nhau tùy thuộc vào sự khác biệt
            trong thiết kế và yêu cầu cá nhân.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Price;
