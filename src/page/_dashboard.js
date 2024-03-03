import Sidebar from "../components/sidebar";
import Time from "../components/time";

function Home() {
  return (
    <>
      <Sidebar />
      <div className="font-montserrat flex ml-[250px]">
        <Time />
      </div>
    </>
  );
}

export default Home;
