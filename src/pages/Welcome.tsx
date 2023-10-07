import React from "react";

function Welcome() {
  return(
    <main className="h-screen w-screen flex justify-center items-center relative bg-page2 bg-no-repeat bg-local bg-cover bg-bottom">
      {/* Main wrapper */}
      <div className="h-full w-full flex flex-col justify-center items-center text-left">
        {/* Text */}
          <h1 className="text-white text-2xl">
            COSMIC <br /> ELEGANS
          </h1>
      </div>
    </main>
  )
}
 
export default Welcome;