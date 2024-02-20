import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import {
  Form,
  FormMessage,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "../ui/form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "../ui/dialog";
import { useToast } from "../ui/use-toast";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import httpProduct from "../../lib/apiProduct";
import DeletePackage from "./deletePackage";
import { TrashIcon, ReloadIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";

function ManagePackage({ name, prodId, packages }) {
  async function OnRefresh() {
    await httpProduct.get;
  }

  return (
    <DialogContent className="font-montserrat max-w-[30%]">
      <DialogHeader className="w-auto">
        <DialogTitle className="text-[25px]">
          Packages Manager of {name}
        </DialogTitle>
        <DialogDescription className="text-[18px]">
          This section is used to edit or add package for this product.
        </DialogDescription>
      </DialogHeader>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="">Package Name</TableHead>
            <TableHead className="">Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {packages.map((pack) => {
            return (
              <TableRow>
                <TableCell className="font-medium">{pack.name}</TableCell>
                <TableCell className="">{pack.price}</TableCell>
                <TableCell className="text-right">
                  <Dialog>
                    <DialogTrigger>
                      <Button>
                        <TrashIcon />
                      </Button>
                    </DialogTrigger>
                    <DeletePackage
                      packName={pack.name}
                      prodId={prodId}
                      packId={pack.id}
                    />
                  </Dialog>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <div className="text-right">
        <Popover>
          <PopoverTrigger>
            <Button variant="outline" className="mx-2">
              Add New Package
            </Button>
          </PopoverTrigger>
          <PopoverContent side="top">

          </PopoverContent>
        </Popover>
        <Button variant="secondary">
          <ReloadIcon />
        </Button>
      </div>
    </DialogContent>
  );
}

export default ManagePackage;
