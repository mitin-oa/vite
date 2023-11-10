import React, { useState } from "react";
import Button from "../Button";

/* import sendToServer from "./scripts/uploadFile";  */ // ! Backend. Connecting an external script

const FileUploader = () => {
  // Объект будет хранить все данные о загружаемых файлах
  type FileData = {
    index: number;
    file: File;
    expressDelivery: boolean;
    pages: number;
  };

  const [files, setFiles] = useState<FileList | null>(null);
  const [fileData, setFileData] = useState<FileData[]>([]);

  // Добавляет значение в поля FileData
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFileList = e.target.files;
      setFiles(newFileList);

      // Создаем объекты файлов с уникальными индексами
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

  // Обновление значения поля pages (количество страниц в загружаемом файле) в fileData
  const setNumberOfPages = (index: number, pages: number) => {
    console.log(index);
    console.log(pages);

    const updatedFileData = [...fileData];

    // Находим объект с соответствующим индексом и обновляем количество страниц
    updatedFileData[index] = {
      ...updatedFileData[index],
      pages: pages,
    };

    // Обновляем состояние fileData
    setFileData(updatedFileData);
  };

  // Обновление количества значения поля expressDelivery в fileData
  const setExpressDelivery = (index: number, expressDelivery: boolean) => {
    console.log(index);
    console.log(expressDelivery);

    const updatedFileData = [...fileData];

    // Находим объект с соответствующим индексом и обновляем значение expressDelivery
    updatedFileData[index] = {
      ...updatedFileData[index],
      expressDelivery: expressDelivery,
    };

    // Обновляем состояние fileData
    setFileData(updatedFileData);
  };

  const handleUpload = async () => {
    // // We will fill this out later
    // // * Упаковка данных полей в один объект
    // const extras = ({
    //   expressDelivery: expressDelivery,
    //   addInformation: addInformation,
    // });
    // const successConfirmed = sendToServer(file, numberOfPages, extras);
  };

  // ! Временно. Для отладки
  const logContents = () => {
    console.log(fileData);
    //console.log(fileData[0].file);

    // console.log('File:', file);
    // console.log('Express Delivery:', expressDelivery);
    // console.log('Additional Information:', addInformation);
    // console.log('Number Of Pages:', numberOfPages);
  };
  // ! Временно. Для отладки
  console.log(logContents());
  let sum = 0;
  let sum1 = 0;
  fileData.map((file) => (sum += Number(file.pages)));
  fileData.map(
    (file) => (sum1 += file.expressDelivery ? file.pages * 1.5 : file.pages)
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

      <div>
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
                  {/* Replace with estimated cost calculation */}
                </td>
                <td>{(file.file.size / 1024).toFixed(1)} Kbytes</td>
              </tr>
            ))}
            <tr>
              <td>Total</td>
              <td>{sum}</td>
              <td>{""}</td>
              <td>{sum1}</td>
              <td>{""}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        {/* <Button children="Proceed" color="warning" onClick={handleUpload} /> */}
        {/* // ! Временно. Для отладки */}
        {/* <button onClick={logContents}>Log Contents</button> */}
      </div>
    </>
  );
};

export default FileUploader;
