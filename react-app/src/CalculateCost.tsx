import { useMediaQuery } from "react-responsive";
import { Footer } from "./components/footer/footer";
import NumInput from "./components/InputNumber";
import { ChangeEvent, useState } from "react";
import HeaderMenu from "./components/header/header";
import Button from "./components/Button";

export default function CalculateCost({
  handleSignIn,
  handleSignUp,
  modalIsOpen,
  setIsOpen,
  onSignIn,
  setUserProfileData,
}: any) {
  const isMobileScreen = useMediaQuery({ query: "(max-width: 1160px" });
  const isPhoneScreen = useMediaQuery({ query: "(max-width: 760px" });
  const [numPages, setNumPages]: any = useState();
  const onPagesChange: any = (e: ChangeEvent<HTMLInputElement>) => {
    const numPages = !Number.isNaN(e.target.valueAsNumber)
      ? e.target.valueAsNumber
      : null;
    setNumPages(numPages);
  };
  const [calculateCost, setCalculateCost] = useState(false);
  const [expressDelivery, setExpressDelivery] = useState(false);
  const [addInformation, setAddInformation] = useState("Add information");
  const [inputName, setInputName] = useState("John Boil");
  const [inputEmail, setInputEmail] = useState(
    "sb-yhbsi27086563@personal.example.com"
  );
  const [inputPhone, setInputPhone] = useState("+343 12345678");

  const [calculateCostInf, setCalcCostInf] = useState({
    name: "",
    email: "",
    phone: "",
    numberOfPages: "",
    express: false,
    notes: "",
  });

  function handleCalculation() {
    setCalculateCost(!calculateCost);
  }
  function handleOrder() {
    setCalcCostInf({
      name: inputName,
      email: inputEmail,
      phone: inputPhone,
      numberOfPages: numPages,
      express: expressDelivery,
      notes: addInformation,
    });
    // add logic...
  }

  console.log(calculateCostInf);

  type FileData = {
    index: number;
    file: File;
    expressDelivery: boolean;
    pages: number;
    costInPoints: number;
  };
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
  return (
    <>
      <div className="app">
        <HeaderMenu
          kind="short"
          handleSignIn={handleSignIn}
          handleSignUp={handleSignUp}
          setUserProfileData={setUserProfileData}
          modalIsOpen={modalIsOpen}
          setIsOpen={setIsOpen}
          onSignIn={onSignIn}
        />
        <section
          className="main-content container"
          style={{ flexDirection: "column" }}
        >
          <h2>Calculate cost</h2>
          <p>
            The length of agreement determines number of credits to be used (20$
            per page). Delivery within 23-72 hours is +50% to total amount.
          </p>

          <div className="container mt-5 form-container">
            <div className="row">
              {/* <!-- Левая колонка с текстом --> */}
              <div className="col-md-6" id="leftColumn">
                <form id="orderForm">
                  {/*  <!-- <form id="orderForm"> --> */}
                  <div className="frame-container">
                    <div className="form-group mb-3">
                      <label htmlFor="numberOfPages">
                        1. Select the number of pages in your document
                      </label>
                      <NumInput num={numPages} onChange={onPagesChange} />
                    </div>
                    {/* <!-- Форма загрузки --> */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div className="form-group" style={{ width: "50%" }}>
                        <label>2. Optional Extras</label>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            name="expressDelivery"
                            id="expressDelivery"
                            onChange={(e) =>
                              setExpressDelivery(e.target.checked)
                            }
                          />
                          <label
                            className="form-check-label"
                            htmlFor="expressDelivery"
                          >
                            Express Delivery (+50%)
                          </label>
                        </div>
                      </div>
                      <div
                        style={{
                          margin: "0 auto",
                          padding: "15px 0",
                        }}
                      >
                        <Button
                          children="Calculate Cost"
                          color="orange"
                          onClick={handleCalculation}
                        />
                      </div>
                    </div>
                    {calculateCost && (
                      <table className="table">
                        <tbody>
                          <tr>
                            <td style={{ textAlign: "center" }}>
                              Estimated cost in credits
                            </td>
                            <td>Estimated cost in $</td>
                          </tr>
                          <tr>
                            <td style={{ width: "50%", textAlign: "center" }}>
                              {numPages
                                ? expressDelivery
                                  ? numPages * 1.5 * 20
                                  : numPages * 20
                                : 0}
                            </td>
                            <td style={{ width: "50%" }}>
                              {numPages
                                ? expressDelivery
                                  ? numPages * 1.5 * 20
                                  : numPages * 20
                                : 0}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    )}
                  </div>
                  <div className="frame-container">
                    <div className="form-group mb-3">
                      <div style={{ display: "flex" }}>
                        <label
                          htmlFor="addInformation"
                          style={{ margin: "5px 0px 0 0", width: "50%" }}
                        >
                          3. Please, upload files
                        </label>
                        <div style={{ margin: "0 auto", padding: "10px 0" }}>
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
                              <span>Upload files</span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    {fileData.length > 0 ? (
                      <div className="table-scroll">
                        <table className="table">
                          <thead>
                            <tr>
                              <th colSpan={5}>File name</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr></tr>
                            {fileData.map((file, index) => (
                              <tr key={index}>
                                <td>
                                  {file.file.name.length > 40
                                    ? file.file.name.slice(0, 39) + "…"
                                    : file.file.name}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <></>
                    )}

                    <div className="form-group mb-3">
                      <label htmlFor="addInformation">
                        4. Is there any information that you would like to bring
                        to our attention about your contract? (Optional)
                      </label>
                      <textarea
                        className="form-control"
                        name="addInformation"
                        id="addInformation"
                        rows={4}
                        placeholder="Enter text"
                        value={addInformation}
                        onChange={(e) => setAddInformation(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                </form>
              </div>

              {/* <!-- Правая колонка с элементами формы --> */}
              <div className="col-md-6" id="rightColumn">
                <form id="orderForm">
                  <div className="frame-container">
                    <div className="form-group mb-3">
                      <label>3. Contact Information</label>
                    </div>

                    <div className="form-group mb-3">
                      <label htmlFor="email">Email*</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        value={inputEmail}
                        required={true}
                        onChange={(e) => setInputEmail(e.target.value)}
                      />
                    </div>

                    <div className="form-group mb-3">
                      <label htmlFor="phoneNumber">Phone number</label>
                      <input
                        type="text"
                        className="form-control"
                        name="phoneNumber"
                        id="phoneNumber"
                        value={inputPhone}
                        required
                        onChange={(e) => setInputPhone(e.target.value)}
                      />
                    </div>

                    <div className="form-group mb-3">
                      <label htmlFor="contactPersonName">
                        Contact person name*
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="contactPersonName"
                        id="contactPersonName"
                        value={inputName}
                        required={true}
                        onChange={(e) => setInputName(e.target.value)}
                      />
                    </div>
                    <div
                      className="form-group mb-3"
                      style={{ margin: "0 auto" }}
                    >
                      <Button
                        children="Proceed to order"
                        color="orange"
                        onClick={handleOrder}
                        style="modal-btn"
                      />
                    </div>
                  </div>
                </form>

                {/* <!-- PayPal кнопка (placeholder) --> */}
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer kind={"short"} />
    </>
  );
}
