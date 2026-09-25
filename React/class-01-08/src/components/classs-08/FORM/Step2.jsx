import React from "react";

const Step2 = ({ setStep,data,setData }) => {
  return (
    <>
      <h1>Step 2</h1>

      <label htmlFor="c">Contact</label>
      <input value={data.contact} onChange={(e)=>setData({...data, contact:e.target.value})} id="c" type="number" placeholder="348937483" />
      <br />
      <br />
      <br />

      <label htmlFor="ct">Country</label>
      <input value={data.country} onChange={(e)=>setData({...data, country:e.target.value})} id="ct" type="text" placeholder="Pakistan" />
      <br />
      <br />
      <br />

      <button onClick={() => setStep((prev) => prev - 1)}>Prev</button>
      <button onClick={() => setStep((prev) => prev + 1)}>Next</button>
    </>
  );
};

export default Step2;
