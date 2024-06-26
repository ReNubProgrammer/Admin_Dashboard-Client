import httpOrder from "../../lib/apiOrder";
import { useEffect, useState } from "react";
import { column } from "./columns";
import { GenerateTable } from "../ui/data-table";

export default function OrderTable() {
  const [orders, setOrders] = useState([]);
  try {
    useEffect(() => {
      async function fetchData() {
        const { data } = await httpOrder.get("/all");
        setOrders(data);
      }
      fetchData();
    }, []);
  } catch (error) {
    return error;
  }
  return (
    <div className="container mx-auto py-10">
      <GenerateTable columns={column} data={orders} nameFilter={"customer_name"}/>
    </div>
  );
}
