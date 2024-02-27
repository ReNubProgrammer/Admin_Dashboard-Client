import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import DeletePackage from "./deletePackage";
import { TrashIcon, ReloadIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";

function ManagePackage({ name, prodId, packages }) {
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
