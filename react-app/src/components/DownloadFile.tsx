import Button from "./Button";

// * VK: Significant for the backend area. Please exercise caution when making alterations
import { fetchWithRefreshAuth } from "../fetchScripts/fetchWithRefreshAuth";


function DownLoadFile({ fileName }: any) {
  const downloadFile = (fileName: string) => {
    let pathToFile = "/api/downloadOriginalFile/" + fileName;
    fetchWithRefreshAuth(pathToFile, {
      method: "GET",
      headers: {
        "Content-Type": "application/pdf",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Server returned an error response');
        }
        return response.blob();
      })
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));

        const link = document.createElement("a");
        link.href = url;
        link.download = fileName;

        document.body.appendChild(link);

        link.click();

        if (link.parentNode) {
          link.parentNode.removeChild(link);
        }
      });
  };

  return (
    <div>
      <Button
        children={"Download file"}
        color={"orange"}
        onClick={() => downloadFile(fileName)}
        style={"table-btn"}
      />
    </div>
  );
}

export default DownLoadFile;
