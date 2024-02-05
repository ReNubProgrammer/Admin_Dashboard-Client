import { DialogClose } from "@radix-ui/react-dialog";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

import ProductForm from './product-form-builder'

function AddProduct() {
  return (
      <DialogContent className="font-montserrat max-w-[50%]">
        <DialogHeader className="w-auto">
          <DialogTitle className="text-[25px]">Add New Product</DialogTitle>
          <DialogDescription className="text-[18px]">
            Want to add new product for your market?
            <br></br>
            Fill the credentials and make sure pay attention to the guide.
          </DialogDescription>
        </DialogHeader>
        <ProductForm/>
      </DialogContent>
  );
}

export default AddProduct;
