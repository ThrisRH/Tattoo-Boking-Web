import React from "react";
import HeaderJustLogo from "../../HeaderJustLogo";
import TitleSection from "../../Items/TitleSection";
import BookingForm from "./BookingForm";
import ContactBox from "./ContactBox";

const bookingpage = () => {
  return (
    <div className="pb-24">
      {/* Header */}
      <HeaderJustLogo />

      <div className="body flex flex-col gap-8">
        <TitleSection
          title={"Đặt lịch xăm"}
          subtitle={"Điền vào form dưới đây"}
        />
        <div className="BookingContainer flex flex-row w-full justify-center gap-6">
          <div className="form w-[394px] ">
            <BookingForm />
          </div>
          <div className="contact w-[394px] ">
            <ContactBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default bookingpage;
