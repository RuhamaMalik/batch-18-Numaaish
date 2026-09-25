import React from "react";

const Step1 = ({setStep,data,setData}) => {
   
    
  return (
    <>
      <h1>Step 1</h1>

      <label htmlFor="name">Name:</label>
      <input value={data.name} onChange={(e)=> setData({...data,name:e.target.value})} placeholder="Ruhama Gull!" id="name" type="text" />
      <br />
      <br />
      <br />

      <label htmlFor="email">Email:</label>
      <input value={data.email} onChange={(e)=>setData({...data, email:e.target.value})} placeholder="ruhama@gmail.com" id="email" type="email" />
      <br />
      <br />
      <br />

      <button onClick={()=>setStep((prev)=> prev+1)} >Next</button>
    </>
  );
};

export default Step1;
