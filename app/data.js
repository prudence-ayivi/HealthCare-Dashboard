export const fetchPatientData = async () => {
  
  try {
    const response = await fetch('/api/fetchPatients');

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
