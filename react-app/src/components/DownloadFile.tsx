import Button from "./Button";

function DownLoadFile({ fileName }: any) {
  const downloadFile = (filePath: string, fileName: string) => {
    fetch(filePath, {
      method: "GET",
      headers: {
        "Content-Type": "application/pdf",
      },
    })
      .then((response) => response.blob())
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
        onClick={() => downloadFile("/api/downloadOriginalFile", fileName)}
        style={"table-btn"}
      />
    </div>
  );
}

export default DownLoadFile;
