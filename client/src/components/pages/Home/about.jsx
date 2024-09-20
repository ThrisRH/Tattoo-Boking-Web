import React from "react";

import about1 from "../../image/about1.png";
import about2 from "../../image/about2.png";
import about3 from "../../image/about3.png";
import about4 from "../../image/about4.png";
import about5 from "../../image/about5.png";
import about6 from "../../image/about6.png";
import ImgContainer from "../../Items/ImgContainer.jsx";
import ContentBlock from "../../Items/ContentBlock.jsx";

const about = () => {
  const items1 = [
    {
      MainContent: "Thiết Kế Tattoo Theo Yêu Cầu",
      Content:
        "Mỗi khách hàng là một câu chuyện riêng, và chúng tôi sẽ giúp bạn biến ý tưởng đó thành một hình xăm độc quyền, phản ánh phong cách và cá tính của bạn.",
    },
    {
      MainContent: "Tattoo Che Khuyết Điểm",
      Content:
        "Cho dù bạn muốn che đi một hình xăm cũ, hoặc làm mờ vết sẹo không mong muốn, chúng tôi luôn có giải pháp sáng tạo và tinh tế.",
    },
    {
      MainContent: "Tattoo Nghệ Thuật",
      Content:
        "Từ những hình xăm hiện thực đến trừu tượng, từ tối giản đến phức tạp, chúng tôi đều có thể đáp ứng mọi nhu cầu nghệ thuật của bạn.",
    },
  ];

  const items2 = [
    {
      MainContent: "Hỗ trợ sau khi xăm",
      Content:
        "Cung cấp hướng dẫn chăm sóc chi tiết, đảm bảo hình xăm của bạn lành lặn tốt nhất và giữ được vẻ đẹp lâu dài.",
    },
    {
      MainContent: "Chất lượng tuyệt đối",
      Content:
        "Mực xăm và dụng cụ cao cấp, đảm bảo an toàn tuyệt đối cho da và sức khỏe của bạn.",
    },
    {
      MainContent: "An toàn và vệ sinh",
      Content:
        "Tất cả các dụng cụ đều được tiệt trùng trước khi sử dụng, và mực xăm luôn đảm bảo không gây kích ứng cho da.",
    },
    {
      MainContent: "Giá xăm tốt",
      Content: "Có nhiều chương trình ưu đã, hình không đẹp discount 50%.",
    },
  ];

  const items3 = [
    {
      MainContent: "Kỹ thuật xăm chính xác",
      Content:
        "Kỹ thuật xăm với độ chính xác cao nhất, từ việc sử dụng kim xăm cho đến các đường nét trên da.",
    },
    {
      MainContent: "Điều khiển độ sâu kiêm xăm",
      Content:
        "Chúng tôi kiểm soát chặt chẽ độ sâu của kim để đảm bảo mực xăm được đặt chính xác vào lớp hạ bì, giúp hình xăm bền màu và không gây tổn thương không cần thiết cho da.",
    },
    {
      MainContent: "Tuân thủ quy trình kỹ thuật an toàn",
      Content:
        "Tuân thủ mọi quy trình kỹ thuật an toàn, bao gồm việc chuẩn bị dụng cụ, vệ sinh da và kiểm tra phản ứng của da trước khi bắt đầu xăm.",
    },
    {
      MainContent: "Kỹ thuật che khuyết điểm (Cover-up)",
      Content:
        "Che phủ các hình xăm cũ hoặc khuyết điểm trên da bằng các thiết kế mới sáng tạo, đảm bảo che phủ hoàn hảo mà vẫn duy trì tính thẩm mỹ.",
    },
  ];
  return (
    <div className="flex flex-col container gap-8 w-full items-center">
      <div className="title">
        <h1 className="font-bold md:text-[32px] sm:text-[24px] text-xl">
          Về Neki's Tattoo
        </h1>
      </div>
      <div className="content w-full flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row content-card w-full gap-6">
          {/* Gọi khung chứa các image và truyền vào props 2 ảnh */}
          <ImgContainer Art1={about1} Art2={about2} />

          {/* Block chứa các content */}
          <ContentBlock
            backHighlight={"Tại"}
            frontHighlight={", chúng tôi cung cấp"}
            items={items1}
          />
        </div>
        <div className="flex flex-col-reverse sm:flex-row content-card w-full gap-6">
          {/* Block chứa các content */}
          <ContentBlock
            align={"left"}
            backHighlight={"Tại"}
            frontHighlight={", cam kết"}
            items={items2}
          />
          {/* Gọi khung chứa các image và truyền vào props 2 ảnh */}
          <ImgContainer Art1={about3} Art2={about4} />
        </div>
        <div className="flex flex-col sm:flex-row content-card w-full gap-6">
          {/* Gọi khung chứa các image và truyền vào props 2 ảnh */}
          <ImgContainer Art1={about5} Art2={about6} />

          {/* Block chứa các content */}
          <ContentBlock backHighlight={"Kỹ thuật của"} items={items3} />
        </div>
      </div>
    </div>
  );
};

export default about;
