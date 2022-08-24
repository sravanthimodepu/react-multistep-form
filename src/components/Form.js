import React, {useState} from "react";
import RndDetails from "./RnDdetails";
import PersonalInfo from "./PersonalInfo";
import OtherInfo from "./OtherInfo";
import Address from "./Address";
import SecondHolder from "./SecondHolder";
import ThirdHolder from "./ThirdHolder";

function Form() {
    const [page, setPage] = useState(0);

    const FormTitles = ["0. RM EUIN and Distributor Details", 
                        "1. First Holder", 
                        "2. Guardian Details", 
                        "3. Second Holder", 
                        "4. Third Holder",
                        "5. Address - First Holder",
                        "6. Contact Details",
                        "",
                        "",
                        "",
                        "",
                        ];
    
    const [formData, setFormData ] = useState ({
        name: "",
        email: "",
        mobile:"",
        rmEUIN: "",
        distributorEUIN: "",
        salutatoin: "",
        firstName: "",
        middleName: "",
        lastName: "",
        gender: "",
        pan: "",
        frhName: "",
        dateOfBirth: "",
        ckycNumber: "",
        guardianName: "",
        guardianPAN: "",
        minorDOB: "",
        dobProof: "",
        guardianRelation: "",
        relationship: "",
        modeofHolding: "",
        addressType: "",
        sameasCorrespondence: "",
        address1: "",
        address2: "",
        pincode: "",
        city: "",
        state: "",
        country: ""

    })

    const PageDisplay = () => {
        // return <h1>Hello World</h1>
           if (page === 0){
            return <RndDetails formData={formData} setFormData={setFormData}/>;
           } else if (page === 1){
            return <PersonalInfo formData={formData} setFormData={setFormData}/>;
           } else if (page === 2){
            return <OtherInfo formData={formData} setFormData={setFormData}/>;
           } else if(page === 3){
             return<SecondHolder formData={formData} setFormData={setFormData}/>
            } else if(page === 4){
                return<ThirdHolder formData={formData} setFormData={setFormData}/>
            } else{
            return <Address formData={formData} setFormData={setFormData}/>
           }
    }
  return (
    <div className='form'>
        {/* <div className="progressbar">
            <div style={{width: page === 0 ? "33.3%": page === 1 ? "66.6%" : "100%"}}>
            </div>
        </div> */}
        <div className="form-container">
            <div className='header'>
                <h1>{FormTitles[page]}</h1>
            </div>
            <div className='body'>{PageDisplay()}</div>
            <div className='footer'></div>
            <div className="button">
                <button 
                    disabled={page === 0}
                    onClick={() => {
                        setPage((currPage) => currPage - 1);
                        }
                    }
                >Prev</button>
                <button
                // disabled={page === FormTitles.length - 1}
                onClick={() => {
                    if (page === FormTitles.length - 1) {
                        alert("FORM SUBMITTED");
                        console.log(formData);
                    } else {
                        setPage((currPage) => currPage +1);
                    }
                }
                }   
            > {page === FormTitles.length-1 ? "Submit" : "Next"}</button>
            </div>
            
        </div>

    </div>
  )
};

export default Form;