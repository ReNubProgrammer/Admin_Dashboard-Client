import httpProduct from "../../lib/apiProduct";
import { useEffect, useState } from "react";
import { column } from "./product-columns";
import { GenerateTable } from "../ui/data-table";
import { toast } from "../ui/use-toast";

export default function ProductTable() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      await httpProduct.get("/all").then((response)=>{
        setProducts(response.data)
      }).catch((error) => {
        const msg = error.message;
        toast({
          variant: "destructive",
          title: "Something went wrong",
          description: `${msg}`,
        });
      });
    }
    fetchData();
  }, []);

  return (
    <div className="container">
      <GenerateTable columns={column} data={products} />
    </div>
  );
}
