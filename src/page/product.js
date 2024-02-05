import Sidebar from "../components/sidebar";
import Time from "../components/time";
import ProductTable from "../components/products/products"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"

function Product() {
  return (
    <>
      <Sidebar />
      <Time />
      <main className="absolute ml-[18%] mt-10 z-10 font-montserrat w-[82%]">
        <h1 className="text-[45px] font-extrabold">Product</h1>
        <h2 className="text-[20px] font-semibold">List product yang telah didaftarkan</h2>
        <Tabs 
          defaultValue="studio"
          className="flex flex-col justify-center mt-4 ml-[-10%]"
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
          <TabsContent value="studio"><ProductTable/></TabsContent>
          <TabsContent value="nonstudio"></TabsContent>
        </Tabs>
      </main>
    </>
  );
}

export default Product;
