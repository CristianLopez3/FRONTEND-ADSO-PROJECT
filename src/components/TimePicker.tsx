"use client";
import { useState } from "react";
import { DatePicker } from "keep-react";

type TimePickerProps = {
  styles?: string;
}

const TimePicker = ({styles}: TimePickerProps) => {
  const [time, setTime] = useState<string | Date | null | undefined>(null);
  return (
    <DatePicker time={setTime} placeholder={time?.toString()} className={styles}>
      <DatePicker.Time />
    </DatePicker>
  );
}

export default TimePicker;