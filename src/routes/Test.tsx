import { InputCheck } from "@/components/Input";
import Toggle from "@/components/Toggle";
import { useState } from "react";

const Test: React.FC = () => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };



  return (
    <div className="bg-white text-black flex p-12 items-center justify-center">
      <Toggle variant="success" />
      <InputCheck
        checked={checked}
        onChange={handleCheckboxChange}
        variant="success"
      />
    </div>
  );
};

export default Test;
