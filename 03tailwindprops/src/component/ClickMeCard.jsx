import React from "react";

function ClickMeCard() {    
    return(
        <div className="flex items-center justify-center min-h-screen bg-gray-100 mb-10">
      <div className="p-6 max-w-sm bg-white rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold text-blue-600">Hello, Tailwind + React!</h1>
        <p className="mt-4 text-gray-700">
          This is a simple card styled with Tailwind CSS.
        </p>
        <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Click Me
        </button>
      </div>
    </div>
    )
}

export default ClickMeCard;