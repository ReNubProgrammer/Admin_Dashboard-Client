import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import PaymentIncomeTable from "../components/payment/payments-income"
import PaymentExpenseTable from "../components/payment/payments-expense"
import Sidebar from "../components/sidebar";
import Time from "../components/time";

function Cashflow() {
  return (
    <>
      <main className="flex">
        <Sidebar />
        <Time />
        <section className="mt-10 font-montserrat w-[80%]">
          <div className="ml-10">
            <h1 className="text-[45px] font-extrabold">
              Transaction Mutation
            </h1>
            <h2 className="text-[20px] font-semibold">
              List transaksi yang telah dilakukan
            </h2>
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
            <TabsContent value="incomes">
              <PaymentIncomeTable/>
            </TabsContent>
            <TabsContent value="expenses">
              <PaymentExpenseTable/>
            </TabsContent>
          </Tabs>
        </section>
      </main>
    </>
  );
}

export default Cashflow;
