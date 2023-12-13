/**
 * Sends a request to the server to save downloaded files
 * @param {FileData} fileData - An object containing all data about downloaded files
 * @param {number} totalCredits - The amount of credit points required to complete the order
 * @returns {Promise<any>} - An object representing the data received from the
 *  server { "message": "...", "pointsBalance": ... }
 */

const sendToServer = async (fileData: any, totalCredits: number): Promise<any> => {
    const formData = new FormData();

    //   console.log(fileData);

    formData.append(`filesCount`, fileData.length.toString());
    formData.append(`totalPointsCost`, totalCredits.toString());

    for (const file of fileData) {
        formData.append(`file_${file.index}`, file.file);
        formData.append(`expressDelivery_${file.index}`, file.expressDelivery.toString());
        formData.append(`pages_${file.index}`, file.pages.toString());
        formData.append(`pointsCost_${file.index}`, file.costInPoints.toString());
    }

    return new Promise((resolve, reject) => {
        fetch('/api/initiateFileProcessing', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                resolve(data);
            })
            .catch(error => {
                console.error('Error:', error);
                reject(error);
            });
    });
};

export default sendToServer;