import React from 'react'

const Loading = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="flex flex-col items-center space-y-2">
        <div className="loader"></div>
        <p className="text-center text-[#189cd2]">Loading...</p>
      </div>
    </div>
  )
}
export default Loading
