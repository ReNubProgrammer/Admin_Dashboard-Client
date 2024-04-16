"use client";
import { Calendar } from "./calendar-component";

export function CalendarSide({ date, setDate }) {
  return (
    <>
      <Calendar
        mode="range" 
        max={14}
        numberOfMonths={1}
        defaultMonth={date?.from}
        selected={date}
        onSelect={setDate}
      />

      <div className="border border-t-1 border-gray-300 w-[70%] mt-3"></div>
      <div className="text-[15px] mt-2 font-medium text-gray-500">
        Choose date to see your agenda
      </div>
    </>
  );
}
