import React from 'react'
import { useNavigate } from 'react-router-dom'
import { platformIcons } from '../assets/assets'
import { Users, TrendingUp, MapPin } from 'lucide-react'

const ListingCard = ({ listing }) => {

  const navigate = useNavigate()

  return (

    <div className="relative bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition w-full">

      {/* FEATURED BAR */}

      {listing.featured && (
        <div className="absolute top-0 left-0 w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white text-center text-xs font-semibold py-1 uppercase rounded-t-2xl">
          Featured
        </div>
      )}

      {/* HEADER */}

      <div className="flex items-start gap-4">

        {/* PLATFORM ICON */}

        <div>
          {platformIcons[listing.platform]}
        </div>

        <div>

          <h2 className="text-lg font-semibold text-gray-800">
            {listing.title}
          </h2>

          <p className="text-gray-500 text-sm">
            @{listing.username} - {listing.platform}
          </p>

        </div>

      </div>

      {/* FOLLOWERS + ENGAGEMENT */}

      <div className="flex gap-10 mt-4 text-gray-600 text-sm">

        <div className="flex items-center gap-2">
          <Users size={18}/>
          {listing.followers_count.toLocaleString()} followers
        </div>

        <div className="flex items-center gap-2">
          <TrendingUp size={18}/>
          {listing.engagement_rate}% engagement
        </div>

      </div>

      {/* NICHE + COUNTRY */}

      <div className="flex gap-4 mt-3 items-center">

        <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-xs capitalize">
          {listing.niche}
        </span>

        <span className="flex items-center gap-1 text-gray-500 text-sm">
          <MapPin size={16}/>
          {listing.country}
        </span>

      </div>

      {/* DESCRIPTION */}

      <p className="text-gray-500 text-sm mt-4">
        {listing.description}
      </p>

      {/* PRICE + BUTTON */}

      <div className="flex justify-between items-center mt-6">

        <p className="text-2xl font-semibold text-gray-900">
          ${listing.price}
          <span className="text-sm text-gray-400 ml-1">USD</span>
        </p>

        <button
          onClick={() => navigate(`/listing/${listing.id}`)}
          className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-5 py-2 rounded-lg hover:opacity-90"
        >
          More Details
        </button>

      </div>

    </div>

  )
}

export default ListingCard