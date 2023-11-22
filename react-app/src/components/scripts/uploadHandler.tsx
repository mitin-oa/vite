/**
 * Sends a request to the server to save downloaded files
 * @param {FileData} fileData - An object containing all data about downloaded files
 * @param {number} totalCredits - The amount of credit points required to complete the order
 * @returns {Promise<any>} - An object representing the data received from the
 *  server { "message": "...", "pointsBalance": ... }
 */

  const sentToServer = async (fileData: any, totalCredits: number): Promise<any> => {
  const formData = new FormData();

  formData.append(`filesCount`, fileData.length.toString());
  formData.append(`totalPointsCost`, totalCredits.toString());

  for (const file of fileData) {
      formData.append(`file_${file.index}`, file.file);
      formData.append(`expressDelivery_${file.index}`, file.expressDelivery.toString());
      formData.append(`pages_${file.index}`, file.pages.toString());
      formData.append(`pointsCost_${file.index}`, (file.expressDelivery ? file.pages * 1.5 : file.pages).toString());
  }

  try {
      const response = await fetch('/api/initiateFileProcessing', {
          method: 'POST',
          body: formData,
      });

      if (response.ok) {
          const data = await response.json();
          return data;
      } else {
          console.error('There was an error sending a request to the server.');
          return null; // ! VK: Or throw an error, depending on the error handling logic
      }
  } catch (error) {
      console.error('An error occurred while executing the request:', error);
      return null; // ! VK: Or throw an error, depending on the error handling logic
  }
};

export default sentToServer;