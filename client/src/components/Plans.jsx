import React, { useState } from "react"
import { Check } from "lucide-react"
import PaymentSidebar from "./PaymentSidebar"

const Plans = () => {

  const [openSidebar, setOpenSidebar] = useState(false)

  return (
    <div className="mt-24 mb-24 px-6">

      {/* Title */}
      <div className="text-center">
        <h2 className="text-4xl font-semibold text-gray-800">
          Choose Your Plan
        </h2>
        <p className="text-gray-500 mt-2">
          Start for free and scale up as you grow. Find the perfect plan for your content creation needs.
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-col md:flex-row justify-center gap-8 mt-12">

        {/* FREE PLAN */}
        <div className="w-full max-w-sm bg-white border rounded-xl shadow-sm">

          <div className="p-6 border-b relative">

            <span className="absolute right-6 top-6 text-xs bg-blue-500 text-white px-2 py-1 rounded">
              Active
            </span>

            <h3 className="text-lg font-semibold">Free</h3>

            <p className="text-3xl font-bold mt-2">$0</p>

            <p className="text-gray-500 text-sm">Always free</p>
          </div>

          <div className="p-6 space-y-4">

            <Feature text="5 Free Listings"/>
            <Feature text="Standard Listings"/>
            <Feature text="Basic Tools"/>
            <Feature text="Email Support"/>
            <Feature text="No Branding"/>
            <Feature text="10% Transaction fee"/>

          </div>

        </div>


        {/* PREMIUM PLAN */}
        <div className="w-full max-w-sm bg-white border rounded-xl shadow-sm">

          <div className="p-6 border-b">

            <h3 className="text-lg font-semibold">Premium</h3>

            <p className="text-3xl font-bold mt-2">
              $8 <span className="text-sm text-gray-500">/month</span>
            </p>

            <div className="flex items-center gap-2 mt-2">
              <div className="w-10 h-5 bg-blue-500 rounded-full relative">
                <div className="absolute left-5 top-0.5 w-4 h-4 bg-white rounded-full"/>
              </div>
              <span className="text-gray-500 text-sm">
                Billed annually
              </span>
            </div>

          </div>

          <div className="p-6 space-y-4">

            <Feature text="Unlimited Listings"/>
            <Feature text="Featured Listings"/>
            <Feature text="Ad & Promotion Tools"/>
            <Feature text="1 - 1 Support"/>
            <Feature text="Custom Branding"/>
            <Feature text="7% transaction fee"/>

            {/* BUTTON */}
            <button
              onClick={() => setOpenSidebar(true)}
              className="w-full mt-4 py-2 rounded-lg text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90"
            >
              Start 7-day free trial
            </button>

          </div>

        </div>

      </div>

      {/* SIDEBAR */}
      <PaymentSidebar
        isOpen={openSidebar}
        onClose={() => setOpenSidebar(false)}
      />

    </div>
  )
}

const Feature = ({text}) => {
  return (
    <div className="flex items-center gap-2 text-gray-600">
      <Check size={18} className="text-gray-500"/>
      <p>{text}</p>
    </div>
  )
}

export default Plans