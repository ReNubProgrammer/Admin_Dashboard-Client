import Sidebar from "../components/sidebar";
import Time from "../components/time";
import TeamTable from "../components/team/teams";

function Team() {
  return (
    <>
      <main className="flex">
        <Sidebar />
        <Time />
        <main className="mt-10 font-montserrat w-[82%]">
          <div className="ml-10">
            <h1 className="text-[45px] font-extrabold">Team</h1>
            <h2 className="text-[20px] font-semibold">
              Sayangi membermu, beri kerjaan tiap hari ~
            </h2>
          </div>
          <TeamTable />
        </main>
      </main>
    </>
  );
}

export default Team;
