import Sidebar from "../components/sidebar";
import Time from "../components/time";

function Agenda() {
  return (
    <>
      <Sidebar />
      <div className="ml-[250px] flex">
        <Time />
        Ini Agenda
      </div>
    </>
  );
}

export default Agenda;
