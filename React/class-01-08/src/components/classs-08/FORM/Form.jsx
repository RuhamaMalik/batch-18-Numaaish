import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Review from "./Review";

const Form = () => {
  let [step, setStep] = useState(1);
  let [data, setData] = useState({
    name: "",
    email: "",
    contact: "",
    country: "",
  });

  const handleSubmit=()=>{
    console.log(data);

    setStep(1)
    setData({
    name: "",
    email: "",
    contact: "",
    country: "",
  })

    
  }

  return (
    <>
      <form >
        {step === 1 && <Step1 data={data} setData={setData} setStep={setStep} />}
        {step === 2 && <Step2 data={data} setData={setData} setStep={setStep} />}
        {step === 3 && <Review data={data} setStep={setStep} />}

        <br />
        <br />
        {step === 3 && <input  type="submit" onClick={handleSubmit} />}
      </form>
    </>
  );
};

export default Form;
