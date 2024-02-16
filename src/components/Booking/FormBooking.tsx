import { useState } from "react";
import InputField from "../ui/InputField";
const FormBooking = () => {
  const [people, setPeople] = useState<number>(0);

  const handleValue = () => {
    setPeople((prevValue) => (prevValue >= 0 ? prevValue++ : prevValue));
  };

  return (
    <div className="width-full mx-auto">
      <form className="space-y-2">
        <InputField id="name" name="name" placeholder="Write your name..." />
        <InputField
          id="cellphone"
          name="cellphone"
          placeholder="Write your cellphone..."
        />
        <div className="w-[100%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          <InputField
            id="time"
            name="time"
            placeholder="Enter your time..."
            type="time"
          />
          <InputField
            id="date"
            name="date"
            placeholder="Enter your Date..."
            type="date"
          />
          <div className="md:col-span-2 lg:col-span-1">
            <InputField
              id="people"
              name="people"
              placeholder="How many people?..."
              type="number"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormBooking;
