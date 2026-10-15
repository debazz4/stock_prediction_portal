import React from 'react'
import Button from './Button'

const Main = () => {
  return (
    <>
      <div className="h-[calc(100vh-12rem)] flex items-center justify-center px-4 overflow-hidden">
        <div className="w-full max-w-5xl">
            <div className="p-8 md:p-12 text-center bg-slate-900 rounded-2xl border border-slate-800 shadow-lg">

                <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    Stock <span className="text-green-500">Prediction</span> Portal
                </h1>

                <p className="text-lg md:text-xl leading-relaxed text-slate-300 max-w-4xl mx-auto">
                    Welcome to Stock Prediction Portal, a data-driven platform designed
                    to help users explore stock market trends and make more informed
                    investment decisions. Our platform uses historical market data and
                    predictive analysis to identify patterns, analyze price movements,
                    and provide insights into potential future stock performance.
                    Whether you are learning about the stock market or looking for data
                    to support your research, Stock Prediction Portal gives you a simple
                    way to explore market information.
                </p>
                <br />
                <Button text="Login" class="login-button login-button:hover"/>

            </div>
        </div>
      </div>
    </>
  )
}

export default Main