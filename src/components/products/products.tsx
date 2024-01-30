import httpProduct from "../../lib/apiProduct";
import { useEffect, useState } from "react";
import { column } from "./product-columns";
import { GenerateTable } from "../ui/data-table";


export default function ProductTable() {
  const [products, setProducts] = useState([]);
  try {
    useEffect(() => {
      async function fetchData() {
        const { data } = await httpProduct.get("/all");
        setProducts(data);
      }
      fetchData();
    }, []);
  } catch (error) {
    return error;
  }
  return (
    <div className="container">
      <GenerateTable columns={column} data={products} />
    </div>
  );
}
