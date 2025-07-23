import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays, format, setHours, setMinutes } from "date-fns";
import Calander from "../svg/calander";

const Input = ({ id, value, placeholder, onChange }) => {
  return (
    <input
      className="w-full px-4 py-3 rounded-xl bg-transparent border-solid border-[1px]"
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

const DateTimePicker = ({ selectedDate, setSelectedDate }) => {
  // Giới hạn Thời gian tiệm hoạt động
  const minTime = setHours(setMinutes(new Date(), 0), 9);
  const maxTime = setHours(setMinutes(new Date(), 0), 22);

  // Giới hạn Đặt là từ ngày hiện tại đến 7 ngày sau
  const today = new Date();
  const maxDate = addDays(today, 7);

  return (
    <div>
      <div
        className="DatePicker-Container flex flex-row
       w-full px-4 py-3 rounded-xl bg-transparent
        border-solid border-[1px] items-center justify-between"
      >
        <DatePicker
          className="bg-transparent"
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          minDate={today}
          maxDate={maxDate}
          minTime={minTime}
          maxTime={maxTime}
          timeIntervals={120}
          showTimeSelect
          dateFormat="Pp"
          timeFormat="HH:mm"
          placeholderText="Hãy chọn ngày và giờ xăm"
        />
        <Calander />
      </div>
    </div>
  );
};

const InputArea = ({ value, onChange }) => {
  return (
    <textarea
      className="flex flex-row
  w-full px-4 py-3 rounded-xl bg-transparent
   border-solid border-[1px] items-center"
      rows={3}
      cols={30}
      maxLength={100}
      value={value}
      onChange={onChange}
      placeholder="Nêu ngắn gọn Ý tưởng và vị trí hình xăm (Nếu có)"
    ></textarea>
  );
};

export default Input;
export { DateTimePicker, InputArea };
