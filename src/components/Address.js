import React from "react";

function Address({formData, setFormData}) {
  return (
    <div className="address-container">
        <input type="text" placeholder="Address Type"
             value={formData.addressType} 
             onChange={(event)=> setFormData({...formData, addressType: event.target.value })}
        />
        <input type="text" placeholder="Address 1"
             value={formData.address1} 
             onChange={(event)=> setFormData({...formData, address1: event.target.value })}
        />
        <input type="text" placeholder="Address 2"
             value={formData.address2} 
             onChange={(event)=> setFormData({...formData, address2: event.target.value })}
        />
        <input type="text" placeholder="Pincode"
             value={formData.pincode} 
             onChange={(event)=> setFormData({...formData, Pincode: event.target.value })}
        />
        <input type="text" placeholder="City"
             value={formData.city} 
             onChange={(event)=> setFormData({...formData, city: event.target.value })}
        />
        <input type="text" placeholder="State"
            value={formData.state} 
            onChange={(event)=> setFormData({...formData, state: event.target.value })}
        />
        <input type="text" placeholder="Country"
            value={formData.frhName} 
            onChange={(event)=> setFormData({...formData, frhName: event.target.value })}
        />
        {/* <input type="text" placeholder="Date of Birth"
             value={formData.dateOfBirth} 
             onChange={(event)=> setFormData({...formData, dateOfBirth: event.target.value })}
        />
        <input type="text" placeholder="CKYC Number"
             value={formData.ckycNumber} 
             onChange={(event)=> setFormData({...formData, ckycNumber: event.target.value })}
        /> */}
        
  </div>
  )
}

export default Address;