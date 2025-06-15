import React from 'react'
import 'tailwindcss/tailwind.css'

const Cards = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/3">
        <h2 className="text-xl font-bold mb-2">Card Title 1</h2>
        <p className="text-gray-700">This is a description for card 1.</p>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/3">
        <h2 className="text-xl font-bold mb-2">Card Title 2</h2>
        <p className="text-gray-700">This is a description for card 2.</p>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/3">
        <h2 className="text-xl font-bold mb-2">Card Title 3</h2>
        <p className="text-gray-700">This is a description for card 3.</p>
      </div>
    </div>
  )
}

export default Cards
