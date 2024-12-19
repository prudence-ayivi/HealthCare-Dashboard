const username = process.env.API_USERNAME;
const password = process.env.API_PASSWORD;

// Encoding the username and password in base64 
const auth = btoa(`${username}:${password}`);

export const fetchPatientData = async () => {
  try {
    const response = await fetch('https://fedskillstest.coalitiontechnologies.workers.dev', {
      method: "GET",
      headers: {
        "Authorization": `Basic ${auth}`, 
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const patientData = await response.json();
    return patientData; 
  } catch (error) {
    console.error("Error fetching patient data:", error);
    throw new Error("Failed to fetch data");
  }
};
