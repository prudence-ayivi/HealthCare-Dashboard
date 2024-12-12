//const API_URL = "https://fedskillstest.coalitiontechnologies.workers.dev";

export const fetchPatientData = async () => {
  try {
    const response = await fetch('https://fedskillstest.coalitiontechnologies.workers.dev', {
      method: "GET",
      headers: {
        "Authorization": "Basic " + btoa("coalition:skills-test"), 
        "Content-Type": "application/json",
      },
    });

    const patientData = await response.json();
    return patientData; 
  } catch (error) {
    console.error("Error fetching patient data:", error);
    throw new Error("Failed to fetch data");
  }
};
