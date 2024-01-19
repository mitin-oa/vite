import { useMediaQuery } from "react-responsive";
import { ChangeEvent, useState } from "react";

// Определение интерфейса для пропсов
// Defining the interface for props
interface UploadFilesProps {
  orderId: number;
}

export default function UploadFiles(props: UploadFilesProps) {
  const orderId = props;
  const isMobileScreen = useMediaQuery({ query: "(max-width: 1160px" });
  const isPhoneScreen = useMediaQuery({ query: "(max-width: 760px" });
  const [numPages, setNumPages]: any = useState();
  const onPagesChange: any = (e: ChangeEvent<HTMLInputElement>) => {
    const numPages = !Number.isNaN(e.target.valueAsNumber)
      ? e.target.valueAsNumber
      : null;
    setNumPages(numPages);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("orderId ", orderId);
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      console.log(file);
      uploadProcessedFile(file, orderId);
    }
  };

  async function uploadProcessedFile(file: any, orderId: any) {
    const orderIdToSend = orderId.orderId
    const formData = new FormData();

    formData.append('file', file);
    formData.append('orderId', orderIdToSend);

    try {
      const response = await fetch('/api/uploadModifiedFiles', {
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
        <div className="file-upload" style={{ width: "100px" }}>
          <label>
            <input
              type="file"
              name="fileToUpload"
              id="fileToUpload"
              accept=".doc, .docx, .rtf, .pdf, .odt, .txt"
              onChange={handleFileChange}
            />
            <span>Upload files</span>
          </label>
        </div>
      </div>
    </>
  );
}
