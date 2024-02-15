import { useState } from "react";
import InputField from "../../../../components/ui/InputField";
const FormBooking = () => {
  const [people, setPeople] = useState<number>(0);

  const handleValue = () => {
    setPeople((prevValue) => prevValue >= 0 ? prevValue++ : prevValue );
  }

  return (
    <div className="width-full mx-auto">
      <form className="space-y-2">
        <InputField id="name" name="name" placeholder="Write your name..." />
        <InputField id="cellphone" name="cellphone" placeholder="Write your cellphone..." />
        <InputField id="time" name="time" placeholder="Enter your time..." type="time" />
        <InputField id="date" name="date" placeholder="Enter your Date..." type="date" />
        <InputField id="people" name="people" placeholder="How many people?..." type="number" />

      </form>
    </div>
  );
};

export default FormBooking;
