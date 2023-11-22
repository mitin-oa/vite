import React, { useState } from "react";

import Button from "../Button";

import sentToServer from "../scripts/uploadHandler"; // * VK Backend: Connecting an external script

// TODO LIST VK:
// 1. implement cleaning/changing const files and fileData in case
// if the user has made changes to the composition of the downloaded files,
// otherwise irrelevant data will be sent to the server
// (Pеализовать очистку/изменение const files и fileData в случае,
// если пользователем были внесены изменения в состав загружаемых файлов,
// иначе на сервер попадут неактуальные данные)
// 2. Search "TODO 2" in file

const FileUploader = () => {
  // VK: The object will store all data about downloaded files
  // * VK: Объект будет хранить все данные о загружаемых файлах
  type FileData = {
    index: number;
    file: File;
    expressDelivery: boolean;
    pages: number;
  };

  const [files, setFiles] = useState<FileList | null>(null);
  const [fileData, setFileData] = useState<FileData[]>([]);

  // VK: Adds a value to the FileData fields
  // * VK: Добавляет значение в поля FileData
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFileList = e.target.files;
      setFiles(newFileList);

      // VK: Create file objects with unique indexes
      // * VK: Создаем объекты файлов с уникальными индексами
      const filesWithAdditionalData: FileData[] = Array.from(newFileList).map(
        (file, index) => ({
          index,
          file,
          expressDelivery: false,
          pages: 1,
        })
      );

      setFileData(filesWithAdditionalData);
    }
  };

  // VK: Update the value of the pages field (the number of pages in the downloaded file) in fileData
  // * VK: Обновление значения поля pages (количество страниц в загружаемом файле) в fileData
  const setNumberOfPages = (index: number, pages: number) => {
    console.log(index);
    console.log(pages);

    const updatedFileData = [...fileData];

    // VK: Find an object with the corresponding index and update the number of pages
    // * VK: Находим объект с соответствующим индексом и обновляем количество страниц
    updatedFileData[index] = {
      ...updatedFileData[index],
      pages: pages,
    };

    // VK: Update fileData state
    // * VK: Обновляем состояние fileData
    setFileData(updatedFileData);
  };

  // VK: Update the quantity of the expressDelivery field value in fileData
  // * VK: Обновление количества значения поля expressDelivery в fileData
  const setExpressDelivery = (index: number, expressDelivery: boolean) => {
    console.log(index);
    console.log(expressDelivery);

    const updatedFileData = [...fileData];

    // VK: Find an object with the corresponding index and update the expressDelivery value
    // * VK: Находим объект с соответствующим индексом и обновляем значение expressDelivery
    updatedFileData[index] = {
      ...updatedFileData[index],
      expressDelivery: expressDelivery,
    };

    // VK: Update fileData state
    // * VK: Обновляем состояние fileData
    setFileData(updatedFileData);
  };


  const handleUpload = async () => {
    if (files == null) {
      alert("No files selected!"); // TODO 2 VK: Improve the logic in case of an attempt to send a request without downloading files
      return;
    }
    /* VK: This data can be used for frontend layout
     * server returns JSON response { "message": "...", "pointsBalance": -97 }
     * if pointsBalance is negative - display a message about the need to purchase credits
     */
    const data = await sentToServer(fileData, totalCredits);
    console.log('Server processed the request successfully: ', data);
    if (data.pointsBalance < 0) {
      alert(`File has been sent for processing. Balance ${data.pointsBalance}. Need to top up your balance!`);
    } else {
      alert(`File has been sent for processing. Balance ${data.pointsBalance}.`);
    }
  };

  // ! Temporarily. For debugging
  const logContents = async () => {
  }
  // ! Temporarily. For debugging


  let totalPages = 0;
  let totalCredits = 0;

  fileData.map((file) => (totalPages += Number(file.pages)));
  fileData.map(
    (file) => (totalCredits += file.expressDelivery ? file.pages * 1.5 : file.pages)
  );

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
              multiple // Add the 'multiple' attribute to enable multiple file selection
              onChange={handleFileChange}
            />
            <span>Choose files</span>
          </label>
        </div>
      </div>

      <div className="table-scroll">
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
              <td>Express Delivery (+50%)</td>
              <td>Estimated cost (in credits)</td>
              <td>Size</td>
            </tr>

            {fileData.map((file, index) => (
              <tr key={file.index}>
                <td>
                  {file.file.name.length > 40
                    ? file.file.name.slice(0, 39) + "…"
                    : file.file.name}
                </td>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    name="numberOfPages"
                    min="1"
                    defaultValue={1}
                    data-file-index={file.index}
                    onChange={(e) =>
                      setNumberOfPages(index, Number(e.target.value))
                    }
                  />
                </td>
                <td>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name="expressDelivery"
                      id={`expressDelivery-${file.index}`}
                      data-file-index={file.index}
                      onChange={(e) =>
                        setExpressDelivery(index, e.target.checked)
                      }
                    />
                    <label
                      className="form-check-label"
                      htmlFor={`expressDelivery-${file.index}`}
                    ></label>
                  </div>
                </td>
                <td>
                  {file.expressDelivery ? file.pages * 1.5 : file.pages}{" "}
                </td>
                <td>{(file.file.size / 1024).toFixed(1)} Kbytes</td>
              </tr>
            ))}

            <tr>
              <td>Total</td>
              <td>{totalPages}</td>
              <td>{""}</td>
              <td>{totalCredits}</td>
              <td>{""}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <Button children="Proceed working with backend" color="warning" onClick={handleUpload} />
        {/* // ! Temporarily. For debugging */}
        {/* <button onClick={logContents}>Log Contents</button> */}
      </div>
    </>
  );
};

export default FileUploader;
