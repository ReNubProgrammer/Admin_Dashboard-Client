"use client";
import { ColumnDef } from "@tanstack/react-table";

export type Orders = {
  id: string;
  date: number;
  customer_name: string;
  email: string;
  gender: string;
  productsName: string;
  package: string;
  time: string;
  fg: string;
  vg: string;
  status: "pending" | "processing" | "success" | "cancelled";
};

export const columns: ColumnDef<Orders>[] = [
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "customer_name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "gender",
    header: "Gender",
  },
  {
    accessorKey: "productsName",
    header: "Produk",
  },
  {
    accessorKey: "package",
    header: "Paket",
  },
  {
    accessorKey: "jam",
    header: "Jam Book",
  },
  {
    accessorKey: "fg",
    header: "FG",
  },
  {
    accessorKey: "vg",
    header: "VG",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
];
