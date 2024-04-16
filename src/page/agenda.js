import Sidebar from "../components/sidebar";
import Time from "../components/time";
import AddAgenda from "../components/agenda/agendaAdd";
import AgendaCard from "../components/agenda/agendaCard";
import { PlusIcon } from "@radix-ui/react-icons";
import { Button } from "../components/ui/button";
import { Dialog, DialogTrigger } from "../components/ui/dialog";
import { CalendarSide } from "../components/agenda/calendar-side";
import { useState } from "react";
import { addDays } from "date-fns";

function Agenda() {
  const [date, setDate] = useState({
    from: addDays(new Date(), -3),
    to: new Date(),
  });
  return (
    <>
      <Sidebar />
      <Time />
      <div className="ml-[250px] flex h-screen font-montserrat">
        <div className="flex flex-col items-center justify-center bg-slate-100 w-[500px]">
          <CalendarSide date={date} setDate={setDate} />
        </div>
        <div className="flex flex-col mt-[10%] ml-10 w-[500px]">
          <div className="">
            <h1 className="text-[30px] font-bold relative">
              Your Agenda{" "}
              <Dialog>
                <DialogTrigger className="absolute right-10">
                  <Button
                    size="icon"
                    variant="outline"
                    className="rounded-full p-3"
                  >
                    <PlusIcon />
                  </Button>
                </DialogTrigger>
                <AddAgenda />
              </Dialog>
            </h1>
            <div className="mt-5">
              <AgendaCard/>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center ml-10">
          <h1 className="text-[15px] font-semibold mb-[28rem]">
            Filter Agenda by
          </h1>
          <h1 className="text-[15px] font-semibold mb-[10rem]">
            Important Notes
          </h1>
        </div>
      </div>
    </>
  );
}

export default Agenda;
