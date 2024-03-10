import React, { ChangeEvent, useState } from "react";
import axios from "axios";

const ImageUpload: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setSelectedFile(file);

      // Create a preview URL
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedFile) {
      console.log("No file selected");
      return;
    }

    // Prepare FormData
    const formData = new FormData();
    formData.append("image", selectedFile);

    // Send the request
    axios
      .post("http://localhost:9000/file/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="min-h-screen bg-white text-black flex items-center flex-col justify-center">
        <h1>Upload Image</h1>
        <form onSubmit={handleSubmit}>
          <input type="file" onChange={handleFileChange} />
          {previewUrl && <img src={previewUrl} alt="Preview" />}
          <button className="btn bg-gray-300" type="submit">
            Submit
          </button>
          <div className="p-8 border bg-red-800 ">

          <img
            src="http://localhost:9000/file/72bc3143-b3d7-409c-b0fb-15b6fe3f4d64.png"
            alt="image"
          />
          </div>
        </form>
      </div>
    </>
  );
};

export default ImageUpload;
