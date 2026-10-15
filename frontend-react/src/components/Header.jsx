import React from 'react'
import logo from '../assets/images/logo.png'
import Button from './Button'

const Header = () => {
  return (
    <>
        <nav className="bg-white border-slate-800 pt-2">
            <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">

                <a href="/" className="flex items-center">
                    <img
                        src={logo}
                        alt="Stock Prediction Portal"
                        className="h-30 w-auto"
                    />
                </a>

                <div className="flex items-center gap-3">
                    <Button text="Login" class="login-button login-button:hover"/>

                    <Button text="Register" class="px-4 py-2 text-white rounded-lg
                                   bg-green-600
                                   hover:bg-green-700
                                   transition"
                    />
                </div>

            </div>
        </nav>
    </>
  )
}

export default Header