import React, { ChangeEvent, useState } from 'react';

const Test: React.FC = () => {
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

    // Save the file to the 'assets/menus' folder
    // This will depend on your environment and setup
    // Here is a placeholder for the logic
    console.log(`Saving file ${selectedFile.name} to assets/menus`);
  };

  return (
    <>
      <div className="min-h-screen bg-white text-black flex items-center flex-col justify-center">
        <h1>Managment files with firebase</h1>
        <form onSubmit={handleSubmit}>
          <input type="file" onChange={handleFileChange} />
          {previewUrl && <img src={previewUrl} alt="Preview" />}
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Test;