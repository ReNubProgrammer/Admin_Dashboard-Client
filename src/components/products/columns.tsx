"use client";
import { ColumnDef } from "@tanstack/react-table";

export type Products = {
  id: string;
  productName: string;
  packages:[{
    name: string,
    price: string
  }]
};

export const columns: ColumnDef<Products>[] = [
  {
    accessorKey: "productName",
    header: "Name",
  },
  {
    accessorKey: 'packages',
    header: "Package Name",
  },
];
