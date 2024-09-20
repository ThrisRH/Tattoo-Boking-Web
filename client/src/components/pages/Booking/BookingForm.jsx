import React, { useState } from "react";
import Input, { DateTimePicker, InputArea } from "../../Items/Input";
import { ButtonSolidConfirm } from "../../Items/ButtonSolid";
import { format } from "date-fns";

const BookingForm = () => {
  const [name, setName] = useState("");
  const [gmail, setGmail] = useState("");
  const [phone, setPhone] = useState("");
  const [idea, setNote] = useState("");
  const [datetime, setSelectedDate] = useState(null);
  const [formattedDate, setFormattedDate] = useState("");

  // Chọn ngày
  const handleConfirm = () => {
    if (datetime) {
      const dateToSave = format(datetime, "dd-MM-yyyy HH:mm");
      setFormattedDate(dateToSave);
    } else {
      console.error("Hãy chọn ngày giờ");
    }
  };

  // Lấy dữ liệu
  const collectData = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          gmail,
          phone,
          datetime,
          idea,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Data saved:", result);
    } catch (error) {
      console.error("Error collecting data:", error);
    }
  };
  return (
    <form onSubmit={collectData} className="flex flex-col gap-3">
      <Input
        id={"Name"}
        placeholder={"Họ và tên"}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        id={"GmailAddress"}
        placeholder={"Địa chỉ gmail"}
        value={gmail}
        onChange={(e) => setGmail(e.target.value)}
      />
      <Input
        id={"PhoneNumber"}
        placeholder={"Số điện thoại"}
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <DateTimePicker
        selectedDate={datetime}
        setSelectedDate={setSelectedDate}
      />
      <InputArea value={idea} onChange={(e) => setNote(e.target.value)} />
      <ButtonSolidConfirm onConfirm={handleConfirm} name={"Đặt lịch"} />
    </form>
  );
};

export default BookingForm;
