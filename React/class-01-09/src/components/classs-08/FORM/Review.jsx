import React from 'react'

const Review = ({setStep,data}) => {
  return (
    <>
    <h1>Form Review</h1>
    <li>Name: {data.name}</li>
    <li>Email: {data.email}</li>
    <li>Contact: {data.contact}</li>
    <li>Country: {data.country}</li>
    <button onClick={() => setStep((prev) => prev - 1)}>Prev</button>
    </>
  )
}

export default Review