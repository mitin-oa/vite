import React, { useContext, useState } from "react";
import Button from "../Button";
import sendToServer from "../scripts/uploadHandler"; // * VK Backend: Connecting an external script
import { SignedInContext, SignedUpContext } from "../../App";
import ModalWindow from "../modal/modal";
import LogInForm from "../modal/LogInForm";
import SignInForm from "../modal/SignUpForm";
import Alert from "../Alert";

// TODO LIST VK:
// 1. Search "TODO 1" in file
// 2. Search "TODO 2" in file

const FileUploader = ({
  setIsOpen,
  handleSignIn,
  handleSignUp,
  modalIsOpen,
}: any) => {
  // VK: The object will store all data about downloaded files
  // * VK: Объект будет хранить все данные о загружаемых файлах
  type FileData = {
    index: number;
    file: File;
    expressDelivery: boolean;
    pages: number;
    costInPoints: number;
  };
  const signedIn = useContext(SignedInContext);
  const signedUp = useContext(SignedUpContext);
  const [filesUploaded, setFilesUploaded] = useState(false);
  const [fileUploadMessage, setFileUploadMessage] = useState("");
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  /* const [files, setFiles] = useState<FileList | null>(null); */
  const [fileData, setFileData] = useState<FileData[]>([]);

  // VK: Adds a value to the FileData fields
  // * VK: Добавляет значение в поля FileData
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFileList = e.target.files;
      /* setFiles(newFileList);
       */
      // VK: Create file objects with unique indexes
      // * VK: Создаем объекты файлов с уникальными индексами
      const filesWithAdditionalData: FileData[] = Array.from(newFileList).map(
        (file, index) => ({
          index,
          file,
          expressDelivery: false,
          pages: 1,
          costInPoints: 20,
        })
      );

      setFileData(filesWithAdditionalData);
    }
  };

  // VK: Update the value of the pages field (the number of pages in the downloaded file) in fileData
  // * VK: Обновление значения поля pages (количество страниц в загружаемом файле) в fileData
  const setNumberOfPages = (index: number, pages: number) => {
    const updatedFileData = [...fileData];

    // VK: Find an object with the corresponding index and update the number of pages
    // * VK: Находим объект с соответствующим индексом и обновляем количество страниц
    updatedFileData[index] = {
      ...updatedFileData[index],
      pages: pages,
      costInPoints: updatedFileData[index].expressDelivery
        ? pages * creditsPerPage * 1.5
        : pages * creditsPerPage,
    };

    // VK: Update fileData state
    // * VK: Обновляем состояние fileData
    setFileData(updatedFileData);
  };

  // VK: Update the quantity of the expressDelivery field value in fileData
  // * VK: Обновление количества значения поля expressDelivery в fileData
  const setExpressDelivery = (index: number, expressDelivery: boolean) => {
    const updatedFileData = [...fileData];

    // VK: Find an object with the corresponding index and update the expressDelivery value
    // * VK: Находим объект с соответствующим индексом и обновляем значение expressDelivery
    updatedFileData[index] = {
      ...updatedFileData[index],
      expressDelivery: expressDelivery,
      costInPoints: expressDelivery
        ? updatedFileData[index].pages * creditsPerPage * 1.5
        : updatedFileData[index].pages * creditsPerPage,
    };
    // VK: Update fileData state
    // * VK: Обновляем состояние fileData
    setFileData(updatedFileData);
  };

  const handleUpload = async () => {
    if (fileData.length < 1) {
      alert("No files selected!"); // TODO 2 VK: Improve the logic in case of an attempt to send a request without downloading files
      return;
    }
    /* VK: This data can be used for frontend layout
     * server returns JSON response { "message": "...", "pointsBalance": -97 }
     * if pointsBalance is negative - display a message about the need to purchase credits
     */
    const data = await sendToServer(fileData, totalCredits);
    console.log("Server processed the request successfully: ", data);
    // TODO 1 VK: Improve the logic in case insufficient of balance and confirmation in case of sufficient balance
    // * TODO 1 ВК: Внедрить логику при недостаточном балансе и подтверждение при достаточном балансе
    if (data.status == 200) {
      setFileUploadMessage(
        data.needTopUpBalance
          ? "File has been sent for processing. Need to top up your balance!"
          : "File has been sent for processing."
      );
    } else if (data.status != 401) {
      setFileUploadMessage("");
      alert("Unknown error");
    }
    setFilesUploaded(!filesUploaded);
  };

  /* VK: This data can be used for frontend layout
   * server returns JSON response { "message": "...", "pointsBalance": -97 }
   * if pointsBalance is negative - display a message about the need to purchase credits
   */

  // ! Temporarily. For debugging
  const logContents = async () => {
    console.log("!!!!!");
    console.log(fileData);
  };
  // ! Temporarily. For debugging

  let totalPages = 0;
  let totalCredits = 0;
  const creditsPerPage = 20;

  fileData.map((file) => (totalPages += Number(file.pages)));
  fileData.map(
    (file) =>
      (totalCredits += file.expressDelivery
        ? file.pages * creditsPerPage * 1.5
        : file.pages * creditsPerPage)
  );

  return (
    <>
      {!filesUploaded ? (
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
                        min="0"
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
                          checked={file.expressDelivery}
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
                      {file.expressDelivery
                        ? file.pages * creditsPerPage * 1.5
                        : file.pages * creditsPerPage}{" "}
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
            {fileData.length > 0 ? (
              <Button
                children="Proceed to upload"
                color={""}
                onClick={handleUpload}
              />
            ) : (
              <></>
            )}{" "}
            {/* <button onClick={logContents}>Log Contents</button> */}
          </div>
        </>
      ) : (
        <Alert
          children={fileUploadMessage}
          onClose={() => {
            setFilesUploaded(!filesUploaded);
            setFileData([]);
          }}
        />
      )}
    </>
  );
};

export default FileUploader;
