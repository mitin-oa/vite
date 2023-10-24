import React, { useState } from "react";
import Button from "./Button";
import InputFiles from "./InputFile";

const FileUploader = () => {
  const [file, setFile] = useState<File | null>(null);

  const [files, setFiles] = useState<any[]>([]);

  /* const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  }; */

  const handleUpload = async () => {
    // We will fill this out later
  };

  return (
    <>
      <div className="col-12">
        {/* <div className="file-upload">
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
        </div> */}
        <InputFiles files={files} setFiles={setFiles} />
        <div>
          {files && (
            <table className="table">
              <thead>
                <tr>
                  <th colSpan={2}>File details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Name</td>
                  {/* <td>Type</td> */}
                  <td>Size</td>
                </tr>

                {files.map((file) => (
                  <tr>
                    <td>{file.originalFile.originalFileName}</td>
                    {/* <td>{file.type}</td> */}
                    <td>{(file.originalFile.size / 1024).toFixed(1)} Kbytes</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {files && (
        <div>
          <Button children="Proceed" color="warning" onClick={handleUpload} />
        </div>
      )}
    </>
  );
};

export default FileUploader;
