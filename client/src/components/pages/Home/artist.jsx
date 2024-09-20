import React from "react";

import NekiArtist from "../../image/Neki.png";
import ButtonLine from "../../Items/ButtonLine";
import ICandText from "../../Items/ICandText";
import SolidFB from "../../svg/solidFB";
import IG from "../../svg/ig";

const artist = () => {
  return (
    <div className="flex flex-col container gap-8 w-full items-center">
      <div className="title">
        <h1 className="font-bold  md:text-[32px] sm:text-[24px] text-xl">
          Thợ xăm
        </h1>
      </div>
      <div className="container w-full flex flex-col gap-8 items-center">
        <div className="container w-full flex flex-col sm:flex-row gap-8 items-center">
          <div className="left-card w-full sm:w-1/2 xl:w-1/4">
            <img src={NekiArtist} alt="Neki" />
          </div>
          <div className="right-card flex flex-col gap-6 w-full sm:w-1/2 xl:w-3/4 base justify-center items-center">
            <ul className="flex flex-col gap-6 text-[12px] lg:text-[16px] xl:text-[18px] text-justify">
              <li>
                Xin chào! Tôi là <span> Quan Vân Trường</span>, chủ sở hữu của
                <span> Neki's Tattoo</span> và cũng là một nghệ sĩ xăm với niềm
                đam mê mãnh liệt trong việc biến ý tưởng thành những tác phẩm
                nghệ thuật độc đáo trên da.
              </li>
              <li>
                Với 5 năm kinh nghiệm trong ngành, tôi đã có cơ hội làm việc với
                rất nhiều khách hàng và thực hiện hàng trăm tác phẩm khác nhau.
                Từ những hình xăm nhỏ mang ý nghĩa riêng đến những tác phẩm phức
                tạp, tôi luôn coi mỗi lần cầm kim là một lần sáng tạo nghệ
                thuật.
              </li>
              <li>
                Tôi tin rằng mỗi khách hàng đều có một câu chuyện riêng và mong
                muốn thể hiện nó qua hình xăm. Vì vậy, tôi luôn lắng nghe và tư
                vấn tận tình, giúp họ tìm được thiết kế hoàn hảo nhất.
              </li>
            </ul>
            <ButtonLine name={"Đặt lịch ngay"} icon={"yes"} />
          </div>
        </div>
        <div className="icon-container w-full flex flex-row gap-8 justify-center">
          <ICandText
            icon={<SolidFB />}
            name={"Quan Vân Trường"}
            isBold={"yes"}
          />
          <ICandText icon={<IG />} name={"nekiitattoo"} isBold={"yes"} />
        </div>
      </div>
    </div>
  );
};

export default artist;
