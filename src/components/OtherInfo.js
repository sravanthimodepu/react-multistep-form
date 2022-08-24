import React from "react";

function OtherInfo({formData, setFormData}) {
  return (
    <div className="other-info-container">
    <input type="text" placeholder="Guardian Name" 
        value={formData.guardianName} 
        onChange={(event)=> setFormData({...formData, guardianName: event.target.value })}
    />
    <input type="text" placeholder="Guardian PAN" 
        value={formData.guardianPAN} 
        onChange={(event)=> setFormData({...formData, guardianPAN: event.target.value })}
    />
    <input type="text" placeholder="Minor DOB" 
        value={formData.minorDOB} 
        onChange={(event)=> setFormData({...formData, minorDOB: event.target.value })}
    />
    <input type="text" placeholder="DOB Proof" 
        value={formData.dobProof} 
        onChange={(event)=> setFormData({...formData, dobProof: event.target.value })}
    />
    <input type="text" placeholder="Guardian Relationship" 
        value={formData.guardianRelation} 
        onChange={(event)=> setFormData({...formData, guardianRelation: event.target.value })}
    />
  </div>
  )
}

export default OtherInfo;