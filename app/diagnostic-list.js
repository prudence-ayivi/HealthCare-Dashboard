import React from 'react'

const DiagnosticList = ({diagnostics}) => {

  return (
    <div className="absolute top-[740px] left-[350px] w-[590px] bg-white rounded-2xl opacity-100">
    <h3 className="m-4 text-[24px] leading-[33px] font-extrabold text-left">Diagnostic List</h3>
    <div className="mt-4 mx-4 h-[230px] overflow-y-scroll"> 
    <table> 
    <thead>
    <tr className="rounded-[24px] font-bold bg-[#F6F7F8]">
      <th className="text-left px-3 py-5">Problems/Diagnosis</th>
      <th className="text-left px-3 py-5">Description</th>
      <th className="text-left px-3 py-5">Status</th>
    </tr>      
    </thead>
    <tbody>
    {diagnostics.map((diagnostic, index) => (
      <React.Fragment key={index}>
      <tr className="hover:bg-background">
      <td className="px-4 py-2 h[50px]">{diagnostic.name}</td>
      <td className="px-4 py-2 h[50px]">{diagnostic.description}</td>
      <td className="px-4 py-2 h[50px]">{diagnostic.status}</td>
    </tr>
    </React.Fragment>
    ))}
    </tbody>
    
    </table>
    </div>
    </div>
  )
}

export default DiagnosticList;