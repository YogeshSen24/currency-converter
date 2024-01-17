import {InputBox} from "./components"
import React, {useState} from 'react';
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount , setAmount] = useState(0)
  const [from , setFrom] = useState("usd")
  const [to , setTo] = useState("inr")
  const [convertedAmount , setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const convert = ()=>{
    setConvertedAmount(amount*currencyInfo[to])
  }

  return (
    <div 
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage : `url("https://images.pexels.com/photos/3650642/pexels-photo-3650642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
      }}
    >
      <div className=" w-full">
        <div
          className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30 "
        >
          <form 
            onSubmit={(e)=>{
              e.preventDefault();
              convert()
            }}
          >
            <div className="w-full mb-1">
            <InputBox
              label="from"
              amount={amount}
              onAmountChange={(amount)=>{
                setAmount(amount)
              }}
              currencyOptions={options}
              onCurrencyChange={(currecy)=>{
                setFrom(currecy)
              }}
              selectCurrency={from}
            />
            </div>
            <div className="w-full mb-4 mt-1">
            <InputBox
              label="to"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currecy)=>{
                setTo(currecy)
              }}
              selectCurrency={to}
              amountDesabled
            />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {` ${from.toUpperCase()} to ${to.toUpperCase()}`}
            </button>


          </form>
        </div>

      </div>

    </div>
  )
}

export default App
