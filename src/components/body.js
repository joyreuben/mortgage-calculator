import { useState } from 'react'
import React from "react";

function MortageCalculator() {
  const [purchase, purchasePrice] = useState('0');
  const [downPayment, downPrice] = useState('0');
  const [repay, repayPrice] = useState('1');
  const [interest, interestRate] = useState('0')

  function handleClick(){
    let setPrice = `${purchase}`;
    let deposit = `${downPayment}`;
    let rate = (`${interest}` / 12) / 100;
    let payments = `${repay}` * 12;
    let principal = setPrice - deposit
    let mortageAmount;

   
    mortageAmount = Math.floor((principal * (( rate * ( (1 + rate) ** payments) / (((1 + rate) ** payments))))))
    

    document.getElementById('estimated').innerHTML = mortageAmount;
    document.getElementById('amount').innerHTML = principal

  }


  return (

    <>
    <div className="calculator">
      <h1 className="text-3xl px-8 py-8 font-semibold">Mortage Calculator</h1>
        
      <div className="price-wrap pb-4">
        <form onChange={handleClick}
        className='price-range grid gap-3'>
          <div className="input-wrapper flex-row">
            <label className="text-2xl" htmlFor="purchase-price">
              Purchase Price: $ 
              <span className="text-4xl">{purchase}</span>
            </label>
            <input type="range" min="0" max="1000000" onChange={(e) =>{purchasePrice(e.target.value)}}></input>
          </div>

          <div  className="input-wrapper flex-row">
            <label className="text-2xl"  htmlFor="down-price">
               Down Payment: $
              <span className="text-4xl">{downPayment}</span>
            </label>
            <input type="range"  min="0" max="3600" onChange={(e) =>{downPrice(e.target.value)}}></input>
          </div>

          <div className="input-wrapper flex-row">
            <label className="text-2xl"  htmlFor="repay-price">
              Repayment Time: 
              <span>{repay} </span>year
            </label>
            <input type="range" min="0" max="30" onChange={(e) =>{repayPrice(e.target.value)}}></input>
          </div>

          <div className="text-2xl">
            <label htmlFor="interest-price">
              Interest Price: 
              <span className="text-4xl" >{interest}</span>%
            </label>
            <input type="range" min="0"  max="100" onChange={(e) =>{interestRate(e.target.value)}}></input>
    
          </div>

          <h3 className="text-2xl">
            Loan Amount :
              $<span  id="amount" className="text-4xl">0</span>
            
          </h3>

          
          <h3 className="text-2xl">
            Estimated per month
             $
              <span  id="estimated" className=" text-4xl block">0</span>
            
          </h3>

          <button >Get A Mortage Quote </button>
        </form>

      </div>
    </div>
    </>
  )
}

function Body(){
  return(
    <div>
      <MortageCalculator/>
    </div>
  )
}


export default Body