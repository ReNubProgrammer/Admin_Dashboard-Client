import Sidebar from "../components/sidebar";
import Time from "../components/time"
import TeamTable from "../components/team/teams"

function Team() {
  return (
    <>
      <Sidebar />
      <Time />
      <main className="absolute ml-[18%] mt-10 z-10 font-montserrat w-[82%]">
        <h1 className="text-[45px] font-extrabold">Team</h1>
        <h2 className="text-[20px] font-semibold">Sayangi membermu, beri kerjaan tiap hari ~</h2>
        <TeamTable/>
      </main>
    </>
  );
}

export default Team;