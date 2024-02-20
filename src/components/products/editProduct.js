import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

import EditProductForm from "./product-edit-form-builder";

function EditProduct({id, name, packages}) {
  return (
    <DialogContent className="font-montserrat max-w-[40%]">
      <DialogHeader className="w-auto">
        <DialogTitle className="text-[25px]">
          Edit {name}
        </DialogTitle>
        <DialogDescription className="text-[18px]">
          Want to edit product for your market?
          <br></br>
          Edit the credentials and make sure pay attention to the guide.
        </DialogDescription>
      </DialogHeader>
      <EditProductForm id={id} packages={packages} prodName={name}/>
    </DialogContent>
  );
}

export default EditProduct;
