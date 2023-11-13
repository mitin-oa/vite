import React, { useRef, useState } from "react";
import {
  FileUploadContainer,
  FormField,
  DragDropText,
  UploadFileBtn,
  FilePreviewContainer,
  ImagePreview,
  PreviewContainer,
  PreviewList,
  FileMetaData,
  RemoveFileIcon,
  InputLabel,
} from "./FileUploadStyles";

import InputPages from "../InputPages";

const KILO_BYTES_PER_BYTE = 1000;
const DEFAULT_MAX_FILE_SIZE_IN_BYTES = 500000;

const convertNestedObjectToArray = (nestedObj: any) =>
  Object.keys(nestedObj).map((key) => nestedObj[key]);

const convertBytesToKB = (bytes: number) =>
  Math.round(bytes / KILO_BYTES_PER_BYTE);

const FileUpload = ({
  label,
  updateFilesCb,
  maxFileSizeInBytes = DEFAULT_MAX_FILE_SIZE_IN_BYTES,
  ...otherProps
}: any) => {
  const fileInputField: any = useRef(null);
  const [files, setFiles] = useState<any>({});

  const handleUploadBtnClick = () => {
    fileInputField.current.click();
  };

  const addNewFiles = (newFiles: any) => {
    for (let file of newFiles) {
      if (file.size < maxFileSizeInBytes) {
        if (!otherProps.multiple) {
          return { file };
        }
        files[file.name] = file;
      }
    }
    return { ...files };
  };

  const callUpdateFilesCb = (files: any) => {
    const filesAsArray = convertNestedObjectToArray(files);
    updateFilesCb(filesAsArray);
  };

  const handleNewFileUpload = (e: any) => {
    const { files: newFiles } = e.target;
    if (newFiles.length) {
      let updatedFiles = addNewFiles(newFiles);
      setFiles(updatedFiles);
      callUpdateFilesCb(updatedFiles);
      onFilesUpload();
    }
  };

  const removeFile = (fileName: any) => {
    delete files[fileName];
    setFiles({ ...files });
    callUpdateFilesCb({ ...files });
  };

  const [pages, setPages] = useState<any[]>([]);
  const onFilesUpload = () => {
    let pagesInit = Array(Object.keys(files).length).fill(null);
    setPages(pagesInit);
  };

  console.log(pages);
  console.log(Number(Object.keys(files).length));

  return (
    <>
      <FileUploadContainer>
        <InputLabel>{label}</InputLabel>
        <DragDropText>Drag and drop your files anywhere or</DragDropText>
        <UploadFileBtn type="button" onClick={handleUploadBtnClick}>
          <i className="fas fa-file-upload" />
          <span> Upload {otherProps.multiple ? "files" : "a file"}</span>
        </UploadFileBtn>
        <FormField
          type="file"
          ref={fileInputField}
          onChange={handleNewFileUpload}
          title=""
          value=""
          {...otherProps}
        />
      </FileUploadContainer>

      {Object.keys(files).length && (
        <table className="table">
          <thead>
            <tr>
              <th colSpan={5}>File details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>Number of pages</td>
              <td>Express service</td>
              <td>Estimated cost (in credits)</td>
              <td>Size</td>
            </tr>

            {Object.keys(files).map((file, index) => (
              <tr>
                <td>{file}</td>
                <td>{<InputPages pages={pages} setPages={setPages} />}</td>
                <td>
                  {
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        name="expressDelivery"
                        id="expressDelivery"
                      />
                    </div>
                  }
                </td>
                <td>{pages}</td>
                <td>{convertBytesToKB(files[file].size)} Kbytes</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default FileUpload;

{
  /*       <FilePreviewContainer>
        <span>To Upload</span>
        <PreviewList>
          {Object.keys(files).map((fileName, index) => {
            let file = files[fileName];
            let isImageFile = file.type.split("/")[0] === "image";
            return (
              <PreviewContainer key={fileName}>
                <div>
                  {isImageFile && (
                    <ImagePreview
                      src={URL.createObjectURL(file)}
                      alt={`file preview ${index}`}
                    />
                  )}
                  <FileMetaData isImageFile={isImageFile}>
                    <span>{file.name}</span>
                    <aside>
                      <span>{convertBytesToKB(file.size)} kb</span>
                      <RemoveFileIcon
                        className="fas fa-trash-alt"
                        onClick={() => removeFile(fileName)}
                      />
                    </aside>
                  </FileMetaData>
                </div>
              </PreviewContainer>
            );
          })}
        </PreviewList>
      </FilePreviewContainer> */
}
