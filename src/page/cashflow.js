import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import httpPayment from "../lib/apiPayment";
import GraphicAreaChart from "../components/payment/payment-area-chart";
import { formatISO, addDays } from "date-fns";
import { useEffect, useState } from "react";
import { GenerateTable } from "../components/ui/data-table";
import { Button } from "../components/ui/button";
import { toast } from "../components/ui/use-toast";
import { column } from "../components/payment/payment-columns";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { DatePickerWithRange } from "../components/date-range-picker";
import Sidebar from "../components/sidebar";
import Time from "../components/time";

function Cashflow() {
  const [date, setDate] = useState({
    from: addDays(new Date(), -7),
    to: new Date(),
  });

  const [expenses, setExpenses] = useState([]);
  const [incomes, setIncomes] = useState([]);
  const [isLoad, setLoad] = useState(false);

  const GetDataOnClick = async () => {
    try {
      setLoad(true);
      await httpPayment
        .get(
          `/all/income?from=${formatISO(date.from)}&to=${formatISO(date.to)}`
        )
        .then((response) => {
          setIncomes(response.data);
        });
      await httpPayment
        .get(
          `/all/expense?from=${formatISO(date.from)}&to=${formatISO(date.to)}`
        )
        .then((response) => {
          setExpenses(response.data);
        });
    } catch (error) {
      const msg = error.message;
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: `${msg}`,
      });
    } finally {
      setLoad(false);
    }
  };

  useEffect(() => {
    GetDataOnClick();
  }, []);

  return (
    <>
      <Sidebar />
      <main className="ml-[250px] flex">
        <Time />
        <section className="mt-10 font-montserrat w-[90%]">
          <div className="ml-10">
            <h1 className="text-[45px] font-extrabold">Transaction Mutation</h1>
            <h2 className="text-[20px] font-semibold">
              List of your transaction
            </h2>
            <div className="mt-5">
              <h1 className="mr-[3.5%]">
                Choose range of your date transaction
              </h1>
              <div className="flex mt-2">
                <DatePickerWithRange date={date} setDate={setDate} />
                <Button className="ml-3" onClick={GetDataOnClick}>
                  <MagnifyingGlassIcon height={20} width={20} />
                </Button>
              </div>
            </div>
          </div>
          <Tabs
            defaultValue="graphic"
            className="flex flex-col justify-center mt-4"
          >
            <TabsList className="bg-transparent">
              <TabsTrigger
                className="text-[25px] uppercase shadow-none drop-shadow-none font-bold line"
                value="graphic"
              >
                Graphic
              </TabsTrigger>
              <TabsTrigger
                className="text-[25px] uppercase shadow-none drop-shadow-none font-bold line"
                value="incomes"
              >
                Income
              </TabsTrigger>
              <TabsTrigger
                className="text-[25px] uppercase shadow-none drop-shadow-none font-bold line"
                value="expenses"
              >
                Expenses
              </TabsTrigger>
            </TabsList>
            <TabsContent value="graphic">
              <div className="ml-[5%] mt-10 text-[14px]">
                <GraphicAreaChart
                  allData={expenses}
                  strokeColor={"#C23A22"}
                  areaColor={"#FF6663"}
                />
              </div>
              <div className="ml-[5%] mt-10 text-[14px]">
                <GraphicAreaChart
                  allData={incomes}
                  strokeColor={"#4b6d31"}
                  areaColor={"#a3bd80"}
                />
              </div>
              <div className="h-[200px]"></div>
            </TabsContent>
            <TabsContent value="incomes">
              <div className="container justify-center mt-5 ml-0">
                {isLoad ? (
                  <div>Loading...</div>
                ) : (
                  <GenerateTable
                    columns={column}
                    data={incomes}
                    nameFilter={"transaction"}
                  />
                )}
              </div>
            </TabsContent>
            <TabsContent value="expenses">
              <div className="container justify-center mt-5 ml-0">
                <GenerateTable
                  columns={column}
                  data={expenses}
                  nameFilter={"transaction"}
                />
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </main>
    </>
  );
}

export default Cashflow;
