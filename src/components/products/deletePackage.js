import { DialogClose } from "@radix-ui/react-dialog";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

function DeletePackage() {
  return (
      <DialogContent className="font-montserrat">
        <DialogHeader className="w-auto">
          <DialogTitle className="text-[25px]">Delete Package</DialogTitle>
          <DialogDescription className="text-[18px]">
            Want to delete this package?
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
  );
}

export default DeletePackage;
