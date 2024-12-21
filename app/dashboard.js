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
    <main className="w-full mx-2 mt-4 flex flex-row items-center justify-center gap-6 absolute top-[85px] text-font opacity-100 dashboard">
    <div className="w-[23%]">
    <PatientList patients={patientData} patientSelect={setSelectedPatient}/> 
    </div>
    <div className="w-[48%] 2xl:w-[41%]"> 
    {selectedPatient && (
      <>
    <Diagnosis diagnosis={selectedPatient.diagnosis_history}/>
    <DiagnosticList diagnostics={selectedPatient.diagnostic_list} />    
      </>
      )}
    </div>
    <div className="w-[23%]"> 
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