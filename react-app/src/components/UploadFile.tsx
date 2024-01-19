import { useMediaQuery } from "react-responsive";
import { ChangeEvent, useState } from "react";

export default function UploadFiles() {
  const isMobileScreen = useMediaQuery({ query: "(max-width: 1160px" });
  const isPhoneScreen = useMediaQuery({ query: "(max-width: 760px" });
  const [numPages, setNumPages]: any = useState();
  const onPagesChange: any = (e: ChangeEvent<HTMLInputElement>) => {
    const numPages = !Number.isNaN(e.target.valueAsNumber)
      ? e.target.valueAsNumber
      : null;
    setNumPages(numPages);
  };

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
      <div style={{ display: "flex" }}>
        <div
          className="file-upload dashboard"
          style={{ width: "80px", height: "33px" }}
        >
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
    </>
  );
}
