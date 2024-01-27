import Sidebar from "../components/sidebar";
import Time from "../components/time";

function Agenda() {
  return (
    <>
      <Sidebar />
      <Time />
      <div className="ml-[20%]">Ini Agenda</div>
    </>
  );
}

export default Agenda;