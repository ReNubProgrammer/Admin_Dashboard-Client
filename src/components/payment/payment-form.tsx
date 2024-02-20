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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import httpPayment from "../../lib/apiPayment";
import Swal from "sweetalert2";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Calendar } from "../ui/calendar";

const formSchema = z.object({
  transaction: z
    .string()
    .min(5, { message: "Transaction name must be at least 5 characters" }),
  type: z.string(),
  amount: z.string().min(3, { message: "Amount atleast 100" }),
  destination: z
    .string()
    .min(3, { message: "Destination of transaction must be clear" })
    .max(15, { message: "Product Name too long" }),
  date: z.date({ required_error: "Date is required." }),
});

export default function PaymentForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function OnSubmit(values: z.infer<typeof formSchema>) {
    await httpPayment
      .post("/new", { data: values })
      .then((response) => {
        let timerInterval;
        Swal.fire({
          icon: "success",
          title: "Transaction Registered!",
          html: "This page will refresh!",
          timer: 2000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
          },
          willClose: () => {
            clearInterval(timerInterval);
          },
        }).then(() => {
          window.location.reload();
        });
      })
      .catch((error) => {
        const msg = error.response.status;
        toast({
          variant: "destructive",
          title: `Something went wrong (${msg})`,
          description: `Please Try Again Later`,
          duration: 5000,
        });
      });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(OnSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="transaction"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Transaction Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Wedding Yuliana Rahmad"
                  {...field}
                  required
                />
              </FormControl>
              <FormMessage></FormMessage>
              <FormDescription>Name of your transaction</FormDescription>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a type of your transaction" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="income">Income</SelectItem>
                  <SelectItem value="expense">Expense</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>Type of your transaction</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem className="pr-4">
              <FormLabel>Amount</FormLabel>
              <FormControl>
                <Input placeholder="150000" type="number" {...field} required />
              </FormControl>
              <FormMessage></FormMessage>
              <FormDescription>
                Amount of your transaction in Rupiah
              </FormDescription>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="destination"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Destination</FormLabel>
              <FormControl>
                <Input placeholder="BCA Yuliana" {...field} required />
              </FormControl>
              <FormMessage></FormMessage>
              <FormDescription>
                Name of your destination account transaction
              </FormDescription>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "d MMMM yyyy")
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
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>
                Your date of transaction was made.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
