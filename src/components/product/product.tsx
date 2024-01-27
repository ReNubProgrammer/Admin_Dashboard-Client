import httpProduct from "../../lib/apiProduct";
import { useEffect, useState } from "react";
import { columns } from "./columns";
import { DataTable } from "../ui/data-table";

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
      <DataTable columns={columns} data={products} />
    </div>
  );
}
