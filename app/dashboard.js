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

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPatientData();
      console.log("Fetched Patient Data:", data); 
      setPatientData(data); 
    };

    fetchData();
  }, []);

  if (!patientData) {
    return <div>Loading...</div>;
  }

  return (
    <main className="flex flex-row items-center justify-between min-h-screen gap-8 text-font">
    <div>
    <PatientList patients={patientData}/> 
    </div>
    <div > 
    <Diagnosis diagnosis={patientData[0].diagnosis_history}/>
    <DiagnosticList diagnostics={patientData[0].diagnostic_list} />    
    </div>
    <div> 
    <PatientInfo patient={patientData[0]} />
    <LabResults results={patientData[0].lab_results}/>    
    </div>

    </main>
  )
}

export default Dashboard