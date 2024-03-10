import React, { ChangeEvent } from "react";
import { uploadFile } from "@/utils/firebase/config";

const TestUse: React.FC = () => {
  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      try {
        const result = await uploadFile(e.target.files[0]);
        console.log(result);
      } catch (error) {
        console.error("Error uploading file: ", error);
      }
    } else {
      console.log("No file selected");
    }
  };

  return (
    <>
      <div className="min-h-screen bg-white text-black flex items-center flex-col justify-center">
        <h1>Managment files with firebase</h1>
        <input type="file" onChange={handleFileChange} />
      </div>
    </>
  );
};

export default TestUse;
