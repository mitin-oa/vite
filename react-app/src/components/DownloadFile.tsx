function DownLoadFile({ fileName }: any) {
  const downloadFile = (filePath: string, fileName: string) => {
    fetch("https://sassagreementftd.com.ghanastudyfair.com/" + filePath, {
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
      <button
        onClick={() => downloadFile("/api/downloadOriginalFile", fileName)}
      >
        Download file
      </button>
    </div>
  );
}

export default DownLoadFile;
