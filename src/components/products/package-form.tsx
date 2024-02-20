"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
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
import httpProduct from "../../lib/apiProduct";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { DialogClose } from "../ui/dialog";
import { TrashIcon } from "@radix-ui/react-icons";

const formSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Product Name must be at least 3 characters" })
    .max(20, { message: "Product Name too long" }),
  price: z.string(),
});

export default function ProductForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      price: "",
    },
  });
  const { control } = form;

  const navigate = useNavigate();

  async function OnSubmit(values: z.infer<typeof formSchema>) {
    await httpProduct
      .post("/new", { data: values })
      .then((response) => {
        let timerInterval;
        Swal.fire({
          icon: "success",
          title: "Product Registered!",
          html: "You will be redirect to product list",
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
          navigate("/product");
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
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product Name</FormLabel>
              <FormControl>
                <Input placeholder="Teh Celup Anggrboda" {...field} required />
              </FormControl>
              <FormMessage></FormMessage>
              <FormDescription>Tes Form</FormDescription>
            </FormItem>
          )}
        />
        
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
