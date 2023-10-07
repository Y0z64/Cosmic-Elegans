import React from "react";
import Head from "next/head";
import Link from "next/link";

function Welcome() {
  return(
    <>
      <Head>
        <title>Select subscription</title>
        <meta name="description" content="Selet subscription page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen w-screen bg-page3 bg-no-repeat bg-local bg-cover bg-bottom">
        <div className="absolute h-full w-full inset-0 bg-gradient-to-t from-black from-0% to-transparent to-50%"></div>
        <div className="h-full w-full flex justify-center items-center relative">
          {/* Main wrapper */}
          <div className="h-full w-full flex flex-col items-start justify-end text-left">
            {/* Main text */}
            <div className=" w-2/3 h-2/3 flex flex-col items-start justify-end ml-10">
              {/* Title */}
              <div className="h-[21.875rem] w-[35rem] bottom-20 relative">
                <span className="absolute tracking-[2.5625rem] text-white font-oswald font-bold text-[6.25rem]">COSMIC</span>
                <span className="absolute top-[4.75rem] text-[9.375rem] text-white font-oswald font-bold ">ELEGANS</span>
              </div>
              <Link href="/Dashboard" className="absolute text-bold bottom-[6rem] flex items-center justify-center w-[18rem] h-14 font-oswald font-semibold tracking-[0.5rem] text-2xl  px-3 bg-purple-700 hover:bg-purple-600 text-white rounded-xl"> Simulator </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
 
export default Welcome;