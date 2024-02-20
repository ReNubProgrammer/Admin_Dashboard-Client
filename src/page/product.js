import Sidebar from "../components/sidebar";
import Time from "../components/time";
import ProductTable from "../components/products/products";

function Product() {
  return (
    <>
      <main className="flex">
        <Sidebar />
        <Time />
        <main className="mt-10 w-[80%] font-montserrat">
          <div className="ml-10">
            <h1 className="text-[45px] font-extrabold">Product</h1>
            <h2 className="text-[20px] font-semibold">
              List product yang telah didaftarkan
            </h2>
          </div>
          <ProductTable />
        </main>
      </main>
    </>
  );
}

export default Product;
