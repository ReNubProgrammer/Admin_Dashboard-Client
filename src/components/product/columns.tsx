"use client";
import { ColumnDef } from "@tanstack/react-table";

export type Orders = {
  id: string;
  productName: string;
  packages:[]
};

export const columns: ColumnDef<Orders>[] = [
  {
    accessorKey: "productName",
    header: "Name",
  },
  {
    accessorKey: "packages",
    header: "Paket",
  },
];
