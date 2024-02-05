"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useToast } from "../ui/use-toast";
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
import httpTeam from "../../lib/apiTeam";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters" })
    .max(20, { message: "Name too long" }),
  initial: z
    .string()
    .min(1, { message: "Initial must be at least 3 characters" })
    .max(3, { message: "Initial too long" }),
  regional: z.string(),
  nomor: z
    .string()
    .min(10, { message: "Phone Number must be at least 10 numbers" })
    .max(13, { message: "Invalid phone number" }),
  bank: z
    .string()
    .min(3, { message: "Bank Name must be at least 3 characters" }),
  nobank: z
    .string()
    .min(5, { message: "Bank Account Number must be at least 5 numbers" })
    .max(16, { message: "Invalid account number" }),
});

export default function TeamForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      initial: "",
      regional: "",
      nomor: "",
      bank: "",
      nobank: "",
    },
  });

  const navigate = useNavigate();

  async function OnSubmit(values: z.infer<typeof formSchema>) {
    await httpTeam
      .post("/new", { data: values })
      .then((response) => {
        let timerInterval;
        Swal.fire({
          icon: "success",
          title: "Member Registered!",
          html: "You will be redirect to your member list",
          timer: 2000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
          },
          willClose: () => {
            clearInterval(timerInterval);
          },
        }).then(() => {
          navigate("/team");
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
      <form onSubmit={form.handleSubmit(OnSubmit)} className=" space-y-2">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Faris" {...field} required />
              </FormControl>
              <FormMessage></FormMessage>
              <FormDescription>
                Fill this with your name member team
              </FormDescription>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="initial"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Initial Name</FormLabel>
              <FormControl>
                <Input placeholder="FA" {...field} required />
              </FormControl>
              <FormMessage></FormMessage>
              <FormDescription>
                Fill this with your initial member
              </FormDescription>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="regional"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Regional</FormLabel>
              <FormControl>
                <Input placeholder="Jakarta" {...field} required />
              </FormControl>
              <FormMessage></FormMessage>
              <FormDescription>Represent your member region</FormDescription>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="nomor"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="081xxxxxx"
                  {...field}
                  required
                />
              </FormControl>
              <FormMessage></FormMessage>
              <FormDescription>Member phone number</FormDescription>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bank"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bank Name</FormLabel>
              <FormControl>
                <Input placeholder="Bank Uang Indonesia" {...field} required />
              </FormControl>
              <FormMessage></FormMessage>
              <FormDescription>
                Bank name account of your member
              </FormDescription>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="nobank"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bank Account Number</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="0129xxxxx"
                  {...field}
                  required
                />
              </FormControl>
              <FormMessage></FormMessage>
              <FormDescription>Bank account number</FormDescription>
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
