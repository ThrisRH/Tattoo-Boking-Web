import React from "react";
import ICandText from "./Items/ICandText";
import Marker from "./svg/marker";
import Phone from "./svg/phone";
import Fb from "./svg/fb";

import map from "./image/map.png";

const Footer = () => {
  return (
    <div className="container flex w-full bg-[#FEAE3F] px-0 xl:px-12 py-6 justify-center">
      <div className="items-container w-[90%] 2xl:w-3/4 flex flex-col sm:flex-row gap-8 justify-between">
        <div className="contact w-full sm:w-auto flex-col">
          <div className="flex flex-col gap-2">
            <p className="font-bold text-base lg:text-2xl">Liên hệ</p>
            <div className="subtitle flex flex-col gap-2 text-[12px] lg:text-base">
              <p>
                Hãy cùng đến với Neki’s Tattoo để chọn được những hình xăm đẹp
                và ý nghĩa nhất
              </p>
              <p>Thời gian mở cửa từ 9h đến 22h hằng ngày.</p>
            </div>
            <ul className="flex flex-col gap-2">
              <li>
                <ICandText
                  icon={<Marker fill="#1c1c1c" width="20" height="20" />}
                  name={"Địa chỉ: 56/1 Gò Ô Môi , QUẬN 7, TPHCM"}
                />
              </li>
              <li>
                <ICandText
                  icon={<Phone fill="#1c1c1c" width="20" height="20" />}
                  name={"0353435564 (Hotline)"}
                />
              </li>
              <li>
                <ICandText
                  icon={<Fb fill="#1c1c1c" width="20" height="20" />}
                  name={"https://www.facebook.com/kaaneeki (Quan Vân Trường)"}
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="policy w-full sm:w-auto flex flex-col gap-2">
          <p className="font-bold text-base lg:text-2xl">Chính sách</p>
          <ul className="flex flex-col gap-2 text-[12px] lg:text-base">
            <li>Chính sách quy định chung</li>
            <li>Chinh sách bảo mật</li>
            <li>Chính sách bảo hành</li>
          </ul>
        </div>
        <div className="map w-full sm:w-auto flex flex-col gap-2">
          <p className="font-bold text-base lg:text-2xl">Bản đồ</p>
          <img src={map} alt="map" className="w-[250px]" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
