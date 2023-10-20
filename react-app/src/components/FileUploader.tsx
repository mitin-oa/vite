import React, { useState } from "react";
import Button from "./Button";

const FileUploader = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    // We will fill this out later
  };

  return (
    <>
      <div className="col-12">
        <div className="file-upload">
          <label>
            <input
              type="file"
              name="fileToUpload"
              id="fileToUpload"
              accept=".doc, .docx, .rtf, .pdf, .odt, .txt"
              onChange={handleFileChange}
            />
            <span>Choose file</span>
          </label>
        </div>
        {file && (
          <table className="table">
            <thead>
              <tr>
                <th colSpan={3}>File details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Name</td>
                <td>Type</td>
                <td>Size</td>
              </tr>
              <tr>
                <td>{file.name}</td>
                <td>{file.type}</td>
                <td>{(file.size / 1024).toFixed(1)} Kbytes</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>

      {file && (
        <div>
          <Button
            children="Upload file"
            color="warning"
            onClick={handleUpload}
          />
        </div>
      )}
    </>
  );
};

export default FileUploader;
