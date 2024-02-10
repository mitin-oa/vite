import { useMediaQuery } from "react-responsive";
import { ChangeEvent, useState } from "react";

// * VK: Significant for the backend area. Please exercise caution when making alterations
import { fetchWithRefreshAuth } from "../fetchScripts/fetchWithRefreshAuth";

// Определение интерфейса для пропсов
// Defining the interface for props
interface UploadFilesProps {
  orderId: number;
  sourceFileName: string;
  isDisabled?: boolean;
}

export default function UploadFiles(props: UploadFilesProps) {
  const orderId = props.orderId;
  const sourceFileName = props.sourceFileName;
  const isMobileScreen = useMediaQuery({ query: "(max-width: 1160px" });
  const isPhoneScreen = useMediaQuery({ query: "(max-width: 760px" });
  const [numPages, setNumPages]: any = useState();
  const onPagesChange: any = (e: ChangeEvent<HTMLInputElement>) => {
    const numPages = !Number.isNaN(e.target.valueAsNumber)
      ? e.target.valueAsNumber
      : null;
    setNumPages(numPages);
  };

  // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log("orderId ", orderId);
  //   if (e.target.files && e.target.files.length > 0) {
  //     const file = e.target.files[0];
  //     console.log(file);
  //     uploadProcessedFile(file, orderId);
  //   }
  // };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log("orderId ", orderId);
    // console.log("sourceFileName ", sourceFileName);

    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      console.log(file);
  
      // Создаем новый объект File с новым именем файла
      const renamedFile = new File([file], sourceFileName, { type: file.type });
  
      uploadProcessedFile(renamedFile, orderId);
    }
  };

  async function uploadProcessedFile(file: any, orderId: any) {
    const formData = new FormData();
    
    formData.append('file', file);
    formData.append('orderId', orderId);

    try {
      const response = await fetchWithRefreshAuth('/api/uploadProcessedFile', {
        method: 'POST',
        body: formData,
        credentials: 'include'
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Success:', result);
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error sending request:', error);
    }
  }

  return (
    <>
      <div style={{ display: "flex" }}>
        <div
          className={`file-upload dashboard ${props.isDisabled ? 'disabled' : ''}`}
          style={{ width: "80px", height: "33px" }}
        >
          <label>
            <input
              type="file"
              name="fileToUpload"
              id="fileToUpload"
              accept=".doc, .docx, .rtf, .pdf, .odt, .txt"
              onChange={handleFileChange}
              disabled={props.isDisabled}
            />
            <span>Upload file</span>
          </label>
        </div>
      </div>
    </>
  );
}
