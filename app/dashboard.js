"use client"

import { useState, useEffect } from "react";
import { fetchPatientData } from "./data";
import PatientList from "./patient-list";
import Diagnosis from "./diagnosis";
import PatientInfo from "./patient-info";
import DiagnosticList from "./diagnostic-list";
import LabResults from "./lab-results";

const Dashboard = () => {

  const [patientData, setPatientData] = useState(null);
  const [selectedPatient, setSelectedPatient] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPatientData();
      console.log("Fetched Patient Data:", data); 
      setPatientData(data); 
      setSelectedPatient(data[0]); 

    };

    fetchData();
  }, []);

  if (!patientData) {
    return <div>Loading...</div>;
  }

  return (
    <main className="flex flex-row items-center justify-between min-h-screen gap-8 text-font">
    <div>
    <PatientList patients={patientData} patientSelect={setSelectedPatient}/> 
    </div>
    <div> 
    {selectedPatient && (
      <>
    <Diagnosis diagnosis={selectedPatient.diagnosis_history}/>
    <DiagnosticList diagnostics={selectedPatient.diagnostic_list} />    
      </>
      )}
    </div>
    <div> 
    {selectedPatient && (
      <>
    <PatientInfo patient={selectedPatient} />
    <LabResults results={selectedPatient.lab_results}/> 
      </>
      )}   
    </div>

    </main>
  )
}

export default Dashboard