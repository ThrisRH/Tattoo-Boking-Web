import React from "react";
import ICandText from "../../Items/ICandText";
import pageFB from "../../image/pageFB.png";

// Icons
import Marker from "../../svg/marker";
import Phone from "../../svg/phone";
import Fb from "../../svg/fb";
import Ig from "../../svg/ig";

const ContactBox = () => {
  return (
    <div
      className="container flex w-full flex-col h-full bg-primary rounded-xl
    p-6 items-center justify-between"
    >
      <h6 className="text-base text-white font-bold">Liên hệ</h6>
      <div className="flex flex-col content gap-4">
        <ICandText
          icon={<Marker fill="#1c1c1c" />}
          name={"Địa chỉ: 56/1 Gò Ô Môi , QUẬN 7, TPHCM"}
        />
        <ICandText
          icon={<Phone fill="#1c1c1c" />}
          name={"0353435564 (Hotline)"}
        />
        <ICandText
          icon={<Fb fill="#1c1c1c" />}
          name={"https://www.facebook.com/kaaneeki (Quan Vân Trường)"}
        />
        <ICandText icon={<Ig stroke="#1c1c1c" />} name={"nekiitattoo"} />
      </div>
      <img src={pageFB} alt="Page of FB" />
    </div>
  );
};

export default ContactBox;
