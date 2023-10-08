import React from "react";
import Head from "next/head";
import Link from "next/link";

import { useRef } from "react";
import { useInView } from "framer-motion";

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateY(+200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
      >
        {children}
      </span>
    </section>
  );
}

function Welcome() {
  return(
    <>
      <Head>
        <title>Select subscription</title>
        <meta name="description" content="Welcome" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen w-screen bg-spacebg bg-no-repeat bg-local bg-cover bg-bottom">
        <div className="absolute h-full w-full inset-0 bg-cover bg-no-repeat bg-bottom bg-frame3 z-20"></div>
        <div className="absolute h-full w-full inset-0 bg-gradient-to-t from-black from-0% to-transparent to-50%"></div>
        {/* Main Wrapper */}
        <div className="h-full w-full flex justify-center items-center relative">
          <div className="flex flex-col relative justify-center items-center space-y-10">
            {/* Text */}
            <Section>
              <div className="h-[21.875rem] w-[35rem] relative scale-150 bottom-14 z-10">
                <span className="absolute tracking-[2.5625rem] text-white font-oswald font-bold text-[6.25rem]">COSMIC</span>
                <span className="absolute top-[4.75rem] text-[9.375rem] text-white font-oswald font-bold ">ELEGANS</span>
              </div>
            </Section>
            <Link href="/Dashboard" className="absolute text-bold -bottom-3 left-3 flex items-center justify-center w-[30rem] h-[5rem] font-oswald font-semibold tracking-[0.5rem] text-2xl  px-3 bg-purple-700 hover:bg-purple-600 text-white rounded-xl z-50"> Simulator </Link>
          </div>
        </div>
      </main>
    </>
  )
}
 
export default Welcome;