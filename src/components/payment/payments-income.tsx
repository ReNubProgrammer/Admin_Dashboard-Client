import httpPayment from "../../lib/apiPayment";
import { useEffect, useState } from "react";
import { column } from "./payment-columns";
import { GenerateTable } from "../ui/data-table";
import { toast } from "../ui/use-toast";

export default function PaymentIncomeTable() {
  const [payments, setPayments] = useState([]);
  useEffect(() => {
    async function fetchData() {
      await httpPayment
        .get("/all/income")
        .then((response) => {
          setPayments(response.data);
        })
        .catch((error) => {
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
    <div className="container justify-center mt-5 ml-0">
      <GenerateTable columns={column} data={payments} nameFilter={"transaction"}/>
    </div>
 )
}