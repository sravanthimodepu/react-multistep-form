import React from "react";

function PersonalInfo({formData, setFormData}) {
  return (
    <div className="personal-info-container">
        <input type="text" placeholder="Salutation"
             value={formData.salutation} 
             onChange={(event)=> setFormData({...formData, salutation: event.target.value })}
        />
        <input type="text" placeholder="First Name"
             value={formData.firstName} 
             onChange={(event)=> setFormData({...formData, firstName: event.target.value })}
        />
        <input type="text" placeholder="Middle Name"
             value={formData.middleName} 
             onChange={(event)=> setFormData({...formData, middleName: event.target.value })}
        />
        <input type="text" placeholder="Last Name"
             value={formData.lastName} 
             onChange={(event)=> setFormData({...formData, lastName: event.target.value })}
        />
        <input type="text" placeholder="Gender"
             value={formData.gender} 
             onChange={(event)=> setFormData({...formData, Gender: event.target.value })}
        />
        <input type="text" placeholder="PAN"
            value={formData.pan} 
            onChange={(event)=> setFormData({...formData, pan: event.target.value })}
        />
        <input type="text" placeholder="Father/Husband Name"
            value={formData.frhName} 
            onChange={(event)=> setFormData({...formData, frhName: event.target.value })}
        />
        <input type="text" placeholder="Date of Birth"
             value={formData.dateOfBirth} 
             onChange={(event)=> setFormData({...formData, dateOfBirth: event.target.value })}
        />
        <input type="text" placeholder="CKYC Number"
             value={formData.ckycNumber} 
             onChange={(event)=> setFormData({...formData, ckycNumber: event.target.value })}
        />
        
  </div>
  )
}

export default PersonalInfo;