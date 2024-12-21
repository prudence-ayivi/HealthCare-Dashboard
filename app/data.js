// const username = process.env.API_USERNAME;
// const password = process.env.API_PASSWORD;

// // Encoding the username and password in base64 
// // const auth = Buffer.from(`${username}:${password}`).toString('base64');

// const auth = btoa(`${username}:${password}`);

export const fetchPatientData = async () => {
  // console.log("Username:", process.env.API_USERNAME);
  // console.log("Password:", process.env.API_PASSWORD);
  // console.log("Authorization Header:", `Basic ${auth}`); // Vérifiez l'en-tête 

  const username = process.env.NEXT_PUBLIC_API_USERNAME;
  const password = process.env.NEXT_PUBLIC_API_PASSWORD;

  // Encodage en base64
  const auth = btoa(`${username}:${password}`);

  // console.log("Username:", username);
  // console.log("Password:", password);
  // console.log("Authorization Header:", `Basic ${auth}`); // Vérifiez l'en-tête 
  
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
