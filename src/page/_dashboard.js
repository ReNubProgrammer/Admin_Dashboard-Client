import Sidebar from "../components/sidebar";
import Time from "../components/time";

function Home() {
  return (
    <>
      <Sidebar />
      <div className="font-montserrat">
        <Time />
      </div>
    </>
  );
}

export default Home;
