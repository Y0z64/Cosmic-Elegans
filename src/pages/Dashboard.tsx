import Head from "next/head";
import Sidebar from "../components/Sidebar";
import AutoPlayVideo from "~/components/Video";

import React from "react";

function Dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Dashboard page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex items-center justify-start h-screen max-h-screen w-screen bg-[#30363d]">
        <Sidebar />
        {/* Embed */}
        {/* <iframe width="100%" height="100%" src="https://apps.powerapps.com/play/c4308842-2b8c-4fa4-90ba-c186276b68b6?source=website&screenColor=rgba(165,34,55,1)" className="border-2 border-red-400"/> */}
        <div className="h-screen w-full">
          <AutoPlayVideo src="/Celegans1.mp4"/>
        </div>
      </main>
    </>
  );
}

export default Dashboard;

// <iframe width="[W]" height="[H]" src="https://apps.powerapps.com/play/c4308842-2b8c-4fa4-90ba-c186276b68b6?source=website&screenColor=rgba(165,34,55,1)" 
