import Head from "next/head";
import SideBar from "~/components/Sidebar";
import AutoPlayVideo from "~/components/Video";


function Graphs() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Dashboard page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex items-center justify-start h-screen max-h-screen w-screen bg-[#30363d]">
        <SideBar />
        <div className="w-full h-full flex justify-around items-center border-2 border-red-400">
          <div className="w-[500px] h-full flex mb-[7.5rem] "  >
            <AutoPlayVideo src="graphs1.mp4"/>
          </div>
          <div className="w-[500px] h-full flex mb-[7.5rem] " >
            <AutoPlayVideo src="graphs2.mp4"/>
          </div>
          <div className="w-[500px] h-full flex mb-[7.5rem] " >
            <AutoPlayVideo src="graphs3.mp4"/>
          </div>
        </div>
      </main>
    </>
  );
}

export default Graphs;
