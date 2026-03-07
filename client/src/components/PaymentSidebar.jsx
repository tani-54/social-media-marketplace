import React, { useState } from "react"

const PaymentSidebar = ({ isOpen, onClose }) => {

  const [paymentSuccess, setPaymentSuccess] = useState(false)

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-300 ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >

      {/* Background overlay */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        className={`absolute right-0 top-0 h-full w-[420px] bg-white shadow-xl transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >

        <div className="p-6">

        {/* SUCCESS SCREEN */}
        {paymentSuccess ? (

          <div className="flex flex-col items-center justify-center h-full text-center">

            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-2xl">
              ✓
            </div>

            <h2 className="text-xl font-semibold mt-6">
              Trial successfully started!
            </h2>

            <p className="text-gray-500 mt-2">
              Your new subscription is all set.
            </p>

            <button
              onClick={onClose}
              className="w-full mt-10 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg"
            >
              Continue
            </button>

          </div>

        ) : (

        <>
          {/* Header */}
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Premium</h2>
            <button onClick={onClose} className="text-xl">✕</button>
          </div>

          <p className="text-sm text-gray-500 mt-1">Billed annually</p>

          {/* Price Summary */}
          <div className="mt-6 space-y-2 text-sm">

            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>$96.00</span>
            </div>

            <div className="flex justify-between">
              <span>Total Due Today</span>
              <span>$0.00</span>
            </div>

          </div>

          {/* Dev Mode */}
          <div className="bg-orange-100 text-center p-2 rounded mt-6 text-sm">
            Development mode
          </div>

          {/* PAY BUTTON */}
          <button
            onClick={() => setPaymentSuccess(true)}
            className="w-full border rounded py-2 mt-2"
          >
            Pay with test card
          </button>

          {/* Card Inputs */}
          <div className="mt-6 space-y-4">

            <input
              className="w-full border rounded p-2"
              placeholder="Card number"
            />

            <div className="flex gap-3">
              <input
                className="w-1/2 border rounded p-2"
                placeholder="MM / YY"
              />

              <input
                className="w-1/2 border rounded p-2"
                placeholder="CVC"
              />
            </div>

            <select className="w-full border rounded p-2">
              <option>India</option>
              <option>USA</option>
              <option>UK</option>
            </select>

          </div>

          <button
            onClick={() => setPaymentSuccess(true)}
            className="w-full mt-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg"
          >
            Start free trial
          </button>

        </>
        )}

        </div>

      </div>
    </div>
  )
}

export default PaymentSidebar