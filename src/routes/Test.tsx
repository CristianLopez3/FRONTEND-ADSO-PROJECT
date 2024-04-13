import { InputCheck } from "@/components/Input";
import Toggle from "@/components/Toggle";
import { useState } from "react";
import Cookies from "universal-cookie";

const Test: React.FC = () => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const cookie =new Cookies();

  const someFunction = () => {
    cookie.set("test", "test");
  }

  const  console1 = () => {
    console.log(cookie.get("test"));
    
  }

  return (
    <div className="bg-white text-black flex p-12 items-center justify-center">
      <button onClick={someFunction} className="bg-red-500 p-4"> Set Cookie </button>
      <button onClick={console1} className="bg-red-500 p-4"> Console </button>
    </div>
  );
};

export default Test;
