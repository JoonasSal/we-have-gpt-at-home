/**
 * Sends a prompt to the AI API and returns the response
 * @param {string} apiUrl - The API endpoint URL
 * @param {string} prompt - The user's input prompt
 * @returns {Promise<string>} The AI's response
 * @throws {Error} If the API request fails
 */
export const sendPrompt = async (apiUrl, prompt) => {
  // Make POST request to API
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({ prompt }),
  });
  
  // Parse response
  const data = await response.json();
  
  // Check for API errors
  if (!data.success) {
    throw new Error(data.error || 'Failed to get response');
  }
  
  return data.response;
}; 