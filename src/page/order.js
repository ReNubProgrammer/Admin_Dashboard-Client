import Sidebar from "../components/sidebar";
import Time from "../components/time";
import OrderTable from "../components/order/order"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"


function Order() {
  return (
    <>
      <Sidebar />
      <Time />
      <main className="absolute ml-[18%] mt-10 z-10 font-montserrat w-[82%]">
        <h1 className="text-[45px] font-extrabold">Pesanan</h1>
        <h2 className="text-[20px] font-semibold">Ada yang masuk nih cuy!</h2>
        <Tabs 
          defaultValue="studio"
          className="flex justify-center mt-4 ml-[-10%]"
        >
          <TabsList className="bg-transparent">
            <TabsTrigger
              className="text-[25px] uppercase shadow-none drop-shadow-none font-bold line"
              value="studio"
            >
              Studio
            </TabsTrigger>
            <TabsTrigger
              className="text-[25px] uppercase shadow-none drop-shadow-none font-bold line"
              value="nonstudio"
            >
              Non Studio
            </TabsTrigger>
          </TabsList>
          <TabsContent value="studio"><OrderTable/></TabsContent>
          <TabsContent value="nonstudio"></TabsContent>
        </Tabs>
      </main>
    </>
  );
}

export default Order;
