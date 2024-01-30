"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { useToast } from "../ui/use-toast";
import * as z from "zod";
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "../ui/command"
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
import { useEffect, useState } from "react";
import httpProduct from "../../lib/apiProduct";

const formSchema = z.object({
  date: z.string(),
  customer_name: z.string().min(3, { message: "Product Name must be at least 3 characters" })
  .max(20, { message: "Product Name too long" }),
  product: z.string(),
  book_time: z.string(),
  status: z.string(),
  fgInitial: z.array(z.object({initials: z.string().max(5, {message:"Initial"})})),
  vgInitial: z.array(z.string().max(5)),
});

export default function OrderForm() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productName: "",
    },
  });

  const { register, control } = form;
  const { fields, append, remove } = useFieldArray(
    {
    name: "fgInitial",
    control,
    });

  async function OnSubmit(values: z.infer<typeof formSchema>) {
    try {
      await httpProduct.post("/new", { data: values }).then((response) => {
        if (response.status === 200) {
          console.log(response.statusText);
        } else {
          console.log(response.statusText);
        }
      });
      console.log(values);
    } catch (error) {}
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(OnSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="productName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product Name</FormLabel>
              <FormControl>
                <Input placeholder="Nganu" {...field} />
              </FormControl>
              <FormMessage></FormMessage>
              <FormDescription>Tes Form</FormDescription>
            </FormItem>
          )}
        />

        {fields.map((field, index) => {
          return (
            <section className="flex items-end" key={field.id}>
              <FormField
                control={form.control}
                name={`packages.${index}.name`}
                render={({ field }) => (
                  <FormItem className="pr-4">
                    <FormLabel>Package Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage></FormMessage>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`packages.${index}.price`}
                render={({ field }) => (
                  <FormItem className="pr-4">
                    <FormLabel>Price</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage></FormMessage>
                  </FormItem>
                )}
              />
              <Button type="button" onClick={() => remove(index)}>
                Delete
              </Button>
            </section>
          );
        })}
        <Button
          className="mr-5"
          type="button"
          variant="outline"
          onClick={() => {
            append({
              name: "",
              price: "",
            });
          }}
        >
          Add Package
        </Button>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
