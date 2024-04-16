"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useToast } from "../ui/use-toast";
import { format } from "date-fns";
import { cn } from "../../lib/utils";
import * as z from "zod";
import {
  Form,
  FormMessage,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import httpAgenda from "../../lib/apiAgenda";
import Swal from "sweetalert2";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Calendar } from "../ui/calendar";
import { ChangeEventHandler, useState } from "react";
import { Textarea } from "../ui/textarea";

export default function AgendaForm() {

  const [selectedStart, setSelectedStart] = useState<Date>();
  const [selectedEnd, setSelectedEnd] = useState<Date>();
  const [mode, setMode] = useState<number>();
  const [timeValue, setTimeValue] = useState<string>("00:00");

  const handleTimeChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (mode === 1) {
      const time = e.target.value;
      const [hours, minutes] = time.split(":").map((str) => parseInt(str, 10));
      const newSelectedDate = new Date(
        selectedStart.getFullYear(),
        selectedStart.getMonth(),
        selectedStart.getDate(),
        hours,
        minutes
      );
      setSelectedStart(newSelectedDate);
      setTimeValue(time);
    }
    else if (mode === 2) {
      const time = e.target.value;
      const [hours, minutes] = time.split(":").map((str) => parseInt(str, 10));
      const newSelectedDate = new Date(
        selectedEnd.getFullYear(),
        selectedEnd.getMonth(),
        selectedEnd.getDate(),
        hours,
        minutes
      );
      setSelectedEnd(newSelectedDate);
      setTimeValue(time);
    }
    else {
      setTimeValue("00:00");
      return;
    };
  };

  const handleDaySelect = (date: Date) => {
    if (!timeValue || !date) {
      setSelectedStart(date);
      setSelectedEnd(date);
      return;
    }
    if (mode === 1) {
      const [hours, minutes] = timeValue
        .split(":")
        .map((str) => parseInt(str, 10));
      const newDate = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        hours,
        minutes
      );
      setSelectedStart(newDate);
    }
    else if (mode === 2) {
      const [hours, minutes] = timeValue
        .split(":")
        .map((str) => parseInt(str, 10));
      const newDate = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        hours,
        minutes
      );
      setSelectedEnd(newDate);
    } else {
      setSelectedStart(date);
      setSelectedEnd(date);
      return;
    }
  };

  const formSchema = z.object({
    startDate: z.custom<Date>(),
    endDate: z.custom<Date>(),
    title: z
      .string()
      .min(5, { message: "Transaction name must be at least 5 characters" }),
    subtitle: z.string(),
    description: z
      .string()
      .min(10, { message: "Description must be 15 characters minimum" })
      .max(160, {
        message: "Description must not be longer than 160 characters.",
      }),
  });
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function OnSubmit(values: z.infer<typeof formSchema>) {
    values.startDate = selectedStart;
    values.endDate = selectedEnd;
    toast({
      title: "You submitted the following values:",
      description: (
        <>
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">
              {JSON.stringify(values, null, 2)}
            </code>
            <br/>
            <code className="text-white">
              {format(selectedStart, "PPp")}, {format(selectedEnd,"PPp")}
            </code>
          </pre>
        </>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(OnSubmit)} className="space-y-8">
        <div className="flex gap-4">
          <FormField
            control={form.control}
            name="startDate"
            render={() => (
              <FormItem className="flex flex-col">
                <FormLabel>Start Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn("w-[240px] pl-3 text-left font-normal")}
                        onClick={()=> setMode(1)}
                      >
                        {selectedStart ? (
                          format(selectedStart, "PPp")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent
                    className="w-auto p-0 font-montserrat"
                    align="start"
                  >
                    <Calendar
                      mode="single"
                      selected={selectedStart}
                      onSelect={handleDaySelect}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      footer={
                        <>
                          <p className="text-[0.8rem]">
                            Pick a time:{" "}
                            <Input
                              className="w-fit"
                              type="time"
                              value={timeValue}
                              onChange={handleTimeChange}
                            />
                          </p>
                        </>
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormDescription>Date of agenda</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="endDate"
            render={() => (
              <FormItem className="flex flex-col">
                <FormLabel>End Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn("w-[240px] pl-3 text-left font-normal")}
                        onClick={()=> setMode(2)}
                      >
                        {selectedEnd ? (
                          format(selectedEnd, "PPp")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent
                    className="w-auto p-0 font-montserrat"
                    align="start"
                  >
                    <Calendar
                      mode="single"
                      selected={selectedEnd}
                      onSelect={handleDaySelect}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      footer={
                        <>
                          <p className="text-[0.8rem]">
                            Pick a time:{" "}
                            <Input
                              className="w-fit"
                              type="time"
                              value={timeValue}
                              onChange={handleTimeChange}
                            />
                          </p>
                        </>
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormDescription>Date of agenda</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input
                  placeholder="Year Book SMA Nusa Bangsa"
                  {...field}
                  required
                />
              </FormControl>
              <FormMessage></FormMessage>
              <FormDescription>Your agenda title</FormDescription>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subtitle"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sub Title</FormLabel>
              <FormControl>
                <Input placeholder="Technical Meeting" {...field} required />
              </FormControl>
              <FormMessage></FormMessage>
              <FormDescription>
                Your agenda subtitle or can be fill with activity type
              </FormDescription>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="pr-4">
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell a little bit about your agenda"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage></FormMessage>
              <FormDescription>Your agenda description</FormDescription>
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
