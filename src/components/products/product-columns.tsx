import { ColumnDef } from "@tanstack/react-table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

import {
  Dialog,
  DialogTrigger,
} from "../ui/dialog";
import {
  TableCell,
} from "../ui/table";
import EditProduct from "./editProduct";
import ManagerPackage from "./managerPackage";
import DeleteProduct from "./deleteProduct";
import {
  Pencil2Icon,
  StackIcon,
  TrashIcon,
} from "@radix-ui/react-icons";
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
    cell: ({ row }) => <TableCell className="py-1">{row.getValue("productName")}</TableCell>,
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
              <TableCell className="font-medium py-1">{p.name}</TableCell>
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
              <TableCell className="font-medium py-1">{p.price}</TableCell>
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
        <section className="text-right">
          <Dialog>
            <DialogTrigger>
              <TooltipProvider>
                <Tooltip delayDuration={500}>
                  <TooltipTrigger>
                    <Button variant="ghost" className="items-center">
                      <StackIcon width={20} height={20} />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Package Manager</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </DialogTrigger>
            <ManagerPackage name={product.productName} prodId={product.id} packages={product.packages}/>
          </Dialog>
          <Dialog>
            <DialogTrigger>
              <TooltipProvider>
                <Tooltip delayDuration={500}>
                  <TooltipTrigger>
                    <Button variant="ghost" className="items-center">
                      <Pencil2Icon width={20} height={20} />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Edit Product</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </DialogTrigger>
            <EditProduct
              id={product.id}
              name={product.productName}
              packages={product.packages}
            />
          </Dialog>
          <Dialog>
            <DialogTrigger>
              <TooltipProvider>
                <Tooltip delayDuration={500}>
                  <TooltipTrigger>
                    <Button variant="ghost" className="items-center">
                      <TrashIcon width={20} height={20} />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Delete Product</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </DialogTrigger>
            <DeleteProduct prodName={product.productName} prodId={product.id} />
          </Dialog>
        </section>
      );
    },
  },
];
