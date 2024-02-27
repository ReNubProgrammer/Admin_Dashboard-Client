"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "../lib/utils"
import { Button } from "./ui/button"
import { Calendar } from "./ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover"

export function DatePickerWithRange({date, setDate}) {
  return (
    <div className={cn("flex")}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-max" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "d MMM yyyy")} -{" "}
                  {format(date.to, "d MMM yyyy")}
                </>
              ) : (
                format(date.from, "d MMM yyyy")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 font-montserrat" align="start">
          <Calendar
            initialFocus
            mode="range"
            min={3}
            max={7}
            numberOfMonths={2}
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            disabled={(date) =>
              date > new Date() || date < new Date("1900-01-01")
            }
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
