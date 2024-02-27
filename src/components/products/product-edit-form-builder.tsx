"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { useToast } from "../ui/use-toast";
import * as z from "zod";
import {
  Form,
  FormMessage,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import httpProduct from "../../lib/apiProduct";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogTrigger } from "../ui/dialog";
import { TrashIcon } from "@radix-ui/react-icons";
import DeletePackage from "./deletePackage";
import { useState } from "react";

const packageSchema = z.object({
  name: z.string(),
  price: z.string(),
});

const formSchema = z.object({
  productName: z
    .string()
    .min(3, { message: "Product Name must be at least 3 characters" })
    .max(20, { message: "Product Name too long" }),
  packages: z.array(packageSchema),
});

export default function EditProductForm({ id, packages, prodName }) {
  const { toast } = useToast();
  const [value, setValue] = useState();
  const handleChange = event => {
    setValue(event.target.value);
  };
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productName: "",
      packages: [
        {
          name: "",
          price: "",
        },
      ],
    },
  });

  const { control } = form;
  const { fields, append, remove } = useFieldArray({
    name: "packages",
    control,
    rules: {
      required: "Please append at least 1 item",
    },
  });

  const navigate = useNavigate();

  async function OnSubmit(values: z.infer<typeof formSchema>) {
    console.log(id)
    await httpProduct
      .patch(`/update/${id}`, { data: values })
      .then(() => {
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
          name={prodName}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product Name</FormLabel>
              <FormControl>
                <Input onChange={handleChange} value={prodName} />
              </FormControl>
              <FormMessage></FormMessage>
            </FormItem>
          )}
        />
        {packages.map((p) => {
          const pName = p.name;
          const pPrice = p.price;
          return (
            <section className="flex items-end"key={p.id}>
              <FormField
                name={p.name}
                render={({ field }) => (
                  <FormItem className="pr-4">
                    <FormLabel>Package Name</FormLabel>
                    <FormControl>
                      <Input defaultValue={pName} />
                    </FormControl>
                    <FormMessage></FormMessage>
                  </FormItem>
                )}
              />
              <FormField
                name={p.price}
                render={({ field }) => (
                  <FormItem className="pr-4">
                    <FormLabel>Price</FormLabel>
                    <FormControl>
                      <Input defaultValue={pPrice} />
                    </FormControl>
                    <FormMessage></FormMessage>
                  </FormItem>
                )}
              />
              <Dialog>
                <DialogTrigger>
                  <Button>
                    <TrashIcon />
                  </Button>
                </DialogTrigger>
                {DeletePackage()}
              </Dialog>
            </section>
          );
        })}
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
                <TrashIcon />
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
        <Button type="submit">Update</Button>
      </form>
    </Form>
  );
}
