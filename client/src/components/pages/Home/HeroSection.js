import React from "react";
import Marker from "../../svg/marker.js";
import Phone from "../../svg/phone.js";
import Fb from "../../svg/fb.js";

import ButtonSolid from "../../Items/ButtonSolid.jsx";
import ButtonLine from "../../Items/ButtonLine.jsx";
import ICandText from "../../Items/ICandText.jsx";

const HeroSection = () => {
  return (
    <div className="container flex justify-center md:justify-end w-full">
      <div className="introduce-Container flex w-full md:w-[50%] lg:w-[40%] h-fit justify-center phone:justify-end md:px-0">
        <div className="flex flex-col w-full introduce-Content gap-[32px]">
          <div className="flex title justify-center">
            <p className="text-[24px] md:text-[32px]">
              Đánh thức <span className="text-[#FEAE3F]">cá tính</span> <br />{" "}
              Với từng <span className="text-[#FEAE3F]">nét mực.</span>
            </p>
          </div>
          <div className="flex description ">
            <p className="text-[12px] lg:text-base align-middle text-justify leading-6">
              Tại <span className="text-primary font-bold">Neki’s Tattoo</span>,
              chúng tôi hiểu rằng mỗi hình xăm không chỉ là một tác phẩm nghệ
              thuật mà còn là một phần của câu chuyện cá nhân. Với đội ngũ thợ
              xăm chuyên nghiệp và giàu kinh nghiệm, chúng tôi cam kết mang đến
              cho bạn những thiết kế độc đáo và chất lượng nhất.
            </p>
          </div>
          <ul className="flex flex-col contact-list w-full gap-3">
            <li className="item3 w-full">
              <ICandText
                icon={<Marker />}
                name={" Địa chỉ: 56/1 Gò Ô Môi , QUẬN 7, TPHCM"}
              />
            </li>
            <li className="item3 w-full">
              <ICandText icon={<Phone />} name={"0353435564 (Hotline)"} />
            </li>
            <li className="item3 w-full">
              <ICandText
                icon={<Fb />}
                name={"https://www.facebook.com/kaaneeki (Quan Vân Trường)"}
              />
            </li>
          </ul>
          <div className="flex flex-row button-container gap-4 w-full justify-center">
            <ButtonSolid id={"booking"} name={"Đặt lịch"} />
            <ButtonLine name={"Thư viện"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
