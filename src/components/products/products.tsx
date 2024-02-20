import httpProduct from "../../lib/apiProduct";
import { useEffect, useState } from "react";
import { column } from "./product-columns";
import { GenerateTable } from "../ui/data-table";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";

export default function ProductTable() {
  const [products, setProducts] = useState([]);
  const { toast } = useToast();
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
          action: <Button onClick={window.location.reload}>Try again</Button>
        });
      });
    }
    fetchData();
  },[]);

  return (
    <div className="container flex flex-col justify-center mt-4">
      <GenerateTable columns={column} data={products} nameFilter={"productName"}/>
    </div>
  );
}
