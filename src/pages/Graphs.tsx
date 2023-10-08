import Head from "next/head";
import SideBar from "~/Components/Sidebar";

Head;

function Graphs() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Dashboard page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <SideBar />
      </main>
    </>
  );
}

export default Graphs;
