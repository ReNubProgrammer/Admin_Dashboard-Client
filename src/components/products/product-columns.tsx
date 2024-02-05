import { ColumnDef } from "@tanstack/react-table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import EditProduct from "./editProduct";
import { DotsVerticalIcon, Pencil2Icon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";

type Products = {
  id: string;
  productName: string;
  packages: [{ id: string; name: string; price: string }];
};

export const column: ColumnDef<Products>[] = [
  {
    accessorKey: "productName",
    header: "Product Name",
    cell: ({ row }) => <div>{row.getValue("productName")}</div>,
  },
  {
    accessorKey: "packages",
    header: "Package Name",
    cell: ({ row }) => {
      const packages = row.original;
      return (
        <div>
          {packages.packages.map((p) => (
            <div key={p.id}>
              <TableCell className="font-medium">{p.name}</TableCell>
            </div>
          ))}
        </div>
      );
    },
  },
  {
    accessorKey: "packages",
    header: "Package Price",
    cell: ({ row }) => {
      const packages = row.original;
      return (
        <div>
          {packages.packages.map((p) => (
            <div key={p.id}>
              <TableCell className="font-medium">{p.price}</TableCell>
            </div>
          ))}
        </div>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const product = row.original;
      return (
        <Dialog>
          <DialogTrigger>
            <Button variant="outline" className="items-center">
              <Pencil2Icon width={30} height={30} className="pr-2" />
              Edit Product
            </Button>
          </DialogTrigger>
          <EditProduct
            id={product.id}
            name={product.productName}
            packages={product.packages}
          />
        </Dialog>
      );
    },
  },
];
