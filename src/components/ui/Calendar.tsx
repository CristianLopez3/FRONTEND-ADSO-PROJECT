"use client";
import { useState } from "react";
import { DatePicker } from "keep-react";

type CalendarProps = {
  styles?: string;
};

const Calendar = ({ styles}: CalendarProps) => {
  const [date, setDate] = useState(null);
  return (
    <DatePicker placeholder="Date / Month / Year" className={styles}>
      <DatePicker.SingleDate />
    </DatePicker>
  );
};

export default Calendar;
