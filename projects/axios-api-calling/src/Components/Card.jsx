import React from 'react'

const Card = ({user}) => {
    return (
        <div className="bg-white  shadow-lg rounded-2xl p-5 border border-gray-200 hover:shadow-xl transition duration-300">

            {/* Top Section */}
            <div className="mb-3">
                <h2 className="text-xl font-bold text-gray-800">
                    {user.name}
                </h2>

                <p className="text-sm text-gray-500">
                    @{user.username}
                </p>
            </div>

            {/* Email */}
            <p className="text-gray-700 text-sm mb-2">
                📧 {user.email}
            </p>

            {/* Phone */}
            <p className="text-gray-700 text-sm mb-2">
                📞 {user.phone}
            </p>

            {/* Website */}
            <p className="text-blue-600 text-sm mb-3">
                🌐 {user.website}
            </p>

            {/* Address */}
            <div className="bg-gray-50 p-3 rounded-lg mb-3">
                <h3 className="font-semibold text-gray-700 text-sm mb-1">
                    Address
                </h3>

                <p className="text-sm text-gray-600">
                    {user.address.street}, {user.address.suite}
                </p>

                <p className="text-sm text-gray-600">
                    {user.address.city} - {user.address.zipcode}
                </p>
            </div>

            {/* Company */}
            <div className="bg-gray-50 p-3 rounded-lg">
                <h3 className="font-semibold text-gray-700 text-sm mb-1">
                    Company
                </h3>

                <p className="text-sm text-gray-600">
                    {user.company.name}
                </p>

                <p className="text-xs text-gray-500 italic">
                    {user.company.catchPhrase}
                </p>
            </div>

        </div>
    )
}

export default Card
