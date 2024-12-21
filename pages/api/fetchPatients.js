export default async function handler(req, res) {
    const username = process.env.API_USERNAME;
    const password = process.env.API_PASSWORD;
  
    // Encoding the username and password in base64 
    const auth = Buffer.from(`${username}:${password}`).toString('base64');
  
    try {
      const response = await fetch('https://fedskillstest.coalitiontechnologies.workers.dev', {
        method: "GET",
        headers: {
          "Authorization": `Basic ${auth}`, 
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        return res.status(response.status).json({ error: `HTTP error! status: ${response.status}` });
      }
  
      const patientData = await response.json();
      res.status(200).json(patientData);
    } catch (error) {
      console.error("Error fetching patient data:", error);
      res.status(500).json({ error: "Failed to fetch data" });
    }
  }
  