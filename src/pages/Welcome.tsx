import React from "react";
import Head from "next/head";

function Welcome() {
  return(
    <>
      <Head>
        <title>Select subscription</title>
        <meta name="description" content="Selet subscription page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen w-screen flex justify-center items-center relative bg-page2 bg-no-repeat bg-local bg-cover bg-bottom">
        {/* Main wrapper */}
        <div className="h-full w-full flex flex-col justify-center items-center text-left">
          {/* Text */}
            <h1 className="text-white text-[15.625rem] font-Lato font-bold">
              COSMIC <br /> ELEGANS
            </h1>
        </div>
      </main>
    </>
  )
}
 
export default Welcome;