import Button from "./Button";

// * VK: Significant for the backend area. Please exercise caution when making alterations
import { fetchWithRefreshAuth } from "../fetchScripts/fetchWithRefreshAuth";


function DownLoadFile({ orderId }: any) {
  const downloadFile = (orderId: string) => {
    let pathToFile = "/api/downloadOriginalFile/" + orderId;
    fetchWithRefreshAuth(pathToFile, {
      method: 'GET',
      headers: {
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Server returned an error response');
        }
        return response.blob();
      })
      .then(blob => {
        // Создаем URL для скачивания файла
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        // Указываем имя файла для скачивания
        a.download = orderId + '.zip';
        document.body.appendChild(a);
        a.click();
        // Очищаем ссылку
        window.URL.revokeObjectURL(url);
      })
      .catch(error => {
        console.error('Ошибка при скачивании файла:', error);
      });

  };

  return (
    <div>
      <Button
        children={"Download files"}
        color={"orange"}
        onClick={() => downloadFile(orderId)}
        style={"table-btn"}
      />
    </div>
  );
}

export default DownLoadFile;
