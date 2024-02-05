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

type Teams = {
  id: string;
  name: string;
  initial: string;
  regional: string;
  nomor: string;
  bank: string;
  nobank: string;
  order: [
    {
      id: string;
      date: number;
      customer_name: string;
      product: { productName: string };
    }
  ];
};

export const column: ColumnDef<Teams>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => <div>{row.getValue("name")}</div>,
  },
  {
    accessorKey: "initial",
    header: "Initial",
    cell: ({ row }) => <div>{row.getValue("initial")}</div>,
  },
  {
    accessorKey: "regional",
    header: "Regional",
    cell: ({ row }) => <div>{row.getValue("regional")}</div>,
  },
  {
    accessorKey: "nomor",
    header: "Phone Number",
    cell: ({ row }) => <div>{row.getValue("nomor")}</div>,
  },
  {
    accessorKey: "bank",
    header: "Bank",
    cell: ({ row }) => <div>{row.getValue("bank")}</div>,
  },
  {
    accessorKey: "nobank",
    header: "Account Number",
    cell: ({ row }) => <div>{row.getValue("nobank")}</div>,
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const team = row.original;
      return (
        <Dialog>
          <DialogTrigger>
            <Button variant="outline" className="items-center">
              See Details
            </Button>
          </DialogTrigger>
          <DialogContent className="font-montserrat">
            <DialogHeader className="w-auto">
              <DialogTitle className="text-[18px]">{team.name}</DialogTitle>
              <DialogDescription className="text-[14px]">
                <h1 className="font-bold">Order List</h1>
                <p></p>
                <Table>
                  <TableCaption>A list of orders that your member assigned.</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-bold">Name</TableHead>
                      <TableHead className="font-bold">Price</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {team.order ? (
                      team.order.map((p) => (
                        <TableRow key={p.id}>
                          <TableCell className="font-medium">
                            {p.date}
                          </TableCell>
                          <TableCell>{p.customer_name}</TableCell>
                          <TableCell>{p.product.productName}</TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell
                         colSpan={100}
                         className="h-24 text-center">
                          No results.
                        </TableCell>
                      </TableRow>
                    )}
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
      return (
        <Dialog>
          <DialogTrigger>
            <Button variant="outline" className="items-center">
              <Pencil2Icon width={30} height={30} className="pr-2" />
              Edit Credentials
            </Button>
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
