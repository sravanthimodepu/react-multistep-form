import React from "react";
import { BiIdCard } from "react-icons/bi";
import {CgNametag} from "react-icons/cg";
import {HiOutlineMail} from "react-icons/hi";

// import Select from 'react-select';

// const Countries = [
//   { label: "Mr", value:"male" },
//   { label: "Mrs", value: "female" }
// ];   

function RndDetails({formData, setFormData}) {
    
  return (
    <div className="sign-up-container">
      <div className="wrapper">
        <div className="icon"><BiIdCard/></div>
        <input
        type="text" placeholder="RM - EUIN" 
        value={formData.rmEUIN} 
        onChange={(event)=> setFormData({...formData, rmEUIN: event.target.value })}  
        />
      </div>
      {/* <Select style={{backgeoundColor:"#e6e1e1"}} options={Countries} placeholder="Salutation" value={formData.gender} onChange={(event)=> setFormData({...formData, gender: event.target.value})} /> */}
      <div className="wrapper">
        <div className="icon"><CgNametag/></div>
      <input type="text" placeholder="Name" 
        value={formData.name} 
        onChange={(event)=> setFormData({...formData, name: event.target.value })}
      />
      </div>
      <div className="wrapper">
        <div className="icon"><HiOutlineMail/></div>
      <input type="text" placeholder="Email" 
        value={formData.email} 
        onChange={(event)=> setFormData({...formData, email: event.target.value })}
      />
      </div>
      <input type="text" placeholder="Mobile" 
        value={formData.mobile} 
        onChange={(event)=> setFormData({...formData, mobile: event.target.value })}
      />
      <input type="text" placeholder="Distributor EUIN" 
        value={formData.distributorEUIN} 
        onChange={(event)=> setFormData({...formData, distributorEUIN: event.target.value })}
      />
      <input type="text" placeholder="Name" 
        value={formData.name} 
        onChange={(event)=> setFormData({...formData, name: event.target.value })}
      />
      <input type="text" placeholder="Email" 
        value={formData.email} 
        onChange={(event)=> setFormData({...formData, email: event.target.value })}
      />
      <input type="text" placeholder="Mobile" 
        value={formData.mobile} 
        onChange={(event)=> setFormData({...formData, mobile: event.target.value })}
      />
    </div>
  )
}

export default RndDetails;