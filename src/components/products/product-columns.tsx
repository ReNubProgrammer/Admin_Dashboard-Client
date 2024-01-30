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

import { Pencil2Icon } from "@radix-ui/react-icons";
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
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const product = row.original;
      return (
        <Dialog>
          <DialogTrigger>
            <Button variant="outline" className="items-center">
              <Pencil2Icon width={30} height={30} className="pr-2" />
              See Details
            </Button>
          </DialogTrigger>
          <DialogContent className="font-montserrat">
            <DialogHeader className="w-auto">
              <DialogTitle className="text-[18px]">
                {product.productName}
              </DialogTitle>
              <DialogDescription className="text-[14px]">
                <h1 className="font-bold">Packages</h1>
                <p></p>
                <Table>
                  <TableCaption>A list of packages</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-bold">Name</TableHead>
                      <TableHead className="font-bold">Price</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {product.packages.map((p) => (
                      <TableRow key={p.id}>
                        <TableCell className="font-medium">{p.name}</TableCell>
                        <TableCell>{p.price}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const product = row.original;
      return (
        <Dialog>
          <DialogTrigger>
            <img src="./style/icon/edit.png" alt="" />
            Edit
          </DialogTrigger>
          <DialogContent className="font-montserrat max-w-[50%]">
            <DialogHeader className="w-auto">
              <DialogTitle className="text-[25px]">Product Details</DialogTitle>
              <DialogDescription className="text-[18px]">
                Want to add new product for your market?
                <br></br>
                Fill the credentials and make sure pay attention to the guide.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      );
    },
  },
];
