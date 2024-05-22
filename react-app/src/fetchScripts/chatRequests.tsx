/**
 * VK sendMessage Function
 * 
 * The sendMessage function is an asynchronous function that sends a chat message to the server. 
 * 
 * @param {string} message - The chat message to be sent.
 * @returns {Promise<Object>} - The server's response as a JSON object.
 */
export const sendMessage = async (message: string) => {
  const response = await fetch(`/api/chat`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message }),
  });

  if (!response.ok) {
    throw new Error('Failed to send message');
  }

  return response.json();
};