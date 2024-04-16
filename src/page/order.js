import Sidebar from "../components/sidebar";
import Time from "../components/time";
import OrderTable from "../components/order/order";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";

function Order() {
  return (
    <>
      <Sidebar />
      <main className="ml-[250px] flex">
        <Time />
        <section className="mt-10 font-montserrat w-[82%]">
          <div className="ml-10">
            <h1 className="text-[45px] font-extrabold">Pesanan</h1>
            <h2 className="text-[20px] font-semibold">
              Ada yang masuk nih cuy!
            </h2>
            <Tabs
              defaultValue="studio"
              className="flex flex-col justify-center mt-4"
            >
              <TabsList className="bg-transparent">
                <TabsTrigger
                  className="text-[25px] uppercase shadow-none drop-shadow-none font-bold line"
                  value="studio"
                >
                  Studio
                </TabsTrigger>
                ``
                <TabsTrigger
                  className="text-[25px] uppercase shadow-none drop-shadow-none font-bold line"
                  value="nonstudio"
                >
                  Non Studio
                </TabsTrigger>
              </TabsList>
              <TabsContent value="studio">
                <OrderTable />
              </TabsContent>
              <TabsContent value="nonstudio"></TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
    </>
  );
}

export default Order;
