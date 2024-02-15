/**
 * Sends a request to the server to save downloaded files
 * @param {FileData} fileData - An object containing all data about downloaded files
 * @param {number} totalCredits - The amount of credit points required to complete the order
 * @returns {Promise<any>} - An object representing the data received from the
 *  server { "message": "...", "pointsBalance": ... }
 */

import { fetchWithRefreshAuth } from "./fetchWithRefreshAuth";


const sendToServer = async (
  fileData: any,
  totalCredits: number
): Promise<any> => {
  const formData = new FormData();

  formData.append(`filesCount`, fileData.length.toString());
  formData.append(`totalPointsCost`, totalCredits.toString());

  for (const file of fileData) {
    formData.append(`file_${file.index}`, file.file);
    formData.append(
      `expressDelivery_${file.index}`,
      file.expressDelivery.toString()
    );
    formData.append(`pages_${file.index}`, file.pages.toString());
    formData.append(`pointsCost_${file.index}`, file.costInPoints.toString());
  }

  return new Promise((resolve, reject) => {
    fetchWithRefreshAuth("/api/initiateFileProcessing", {
      method: "POST",
      body: formData,
    })
    .then(response => {
      const status = response.status;
      return response.json().then(data => {
        // Сразу вызываем resolve, чтобы вернуть данные вызывающему коду
        resolve({
          status,
          message: data // предполагаем, что сервер возвращает сообщение в JSON
        });
      });
    })
    .catch(error => {
      console.error("Произошла ошибка:", error);
      // Вызываем reject для передачи ошибки вызывающему коду
      reject(error);
    });
  });
};

export default sendToServer;
