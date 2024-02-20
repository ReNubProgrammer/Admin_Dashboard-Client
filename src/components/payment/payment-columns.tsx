import { ColumnDef } from "@tanstack/react-table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Dialog, DialogTrigger } from "../ui/dialog";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { format } from "date-fns";
import { TableCell } from "../ui/table";
import DetailsPayment from "./detailsPayment";
import DeletePayment from "./deletePayment";
import { DotsHorizontalIcon, TrashIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";

type Payments = {
  id: string;
  createdAt: string;
  type: string;
  date: string;
  transaction: string;
  amount: string;
  destination: string;
};

export const column: ColumnDef<Payments>[] = [
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => (
      <TableCell className="py-1">{format(row.getValue("date"), "d MMMM yyyy")}</TableCell>
    ),
  },
  {
    accessorKey: "transaction",
    header: "Transaction Name",
    cell: ({ row }) => (
      <TableCell className="py-1">{row.getValue("transaction")}</TableCell>
    ),
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => (
      <TableCell className="py-1">{row.getValue("amount")}</TableCell>
    ),
  },
  {
    accessorKey: "destination",
    header: "Destination",
    cell: ({ row }) => (
      <TableCell className="py-1">{row.getValue("destination")}</TableCell>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;
      return (
        <section className="text-right">
          <Popover>
            <PopoverTrigger>
              <TooltipProvider>
                <Tooltip delayDuration={300}>
                  <TooltipTrigger>
                    <Button variant="ghost" className="items-center">
                      <DotsHorizontalIcon width={20} height={20} />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Details</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </PopoverTrigger>
            <PopoverContent>
              <b>Created At:</b> <br />
              {format(payment.createdAt, "p d MMMM yyyy")}
            </PopoverContent>
          </Popover>
          <Dialog>
            <DialogTrigger>
              <TooltipProvider>
                <Tooltip delayDuration={300}>
                  <TooltipTrigger>
                    <Button variant="ghost" className="items-center">
                      <TrashIcon width={20} height={20} />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Delete Payment</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </DialogTrigger>
            <DeletePayment payId={payment.id} payName={payment.transaction} />
          </Dialog>
        </section>
      );
    },
  },
];
